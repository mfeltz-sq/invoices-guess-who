"use strict"
function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}define("invoices-guess-who/app",["exports","invoices-guess-who/resolver","ember-load-initializers","invoices-guess-who/config/environment"],function(e,t,r,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var o=Ember.Application.extend({modulePrefix:n.default.modulePrefix,podModulePrefix:n.default.podModulePrefix,Resolver:t.default});(0,r.default)(o,n.default.modulePrefix)
var i=o
e.default=i}),define("invoices-guess-who/components/guessing-card",["exports","invoices-guess-who/utils/person-data"],function(e,t){function r(e){return e[Math.floor(Math.random()*e.length)]}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=Ember.Component.extend({classNames:["guessing-card"],init:function(){var e=this
this._super.apply(this,arguments),(0,t.default)().then(function(t){e.set("people",t),e.set("selectedPerson",r(t))})},selectedPerson:null,actions:{randomizePerson:function(){this.set("selectedPerson",r(this.get("people")))}}})
e.default=n}),define("invoices-guess-who/components/person-card",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Component.extend({classNames:["person-card"]})
e.default=t}),define("invoices-guess-who/components/person-grid",["exports","invoices-guess-who/utils/person-data"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=Ember.Component.extend({init:function(){var e=this
this._super.apply(this,arguments),(0,t.default)().then(function(t){e.set("people",t)})},classNames:["person-grid"],people:[]})
e.default=r}),define("invoices-guess-who/components/playing-card",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Component.extend({classNames:["playing-card"],classNameBindings:["isFlipped:playing-card--is-flipped"],isFlipped:!1,click:function(){this.toggleProperty("isFlipped")}})
e.default=t}),define("invoices-guess-who/controllers/gameboard",["exports"],function(e){var t,r
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n,o,i,a,s,u,l=Ember.Controller.extend((t=Ember._action,r={routerService:Ember.inject.service("router"),openPersonWindow:function(){var e=this.get("routerService").urlFor("your-card")
window.open(e,"your card","height=350,width=350")}},n=r,o="openPersonWindow",i=[t],a=Object.getOwnPropertyDescriptor(r,"openPersonWindow"),s=r,u={},Object.keys(a).forEach(function(e){u[e]=a[e]}),u.enumerable=!!u.enumerable,u.configurable=!!u.configurable,("value"in u||u.initializer)&&(u.writable=!0),u=i.slice().reverse().reduce(function(e,t){return t(n,o,e)||e},u),s&&void 0!==u.initializer&&(u.value=u.initializer?u.initializer.call(s):void 0,u.initializer=void 0),void 0===u.initializer&&(Object.defineProperty(n,o,u),u=null),r))
e.default=l}),define("invoices-guess-who/helpers/app-version",["exports","invoices-guess-who/config/environment","ember-cli-app-version/utils/regexp"],function(e,t,r){function n(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=t.default.APP.version,i=n.versionOnly||n.hideSha,a=n.shaOnly||n.hideVersion,s=null
return i&&(n.showExtended&&(s=o.match(r.versionExtendedRegExp)),s||(s=o.match(r.versionRegExp))),a&&(s=o.match(r.shaRegExp)),s?s[0]:o}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=n,e.default=void 0
var o=Ember.Helper.helper(n)
e.default=o}),define("invoices-guess-who/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=t.default
e.default=r}),define("invoices-guess-who/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=t.default
e.default=r}),define("invoices-guess-who/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","invoices-guess-who/config/environment"],function(e,t,r){var n,o
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r.default.APP&&(n=r.default.APP.name,o=r.default.APP.version)
var i={name:"App Version",initialize:(0,t.default)(n,o)}
e.default=i}),define("invoices-guess-who/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}
e.default=r}),define("invoices-guess-who/initializers/ember-data",["exports","ember-data/setup-container","ember-data"],function(e,t,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n={name:"ember-data",initialize:t.default}
e.default=n}),define("invoices-guess-who/initializers/export-application-global",["exports","invoices-guess-who/config/environment"],function(e,t){function r(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var r
if("undefined"!=typeof window)r=window
else if("undefined"!=typeof global)r=global
else{if("undefined"==typeof self)return
r=self}var n,o=t.default.exportApplicationGlobal
n="string"==typeof o?o:Ember.String.classify(t.default.modulePrefix),r[n]||(r[n]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete r[n]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,e.initialize=r
var n={name:"export-application-global",initialize:r}
e.default=n}),define("invoices-guess-who/instance-initializers/ember-data",["exports","ember-data/initialize-store-service"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r={name:"ember-data",initialize:t.default}
e.default=r}),define("invoices-guess-who/resolver",["exports","ember-resolver"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=t.default
e.default=r}),define("invoices-guess-who/router",["exports","invoices-guess-who/config/environment"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=Ember.Router.extend({location:t.default.locationType,rootURL:t.default.rootURL})
r.map(function(){this.route("gameboard",{path:"/"}),this.route("your-card")}),r.reopen({location:"hash"})
var n=r
e.default=n}),define("invoices-guess-who/routes/gameboard",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Route.extend({})
e.default=t}),define("invoices-guess-who/routes/your-card",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Route.extend({})
e.default=t}),define("invoices-guess-who/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("invoices-guess-who/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"L73yflts",block:'{"symbols":[],"statements":[[1,[22,"outlet"],false]],"hasEval":false}',meta:{moduleName:"invoices-guess-who/templates/application.hbs"}})
e.default=t}),define("invoices-guess-who/templates/components/guessing-card",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"18yNXMnH",block:'{"symbols":[],"statements":[[5,"person-card",[],[["@person"],[[23,0,["selectedPerson"]]]]],[0,"\\n"],[7,"div",true],[10,"class","flex-spacer"],[8],[9],[0,"\\n"],[7,"button",false],[12,"class","guessing-card__button"],[3,"action",[[23,0,[]],"randomizePerson"]],[8],[0,"Shuffle"],[9],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"invoices-guess-who/templates/components/guessing-card.hbs"}})
e.default=t}),define("invoices-guess-who/templates/components/person-card",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"UjdbWNMT",block:'{"symbols":[],"statements":[[7,"img",true],[10,"class","person-card__img"],[11,"src",[24,["person","img"]]],[8],[9],[0,"\\n"],[7,"p",true],[10,"class","person-card__name"],[8],[1,[24,["person","firstName"]],false],[0," "],[1,[24,["person","lastName"]],false],[9],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"invoices-guess-who/templates/components/person-card.hbs"}})
e.default=t}),define("invoices-guess-who/templates/components/person-grid",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"pUOjKVDj",block:'{"symbols":["person"],"statements":[[4,"each",[[23,0,["people"]]],null,{"statements":[[0,"  "],[5,"playing-card",[],[["@person"],[[23,1,[]]]]],[0,"\\n"]],"parameters":[1]},null]],"hasEval":false}',meta:{moduleName:"invoices-guess-who/templates/components/person-grid.hbs"}})
e.default=t}),define("invoices-guess-who/templates/components/playing-card",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"uu/vVgkk",block:'{"symbols":["@person"],"statements":[[7,"div",true],[8],[0,"\\n"],[4,"unless",[[23,0,["isFlipped"]]],null,{"statements":[[0,"      "],[5,"person-card",[],[["@person"],[[23,1,[]]]]],[0,"\\n"]],"parameters":[]},{"statements":[[0,"    "],[1,[23,1,["name"]],false],[0,"\\n"]],"parameters":[]}],[9],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"invoices-guess-who/templates/components/playing-card.hbs"}})
e.default=t}),define("invoices-guess-who/templates/gameboard",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"mjndCP+R",block:'{"symbols":[],"statements":[[7,"div",true],[10,"class","header-container"],[8],[0,"\\n  "],[7,"div",true],[10,"class","header-instructions"],[8],[0,"\\n    "],[7,"h1",true],[8],[0,"Invoices: Guess Who???"],[9],[0,"\\n    "],[7,"h2",true],[8],[0,"Goal: Guess the other player\'s Invoices team member before they guess yours!"],[9],[0,"\\n    "],[7,"ol",true],[8],[0,"\\n      "],[7,"li",true],[8],[0,"This is a 2 player game, have someone else pull up a board!"],[9],[0,"\\n      "],[7,"li",true],[8],[0,"Take turns asking yes or no questions to try and guess the other players card by process of elimination.\\n        "],[7,"ul",true],[8],[0,"\\n          "],[7,"li",true],[8],[0,"Ex. Is your team member from Canada?"],[9],[0,"\\n          "],[7,"li",true],[8],[0,"Ex. Is your team a mobile developer?"],[9],[0,"\\n        "],[9],[0,"\\n      "],[9],[0,"\\n      "],[7,"li",true],[8],[0,"Use your board to flip over the cards of team members that you can eliminate"],[9],[0,"\\n    "],[9],[0,"\\n  "],[9],[0,"\\n  "],[7,"div",true],[10,"class","get-person-button-container"],[8],[0,"\\n    "],[7,"button",false],[12,"class","get-person-button"],[3,"on",["click",[23,0,["openPersonWindow"]]]],[8],[0,"\\n      Get team member\\n    "],[9],[0,"\\n  "],[9],[0,"\\n"],[9],[0,"\\n\\n\\n"],[5,"person-grid",[],[[],[]]],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"invoices-guess-who/templates/gameboard.hbs"}})
e.default=t}),define("invoices-guess-who/templates/your-card",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"cQ43TSaA",block:'{"symbols":[],"statements":[[7,"p",true],[10,"class","guessing-card__text"],[8],[0,"Your team member is..."],[9],[0,"\\n"],[5,"guessing-card",[],[[],[]]]],"hasEval":false}',meta:{moduleName:"invoices-guess-who/templates/your-card.hbs"}})
e.default=t}),define("invoices-guess-who/utils/person-data",["exports","invoices-guess-who/config/environment"],function(e,t){function r(){r=function(){return e}
var e={},t=Object.prototype,n=t.hasOwnProperty,o=Object.defineProperty||function(e,t,r){e[t]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag"
function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(N){l=function(e,t,r){return e[t]=r}}function c(e,t,r,n){var i=t&&t.prototype instanceof p?t:p,a=Object.create(i.prototype),s=new E(n||[])
return o(a,"_invoke",{value:_(e,r,s)}),a}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(N){return{type:"throw",arg:N}}}e.wrap=c
var d={}
function p(){}function v(){}function h(){}var m={}
l(m,a,function(){return this})
var g=Object.getPrototypeOf,y=g&&g(g(M([])))
y&&y!==t&&n.call(y,a)&&(m=y)
var b=h.prototype=p.prototype=Object.create(m)
function w(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function x(e,t){var r
o(this,"_invoke",{value:function(o,i){function a(){return new t(function(r,a){(function r(o,i,a,s){var u=f(e[o],e,i)
if("throw"!==u.type){var l=u.arg,c=l.value
return c&&"object"==_typeof(c)&&n.call(c,"__await")?t.resolve(c.__await).then(function(e){r("next",e,a,s)},function(e){r("throw",e,a,s)}):t.resolve(c).then(function(e){l.value=e,a(l)},function(e){return r("throw",e,a,s)})}s(u.arg)})(o,i,r,a)})}return r=r?r.then(a,a):a()}})}function _(e,t,r){var n="suspendedStart"
return function(o,i){if("executing"===n)throw new Error("Generator is already running")
if("completed"===n){if("throw"===o)throw i
return L()}for(r.method=o,r.arg=i;;){var a=r.delegate
if(a){var s=P(a,r)
if(s){if(s===d)continue
return s}}if("next"===r.method)r.sent=r._sent=r.arg
else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg
r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg)
n="executing"
var u=f(e,t,r)
if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===d)continue
return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function P(e,t){var r=t.method,n=e.iterator[r]
if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,P(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d
var o=f(n,e.iterator,t.arg)
if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,d
var i=o.arg
return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function j(e){var t={tryLoc:e[0]}
1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{}
t.type="normal",delete t.arg,e.completion=t}function E(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function M(e){if(e){var t=e[a]
if(t)return t.call(e)
if("function"==typeof e.next)return e
if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t
return t.value=void 0,t.done=!0,t}
return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return v.prototype=h,o(b,"constructor",{value:h,configurable:!0}),o(h,"constructor",{value:v,configurable:!0}),v.displayName=l(h,u,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor
return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,l(e,u,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},w(x.prototype),l(x.prototype,s,function(){return this}),e.AsyncIterator=x,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise)
var a=new x(c(t,r,n,o),i)
return e.isGeneratorFunction(r)?a:a.next().then(function(e){return e.done?e.value:a.next()})},w(b),l(b,u,"Generator"),l(b,a,function(){return this}),l(b,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[]
for(var n in t)r.push(n)
return r.reverse(),function e(){for(;r.length;){var n=r.pop()
if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=M,E.prototype={constructor:E,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0
var e=this.tryEntries[0].completion
if("throw"===e.type)throw e.arg
return this.rval},dispatchException:function(e){if(this.done)throw e
var t=this
function r(r,n){return a.type="throw",a.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion
if("root"===i.tryLoc)return r("end")
if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc")
if(s&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)
if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally")
if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r]
if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o
break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null)
var a=i?i.completion:{}
return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg
return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t]
if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t]
if(r.tryLoc===e){var n=r.completion
if("throw"===n.type){var o=n.arg
O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:M(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},e}function n(e,t){var r=Object.keys(e)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e)
t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{}
t%2?n(Object(r),!0).forEach(function(t){i(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function i(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==_typeof(e)||null===e)return e
var r=e[Symbol.toPrimitive]
if(void 0!==r){var n=r.call(e,t||"default")
if("object"!==_typeof(n))return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string")
return"symbol"===_typeof(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t,r,n,o,i,a){try{var s=e[i](a),u=s.value}catch(l){return void r(l)}s.done?t(u):Promise.resolve(u).then(n,o)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var s=null,u=function(){var e,n=(e=r().mark(function e(){var n
return r().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!s){e.next=2
break}return e.abrupt("return",s)
case 2:return e.next=4,fetch("".concat(t.default.rootURL,"assets/guesses.json"))
case 4:return n=e.sent,e.next=7,n.json()
case 7:return(s=e.sent.map(function(e){return o(o({},e),{},{img:"".concat(t.default.rootURL).concat(e.photoFilePath)})})).sort(function(e,t){return e.firstName<t.firstName?-1:e.firstName>t.firstName?1:0}),e.abrupt("return",s)
case 10:case"end":return e.stop()}},e)}),function(){var t=this,r=arguments
return new Promise(function(n,o){var i=e.apply(t,r)
function s(e){a(i,n,o,s,u,"next",e)}function u(e){a(i,n,o,s,u,"throw",e)}s(void 0)})})
return function(){return n.apply(this,arguments)}}()
e.default=u}),define("invoices-guess-who/config/environment",[],function(){try{var e="invoices-guess-who/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),r={default:JSON.parse(decodeURIComponent(t))}
return Object.defineProperty(r,"__esModule",{value:!0}),r}catch(n){throw new Error('Could not read config from meta tag with name "'+e+'".')}}),runningTests||require("invoices-guess-who/app").default.create({name:"invoices-guess-who",version:"0.0.0+6a4d4f4a"})
