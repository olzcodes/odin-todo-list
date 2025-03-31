/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 2 */
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 3 */
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),
/* 4 */
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),
/* 5 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),
/* 6 */
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),
/* 7 */
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),
/* 8 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(12), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(13), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(14), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: "Electrolize";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("woff");
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: "Quicksand";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format("woff");
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: "Quicksand";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format("woff");
  font-weight: 700;
  font-style: normal;
}

:root.theme-1 {
  --main-color: black;
  --background-color: whitesmoke;
  --background-color-two: lavenderblush;
  --accent-color: salmon;
  --accent-color-two: white;
  --accent-color-three: lightpink;
  --priority-high-color: palevioletred;
  --active-color: tomato;
  --active-color-two: white;
  --inactive-color: silver;
  --inactive-color-two: gray;
  --default-thickness: 2px;
}

:root.theme-2 {
  --main-color: black;
  --background-color: aliceblue;
  --background-color-two: whitesmoke;
  --accent-color: mediumslateblue;
  --accent-color-two: white;
  --accent-color-three: thistle;
  --priority-high-color: palevioletred;
  --active-color: mediumslateblue;
  --active-color-two: white;
  --inactive-color: silver;
  --inactive-color-two: gray;
  --default-thickness: 2px;
}

html {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
}

*,
*:before,
*:after {
  box-sizing: inherit;
  /* border: 1px solid red; */
}

.hidden {
  display: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0px;
}

body {
  height: 100vh;
  background-color: var(--background-color);
  color: var(--main-color);
  font-family: "Quicksand", Tahoma, Geneva, Verdana, sans-serif;
  margin: 0px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: var(--background-color-two);
  border-bottom: var(--default-thickness) solid var(--accent-color-two);
}

.header-top-row {
  height: 56px;
  display: flex;
  justify-content: space-between;
  padding: 10px;
}

h1 {
  font-family: "Electrolize";
  color: var(--accent-color);
  font-size: x-large;
  text-align: center;
  padding-top: 5px;
}

h1 {
  cursor: pointer;
}

button:hover {
  cursor: pointer;
}

nav.sort-buttons-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

nav.sort-buttons-container button {
  width: 96px;
  background-color: var(--accent-color-two);
  color: var(--accent-color);
  border: 2px solid var(--accent-color-two);
  border-radius: 12px;
  font-family: "Quicksand";
  font-size: medium;
  padding: 7px 8px 5px;
}

nav.sort-buttons-container button:hover {
  background-color: var(--accent-color-two);
  color: var(--accent-color);
  border: 2px solid var(--accent-color);
}

nav.breadcrumb-nav {
  display: flex;
  align-items: center;
  font-size: larger;
  padding: 5px 10px 0px;
  margin: 0px 0px 10px;
}

span {
  padding: 0px 10px 0px;
}

span.all-projects {
  height: 36px;
  color: var(--accent-color);
  border: 2px solid var(--background-color-two);
  font-size: medium;
  letter-spacing: 0.23px;
  padding: 6px 6px 3px;
}

span.current-project {
  color: var(--main-color);
  font-size: large;
  padding: 3px 6px 3px;
}

button.btn-view-all-projects {
  height: 36px;
  background-color: var(--accent-color-two);
  color: var(--accent-color);
  border: 2px solid var(--accent-color-two);
  border-radius: 12px;
  font-family: "Quicksand";
  font-size: medium;
  font-weight: bold;
  text-decoration: underline;
  color: var(--accent-color);
  padding: 3px 6px 3px;
}

button.btn-view-all-projects:hover {
  color: var(--active-color);
  border: 2px solid var(--active-color);
  font-weight: 700;
  letter-spacing: 0px;
}

button.btn-view-all-projects::after {
  height: 0;
  visibility: hidden;
  font-weight: 700;
}

main {
  position: relative;
  z-index: 0;

  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  padding: 15px;
  padding-top: 130px;
}

.item-container {
  width: 100%;
  padding-bottom: 80px;
}

.project-card,
.task-card {
  cursor: pointer;
  flex: 1;
  border: var(--default-thickness) solid var(--accent-color-three);
  border-radius: 12px;
  margin: 0px 0px 20px;
}

.project-header,
.task-header {
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--accent-color-three);
  border-radius: 9px;
  padding: 5px 5px 6px 5px;
}

.project-header:hover .input-project-title,
.task-header:hover .input-task-title {
  color: var(--main-color);
}

.task-header.completed {
  background-color: var(--inactive-color);
}

.task-details.completed {
  transition: opacity 1.5s ease;
  opacity: 0;
  height: 0;
  overflow: hidden;
}

.task-details.pending,
.task-details.completed.visible {
  transition: opacity 1.5s ease;
  opacity: 1;
  height: auto;
}

/* This rule is required for click events on disabled input elements to propagate upwards on some browsers */
input[disabled] {
  pointer-events: none;
}

input.input-task-title.completed {
  text-decoration: line-through;
}

.task-card.completed {
  border: var(--default-thickness) solid var(--inactive-color);
}

button.btn-save-project,
button.btn-save-task {
  background-color: var(--accent-color-two);
  border: 2px solid var(--main-color);
  border-radius: 5px;
  padding: 5px 8px 5px;
}

input.input-project-title,
input.input-task-title {
  flex: 1;
  background-color: inherit;
  color: var(--accent-color-two);
  font-family: "Quicksand";
  font-size: medium;
  font-weight: bold;
  border: none;
  outline: none;
  margin-left: 5px;
  margin-right: 20px;
}

input.input-project-title:focus,
input.input-task-title:focus {
  background-color: inherit;
}

.project-header-left,
.task-header-left {
  flex: 1;
  display: flex;
  align-items: center;
}

button.btn-task-status {
  background-color: inherit;
  color: var(--accent-color-two);
  border: none;
  font-size: large;
  padding: 0px 6px 0px;
}

button.btn-task-status.pending::after {
  content: "☐";
  font-size: xx-large;
}

button.btn-task-status.completed::after {
  content: "☑";
  font-size: xx-large;
}

.project-header:focus-within,
.task-header:focus-within {
  background-color: var(--accent-color);
}

.task-title.completed {
  text-decoration: line-through;
  text-decoration-color: var(--accent-color-two);
  text-decoration-thickness: 2px;
}

.task-header-right {
  display: flex;
  gap: 6px;
}

button.btn-project-move-down,
button.btn-project-move-up {
  background-color: var(--accent-three);
  color: var(--accent-color-two);
  border: none;
  font-weight: 700;
  padding: 0px 10px;
  visibility: hidden;
}

button.btn-project-delete,
button.btn-task-delete {
  background-color: var(--accent-three);
  color: var(--accent-color-two);
  border: none;
  font-weight: 700;
  padding: 0px 10px;
}

button.btn-project-move-down:hover,
button.btn-project-move-up:hover,
button.btn-project-delete:hover,
button.btn-task-delete:hover {
  color: var(--main-color);
}

.project-details > div,
.task-details > div {
  background-color: var(--accent-color-two);
  font-size: medium;
  border-radius: 0px 0px 9px 9px;
  padding: 10px 15px 10px;
}

.project-details > div:hover {
  text-decoration: underline;
}

.task-details {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

textarea.input-task-description {
  width: 100%;
  background-color: var(--accent-color-two);
  font-family: "Quicksand", Tahoma, Geneva, Verdana, sans-serif;
  font-size: medium;
  border: none;
  outline: none;
  resize: none;
  padding: 10px 15px 10px;
}

textarea.input-task-description.completed {
  color: gray;
}

.project-details > .task-bottom-row,
.task-details > .task-bottom-row {
  display: flex;
  height: 40px;
  justify-content: space-between;
  align-items: center;
  background-color: var(--background-color-two);
  border-radius: 0px 0px 9px 9px;
  font-weight: 700;
}

input.input-task-due-date {
  background-color: var(--background-color-two);
  border: 2px solid var(--accent-color-three);
  border-radius: 5px;
  outline: none;
  padding: 2px;
}

input[disabled].input-task-due-date {
  background-color: var(--background-color);
  border: 2px solid var(--inactive-color);
}

.task-days-remaining,
.btn-task-priority {
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 5px;
  min-width: 82px;
  color: var(--inactive-color-two);
  font-size: small;
  font-weight: 500;
  text-align: center;
  padding: 0px;
}

button.btn-task-priority {
  background-color: var(--accent-three);
  border: none;
}

span.priority-label {
  padding: 0px 2px 0px 0px;
}

span.priority-indicator {
  background-color: var(--accent-three);
  margin: -8px;
}

span.priority-indicator.low::after {
  content: "●";
  color: mediumseagreen;
  font-size: xx-large;
}

span.priority-indicator.medium::after {
  content: "●";
  color: gold;
  font-size: xx-large;
}

span.priority-indicator.high::after {
  content: "●";
  color: coral;
  font-size: xx-large;
}

.priority-high {
  background-color: var(--priority-high-color);
}

button.btn-back-to-all-projects {
  height: 42px;
  width: 42px;
  position: fixed;
  bottom: 50px;
  left: 20px;
  font-size: xx-large;
  border: 2px solid var(--accent-color-two);
  border-radius: 50px;
  background-color: var(--accent-color);
  color: var(--accent-color-two);
  padding: 2px 2px 0px 0px;
}

button.btn-new-item {
  height: 42px;
  width: 42px;
  position: fixed;
  bottom: 50px;
  right: 20px;
  font-size: xx-large;
  border: 2px solid var(--accent-color-two);
  border-radius: 50px;
  background-color: var(--accent-color);
  color: var(--accent-color-two);
  padding: 0px 10px 0px;
}

footer {
  position: fixed;
  bottom: 0px;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: lightgray;
  padding: 5px;
}

footer a {
  font-family: "Electrolize";
  color: gray;
}

@media only screen and (min-width: 800px) {
  body {
    max-width: 800px;
    padding: 0;
  }

  nav.sort-buttons-container {
    position: fixed;
    left: 590px;
  }

  button.btn-new-item {
    position: fixed;
    left: 740px;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: \"Electrolize\";\n  src: url(\"./fonts/Electrolize-Regular.woff\") format(\"woff\");\n  font-weight: 400;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: \"Quicksand\";\n  src: url(\"./fonts/Quicksand-Medium.woff\") format(\"woff\");\n  font-weight: 500;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: \"Quicksand\";\n  src: url(\"./fonts/Quicksand-Bold.woff\") format(\"woff\");\n  font-weight: 700;\n  font-style: normal;\n}\n\n:root.theme-1 {\n  --main-color: black;\n  --background-color: whitesmoke;\n  --background-color-two: lavenderblush;\n  --accent-color: salmon;\n  --accent-color-two: white;\n  --accent-color-three: lightpink;\n  --priority-high-color: palevioletred;\n  --active-color: tomato;\n  --active-color-two: white;\n  --inactive-color: silver;\n  --inactive-color-two: gray;\n  --default-thickness: 2px;\n}\n\n:root.theme-2 {\n  --main-color: black;\n  --background-color: aliceblue;\n  --background-color-two: whitesmoke;\n  --accent-color: mediumslateblue;\n  --accent-color-two: white;\n  --accent-color-three: thistle;\n  --priority-high-color: palevioletred;\n  --active-color: mediumslateblue;\n  --active-color-two: white;\n  --inactive-color: silver;\n  --inactive-color-two: gray;\n  --default-thickness: 2px;\n}\n\nhtml {\n  box-sizing: border-box;\n  margin: 0px;\n  padding: 0px;\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n  /* border: 1px solid red; */\n}\n\n.hidden {\n  display: none;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0px;\n}\n\nbody {\n  height: 100vh;\n  background-color: var(--background-color);\n  color: var(--main-color);\n  font-family: \"Quicksand\", Tahoma, Geneva, Verdana, sans-serif;\n  margin: 0px;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\nheader {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 1;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  background-color: var(--background-color-two);\n  border-bottom: var(--default-thickness) solid var(--accent-color-two);\n}\n\n.header-top-row {\n  height: 56px;\n  display: flex;\n  justify-content: space-between;\n  padding: 10px;\n}\n\nh1 {\n  font-family: \"Electrolize\";\n  color: var(--accent-color);\n  font-size: x-large;\n  text-align: center;\n  padding-top: 5px;\n}\n\nh1 {\n  cursor: pointer;\n}\n\nbutton:hover {\n  cursor: pointer;\n}\n\nnav.sort-buttons-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n}\n\nnav.sort-buttons-container button {\n  width: 96px;\n  background-color: var(--accent-color-two);\n  color: var(--accent-color);\n  border: 2px solid var(--accent-color-two);\n  border-radius: 12px;\n  font-family: \"Quicksand\";\n  font-size: medium;\n  padding: 7px 8px 5px;\n}\n\nnav.sort-buttons-container button:hover {\n  background-color: var(--accent-color-two);\n  color: var(--accent-color);\n  border: 2px solid var(--accent-color);\n}\n\nnav.breadcrumb-nav {\n  display: flex;\n  align-items: center;\n  font-size: larger;\n  padding: 5px 10px 0px;\n  margin: 0px 0px 10px;\n}\n\nspan {\n  padding: 0px 10px 0px;\n}\n\nspan.all-projects {\n  height: 36px;\n  color: var(--accent-color);\n  border: 2px solid var(--background-color-two);\n  font-size: medium;\n  letter-spacing: 0.23px;\n  padding: 6px 6px 3px;\n}\n\nspan.current-project {\n  color: var(--main-color);\n  font-size: large;\n  padding: 3px 6px 3px;\n}\n\nbutton.btn-view-all-projects {\n  height: 36px;\n  background-color: var(--accent-color-two);\n  color: var(--accent-color);\n  border: 2px solid var(--accent-color-two);\n  border-radius: 12px;\n  font-family: \"Quicksand\";\n  font-size: medium;\n  font-weight: bold;\n  text-decoration: underline;\n  color: var(--accent-color);\n  padding: 3px 6px 3px;\n}\n\nbutton.btn-view-all-projects:hover {\n  color: var(--active-color);\n  border: 2px solid var(--active-color);\n  font-weight: 700;\n  letter-spacing: 0px;\n}\n\nbutton.btn-view-all-projects::after {\n  height: 0;\n  visibility: hidden;\n  font-weight: 700;\n}\n\nmain {\n  position: relative;\n  z-index: 0;\n\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  align-items: start;\n  padding: 15px;\n  padding-top: 130px;\n}\n\n.item-container {\n  width: 100%;\n  padding-bottom: 80px;\n}\n\n.project-card,\n.task-card {\n  cursor: pointer;\n  flex: 1;\n  border: var(--default-thickness) solid var(--accent-color-three);\n  border-radius: 12px;\n  margin: 0px 0px 20px;\n}\n\n.project-header,\n.task-header {\n  height: 40px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: var(--accent-color-three);\n  border-radius: 9px;\n  padding: 5px 5px 6px 5px;\n}\n\n.project-header:hover .input-project-title,\n.task-header:hover .input-task-title {\n  color: var(--main-color);\n}\n\n.task-header.completed {\n  background-color: var(--inactive-color);\n}\n\n.task-details.completed {\n  transition: opacity 1.5s ease;\n  opacity: 0;\n  height: 0;\n  overflow: hidden;\n}\n\n.task-details.pending,\n.task-details.completed.visible {\n  transition: opacity 1.5s ease;\n  opacity: 1;\n  height: auto;\n}\n\n/* This rule is required for click events on disabled input elements to propagate upwards on some browsers */\ninput[disabled] {\n  pointer-events: none;\n}\n\ninput.input-task-title.completed {\n  text-decoration: line-through;\n}\n\n.task-card.completed {\n  border: var(--default-thickness) solid var(--inactive-color);\n}\n\nbutton.btn-save-project,\nbutton.btn-save-task {\n  background-color: var(--accent-color-two);\n  border: 2px solid var(--main-color);\n  border-radius: 5px;\n  padding: 5px 8px 5px;\n}\n\ninput.input-project-title,\ninput.input-task-title {\n  flex: 1;\n  background-color: inherit;\n  color: var(--accent-color-two);\n  font-family: \"Quicksand\";\n  font-size: medium;\n  font-weight: bold;\n  border: none;\n  outline: none;\n  margin-left: 5px;\n  margin-right: 20px;\n}\n\ninput.input-project-title:focus,\ninput.input-task-title:focus {\n  background-color: inherit;\n}\n\n.project-header-left,\n.task-header-left {\n  flex: 1;\n  display: flex;\n  align-items: center;\n}\n\nbutton.btn-task-status {\n  background-color: inherit;\n  color: var(--accent-color-two);\n  border: none;\n  font-size: large;\n  padding: 0px 6px 0px;\n}\n\nbutton.btn-task-status.pending::after {\n  content: \"☐\";\n  font-size: xx-large;\n}\n\nbutton.btn-task-status.completed::after {\n  content: \"☑\";\n  font-size: xx-large;\n}\n\n.project-header:focus-within,\n.task-header:focus-within {\n  background-color: var(--accent-color);\n}\n\n.task-title.completed {\n  text-decoration: line-through;\n  text-decoration-color: var(--accent-color-two);\n  text-decoration-thickness: 2px;\n}\n\n.task-header-right {\n  display: flex;\n  gap: 6px;\n}\n\nbutton.btn-project-move-down,\nbutton.btn-project-move-up {\n  background-color: var(--accent-three);\n  color: var(--accent-color-two);\n  border: none;\n  font-weight: 700;\n  padding: 0px 10px;\n  visibility: hidden;\n}\n\nbutton.btn-project-delete,\nbutton.btn-task-delete {\n  background-color: var(--accent-three);\n  color: var(--accent-color-two);\n  border: none;\n  font-weight: 700;\n  padding: 0px 10px;\n}\n\nbutton.btn-project-move-down:hover,\nbutton.btn-project-move-up:hover,\nbutton.btn-project-delete:hover,\nbutton.btn-task-delete:hover {\n  color: var(--main-color);\n}\n\n.project-details > div,\n.task-details > div {\n  background-color: var(--accent-color-two);\n  font-size: medium;\n  border-radius: 0px 0px 9px 9px;\n  padding: 10px 15px 10px;\n}\n\n.project-details > div:hover {\n  text-decoration: underline;\n}\n\n.task-details {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\ntextarea.input-task-description {\n  width: 100%;\n  background-color: var(--accent-color-two);\n  font-family: \"Quicksand\", Tahoma, Geneva, Verdana, sans-serif;\n  font-size: medium;\n  border: none;\n  outline: none;\n  resize: none;\n  padding: 10px 15px 10px;\n}\n\ntextarea.input-task-description.completed {\n  color: gray;\n}\n\n.project-details > .task-bottom-row,\n.task-details > .task-bottom-row {\n  display: flex;\n  height: 40px;\n  justify-content: space-between;\n  align-items: center;\n  background-color: var(--background-color-two);\n  border-radius: 0px 0px 9px 9px;\n  font-weight: 700;\n}\n\ninput.input-task-due-date {\n  background-color: var(--background-color-two);\n  border: 2px solid var(--accent-color-three);\n  border-radius: 5px;\n  outline: none;\n  padding: 2px;\n}\n\ninput[disabled].input-task-due-date {\n  background-color: var(--background-color);\n  border: 2px solid var(--inactive-color);\n}\n\n.task-days-remaining,\n.btn-task-priority {\n  display: flex;\n  align-items: center;\n  justify-content: end;\n  gap: 5px;\n  min-width: 82px;\n  color: var(--inactive-color-two);\n  font-size: small;\n  font-weight: 500;\n  text-align: center;\n  padding: 0px;\n}\n\nbutton.btn-task-priority {\n  background-color: var(--accent-three);\n  border: none;\n}\n\nspan.priority-label {\n  padding: 0px 2px 0px 0px;\n}\n\nspan.priority-indicator {\n  background-color: var(--accent-three);\n  margin: -8px;\n}\n\nspan.priority-indicator.low::after {\n  content: \"●\";\n  color: mediumseagreen;\n  font-size: xx-large;\n}\n\nspan.priority-indicator.medium::after {\n  content: \"●\";\n  color: gold;\n  font-size: xx-large;\n}\n\nspan.priority-indicator.high::after {\n  content: \"●\";\n  color: coral;\n  font-size: xx-large;\n}\n\n.priority-high {\n  background-color: var(--priority-high-color);\n}\n\nbutton.btn-back-to-all-projects {\n  height: 42px;\n  width: 42px;\n  position: fixed;\n  bottom: 50px;\n  left: 20px;\n  font-size: xx-large;\n  border: 2px solid var(--accent-color-two);\n  border-radius: 50px;\n  background-color: var(--accent-color);\n  color: var(--accent-color-two);\n  padding: 2px 2px 0px 0px;\n}\n\nbutton.btn-new-item {\n  height: 42px;\n  width: 42px;\n  position: fixed;\n  bottom: 50px;\n  right: 20px;\n  font-size: xx-large;\n  border: 2px solid var(--accent-color-two);\n  border-radius: 50px;\n  background-color: var(--accent-color);\n  color: var(--accent-color-two);\n  padding: 0px 10px 0px;\n}\n\nfooter {\n  position: fixed;\n  bottom: 0px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  background-color: lightgray;\n  padding: 5px;\n}\n\nfooter a {\n  font-family: \"Electrolize\";\n  color: gray;\n}\n\n@media only screen and (min-width: 800px) {\n  body {\n    max-width: 800px;\n    padding: 0;\n  }\n\n  nav.sort-buttons-container {\n    position: fixed;\n    left: 590px;\n  }\n\n  button.btn-new-item {\n    position: fixed;\n    left: 740px;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 9 */
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),
/* 10 */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),
/* 11 */
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),
/* 12 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5c1e7169fdffff310e8b.woff";

/***/ }),
/* 13 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d45eaadb94deb4d911b3.woff";

/***/ }),
/* 14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2b8f265dbe25b17da681.woff";

/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initApp: () => (/* binding */ initApp),
/* harmony export */   projects: () => (/* binding */ projects)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24);
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25);
/* harmony import */ var _demoData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26);


 // prettier-ignore



let projects = (0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.loadFromLocalStorage)() || _demoData__WEBPACK_IMPORTED_MODULE_4__.demoProjects;
let targetProject;
let view;

const loadProjectsView = function () {
  view = "projects";
  (0,_view__WEBPACK_IMPORTED_MODULE_2__.clearTaskViewButtons)();
  (0,_view__WEBPACK_IMPORTED_MODULE_2__.renderProjectViewButtons)();
  clickHandlerBtnNewItem();
  (0,_view__WEBPACK_IMPORTED_MODULE_2__.renderBreadcrumbNav)(view);
  (0,_view__WEBPACK_IMPORTED_MODULE_2__.clearItemContainer)();
  (0,_view__WEBPACK_IMPORTED_MODULE_2__.renderAllProjects)(projects);
  inputHandlerProjectTitle();
  clickHandlerDivProjectDetails();
  clickHandlerBtnDeleteProject();
};

const loadTasksView = function (targetProject, sortCriteria) {
  view = "tasks";
  (0,_view__WEBPACK_IMPORTED_MODULE_2__.clearProjectViewButtons)();
  (0,_view__WEBPACK_IMPORTED_MODULE_2__.renderTaskViewButtons)();
  clickHandlerBtnNewItem();
  (0,_view__WEBPACK_IMPORTED_MODULE_2__.renderBreadcrumbNav)(view, targetProject);
  (0,_view__WEBPACK_IMPORTED_MODULE_2__.clearItemContainer)();
  (0,_view__WEBPACK_IMPORTED_MODULE_2__.renderTasks)(targetProject.tasks, sortCriteria);
  (0,_view__WEBPACK_IMPORTED_MODULE_2__.showTaskViewButtons)(targetProject);
  clickHandlerBtnSortByDueDate(targetProject);
  clickHandlerBtnSortByPriority(targetProject);
  clickHandlerBtnViewAllProjects();
  clickHandlerBtnBackToAllProjects();
  (0,_view__WEBPACK_IMPORTED_MODULE_2__.clickHandlerCompletedTaskCard)();
  clickHandlerBtnTaskStatus(targetProject);
  inputHandlerTaskTitle(targetProject);
  clickHandlerBtnDeleteTask();
  inputHandlerTaskDescription(targetProject);
  inputHandlerTaskDueDate(targetProject);
  clickHandlerBtnTaskPriority(targetProject);
  (0,_view__WEBPACK_IMPORTED_MODULE_2__.showTopOfPage)();
};

const createNewProject = function () {
  const project = new _project__WEBPACK_IMPORTED_MODULE_0__.Project("", "", []);
  project.id = `P${new Date().getTime()}`;
  projects[project.id] = project;
  (0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.saveToLocalStorage)();
  (0,_view__WEBPACK_IMPORTED_MODULE_2__.clearItemContainer)();
  loadProjectsView();
  const inputProjectTitle = document.querySelectorAll(
    ".input-project-title"
  )[0];
  inputProjectTitle.focus();
};

const deleteProject = function (e) {
  const projectId = e.target.closest(".project-card").dataset.projectId;
  const projectTitle = projects[projectId].title;
  const confirmDelete = confirm(
    projectTitle
      ? `${projectTitle} - Delete this project?`
      : "Delete this project?"
  );
  if (!confirmDelete) return;
  delete projects[projectId];
  (0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.saveToLocalStorage)();
  loadProjectsView();
};

const createNewTask = function () {
  let id = `T${new Date().getTime()}`;
  targetProject.addTask(
    new _task__WEBPACK_IMPORTED_MODULE_1__.Task(id, "", "", "", "pending", "medium", "enabled")
  );
  (0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.saveToLocalStorage)();
  (0,_view__WEBPACK_IMPORTED_MODULE_2__.clearItemContainer)();
  loadTasksView(targetProject);
  const inputTaskTitle = document.querySelector(".input-task-title");
  inputTaskTitle.focus();
};

const deleteTask = function (e) {
  const taskId = e.target.closest(".task-card").dataset.taskId;
  const taskTitle = targetProject.tasks.filter((task) => task.id === taskId)[0]
    .title;
  const confirmDelete = confirm(
    taskTitle ? `${taskTitle} - Delete this task?` : "Delete this task?"
  );
  if (!confirmDelete) return;
  targetProject.deleteTask(taskId);
  (0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.saveToLocalStorage)();
  loadTasksView(targetProject);
};

// Save functions triggered by inputs/edits

const autoSaveProjectTitleChanges = function (projectId, title) {
  projects[projectId].title = title.value;
  (0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.saveToLocalStorage)();
};

const toggleTaskStatus = function (targetProject, taskId) {
  targetProject.tasks.forEach((task) => {
    if (task.id === taskId) {
      task.status === "pending"
        ? (task.status = "completed")
        : (task.status = "pending");

      task.inputStatus === "enabled"
        ? (task.inputStatus = "disabled")
        : (task.inputStatus = "enabled");
    }
  });
};

const autoSaveTaskTitleChanges = function (targetProject, taskId, taskTitle) {
  targetProject.tasks.forEach((task) => {
    if (task.id === taskId) task.title = taskTitle.value;
    (0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.saveToLocalStorage)();
  });
};

// prettier-ignore
const autoSaveTaskDescriptionChanges = function (targetProject, taskId, taskDescriptionEl) {
  targetProject.tasks.forEach((task) => {
    if (task.id === taskId) task.description = taskDescriptionEl.value;
    (0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.saveToLocalStorage)();
  });
};

// prettier-ignore
const autoSaveTaskDueDateChanges = function (targetProject, taskId, taskDueDateEl) {
  targetProject.tasks.forEach((task) => {
    if (task.id === taskId) task.dueDate = taskDueDateEl.value;
    (0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.saveToLocalStorage)();
  });
};

// prettier-ignore
const updateDaysRemaining = function (targetProject, taskId, e) {
  const taskDaysRemainingEl = e.target.parentElement.querySelector(".task-days-remaining");
  targetProject.tasks.forEach((task) => {
    if (task.id === taskId) taskDaysRemainingEl.innerHTML = task.getDaysRemaining();
  })
};

// prettier-ignore
const toggleTaskPriorty = function (targetProject, taskId, button) {
  const priorityLevelShifter = { low: "medium", medium: "high", high: "low" };
  targetProject.tasks.forEach((task) => {
    if (task.id === taskId) {
      const currentLevel = task.priority;
      const nextLevel = priorityLevelShifter[task.priority];
      const priorityLabel = button.querySelector(".priority-label")
      const priorityIndicator = button.querySelector(".priority-indicator")
      const taskCard = button.closest(".task-card")
      priorityLabel.textContent = nextLevel;
      priorityIndicator.classList.replace(currentLevel, nextLevel);
      taskCard.classList.replace(currentLevel, nextLevel);
      task.priority = nextLevel;
    (0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.saveToLocalStorage)()
    }
  });
};

const sortByDueDate = function (targetProject) {
  loadTasksView(targetProject, "dueDate");
};

const sortByPriority = function (targetProject) {
  loadTasksView(targetProject, "priority");
};

// Event handlers - Navigation

const clickHandlerDivProjectDetails = function () {
  const projectDetailsNL = document.querySelectorAll(".project-details");
  projectDetailsNL.forEach((projectDetail) => {
    projectDetail.addEventListener("click", () => {
      const projectCardId = projectDetail.parentElement.dataset.projectId;
      targetProject = projects[projectCardId];
      loadTasksView(targetProject);
    });
  });
};

const clickHandlerBtnViewAllProjects = function () {
  const btnViewAllProjects = document.querySelector(".btn-view-all-projects");
  btnViewAllProjects.addEventListener("click", () => {
    loadProjectsView();
  });
};

const clickHandlerBtnBackToAllProjects = function () {
  const btnBackToAllProjects = document.querySelector(".btn-back-to-all-projects"); // prettier-ignore
  btnBackToAllProjects.addEventListener("click", () => {
    loadProjectsView();
  });
};

const clickHandlerBtnSortByDueDate = function (targetProject) {
  const btnSortByDueDate = document.querySelector(".btn-sort-due-date");
  btnSortByDueDate.addEventListener("click", () =>
    sortByDueDate(targetProject)
  );
};

const clickHandlerBtnSortByPriority = function (targetProject) {
  const btnSortByPriority = document.querySelector(".btn-sort-priority");
  btnSortByPriority.addEventListener("click", () =>
    sortByPriority(targetProject)
  );
};

// Event handlers - Create and delete items

const clickHandlerBtnNewItem = function () {
  const btnNewItem = document.querySelector(".btn-new-item");
  btnNewItem.addEventListener("click", () => {
    if (view === "projects") createNewProject();
    if (view === "tasks") createNewTask();
  });
};

const clickHandlerBtnDeleteProject = function () {
  const deleteProjectButtonsNL = document.querySelectorAll(
    ".btn-project-delete"
  );
  deleteProjectButtonsNL.forEach((button) =>
    button.addEventListener("click", deleteProject.bind(this))
  );
};

const clickHandlerBtnDeleteTask = function () {
  const deleteTaskButtonsNL = document.querySelectorAll(".btn-task-delete");
  deleteTaskButtonsNL.forEach((button) =>
    button.addEventListener("click", deleteTask.bind(this))
  );
};

// Event handlers - Inputs/edits made to projects and tasks

const inputHandlerProjectTitle = function () {
  const projectTitlesNL = document.querySelectorAll(".input-project-title");

  if (!projectTitlesNL) return;

  projectTitlesNL.forEach((title) =>
    title.addEventListener("input", (e) => {
      const projectId = e.target.closest(".project-card").dataset.projectId;
      autoSaveProjectTitleChanges(projectId, title);
    })
  );
};

// prettier-ignore
const clickHandlerBtnTaskStatus = function (targetProject) {
  const btnTaskPendingNL = document.querySelectorAll(".btn-task-status");
  btnTaskPendingNL.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.stopPropagation();
      button.blur();
      const taskCard = e.target.closest(".task-card");
      const taskId = taskCard.dataset.taskId;
      const taskDescriptionEl = taskCard.querySelector(".input-task-description");
      toggleTaskStatus(targetProject, taskId);
      (0,_view__WEBPACK_IMPORTED_MODULE_2__.toggleTaskElements)(button);
      (0,_view__WEBPACK_IMPORTED_MODULE_2__.autoAdjustHeight)(taskDescriptionEl);
      (0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.saveToLocalStorage)();
    });
  });
};

const inputHandlerTaskTitle = function (targetProject) {
  const taskTitlesNL = document.querySelectorAll(".input-task-title");

  if (!taskTitlesNL) return;

  taskTitlesNL.forEach((title) =>
    title.addEventListener("input", (e) => {
      const taskId = e.target.closest(".task-card").dataset.taskId;
      autoSaveTaskTitleChanges(targetProject, taskId, title);
    })
  );
};

// prettier-ignore
const inputHandlerTaskDescription = function (targetProject) {
  const taskDescriptionsNL = document.querySelectorAll(".input-task-description");

  if (!taskDescriptionsNL) return;

  taskDescriptionsNL.forEach((taskDescriptionEl) => {
    (0,_view__WEBPACK_IMPORTED_MODULE_2__.autoAdjustHeight)(taskDescriptionEl);

    taskDescriptionEl.addEventListener("input", (e) => {
      const taskId = e.target.closest(".task-card").dataset.taskId;
      autoSaveTaskDescriptionChanges(targetProject, taskId, taskDescriptionEl);
    });
  });
};

const inputHandlerTaskDueDate = function (targetProject) {
  const taskDueDateNL = document.querySelectorAll(".input-task-due-date");

  if (!taskDueDateNL) return;

  taskDueDateNL.forEach((taskDueDateEl) =>
    taskDueDateEl.addEventListener("input", (e) => {
      const taskId = e.target.closest(".task-card").dataset.taskId;
      autoSaveTaskDueDateChanges(targetProject, taskId, taskDueDateEl);
      updateDaysRemaining(targetProject, taskId, e);
    })
  );
};

const clickHandlerBtnTaskPriority = function (targetProject) {
  const btnTaskPriorityNL = document.querySelectorAll(".btn-task-priority");
  btnTaskPriorityNL.forEach((button) =>
    button.addEventListener("click", (e) => {
      const taskId = e.target.closest(".task-card").dataset.taskId;
      toggleTaskPriorty(targetProject, taskId, button);
    })
  );
};

// Initialize app
const initApp = function () {
  loadProjectsView();
  (0,_view__WEBPACK_IMPORTED_MODULE_2__.renderProjectViewButtons)();
  clickHandlerBtnNewItem();
  (0,_view__WEBPACK_IMPORTED_MODULE_2__.loadTheme)();
  (0,_view__WEBPACK_IMPORTED_MODULE_2__.toggleTheme)();
};




/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project)
/* harmony export */ });
class Project {
  constructor(id, title, tasks) {
    this.id = id;
    this.title = title;
    this.tasks = tasks;
  }

  addTask(task) {
    this.tasks.push(task);
  }

  deleteTask(taskId) {
    const remainingTasks = this.tasks.filter((task) => task.id !== taskId);
    this.tasks = remainingTasks;
  }
}


/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Task: () => (/* binding */ Task)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);


class Task {
  constructor(id, title, description, dueDate, status, priority, inputStatus) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.status = status;
    this.priority = priority;
    this.inputStatus = inputStatus;
  }

  getDaysRemaining() {
    const today = new Date();
    const dueDate = Date.parse(this.dueDate);

    if (!this.dueDate) return `no due date`;

    const daysRemaining = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(dueDate, today);

    if (daysRemaining < -1) return `due ${-daysRemaining} days ago`;
    if (daysRemaining === -1) return `due 1 day ago`;
    if (daysRemaining === 0) return `due today`;
    if (daysRemaining === 1) return `due in 1 day`;
    if (daysRemaining > 1) return `due in ${daysRemaining} days`;
  }
}


/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInCalendarDays)
/* harmony export */ });
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23);
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);



var MILLISECONDS_IN_DAY = 86400000;

/**
 * @name differenceInCalendarDays
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates. This means that the times are removed
 * from the dates and then the difference in days is calculated.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar days
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 * // How many calendar days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInCalendarDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 1
 */
function differenceInCalendarDays(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var startOfDayLeft = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var startOfDayRight = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var timestampLeft = startOfDayLeft.getTime() - (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(startOfDayLeft);
  var timestampRight = startOfDayRight.getTime() - (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(startOfDayRight);

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a day is not constant
  // (e.g. it's different in the day of the daylight saving time clock shift)
  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY);
}

/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (argument instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
      // eslint-disable-next-line no-console
      console.warn(new Error().stack);
    }
    return new Date(NaN);
  }
}

/***/ }),
/* 22 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}

/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/***/ }),
/* 24 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   autoAdjustHeight: () => (/* binding */ autoAdjustHeight),
/* harmony export */   clearItemContainer: () => (/* binding */ clearItemContainer),
/* harmony export */   clearProjectViewButtons: () => (/* binding */ clearProjectViewButtons),
/* harmony export */   clearTaskViewButtons: () => (/* binding */ clearTaskViewButtons),
/* harmony export */   clickHandlerCompletedTaskCard: () => (/* binding */ clickHandlerCompletedTaskCard),
/* harmony export */   loadTheme: () => (/* binding */ loadTheme),
/* harmony export */   renderAllProjects: () => (/* binding */ renderAllProjects),
/* harmony export */   renderBreadcrumbNav: () => (/* binding */ renderBreadcrumbNav),
/* harmony export */   renderProjectViewButtons: () => (/* binding */ renderProjectViewButtons),
/* harmony export */   renderTaskViewButtons: () => (/* binding */ renderTaskViewButtons),
/* harmony export */   renderTasks: () => (/* binding */ renderTasks),
/* harmony export */   showTaskViewButtons: () => (/* binding */ showTaskViewButtons),
/* harmony export */   showTopOfPage: () => (/* binding */ showTopOfPage),
/* harmony export */   toggleTaskElements: () => (/* binding */ toggleTaskElements),
/* harmony export */   toggleTheme: () => (/* binding */ toggleTheme)
/* harmony export */ });


const h1El = document.querySelector("h1");
const breadcrumbNav = document.querySelectorAll(".breadcrumb-nav");
const sortButtonsContainer = document.querySelector(".sort-buttons-container");
const itemContainer = document.querySelector(".item-container");
const lowerButtonsContainer = document.querySelector(".lower-buttons-container"); // prettier-ignore

const setTheme = function (theme) {
  document.documentElement.className = theme;
  localStorage.setItem("odin-todo-list-theme", theme);
};

const loadTheme = function () {
  if (localStorage.getItem("theme") !== null) {
    setTheme(localStorage.getItem("odin-todo-list-theme"));
  } else {
    setTheme("theme-1");
  }
};

const toggleTheme = function () {
  h1El.addEventListener("click", function () {
    document.documentElement.className === "theme-1"
      ? setTheme("theme-2")
      : setTheme("theme-1");
  });
};

const renderBreadcrumbNav = function (view, currentProject) {
  if (view === "projects") {
    breadcrumbNav.forEach((element) => (element.innerHTML = ``));
    breadcrumbNav.forEach(
      (element) =>
        (element.innerHTML = `
  <span class="all-projects">All Projects</span>
  <span class="separator">></span>
  `)
    );
  }

  if (view === "tasks") {
    breadcrumbNav.forEach((element) => (element.innerHTML = ``));
    breadcrumbNav.forEach(
      (element) =>
        (element.innerHTML = `
  <button class="btn-view-all-projects">All Projects</button>
  <span class="separator">></span>
  <span class="current-project">${currentProject.title}</span>
  `)
    );
  }
};

const renderProjectViewButtons = function () {
  lowerButtonsContainer.innerHTML = `
  <button class="btn-new-item">+</button>
  `;
};

const clearProjectViewButtons = function () {
  sortButtonsContainer.innerHTML = "";
  lowerButtonsContainer.innerHTML = "";
};

const renderTaskViewButtons = function () {
  sortButtonsContainer.innerHTML = `
  <button class="btn-sort-due-date">Due Date</button>
  <button class="btn-sort-priority">Priority</button>
  `;

  lowerButtonsContainer.innerHTML = `
  <button class="btn-back-to-all-projects">&lt</button>
  <button class="btn-new-item">+</button>
  `;
};

const clearTaskViewButtons = function () {
  sortButtonsContainer.innerHTML = "";
  lowerButtonsContainer.innerHTML = "";
};

const clearItemContainer = function () {
  itemContainer.innerHTML = "";
};

const renderProjectCard = function (project) {
  const renderProjectDetails = function (project) {
    let taskCount = 0;
    project.tasks.forEach((task) => {
      if (task.status === "pending") taskCount += 1;
    });
    return `${taskCount} pending task${taskCount > 1 ? "s" : ""}`;
  };

  const projectCard = document.createElement("div");
  projectCard.className = "project-card";
  projectCard.dataset.projectId = project.id;
  projectCard.innerHTML = `
  <div class="project-header">
    <div class="project-header-left">
      <input class="input-project-title" value="${
        project.title
      }" maxlength="28"/>
    </div>
    <div class="project-header-right">
      <button class="btn-project-move-down">ᐯ</button>
      <button class="btn-project-move-up">ᐱ</button>
      <button class="btn-project-delete">X</button>
    </div>
  </div>
  <div class="project-details">
    <div>
      ${renderProjectDetails(project)}
    </div>
  </div>
  `;

  return projectCard;
};

// prettier-ignore
const renderTaskCard = function (task) {
  const taskCard = document.createElement("div");
  taskCard.className = "task-card";
  taskCard.dataset.taskId = task.id;
  taskCard.classList.add(`${task.status}`);
  taskCard.classList.add(`${task.priority}`);
  taskCard.innerHTML = `
    <div class="task-header ${task.status}">
      <div class="task-header-left">
        <button class="btn-task-status ${task.status}"></button>
        <input class="input-task-title ${task.status}" value="${task.title}" ${task.inputStatus}/>
      </div>
      <div class="task-header-right">
        <button class="btn-task-delete">X</button>
      </div>
    </div>
    <div class="task-details ${task.status}">
      <textarea class="input-task-description ${task.status}" name="task-description" ${task.inputStatus}>${task.description}</textarea>
      <div class="task-bottom-row">
        <input type="date" class="input-task-due-date" value="${task.dueDate}" ${task.inputStatus}/>
        <div class="task-days-remaining">${task.getDaysRemaining()}</div>
        <button class="btn-task-priority" ${task.inputStatus}>
          <span class="priority-label">${task.priority}</span>
          <span class="priority-indicator ${task.priority}"></span>
        </button>
      </div>
    </div>
  `;

  return taskCard;
};

const renderAllProjects = function (projects) {
  for (let [key, value] of Object.entries(projects)) {
    itemContainer.prepend(renderProjectCard(value));
  }
};

const sortTasksByDueDate = function (targetProjectTasks) {
  const tasks = [...targetProjectTasks];
  let isSorted = false;
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < tasks.length - 1; i++) {
      const date1 = new Date(tasks[i].dueDate);
      const date2 = new Date(tasks[i + 1].dueDate);
      if (date1 > date2) {
        let temp = tasks[i + 1];
        tasks[i + 1] = tasks[i];
        tasks[i] = temp;
        isSorted = false;
      }
    }
  }
  return tasks;
};

// prettier-ignore
const sortTasksByPriority = function (targetProjectTasks) {
  const tasksHighPriority = targetProjectTasks.filter((task) => task.priority === "high");
  const tasksMediumPriority = targetProjectTasks.filter((task) => task.priority === "medium");
  const tasksLowPriority = targetProjectTasks.filter((task) => task.priority === "low");

  const tasks = [...tasksHighPriority, ...tasksMediumPriority, ...tasksLowPriority];
  return tasks;
};

// prettier-ignore
const renderTasks = function (targetProjectTasks, sortCriteria) {
  if (sortCriteria === "dueDate") {
    const tasksByPriority = sortTasksByPriority(targetProjectTasks);
    const tasksByDueDate = sortTasksByDueDate(tasksByPriority);
    tasksByDueDate.forEach((task) => itemContainer.append(renderTaskCard(task)));
  } else if (sortCriteria === "priority") {
    const tasksByDueDate = sortTasksByDueDate(targetProjectTasks);
    const tasksByPriority = sortTasksByPriority(tasksByDueDate);
    tasksByPriority.forEach((task) => itemContainer.append(renderTaskCard(task)));
  } else {
    for (let [key, value] of Object.entries(targetProjectTasks)) {
      itemContainer.prepend(renderTaskCard(value));
    }
  }
};

const showTaskViewButtons = function (targetProject) {
  if (targetProject.tasks.length < 2) {
    const btnSortByDueDate = document.querySelector(".btn-sort-due-date");
    const btnSortByPriority = document.querySelector(".btn-sort-priority");

    if (btnSortByDueDate) btnSortByDueDate.classList.add("hidden");
    if (btnSortByPriority) btnSortByPriority.classList.add("hidden");
  }
};

const showTopOfPage = function () {
  window.scrollTo(0, 0);
};

const autoAdjustHeight = function (taskDescriptionEl) {
  // Adjust height upon rendering or expansion of the task card
  taskDescriptionEl.style.height = "";
  taskDescriptionEl.style.height = taskDescriptionEl.scrollHeight + "px";

  // Adjust height to accomodate additional lines of text as required
  taskDescriptionEl.addEventListener("input", () => {
    taskDescriptionEl.style.height = "";
    taskDescriptionEl.style.height = taskDescriptionEl.scrollHeight + "px";
  });
};

const toggleTaskDetails = function (taskCard) {
  const taskDetailsEl = taskCard.querySelector(".task-details");
  taskDetailsEl.classList.toggle("visible");
};

const toggleTaskElements = function (button) {
  button.classList.toggle("completed");
  button.classList.toggle("pending");

  const taskCardEl = button.parentElement.parentElement.parentElement;
  const taskHeaderEl = taskCardEl.querySelector(".task-header");
  const taskTitleInputEl = taskCardEl.querySelector(".input-task-title");
  const taskDetailsEl = taskCardEl.querySelector(".task-details");
  const taskDescriptionEl = taskCardEl.querySelector(".input-task-description");
  const taskDueDateEl = taskCardEl.querySelector(".input-task-due-date");
  const taskPriorityEl = taskCardEl.querySelector(".btn-task-priority");

  taskCardEl.classList.toggle("completed");
  taskCardEl.classList.toggle("pending");
  taskHeaderEl.classList.toggle("completed");
  taskHeaderEl.classList.toggle("pending");
  taskTitleInputEl.classList.toggle("completed");
  taskTitleInputEl.classList.toggle("pending");
  taskDetailsEl.classList.toggle("completed");
  taskDetailsEl.classList.toggle("pending");
  taskDescriptionEl.classList.toggle("completed");
  taskDescriptionEl.classList.toggle("pending");

  taskDetailsEl.classList.remove("visible");

  taskTitleInputEl.disabled = !taskTitleInputEl.disabled;
  taskDescriptionEl.disabled = !taskDescriptionEl.disabled;
  taskDueDateEl.disabled = !taskDueDateEl.disabled;
  taskPriorityEl.disabled = !taskPriorityEl.disabled;
};

// prettier-ignore
const clickHandlerCompletedTaskCard = function () {
  const completedTaskCardNL = document.querySelectorAll(".task-card");
  completedTaskCardNL.forEach((taskCard) => {
    taskCard.addEventListener("click", () => {
      if (taskCard.classList.contains("completed")) {
        const taskDescriptionEl = taskCard.querySelector(".input-task-description");
        taskDescriptionEl.disabled = false;
        autoAdjustHeight(taskDescriptionEl);
        taskDescriptionEl.disabled = true;
      }
      toggleTaskDetails(taskCard);
    });
  });
};




/***/ }),
/* 25 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadFromLocalStorage: () => (/* binding */ loadFromLocalStorage),
/* harmony export */   saveToLocalStorage: () => (/* binding */ saveToLocalStorage)
/* harmony export */ });
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);
/* harmony import */ var _demoData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26);





const saveToLocalStorage = function () {
  localStorage.setItem("projects", JSON.stringify(_controller__WEBPACK_IMPORTED_MODULE_0__.projects));
};

const loadFromLocalStorage = function () {
  const storedProjectsJSON =
    JSON.parse(localStorage.getItem("projects")) || _demoData__WEBPACK_IMPORTED_MODULE_3__.demoProjects;

  const projectsWithFunctions = {};

  for (const [key, value] of Object.entries(storedProjectsJSON)) {
    let tasksWithFunctions = [];
    value.tasks.forEach((task) => {
      const taskWithFunctions = new _task__WEBPACK_IMPORTED_MODULE_2__.Task(
        task.id,
        task.title,
        task.description,
        task.dueDate,
        task.status,
        task.priority,
        task.inputStatus
      );
      tasksWithFunctions.push(taskWithFunctions);
    });

    projectsWithFunctions[key] = new _project__WEBPACK_IMPORTED_MODULE_1__.Project(
      value.id,
      value.title,
      tasksWithFunctions
    );
  }

  return projectsWithFunctions;
};


/***/ }),
/* 26 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   demoProjects: () => (/* binding */ demoProjects)
/* harmony export */ });
let demoProjects = {
  P1696810527601: {
    id: "P1696810527601",
    title: "Home",
    tasks: [
      {
        id: "T1697710694458",
        title: "Play video games",
        description: "Zelda TOTK\nLittle Nightmares II",
        dueDate: "2023-10-20",
        status: "pending",
        priority: "medium",
        inputStatus: "enabled",
      },
      {
        id: "T1698300737978",
        title: "Clean the house",
        description:
          "Wipe dust from surfaces\nVacuum and mop floors\nClean kitchen and bathrooms\nEmpty bins",
        dueDate: "2023-10-30",
        status: "pending",
        priority: "medium",
        inputStatus: "enabled",
      },
      {
        id: "T1698371187241",
        title: "Fix kitchen lights",
        description: "",
        dueDate: "",
        status: "pending",
        priority: "medium",
        inputStatus: "enabled",
      },
    ],
  },
  P1696810527602: {
    id: "P1696810527602",
    title: "Study",
    tasks: [
      {
        id: "T1697711415565",
        title: "Finish Todo List project",
        description: "",
        dueDate: "2023-10-26",
        status: "completed",
        priority: "medium",
        inputStatus: "disabled",
      },
    ],
  },
  P1697710736000: {
    id: "P1697710736000",
    title: "Travel",
    tasks: [
      {
        id: "T1697710741120",
        title: "Passport",
        description: "Apply for passport",
        dueDate: "2023-10-23",
        status: "pending",
        priority: "medium",
        inputStatus: "enabled",
      },
      {
        id: "T1698370794483",
        title: "Plan itinerary",
        description: "Make list of places to visit",
        dueDate: "",
        status: "pending",
        priority: "medium",
        inputStatus: "enabled",
      },
    ],
  },
  P1698370931630: {
    id: "P1698370931630",
    title: "Groceries",
    tasks: [
      {
        id: "T1698370949799",
        title: "Woolworths",
        description: "Bananas\nMilk\nButter\nFrozen dumplings\nToilet paper",
        dueDate: "",
        status: "pending",
        priority: "medium",
        inputStatus: "enabled",
      },
      {
        id: "T1698371119536",
        title: "Aldi",
        description: "Cheese\nBiscuits",
        dueDate: "",
        status: "completed",
        priority: "medium",
        inputStatus: "disabled",
      },
    ],
  },
};


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			0: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);



(function () {
  (0,_controller__WEBPACK_IMPORTED_MODULE_1__.initApp)();
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sT0FBTyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsWUFBWSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFlBQVksY0FBYyxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksWUFBWSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsTUFBTSxZQUFZLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxNQUFNLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxRQUFRLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEs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QUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7O0FDQXFCO0FBQ2tCOztBQUV2QztBQUNBLEVBQUUsb0RBQU87QUFDVCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9kaWZmZXJlbmNlSW5DYWxlbmRhckRheXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mRGF5L2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvdmlldy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9sb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvZGVtb0RhdGEuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9FbGVjdHJvbGl6ZS1SZWd1bGFyLndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL1F1aWNrc2FuZC1NZWRpdW0ud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vZm9udHMvUXVpY2tzYW5kLUJvbGQud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiRWxlY3Ryb2xpemVcIjtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbjpyb290LnRoZW1lLTEge1xuICAtLW1haW4tY29sb3I6IGJsYWNrO1xuICAtLWJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gIC0tYmFja2dyb3VuZC1jb2xvci10d286IGxhdmVuZGVyYmx1c2g7XG4gIC0tYWNjZW50LWNvbG9yOiBzYWxtb247XG4gIC0tYWNjZW50LWNvbG9yLXR3bzogd2hpdGU7XG4gIC0tYWNjZW50LWNvbG9yLXRocmVlOiBsaWdodHBpbms7XG4gIC0tcHJpb3JpdHktaGlnaC1jb2xvcjogcGFsZXZpb2xldHJlZDtcbiAgLS1hY3RpdmUtY29sb3I6IHRvbWF0bztcbiAgLS1hY3RpdmUtY29sb3ItdHdvOiB3aGl0ZTtcbiAgLS1pbmFjdGl2ZS1jb2xvcjogc2lsdmVyO1xuICAtLWluYWN0aXZlLWNvbG9yLXR3bzogZ3JheTtcbiAgLS1kZWZhdWx0LXRoaWNrbmVzczogMnB4O1xufVxuXG46cm9vdC50aGVtZS0yIHtcbiAgLS1tYWluLWNvbG9yOiBibGFjaztcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XG4gIC0tYmFja2dyb3VuZC1jb2xvci10d286IHdoaXRlc21va2U7XG4gIC0tYWNjZW50LWNvbG9yOiBtZWRpdW1zbGF0ZWJsdWU7XG4gIC0tYWNjZW50LWNvbG9yLXR3bzogd2hpdGU7XG4gIC0tYWNjZW50LWNvbG9yLXRocmVlOiB0aGlzdGxlO1xuICAtLXByaW9yaXR5LWhpZ2gtY29sb3I6IHBhbGV2aW9sZXRyZWQ7XG4gIC0tYWN0aXZlLWNvbG9yOiBtZWRpdW1zbGF0ZWJsdWU7XG4gIC0tYWN0aXZlLWNvbG9yLXR3bzogd2hpdGU7XG4gIC0taW5hY3RpdmUtY29sb3I6IHNpbHZlcjtcbiAgLS1pbmFjdGl2ZS1jb2xvci10d286IGdyYXk7XG4gIC0tZGVmYXVsdC10aGlja25lc3M6IDJweDtcbn1cblxuaHRtbCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbiosXG4qOmJlZm9yZSxcbio6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBpbmhlcml0O1xuICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXG59XG5cbi5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICBtYXJnaW46IDBweDtcbn1cblxuYm9keSB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG4gIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luOiAwcHg7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG5oZWFkZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDE7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3ItdHdvKTtcbiAgYm9yZGVyLWJvdHRvbTogdmFyKC0tZGVmYXVsdC10aGlja25lc3MpIHNvbGlkIHZhcigtLWFjY2VudC1jb2xvci10d28pO1xufVxuXG4uaGVhZGVyLXRvcC1yb3cge1xuICBoZWlnaHQ6IDU2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuaDEge1xuICBmb250LWZhbWlseTogXCJFbGVjdHJvbGl6ZVwiO1xuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG5cbmgxIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5idXR0b246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbm5hdi5zb3J0LWJ1dHRvbnMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbn1cblxubmF2LnNvcnQtYnV0dG9ucy1jb250YWluZXIgYnV0dG9uIHtcbiAgd2lkdGg6IDk2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvci10d28pO1xuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYWNjZW50LWNvbG9yLXR3byk7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiO1xuICBmb250LXNpemU6IG1lZGl1bTtcbiAgcGFkZGluZzogN3B4IDhweCA1cHg7XG59XG5cbm5hdi5zb3J0LWJ1dHRvbnMtY29udGFpbmVyIGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvci10d28pO1xuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYWNjZW50LWNvbG9yKTtcbn1cblxubmF2LmJyZWFkY3J1bWItbmF2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiBsYXJnZXI7XG4gIHBhZGRpbmc6IDVweCAxMHB4IDBweDtcbiAgbWFyZ2luOiAwcHggMHB4IDEwcHg7XG59XG5cbnNwYW4ge1xuICBwYWRkaW5nOiAwcHggMTBweCAwcHg7XG59XG5cbnNwYW4uYWxsLXByb2plY3RzIHtcbiAgaGVpZ2h0OiAzNnB4O1xuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYmFja2dyb3VuZC1jb2xvci10d28pO1xuICBmb250LXNpemU6IG1lZGl1bTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMjNweDtcbiAgcGFkZGluZzogNnB4IDZweCAzcHg7XG59XG5cbnNwYW4uY3VycmVudC1wcm9qZWN0IHtcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xuICBmb250LXNpemU6IGxhcmdlO1xuICBwYWRkaW5nOiAzcHggNnB4IDNweDtcbn1cblxuYnV0dG9uLmJ0bi12aWV3LWFsbC1wcm9qZWN0cyB7XG4gIGhlaWdodDogMzZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yLXR3byk7XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3ItdHdvKTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgZm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCI7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICBwYWRkaW5nOiAzcHggNnB4IDNweDtcbn1cblxuYnV0dG9uLmJ0bi12aWV3LWFsbC1wcm9qZWN0czpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1hY3RpdmUtY29sb3IpO1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1hY3RpdmUtY29sb3IpO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMHB4O1xufVxuXG5idXR0b24uYnRuLXZpZXctYWxsLXByb2plY3RzOjphZnRlciB7XG4gIGhlaWdodDogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG5tYWluIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAwO1xuXG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcbiAgcGFkZGluZzogMTVweDtcbiAgcGFkZGluZy10b3A6IDEzMHB4O1xufVxuXG4uaXRlbS1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1ib3R0b206IDgwcHg7XG59XG5cbi5wcm9qZWN0LWNhcmQsXG4udGFzay1jYXJkIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmbGV4OiAxO1xuICBib3JkZXI6IHZhcigtLWRlZmF1bHQtdGhpY2tuZXNzKSBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3ItdGhyZWUpO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBtYXJnaW46IDBweCAwcHggMjBweDtcbn1cblxuLnByb2plY3QtaGVhZGVyLFxuLnRhc2staGVhZGVyIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvci10aHJlZSk7XG4gIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgcGFkZGluZzogNXB4IDVweCA2cHggNXB4O1xufVxuXG4ucHJvamVjdC1oZWFkZXI6aG92ZXIgLmlucHV0LXByb2plY3QtdGl0bGUsXG4udGFzay1oZWFkZXI6aG92ZXIgLmlucHV0LXRhc2stdGl0bGUge1xuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG59XG5cbi50YXNrLWhlYWRlci5jb21wbGV0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbmFjdGl2ZS1jb2xvcik7XG59XG5cbi50YXNrLWRldGFpbHMuY29tcGxldGVkIHtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxLjVzIGVhc2U7XG4gIG9wYWNpdHk6IDA7XG4gIGhlaWdodDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnRhc2stZGV0YWlscy5wZW5kaW5nLFxuLnRhc2stZGV0YWlscy5jb21wbGV0ZWQudmlzaWJsZSB7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMS41cyBlYXNlO1xuICBvcGFjaXR5OiAxO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi8qIFRoaXMgcnVsZSBpcyByZXF1aXJlZCBmb3IgY2xpY2sgZXZlbnRzIG9uIGRpc2FibGVkIGlucHV0IGVsZW1lbnRzIHRvIHByb3BhZ2F0ZSB1cHdhcmRzIG9uIHNvbWUgYnJvd3NlcnMgKi9cbmlucHV0W2Rpc2FibGVkXSB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG5pbnB1dC5pbnB1dC10YXNrLXRpdGxlLmNvbXBsZXRlZCB7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xufVxuXG4udGFzay1jYXJkLmNvbXBsZXRlZCB7XG4gIGJvcmRlcjogdmFyKC0tZGVmYXVsdC10aGlja25lc3MpIHNvbGlkIHZhcigtLWluYWN0aXZlLWNvbG9yKTtcbn1cblxuYnV0dG9uLmJ0bi1zYXZlLXByb2plY3QsXG5idXR0b24uYnRuLXNhdmUtdGFzayB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvci10d28pO1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1tYWluLWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiA1cHggOHB4IDVweDtcbn1cblxuaW5wdXQuaW5wdXQtcHJvamVjdC10aXRsZSxcbmlucHV0LmlucHV0LXRhc2stdGl0bGUge1xuICBmbGV4OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yLXR3byk7XG4gIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiO1xuICBmb250LXNpemU6IG1lZGl1bTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG5pbnB1dC5pbnB1dC1wcm9qZWN0LXRpdGxlOmZvY3VzLFxuaW5wdXQuaW5wdXQtdGFzay10aXRsZTpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG59XG5cbi5wcm9qZWN0LWhlYWRlci1sZWZ0LFxuLnRhc2staGVhZGVyLWxlZnQge1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5idXR0b24uYnRuLXRhc2stc3RhdHVzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvci10d28pO1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIHBhZGRpbmc6IDBweCA2cHggMHB4O1xufVxuXG5idXR0b24uYnRuLXRhc2stc3RhdHVzLnBlbmRpbmc6OmFmdGVyIHtcbiAgY29udGVudDogXCLimJBcIjtcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcbn1cblxuYnV0dG9uLmJ0bi10YXNrLXN0YXR1cy5jb21wbGV0ZWQ6OmFmdGVyIHtcbiAgY29udGVudDogXCLimJFcIjtcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcbn1cblxuLnByb2plY3QtaGVhZGVyOmZvY3VzLXdpdGhpbixcbi50YXNrLWhlYWRlcjpmb2N1cy13aXRoaW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xufVxuXG4udGFzay10aXRsZS5jb21wbGV0ZWQge1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItdHdvKTtcbiAgdGV4dC1kZWNvcmF0aW9uLXRoaWNrbmVzczogMnB4O1xufVxuXG4udGFzay1oZWFkZXItcmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDZweDtcbn1cblxuYnV0dG9uLmJ0bi1wcm9qZWN0LW1vdmUtZG93bixcbmJ1dHRvbi5idG4tcHJvamVjdC1tb3ZlLXVwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LXRocmVlKTtcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvci10d28pO1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHBhZGRpbmc6IDBweCAxMHB4O1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbmJ1dHRvbi5idG4tcHJvamVjdC1kZWxldGUsXG5idXR0b24uYnRuLXRhc2stZGVsZXRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LXRocmVlKTtcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvci10d28pO1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHBhZGRpbmc6IDBweCAxMHB4O1xufVxuXG5idXR0b24uYnRuLXByb2plY3QtbW92ZS1kb3duOmhvdmVyLFxuYnV0dG9uLmJ0bi1wcm9qZWN0LW1vdmUtdXA6aG92ZXIsXG5idXR0b24uYnRuLXByb2plY3QtZGVsZXRlOmhvdmVyLFxuYnV0dG9uLmJ0bi10YXNrLWRlbGV0ZTpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcbn1cblxuLnByb2plY3QtZGV0YWlscyA+IGRpdixcbi50YXNrLWRldGFpbHMgPiBkaXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItdHdvKTtcbiAgZm9udC1zaXplOiBtZWRpdW07XG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggOXB4IDlweDtcbiAgcGFkZGluZzogMTBweCAxNXB4IDEwcHg7XG59XG5cbi5wcm9qZWN0LWRldGFpbHMgPiBkaXY6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLnRhc2stZGV0YWlscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxudGV4dGFyZWEuaW5wdXQtdGFzay1kZXNjcmlwdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItdHdvKTtcbiAgZm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IG1lZGl1bTtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICByZXNpemU6IG5vbmU7XG4gIHBhZGRpbmc6IDEwcHggMTVweCAxMHB4O1xufVxuXG50ZXh0YXJlYS5pbnB1dC10YXNrLWRlc2NyaXB0aW9uLmNvbXBsZXRlZCB7XG4gIGNvbG9yOiBncmF5O1xufVxuXG4ucHJvamVjdC1kZXRhaWxzID4gLnRhc2stYm90dG9tLXJvdyxcbi50YXNrLWRldGFpbHMgPiAudGFzay1ib3R0b20tcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3ItdHdvKTtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA5cHggOXB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG5pbnB1dC5pbnB1dC10YXNrLWR1ZS1kYXRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci10d28pO1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3ItdGhyZWUpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IDJweDtcbn1cblxuaW5wdXRbZGlzYWJsZWRdLmlucHV0LXRhc2stZHVlLWRhdGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0taW5hY3RpdmUtY29sb3IpO1xufVxuXG4udGFzay1kYXlzLXJlbWFpbmluZyxcbi5idG4tdGFzay1wcmlvcml0eSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZW5kO1xuICBnYXA6IDVweDtcbiAgbWluLXdpZHRoOiA4MnB4O1xuICBjb2xvcjogdmFyKC0taW5hY3RpdmUtY29sb3ItdHdvKTtcbiAgZm9udC1zaXplOiBzbWFsbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbmJ1dHRvbi5idG4tdGFzay1wcmlvcml0eSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC10aHJlZSk7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuc3Bhbi5wcmlvcml0eS1sYWJlbCB7XG4gIHBhZGRpbmc6IDBweCAycHggMHB4IDBweDtcbn1cblxuc3Bhbi5wcmlvcml0eS1pbmRpY2F0b3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtdGhyZWUpO1xuICBtYXJnaW46IC04cHg7XG59XG5cbnNwYW4ucHJpb3JpdHktaW5kaWNhdG9yLmxvdzo6YWZ0ZXIge1xuICBjb250ZW50OiBcIuKXj1wiO1xuICBjb2xvcjogbWVkaXVtc2VhZ3JlZW47XG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG59XG5cbnNwYW4ucHJpb3JpdHktaW5kaWNhdG9yLm1lZGl1bTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIuKXj1wiO1xuICBjb2xvcjogZ29sZDtcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcbn1cblxuc3Bhbi5wcmlvcml0eS1pbmRpY2F0b3IuaGlnaDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIuKXj1wiO1xuICBjb2xvcjogY29yYWw7XG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG59XG5cbi5wcmlvcml0eS1oaWdoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpb3JpdHktaGlnaC1jb2xvcik7XG59XG5cbmJ1dHRvbi5idG4tYmFjay10by1hbGwtcHJvamVjdHMge1xuICBoZWlnaHQ6IDQycHg7XG4gIHdpZHRoOiA0MnB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogNTBweDtcbiAgbGVmdDogMjBweDtcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYWNjZW50LWNvbG9yLXR3byk7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItdHdvKTtcbiAgcGFkZGluZzogMnB4IDJweCAwcHggMHB4O1xufVxuXG5idXR0b24uYnRuLW5ldy1pdGVtIHtcbiAgaGVpZ2h0OiA0MnB4O1xuICB3aWR0aDogNDJweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDUwcHg7XG4gIHJpZ2h0OiAyMHB4O1xuICBmb250LXNpemU6IHh4LWxhcmdlO1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3ItdHdvKTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvci10d28pO1xuICBwYWRkaW5nOiAwcHggMTBweCAwcHg7XG59XG5cbmZvb3RlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbmZvb3RlciBhIHtcbiAgZm9udC1mYW1pbHk6IFwiRWxlY3Ryb2xpemVcIjtcbiAgY29sb3I6IGdyYXk7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAwcHgpIHtcbiAgYm9keSB7XG4gICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgbmF2LnNvcnQtYnV0dG9ucy1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBsZWZ0OiA1OTBweDtcbiAgfVxuXG4gIGJ1dHRvbi5idG4tbmV3LWl0ZW0ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBsZWZ0OiA3NDBweDtcbiAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsMEJBQTBCO0VBQzFCLDJEQUEyRDtFQUMzRCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLDJEQUF3RDtFQUN4RCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLDJEQUFzRDtFQUN0RCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixxQ0FBcUM7RUFDckMsc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QiwrQkFBK0I7RUFDL0Isb0NBQW9DO0VBQ3BDLHNCQUFzQjtFQUN0Qix5QkFBeUI7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Q1osVUFBVTtFQUNWLG1CQUFtQjtFQUNuQix5Q0FBeUM7RUFDekMsbUJBQW1CO0VBQ25CLHFDQUFxQztFQUNyQyw4QkFBOEI7RUFDOUIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxlQUFlO0VBQ2YsWUFBWTtFQUNaLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIseUNBQXlDO0VBQ3pDLG1CQUFtQjtFQUNuQixxQ0FBcUM7RUFDckMsOEJBQThCO0VBQzlCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsV0FBVztFQUNYLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsMkJBQTJCO0VBQzNCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixXQUFXO0FBQ2I7O0FBRUE7RUFDRTtJQUNFLGdCQUFnQjtJQUNoQixVQUFVO0VBQ1o7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsV0FBVztFQUNiOztFQUVBO0lBQ0UsZUFBZTtJQUNmLFdBQVc7RUFDYjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJFbGVjdHJvbGl6ZVxcXCI7XFxuICBzcmM6IHVybChcXFwiLi9mb250cy9FbGVjdHJvbGl6ZS1SZWd1bGFyLndvZmZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJRdWlja3NhbmRcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4vZm9udHMvUXVpY2tzYW5kLU1lZGl1bS53b2ZmXFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUXVpY2tzYW5kXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuL2ZvbnRzL1F1aWNrc2FuZC1Cb2xkLndvZmZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbjpyb290LnRoZW1lLTEge1xcbiAgLS1tYWluLWNvbG9yOiBibGFjaztcXG4gIC0tYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gIC0tYmFja2dyb3VuZC1jb2xvci10d286IGxhdmVuZGVyYmx1c2g7XFxuICAtLWFjY2VudC1jb2xvcjogc2FsbW9uO1xcbiAgLS1hY2NlbnQtY29sb3ItdHdvOiB3aGl0ZTtcXG4gIC0tYWNjZW50LWNvbG9yLXRocmVlOiBsaWdodHBpbms7XFxuICAtLXByaW9yaXR5LWhpZ2gtY29sb3I6IHBhbGV2aW9sZXRyZWQ7XFxuICAtLWFjdGl2ZS1jb2xvcjogdG9tYXRvO1xcbiAgLS1hY3RpdmUtY29sb3ItdHdvOiB3aGl0ZTtcXG4gIC0taW5hY3RpdmUtY29sb3I6IHNpbHZlcjtcXG4gIC0taW5hY3RpdmUtY29sb3ItdHdvOiBncmF5O1xcbiAgLS1kZWZhdWx0LXRoaWNrbmVzczogMnB4O1xcbn1cXG5cXG46cm9vdC50aGVtZS0yIHtcXG4gIC0tbWFpbi1jb2xvcjogYmxhY2s7XFxuICAtLWJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcXG4gIC0tYmFja2dyb3VuZC1jb2xvci10d286IHdoaXRlc21va2U7XFxuICAtLWFjY2VudC1jb2xvcjogbWVkaXVtc2xhdGVibHVlO1xcbiAgLS1hY2NlbnQtY29sb3ItdHdvOiB3aGl0ZTtcXG4gIC0tYWNjZW50LWNvbG9yLXRocmVlOiB0aGlzdGxlO1xcbiAgLS1wcmlvcml0eS1oaWdoLWNvbG9yOiBwYWxldmlvbGV0cmVkO1xcbiAgLS1hY3RpdmUtY29sb3I6IG1lZGl1bXNsYXRlYmx1ZTtcXG4gIC0tYWN0aXZlLWNvbG9yLXR3bzogd2hpdGU7XFxuICAtLWluYWN0aXZlLWNvbG9yOiBzaWx2ZXI7XFxuICAtLWluYWN0aXZlLWNvbG9yLXR3bzogZ3JheTtcXG4gIC0tZGVmYXVsdC10aGlja25lc3M6IDJweDtcXG59XFxuXFxuaHRtbCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwcHg7XFxuICBwYWRkaW5nOiAwcHg7XFxufVxcblxcbiosXFxuKjpiZWZvcmUsXFxuKjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbiAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2IHtcXG4gIG1hcmdpbjogMHB4O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUXVpY2tzYW5kXFxcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxuICBtYXJnaW46IDBweDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB6LWluZGV4OiAxO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLXR3byk7XFxuICBib3JkZXItYm90dG9tOiB2YXIoLS1kZWZhdWx0LXRoaWNrbmVzcykgc29saWQgdmFyKC0tYWNjZW50LWNvbG9yLXR3byk7XFxufVxcblxcbi5oZWFkZXItdG9wLXJvdyB7XFxuICBoZWlnaHQ6IDU2cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuaDEge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJFbGVjdHJvbGl6ZVxcXCI7XFxuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxufVxcblxcbmgxIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxubmF2LnNvcnQtYnV0dG9ucy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxubmF2LnNvcnQtYnV0dG9ucy1jb250YWluZXIgYnV0dG9uIHtcXG4gIHdpZHRoOiA5NnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yLXR3byk7XFxuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWFjY2VudC1jb2xvci10d28pO1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUXVpY2tzYW5kXFxcIjtcXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xcbiAgcGFkZGluZzogN3B4IDhweCA1cHg7XFxufVxcblxcbm5hdi5zb3J0LWJ1dHRvbnMtY29udGFpbmVyIGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItdHdvKTtcXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYWNjZW50LWNvbG9yKTtcXG59XFxuXFxubmF2LmJyZWFkY3J1bWItbmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxuICBwYWRkaW5nOiA1cHggMTBweCAwcHg7XFxuICBtYXJnaW46IDBweCAwcHggMTBweDtcXG59XFxuXFxuc3BhbiB7XFxuICBwYWRkaW5nOiAwcHggMTBweCAwcHg7XFxufVxcblxcbnNwYW4uYWxsLXByb2plY3RzIHtcXG4gIGhlaWdodDogMzZweDtcXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYmFja2dyb3VuZC1jb2xvci10d28pO1xcbiAgZm9udC1zaXplOiBtZWRpdW07XFxuICBsZXR0ZXItc3BhY2luZzogMC4yM3B4O1xcbiAgcGFkZGluZzogNnB4IDZweCAzcHg7XFxufVxcblxcbnNwYW4uY3VycmVudC1wcm9qZWN0IHtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICBwYWRkaW5nOiAzcHggNnB4IDNweDtcXG59XFxuXFxuYnV0dG9uLmJ0bi12aWV3LWFsbC1wcm9qZWN0cyB7XFxuICBoZWlnaHQ6IDM2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItdHdvKTtcXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYWNjZW50LWNvbG9yLXR3byk7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJRdWlja3NhbmRcXFwiO1xcbiAgZm9udC1zaXplOiBtZWRpdW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxuICBwYWRkaW5nOiAzcHggNnB4IDNweDtcXG59XFxuXFxuYnV0dG9uLmJ0bi12aWV3LWFsbC1wcm9qZWN0czpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tYWN0aXZlLWNvbG9yKTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWFjdGl2ZS1jb2xvcik7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcXG59XFxuXFxuYnV0dG9uLmJ0bi12aWV3LWFsbC1wcm9qZWN0czo6YWZ0ZXIge1xcbiAgaGVpZ2h0OiAwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxubWFpbiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAwO1xcblxcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBwYWRkaW5nLXRvcDogMTMwcHg7XFxufVxcblxcbi5pdGVtLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmctYm90dG9tOiA4MHB4O1xcbn1cXG5cXG4ucHJvamVjdC1jYXJkLFxcbi50YXNrLWNhcmQge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZmxleDogMTtcXG4gIGJvcmRlcjogdmFyKC0tZGVmYXVsdC10aGlja25lc3MpIHNvbGlkIHZhcigtLWFjY2VudC1jb2xvci10aHJlZSk7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgbWFyZ2luOiAwcHggMHB4IDIwcHg7XFxufVxcblxcbi5wcm9qZWN0LWhlYWRlcixcXG4udGFzay1oZWFkZXIge1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItdGhyZWUpO1xcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xcbiAgcGFkZGluZzogNXB4IDVweCA2cHggNXB4O1xcbn1cXG5cXG4ucHJvamVjdC1oZWFkZXI6aG92ZXIgLmlucHV0LXByb2plY3QtdGl0bGUsXFxuLnRhc2staGVhZGVyOmhvdmVyIC5pbnB1dC10YXNrLXRpdGxlIHtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG59XFxuXFxuLnRhc2staGVhZGVyLmNvbXBsZXRlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbmFjdGl2ZS1jb2xvcik7XFxufVxcblxcbi50YXNrLWRldGFpbHMuY29tcGxldGVkIHtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMS41cyBlYXNlO1xcbiAgb3BhY2l0eTogMDtcXG4gIGhlaWdodDogMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi50YXNrLWRldGFpbHMucGVuZGluZyxcXG4udGFzay1kZXRhaWxzLmNvbXBsZXRlZC52aXNpYmxlIHtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMS41cyBlYXNlO1xcbiAgb3BhY2l0eTogMTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyogVGhpcyBydWxlIGlzIHJlcXVpcmVkIGZvciBjbGljayBldmVudHMgb24gZGlzYWJsZWQgaW5wdXQgZWxlbWVudHMgdG8gcHJvcGFnYXRlIHVwd2FyZHMgb24gc29tZSBicm93c2VycyAqL1xcbmlucHV0W2Rpc2FibGVkXSB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuaW5wdXQuaW5wdXQtdGFzay10aXRsZS5jb21wbGV0ZWQge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi50YXNrLWNhcmQuY29tcGxldGVkIHtcXG4gIGJvcmRlcjogdmFyKC0tZGVmYXVsdC10aGlja25lc3MpIHNvbGlkIHZhcigtLWluYWN0aXZlLWNvbG9yKTtcXG59XFxuXFxuYnV0dG9uLmJ0bi1zYXZlLXByb2plY3QsXFxuYnV0dG9uLmJ0bi1zYXZlLXRhc2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yLXR3byk7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1tYWluLWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDVweCA4cHggNXB4O1xcbn1cXG5cXG5pbnB1dC5pbnB1dC1wcm9qZWN0LXRpdGxlLFxcbmlucHV0LmlucHV0LXRhc2stdGl0bGUge1xcbiAgZmxleDogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yLXR3byk7XFxuICBmb250LWZhbWlseTogXFxcIlF1aWNrc2FuZFxcXCI7XFxuICBmb250LXNpemU6IG1lZGl1bTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxufVxcblxcbmlucHV0LmlucHV0LXByb2plY3QtdGl0bGU6Zm9jdXMsXFxuaW5wdXQuaW5wdXQtdGFzay10aXRsZTpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4ucHJvamVjdC1oZWFkZXItbGVmdCxcXG4udGFzay1oZWFkZXItbGVmdCB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmJ1dHRvbi5idG4tdGFzay1zdGF0dXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItdHdvKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICBwYWRkaW5nOiAwcHggNnB4IDBweDtcXG59XFxuXFxuYnV0dG9uLmJ0bi10YXNrLXN0YXR1cy5wZW5kaW5nOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwi4piQXFxcIjtcXG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxufVxcblxcbmJ1dHRvbi5idG4tdGFzay1zdGF0dXMuY29tcGxldGVkOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwi4piRXFxcIjtcXG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxufVxcblxcbi5wcm9qZWN0LWhlYWRlcjpmb2N1cy13aXRoaW4sXFxuLnRhc2staGVhZGVyOmZvY3VzLXdpdGhpbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbn1cXG5cXG4udGFzay10aXRsZS5jb21wbGV0ZWQge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICB0ZXh0LWRlY29yYXRpb24tY29sb3I6IHZhcigtLWFjY2VudC1jb2xvci10d28pO1xcbiAgdGV4dC1kZWNvcmF0aW9uLXRoaWNrbmVzczogMnB4O1xcbn1cXG5cXG4udGFzay1oZWFkZXItcmlnaHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNnB4O1xcbn1cXG5cXG5idXR0b24uYnRuLXByb2plY3QtbW92ZS1kb3duLFxcbmJ1dHRvbi5idG4tcHJvamVjdC1tb3ZlLXVwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC10aHJlZSk7XFxuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yLXR3byk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgcGFkZGluZzogMHB4IDEwcHg7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbmJ1dHRvbi5idG4tcHJvamVjdC1kZWxldGUsXFxuYnV0dG9uLmJ0bi10YXNrLWRlbGV0ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtdGhyZWUpO1xcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvci10d28pO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHBhZGRpbmc6IDBweCAxMHB4O1xcbn1cXG5cXG5idXR0b24uYnRuLXByb2plY3QtbW92ZS1kb3duOmhvdmVyLFxcbmJ1dHRvbi5idG4tcHJvamVjdC1tb3ZlLXVwOmhvdmVyLFxcbmJ1dHRvbi5idG4tcHJvamVjdC1kZWxldGU6aG92ZXIsXFxuYnV0dG9uLmJ0bi10YXNrLWRlbGV0ZTpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxufVxcblxcbi5wcm9qZWN0LWRldGFpbHMgPiBkaXYsXFxuLnRhc2stZGV0YWlscyA+IGRpdiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItdHdvKTtcXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA5cHggOXB4O1xcbiAgcGFkZGluZzogMTBweCAxNXB4IDEwcHg7XFxufVxcblxcbi5wcm9qZWN0LWRldGFpbHMgPiBkaXY6aG92ZXIge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi50YXNrLWRldGFpbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbnRleHRhcmVhLmlucHV0LXRhc2stZGVzY3JpcHRpb24ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItdHdvKTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUXVpY2tzYW5kXFxcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IG1lZGl1bTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICByZXNpemU6IG5vbmU7XFxuICBwYWRkaW5nOiAxMHB4IDE1cHggMTBweDtcXG59XFxuXFxudGV4dGFyZWEuaW5wdXQtdGFzay1kZXNjcmlwdGlvbi5jb21wbGV0ZWQge1xcbiAgY29sb3I6IGdyYXk7XFxufVxcblxcbi5wcm9qZWN0LWRldGFpbHMgPiAudGFzay1ib3R0b20tcm93LFxcbi50YXNrLWRldGFpbHMgPiAudGFzay1ib3R0b20tcm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci10d28pO1xcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA5cHggOXB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuaW5wdXQuaW5wdXQtdGFzay1kdWUtZGF0ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLXR3byk7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3ItdGhyZWUpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHBhZGRpbmc6IDJweDtcXG59XFxuXFxuaW5wdXRbZGlzYWJsZWRdLmlucHV0LXRhc2stZHVlLWRhdGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pbmFjdGl2ZS1jb2xvcik7XFxufVxcblxcbi50YXNrLWRheXMtcmVtYWluaW5nLFxcbi5idG4tdGFzay1wcmlvcml0eSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgZ2FwOiA1cHg7XFxuICBtaW4td2lkdGg6IDgycHg7XFxuICBjb2xvcjogdmFyKC0taW5hY3RpdmUtY29sb3ItdHdvKTtcXG4gIGZvbnQtc2l6ZTogc21hbGw7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMHB4O1xcbn1cXG5cXG5idXR0b24uYnRuLXRhc2stcHJpb3JpdHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LXRocmVlKTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuc3Bhbi5wcmlvcml0eS1sYWJlbCB7XFxuICBwYWRkaW5nOiAwcHggMnB4IDBweCAwcHg7XFxufVxcblxcbnNwYW4ucHJpb3JpdHktaW5kaWNhdG9yIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC10aHJlZSk7XFxuICBtYXJnaW46IC04cHg7XFxufVxcblxcbnNwYW4ucHJpb3JpdHktaW5kaWNhdG9yLmxvdzo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIuKXj1xcXCI7XFxuICBjb2xvcjogbWVkaXVtc2VhZ3JlZW47XFxuICBmb250LXNpemU6IHh4LWxhcmdlO1xcbn1cXG5cXG5zcGFuLnByaW9yaXR5LWluZGljYXRvci5tZWRpdW06OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCLil49cXFwiO1xcbiAgY29sb3I6IGdvbGQ7XFxuICBmb250LXNpemU6IHh4LWxhcmdlO1xcbn1cXG5cXG5zcGFuLnByaW9yaXR5LWluZGljYXRvci5oaWdoOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwi4pePXFxcIjtcXG4gIGNvbG9yOiBjb3JhbDtcXG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxufVxcblxcbi5wcmlvcml0eS1oaWdoIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW9yaXR5LWhpZ2gtY29sb3IpO1xcbn1cXG5cXG5idXR0b24uYnRuLWJhY2stdG8tYWxsLXByb2plY3RzIHtcXG4gIGhlaWdodDogNDJweDtcXG4gIHdpZHRoOiA0MnB4O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiA1MHB4O1xcbiAgbGVmdDogMjBweDtcXG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3ItdHdvKTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvci10d28pO1xcbiAgcGFkZGluZzogMnB4IDJweCAwcHggMHB4O1xcbn1cXG5cXG5idXR0b24uYnRuLW5ldy1pdGVtIHtcXG4gIGhlaWdodDogNDJweDtcXG4gIHdpZHRoOiA0MnB4O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiA1MHB4O1xcbiAgcmlnaHQ6IDIwcHg7XFxuICBmb250LXNpemU6IHh4LWxhcmdlO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYWNjZW50LWNvbG9yLXR3byk7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItdHdvKTtcXG4gIHBhZGRpbmc6IDBweCAxMHB4IDBweDtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbmZvb3RlciBhIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRWxlY3Ryb2xpemVcXFwiO1xcbiAgY29sb3I6IGdyYXk7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAwcHgpIHtcXG4gIGJvZHkge1xcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgfVxcblxcbiAgbmF2LnNvcnQtYnV0dG9ucy1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGxlZnQ6IDU5MHB4O1xcbiAgfVxcblxcbiAgYnV0dG9uLmJ0bi1uZXctaXRlbSB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgbGVmdDogNzQwcHg7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4vdGFza1wiO1xuaW1wb3J0IHsgbG9hZFRoZW1lLCB0b2dnbGVUaGVtZSwgcmVuZGVyUHJvamVjdFZpZXdCdXR0b25zLCByZW5kZXJUYXNrVmlld0J1dHRvbnMsIGNsZWFyUHJvamVjdFZpZXdCdXR0b25zLCBjbGVhclRhc2tWaWV3QnV0dG9ucywgcmVuZGVyQnJlYWRjcnVtYk5hdiwgY2xlYXJJdGVtQ29udGFpbmVyLCByZW5kZXJBbGxQcm9qZWN0cywgcmVuZGVyVGFza3MsIHNob3dUYXNrVmlld0J1dHRvbnMsIHNob3dUb3BPZlBhZ2UsIGF1dG9BZGp1c3RIZWlnaHQsdG9nZ2xlVGFza0VsZW1lbnRzLCBjbGlja0hhbmRsZXJDb21wbGV0ZWRUYXNrQ2FyZCB9IGZyb20gXCIuL3ZpZXdcIjsgLy8gcHJldHRpZXItaWdub3JlXG5pbXBvcnQgeyBzYXZlVG9Mb2NhbFN0b3JhZ2UsIGxvYWRGcm9tTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vbG9jYWxTdG9yYWdlXCI7XG5pbXBvcnQgeyBkZW1vUHJvamVjdHMgfSBmcm9tIFwiLi9kZW1vRGF0YVwiO1xuXG5sZXQgcHJvamVjdHMgPSBsb2FkRnJvbUxvY2FsU3RvcmFnZSgpIHx8IGRlbW9Qcm9qZWN0cztcbmxldCB0YXJnZXRQcm9qZWN0O1xubGV0IHZpZXc7XG5cbmNvbnN0IGxvYWRQcm9qZWN0c1ZpZXcgPSBmdW5jdGlvbiAoKSB7XG4gIHZpZXcgPSBcInByb2plY3RzXCI7XG4gIGNsZWFyVGFza1ZpZXdCdXR0b25zKCk7XG4gIHJlbmRlclByb2plY3RWaWV3QnV0dG9ucygpO1xuICBjbGlja0hhbmRsZXJCdG5OZXdJdGVtKCk7XG4gIHJlbmRlckJyZWFkY3J1bWJOYXYodmlldyk7XG4gIGNsZWFySXRlbUNvbnRhaW5lcigpO1xuICByZW5kZXJBbGxQcm9qZWN0cyhwcm9qZWN0cyk7XG4gIGlucHV0SGFuZGxlclByb2plY3RUaXRsZSgpO1xuICBjbGlja0hhbmRsZXJEaXZQcm9qZWN0RGV0YWlscygpO1xuICBjbGlja0hhbmRsZXJCdG5EZWxldGVQcm9qZWN0KCk7XG59O1xuXG5jb25zdCBsb2FkVGFza3NWaWV3ID0gZnVuY3Rpb24gKHRhcmdldFByb2plY3QsIHNvcnRDcml0ZXJpYSkge1xuICB2aWV3ID0gXCJ0YXNrc1wiO1xuICBjbGVhclByb2plY3RWaWV3QnV0dG9ucygpO1xuICByZW5kZXJUYXNrVmlld0J1dHRvbnMoKTtcbiAgY2xpY2tIYW5kbGVyQnRuTmV3SXRlbSgpO1xuICByZW5kZXJCcmVhZGNydW1iTmF2KHZpZXcsIHRhcmdldFByb2plY3QpO1xuICBjbGVhckl0ZW1Db250YWluZXIoKTtcbiAgcmVuZGVyVGFza3ModGFyZ2V0UHJvamVjdC50YXNrcywgc29ydENyaXRlcmlhKTtcbiAgc2hvd1Rhc2tWaWV3QnV0dG9ucyh0YXJnZXRQcm9qZWN0KTtcbiAgY2xpY2tIYW5kbGVyQnRuU29ydEJ5RHVlRGF0ZSh0YXJnZXRQcm9qZWN0KTtcbiAgY2xpY2tIYW5kbGVyQnRuU29ydEJ5UHJpb3JpdHkodGFyZ2V0UHJvamVjdCk7XG4gIGNsaWNrSGFuZGxlckJ0blZpZXdBbGxQcm9qZWN0cygpO1xuICBjbGlja0hhbmRsZXJCdG5CYWNrVG9BbGxQcm9qZWN0cygpO1xuICBjbGlja0hhbmRsZXJDb21wbGV0ZWRUYXNrQ2FyZCgpO1xuICBjbGlja0hhbmRsZXJCdG5UYXNrU3RhdHVzKHRhcmdldFByb2plY3QpO1xuICBpbnB1dEhhbmRsZXJUYXNrVGl0bGUodGFyZ2V0UHJvamVjdCk7XG4gIGNsaWNrSGFuZGxlckJ0bkRlbGV0ZVRhc2soKTtcbiAgaW5wdXRIYW5kbGVyVGFza0Rlc2NyaXB0aW9uKHRhcmdldFByb2plY3QpO1xuICBpbnB1dEhhbmRsZXJUYXNrRHVlRGF0ZSh0YXJnZXRQcm9qZWN0KTtcbiAgY2xpY2tIYW5kbGVyQnRuVGFza1ByaW9yaXR5KHRhcmdldFByb2plY3QpO1xuICBzaG93VG9wT2ZQYWdlKCk7XG59O1xuXG5jb25zdCBjcmVhdGVOZXdQcm9qZWN0ID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QoXCJcIiwgXCJcIiwgW10pO1xuICBwcm9qZWN0LmlkID0gYFAke25ldyBEYXRlKCkuZ2V0VGltZSgpfWA7XG4gIHByb2plY3RzW3Byb2plY3QuaWRdID0gcHJvamVjdDtcbiAgc2F2ZVRvTG9jYWxTdG9yYWdlKCk7XG4gIGNsZWFySXRlbUNvbnRhaW5lcigpO1xuICBsb2FkUHJvamVjdHNWaWV3KCk7XG4gIGNvbnN0IGlucHV0UHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICBcIi5pbnB1dC1wcm9qZWN0LXRpdGxlXCJcbiAgKVswXTtcbiAgaW5wdXRQcm9qZWN0VGl0bGUuZm9jdXMoKTtcbn07XG5cbmNvbnN0IGRlbGV0ZVByb2plY3QgPSBmdW5jdGlvbiAoZSkge1xuICBjb25zdCBwcm9qZWN0SWQgPSBlLnRhcmdldC5jbG9zZXN0KFwiLnByb2plY3QtY2FyZFwiKS5kYXRhc2V0LnByb2plY3RJZDtcbiAgY29uc3QgcHJvamVjdFRpdGxlID0gcHJvamVjdHNbcHJvamVjdElkXS50aXRsZTtcbiAgY29uc3QgY29uZmlybURlbGV0ZSA9IGNvbmZpcm0oXG4gICAgcHJvamVjdFRpdGxlXG4gICAgICA/IGAke3Byb2plY3RUaXRsZX0gLSBEZWxldGUgdGhpcyBwcm9qZWN0P2BcbiAgICAgIDogXCJEZWxldGUgdGhpcyBwcm9qZWN0P1wiXG4gICk7XG4gIGlmICghY29uZmlybURlbGV0ZSkgcmV0dXJuO1xuICBkZWxldGUgcHJvamVjdHNbcHJvamVjdElkXTtcbiAgc2F2ZVRvTG9jYWxTdG9yYWdlKCk7XG4gIGxvYWRQcm9qZWN0c1ZpZXcoKTtcbn07XG5cbmNvbnN0IGNyZWF0ZU5ld1Rhc2sgPSBmdW5jdGlvbiAoKSB7XG4gIGxldCBpZCA9IGBUJHtuZXcgRGF0ZSgpLmdldFRpbWUoKX1gO1xuICB0YXJnZXRQcm9qZWN0LmFkZFRhc2soXG4gICAgbmV3IFRhc2soaWQsIFwiXCIsIFwiXCIsIFwiXCIsIFwicGVuZGluZ1wiLCBcIm1lZGl1bVwiLCBcImVuYWJsZWRcIilcbiAgKTtcbiAgc2F2ZVRvTG9jYWxTdG9yYWdlKCk7XG4gIGNsZWFySXRlbUNvbnRhaW5lcigpO1xuICBsb2FkVGFza3NWaWV3KHRhcmdldFByb2plY3QpO1xuICBjb25zdCBpbnB1dFRhc2tUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXQtdGFzay10aXRsZVwiKTtcbiAgaW5wdXRUYXNrVGl0bGUuZm9jdXMoKTtcbn07XG5cbmNvbnN0IGRlbGV0ZVRhc2sgPSBmdW5jdGlvbiAoZSkge1xuICBjb25zdCB0YXNrSWQgPSBlLnRhcmdldC5jbG9zZXN0KFwiLnRhc2stY2FyZFwiKS5kYXRhc2V0LnRhc2tJZDtcbiAgY29uc3QgdGFza1RpdGxlID0gdGFyZ2V0UHJvamVjdC50YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2suaWQgPT09IHRhc2tJZClbMF1cbiAgICAudGl0bGU7XG4gIGNvbnN0IGNvbmZpcm1EZWxldGUgPSBjb25maXJtKFxuICAgIHRhc2tUaXRsZSA/IGAke3Rhc2tUaXRsZX0gLSBEZWxldGUgdGhpcyB0YXNrP2AgOiBcIkRlbGV0ZSB0aGlzIHRhc2s/XCJcbiAgKTtcbiAgaWYgKCFjb25maXJtRGVsZXRlKSByZXR1cm47XG4gIHRhcmdldFByb2plY3QuZGVsZXRlVGFzayh0YXNrSWQpO1xuICBzYXZlVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgbG9hZFRhc2tzVmlldyh0YXJnZXRQcm9qZWN0KTtcbn07XG5cbi8vIFNhdmUgZnVuY3Rpb25zIHRyaWdnZXJlZCBieSBpbnB1dHMvZWRpdHNcblxuY29uc3QgYXV0b1NhdmVQcm9qZWN0VGl0bGVDaGFuZ2VzID0gZnVuY3Rpb24gKHByb2plY3RJZCwgdGl0bGUpIHtcbiAgcHJvamVjdHNbcHJvamVjdElkXS50aXRsZSA9IHRpdGxlLnZhbHVlO1xuICBzYXZlVG9Mb2NhbFN0b3JhZ2UoKTtcbn07XG5cbmNvbnN0IHRvZ2dsZVRhc2tTdGF0dXMgPSBmdW5jdGlvbiAodGFyZ2V0UHJvamVjdCwgdGFza0lkKSB7XG4gIHRhcmdldFByb2plY3QudGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIGlmICh0YXNrLmlkID09PSB0YXNrSWQpIHtcbiAgICAgIHRhc2suc3RhdHVzID09PSBcInBlbmRpbmdcIlxuICAgICAgICA/ICh0YXNrLnN0YXR1cyA9IFwiY29tcGxldGVkXCIpXG4gICAgICAgIDogKHRhc2suc3RhdHVzID0gXCJwZW5kaW5nXCIpO1xuXG4gICAgICB0YXNrLmlucHV0U3RhdHVzID09PSBcImVuYWJsZWRcIlxuICAgICAgICA/ICh0YXNrLmlucHV0U3RhdHVzID0gXCJkaXNhYmxlZFwiKVxuICAgICAgICA6ICh0YXNrLmlucHV0U3RhdHVzID0gXCJlbmFibGVkXCIpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCBhdXRvU2F2ZVRhc2tUaXRsZUNoYW5nZXMgPSBmdW5jdGlvbiAodGFyZ2V0UHJvamVjdCwgdGFza0lkLCB0YXNrVGl0bGUpIHtcbiAgdGFyZ2V0UHJvamVjdC50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgaWYgKHRhc2suaWQgPT09IHRhc2tJZCkgdGFzay50aXRsZSA9IHRhc2tUaXRsZS52YWx1ZTtcbiAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgfSk7XG59O1xuXG4vLyBwcmV0dGllci1pZ25vcmVcbmNvbnN0IGF1dG9TYXZlVGFza0Rlc2NyaXB0aW9uQ2hhbmdlcyA9IGZ1bmN0aW9uICh0YXJnZXRQcm9qZWN0LCB0YXNrSWQsIHRhc2tEZXNjcmlwdGlvbkVsKSB7XG4gIHRhcmdldFByb2plY3QudGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIGlmICh0YXNrLmlkID09PSB0YXNrSWQpIHRhc2suZGVzY3JpcHRpb24gPSB0YXNrRGVzY3JpcHRpb25FbC52YWx1ZTtcbiAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgfSk7XG59O1xuXG4vLyBwcmV0dGllci1pZ25vcmVcbmNvbnN0IGF1dG9TYXZlVGFza0R1ZURhdGVDaGFuZ2VzID0gZnVuY3Rpb24gKHRhcmdldFByb2plY3QsIHRhc2tJZCwgdGFza0R1ZURhdGVFbCkge1xuICB0YXJnZXRQcm9qZWN0LnRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICBpZiAodGFzay5pZCA9PT0gdGFza0lkKSB0YXNrLmR1ZURhdGUgPSB0YXNrRHVlRGF0ZUVsLnZhbHVlO1xuICAgIHNhdmVUb0xvY2FsU3RvcmFnZSgpO1xuICB9KTtcbn07XG5cbi8vIHByZXR0aWVyLWlnbm9yZVxuY29uc3QgdXBkYXRlRGF5c1JlbWFpbmluZyA9IGZ1bmN0aW9uICh0YXJnZXRQcm9qZWN0LCB0YXNrSWQsIGUpIHtcbiAgY29uc3QgdGFza0RheXNSZW1haW5pbmdFbCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWRheXMtcmVtYWluaW5nXCIpO1xuICB0YXJnZXRQcm9qZWN0LnRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICBpZiAodGFzay5pZCA9PT0gdGFza0lkKSB0YXNrRGF5c1JlbWFpbmluZ0VsLmlubmVySFRNTCA9IHRhc2suZ2V0RGF5c1JlbWFpbmluZygpO1xuICB9KVxufTtcblxuLy8gcHJldHRpZXItaWdub3JlXG5jb25zdCB0b2dnbGVUYXNrUHJpb3J0eSA9IGZ1bmN0aW9uICh0YXJnZXRQcm9qZWN0LCB0YXNrSWQsIGJ1dHRvbikge1xuICBjb25zdCBwcmlvcml0eUxldmVsU2hpZnRlciA9IHsgbG93OiBcIm1lZGl1bVwiLCBtZWRpdW06IFwiaGlnaFwiLCBoaWdoOiBcImxvd1wiIH07XG4gIHRhcmdldFByb2plY3QudGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIGlmICh0YXNrLmlkID09PSB0YXNrSWQpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRMZXZlbCA9IHRhc2sucHJpb3JpdHk7XG4gICAgICBjb25zdCBuZXh0TGV2ZWwgPSBwcmlvcml0eUxldmVsU2hpZnRlclt0YXNrLnByaW9yaXR5XTtcbiAgICAgIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBidXR0b24ucXVlcnlTZWxlY3RvcihcIi5wcmlvcml0eS1sYWJlbFwiKVxuICAgICAgY29uc3QgcHJpb3JpdHlJbmRpY2F0b3IgPSBidXR0b24ucXVlcnlTZWxlY3RvcihcIi5wcmlvcml0eS1pbmRpY2F0b3JcIilcbiAgICAgIGNvbnN0IHRhc2tDYXJkID0gYnV0dG9uLmNsb3Nlc3QoXCIudGFzay1jYXJkXCIpXG4gICAgICBwcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gbmV4dExldmVsO1xuICAgICAgcHJpb3JpdHlJbmRpY2F0b3IuY2xhc3NMaXN0LnJlcGxhY2UoY3VycmVudExldmVsLCBuZXh0TGV2ZWwpO1xuICAgICAgdGFza0NhcmQuY2xhc3NMaXN0LnJlcGxhY2UoY3VycmVudExldmVsLCBuZXh0TGV2ZWwpO1xuICAgICAgdGFzay5wcmlvcml0eSA9IG5leHRMZXZlbDtcbiAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UoKVxuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCBzb3J0QnlEdWVEYXRlID0gZnVuY3Rpb24gKHRhcmdldFByb2plY3QpIHtcbiAgbG9hZFRhc2tzVmlldyh0YXJnZXRQcm9qZWN0LCBcImR1ZURhdGVcIik7XG59O1xuXG5jb25zdCBzb3J0QnlQcmlvcml0eSA9IGZ1bmN0aW9uICh0YXJnZXRQcm9qZWN0KSB7XG4gIGxvYWRUYXNrc1ZpZXcodGFyZ2V0UHJvamVjdCwgXCJwcmlvcml0eVwiKTtcbn07XG5cbi8vIEV2ZW50IGhhbmRsZXJzIC0gTmF2aWdhdGlvblxuXG5jb25zdCBjbGlja0hhbmRsZXJEaXZQcm9qZWN0RGV0YWlscyA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgcHJvamVjdERldGFpbHNOTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdC1kZXRhaWxzXCIpO1xuICBwcm9qZWN0RGV0YWlsc05MLmZvckVhY2goKHByb2plY3REZXRhaWwpID0+IHtcbiAgICBwcm9qZWN0RGV0YWlsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjb25zdCBwcm9qZWN0Q2FyZElkID0gcHJvamVjdERldGFpbC5wYXJlbnRFbGVtZW50LmRhdGFzZXQucHJvamVjdElkO1xuICAgICAgdGFyZ2V0UHJvamVjdCA9IHByb2plY3RzW3Byb2plY3RDYXJkSWRdO1xuICAgICAgbG9hZFRhc2tzVmlldyh0YXJnZXRQcm9qZWN0KTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCBjbGlja0hhbmRsZXJCdG5WaWV3QWxsUHJvamVjdHMgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGJ0blZpZXdBbGxQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLXZpZXctYWxsLXByb2plY3RzXCIpO1xuICBidG5WaWV3QWxsUHJvamVjdHMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBsb2FkUHJvamVjdHNWaWV3KCk7XG4gIH0pO1xufTtcblxuY29uc3QgY2xpY2tIYW5kbGVyQnRuQmFja1RvQWxsUHJvamVjdHMgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGJ0bkJhY2tUb0FsbFByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG4tYmFjay10by1hbGwtcHJvamVjdHNcIik7IC8vIHByZXR0aWVyLWlnbm9yZVxuICBidG5CYWNrVG9BbGxQcm9qZWN0cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGxvYWRQcm9qZWN0c1ZpZXcoKTtcbiAgfSk7XG59O1xuXG5jb25zdCBjbGlja0hhbmRsZXJCdG5Tb3J0QnlEdWVEYXRlID0gZnVuY3Rpb24gKHRhcmdldFByb2plY3QpIHtcbiAgY29uc3QgYnRuU29ydEJ5RHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLXNvcnQtZHVlLWRhdGVcIik7XG4gIGJ0blNvcnRCeUR1ZURhdGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+XG4gICAgc29ydEJ5RHVlRGF0ZSh0YXJnZXRQcm9qZWN0KVxuICApO1xufTtcblxuY29uc3QgY2xpY2tIYW5kbGVyQnRuU29ydEJ5UHJpb3JpdHkgPSBmdW5jdGlvbiAodGFyZ2V0UHJvamVjdCkge1xuICBjb25zdCBidG5Tb3J0QnlQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLXNvcnQtcHJpb3JpdHlcIik7XG4gIGJ0blNvcnRCeVByaW9yaXR5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PlxuICAgIHNvcnRCeVByaW9yaXR5KHRhcmdldFByb2plY3QpXG4gICk7XG59O1xuXG4vLyBFdmVudCBoYW5kbGVycyAtIENyZWF0ZSBhbmQgZGVsZXRlIGl0ZW1zXG5cbmNvbnN0IGNsaWNrSGFuZGxlckJ0bk5ld0l0ZW0gPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGJ0bk5ld0l0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1uZXctaXRlbVwiKTtcbiAgYnRuTmV3SXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlmICh2aWV3ID09PSBcInByb2plY3RzXCIpIGNyZWF0ZU5ld1Byb2plY3QoKTtcbiAgICBpZiAodmlldyA9PT0gXCJ0YXNrc1wiKSBjcmVhdGVOZXdUYXNrKCk7XG4gIH0pO1xufTtcblxuY29uc3QgY2xpY2tIYW5kbGVyQnRuRGVsZXRlUHJvamVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgZGVsZXRlUHJvamVjdEJ1dHRvbnNOTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgXCIuYnRuLXByb2plY3QtZGVsZXRlXCJcbiAgKTtcbiAgZGVsZXRlUHJvamVjdEJ1dHRvbnNOTC5mb3JFYWNoKChidXR0b24pID0+XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkZWxldGVQcm9qZWN0LmJpbmQodGhpcykpXG4gICk7XG59O1xuXG5jb25zdCBjbGlja0hhbmRsZXJCdG5EZWxldGVUYXNrID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBkZWxldGVUYXNrQnV0dG9uc05MID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5idG4tdGFzay1kZWxldGVcIik7XG4gIGRlbGV0ZVRhc2tCdXR0b25zTkwuZm9yRWFjaCgoYnV0dG9uKSA9PlxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGVsZXRlVGFzay5iaW5kKHRoaXMpKVxuICApO1xufTtcblxuLy8gRXZlbnQgaGFuZGxlcnMgLSBJbnB1dHMvZWRpdHMgbWFkZSB0byBwcm9qZWN0cyBhbmQgdGFza3NcblxuY29uc3QgaW5wdXRIYW5kbGVyUHJvamVjdFRpdGxlID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBwcm9qZWN0VGl0bGVzTkwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmlucHV0LXByb2plY3QtdGl0bGVcIik7XG5cbiAgaWYgKCFwcm9qZWN0VGl0bGVzTkwpIHJldHVybjtcblxuICBwcm9qZWN0VGl0bGVzTkwuZm9yRWFjaCgodGl0bGUpID0+XG4gICAgdGl0bGUuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XG4gICAgICBjb25zdCBwcm9qZWN0SWQgPSBlLnRhcmdldC5jbG9zZXN0KFwiLnByb2plY3QtY2FyZFwiKS5kYXRhc2V0LnByb2plY3RJZDtcbiAgICAgIGF1dG9TYXZlUHJvamVjdFRpdGxlQ2hhbmdlcyhwcm9qZWN0SWQsIHRpdGxlKTtcbiAgICB9KVxuICApO1xufTtcblxuLy8gcHJldHRpZXItaWdub3JlXG5jb25zdCBjbGlja0hhbmRsZXJCdG5UYXNrU3RhdHVzID0gZnVuY3Rpb24gKHRhcmdldFByb2plY3QpIHtcbiAgY29uc3QgYnRuVGFza1BlbmRpbmdOTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYnRuLXRhc2stc3RhdHVzXCIpO1xuICBidG5UYXNrUGVuZGluZ05MLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBidXR0b24uYmx1cigpO1xuICAgICAgY29uc3QgdGFza0NhcmQgPSBlLnRhcmdldC5jbG9zZXN0KFwiLnRhc2stY2FyZFwiKTtcbiAgICAgIGNvbnN0IHRhc2tJZCA9IHRhc2tDYXJkLmRhdGFzZXQudGFza0lkO1xuICAgICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uRWwgPSB0YXNrQ2FyZC5xdWVyeVNlbGVjdG9yKFwiLmlucHV0LXRhc2stZGVzY3JpcHRpb25cIik7XG4gICAgICB0b2dnbGVUYXNrU3RhdHVzKHRhcmdldFByb2plY3QsIHRhc2tJZCk7XG4gICAgICB0b2dnbGVUYXNrRWxlbWVudHMoYnV0dG9uKTtcbiAgICAgIGF1dG9BZGp1c3RIZWlnaHQodGFza0Rlc2NyaXB0aW9uRWwpO1xuICAgICAgc2F2ZVRvTG9jYWxTdG9yYWdlKCk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3QgaW5wdXRIYW5kbGVyVGFza1RpdGxlID0gZnVuY3Rpb24gKHRhcmdldFByb2plY3QpIHtcbiAgY29uc3QgdGFza1RpdGxlc05MID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pbnB1dC10YXNrLXRpdGxlXCIpO1xuXG4gIGlmICghdGFza1RpdGxlc05MKSByZXR1cm47XG5cbiAgdGFza1RpdGxlc05MLmZvckVhY2goKHRpdGxlKSA9PlxuICAgIHRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xuICAgICAgY29uc3QgdGFza0lkID0gZS50YXJnZXQuY2xvc2VzdChcIi50YXNrLWNhcmRcIikuZGF0YXNldC50YXNrSWQ7XG4gICAgICBhdXRvU2F2ZVRhc2tUaXRsZUNoYW5nZXModGFyZ2V0UHJvamVjdCwgdGFza0lkLCB0aXRsZSk7XG4gICAgfSlcbiAgKTtcbn07XG5cbi8vIHByZXR0aWVyLWlnbm9yZVxuY29uc3QgaW5wdXRIYW5kbGVyVGFza0Rlc2NyaXB0aW9uID0gZnVuY3Rpb24gKHRhcmdldFByb2plY3QpIHtcbiAgY29uc3QgdGFza0Rlc2NyaXB0aW9uc05MID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pbnB1dC10YXNrLWRlc2NyaXB0aW9uXCIpO1xuXG4gIGlmICghdGFza0Rlc2NyaXB0aW9uc05MKSByZXR1cm47XG5cbiAgdGFza0Rlc2NyaXB0aW9uc05MLmZvckVhY2goKHRhc2tEZXNjcmlwdGlvbkVsKSA9PiB7XG4gICAgYXV0b0FkanVzdEhlaWdodCh0YXNrRGVzY3JpcHRpb25FbCk7XG5cbiAgICB0YXNrRGVzY3JpcHRpb25FbC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcbiAgICAgIGNvbnN0IHRhc2tJZCA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIudGFzay1jYXJkXCIpLmRhdGFzZXQudGFza0lkO1xuICAgICAgYXV0b1NhdmVUYXNrRGVzY3JpcHRpb25DaGFuZ2VzKHRhcmdldFByb2plY3QsIHRhc2tJZCwgdGFza0Rlc2NyaXB0aW9uRWwpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IGlucHV0SGFuZGxlclRhc2tEdWVEYXRlID0gZnVuY3Rpb24gKHRhcmdldFByb2plY3QpIHtcbiAgY29uc3QgdGFza0R1ZURhdGVOTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaW5wdXQtdGFzay1kdWUtZGF0ZVwiKTtcblxuICBpZiAoIXRhc2tEdWVEYXRlTkwpIHJldHVybjtcblxuICB0YXNrRHVlRGF0ZU5MLmZvckVhY2goKHRhc2tEdWVEYXRlRWwpID0+XG4gICAgdGFza0R1ZURhdGVFbC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcbiAgICAgIGNvbnN0IHRhc2tJZCA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIudGFzay1jYXJkXCIpLmRhdGFzZXQudGFza0lkO1xuICAgICAgYXV0b1NhdmVUYXNrRHVlRGF0ZUNoYW5nZXModGFyZ2V0UHJvamVjdCwgdGFza0lkLCB0YXNrRHVlRGF0ZUVsKTtcbiAgICAgIHVwZGF0ZURheXNSZW1haW5pbmcodGFyZ2V0UHJvamVjdCwgdGFza0lkLCBlKTtcbiAgICB9KVxuICApO1xufTtcblxuY29uc3QgY2xpY2tIYW5kbGVyQnRuVGFza1ByaW9yaXR5ID0gZnVuY3Rpb24gKHRhcmdldFByb2plY3QpIHtcbiAgY29uc3QgYnRuVGFza1ByaW9yaXR5TkwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJ0bi10YXNrLXByaW9yaXR5XCIpO1xuICBidG5UYXNrUHJpb3JpdHlOTC5mb3JFYWNoKChidXR0b24pID0+XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgY29uc3QgdGFza0lkID0gZS50YXJnZXQuY2xvc2VzdChcIi50YXNrLWNhcmRcIikuZGF0YXNldC50YXNrSWQ7XG4gICAgICB0b2dnbGVUYXNrUHJpb3J0eSh0YXJnZXRQcm9qZWN0LCB0YXNrSWQsIGJ1dHRvbik7XG4gICAgfSlcbiAgKTtcbn07XG5cbi8vIEluaXRpYWxpemUgYXBwXG5jb25zdCBpbml0QXBwID0gZnVuY3Rpb24gKCkge1xuICBsb2FkUHJvamVjdHNWaWV3KCk7XG4gIHJlbmRlclByb2plY3RWaWV3QnV0dG9ucygpO1xuICBjbGlja0hhbmRsZXJCdG5OZXdJdGVtKCk7XG4gIGxvYWRUaGVtZSgpO1xuICB0b2dnbGVUaGVtZSgpO1xufTtcblxuZXhwb3J0IHsgcHJvamVjdHMsIGluaXRBcHAgfTtcbiIsImV4cG9ydCBjbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IoaWQsIHRpdGxlLCB0YXNrcykge1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy50YXNrcyA9IHRhc2tzO1xuICB9XG5cbiAgYWRkVGFzayh0YXNrKSB7XG4gICAgdGhpcy50YXNrcy5wdXNoKHRhc2spO1xuICB9XG5cbiAgZGVsZXRlVGFzayh0YXNrSWQpIHtcbiAgICBjb25zdCByZW1haW5pbmdUYXNrcyA9IHRoaXMudGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmlkICE9PSB0YXNrSWQpO1xuICAgIHRoaXMudGFza3MgPSByZW1haW5pbmdUYXNrcztcbiAgfVxufVxuIiwiaW1wb3J0IHsgZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5cbmV4cG9ydCBjbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IoaWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgc3RhdHVzLCBwcmlvcml0eSwgaW5wdXRTdGF0dXMpIHtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLmlucHV0U3RhdHVzID0gaW5wdXRTdGF0dXM7XG4gIH1cblxuICBnZXREYXlzUmVtYWluaW5nKCkge1xuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCBkdWVEYXRlID0gRGF0ZS5wYXJzZSh0aGlzLmR1ZURhdGUpO1xuXG4gICAgaWYgKCF0aGlzLmR1ZURhdGUpIHJldHVybiBgbm8gZHVlIGRhdGVgO1xuXG4gICAgY29uc3QgZGF5c1JlbWFpbmluZyA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhkdWVEYXRlLCB0b2RheSk7XG5cbiAgICBpZiAoZGF5c1JlbWFpbmluZyA8IC0xKSByZXR1cm4gYGR1ZSAkey1kYXlzUmVtYWluaW5nfSBkYXlzIGFnb2A7XG4gICAgaWYgKGRheXNSZW1haW5pbmcgPT09IC0xKSByZXR1cm4gYGR1ZSAxIGRheSBhZ29gO1xuICAgIGlmIChkYXlzUmVtYWluaW5nID09PSAwKSByZXR1cm4gYGR1ZSB0b2RheWA7XG4gICAgaWYgKGRheXNSZW1haW5pbmcgPT09IDEpIHJldHVybiBgZHVlIGluIDEgZGF5YDtcbiAgICBpZiAoZGF5c1JlbWFpbmluZyA+IDEpIHJldHVybiBgZHVlIGluICR7ZGF5c1JlbWFpbmluZ30gZGF5c2A7XG4gIH1cbn1cbiIsImltcG9ydCBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mRGF5IGZyb20gXCIuLi9zdGFydE9mRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9EQVkgPSA4NjQwMDAwMDtcblxuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXNcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgZGF5cyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIGRheXMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuIFRoaXMgbWVhbnMgdGhhdCB0aGUgdGltZXMgYXJlIHJlbW92ZWRcbiAqIGZyb20gdGhlIGRhdGVzIGFuZCB0aGVuIHRoZSBkaWZmZXJlbmNlIGluIGRheXMgaXMgY2FsY3VsYXRlZC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgZWFybGllciBkYXRlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIGRheXNcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgY2FsZW5kYXIgZGF5cyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTEgMjM6MDA6MDAgYW5kIDIgSnVseSAyMDEyIDAwOjAwOjAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKFxuICogICBuZXcgRGF0ZSgyMDEyLCA2LCAyLCAwLCAwKSxcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMiwgMjMsIDApXG4gKiApXG4gKiAvLz0+IDM2NlxuICogLy8gSG93IG1hbnkgY2FsZW5kYXIgZGF5cyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTEgMjM6NTk6MDAgYW5kIDMgSnVseSAyMDExIDAwOjAxOjAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAzLCAwLCAxKSxcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMiwgMjMsIDU5KVxuICogKVxuICogLy89PiAxXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIHN0YXJ0T2ZEYXlMZWZ0ID0gc3RhcnRPZkRheShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIHN0YXJ0T2ZEYXlSaWdodCA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlUmlnaHQpO1xuICB2YXIgdGltZXN0YW1wTGVmdCA9IHN0YXJ0T2ZEYXlMZWZ0LmdldFRpbWUoKSAtIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoc3RhcnRPZkRheUxlZnQpO1xuICB2YXIgdGltZXN0YW1wUmlnaHQgPSBzdGFydE9mRGF5UmlnaHQuZ2V0VGltZSgpIC0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhzdGFydE9mRGF5UmlnaHQpO1xuXG4gIC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSBkYXkgaXMgbm90IGNvbnN0YW50XG4gIC8vIChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSBkYXkgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuICByZXR1cm4gTWF0aC5yb3VuZCgodGltZXN0YW1wTGVmdCAtIHRpbWVzdGFtcFJpZ2h0KSAvIE1JTExJU0VDT05EU19JTl9EQVkpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSBkYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSBkYXkgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mRGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZlwiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpO1xuXG4gIC8vIENsb25lIHRoZSBkYXRlXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZihhcmd1bWVudCkgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNzdHJpbmctYXJndW1lbnRzXCIpO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3R5cGVvZihvKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvO1xuICB9IDogZnVuY3Rpb24gKG8pIHtcbiAgICByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbztcbiAgfSwgX3R5cGVvZihvKTtcbn0iLCIvKipcbiAqIEdvb2dsZSBDaHJvbWUgYXMgb2YgNjcuMC4zMzk2Ljg3IGludHJvZHVjZWQgdGltZXpvbmVzIHdpdGggb2Zmc2V0IHRoYXQgaW5jbHVkZXMgc2Vjb25kcy5cbiAqIFRoZXkgdXN1YWxseSBhcHBlYXIgZm9yIGRhdGVzIHRoYXQgZGVub3RlIHRpbWUgYmVmb3JlIHRoZSB0aW1lem9uZXMgd2VyZSBpbnRyb2R1Y2VkXG4gKiAoZS5nLiBmb3IgJ0V1cm9wZS9QcmFndWUnIHRpbWV6b25lIHRoZSBvZmZzZXQgaXMgR01UKzAwOjU3OjQ0IGJlZm9yZSAxIE9jdG9iZXIgMTg5MVxuICogYW5kIEdNVCswMTowMDowMCBhZnRlciB0aGF0IGRhdGUpXG4gKlxuICogRGF0ZSNnZXRUaW1lem9uZU9mZnNldCByZXR1cm5zIHRoZSBvZmZzZXQgaW4gbWludXRlcyBhbmQgd291bGQgcmV0dXJuIDU3IGZvciB0aGUgZXhhbXBsZSBhYm92ZSxcbiAqIHdoaWNoIHdvdWxkIGxlYWQgdG8gaW5jb3JyZWN0IGNhbGN1bGF0aW9ucy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHRpbWV6b25lIG9mZnNldCBpbiBtaWxsaXNlY29uZHMgdGhhdCB0YWtlcyBzZWNvbmRzIGluIGFjY291bnQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZSkge1xuICB2YXIgdXRjRGF0ZSA9IG5ldyBEYXRlKERhdGUuVVRDKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSwgZGF0ZS5nZXRIb3VycygpLCBkYXRlLmdldE1pbnV0ZXMoKSwgZGF0ZS5nZXRTZWNvbmRzKCksIGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkpKTtcbiAgdXRjRGF0ZS5zZXRVVENGdWxsWWVhcihkYXRlLmdldEZ1bGxZZWFyKCkpO1xuICByZXR1cm4gZGF0ZS5nZXRUaW1lKCkgLSB1dGNEYXRlLmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgeyBlbCB9IGZyb20gXCJkYXRlLWZucy9sb2NhbGVcIjtcblxuY29uc3QgaDFFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMVwiKTtcbmNvbnN0IGJyZWFkY3J1bWJOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJyZWFkY3J1bWItbmF2XCIpO1xuY29uc3Qgc29ydEJ1dHRvbnNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNvcnQtYnV0dG9ucy1jb250YWluZXJcIik7XG5jb25zdCBpdGVtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pdGVtLWNvbnRhaW5lclwiKTtcbmNvbnN0IGxvd2VyQnV0dG9uc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG93ZXItYnV0dG9ucy1jb250YWluZXJcIik7IC8vIHByZXR0aWVyLWlnbm9yZVxuXG5jb25zdCBzZXRUaGVtZSA9IGZ1bmN0aW9uICh0aGVtZSkge1xuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NOYW1lID0gdGhlbWU7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwib2Rpbi10b2RvLWxpc3QtdGhlbWVcIiwgdGhlbWUpO1xufTtcblxuY29uc3QgbG9hZFRoZW1lID0gZnVuY3Rpb24gKCkge1xuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0aGVtZVwiKSAhPT0gbnVsbCkge1xuICAgIHNldFRoZW1lKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwib2Rpbi10b2RvLWxpc3QtdGhlbWVcIikpO1xuICB9IGVsc2Uge1xuICAgIHNldFRoZW1lKFwidGhlbWUtMVwiKTtcbiAgfVxufTtcblxuY29uc3QgdG9nZ2xlVGhlbWUgPSBmdW5jdGlvbiAoKSB7XG4gIGgxRWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NOYW1lID09PSBcInRoZW1lLTFcIlxuICAgICAgPyBzZXRUaGVtZShcInRoZW1lLTJcIilcbiAgICAgIDogc2V0VGhlbWUoXCJ0aGVtZS0xXCIpO1xuICB9KTtcbn07XG5cbmNvbnN0IHJlbmRlckJyZWFkY3J1bWJOYXYgPSBmdW5jdGlvbiAodmlldywgY3VycmVudFByb2plY3QpIHtcbiAgaWYgKHZpZXcgPT09IFwicHJvamVjdHNcIikge1xuICAgIGJyZWFkY3J1bWJOYXYuZm9yRWFjaCgoZWxlbWVudCkgPT4gKGVsZW1lbnQuaW5uZXJIVE1MID0gYGApKTtcbiAgICBicmVhZGNydW1iTmF2LmZvckVhY2goXG4gICAgICAoZWxlbWVudCkgPT5cbiAgICAgICAgKGVsZW1lbnQuaW5uZXJIVE1MID0gYFxuICA8c3BhbiBjbGFzcz1cImFsbC1wcm9qZWN0c1wiPkFsbCBQcm9qZWN0czwvc3Bhbj5cbiAgPHNwYW4gY2xhc3M9XCJzZXBhcmF0b3JcIj4+PC9zcGFuPlxuICBgKVxuICAgICk7XG4gIH1cblxuICBpZiAodmlldyA9PT0gXCJ0YXNrc1wiKSB7XG4gICAgYnJlYWRjcnVtYk5hdi5mb3JFYWNoKChlbGVtZW50KSA9PiAoZWxlbWVudC5pbm5lckhUTUwgPSBgYCkpO1xuICAgIGJyZWFkY3J1bWJOYXYuZm9yRWFjaChcbiAgICAgIChlbGVtZW50KSA9PlxuICAgICAgICAoZWxlbWVudC5pbm5lckhUTUwgPSBgXG4gIDxidXR0b24gY2xhc3M9XCJidG4tdmlldy1hbGwtcHJvamVjdHNcIj5BbGwgUHJvamVjdHM8L2J1dHRvbj5cbiAgPHNwYW4gY2xhc3M9XCJzZXBhcmF0b3JcIj4+PC9zcGFuPlxuICA8c3BhbiBjbGFzcz1cImN1cnJlbnQtcHJvamVjdFwiPiR7Y3VycmVudFByb2plY3QudGl0bGV9PC9zcGFuPlxuICBgKVxuICAgICk7XG4gIH1cbn07XG5cbmNvbnN0IHJlbmRlclByb2plY3RWaWV3QnV0dG9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgbG93ZXJCdXR0b25zQ29udGFpbmVyLmlubmVySFRNTCA9IGBcbiAgPGJ1dHRvbiBjbGFzcz1cImJ0bi1uZXctaXRlbVwiPis8L2J1dHRvbj5cbiAgYDtcbn07XG5cbmNvbnN0IGNsZWFyUHJvamVjdFZpZXdCdXR0b25zID0gZnVuY3Rpb24gKCkge1xuICBzb3J0QnV0dG9uc0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICBsb3dlckJ1dHRvbnNDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbn07XG5cbmNvbnN0IHJlbmRlclRhc2tWaWV3QnV0dG9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgc29ydEJ1dHRvbnNDb250YWluZXIuaW5uZXJIVE1MID0gYFxuICA8YnV0dG9uIGNsYXNzPVwiYnRuLXNvcnQtZHVlLWRhdGVcIj5EdWUgRGF0ZTwvYnV0dG9uPlxuICA8YnV0dG9uIGNsYXNzPVwiYnRuLXNvcnQtcHJpb3JpdHlcIj5Qcmlvcml0eTwvYnV0dG9uPlxuICBgO1xuXG4gIGxvd2VyQnV0dG9uc0NvbnRhaW5lci5pbm5lckhUTUwgPSBgXG4gIDxidXR0b24gY2xhc3M9XCJidG4tYmFjay10by1hbGwtcHJvamVjdHNcIj4mbHQ8L2J1dHRvbj5cbiAgPGJ1dHRvbiBjbGFzcz1cImJ0bi1uZXctaXRlbVwiPis8L2J1dHRvbj5cbiAgYDtcbn07XG5cbmNvbnN0IGNsZWFyVGFza1ZpZXdCdXR0b25zID0gZnVuY3Rpb24gKCkge1xuICBzb3J0QnV0dG9uc0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICBsb3dlckJ1dHRvbnNDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbn07XG5cbmNvbnN0IGNsZWFySXRlbUNvbnRhaW5lciA9IGZ1bmN0aW9uICgpIHtcbiAgaXRlbUNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xufTtcblxuY29uc3QgcmVuZGVyUHJvamVjdENhcmQgPSBmdW5jdGlvbiAocHJvamVjdCkge1xuICBjb25zdCByZW5kZXJQcm9qZWN0RGV0YWlscyA9IGZ1bmN0aW9uIChwcm9qZWN0KSB7XG4gICAgbGV0IHRhc2tDb3VudCA9IDA7XG4gICAgcHJvamVjdC50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICBpZiAodGFzay5zdGF0dXMgPT09IFwicGVuZGluZ1wiKSB0YXNrQ291bnQgKz0gMTtcbiAgICB9KTtcbiAgICByZXR1cm4gYCR7dGFza0NvdW50fSBwZW5kaW5nIHRhc2ske3Rhc2tDb3VudCA+IDEgPyBcInNcIiA6IFwiXCJ9YDtcbiAgfTtcblxuICBjb25zdCBwcm9qZWN0Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByb2plY3RDYXJkLmNsYXNzTmFtZSA9IFwicHJvamVjdC1jYXJkXCI7XG4gIHByb2plY3RDYXJkLmRhdGFzZXQucHJvamVjdElkID0gcHJvamVjdC5pZDtcbiAgcHJvamVjdENhcmQuaW5uZXJIVE1MID0gYFxuICA8ZGl2IGNsYXNzPVwicHJvamVjdC1oZWFkZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1oZWFkZXItbGVmdFwiPlxuICAgICAgPGlucHV0IGNsYXNzPVwiaW5wdXQtcHJvamVjdC10aXRsZVwiIHZhbHVlPVwiJHtcbiAgICAgICAgcHJvamVjdC50aXRsZVxuICAgICAgfVwiIG1heGxlbmd0aD1cIjI4XCIvPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWhlYWRlci1yaWdodFwiPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bi1wcm9qZWN0LW1vdmUtZG93blwiPuGQrzwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bi1wcm9qZWN0LW1vdmUtdXBcIj7hkLE8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJidG4tcHJvamVjdC1kZWxldGVcIj5YPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwicHJvamVjdC1kZXRhaWxzXCI+XG4gICAgPGRpdj5cbiAgICAgICR7cmVuZGVyUHJvamVjdERldGFpbHMocHJvamVjdCl9XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICBgO1xuXG4gIHJldHVybiBwcm9qZWN0Q2FyZDtcbn07XG5cbi8vIHByZXR0aWVyLWlnbm9yZVxuY29uc3QgcmVuZGVyVGFza0NhcmQgPSBmdW5jdGlvbiAodGFzaykge1xuICBjb25zdCB0YXNrQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRhc2tDYXJkLmNsYXNzTmFtZSA9IFwidGFzay1jYXJkXCI7XG4gIHRhc2tDYXJkLmRhdGFzZXQudGFza0lkID0gdGFzay5pZDtcbiAgdGFza0NhcmQuY2xhc3NMaXN0LmFkZChgJHt0YXNrLnN0YXR1c31gKTtcbiAgdGFza0NhcmQuY2xhc3NMaXN0LmFkZChgJHt0YXNrLnByaW9yaXR5fWApO1xuICB0YXNrQ2FyZC5pbm5lckhUTUwgPSBgXG4gICAgPGRpdiBjbGFzcz1cInRhc2staGVhZGVyICR7dGFzay5zdGF0dXN9XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwidGFzay1oZWFkZXItbGVmdFwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuLXRhc2stc3RhdHVzICR7dGFzay5zdGF0dXN9XCI+PC9idXR0b24+XG4gICAgICAgIDxpbnB1dCBjbGFzcz1cImlucHV0LXRhc2stdGl0bGUgJHt0YXNrLnN0YXR1c31cIiB2YWx1ZT1cIiR7dGFzay50aXRsZX1cIiAke3Rhc2suaW5wdXRTdGF0dXN9Lz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInRhc2staGVhZGVyLXJpZ2h0XCI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4tdGFzay1kZWxldGVcIj5YPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwidGFzay1kZXRhaWxzICR7dGFzay5zdGF0dXN9XCI+XG4gICAgICA8dGV4dGFyZWEgY2xhc3M9XCJpbnB1dC10YXNrLWRlc2NyaXB0aW9uICR7dGFzay5zdGF0dXN9XCIgbmFtZT1cInRhc2stZGVzY3JpcHRpb25cIiAke3Rhc2suaW5wdXRTdGF0dXN9PiR7dGFzay5kZXNjcmlwdGlvbn08L3RleHRhcmVhPlxuICAgICAgPGRpdiBjbGFzcz1cInRhc2stYm90dG9tLXJvd1wiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBjbGFzcz1cImlucHV0LXRhc2stZHVlLWRhdGVcIiB2YWx1ZT1cIiR7dGFzay5kdWVEYXRlfVwiICR7dGFzay5pbnB1dFN0YXR1c30vPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1kYXlzLXJlbWFpbmluZ1wiPiR7dGFzay5nZXREYXlzUmVtYWluaW5nKCl9PC9kaXY+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4tdGFzay1wcmlvcml0eVwiICR7dGFzay5pbnB1dFN0YXR1c30+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcmlvcml0eS1sYWJlbFwiPiR7dGFzay5wcmlvcml0eX08L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcmlvcml0eS1pbmRpY2F0b3IgJHt0YXNrLnByaW9yaXR5fVwiPjwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYDtcblxuICByZXR1cm4gdGFza0NhcmQ7XG59O1xuXG5jb25zdCByZW5kZXJBbGxQcm9qZWN0cyA9IGZ1bmN0aW9uIChwcm9qZWN0cykge1xuICBmb3IgKGxldCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMocHJvamVjdHMpKSB7XG4gICAgaXRlbUNvbnRhaW5lci5wcmVwZW5kKHJlbmRlclByb2plY3RDYXJkKHZhbHVlKSk7XG4gIH1cbn07XG5cbmNvbnN0IHNvcnRUYXNrc0J5RHVlRGF0ZSA9IGZ1bmN0aW9uICh0YXJnZXRQcm9qZWN0VGFza3MpIHtcbiAgY29uc3QgdGFza3MgPSBbLi4udGFyZ2V0UHJvamVjdFRhc2tzXTtcbiAgbGV0IGlzU29ydGVkID0gZmFsc2U7XG4gIHdoaWxlICghaXNTb3J0ZWQpIHtcbiAgICBpc1NvcnRlZCA9IHRydWU7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrcy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgIGNvbnN0IGRhdGUxID0gbmV3IERhdGUodGFza3NbaV0uZHVlRGF0ZSk7XG4gICAgICBjb25zdCBkYXRlMiA9IG5ldyBEYXRlKHRhc2tzW2kgKyAxXS5kdWVEYXRlKTtcbiAgICAgIGlmIChkYXRlMSA+IGRhdGUyKSB7XG4gICAgICAgIGxldCB0ZW1wID0gdGFza3NbaSArIDFdO1xuICAgICAgICB0YXNrc1tpICsgMV0gPSB0YXNrc1tpXTtcbiAgICAgICAgdGFza3NbaV0gPSB0ZW1wO1xuICAgICAgICBpc1NvcnRlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gdGFza3M7XG59O1xuXG4vLyBwcmV0dGllci1pZ25vcmVcbmNvbnN0IHNvcnRUYXNrc0J5UHJpb3JpdHkgPSBmdW5jdGlvbiAodGFyZ2V0UHJvamVjdFRhc2tzKSB7XG4gIGNvbnN0IHRhc2tzSGlnaFByaW9yaXR5ID0gdGFyZ2V0UHJvamVjdFRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay5wcmlvcml0eSA9PT0gXCJoaWdoXCIpO1xuICBjb25zdCB0YXNrc01lZGl1bVByaW9yaXR5ID0gdGFyZ2V0UHJvamVjdFRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay5wcmlvcml0eSA9PT0gXCJtZWRpdW1cIik7XG4gIGNvbnN0IHRhc2tzTG93UHJpb3JpdHkgPSB0YXJnZXRQcm9qZWN0VGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLnByaW9yaXR5ID09PSBcImxvd1wiKTtcblxuICBjb25zdCB0YXNrcyA9IFsuLi50YXNrc0hpZ2hQcmlvcml0eSwgLi4udGFza3NNZWRpdW1Qcmlvcml0eSwgLi4udGFza3NMb3dQcmlvcml0eV07XG4gIHJldHVybiB0YXNrcztcbn07XG5cbi8vIHByZXR0aWVyLWlnbm9yZVxuY29uc3QgcmVuZGVyVGFza3MgPSBmdW5jdGlvbiAodGFyZ2V0UHJvamVjdFRhc2tzLCBzb3J0Q3JpdGVyaWEpIHtcbiAgaWYgKHNvcnRDcml0ZXJpYSA9PT0gXCJkdWVEYXRlXCIpIHtcbiAgICBjb25zdCB0YXNrc0J5UHJpb3JpdHkgPSBzb3J0VGFza3NCeVByaW9yaXR5KHRhcmdldFByb2plY3RUYXNrcyk7XG4gICAgY29uc3QgdGFza3NCeUR1ZURhdGUgPSBzb3J0VGFza3NCeUR1ZURhdGUodGFza3NCeVByaW9yaXR5KTtcbiAgICB0YXNrc0J5RHVlRGF0ZS5mb3JFYWNoKCh0YXNrKSA9PiBpdGVtQ29udGFpbmVyLmFwcGVuZChyZW5kZXJUYXNrQ2FyZCh0YXNrKSkpO1xuICB9IGVsc2UgaWYgKHNvcnRDcml0ZXJpYSA9PT0gXCJwcmlvcml0eVwiKSB7XG4gICAgY29uc3QgdGFza3NCeUR1ZURhdGUgPSBzb3J0VGFza3NCeUR1ZURhdGUodGFyZ2V0UHJvamVjdFRhc2tzKTtcbiAgICBjb25zdCB0YXNrc0J5UHJpb3JpdHkgPSBzb3J0VGFza3NCeVByaW9yaXR5KHRhc2tzQnlEdWVEYXRlKTtcbiAgICB0YXNrc0J5UHJpb3JpdHkuZm9yRWFjaCgodGFzaykgPT4gaXRlbUNvbnRhaW5lci5hcHBlbmQocmVuZGVyVGFza0NhcmQodGFzaykpKTtcbiAgfSBlbHNlIHtcbiAgICBmb3IgKGxldCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXModGFyZ2V0UHJvamVjdFRhc2tzKSkge1xuICAgICAgaXRlbUNvbnRhaW5lci5wcmVwZW5kKHJlbmRlclRhc2tDYXJkKHZhbHVlKSk7XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBzaG93VGFza1ZpZXdCdXR0b25zID0gZnVuY3Rpb24gKHRhcmdldFByb2plY3QpIHtcbiAgaWYgKHRhcmdldFByb2plY3QudGFza3MubGVuZ3RoIDwgMikge1xuICAgIGNvbnN0IGJ0blNvcnRCeUR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1zb3J0LWR1ZS1kYXRlXCIpO1xuICAgIGNvbnN0IGJ0blNvcnRCeVByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG4tc29ydC1wcmlvcml0eVwiKTtcblxuICAgIGlmIChidG5Tb3J0QnlEdWVEYXRlKSBidG5Tb3J0QnlEdWVEYXRlLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgaWYgKGJ0blNvcnRCeVByaW9yaXR5KSBidG5Tb3J0QnlQcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICB9XG59O1xuXG5jb25zdCBzaG93VG9wT2ZQYWdlID0gZnVuY3Rpb24gKCkge1xuICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG59O1xuXG5jb25zdCBhdXRvQWRqdXN0SGVpZ2h0ID0gZnVuY3Rpb24gKHRhc2tEZXNjcmlwdGlvbkVsKSB7XG4gIC8vIEFkanVzdCBoZWlnaHQgdXBvbiByZW5kZXJpbmcgb3IgZXhwYW5zaW9uIG9mIHRoZSB0YXNrIGNhcmRcbiAgdGFza0Rlc2NyaXB0aW9uRWwuc3R5bGUuaGVpZ2h0ID0gXCJcIjtcbiAgdGFza0Rlc2NyaXB0aW9uRWwuc3R5bGUuaGVpZ2h0ID0gdGFza0Rlc2NyaXB0aW9uRWwuc2Nyb2xsSGVpZ2h0ICsgXCJweFwiO1xuXG4gIC8vIEFkanVzdCBoZWlnaHQgdG8gYWNjb21vZGF0ZSBhZGRpdGlvbmFsIGxpbmVzIG9mIHRleHQgYXMgcmVxdWlyZWRcbiAgdGFza0Rlc2NyaXB0aW9uRWwuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcbiAgICB0YXNrRGVzY3JpcHRpb25FbC5zdHlsZS5oZWlnaHQgPSBcIlwiO1xuICAgIHRhc2tEZXNjcmlwdGlvbkVsLnN0eWxlLmhlaWdodCA9IHRhc2tEZXNjcmlwdGlvbkVsLnNjcm9sbEhlaWdodCArIFwicHhcIjtcbiAgfSk7XG59O1xuXG5jb25zdCB0b2dnbGVUYXNrRGV0YWlscyA9IGZ1bmN0aW9uICh0YXNrQ2FyZCkge1xuICBjb25zdCB0YXNrRGV0YWlsc0VsID0gdGFza0NhcmQucXVlcnlTZWxlY3RvcihcIi50YXNrLWRldGFpbHNcIik7XG4gIHRhc2tEZXRhaWxzRWwuY2xhc3NMaXN0LnRvZ2dsZShcInZpc2libGVcIik7XG59O1xuXG5jb25zdCB0b2dnbGVUYXNrRWxlbWVudHMgPSBmdW5jdGlvbiAoYnV0dG9uKSB7XG4gIGJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwiY29tcGxldGVkXCIpO1xuICBidXR0b24uY2xhc3NMaXN0LnRvZ2dsZShcInBlbmRpbmdcIik7XG5cbiAgY29uc3QgdGFza0NhcmRFbCA9IGJ1dHRvbi5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgY29uc3QgdGFza0hlYWRlckVsID0gdGFza0NhcmRFbC5xdWVyeVNlbGVjdG9yKFwiLnRhc2staGVhZGVyXCIpO1xuICBjb25zdCB0YXNrVGl0bGVJbnB1dEVsID0gdGFza0NhcmRFbC5xdWVyeVNlbGVjdG9yKFwiLmlucHV0LXRhc2stdGl0bGVcIik7XG4gIGNvbnN0IHRhc2tEZXRhaWxzRWwgPSB0YXNrQ2FyZEVsLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1kZXRhaWxzXCIpO1xuICBjb25zdCB0YXNrRGVzY3JpcHRpb25FbCA9IHRhc2tDYXJkRWwucXVlcnlTZWxlY3RvcihcIi5pbnB1dC10YXNrLWRlc2NyaXB0aW9uXCIpO1xuICBjb25zdCB0YXNrRHVlRGF0ZUVsID0gdGFza0NhcmRFbC5xdWVyeVNlbGVjdG9yKFwiLmlucHV0LXRhc2stZHVlLWRhdGVcIik7XG4gIGNvbnN0IHRhc2tQcmlvcml0eUVsID0gdGFza0NhcmRFbC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi10YXNrLXByaW9yaXR5XCIpO1xuXG4gIHRhc2tDYXJkRWwuY2xhc3NMaXN0LnRvZ2dsZShcImNvbXBsZXRlZFwiKTtcbiAgdGFza0NhcmRFbC5jbGFzc0xpc3QudG9nZ2xlKFwicGVuZGluZ1wiKTtcbiAgdGFza0hlYWRlckVsLmNsYXNzTGlzdC50b2dnbGUoXCJjb21wbGV0ZWRcIik7XG4gIHRhc2tIZWFkZXJFbC5jbGFzc0xpc3QudG9nZ2xlKFwicGVuZGluZ1wiKTtcbiAgdGFza1RpdGxlSW5wdXRFbC5jbGFzc0xpc3QudG9nZ2xlKFwiY29tcGxldGVkXCIpO1xuICB0YXNrVGl0bGVJbnB1dEVsLmNsYXNzTGlzdC50b2dnbGUoXCJwZW5kaW5nXCIpO1xuICB0YXNrRGV0YWlsc0VsLmNsYXNzTGlzdC50b2dnbGUoXCJjb21wbGV0ZWRcIik7XG4gIHRhc2tEZXRhaWxzRWwuY2xhc3NMaXN0LnRvZ2dsZShcInBlbmRpbmdcIik7XG4gIHRhc2tEZXNjcmlwdGlvbkVsLmNsYXNzTGlzdC50b2dnbGUoXCJjb21wbGV0ZWRcIik7XG4gIHRhc2tEZXNjcmlwdGlvbkVsLmNsYXNzTGlzdC50b2dnbGUoXCJwZW5kaW5nXCIpO1xuXG4gIHRhc2tEZXRhaWxzRWwuY2xhc3NMaXN0LnJlbW92ZShcInZpc2libGVcIik7XG5cbiAgdGFza1RpdGxlSW5wdXRFbC5kaXNhYmxlZCA9ICF0YXNrVGl0bGVJbnB1dEVsLmRpc2FibGVkO1xuICB0YXNrRGVzY3JpcHRpb25FbC5kaXNhYmxlZCA9ICF0YXNrRGVzY3JpcHRpb25FbC5kaXNhYmxlZDtcbiAgdGFza0R1ZURhdGVFbC5kaXNhYmxlZCA9ICF0YXNrRHVlRGF0ZUVsLmRpc2FibGVkO1xuICB0YXNrUHJpb3JpdHlFbC5kaXNhYmxlZCA9ICF0YXNrUHJpb3JpdHlFbC5kaXNhYmxlZDtcbn07XG5cbi8vIHByZXR0aWVyLWlnbm9yZVxuY29uc3QgY2xpY2tIYW5kbGVyQ29tcGxldGVkVGFza0NhcmQgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGNvbXBsZXRlZFRhc2tDYXJkTkwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2stY2FyZFwiKTtcbiAgY29tcGxldGVkVGFza0NhcmROTC5mb3JFYWNoKCh0YXNrQ2FyZCkgPT4ge1xuICAgIHRhc2tDYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBpZiAodGFza0NhcmQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY29tcGxldGVkXCIpKSB7XG4gICAgICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbkVsID0gdGFza0NhcmQucXVlcnlTZWxlY3RvcihcIi5pbnB1dC10YXNrLWRlc2NyaXB0aW9uXCIpO1xuICAgICAgICB0YXNrRGVzY3JpcHRpb25FbC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICBhdXRvQWRqdXN0SGVpZ2h0KHRhc2tEZXNjcmlwdGlvbkVsKTtcbiAgICAgICAgdGFza0Rlc2NyaXB0aW9uRWwuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgdG9nZ2xlVGFza0RldGFpbHModGFza0NhcmQpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7XG4gIGxvYWRUaGVtZSxcbiAgdG9nZ2xlVGhlbWUsXG4gIHJlbmRlclByb2plY3RWaWV3QnV0dG9ucyxcbiAgY2xlYXJQcm9qZWN0Vmlld0J1dHRvbnMsXG4gIHJlbmRlclRhc2tWaWV3QnV0dG9ucyxcbiAgY2xlYXJUYXNrVmlld0J1dHRvbnMsXG4gIHJlbmRlckJyZWFkY3J1bWJOYXYsXG4gIGNsZWFySXRlbUNvbnRhaW5lcixcbiAgcmVuZGVyQWxsUHJvamVjdHMsXG4gIHJlbmRlclRhc2tzLFxuICBzaG93VGFza1ZpZXdCdXR0b25zLFxuICBzaG93VG9wT2ZQYWdlLFxuICBhdXRvQWRqdXN0SGVpZ2h0LFxuICB0b2dnbGVUYXNrRWxlbWVudHMsXG4gIGNsaWNrSGFuZGxlckNvbXBsZXRlZFRhc2tDYXJkLFxufTtcbiIsImltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4vY29udHJvbGxlclwiO1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCB7IFRhc2sgfSBmcm9tIFwiLi90YXNrXCI7XG5pbXBvcnQgeyBkZW1vUHJvamVjdHMgfSBmcm9tIFwiLi9kZW1vRGF0YVwiO1xuXG5leHBvcnQgY29uc3Qgc2F2ZVRvTG9jYWxTdG9yYWdlID0gZnVuY3Rpb24gKCkge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG59O1xuXG5leHBvcnQgY29uc3QgbG9hZEZyb21Mb2NhbFN0b3JhZ2UgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHN0b3JlZFByb2plY3RzSlNPTiA9XG4gICAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKSB8fCBkZW1vUHJvamVjdHM7XG5cbiAgY29uc3QgcHJvamVjdHNXaXRoRnVuY3Rpb25zID0ge307XG5cbiAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoc3RvcmVkUHJvamVjdHNKU09OKSkge1xuICAgIGxldCB0YXNrc1dpdGhGdW5jdGlvbnMgPSBbXTtcbiAgICB2YWx1ZS50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICBjb25zdCB0YXNrV2l0aEZ1bmN0aW9ucyA9IG5ldyBUYXNrKFxuICAgICAgICB0YXNrLmlkLFxuICAgICAgICB0YXNrLnRpdGxlLFxuICAgICAgICB0YXNrLmRlc2NyaXB0aW9uLFxuICAgICAgICB0YXNrLmR1ZURhdGUsXG4gICAgICAgIHRhc2suc3RhdHVzLFxuICAgICAgICB0YXNrLnByaW9yaXR5LFxuICAgICAgICB0YXNrLmlucHV0U3RhdHVzXG4gICAgICApO1xuICAgICAgdGFza3NXaXRoRnVuY3Rpb25zLnB1c2godGFza1dpdGhGdW5jdGlvbnMpO1xuICAgIH0pO1xuXG4gICAgcHJvamVjdHNXaXRoRnVuY3Rpb25zW2tleV0gPSBuZXcgUHJvamVjdChcbiAgICAgIHZhbHVlLmlkLFxuICAgICAgdmFsdWUudGl0bGUsXG4gICAgICB0YXNrc1dpdGhGdW5jdGlvbnNcbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIHByb2plY3RzV2l0aEZ1bmN0aW9ucztcbn07XG4iLCJleHBvcnQgbGV0IGRlbW9Qcm9qZWN0cyA9IHtcbiAgUDE2OTY4MTA1Mjc2MDE6IHtcbiAgICBpZDogXCJQMTY5NjgxMDUyNzYwMVwiLFxuICAgIHRpdGxlOiBcIkhvbWVcIixcbiAgICB0YXNrczogW1xuICAgICAge1xuICAgICAgICBpZDogXCJUMTY5NzcxMDY5NDQ1OFwiLFxuICAgICAgICB0aXRsZTogXCJQbGF5IHZpZGVvIGdhbWVzXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlplbGRhIFRPVEtcXG5MaXR0bGUgTmlnaHRtYXJlcyBJSVwiLFxuICAgICAgICBkdWVEYXRlOiBcIjIwMjMtMTAtMjBcIixcbiAgICAgICAgc3RhdHVzOiBcInBlbmRpbmdcIixcbiAgICAgICAgcHJpb3JpdHk6IFwibWVkaXVtXCIsXG4gICAgICAgIGlucHV0U3RhdHVzOiBcImVuYWJsZWRcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiBcIlQxNjk4MzAwNzM3OTc4XCIsXG4gICAgICAgIHRpdGxlOiBcIkNsZWFuIHRoZSBob3VzZVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICBcIldpcGUgZHVzdCBmcm9tIHN1cmZhY2VzXFxuVmFjdXVtIGFuZCBtb3AgZmxvb3JzXFxuQ2xlYW4ga2l0Y2hlbiBhbmQgYmF0aHJvb21zXFxuRW1wdHkgYmluc1wiLFxuICAgICAgICBkdWVEYXRlOiBcIjIwMjMtMTAtMzBcIixcbiAgICAgICAgc3RhdHVzOiBcInBlbmRpbmdcIixcbiAgICAgICAgcHJpb3JpdHk6IFwibWVkaXVtXCIsXG4gICAgICAgIGlucHV0U3RhdHVzOiBcImVuYWJsZWRcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiBcIlQxNjk4MzcxMTg3MjQxXCIsXG4gICAgICAgIHRpdGxlOiBcIkZpeCBraXRjaGVuIGxpZ2h0c1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICAgICAgZHVlRGF0ZTogXCJcIixcbiAgICAgICAgc3RhdHVzOiBcInBlbmRpbmdcIixcbiAgICAgICAgcHJpb3JpdHk6IFwibWVkaXVtXCIsXG4gICAgICAgIGlucHV0U3RhdHVzOiBcImVuYWJsZWRcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAgUDE2OTY4MTA1Mjc2MDI6IHtcbiAgICBpZDogXCJQMTY5NjgxMDUyNzYwMlwiLFxuICAgIHRpdGxlOiBcIlN0dWR5XCIsXG4gICAgdGFza3M6IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6IFwiVDE2OTc3MTE0MTU1NjVcIixcbiAgICAgICAgdGl0bGU6IFwiRmluaXNoIFRvZG8gTGlzdCBwcm9qZWN0XCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxuICAgICAgICBkdWVEYXRlOiBcIjIwMjMtMTAtMjZcIixcbiAgICAgICAgc3RhdHVzOiBcImNvbXBsZXRlZFwiLFxuICAgICAgICBwcmlvcml0eTogXCJtZWRpdW1cIixcbiAgICAgICAgaW5wdXRTdGF0dXM6IFwiZGlzYWJsZWRcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAgUDE2OTc3MTA3MzYwMDA6IHtcbiAgICBpZDogXCJQMTY5NzcxMDczNjAwMFwiLFxuICAgIHRpdGxlOiBcIlRyYXZlbFwiLFxuICAgIHRhc2tzOiBbXG4gICAgICB7XG4gICAgICAgIGlkOiBcIlQxNjk3NzEwNzQxMTIwXCIsXG4gICAgICAgIHRpdGxlOiBcIlBhc3Nwb3J0XCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkFwcGx5IGZvciBwYXNzcG9ydFwiLFxuICAgICAgICBkdWVEYXRlOiBcIjIwMjMtMTAtMjNcIixcbiAgICAgICAgc3RhdHVzOiBcInBlbmRpbmdcIixcbiAgICAgICAgcHJpb3JpdHk6IFwibWVkaXVtXCIsXG4gICAgICAgIGlucHV0U3RhdHVzOiBcImVuYWJsZWRcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiBcIlQxNjk4MzcwNzk0NDgzXCIsXG4gICAgICAgIHRpdGxlOiBcIlBsYW4gaXRpbmVyYXJ5XCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIk1ha2UgbGlzdCBvZiBwbGFjZXMgdG8gdmlzaXRcIixcbiAgICAgICAgZHVlRGF0ZTogXCJcIixcbiAgICAgICAgc3RhdHVzOiBcInBlbmRpbmdcIixcbiAgICAgICAgcHJpb3JpdHk6IFwibWVkaXVtXCIsXG4gICAgICAgIGlucHV0U3RhdHVzOiBcImVuYWJsZWRcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAgUDE2OTgzNzA5MzE2MzA6IHtcbiAgICBpZDogXCJQMTY5ODM3MDkzMTYzMFwiLFxuICAgIHRpdGxlOiBcIkdyb2Nlcmllc1wiLFxuICAgIHRhc2tzOiBbXG4gICAgICB7XG4gICAgICAgIGlkOiBcIlQxNjk4MzcwOTQ5Nzk5XCIsXG4gICAgICAgIHRpdGxlOiBcIldvb2x3b3J0aHNcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQmFuYW5hc1xcbk1pbGtcXG5CdXR0ZXJcXG5Gcm96ZW4gZHVtcGxpbmdzXFxuVG9pbGV0IHBhcGVyXCIsXG4gICAgICAgIGR1ZURhdGU6IFwiXCIsXG4gICAgICAgIHN0YXR1czogXCJwZW5kaW5nXCIsXG4gICAgICAgIHByaW9yaXR5OiBcIm1lZGl1bVwiLFxuICAgICAgICBpbnB1dFN0YXR1czogXCJlbmFibGVkXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogXCJUMTY5ODM3MTExOTUzNlwiLFxuICAgICAgICB0aXRsZTogXCJBbGRpXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkNoZWVzZVxcbkJpc2N1aXRzXCIsXG4gICAgICAgIGR1ZURhdGU6IFwiXCIsXG4gICAgICAgIHN0YXR1czogXCJjb21wbGV0ZWRcIixcbiAgICAgICAgcHJpb3JpdHk6IFwibWVkaXVtXCIsXG4gICAgICAgIGlucHV0U3RhdHVzOiBcImRpc2FibGVkXCIsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdDA6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBpbml0QXBwIH0gZnJvbSBcIi4vY29udHJvbGxlclwiO1xuXG4oZnVuY3Rpb24gKCkge1xuICBpbml0QXBwKCk7XG59KSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9