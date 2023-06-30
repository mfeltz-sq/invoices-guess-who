import config from 'invoices-guess-who/config/environment';

let loadedPeople = null

const getPeople = async () => {
  if (loadedPeople) {
    return loadedPeople
  }
  const response = await fetch(`${config.rootURL}assets/guesses.json`)
  loadedPeople = (await response.json()).map((person) => {
    return {
      ...person,
      img: `${config.rootURL}${person.photoFilePath}`
    }
  })
  loadedPeople.sort((left, right) => {
      if (left.firstName < right.firstName) {
        return -1
      } else if (
        left.firstName > right.firstName) {
        return 1;
      }
      return 0;
    }
  )

  return loadedPeople
}
export default getPeople
