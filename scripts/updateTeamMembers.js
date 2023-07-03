#!/usr/bin/env node

const axios = require('axios')
const fs = require('fs').promises
const path = require("path");

/**
 * The data for an existing employee.
 *
 * @typedef {Object} Employee
 * @property {string} username - The username for this employee.
 * @property {string} organization - The team this employee belongs to.
 * @property {string} primary_photo - The path to the primary photo of this employee. Does not include the host.
 * @property {string} authoritative_photo - The path to the authoritive photo of this employee. Does not include the host.
 * @property {string} preferred_first_name - The preferred first name of the employee
 * @property {string} last_name - The last name of the employee
 */

/**
 * The data for a potential guess.
 *
 * @typedef {Object} Guess
 * @property {string} photoFilePath - The relative file path for a photo of this guess.
 * @property {string} firstName - The preferred first name of the guess.
 * @property {string} lastName - The last name of the guess.
 */


const DEFAULT_ORGANIZATIONS = ["invoices", "billpay", "pmm - invoices", "cpos ds - invoices"]
const IGNORED_USERNAMES = ['cosgrove']
const API_HOST = 'https://my.sqcorp.co'
const ROOT_DIRECTORY = path.resolve(__dirname, '..')
const PUBLIC_DIRECTORY = path.resolve(ROOT_DIRECTORY, 'public')
const ASSET_DIRECTORY = path.resolve(PUBLIC_DIRECTORY, 'assets')
const IMAGES_DIRECTORY = path.resolve(ASSET_DIRECTORY, 'images')
const API_DELAY_MILLIS = 200
/**
 * Terminate this program unsuccessfully and log an error message.
 * @param message {string}
 * @param error {Error | undefined} An optional error to show
 * @return {never}
 */
const bail = (message, error = undefined) => {
  console.error(message);
  if (error) {
    console.error(error)
  }
  process.exit(1)
}

const deleteExistingImages = async () => {
  try {
    await fs.rm(IMAGES_DIRECTORY, {recursive: true, force: true})
    await fs.mkdir(IMAGES_DIRECTORY);
    console.log('Removed existing images')
  } catch (e) {
    bail('Failed to remove existing images', e)
  }
}

/**
 * The response from fetching a page of employees
 *
 * @typedef {Object} EmployeeResponse
 * @property {Employee[]} employees - The employees that were fetched.
 * @property {number} page - The page of employees that were fetched.
 * @property {string} totalPages - The total pages that can be fetched.
 */

/**
 * Fetch a page from the list of all employees
 *
 * @param pageToFetch {number}
 * @returns {Promise<EmployeeResponse>}
 */
const fetchEmployeePage = async (pageToFetch) => {
  try {
    const response = await axios.get(`${API_HOST}/people/api/all.json?page=${pageToFetch}`)

    const employees = response.data
    const page = response.headers.get('X-Page')
    const totalPages = response.headers.get('X-Pages')

    console.log(`Fetched employee page ${page}`)

    return {page, totalPages, employees}
  } catch (e) {
    bail(`Failed to fetch employee page ${pageToFetch}: ${e.message}`, e)
  }
}


/**
 * Fetch all employees
 * @returns {Promise<Employee[]>}
 */
const fetchEmployees = async () => {
  let page = 1;
  const {totalPages, employees} = await fetchEmployeePage(page)
  await apiDelay()

  while (page < totalPages) {
    page += 1
    const {employees: newEmployees} = await fetchEmployeePage(page)
    employees.push(...newEmployees)
    await apiDelay()
  }

  return employees
}

/**
 * Remove a prefix from a string, if it exists.
 *
 * @param prefix {string} the prefix to remove, if it exists
 * @param value {string} the string to remove the prefix from
 * @returns {string}
 */
const removePrefix = (prefix, value) => {
  if (value.startsWith(prefix)) {
    return value.replace(prefix, '')
  }
  return value
}

/**
 * Fixes the URL gives for photos from the API to be usable.
 *
 * Currently, the API is giving us back URLs that look like:
 *
 * ```
 * api/attachments/SOME_KEY/image?abunchofhtmllookingstuffhere
 * ```
 *
 * Everything after the `?` is useless garbage that looks like HTML and fails the request. This will take URLs in that
 * scheme, extract the useful portion, and prepend the {@link API_HOST} as well, if it's not there.
 *
 * This will no-op if the URL is already in a good form.
 *
 * @param url {string} an {@link Employee}'s primary photo URL.
 */
const fixPhotoUrl = (url) => {
  let newUrl = url
  const trueUrlPattern = /api\/attachments\/.+\/image/
  const trueUrlMatch = newUrl.match(trueUrlPattern)

  if (trueUrlMatch) {
    newUrl = trueUrlMatch[0]
  }

  if (!newUrl.includes(API_HOST)) {
    newUrl = `${API_HOST}/${removePrefix('/', newUrl)}`
  }

  return newUrl
}

/**
 * Gets the file path on disk for the photo for an employee.
 * @param employee {Employee}
 * @returns {string}
 */
const getPhotoFilePath = (employee) => {
  return path.resolve(IMAGES_DIRECTORY, `${employee.username}.jpg`)
}

/**
 * Download the primary photo for an employee
 * @param employee {Employee}
 * @return {Promise<void>}
 */
const downloadPhoto = async (employee) => {
  const url = fixPhotoUrl(employee.primary_photo ?? employee.authoritative_photo)
  console.log(`Downloading photo for ${employee.username} from ${url}`)
  try {
    const buffer = (await axios.get(url, {responseType: "arraybuffer"})).data
    const filePath = getPhotoFilePath(employee);
    await fs.writeFile(filePath, buffer)
    console.log(`Writing ${employee.username} to ${filePath}`)
  } catch (e) {
    bail(`Failed to download and save photo for employee @${employee.username} from ${url}: ${e.message}`)
  }
}

/**
 * Save the default photo image to disk for this employee.
 * @param employee {Employee}
 * @return {Promise<void>}
 */
const saveDefaultPhoto = async (employee) => {
  console.log(`Saving default photo for ${employee.username} as they have no set photo`)
  try {
    const filePath = getPhotoFilePath(employee);
    const buffer = await fs.readFile(path.resolve(__dirname, 'default_image.jpg'));
    await fs.writeFile(filePath, buffer)
    console.log(`Writing ${employee.username} to ${filePath}`)
  } catch (e) {
    bail(`Failed to save default photo for employee @${employee.username}: ${e.message}`)
  }
}

/**
 * Given an employee, converts it into a format that should be written to disk.
 *
 * This matches the format that the API uses, just without the extra fields we don't care about.
 * @param employee {Employee}
 * @returns {Guess}
 */
const toGuess = (employee) => {
  return {
    firstName: employee.preferred_first_name,
    lastName: employee.last_name,
    photoFilePath: path.relative(PUBLIC_DIRECTORY, getPhotoFilePath(employee))
  }
}

/**
 * Write the guesses (aka Employees that can be selected in the game) to the JSON file needed to run the game.
 *
 * @param employees {Employee[]}
 * @param organizations {string[]}
 * @return {Promise<void>}
 */
const writeGuesses = async (employees, organizations) => {
  const filePath = path.resolve(ASSET_DIRECTORY, 'guesses.json')
  try {
    await fs.writeFile(filePath, JSON.stringify(employees.map(toGuess), null, 2));
  } catch (e) {
    bail("Failed to write guesses to file", e)
  }

  console.log(`Wrote employees that work under ${organizations} to ${filePath}`)
}

const apiDelay = async () => {
  return new Promise((resolve) => {
    setTimeout(resolve, API_DELAY_MILLIS)
  })
}

const start = async () => {
  const organizations = DEFAULT_ORGANIZATIONS
  const usableEmployees = (await fetchEmployees())
    .filter((employee) => organizations.includes(employee.organization.toLowerCase()))
    .filter((employee) => !IGNORED_USERNAMES.includes(employee.username))

  await deleteExistingImages()

  for (const employee of usableEmployees) {
    if (employee.primary_photo ?? employee.authoritative_photo) {
      await downloadPhoto(employee)
    } else {
      await saveDefaultPhoto(employee)
    }
    await apiDelay()
  }

  await writeGuesses(usableEmployees, organizations)

  console.log("Finished!")
}

start();
