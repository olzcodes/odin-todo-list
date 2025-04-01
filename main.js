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
  font-weight: bold;
  padding: 7px 8px 5px;
}

nav.sort-buttons-container button:hover {
  background-color: var(--accent-color-two);
  color: var(--accent-color);
  border: 2px solid var(--accent-color);
}

nav.sort-buttons-container button.highlight {
  background-color: var(--accent-color);
  color: var(--accent-color-two);
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: \"Electrolize\";\n  src: url(\"./fonts/Electrolize-Regular.woff\") format(\"woff\");\n  font-weight: 400;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: \"Quicksand\";\n  src: url(\"./fonts/Quicksand-Medium.woff\") format(\"woff\");\n  font-weight: 500;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: \"Quicksand\";\n  src: url(\"./fonts/Quicksand-Bold.woff\") format(\"woff\");\n  font-weight: 700;\n  font-style: normal;\n}\n\n:root.theme-1 {\n  --main-color: black;\n  --background-color: whitesmoke;\n  --background-color-two: lavenderblush;\n  --accent-color: salmon;\n  --accent-color-two: white;\n  --accent-color-three: lightpink;\n  --priority-high-color: palevioletred;\n  --active-color: tomato;\n  --active-color-two: white;\n  --inactive-color: silver;\n  --inactive-color-two: gray;\n  --default-thickness: 2px;\n}\n\n:root.theme-2 {\n  --main-color: black;\n  --background-color: aliceblue;\n  --background-color-two: whitesmoke;\n  --accent-color: mediumslateblue;\n  --accent-color-two: white;\n  --accent-color-three: thistle;\n  --priority-high-color: palevioletred;\n  --active-color: mediumslateblue;\n  --active-color-two: white;\n  --inactive-color: silver;\n  --inactive-color-two: gray;\n  --default-thickness: 2px;\n}\n\nhtml {\n  box-sizing: border-box;\n  margin: 0px;\n  padding: 0px;\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n  /* border: 1px solid red; */\n}\n\n.hidden {\n  display: none;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0px;\n}\n\nbody {\n  height: 100vh;\n  background-color: var(--background-color);\n  color: var(--main-color);\n  font-family: \"Quicksand\", Tahoma, Geneva, Verdana, sans-serif;\n  margin: 0px;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\nheader {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 1;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  background-color: var(--background-color-two);\n  border-bottom: var(--default-thickness) solid var(--accent-color-two);\n}\n\n.header-top-row {\n  height: 56px;\n  display: flex;\n  justify-content: space-between;\n  padding: 10px;\n}\n\nh1 {\n  font-family: \"Electrolize\";\n  color: var(--accent-color);\n  font-size: x-large;\n  text-align: center;\n  padding-top: 5px;\n}\n\nh1 {\n  cursor: pointer;\n}\n\nbutton:hover {\n  cursor: pointer;\n}\n\nnav.sort-buttons-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n}\n\nnav.sort-buttons-container button {\n  width: 96px;\n  background-color: var(--accent-color-two);\n  color: var(--accent-color);\n  border: 2px solid var(--accent-color-two);\n  border-radius: 12px;\n  font-family: \"Quicksand\";\n  font-size: medium;\n  font-weight: bold;\n  padding: 7px 8px 5px;\n}\n\nnav.sort-buttons-container button:hover {\n  background-color: var(--accent-color-two);\n  color: var(--accent-color);\n  border: 2px solid var(--accent-color);\n}\n\nnav.sort-buttons-container button.highlight {\n  background-color: var(--accent-color);\n  color: var(--accent-color-two);\n  border: 2px solid var(--accent-color);\n}\n\nnav.breadcrumb-nav {\n  display: flex;\n  align-items: center;\n  font-size: larger;\n  padding: 5px 10px 0px;\n  margin: 0px 0px 10px;\n}\n\nspan {\n  padding: 0px 10px 0px;\n}\n\nspan.all-projects {\n  height: 36px;\n  color: var(--accent-color);\n  border: 2px solid var(--background-color-two);\n  font-size: medium;\n  letter-spacing: 0.23px;\n  padding: 6px 6px 3px;\n}\n\nspan.current-project {\n  color: var(--main-color);\n  font-size: large;\n  padding: 3px 6px 3px;\n}\n\nbutton.btn-view-all-projects {\n  height: 36px;\n  background-color: var(--accent-color-two);\n  color: var(--accent-color);\n  border: 2px solid var(--accent-color-two);\n  border-radius: 12px;\n  font-family: \"Quicksand\";\n  font-size: medium;\n  font-weight: bold;\n  color: var(--accent-color);\n  padding: 3px 6px 3px;\n}\n\nbutton.btn-view-all-projects:hover {\n  color: var(--active-color);\n  border: 2px solid var(--active-color);\n  font-weight: 700;\n  letter-spacing: 0px;\n}\n\nbutton.btn-view-all-projects::after {\n  height: 0;\n  visibility: hidden;\n  font-weight: 700;\n}\n\nmain {\n  position: relative;\n  z-index: 0;\n\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  align-items: start;\n  padding: 15px;\n  padding-top: 130px;\n}\n\n.item-container {\n  width: 100%;\n  padding-bottom: 80px;\n}\n\n.project-card,\n.task-card {\n  cursor: pointer;\n  flex: 1;\n  border: var(--default-thickness) solid var(--accent-color-three);\n  border-radius: 12px;\n  margin: 0px 0px 20px;\n}\n\n.project-header,\n.task-header {\n  height: 40px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: var(--accent-color-three);\n  border-radius: 9px;\n  padding: 5px 5px 6px 5px;\n}\n\n.project-header:hover .input-project-title,\n.task-header:hover .input-task-title {\n  color: var(--main-color);\n}\n\n.task-header.completed {\n  background-color: var(--inactive-color);\n}\n\n.task-details.completed {\n  transition: opacity 1.5s ease;\n  opacity: 0;\n  height: 0;\n  overflow: hidden;\n}\n\n.task-details.pending,\n.task-details.completed.visible {\n  transition: opacity 1.5s ease;\n  opacity: 1;\n  height: auto;\n}\n\n/* This rule is required for click events on disabled input elements to propagate upwards on some browsers */\ninput[disabled] {\n  pointer-events: none;\n}\n\ninput.input-task-title.completed {\n  text-decoration: line-through;\n}\n\n.task-card.completed {\n  border: var(--default-thickness) solid var(--inactive-color);\n}\n\nbutton.btn-save-project,\nbutton.btn-save-task {\n  background-color: var(--accent-color-two);\n  border: 2px solid var(--main-color);\n  border-radius: 5px;\n  padding: 5px 8px 5px;\n}\n\ninput.input-project-title,\ninput.input-task-title {\n  flex: 1;\n  background-color: inherit;\n  color: var(--accent-color-two);\n  font-family: \"Quicksand\";\n  font-size: medium;\n  font-weight: bold;\n  border: none;\n  outline: none;\n  margin-left: 5px;\n  margin-right: 20px;\n}\n\ninput.input-project-title:focus,\ninput.input-task-title:focus {\n  background-color: inherit;\n}\n\n.project-header-left,\n.task-header-left {\n  flex: 1;\n  display: flex;\n  align-items: center;\n}\n\nbutton.btn-task-status {\n  background-color: inherit;\n  color: var(--accent-color-two);\n  border: none;\n  font-size: large;\n  padding: 0px 6px 0px;\n}\n\nbutton.btn-task-status.pending::after {\n  content: \"☐\";\n  font-size: xx-large;\n}\n\nbutton.btn-task-status.completed::after {\n  content: \"☑\";\n  font-size: xx-large;\n}\n\n.project-header:focus-within,\n.task-header:focus-within {\n  background-color: var(--accent-color);\n}\n\n.task-title.completed {\n  text-decoration: line-through;\n  text-decoration-color: var(--accent-color-two);\n  text-decoration-thickness: 2px;\n}\n\n.task-header-right {\n  display: flex;\n  gap: 6px;\n}\n\nbutton.btn-project-move-down,\nbutton.btn-project-move-up {\n  background-color: var(--accent-three);\n  color: var(--accent-color-two);\n  border: none;\n  font-weight: 700;\n  padding: 0px 10px;\n  visibility: hidden;\n}\n\nbutton.btn-project-delete,\nbutton.btn-task-delete {\n  background-color: var(--accent-three);\n  color: var(--accent-color-two);\n  border: none;\n  font-weight: 700;\n  padding: 0px 10px;\n}\n\nbutton.btn-project-move-down:hover,\nbutton.btn-project-move-up:hover,\nbutton.btn-project-delete:hover,\nbutton.btn-task-delete:hover {\n  color: var(--main-color);\n}\n\n.project-details > div,\n.task-details > div {\n  background-color: var(--accent-color-two);\n  font-size: medium;\n  border-radius: 0px 0px 9px 9px;\n  padding: 10px 15px 10px;\n}\n\n.project-details > div:hover {\n  text-decoration: underline;\n}\n\n.task-details {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\ntextarea.input-task-description {\n  width: 100%;\n  background-color: var(--accent-color-two);\n  font-family: \"Quicksand\", Tahoma, Geneva, Verdana, sans-serif;\n  font-size: medium;\n  border: none;\n  outline: none;\n  resize: none;\n  padding: 10px 15px 10px;\n}\n\ntextarea.input-task-description.completed {\n  color: gray;\n}\n\n.project-details > .task-bottom-row,\n.task-details > .task-bottom-row {\n  display: flex;\n  height: 40px;\n  justify-content: space-between;\n  align-items: center;\n  background-color: var(--background-color-two);\n  border-radius: 0px 0px 9px 9px;\n  font-weight: 700;\n}\n\ninput.input-task-due-date {\n  background-color: var(--background-color-two);\n  border: 2px solid var(--accent-color-three);\n  border-radius: 5px;\n  outline: none;\n  padding: 2px;\n}\n\ninput[disabled].input-task-due-date {\n  background-color: var(--background-color);\n  border: 2px solid var(--inactive-color);\n}\n\n.task-days-remaining,\n.btn-task-priority {\n  display: flex;\n  align-items: center;\n  justify-content: end;\n  gap: 5px;\n  min-width: 82px;\n  color: var(--inactive-color-two);\n  font-size: small;\n  font-weight: 500;\n  text-align: center;\n  padding: 0px;\n}\n\nbutton.btn-task-priority {\n  background-color: var(--accent-three);\n  border: none;\n}\n\nspan.priority-label {\n  padding: 0px 2px 0px 0px;\n}\n\nspan.priority-indicator {\n  background-color: var(--accent-three);\n  margin: -8px;\n}\n\nspan.priority-indicator.low::after {\n  content: \"●\";\n  color: mediumseagreen;\n  font-size: xx-large;\n}\n\nspan.priority-indicator.medium::after {\n  content: \"●\";\n  color: gold;\n  font-size: xx-large;\n}\n\nspan.priority-indicator.high::after {\n  content: \"●\";\n  color: coral;\n  font-size: xx-large;\n}\n\n.priority-high {\n  background-color: var(--priority-high-color);\n}\n\nbutton.btn-back-to-all-projects {\n  height: 42px;\n  width: 42px;\n  position: fixed;\n  bottom: 50px;\n  left: 20px;\n  font-size: xx-large;\n  border: 2px solid var(--accent-color-two);\n  border-radius: 50px;\n  background-color: var(--accent-color);\n  color: var(--accent-color-two);\n  padding: 2px 2px 0px 0px;\n}\n\nbutton.btn-new-item {\n  height: 42px;\n  width: 42px;\n  position: fixed;\n  bottom: 50px;\n  right: 20px;\n  font-size: xx-large;\n  border: 2px solid var(--accent-color-two);\n  border-radius: 50px;\n  background-color: var(--accent-color);\n  color: var(--accent-color-two);\n  padding: 0px 10px 0px;\n}\n\nfooter {\n  position: fixed;\n  bottom: 0px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  background-color: lightgray;\n  padding: 5px;\n}\n\nfooter a {\n  font-family: \"Electrolize\";\n  color: gray;\n}\n\n@media only screen and (min-width: 800px) {\n  body {\n    max-width: 800px;\n    padding: 0;\n  }\n\n  nav.sort-buttons-container {\n    position: fixed;\n    left: 590px;\n  }\n\n  button.btn-new-item {\n    position: fixed;\n    left: 740px;\n  }\n}\n"],"sourceRoot":""}]);
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
let defaultSortingMode = "dueDate";

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
  (0,_view__WEBPACK_IMPORTED_MODULE_2__.showSortingMode)(sortCriteria);
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
      loadTasksView(targetProject, defaultSortingMode);
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
/* harmony export */   showSortingMode: () => (/* binding */ showSortingMode),
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

const showSortingMode = function (sortCriteria) {
  const btnSortByDueDate = document.querySelector(".btn-sort-due-date");
  const btnSortByPriority = document.querySelector(".btn-sort-priority");
  switch (sortCriteria) {
    case "dueDate":
      btnSortByDueDate.classList.add("highlight");
      btnSortByPriority.classList.remove("highlight");
      break;
    case "priority":
      btnSortByDueDate.classList.remove("highlight");
      btnSortByPriority.classList.add("highlight");
      break;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxPQUFPLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxZQUFZLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsWUFBWSxjQUFjLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksWUFBWSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsTUFBTSxZQUFZLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxNQUFNLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxRQUFRLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFV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UDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIOzs7Ozs7VUNsR0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7OztBQ0FxQjtBQUNrQjs7QUFFdkM7QUFDQSxFQUFFLG9EQUFPO0FBQ1QsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9jb250cm9sbGVyLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZkRheS9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3ZpZXcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvbG9jYWxTdG9yYWdlLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2RlbW9EYXRhLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvRWxlY3Ryb2xpemUtUmVndWxhci53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9mb250cy9RdWlja3NhbmQtTWVkaXVtLndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL1F1aWNrc2FuZC1Cb2xkLndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkVsZWN0cm9saXplXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJRdWlja3NhbmRcIjtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSkgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG46cm9vdC50aGVtZS0xIHtcbiAgLS1tYWluLWNvbG9yOiBibGFjaztcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICAtLWJhY2tncm91bmQtY29sb3ItdHdvOiBsYXZlbmRlcmJsdXNoO1xuICAtLWFjY2VudC1jb2xvcjogc2FsbW9uO1xuICAtLWFjY2VudC1jb2xvci10d286IHdoaXRlO1xuICAtLWFjY2VudC1jb2xvci10aHJlZTogbGlnaHRwaW5rO1xuICAtLXByaW9yaXR5LWhpZ2gtY29sb3I6IHBhbGV2aW9sZXRyZWQ7XG4gIC0tYWN0aXZlLWNvbG9yOiB0b21hdG87XG4gIC0tYWN0aXZlLWNvbG9yLXR3bzogd2hpdGU7XG4gIC0taW5hY3RpdmUtY29sb3I6IHNpbHZlcjtcbiAgLS1pbmFjdGl2ZS1jb2xvci10d286IGdyYXk7XG4gIC0tZGVmYXVsdC10aGlja25lc3M6IDJweDtcbn1cblxuOnJvb3QudGhlbWUtMiB7XG4gIC0tbWFpbi1jb2xvcjogYmxhY2s7XG4gIC0tYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xuICAtLWJhY2tncm91bmQtY29sb3ItdHdvOiB3aGl0ZXNtb2tlO1xuICAtLWFjY2VudC1jb2xvcjogbWVkaXVtc2xhdGVibHVlO1xuICAtLWFjY2VudC1jb2xvci10d286IHdoaXRlO1xuICAtLWFjY2VudC1jb2xvci10aHJlZTogdGhpc3RsZTtcbiAgLS1wcmlvcml0eS1oaWdoLWNvbG9yOiBwYWxldmlvbGV0cmVkO1xuICAtLWFjdGl2ZS1jb2xvcjogbWVkaXVtc2xhdGVibHVlO1xuICAtLWFjdGl2ZS1jb2xvci10d286IHdoaXRlO1xuICAtLWluYWN0aXZlLWNvbG9yOiBzaWx2ZXI7XG4gIC0taW5hY3RpdmUtY29sb3ItdHdvOiBncmF5O1xuICAtLWRlZmF1bHQtdGhpY2tuZXNzOiAycHg7XG59XG5cbmh0bWwge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4qLFxuKjpiZWZvcmUsXG4qOmFmdGVyIHtcbiAgYm94LXNpemluZzogaW5oZXJpdDtcbiAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xufVxuXG4uaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbmJvZHkge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xuICBmb250LWZhbWlseTogXCJRdWlja3NhbmRcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbjogMHB4O1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuaGVhZGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAxO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLXR3byk7XG4gIGJvcmRlci1ib3R0b206IHZhcigtLWRlZmF1bHQtdGhpY2tuZXNzKSBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3ItdHdvKTtcbn1cblxuLmhlYWRlci10b3Atcm93IHtcbiAgaGVpZ2h0OiA1NnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbmgxIHtcbiAgZm9udC1mYW1pbHk6IFwiRWxlY3Ryb2xpemVcIjtcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuXG5oMSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5uYXYuc29ydC1idXR0b25zLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG59XG5cbm5hdi5zb3J0LWJ1dHRvbnMtY29udGFpbmVyIGJ1dHRvbiB7XG4gIHdpZHRoOiA5NnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItdHdvKTtcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWFjY2VudC1jb2xvci10d28pO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBmb250LWZhbWlseTogXCJRdWlja3NhbmRcIjtcbiAgZm9udC1zaXplOiBtZWRpdW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiA3cHggOHB4IDVweDtcbn1cblxubmF2LnNvcnQtYnV0dG9ucy1jb250YWluZXIgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yLXR3byk7XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3IpO1xufVxuXG5uYXYuc29ydC1idXR0b25zLWNvbnRhaW5lciBidXR0b24uaGlnaGxpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvci10d28pO1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3IpO1xufVxuXG5uYXYuYnJlYWRjcnVtYi1uYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IGxhcmdlcjtcbiAgcGFkZGluZzogNXB4IDEwcHggMHB4O1xuICBtYXJnaW46IDBweCAwcHggMTBweDtcbn1cblxuc3BhbiB7XG4gIHBhZGRpbmc6IDBweCAxMHB4IDBweDtcbn1cblxuc3Bhbi5hbGwtcHJvamVjdHMge1xuICBoZWlnaHQ6IDM2cHg7XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLXR3byk7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xuICBsZXR0ZXItc3BhY2luZzogMC4yM3B4O1xuICBwYWRkaW5nOiA2cHggNnB4IDNweDtcbn1cblxuc3Bhbi5jdXJyZW50LXByb2plY3Qge1xuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIHBhZGRpbmc6IDNweCA2cHggM3B4O1xufVxuXG5idXR0b24uYnRuLXZpZXctYWxsLXByb2plY3RzIHtcbiAgaGVpZ2h0OiAzNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItdHdvKTtcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWFjY2VudC1jb2xvci10d28pO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBmb250LWZhbWlseTogXCJRdWlja3NhbmRcIjtcbiAgZm9udC1zaXplOiBtZWRpdW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgcGFkZGluZzogM3B4IDZweCAzcHg7XG59XG5cbmJ1dHRvbi5idG4tdmlldy1hbGwtcHJvamVjdHM6aG92ZXIge1xuICBjb2xvcjogdmFyKC0tYWN0aXZlLWNvbG9yKTtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYWN0aXZlLWNvbG9yKTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbn1cblxuYnV0dG9uLmJ0bi12aWV3LWFsbC1wcm9qZWN0czo6YWZ0ZXIge1xuICBoZWlnaHQ6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxubWFpbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMDtcblxuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIHBhZGRpbmctdG9wOiAxMzBweDtcbn1cblxuLml0ZW0tY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctYm90dG9tOiA4MHB4O1xufVxuXG4ucHJvamVjdC1jYXJkLFxuLnRhc2stY2FyZCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZmxleDogMTtcbiAgYm9yZGVyOiB2YXIoLS1kZWZhdWx0LXRoaWNrbmVzcykgc29saWQgdmFyKC0tYWNjZW50LWNvbG9yLXRocmVlKTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgbWFyZ2luOiAwcHggMHB4IDIwcHg7XG59XG5cbi5wcm9qZWN0LWhlYWRlcixcbi50YXNrLWhlYWRlciB7XG4gIGhlaWdodDogNDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItdGhyZWUpO1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG4gIHBhZGRpbmc6IDVweCA1cHggNnB4IDVweDtcbn1cblxuLnByb2plY3QtaGVhZGVyOmhvdmVyIC5pbnB1dC1wcm9qZWN0LXRpdGxlLFxuLnRhc2staGVhZGVyOmhvdmVyIC5pbnB1dC10YXNrLXRpdGxlIHtcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xufVxuXG4udGFzay1oZWFkZXIuY29tcGxldGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW5hY3RpdmUtY29sb3IpO1xufVxuXG4udGFzay1kZXRhaWxzLmNvbXBsZXRlZCB7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMS41cyBlYXNlO1xuICBvcGFjaXR5OiAwO1xuICBoZWlnaHQ6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi50YXNrLWRldGFpbHMucGVuZGluZyxcbi50YXNrLWRldGFpbHMuY29tcGxldGVkLnZpc2libGUge1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDEuNXMgZWFzZTtcbiAgb3BhY2l0eTogMTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4vKiBUaGlzIHJ1bGUgaXMgcmVxdWlyZWQgZm9yIGNsaWNrIGV2ZW50cyBvbiBkaXNhYmxlZCBpbnB1dCBlbGVtZW50cyB0byBwcm9wYWdhdGUgdXB3YXJkcyBvbiBzb21lIGJyb3dzZXJzICovXG5pbnB1dFtkaXNhYmxlZF0ge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuaW5wdXQuaW5wdXQtdGFzay10aXRsZS5jb21wbGV0ZWQge1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cblxuLnRhc2stY2FyZC5jb21wbGV0ZWQge1xuICBib3JkZXI6IHZhcigtLWRlZmF1bHQtdGhpY2tuZXNzKSBzb2xpZCB2YXIoLS1pbmFjdGl2ZS1jb2xvcik7XG59XG5cbmJ1dHRvbi5idG4tc2F2ZS1wcm9qZWN0LFxuYnV0dG9uLmJ0bi1zYXZlLXRhc2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItdHdvKTtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tbWFpbi1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogNXB4IDhweCA1cHg7XG59XG5cbmlucHV0LmlucHV0LXByb2plY3QtdGl0bGUsXG5pbnB1dC5pbnB1dC10YXNrLXRpdGxlIHtcbiAgZmxleDogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvci10d28pO1xuICBmb250LWZhbWlseTogXCJRdWlja3NhbmRcIjtcbiAgZm9udC1zaXplOiBtZWRpdW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuaW5wdXQuaW5wdXQtcHJvamVjdC10aXRsZTpmb2N1cyxcbmlucHV0LmlucHV0LXRhc2stdGl0bGU6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xufVxuXG4ucHJvamVjdC1oZWFkZXItbGVmdCxcbi50YXNrLWhlYWRlci1sZWZ0IHtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuYnV0dG9uLmJ0bi10YXNrLXN0YXR1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItdHdvKTtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IGxhcmdlO1xuICBwYWRkaW5nOiAwcHggNnB4IDBweDtcbn1cblxuYnV0dG9uLmJ0bi10YXNrLXN0YXR1cy5wZW5kaW5nOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwi4piQXCI7XG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG59XG5cbmJ1dHRvbi5idG4tdGFzay1zdGF0dXMuY29tcGxldGVkOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwi4piRXCI7XG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG59XG5cbi5wcm9qZWN0LWhlYWRlcjpmb2N1cy13aXRoaW4sXG4udGFzay1oZWFkZXI6Zm9jdXMtd2l0aGluIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbn1cblxuLnRhc2stdGl0bGUuY29tcGxldGVkIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yLXR3byk7XG4gIHRleHQtZGVjb3JhdGlvbi10aGlja25lc3M6IDJweDtcbn1cblxuLnRhc2staGVhZGVyLXJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA2cHg7XG59XG5cbmJ1dHRvbi5idG4tcHJvamVjdC1tb3ZlLWRvd24sXG5idXR0b24uYnRuLXByb2plY3QtbW92ZS11cCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC10aHJlZSk7XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItdHdvKTtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXdlaWdodDogNzAwO1xuICBwYWRkaW5nOiAwcHggMTBweDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG5idXR0b24uYnRuLXByb2plY3QtZGVsZXRlLFxuYnV0dG9uLmJ0bi10YXNrLWRlbGV0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC10aHJlZSk7XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItdHdvKTtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXdlaWdodDogNzAwO1xuICBwYWRkaW5nOiAwcHggMTBweDtcbn1cblxuYnV0dG9uLmJ0bi1wcm9qZWN0LW1vdmUtZG93bjpob3ZlcixcbmJ1dHRvbi5idG4tcHJvamVjdC1tb3ZlLXVwOmhvdmVyLFxuYnV0dG9uLmJ0bi1wcm9qZWN0LWRlbGV0ZTpob3ZlcixcbmJ1dHRvbi5idG4tdGFzay1kZWxldGU6aG92ZXIge1xuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG59XG5cbi5wcm9qZWN0LWRldGFpbHMgPiBkaXYsXG4udGFzay1kZXRhaWxzID4gZGl2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yLXR3byk7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDlweCA5cHg7XG4gIHBhZGRpbmc6IDEwcHggMTVweCAxMHB4O1xufVxuXG4ucHJvamVjdC1kZXRhaWxzID4gZGl2OmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi50YXNrLWRldGFpbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbnRleHRhcmVhLmlucHV0LXRhc2stZGVzY3JpcHRpb24ge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yLXR3byk7XG4gIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiBtZWRpdW07XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgcmVzaXplOiBub25lO1xuICBwYWRkaW5nOiAxMHB4IDE1cHggMTBweDtcbn1cblxudGV4dGFyZWEuaW5wdXQtdGFzay1kZXNjcmlwdGlvbi5jb21wbGV0ZWQge1xuICBjb2xvcjogZ3JheTtcbn1cblxuLnByb2plY3QtZGV0YWlscyA+IC50YXNrLWJvdHRvbS1yb3csXG4udGFzay1kZXRhaWxzID4gLnRhc2stYm90dG9tLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogNDBweDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLXR3byk7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggOXB4IDlweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuaW5wdXQuaW5wdXQtdGFzay1kdWUtZGF0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3ItdHdvKTtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYWNjZW50LWNvbG9yLXRocmVlKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiAycHg7XG59XG5cbmlucHV0W2Rpc2FibGVkXS5pbnB1dC10YXNrLWR1ZS1kYXRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWluYWN0aXZlLWNvbG9yKTtcbn1cblxuLnRhc2stZGF5cy1yZW1haW5pbmcsXG4uYnRuLXRhc2stcHJpb3JpdHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgZ2FwOiA1cHg7XG4gIG1pbi13aWR0aDogODJweDtcbiAgY29sb3I6IHZhcigtLWluYWN0aXZlLWNvbG9yLXR3byk7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMHB4O1xufVxuXG5idXR0b24uYnRuLXRhc2stcHJpb3JpdHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtdGhyZWUpO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbnNwYW4ucHJpb3JpdHktbGFiZWwge1xuICBwYWRkaW5nOiAwcHggMnB4IDBweCAwcHg7XG59XG5cbnNwYW4ucHJpb3JpdHktaW5kaWNhdG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LXRocmVlKTtcbiAgbWFyZ2luOiAtOHB4O1xufVxuXG5zcGFuLnByaW9yaXR5LWluZGljYXRvci5sb3c6OmFmdGVyIHtcbiAgY29udGVudDogXCLil49cIjtcbiAgY29sb3I6IG1lZGl1bXNlYWdyZWVuO1xuICBmb250LXNpemU6IHh4LWxhcmdlO1xufVxuXG5zcGFuLnByaW9yaXR5LWluZGljYXRvci5tZWRpdW06OmFmdGVyIHtcbiAgY29udGVudDogXCLil49cIjtcbiAgY29sb3I6IGdvbGQ7XG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG59XG5cbnNwYW4ucHJpb3JpdHktaW5kaWNhdG9yLmhpZ2g6OmFmdGVyIHtcbiAgY29udGVudDogXCLil49cIjtcbiAgY29sb3I6IGNvcmFsO1xuICBmb250LXNpemU6IHh4LWxhcmdlO1xufVxuXG4ucHJpb3JpdHktaGlnaCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW9yaXR5LWhpZ2gtY29sb3IpO1xufVxuXG5idXR0b24uYnRuLWJhY2stdG8tYWxsLXByb2plY3RzIHtcbiAgaGVpZ2h0OiA0MnB4O1xuICB3aWR0aDogNDJweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDUwcHg7XG4gIGxlZnQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWFjY2VudC1jb2xvci10d28pO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yLXR3byk7XG4gIHBhZGRpbmc6IDJweCAycHggMHB4IDBweDtcbn1cblxuYnV0dG9uLmJ0bi1uZXctaXRlbSB7XG4gIGhlaWdodDogNDJweDtcbiAgd2lkdGg6IDQycHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiA1MHB4O1xuICByaWdodDogMjBweDtcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYWNjZW50LWNvbG9yLXR3byk7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItdHdvKTtcbiAgcGFkZGluZzogMHB4IDEwcHggMHB4O1xufVxuXG5mb290ZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgcGFkZGluZzogNXB4O1xufVxuXG5mb290ZXIgYSB7XG4gIGZvbnQtZmFtaWx5OiBcIkVsZWN0cm9saXplXCI7XG4gIGNvbG9yOiBncmF5O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgwMHB4KSB7XG4gIGJvZHkge1xuICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gIG5hdi5zb3J0LWJ1dHRvbnMtY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbGVmdDogNTkwcHg7XG4gIH1cblxuICBidXR0b24uYnRuLW5ldy1pdGVtIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbGVmdDogNzQwcHg7XG4gIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wi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IFxcXCJFbGVjdHJvbGl6ZVxcXCI7XFxuICBzcmM6IHVybChcXFwiLi9mb250cy9FbGVjdHJvbGl6ZS1SZWd1bGFyLndvZmZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJRdWlja3NhbmRcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4vZm9udHMvUXVpY2tzYW5kLU1lZGl1bS53b2ZmXFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUXVpY2tzYW5kXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuL2ZvbnRzL1F1aWNrc2FuZC1Cb2xkLndvZmZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbjpyb290LnRoZW1lLTEge1xcbiAgLS1tYWluLWNvbG9yOiBibGFjaztcXG4gIC0tYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gIC0tYmFja2dyb3VuZC1jb2xvci10d286IGxhdmVuZGVyYmx1c2g7XFxuICAtLWFjY2VudC1jb2xvcjogc2FsbW9uO1xcbiAgLS1hY2NlbnQtY29sb3ItdHdvOiB3aGl0ZTtcXG4gIC0tYWNjZW50LWNvbG9yLXRocmVlOiBsaWdodHBpbms7XFxuICAtLXByaW9yaXR5LWhpZ2gtY29sb3I6IHBhbGV2aW9sZXRyZWQ7XFxuICAtLWFjdGl2ZS1jb2xvcjogdG9tYXRvO1xcbiAgLS1hY3RpdmUtY29sb3ItdHdvOiB3aGl0ZTtcXG4gIC0taW5hY3RpdmUtY29sb3I6IHNpbHZlcjtcXG4gIC0taW5hY3RpdmUtY29sb3ItdHdvOiBncmF5O1xcbiAgLS1kZWZhdWx0LXRoaWNrbmVzczogMnB4O1xcbn1cXG5cXG46cm9vdC50aGVtZS0yIHtcXG4gIC0tbWFpbi1jb2xvcjogYmxhY2s7XFxuICAtLWJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcXG4gIC0tYmFja2dyb3VuZC1jb2xvci10d286IHdoaXRlc21va2U7XFxuICAtLWFjY2VudC1jb2xvcjogbWVkaXVtc2xhdGVibHVlO1xcbiAgLS1hY2NlbnQtY29sb3ItdHdvOiB3aGl0ZTtcXG4gIC0tYWNjZW50LWNvbG9yLXRocmVlOiB0aGlzdGxlO1xcbiAgLS1wcmlvcml0eS1oaWdoLWNvbG9yOiBwYWxldmlvbGV0cmVkO1xcbiAgLS1hY3RpdmUtY29sb3I6IG1lZGl1bXNsYXRlYmx1ZTtcXG4gIC0tYWN0aXZlLWNvbG9yLXR3bzogd2hpdGU7XFxuICAtLWluYWN0aXZlLWNvbG9yOiBzaWx2ZXI7XFxuICAtLWluYWN0aXZlLWNvbG9yLXR3bzogZ3JheTtcXG4gIC0tZGVmYXVsdC10aGlja25lc3M6IDJweDtcXG59XFxuXFxuaHRtbCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwcHg7XFxuICBwYWRkaW5nOiAwcHg7XFxufVxcblxcbiosXFxuKjpiZWZvcmUsXFxuKjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbiAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2IHtcXG4gIG1hcmdpbjogMHB4O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUXVpY2tzYW5kXFxcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxuICBtYXJnaW46IDBweDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB6LWluZGV4OiAxO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLXR3byk7XFxuICBib3JkZXItYm90dG9tOiB2YXIoLS1kZWZhdWx0LXRoaWNrbmVzcykgc29saWQgdmFyKC0tYWNjZW50LWNvbG9yLXR3byk7XFxufVxcblxcbi5oZWFkZXItdG9wLXJvdyB7XFxuICBoZWlnaHQ6IDU2cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuaDEge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJFbGVjdHJvbGl6ZVxcXCI7XFxuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxufVxcblxcbmgxIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxubmF2LnNvcnQtYnV0dG9ucy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxubmF2LnNvcnQtYnV0dG9ucy1jb250YWluZXIgYnV0dG9uIHtcXG4gIHdpZHRoOiA5NnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yLXR3byk7XFxuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWFjY2VudC1jb2xvci10d28pO1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUXVpY2tzYW5kXFxcIjtcXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBwYWRkaW5nOiA3cHggOHB4IDVweDtcXG59XFxuXFxubmF2LnNvcnQtYnV0dG9ucy1jb250YWluZXIgYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvci10d28pO1xcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbn1cXG5cXG5uYXYuc29ydC1idXR0b25zLWNvbnRhaW5lciBidXR0b24uaGlnaGxpZ2h0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yLXR3byk7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbn1cXG5cXG5uYXYuYnJlYWRjcnVtYi1uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IGxhcmdlcjtcXG4gIHBhZGRpbmc6IDVweCAxMHB4IDBweDtcXG4gIG1hcmdpbjogMHB4IDBweCAxMHB4O1xcbn1cXG5cXG5zcGFuIHtcXG4gIHBhZGRpbmc6IDBweCAxMHB4IDBweDtcXG59XFxuXFxuc3Bhbi5hbGwtcHJvamVjdHMge1xcbiAgaGVpZ2h0OiAzNnB4O1xcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLXR3byk7XFxuICBmb250LXNpemU6IG1lZGl1bTtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjIzcHg7XFxuICBwYWRkaW5nOiA2cHggNnB4IDNweDtcXG59XFxuXFxuc3Bhbi5jdXJyZW50LXByb2plY3Qge1xcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbiAgZm9udC1zaXplOiBsYXJnZTtcXG4gIHBhZGRpbmc6IDNweCA2cHggM3B4O1xcbn1cXG5cXG5idXR0b24uYnRuLXZpZXctYWxsLXByb2plY3RzIHtcXG4gIGhlaWdodDogMzZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvci10d28pO1xcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3ItdHdvKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICBmb250LWZhbWlseTogXFxcIlF1aWNrc2FuZFxcXCI7XFxuICBmb250LXNpemU6IG1lZGl1bTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxuICBwYWRkaW5nOiAzcHggNnB4IDNweDtcXG59XFxuXFxuYnV0dG9uLmJ0bi12aWV3LWFsbC1wcm9qZWN0czpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tYWN0aXZlLWNvbG9yKTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWFjdGl2ZS1jb2xvcik7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcXG59XFxuXFxuYnV0dG9uLmJ0bi12aWV3LWFsbC1wcm9qZWN0czo6YWZ0ZXIge1xcbiAgaGVpZ2h0OiAwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxubWFpbiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAwO1xcblxcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBwYWRkaW5nLXRvcDogMTMwcHg7XFxufVxcblxcbi5pdGVtLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmctYm90dG9tOiA4MHB4O1xcbn1cXG5cXG4ucHJvamVjdC1jYXJkLFxcbi50YXNrLWNhcmQge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZmxleDogMTtcXG4gIGJvcmRlcjogdmFyKC0tZGVmYXVsdC10aGlja25lc3MpIHNvbGlkIHZhcigtLWFjY2VudC1jb2xvci10aHJlZSk7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgbWFyZ2luOiAwcHggMHB4IDIwcHg7XFxufVxcblxcbi5wcm9qZWN0LWhlYWRlcixcXG4udGFzay1oZWFkZXIge1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItdGhyZWUpO1xcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xcbiAgcGFkZGluZzogNXB4IDVweCA2cHggNXB4O1xcbn1cXG5cXG4ucHJvamVjdC1oZWFkZXI6aG92ZXIgLmlucHV0LXByb2plY3QtdGl0bGUsXFxuLnRhc2staGVhZGVyOmhvdmVyIC5pbnB1dC10YXNrLXRpdGxlIHtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG59XFxuXFxuLnRhc2staGVhZGVyLmNvbXBsZXRlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbmFjdGl2ZS1jb2xvcik7XFxufVxcblxcbi50YXNrLWRldGFpbHMuY29tcGxldGVkIHtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMS41cyBlYXNlO1xcbiAgb3BhY2l0eTogMDtcXG4gIGhlaWdodDogMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi50YXNrLWRldGFpbHMucGVuZGluZyxcXG4udGFzay1kZXRhaWxzLmNvbXBsZXRlZC52aXNpYmxlIHtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMS41cyBlYXNlO1xcbiAgb3BhY2l0eTogMTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyogVGhpcyBydWxlIGlzIHJlcXVpcmVkIGZvciBjbGljayBldmVudHMgb24gZGlzYWJsZWQgaW5wdXQgZWxlbWVudHMgdG8gcHJvcGFnYXRlIHVwd2FyZHMgb24gc29tZSBicm93c2VycyAqL1xcbmlucHV0W2Rpc2FibGVkXSB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuaW5wdXQuaW5wdXQtdGFzay10aXRsZS5jb21wbGV0ZWQge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi50YXNrLWNhcmQuY29tcGxldGVkIHtcXG4gIGJvcmRlcjogdmFyKC0tZGVmYXVsdC10aGlja25lc3MpIHNvbGlkIHZhcigtLWluYWN0aXZlLWNvbG9yKTtcXG59XFxuXFxuYnV0dG9uLmJ0bi1zYXZlLXByb2plY3QsXFxuYnV0dG9uLmJ0bi1zYXZlLXRhc2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yLXR3byk7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1tYWluLWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDVweCA4cHggNXB4O1xcbn1cXG5cXG5pbnB1dC5pbnB1dC1wcm9qZWN0LXRpdGxlLFxcbmlucHV0LmlucHV0LXRhc2stdGl0bGUge1xcbiAgZmxleDogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yLXR3byk7XFxuICBmb250LWZhbWlseTogXFxcIlF1aWNrc2FuZFxcXCI7XFxuICBmb250LXNpemU6IG1lZGl1bTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxufVxcblxcbmlucHV0LmlucHV0LXByb2plY3QtdGl0bGU6Zm9jdXMsXFxuaW5wdXQuaW5wdXQtdGFzay10aXRsZTpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4ucHJvamVjdC1oZWFkZXItbGVmdCxcXG4udGFzay1oZWFkZXItbGVmdCB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmJ1dHRvbi5idG4tdGFzay1zdGF0dXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItdHdvKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICBwYWRkaW5nOiAwcHggNnB4IDBweDtcXG59XFxuXFxuYnV0dG9uLmJ0bi10YXNrLXN0YXR1cy5wZW5kaW5nOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwi4piQXFxcIjtcXG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxufVxcblxcbmJ1dHRvbi5idG4tdGFzay1zdGF0dXMuY29tcGxldGVkOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwi4piRXFxcIjtcXG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxufVxcblxcbi5wcm9qZWN0LWhlYWRlcjpmb2N1cy13aXRoaW4sXFxuLnRhc2staGVhZGVyOmZvY3VzLXdpdGhpbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbn1cXG5cXG4udGFzay10aXRsZS5jb21wbGV0ZWQge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICB0ZXh0LWRlY29yYXRpb24tY29sb3I6IHZhcigtLWFjY2VudC1jb2xvci10d28pO1xcbiAgdGV4dC1kZWNvcmF0aW9uLXRoaWNrbmVzczogMnB4O1xcbn1cXG5cXG4udGFzay1oZWFkZXItcmlnaHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNnB4O1xcbn1cXG5cXG5idXR0b24uYnRuLXByb2plY3QtbW92ZS1kb3duLFxcbmJ1dHRvbi5idG4tcHJvamVjdC1tb3ZlLXVwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC10aHJlZSk7XFxuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yLXR3byk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgcGFkZGluZzogMHB4IDEwcHg7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbmJ1dHRvbi5idG4tcHJvamVjdC1kZWxldGUsXFxuYnV0dG9uLmJ0bi10YXNrLWRlbGV0ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtdGhyZWUpO1xcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvci10d28pO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHBhZGRpbmc6IDBweCAxMHB4O1xcbn1cXG5cXG5idXR0b24uYnRuLXByb2plY3QtbW92ZS1kb3duOmhvdmVyLFxcbmJ1dHRvbi5idG4tcHJvamVjdC1tb3ZlLXVwOmhvdmVyLFxcbmJ1dHRvbi5idG4tcHJvamVjdC1kZWxldGU6aG92ZXIsXFxuYnV0dG9uLmJ0bi10YXNrLWRlbGV0ZTpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxufVxcblxcbi5wcm9qZWN0LWRldGFpbHMgPiBkaXYsXFxuLnRhc2stZGV0YWlscyA+IGRpdiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItdHdvKTtcXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA5cHggOXB4O1xcbiAgcGFkZGluZzogMTBweCAxNXB4IDEwcHg7XFxufVxcblxcbi5wcm9qZWN0LWRldGFpbHMgPiBkaXY6aG92ZXIge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi50YXNrLWRldGFpbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbnRleHRhcmVhLmlucHV0LXRhc2stZGVzY3JpcHRpb24ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItdHdvKTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUXVpY2tzYW5kXFxcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IG1lZGl1bTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICByZXNpemU6IG5vbmU7XFxuICBwYWRkaW5nOiAxMHB4IDE1cHggMTBweDtcXG59XFxuXFxudGV4dGFyZWEuaW5wdXQtdGFzay1kZXNjcmlwdGlvbi5jb21wbGV0ZWQge1xcbiAgY29sb3I6IGdyYXk7XFxufVxcblxcbi5wcm9qZWN0LWRldGFpbHMgPiAudGFzay1ib3R0b20tcm93LFxcbi50YXNrLWRldGFpbHMgPiAudGFzay1ib3R0b20tcm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci10d28pO1xcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA5cHggOXB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuaW5wdXQuaW5wdXQtdGFzay1kdWUtZGF0ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLXR3byk7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3ItdGhyZWUpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHBhZGRpbmc6IDJweDtcXG59XFxuXFxuaW5wdXRbZGlzYWJsZWRdLmlucHV0LXRhc2stZHVlLWRhdGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pbmFjdGl2ZS1jb2xvcik7XFxufVxcblxcbi50YXNrLWRheXMtcmVtYWluaW5nLFxcbi5idG4tdGFzay1wcmlvcml0eSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgZ2FwOiA1cHg7XFxuICBtaW4td2lkdGg6IDgycHg7XFxuICBjb2xvcjogdmFyKC0taW5hY3RpdmUtY29sb3ItdHdvKTtcXG4gIGZvbnQtc2l6ZTogc21hbGw7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMHB4O1xcbn1cXG5cXG5idXR0b24uYnRuLXRhc2stcHJpb3JpdHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LXRocmVlKTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuc3Bhbi5wcmlvcml0eS1sYWJlbCB7XFxuICBwYWRkaW5nOiAwcHggMnB4IDBweCAwcHg7XFxufVxcblxcbnNwYW4ucHJpb3JpdHktaW5kaWNhdG9yIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC10aHJlZSk7XFxuICBtYXJnaW46IC04cHg7XFxufVxcblxcbnNwYW4ucHJpb3JpdHktaW5kaWNhdG9yLmxvdzo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIuKXj1xcXCI7XFxuICBjb2xvcjogbWVkaXVtc2VhZ3JlZW47XFxuICBmb250LXNpemU6IHh4LWxhcmdlO1xcbn1cXG5cXG5zcGFuLnByaW9yaXR5LWluZGljYXRvci5tZWRpdW06OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCLil49cXFwiO1xcbiAgY29sb3I6IGdvbGQ7XFxuICBmb250LXNpemU6IHh4LWxhcmdlO1xcbn1cXG5cXG5zcGFuLnByaW9yaXR5LWluZGljYXRvci5oaWdoOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwi4pePXFxcIjtcXG4gIGNvbG9yOiBjb3JhbDtcXG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxufVxcblxcbi5wcmlvcml0eS1oaWdoIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW9yaXR5LWhpZ2gtY29sb3IpO1xcbn1cXG5cXG5idXR0b24uYnRuLWJhY2stdG8tYWxsLXByb2plY3RzIHtcXG4gIGhlaWdodDogNDJweDtcXG4gIHdpZHRoOiA0MnB4O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiA1MHB4O1xcbiAgbGVmdDogMjBweDtcXG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3ItdHdvKTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvci10d28pO1xcbiAgcGFkZGluZzogMnB4IDJweCAwcHggMHB4O1xcbn1cXG5cXG5idXR0b24uYnRuLW5ldy1pdGVtIHtcXG4gIGhlaWdodDogNDJweDtcXG4gIHdpZHRoOiA0MnB4O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiA1MHB4O1xcbiAgcmlnaHQ6IDIwcHg7XFxuICBmb250LXNpemU6IHh4LWxhcmdlO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYWNjZW50LWNvbG9yLXR3byk7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItdHdvKTtcXG4gIHBhZGRpbmc6IDBweCAxMHB4IDBweDtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbmZvb3RlciBhIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRWxlY3Ryb2xpemVcXFwiO1xcbiAgY29sb3I6IGdyYXk7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAwcHgpIHtcXG4gIGJvZHkge1xcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgfVxcblxcbiAgbmF2LnNvcnQtYnV0dG9ucy1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGxlZnQ6IDU5MHB4O1xcbiAgfVxcblxcbiAgYnV0dG9uLmJ0bi1uZXctaXRlbSB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgbGVmdDogNzQwcHg7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4vdGFza1wiO1xuaW1wb3J0IHsgbG9hZFRoZW1lLCB0b2dnbGVUaGVtZSwgcmVuZGVyUHJvamVjdFZpZXdCdXR0b25zLCByZW5kZXJUYXNrVmlld0J1dHRvbnMsIGNsZWFyUHJvamVjdFZpZXdCdXR0b25zLCBjbGVhclRhc2tWaWV3QnV0dG9ucywgcmVuZGVyQnJlYWRjcnVtYk5hdiwgY2xlYXJJdGVtQ29udGFpbmVyLCByZW5kZXJBbGxQcm9qZWN0cywgcmVuZGVyVGFza3MsIHNob3dUYXNrVmlld0J1dHRvbnMsIHNob3dTb3J0aW5nTW9kZSwgc2hvd1RvcE9mUGFnZSwgYXV0b0FkanVzdEhlaWdodCx0b2dnbGVUYXNrRWxlbWVudHMsIGNsaWNrSGFuZGxlckNvbXBsZXRlZFRhc2tDYXJkIH0gZnJvbSBcIi4vdmlld1wiOyAvLyBwcmV0dGllci1pZ25vcmVcbmltcG9ydCB7IHNhdmVUb0xvY2FsU3RvcmFnZSwgbG9hZEZyb21Mb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2VcIjtcbmltcG9ydCB7IGRlbW9Qcm9qZWN0cyB9IGZyb20gXCIuL2RlbW9EYXRhXCI7XG5cbmxldCBwcm9qZWN0cyA9IGxvYWRGcm9tTG9jYWxTdG9yYWdlKCkgfHwgZGVtb1Byb2plY3RzO1xubGV0IHRhcmdldFByb2plY3Q7XG5sZXQgdmlldztcbmxldCBkZWZhdWx0U29ydGluZ01vZGUgPSBcImR1ZURhdGVcIjtcblxuY29uc3QgbG9hZFByb2plY3RzVmlldyA9IGZ1bmN0aW9uICgpIHtcbiAgdmlldyA9IFwicHJvamVjdHNcIjtcbiAgY2xlYXJUYXNrVmlld0J1dHRvbnMoKTtcbiAgcmVuZGVyUHJvamVjdFZpZXdCdXR0b25zKCk7XG4gIGNsaWNrSGFuZGxlckJ0bk5ld0l0ZW0oKTtcbiAgcmVuZGVyQnJlYWRjcnVtYk5hdih2aWV3KTtcbiAgY2xlYXJJdGVtQ29udGFpbmVyKCk7XG4gIHJlbmRlckFsbFByb2plY3RzKHByb2plY3RzKTtcbiAgaW5wdXRIYW5kbGVyUHJvamVjdFRpdGxlKCk7XG4gIGNsaWNrSGFuZGxlckRpdlByb2plY3REZXRhaWxzKCk7XG4gIGNsaWNrSGFuZGxlckJ0bkRlbGV0ZVByb2plY3QoKTtcbn07XG5cbmNvbnN0IGxvYWRUYXNrc1ZpZXcgPSBmdW5jdGlvbiAodGFyZ2V0UHJvamVjdCwgc29ydENyaXRlcmlhKSB7XG4gIHZpZXcgPSBcInRhc2tzXCI7XG4gIGNsZWFyUHJvamVjdFZpZXdCdXR0b25zKCk7XG4gIHJlbmRlclRhc2tWaWV3QnV0dG9ucygpO1xuICBjbGlja0hhbmRsZXJCdG5OZXdJdGVtKCk7XG4gIHJlbmRlckJyZWFkY3J1bWJOYXYodmlldywgdGFyZ2V0UHJvamVjdCk7XG4gIGNsZWFySXRlbUNvbnRhaW5lcigpO1xuICByZW5kZXJUYXNrcyh0YXJnZXRQcm9qZWN0LnRhc2tzLCBzb3J0Q3JpdGVyaWEpO1xuICBzaG93VGFza1ZpZXdCdXR0b25zKHRhcmdldFByb2plY3QpO1xuICBzaG93U29ydGluZ01vZGUoc29ydENyaXRlcmlhKTtcbiAgY2xpY2tIYW5kbGVyQnRuU29ydEJ5RHVlRGF0ZSh0YXJnZXRQcm9qZWN0KTtcbiAgY2xpY2tIYW5kbGVyQnRuU29ydEJ5UHJpb3JpdHkodGFyZ2V0UHJvamVjdCk7XG4gIGNsaWNrSGFuZGxlckJ0blZpZXdBbGxQcm9qZWN0cygpO1xuICBjbGlja0hhbmRsZXJCdG5CYWNrVG9BbGxQcm9qZWN0cygpO1xuICBjbGlja0hhbmRsZXJDb21wbGV0ZWRUYXNrQ2FyZCgpO1xuICBjbGlja0hhbmRsZXJCdG5UYXNrU3RhdHVzKHRhcmdldFByb2plY3QpO1xuICBpbnB1dEhhbmRsZXJUYXNrVGl0bGUodGFyZ2V0UHJvamVjdCk7XG4gIGNsaWNrSGFuZGxlckJ0bkRlbGV0ZVRhc2soKTtcbiAgaW5wdXRIYW5kbGVyVGFza0Rlc2NyaXB0aW9uKHRhcmdldFByb2plY3QpO1xuICBpbnB1dEhhbmRsZXJUYXNrRHVlRGF0ZSh0YXJnZXRQcm9qZWN0KTtcbiAgY2xpY2tIYW5kbGVyQnRuVGFza1ByaW9yaXR5KHRhcmdldFByb2plY3QpO1xuICBzaG93VG9wT2ZQYWdlKCk7XG59O1xuXG5jb25zdCBjcmVhdGVOZXdQcm9qZWN0ID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QoXCJcIiwgXCJcIiwgW10pO1xuICBwcm9qZWN0LmlkID0gYFAke25ldyBEYXRlKCkuZ2V0VGltZSgpfWA7XG4gIHByb2plY3RzW3Byb2plY3QuaWRdID0gcHJvamVjdDtcbiAgc2F2ZVRvTG9jYWxTdG9yYWdlKCk7XG4gIGNsZWFySXRlbUNvbnRhaW5lcigpO1xuICBsb2FkUHJvamVjdHNWaWV3KCk7XG4gIGNvbnN0IGlucHV0UHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICBcIi5pbnB1dC1wcm9qZWN0LXRpdGxlXCJcbiAgKVswXTtcbiAgaW5wdXRQcm9qZWN0VGl0bGUuZm9jdXMoKTtcbn07XG5cbmNvbnN0IGRlbGV0ZVByb2plY3QgPSBmdW5jdGlvbiAoZSkge1xuICBjb25zdCBwcm9qZWN0SWQgPSBlLnRhcmdldC5jbG9zZXN0KFwiLnByb2plY3QtY2FyZFwiKS5kYXRhc2V0LnByb2plY3RJZDtcbiAgY29uc3QgcHJvamVjdFRpdGxlID0gcHJvamVjdHNbcHJvamVjdElkXS50aXRsZTtcbiAgY29uc3QgY29uZmlybURlbGV0ZSA9IGNvbmZpcm0oXG4gICAgcHJvamVjdFRpdGxlXG4gICAgICA/IGAke3Byb2plY3RUaXRsZX0gLSBEZWxldGUgdGhpcyBwcm9qZWN0P2BcbiAgICAgIDogXCJEZWxldGUgdGhpcyBwcm9qZWN0P1wiXG4gICk7XG4gIGlmICghY29uZmlybURlbGV0ZSkgcmV0dXJuO1xuICBkZWxldGUgcHJvamVjdHNbcHJvamVjdElkXTtcbiAgc2F2ZVRvTG9jYWxTdG9yYWdlKCk7XG4gIGxvYWRQcm9qZWN0c1ZpZXcoKTtcbn07XG5cbmNvbnN0IGNyZWF0ZU5ld1Rhc2sgPSBmdW5jdGlvbiAoKSB7XG4gIGxldCBpZCA9IGBUJHtuZXcgRGF0ZSgpLmdldFRpbWUoKX1gO1xuICB0YXJnZXRQcm9qZWN0LmFkZFRhc2soXG4gICAgbmV3IFRhc2soaWQsIFwiXCIsIFwiXCIsIFwiXCIsIFwicGVuZGluZ1wiLCBcIm1lZGl1bVwiLCBcImVuYWJsZWRcIilcbiAgKTtcbiAgc2F2ZVRvTG9jYWxTdG9yYWdlKCk7XG4gIGNsZWFySXRlbUNvbnRhaW5lcigpO1xuICBsb2FkVGFza3NWaWV3KHRhcmdldFByb2plY3QpO1xuICBjb25zdCBpbnB1dFRhc2tUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXQtdGFzay10aXRsZVwiKTtcbiAgaW5wdXRUYXNrVGl0bGUuZm9jdXMoKTtcbn07XG5cbmNvbnN0IGRlbGV0ZVRhc2sgPSBmdW5jdGlvbiAoZSkge1xuICBjb25zdCB0YXNrSWQgPSBlLnRhcmdldC5jbG9zZXN0KFwiLnRhc2stY2FyZFwiKS5kYXRhc2V0LnRhc2tJZDtcbiAgY29uc3QgdGFza1RpdGxlID0gdGFyZ2V0UHJvamVjdC50YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2suaWQgPT09IHRhc2tJZClbMF1cbiAgICAudGl0bGU7XG4gIGNvbnN0IGNvbmZpcm1EZWxldGUgPSBjb25maXJtKFxuICAgIHRhc2tUaXRsZSA/IGAke3Rhc2tUaXRsZX0gLSBEZWxldGUgdGhpcyB0YXNrP2AgOiBcIkRlbGV0ZSB0aGlzIHRhc2s/XCJcbiAgKTtcbiAgaWYgKCFjb25maXJtRGVsZXRlKSByZXR1cm47XG4gIHRhcmdldFByb2plY3QuZGVsZXRlVGFzayh0YXNrSWQpO1xuICBzYXZlVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgbG9hZFRhc2tzVmlldyh0YXJnZXRQcm9qZWN0KTtcbn07XG5cbi8vIFNhdmUgZnVuY3Rpb25zIHRyaWdnZXJlZCBieSBpbnB1dHMvZWRpdHNcblxuY29uc3QgYXV0b1NhdmVQcm9qZWN0VGl0bGVDaGFuZ2VzID0gZnVuY3Rpb24gKHByb2plY3RJZCwgdGl0bGUpIHtcbiAgcHJvamVjdHNbcHJvamVjdElkXS50aXRsZSA9IHRpdGxlLnZhbHVlO1xuICBzYXZlVG9Mb2NhbFN0b3JhZ2UoKTtcbn07XG5cbmNvbnN0IHRvZ2dsZVRhc2tTdGF0dXMgPSBmdW5jdGlvbiAodGFyZ2V0UHJvamVjdCwgdGFza0lkKSB7XG4gIHRhcmdldFByb2plY3QudGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIGlmICh0YXNrLmlkID09PSB0YXNrSWQpIHtcbiAgICAgIHRhc2suc3RhdHVzID09PSBcInBlbmRpbmdcIlxuICAgICAgICA/ICh0YXNrLnN0YXR1cyA9IFwiY29tcGxldGVkXCIpXG4gICAgICAgIDogKHRhc2suc3RhdHVzID0gXCJwZW5kaW5nXCIpO1xuXG4gICAgICB0YXNrLmlucHV0U3RhdHVzID09PSBcImVuYWJsZWRcIlxuICAgICAgICA/ICh0YXNrLmlucHV0U3RhdHVzID0gXCJkaXNhYmxlZFwiKVxuICAgICAgICA6ICh0YXNrLmlucHV0U3RhdHVzID0gXCJlbmFibGVkXCIpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCBhdXRvU2F2ZVRhc2tUaXRsZUNoYW5nZXMgPSBmdW5jdGlvbiAodGFyZ2V0UHJvamVjdCwgdGFza0lkLCB0YXNrVGl0bGUpIHtcbiAgdGFyZ2V0UHJvamVjdC50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgaWYgKHRhc2suaWQgPT09IHRhc2tJZCkgdGFzay50aXRsZSA9IHRhc2tUaXRsZS52YWx1ZTtcbiAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgfSk7XG59O1xuXG4vLyBwcmV0dGllci1pZ25vcmVcbmNvbnN0IGF1dG9TYXZlVGFza0Rlc2NyaXB0aW9uQ2hhbmdlcyA9IGZ1bmN0aW9uICh0YXJnZXRQcm9qZWN0LCB0YXNrSWQsIHRhc2tEZXNjcmlwdGlvbkVsKSB7XG4gIHRhcmdldFByb2plY3QudGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIGlmICh0YXNrLmlkID09PSB0YXNrSWQpIHRhc2suZGVzY3JpcHRpb24gPSB0YXNrRGVzY3JpcHRpb25FbC52YWx1ZTtcbiAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgfSk7XG59O1xuXG4vLyBwcmV0dGllci1pZ25vcmVcbmNvbnN0IGF1dG9TYXZlVGFza0R1ZURhdGVDaGFuZ2VzID0gZnVuY3Rpb24gKHRhcmdldFByb2plY3QsIHRhc2tJZCwgdGFza0R1ZURhdGVFbCkge1xuICB0YXJnZXRQcm9qZWN0LnRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICBpZiAodGFzay5pZCA9PT0gdGFza0lkKSB0YXNrLmR1ZURhdGUgPSB0YXNrRHVlRGF0ZUVsLnZhbHVlO1xuICAgIHNhdmVUb0xvY2FsU3RvcmFnZSgpO1xuICB9KTtcbn07XG5cbi8vIHByZXR0aWVyLWlnbm9yZVxuY29uc3QgdXBkYXRlRGF5c1JlbWFpbmluZyA9IGZ1bmN0aW9uICh0YXJnZXRQcm9qZWN0LCB0YXNrSWQsIGUpIHtcbiAgY29uc3QgdGFza0RheXNSZW1haW5pbmdFbCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWRheXMtcmVtYWluaW5nXCIpO1xuICB0YXJnZXRQcm9qZWN0LnRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICBpZiAodGFzay5pZCA9PT0gdGFza0lkKSB0YXNrRGF5c1JlbWFpbmluZ0VsLmlubmVySFRNTCA9IHRhc2suZ2V0RGF5c1JlbWFpbmluZygpO1xuICB9KVxufTtcblxuLy8gcHJldHRpZXItaWdub3JlXG5jb25zdCB0b2dnbGVUYXNrUHJpb3J0eSA9IGZ1bmN0aW9uICh0YXJnZXRQcm9qZWN0LCB0YXNrSWQsIGJ1dHRvbikge1xuICBjb25zdCBwcmlvcml0eUxldmVsU2hpZnRlciA9IHsgbG93OiBcIm1lZGl1bVwiLCBtZWRpdW06IFwiaGlnaFwiLCBoaWdoOiBcImxvd1wiIH07XG4gIHRhcmdldFByb2plY3QudGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIGlmICh0YXNrLmlkID09PSB0YXNrSWQpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRMZXZlbCA9IHRhc2sucHJpb3JpdHk7XG4gICAgICBjb25zdCBuZXh0TGV2ZWwgPSBwcmlvcml0eUxldmVsU2hpZnRlclt0YXNrLnByaW9yaXR5XTtcbiAgICAgIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBidXR0b24ucXVlcnlTZWxlY3RvcihcIi5wcmlvcml0eS1sYWJlbFwiKVxuICAgICAgY29uc3QgcHJpb3JpdHlJbmRpY2F0b3IgPSBidXR0b24ucXVlcnlTZWxlY3RvcihcIi5wcmlvcml0eS1pbmRpY2F0b3JcIilcbiAgICAgIGNvbnN0IHRhc2tDYXJkID0gYnV0dG9uLmNsb3Nlc3QoXCIudGFzay1jYXJkXCIpXG4gICAgICBwcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gbmV4dExldmVsO1xuICAgICAgcHJpb3JpdHlJbmRpY2F0b3IuY2xhc3NMaXN0LnJlcGxhY2UoY3VycmVudExldmVsLCBuZXh0TGV2ZWwpO1xuICAgICAgdGFza0NhcmQuY2xhc3NMaXN0LnJlcGxhY2UoY3VycmVudExldmVsLCBuZXh0TGV2ZWwpO1xuICAgICAgdGFzay5wcmlvcml0eSA9IG5leHRMZXZlbDtcbiAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UoKVxuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCBzb3J0QnlEdWVEYXRlID0gZnVuY3Rpb24gKHRhcmdldFByb2plY3QpIHtcbiAgbG9hZFRhc2tzVmlldyh0YXJnZXRQcm9qZWN0LCBcImR1ZURhdGVcIik7XG59O1xuXG5jb25zdCBzb3J0QnlQcmlvcml0eSA9IGZ1bmN0aW9uICh0YXJnZXRQcm9qZWN0KSB7XG4gIGxvYWRUYXNrc1ZpZXcodGFyZ2V0UHJvamVjdCwgXCJwcmlvcml0eVwiKTtcbn07XG5cbi8vIEV2ZW50IGhhbmRsZXJzIC0gTmF2aWdhdGlvblxuXG5jb25zdCBjbGlja0hhbmRsZXJEaXZQcm9qZWN0RGV0YWlscyA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgcHJvamVjdERldGFpbHNOTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdC1kZXRhaWxzXCIpO1xuICBwcm9qZWN0RGV0YWlsc05MLmZvckVhY2goKHByb2plY3REZXRhaWwpID0+IHtcbiAgICBwcm9qZWN0RGV0YWlsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjb25zdCBwcm9qZWN0Q2FyZElkID0gcHJvamVjdERldGFpbC5wYXJlbnRFbGVtZW50LmRhdGFzZXQucHJvamVjdElkO1xuICAgICAgdGFyZ2V0UHJvamVjdCA9IHByb2plY3RzW3Byb2plY3RDYXJkSWRdO1xuICAgICAgbG9hZFRhc2tzVmlldyh0YXJnZXRQcm9qZWN0LCBkZWZhdWx0U29ydGluZ01vZGUpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IGNsaWNrSGFuZGxlckJ0blZpZXdBbGxQcm9qZWN0cyA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgYnRuVmlld0FsbFByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG4tdmlldy1hbGwtcHJvamVjdHNcIik7XG4gIGJ0blZpZXdBbGxQcm9qZWN0cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGxvYWRQcm9qZWN0c1ZpZXcoKTtcbiAgfSk7XG59O1xuXG5jb25zdCBjbGlja0hhbmRsZXJCdG5CYWNrVG9BbGxQcm9qZWN0cyA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgYnRuQmFja1RvQWxsUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1iYWNrLXRvLWFsbC1wcm9qZWN0c1wiKTsgLy8gcHJldHRpZXItaWdub3JlXG4gIGJ0bkJhY2tUb0FsbFByb2plY3RzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbG9hZFByb2plY3RzVmlldygpO1xuICB9KTtcbn07XG5cbmNvbnN0IGNsaWNrSGFuZGxlckJ0blNvcnRCeUR1ZURhdGUgPSBmdW5jdGlvbiAodGFyZ2V0UHJvamVjdCkge1xuICBjb25zdCBidG5Tb3J0QnlEdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG4tc29ydC1kdWUtZGF0ZVwiKTtcbiAgYnRuU29ydEJ5RHVlRGF0ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT5cbiAgICBzb3J0QnlEdWVEYXRlKHRhcmdldFByb2plY3QpXG4gICk7XG59O1xuXG5jb25zdCBjbGlja0hhbmRsZXJCdG5Tb3J0QnlQcmlvcml0eSA9IGZ1bmN0aW9uICh0YXJnZXRQcm9qZWN0KSB7XG4gIGNvbnN0IGJ0blNvcnRCeVByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG4tc29ydC1wcmlvcml0eVwiKTtcbiAgYnRuU29ydEJ5UHJpb3JpdHkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+XG4gICAgc29ydEJ5UHJpb3JpdHkodGFyZ2V0UHJvamVjdClcbiAgKTtcbn07XG5cbi8vIEV2ZW50IGhhbmRsZXJzIC0gQ3JlYXRlIGFuZCBkZWxldGUgaXRlbXNcblxuY29uc3QgY2xpY2tIYW5kbGVyQnRuTmV3SXRlbSA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgYnRuTmV3SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLW5ldy1pdGVtXCIpO1xuICBidG5OZXdJdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaWYgKHZpZXcgPT09IFwicHJvamVjdHNcIikgY3JlYXRlTmV3UHJvamVjdCgpO1xuICAgIGlmICh2aWV3ID09PSBcInRhc2tzXCIpIGNyZWF0ZU5ld1Rhc2soKTtcbiAgfSk7XG59O1xuXG5jb25zdCBjbGlja0hhbmRsZXJCdG5EZWxldGVQcm9qZWN0ID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBkZWxldGVQcm9qZWN0QnV0dG9uc05MID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICBcIi5idG4tcHJvamVjdC1kZWxldGVcIlxuICApO1xuICBkZWxldGVQcm9qZWN0QnV0dG9uc05MLmZvckVhY2goKGJ1dHRvbikgPT5cbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRlbGV0ZVByb2plY3QuYmluZCh0aGlzKSlcbiAgKTtcbn07XG5cbmNvbnN0IGNsaWNrSGFuZGxlckJ0bkRlbGV0ZVRhc2sgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGRlbGV0ZVRhc2tCdXR0b25zTkwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJ0bi10YXNrLWRlbGV0ZVwiKTtcbiAgZGVsZXRlVGFza0J1dHRvbnNOTC5mb3JFYWNoKChidXR0b24pID0+XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkZWxldGVUYXNrLmJpbmQodGhpcykpXG4gICk7XG59O1xuXG4vLyBFdmVudCBoYW5kbGVycyAtIElucHV0cy9lZGl0cyBtYWRlIHRvIHByb2plY3RzIGFuZCB0YXNrc1xuXG5jb25zdCBpbnB1dEhhbmRsZXJQcm9qZWN0VGl0bGUgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHByb2plY3RUaXRsZXNOTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaW5wdXQtcHJvamVjdC10aXRsZVwiKTtcblxuICBpZiAoIXByb2plY3RUaXRsZXNOTCkgcmV0dXJuO1xuXG4gIHByb2plY3RUaXRsZXNOTC5mb3JFYWNoKCh0aXRsZSkgPT5cbiAgICB0aXRsZS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcbiAgICAgIGNvbnN0IHByb2plY3RJZCA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIucHJvamVjdC1jYXJkXCIpLmRhdGFzZXQucHJvamVjdElkO1xuICAgICAgYXV0b1NhdmVQcm9qZWN0VGl0bGVDaGFuZ2VzKHByb2plY3RJZCwgdGl0bGUpO1xuICAgIH0pXG4gICk7XG59O1xuXG4vLyBwcmV0dGllci1pZ25vcmVcbmNvbnN0IGNsaWNrSGFuZGxlckJ0blRhc2tTdGF0dXMgPSBmdW5jdGlvbiAodGFyZ2V0UHJvamVjdCkge1xuICBjb25zdCBidG5UYXNrUGVuZGluZ05MID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5idG4tdGFzay1zdGF0dXNcIik7XG4gIGJ0blRhc2tQZW5kaW5nTkwuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGJ1dHRvbi5ibHVyKCk7XG4gICAgICBjb25zdCB0YXNrQ2FyZCA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIudGFzay1jYXJkXCIpO1xuICAgICAgY29uc3QgdGFza0lkID0gdGFza0NhcmQuZGF0YXNldC50YXNrSWQ7XG4gICAgICBjb25zdCB0YXNrRGVzY3JpcHRpb25FbCA9IHRhc2tDYXJkLnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXQtdGFzay1kZXNjcmlwdGlvblwiKTtcbiAgICAgIHRvZ2dsZVRhc2tTdGF0dXModGFyZ2V0UHJvamVjdCwgdGFza0lkKTtcbiAgICAgIHRvZ2dsZVRhc2tFbGVtZW50cyhidXR0b24pO1xuICAgICAgYXV0b0FkanVzdEhlaWdodCh0YXNrRGVzY3JpcHRpb25FbCk7XG4gICAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCBpbnB1dEhhbmRsZXJUYXNrVGl0bGUgPSBmdW5jdGlvbiAodGFyZ2V0UHJvamVjdCkge1xuICBjb25zdCB0YXNrVGl0bGVzTkwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmlucHV0LXRhc2stdGl0bGVcIik7XG5cbiAgaWYgKCF0YXNrVGl0bGVzTkwpIHJldHVybjtcblxuICB0YXNrVGl0bGVzTkwuZm9yRWFjaCgodGl0bGUpID0+XG4gICAgdGl0bGUuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XG4gICAgICBjb25zdCB0YXNrSWQgPSBlLnRhcmdldC5jbG9zZXN0KFwiLnRhc2stY2FyZFwiKS5kYXRhc2V0LnRhc2tJZDtcbiAgICAgIGF1dG9TYXZlVGFza1RpdGxlQ2hhbmdlcyh0YXJnZXRQcm9qZWN0LCB0YXNrSWQsIHRpdGxlKTtcbiAgICB9KVxuICApO1xufTtcblxuLy8gcHJldHRpZXItaWdub3JlXG5jb25zdCBpbnB1dEhhbmRsZXJUYXNrRGVzY3JpcHRpb24gPSBmdW5jdGlvbiAodGFyZ2V0UHJvamVjdCkge1xuICBjb25zdCB0YXNrRGVzY3JpcHRpb25zTkwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmlucHV0LXRhc2stZGVzY3JpcHRpb25cIik7XG5cbiAgaWYgKCF0YXNrRGVzY3JpcHRpb25zTkwpIHJldHVybjtcblxuICB0YXNrRGVzY3JpcHRpb25zTkwuZm9yRWFjaCgodGFza0Rlc2NyaXB0aW9uRWwpID0+IHtcbiAgICBhdXRvQWRqdXN0SGVpZ2h0KHRhc2tEZXNjcmlwdGlvbkVsKTtcblxuICAgIHRhc2tEZXNjcmlwdGlvbkVsLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xuICAgICAgY29uc3QgdGFza0lkID0gZS50YXJnZXQuY2xvc2VzdChcIi50YXNrLWNhcmRcIikuZGF0YXNldC50YXNrSWQ7XG4gICAgICBhdXRvU2F2ZVRhc2tEZXNjcmlwdGlvbkNoYW5nZXModGFyZ2V0UHJvamVjdCwgdGFza0lkLCB0YXNrRGVzY3JpcHRpb25FbCk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3QgaW5wdXRIYW5kbGVyVGFza0R1ZURhdGUgPSBmdW5jdGlvbiAodGFyZ2V0UHJvamVjdCkge1xuICBjb25zdCB0YXNrRHVlRGF0ZU5MID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pbnB1dC10YXNrLWR1ZS1kYXRlXCIpO1xuXG4gIGlmICghdGFza0R1ZURhdGVOTCkgcmV0dXJuO1xuXG4gIHRhc2tEdWVEYXRlTkwuZm9yRWFjaCgodGFza0R1ZURhdGVFbCkgPT5cbiAgICB0YXNrRHVlRGF0ZUVsLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xuICAgICAgY29uc3QgdGFza0lkID0gZS50YXJnZXQuY2xvc2VzdChcIi50YXNrLWNhcmRcIikuZGF0YXNldC50YXNrSWQ7XG4gICAgICBhdXRvU2F2ZVRhc2tEdWVEYXRlQ2hhbmdlcyh0YXJnZXRQcm9qZWN0LCB0YXNrSWQsIHRhc2tEdWVEYXRlRWwpO1xuICAgICAgdXBkYXRlRGF5c1JlbWFpbmluZyh0YXJnZXRQcm9qZWN0LCB0YXNrSWQsIGUpO1xuICAgIH0pXG4gICk7XG59O1xuXG5jb25zdCBjbGlja0hhbmRsZXJCdG5UYXNrUHJpb3JpdHkgPSBmdW5jdGlvbiAodGFyZ2V0UHJvamVjdCkge1xuICBjb25zdCBidG5UYXNrUHJpb3JpdHlOTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYnRuLXRhc2stcHJpb3JpdHlcIik7XG4gIGJ0blRhc2tQcmlvcml0eU5MLmZvckVhY2goKGJ1dHRvbikgPT5cbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBjb25zdCB0YXNrSWQgPSBlLnRhcmdldC5jbG9zZXN0KFwiLnRhc2stY2FyZFwiKS5kYXRhc2V0LnRhc2tJZDtcbiAgICAgIHRvZ2dsZVRhc2tQcmlvcnR5KHRhcmdldFByb2plY3QsIHRhc2tJZCwgYnV0dG9uKTtcbiAgICB9KVxuICApO1xufTtcblxuLy8gSW5pdGlhbGl6ZSBhcHBcbmNvbnN0IGluaXRBcHAgPSBmdW5jdGlvbiAoKSB7XG4gIGxvYWRQcm9qZWN0c1ZpZXcoKTtcbiAgcmVuZGVyUHJvamVjdFZpZXdCdXR0b25zKCk7XG4gIGNsaWNrSGFuZGxlckJ0bk5ld0l0ZW0oKTtcbiAgbG9hZFRoZW1lKCk7XG4gIHRvZ2dsZVRoZW1lKCk7XG59O1xuXG5leHBvcnQgeyBwcm9qZWN0cywgaW5pdEFwcCB9O1xuIiwiZXhwb3J0IGNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihpZCwgdGl0bGUsIHRhc2tzKSB7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLnRhc2tzID0gdGFza3M7XG4gIH1cblxuICBhZGRUYXNrKHRhc2spIHtcbiAgICB0aGlzLnRhc2tzLnB1c2godGFzayk7XG4gIH1cblxuICBkZWxldGVUYXNrKHRhc2tJZCkge1xuICAgIGNvbnN0IHJlbWFpbmluZ1Rhc2tzID0gdGhpcy50YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2suaWQgIT09IHRhc2tJZCk7XG4gICAgdGhpcy50YXNrcyA9IHJlbWFpbmluZ1Rhc2tzO1xuICB9XG59XG4iLCJpbXBvcnQgeyBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcblxuZXhwb3J0IGNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3RvcihpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBzdGF0dXMsIHByaW9yaXR5LCBpbnB1dFN0YXR1cykge1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMuaW5wdXRTdGF0dXMgPSBpbnB1dFN0YXR1cztcbiAgfVxuXG4gIGdldERheXNSZW1haW5pbmcoKSB7XG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBEYXRlLnBhcnNlKHRoaXMuZHVlRGF0ZSk7XG5cbiAgICBpZiAoIXRoaXMuZHVlRGF0ZSkgcmV0dXJuIGBubyBkdWUgZGF0ZWA7XG5cbiAgICBjb25zdCBkYXlzUmVtYWluaW5nID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKGR1ZURhdGUsIHRvZGF5KTtcblxuICAgIGlmIChkYXlzUmVtYWluaW5nIDwgLTEpIHJldHVybiBgZHVlICR7LWRheXNSZW1haW5pbmd9IGRheXMgYWdvYDtcbiAgICBpZiAoZGF5c1JlbWFpbmluZyA9PT0gLTEpIHJldHVybiBgZHVlIDEgZGF5IGFnb2A7XG4gICAgaWYgKGRheXNSZW1haW5pbmcgPT09IDApIHJldHVybiBgZHVlIHRvZGF5YDtcbiAgICBpZiAoZGF5c1JlbWFpbmluZyA9PT0gMSkgcmV0dXJuIGBkdWUgaW4gMSBkYXlgO1xuICAgIGlmIChkYXlzUmVtYWluaW5nID4gMSkgcmV0dXJuIGBkdWUgaW4gJHtkYXlzUmVtYWluaW5nfSBkYXlzYDtcbiAgfVxufVxuIiwiaW1wb3J0IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMgZnJvbSBcIi4uL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZEYXkgZnJvbSBcIi4uL3N0YXJ0T2ZEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX0RBWSA9IDg2NDAwMDAwO1xuXG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5c1xuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciBkYXlzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgZGF5cyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy4gVGhpcyBtZWFucyB0aGF0IHRoZSB0aW1lcyBhcmUgcmVtb3ZlZFxuICogZnJvbSB0aGUgZGF0ZXMgYW5kIHRoZW4gdGhlIGRpZmZlcmVuY2UgaW4gZGF5cyBpcyBjYWxjdWxhdGVkLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBlYXJsaWVyIGRhdGVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgZGF5c1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBjYWxlbmRhciBkYXlzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxMSAyMzowMDowMCBhbmQgMiBKdWx5IDIwMTIgMDA6MDA6MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoXG4gKiAgIG5ldyBEYXRlKDIwMTIsIDYsIDIsIDAsIDApLFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAyLCAyMywgMClcbiAqIClcbiAqIC8vPT4gMzY2XG4gKiAvLyBIb3cgbWFueSBjYWxlbmRhciBkYXlzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxMSAyMzo1OTowMCBhbmQgMyBKdWx5IDIwMTEgMDA6MDE6MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDMsIDAsIDEpLFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAyLCAyMywgNTkpXG4gKiApXG4gKiAvLz0+IDFcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgc3RhcnRPZkRheUxlZnQgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgc3RhcnRPZkRheVJpZ2h0ID0gc3RhcnRPZkRheShkaXJ0eURhdGVSaWdodCk7XG4gIHZhciB0aW1lc3RhbXBMZWZ0ID0gc3RhcnRPZkRheUxlZnQuZ2V0VGltZSgpIC0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhzdGFydE9mRGF5TGVmdCk7XG4gIHZhciB0aW1lc3RhbXBSaWdodCA9IHN0YXJ0T2ZEYXlSaWdodC5nZXRUaW1lKCkgLSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKHN0YXJ0T2ZEYXlSaWdodCk7XG5cbiAgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXJcbiAgLy8gYmVjYXVzZSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpbiBhIGRheSBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIGRheSBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG4gIHJldHVybiBNYXRoLnJvdW5kKCh0aW1lc3RhbXBMZWZ0IC0gdGltZXN0YW1wUmlnaHQpIC8gTUlMTElTRUNPTkRTX0lOX0RBWSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIGRheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZEYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7XG5cbiAgLy8gQ2xvbmUgdGhlIGRhdGVcbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKGFyZ3VtZW50KSA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdHlwZW9mKG8pIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHtcbiAgICByZXR1cm4gdHlwZW9mIG87XG4gIH0gOiBmdW5jdGlvbiAobykge1xuICAgIHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvO1xuICB9LCBfdHlwZW9mKG8pO1xufSIsIi8qKlxuICogR29vZ2xlIENocm9tZSBhcyBvZiA2Ny4wLjMzOTYuODcgaW50cm9kdWNlZCB0aW1lem9uZXMgd2l0aCBvZmZzZXQgdGhhdCBpbmNsdWRlcyBzZWNvbmRzLlxuICogVGhleSB1c3VhbGx5IGFwcGVhciBmb3IgZGF0ZXMgdGhhdCBkZW5vdGUgdGltZSBiZWZvcmUgdGhlIHRpbWV6b25lcyB3ZXJlIGludHJvZHVjZWRcbiAqIChlLmcuIGZvciAnRXVyb3BlL1ByYWd1ZScgdGltZXpvbmUgdGhlIG9mZnNldCBpcyBHTVQrMDA6NTc6NDQgYmVmb3JlIDEgT2N0b2JlciAxODkxXG4gKiBhbmQgR01UKzAxOjAwOjAwIGFmdGVyIHRoYXQgZGF0ZSlcbiAqXG4gKiBEYXRlI2dldFRpbWV6b25lT2Zmc2V0IHJldHVybnMgdGhlIG9mZnNldCBpbiBtaW51dGVzIGFuZCB3b3VsZCByZXR1cm4gNTcgZm9yIHRoZSBleGFtcGxlIGFib3ZlLFxuICogd2hpY2ggd291bGQgbGVhZCB0byBpbmNvcnJlY3QgY2FsY3VsYXRpb25zLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgdGltZXpvbmUgb2Zmc2V0IGluIG1pbGxpc2Vjb25kcyB0aGF0IHRha2VzIHNlY29uZHMgaW4gYWNjb3VudC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlKSB7XG4gIHZhciB1dGNEYXRlID0gbmV3IERhdGUoRGF0ZS5VVEMoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RGF0ZSgpLCBkYXRlLmdldEhvdXJzKCksIGRhdGUuZ2V0TWludXRlcygpLCBkYXRlLmdldFNlY29uZHMoKSwgZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSkpO1xuICB1dGNEYXRlLnNldFVUQ0Z1bGxZZWFyKGRhdGUuZ2V0RnVsbFllYXIoKSk7XG4gIHJldHVybiBkYXRlLmdldFRpbWUoKSAtIHV0Y0RhdGUuZ2V0VGltZSgpO1xufSIsImltcG9ydCB7IGVsIH0gZnJvbSBcImRhdGUtZm5zL2xvY2FsZVwiO1xuXG5jb25zdCBoMUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgxXCIpO1xuY29uc3QgYnJlYWRjcnVtYk5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYnJlYWRjcnVtYi1uYXZcIik7XG5jb25zdCBzb3J0QnV0dG9uc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc29ydC1idXR0b25zLWNvbnRhaW5lclwiKTtcbmNvbnN0IGl0ZW1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLml0ZW0tY29udGFpbmVyXCIpO1xuY29uc3QgbG93ZXJCdXR0b25zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb3dlci1idXR0b25zLWNvbnRhaW5lclwiKTsgLy8gcHJldHRpZXItaWdub3JlXG5cbmNvbnN0IHNldFRoZW1lID0gZnVuY3Rpb24gKHRoZW1lKSB7XG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc05hbWUgPSB0aGVtZTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJvZGluLXRvZG8tbGlzdC10aGVtZVwiLCB0aGVtZSk7XG59O1xuXG5jb25zdCBsb2FkVGhlbWUgPSBmdW5jdGlvbiAoKSB7XG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRoZW1lXCIpICE9PSBudWxsKSB7XG4gICAgc2V0VGhlbWUobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJvZGluLXRvZG8tbGlzdC10aGVtZVwiKSk7XG4gIH0gZWxzZSB7XG4gICAgc2V0VGhlbWUoXCJ0aGVtZS0xXCIpO1xuICB9XG59O1xuXG5jb25zdCB0b2dnbGVUaGVtZSA9IGZ1bmN0aW9uICgpIHtcbiAgaDFFbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc05hbWUgPT09IFwidGhlbWUtMVwiXG4gICAgICA/IHNldFRoZW1lKFwidGhlbWUtMlwiKVxuICAgICAgOiBzZXRUaGVtZShcInRoZW1lLTFcIik7XG4gIH0pO1xufTtcblxuY29uc3QgcmVuZGVyQnJlYWRjcnVtYk5hdiA9IGZ1bmN0aW9uICh2aWV3LCBjdXJyZW50UHJvamVjdCkge1xuICBpZiAodmlldyA9PT0gXCJwcm9qZWN0c1wiKSB7XG4gICAgYnJlYWRjcnVtYk5hdi5mb3JFYWNoKChlbGVtZW50KSA9PiAoZWxlbWVudC5pbm5lckhUTUwgPSBgYCkpO1xuICAgIGJyZWFkY3J1bWJOYXYuZm9yRWFjaChcbiAgICAgIChlbGVtZW50KSA9PlxuICAgICAgICAoZWxlbWVudC5pbm5lckhUTUwgPSBgXG4gIDxzcGFuIGNsYXNzPVwiYWxsLXByb2plY3RzXCI+QWxsIFByb2plY3RzPC9zcGFuPlxuICA8c3BhbiBjbGFzcz1cInNlcGFyYXRvclwiPj48L3NwYW4+XG4gIGApXG4gICAgKTtcbiAgfVxuXG4gIGlmICh2aWV3ID09PSBcInRhc2tzXCIpIHtcbiAgICBicmVhZGNydW1iTmF2LmZvckVhY2goKGVsZW1lbnQpID0+IChlbGVtZW50LmlubmVySFRNTCA9IGBgKSk7XG4gICAgYnJlYWRjcnVtYk5hdi5mb3JFYWNoKFxuICAgICAgKGVsZW1lbnQpID0+XG4gICAgICAgIChlbGVtZW50LmlubmVySFRNTCA9IGBcbiAgPGJ1dHRvbiBjbGFzcz1cImJ0bi12aWV3LWFsbC1wcm9qZWN0c1wiPkFsbCBQcm9qZWN0czwvYnV0dG9uPlxuICA8c3BhbiBjbGFzcz1cInNlcGFyYXRvclwiPj48L3NwYW4+XG4gIDxzcGFuIGNsYXNzPVwiY3VycmVudC1wcm9qZWN0XCI+JHtjdXJyZW50UHJvamVjdC50aXRsZX08L3NwYW4+XG4gIGApXG4gICAgKTtcbiAgfVxufTtcblxuY29uc3QgcmVuZGVyUHJvamVjdFZpZXdCdXR0b25zID0gZnVuY3Rpb24gKCkge1xuICBsb3dlckJ1dHRvbnNDb250YWluZXIuaW5uZXJIVE1MID0gYFxuICA8YnV0dG9uIGNsYXNzPVwiYnRuLW5ldy1pdGVtXCI+KzwvYnV0dG9uPlxuICBgO1xufTtcblxuY29uc3QgY2xlYXJQcm9qZWN0Vmlld0J1dHRvbnMgPSBmdW5jdGlvbiAoKSB7XG4gIHNvcnRCdXR0b25zQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gIGxvd2VyQnV0dG9uc0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xufTtcblxuY29uc3QgcmVuZGVyVGFza1ZpZXdCdXR0b25zID0gZnVuY3Rpb24gKCkge1xuICBzb3J0QnV0dG9uc0NvbnRhaW5lci5pbm5lckhUTUwgPSBgXG4gIDxidXR0b24gY2xhc3M9XCJidG4tc29ydC1kdWUtZGF0ZVwiPkR1ZSBEYXRlPC9idXR0b24+XG4gIDxidXR0b24gY2xhc3M9XCJidG4tc29ydC1wcmlvcml0eVwiPlByaW9yaXR5PC9idXR0b24+XG4gIGA7XG5cbiAgbG93ZXJCdXR0b25zQ29udGFpbmVyLmlubmVySFRNTCA9IGBcbiAgPGJ1dHRvbiBjbGFzcz1cImJ0bi1iYWNrLXRvLWFsbC1wcm9qZWN0c1wiPiZsdDwvYnV0dG9uPlxuICA8YnV0dG9uIGNsYXNzPVwiYnRuLW5ldy1pdGVtXCI+KzwvYnV0dG9uPlxuICBgO1xufTtcblxuY29uc3QgY2xlYXJUYXNrVmlld0J1dHRvbnMgPSBmdW5jdGlvbiAoKSB7XG4gIHNvcnRCdXR0b25zQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gIGxvd2VyQnV0dG9uc0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xufTtcblxuY29uc3QgY2xlYXJJdGVtQ29udGFpbmVyID0gZnVuY3Rpb24gKCkge1xuICBpdGVtQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG59O1xuXG5jb25zdCByZW5kZXJQcm9qZWN0Q2FyZCA9IGZ1bmN0aW9uIChwcm9qZWN0KSB7XG4gIGNvbnN0IHJlbmRlclByb2plY3REZXRhaWxzID0gZnVuY3Rpb24gKHByb2plY3QpIHtcbiAgICBsZXQgdGFza0NvdW50ID0gMDtcbiAgICBwcm9qZWN0LnRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIGlmICh0YXNrLnN0YXR1cyA9PT0gXCJwZW5kaW5nXCIpIHRhc2tDb3VudCArPSAxO1xuICAgIH0pO1xuICAgIHJldHVybiBgJHt0YXNrQ291bnR9IHBlbmRpbmcgdGFzayR7dGFza0NvdW50ID4gMSA/IFwic1wiIDogXCJcIn1gO1xuICB9O1xuXG4gIGNvbnN0IHByb2plY3RDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJvamVjdENhcmQuY2xhc3NOYW1lID0gXCJwcm9qZWN0LWNhcmRcIjtcbiAgcHJvamVjdENhcmQuZGF0YXNldC5wcm9qZWN0SWQgPSBwcm9qZWN0LmlkO1xuICBwcm9qZWN0Q2FyZC5pbm5lckhUTUwgPSBgXG4gIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWhlYWRlclwiPlxuICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWhlYWRlci1sZWZ0XCI+XG4gICAgICA8aW5wdXQgY2xhc3M9XCJpbnB1dC1wcm9qZWN0LXRpdGxlXCIgdmFsdWU9XCIke1xuICAgICAgICBwcm9qZWN0LnRpdGxlXG4gICAgICB9XCIgbWF4bGVuZ3RoPVwiMjhcIi8+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInByb2plY3QtaGVhZGVyLXJpZ2h0XCI+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuLXByb2plY3QtbW92ZS1kb3duXCI+4ZCvPC9idXR0b24+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuLXByb2plY3QtbW92ZS11cFwiPuGQsTwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bi1wcm9qZWN0LWRlbGV0ZVwiPlg8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWRldGFpbHNcIj5cbiAgICA8ZGl2PlxuICAgICAgJHtyZW5kZXJQcm9qZWN0RGV0YWlscyhwcm9qZWN0KX1cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIGA7XG5cbiAgcmV0dXJuIHByb2plY3RDYXJkO1xufTtcblxuLy8gcHJldHRpZXItaWdub3JlXG5jb25zdCByZW5kZXJUYXNrQ2FyZCA9IGZ1bmN0aW9uICh0YXNrKSB7XG4gIGNvbnN0IHRhc2tDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGFza0NhcmQuY2xhc3NOYW1lID0gXCJ0YXNrLWNhcmRcIjtcbiAgdGFza0NhcmQuZGF0YXNldC50YXNrSWQgPSB0YXNrLmlkO1xuICB0YXNrQ2FyZC5jbGFzc0xpc3QuYWRkKGAke3Rhc2suc3RhdHVzfWApO1xuICB0YXNrQ2FyZC5jbGFzc0xpc3QuYWRkKGAke3Rhc2sucHJpb3JpdHl9YCk7XG4gIHRhc2tDYXJkLmlubmVySFRNTCA9IGBcbiAgICA8ZGl2IGNsYXNzPVwidGFzay1oZWFkZXIgJHt0YXNrLnN0YXR1c31cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWhlYWRlci1sZWZ0XCI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4tdGFzay1zdGF0dXMgJHt0YXNrLnN0YXR1c31cIj48L2J1dHRvbj5cbiAgICAgICAgPGlucHV0IGNsYXNzPVwiaW5wdXQtdGFzay10aXRsZSAke3Rhc2suc3RhdHVzfVwiIHZhbHVlPVwiJHt0YXNrLnRpdGxlfVwiICR7dGFzay5pbnB1dFN0YXR1c30vPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwidGFzay1oZWFkZXItcmlnaHRcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bi10YXNrLWRlbGV0ZVwiPlg8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWRldGFpbHMgJHt0YXNrLnN0YXR1c31cIj5cbiAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cImlucHV0LXRhc2stZGVzY3JpcHRpb24gJHt0YXNrLnN0YXR1c31cIiBuYW1lPVwidGFzay1kZXNjcmlwdGlvblwiICR7dGFzay5pbnB1dFN0YXR1c30+JHt0YXNrLmRlc2NyaXB0aW9ufTwvdGV4dGFyZWE+XG4gICAgICA8ZGl2IGNsYXNzPVwidGFzay1ib3R0b20tcm93XCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGNsYXNzPVwiaW5wdXQtdGFzay1kdWUtZGF0ZVwiIHZhbHVlPVwiJHt0YXNrLmR1ZURhdGV9XCIgJHt0YXNrLmlucHV0U3RhdHVzfS8+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWRheXMtcmVtYWluaW5nXCI+JHt0YXNrLmdldERheXNSZW1haW5pbmcoKX08L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bi10YXNrLXByaW9yaXR5XCIgJHt0YXNrLmlucHV0U3RhdHVzfT5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInByaW9yaXR5LWxhYmVsXCI+JHt0YXNrLnByaW9yaXR5fTwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInByaW9yaXR5LWluZGljYXRvciAke3Rhc2sucHJpb3JpdHl9XCI+PC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgO1xuXG4gIHJldHVybiB0YXNrQ2FyZDtcbn07XG5cbmNvbnN0IHJlbmRlckFsbFByb2plY3RzID0gZnVuY3Rpb24gKHByb2plY3RzKSB7XG4gIGZvciAobGV0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhwcm9qZWN0cykpIHtcbiAgICBpdGVtQ29udGFpbmVyLnByZXBlbmQocmVuZGVyUHJvamVjdENhcmQodmFsdWUpKTtcbiAgfVxufTtcblxuY29uc3Qgc29ydFRhc2tzQnlEdWVEYXRlID0gZnVuY3Rpb24gKHRhcmdldFByb2plY3RUYXNrcykge1xuICBjb25zdCB0YXNrcyA9IFsuLi50YXJnZXRQcm9qZWN0VGFza3NdO1xuICBsZXQgaXNTb3J0ZWQgPSBmYWxzZTtcbiAgd2hpbGUgKCFpc1NvcnRlZCkge1xuICAgIGlzU29ydGVkID0gdHJ1ZTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgY29uc3QgZGF0ZTEgPSBuZXcgRGF0ZSh0YXNrc1tpXS5kdWVEYXRlKTtcbiAgICAgIGNvbnN0IGRhdGUyID0gbmV3IERhdGUodGFza3NbaSArIDFdLmR1ZURhdGUpO1xuICAgICAgaWYgKGRhdGUxID4gZGF0ZTIpIHtcbiAgICAgICAgbGV0IHRlbXAgPSB0YXNrc1tpICsgMV07XG4gICAgICAgIHRhc2tzW2kgKyAxXSA9IHRhc2tzW2ldO1xuICAgICAgICB0YXNrc1tpXSA9IHRlbXA7XG4gICAgICAgIGlzU29ydGVkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiB0YXNrcztcbn07XG5cbi8vIHByZXR0aWVyLWlnbm9yZVxuY29uc3Qgc29ydFRhc2tzQnlQcmlvcml0eSA9IGZ1bmN0aW9uICh0YXJnZXRQcm9qZWN0VGFza3MpIHtcbiAgY29uc3QgdGFza3NIaWdoUHJpb3JpdHkgPSB0YXJnZXRQcm9qZWN0VGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLnByaW9yaXR5ID09PSBcImhpZ2hcIik7XG4gIGNvbnN0IHRhc2tzTWVkaXVtUHJpb3JpdHkgPSB0YXJnZXRQcm9qZWN0VGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLnByaW9yaXR5ID09PSBcIm1lZGl1bVwiKTtcbiAgY29uc3QgdGFza3NMb3dQcmlvcml0eSA9IHRhcmdldFByb2plY3RUYXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2sucHJpb3JpdHkgPT09IFwibG93XCIpO1xuXG4gIGNvbnN0IHRhc2tzID0gWy4uLnRhc2tzSGlnaFByaW9yaXR5LCAuLi50YXNrc01lZGl1bVByaW9yaXR5LCAuLi50YXNrc0xvd1ByaW9yaXR5XTtcbiAgcmV0dXJuIHRhc2tzO1xufTtcblxuLy8gcHJldHRpZXItaWdub3JlXG5jb25zdCByZW5kZXJUYXNrcyA9IGZ1bmN0aW9uICh0YXJnZXRQcm9qZWN0VGFza3MsIHNvcnRDcml0ZXJpYSkge1xuICBpZiAoc29ydENyaXRlcmlhID09PSBcImR1ZURhdGVcIikge1xuICAgIGNvbnN0IHRhc2tzQnlQcmlvcml0eSA9IHNvcnRUYXNrc0J5UHJpb3JpdHkodGFyZ2V0UHJvamVjdFRhc2tzKTtcbiAgICBjb25zdCB0YXNrc0J5RHVlRGF0ZSA9IHNvcnRUYXNrc0J5RHVlRGF0ZSh0YXNrc0J5UHJpb3JpdHkpO1xuICAgIHRhc2tzQnlEdWVEYXRlLmZvckVhY2goKHRhc2spID0+IGl0ZW1Db250YWluZXIuYXBwZW5kKHJlbmRlclRhc2tDYXJkKHRhc2spKSk7XG4gIH0gZWxzZSBpZiAoc29ydENyaXRlcmlhID09PSBcInByaW9yaXR5XCIpIHtcbiAgICBjb25zdCB0YXNrc0J5RHVlRGF0ZSA9IHNvcnRUYXNrc0J5RHVlRGF0ZSh0YXJnZXRQcm9qZWN0VGFza3MpO1xuICAgIGNvbnN0IHRhc2tzQnlQcmlvcml0eSA9IHNvcnRUYXNrc0J5UHJpb3JpdHkodGFza3NCeUR1ZURhdGUpO1xuICAgIHRhc2tzQnlQcmlvcml0eS5mb3JFYWNoKCh0YXNrKSA9PiBpdGVtQ29udGFpbmVyLmFwcGVuZChyZW5kZXJUYXNrQ2FyZCh0YXNrKSkpO1xuICB9IGVsc2Uge1xuICAgIGZvciAobGV0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyh0YXJnZXRQcm9qZWN0VGFza3MpKSB7XG4gICAgICBpdGVtQ29udGFpbmVyLnByZXBlbmQocmVuZGVyVGFza0NhcmQodmFsdWUpKTtcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IHNob3dUYXNrVmlld0J1dHRvbnMgPSBmdW5jdGlvbiAodGFyZ2V0UHJvamVjdCkge1xuICBpZiAodGFyZ2V0UHJvamVjdC50YXNrcy5sZW5ndGggPCAyKSB7XG4gICAgY29uc3QgYnRuU29ydEJ5RHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLXNvcnQtZHVlLWRhdGVcIik7XG4gICAgY29uc3QgYnRuU29ydEJ5UHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1zb3J0LXByaW9yaXR5XCIpO1xuXG4gICAgaWYgKGJ0blNvcnRCeUR1ZURhdGUpIGJ0blNvcnRCeUR1ZURhdGUuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICBpZiAoYnRuU29ydEJ5UHJpb3JpdHkpIGJ0blNvcnRCeVByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gIH1cbn07XG5cbmNvbnN0IHNob3dTb3J0aW5nTW9kZSA9IGZ1bmN0aW9uIChzb3J0Q3JpdGVyaWEpIHtcbiAgY29uc3QgYnRuU29ydEJ5RHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLXNvcnQtZHVlLWRhdGVcIik7XG4gIGNvbnN0IGJ0blNvcnRCeVByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG4tc29ydC1wcmlvcml0eVwiKTtcbiAgc3dpdGNoIChzb3J0Q3JpdGVyaWEpIHtcbiAgICBjYXNlIFwiZHVlRGF0ZVwiOlxuICAgICAgYnRuU29ydEJ5RHVlRGF0ZS5jbGFzc0xpc3QuYWRkKFwiaGlnaGxpZ2h0XCIpO1xuICAgICAgYnRuU29ydEJ5UHJpb3JpdHkuY2xhc3NMaXN0LnJlbW92ZShcImhpZ2hsaWdodFwiKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJwcmlvcml0eVwiOlxuICAgICAgYnRuU29ydEJ5RHVlRGF0ZS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlnaGxpZ2h0XCIpO1xuICAgICAgYnRuU29ydEJ5UHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcImhpZ2hsaWdodFwiKTtcbiAgICAgIGJyZWFrO1xuICB9XG59O1xuXG5jb25zdCBzaG93VG9wT2ZQYWdlID0gZnVuY3Rpb24gKCkge1xuICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG59O1xuXG5jb25zdCBhdXRvQWRqdXN0SGVpZ2h0ID0gZnVuY3Rpb24gKHRhc2tEZXNjcmlwdGlvbkVsKSB7XG4gIC8vIEFkanVzdCBoZWlnaHQgdXBvbiByZW5kZXJpbmcgb3IgZXhwYW5zaW9uIG9mIHRoZSB0YXNrIGNhcmRcbiAgdGFza0Rlc2NyaXB0aW9uRWwuc3R5bGUuaGVpZ2h0ID0gXCJcIjtcbiAgdGFza0Rlc2NyaXB0aW9uRWwuc3R5bGUuaGVpZ2h0ID0gdGFza0Rlc2NyaXB0aW9uRWwuc2Nyb2xsSGVpZ2h0ICsgXCJweFwiO1xuXG4gIC8vIEFkanVzdCBoZWlnaHQgdG8gYWNjb21vZGF0ZSBhZGRpdGlvbmFsIGxpbmVzIG9mIHRleHQgYXMgcmVxdWlyZWRcbiAgdGFza0Rlc2NyaXB0aW9uRWwuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcbiAgICB0YXNrRGVzY3JpcHRpb25FbC5zdHlsZS5oZWlnaHQgPSBcIlwiO1xuICAgIHRhc2tEZXNjcmlwdGlvbkVsLnN0eWxlLmhlaWdodCA9IHRhc2tEZXNjcmlwdGlvbkVsLnNjcm9sbEhlaWdodCArIFwicHhcIjtcbiAgfSk7XG59O1xuXG5jb25zdCB0b2dnbGVUYXNrRGV0YWlscyA9IGZ1bmN0aW9uICh0YXNrQ2FyZCkge1xuICBjb25zdCB0YXNrRGV0YWlsc0VsID0gdGFza0NhcmQucXVlcnlTZWxlY3RvcihcIi50YXNrLWRldGFpbHNcIik7XG4gIHRhc2tEZXRhaWxzRWwuY2xhc3NMaXN0LnRvZ2dsZShcInZpc2libGVcIik7XG59O1xuXG5jb25zdCB0b2dnbGVUYXNrRWxlbWVudHMgPSBmdW5jdGlvbiAoYnV0dG9uKSB7XG4gIGJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwiY29tcGxldGVkXCIpO1xuICBidXR0b24uY2xhc3NMaXN0LnRvZ2dsZShcInBlbmRpbmdcIik7XG5cbiAgY29uc3QgdGFza0NhcmRFbCA9IGJ1dHRvbi5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgY29uc3QgdGFza0hlYWRlckVsID0gdGFza0NhcmRFbC5xdWVyeVNlbGVjdG9yKFwiLnRhc2staGVhZGVyXCIpO1xuICBjb25zdCB0YXNrVGl0bGVJbnB1dEVsID0gdGFza0NhcmRFbC5xdWVyeVNlbGVjdG9yKFwiLmlucHV0LXRhc2stdGl0bGVcIik7XG4gIGNvbnN0IHRhc2tEZXRhaWxzRWwgPSB0YXNrQ2FyZEVsLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1kZXRhaWxzXCIpO1xuICBjb25zdCB0YXNrRGVzY3JpcHRpb25FbCA9IHRhc2tDYXJkRWwucXVlcnlTZWxlY3RvcihcIi5pbnB1dC10YXNrLWRlc2NyaXB0aW9uXCIpO1xuICBjb25zdCB0YXNrRHVlRGF0ZUVsID0gdGFza0NhcmRFbC5xdWVyeVNlbGVjdG9yKFwiLmlucHV0LXRhc2stZHVlLWRhdGVcIik7XG4gIGNvbnN0IHRhc2tQcmlvcml0eUVsID0gdGFza0NhcmRFbC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi10YXNrLXByaW9yaXR5XCIpO1xuXG4gIHRhc2tDYXJkRWwuY2xhc3NMaXN0LnRvZ2dsZShcImNvbXBsZXRlZFwiKTtcbiAgdGFza0NhcmRFbC5jbGFzc0xpc3QudG9nZ2xlKFwicGVuZGluZ1wiKTtcbiAgdGFza0hlYWRlckVsLmNsYXNzTGlzdC50b2dnbGUoXCJjb21wbGV0ZWRcIik7XG4gIHRhc2tIZWFkZXJFbC5jbGFzc0xpc3QudG9nZ2xlKFwicGVuZGluZ1wiKTtcbiAgdGFza1RpdGxlSW5wdXRFbC5jbGFzc0xpc3QudG9nZ2xlKFwiY29tcGxldGVkXCIpO1xuICB0YXNrVGl0bGVJbnB1dEVsLmNsYXNzTGlzdC50b2dnbGUoXCJwZW5kaW5nXCIpO1xuICB0YXNrRGV0YWlsc0VsLmNsYXNzTGlzdC50b2dnbGUoXCJjb21wbGV0ZWRcIik7XG4gIHRhc2tEZXRhaWxzRWwuY2xhc3NMaXN0LnRvZ2dsZShcInBlbmRpbmdcIik7XG4gIHRhc2tEZXNjcmlwdGlvbkVsLmNsYXNzTGlzdC50b2dnbGUoXCJjb21wbGV0ZWRcIik7XG4gIHRhc2tEZXNjcmlwdGlvbkVsLmNsYXNzTGlzdC50b2dnbGUoXCJwZW5kaW5nXCIpO1xuXG4gIHRhc2tEZXRhaWxzRWwuY2xhc3NMaXN0LnJlbW92ZShcInZpc2libGVcIik7XG5cbiAgdGFza1RpdGxlSW5wdXRFbC5kaXNhYmxlZCA9ICF0YXNrVGl0bGVJbnB1dEVsLmRpc2FibGVkO1xuICB0YXNrRGVzY3JpcHRpb25FbC5kaXNhYmxlZCA9ICF0YXNrRGVzY3JpcHRpb25FbC5kaXNhYmxlZDtcbiAgdGFza0R1ZURhdGVFbC5kaXNhYmxlZCA9ICF0YXNrRHVlRGF0ZUVsLmRpc2FibGVkO1xuICB0YXNrUHJpb3JpdHlFbC5kaXNhYmxlZCA9ICF0YXNrUHJpb3JpdHlFbC5kaXNhYmxlZDtcbn07XG5cbi8vIHByZXR0aWVyLWlnbm9yZVxuY29uc3QgY2xpY2tIYW5kbGVyQ29tcGxldGVkVGFza0NhcmQgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGNvbXBsZXRlZFRhc2tDYXJkTkwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2stY2FyZFwiKTtcbiAgY29tcGxldGVkVGFza0NhcmROTC5mb3JFYWNoKCh0YXNrQ2FyZCkgPT4ge1xuICAgIHRhc2tDYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBpZiAodGFza0NhcmQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY29tcGxldGVkXCIpKSB7XG4gICAgICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbkVsID0gdGFza0NhcmQucXVlcnlTZWxlY3RvcihcIi5pbnB1dC10YXNrLWRlc2NyaXB0aW9uXCIpO1xuICAgICAgICB0YXNrRGVzY3JpcHRpb25FbC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICBhdXRvQWRqdXN0SGVpZ2h0KHRhc2tEZXNjcmlwdGlvbkVsKTtcbiAgICAgICAgdGFza0Rlc2NyaXB0aW9uRWwuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgdG9nZ2xlVGFza0RldGFpbHModGFza0NhcmQpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7XG4gIGxvYWRUaGVtZSxcbiAgdG9nZ2xlVGhlbWUsXG4gIHJlbmRlclByb2plY3RWaWV3QnV0dG9ucyxcbiAgY2xlYXJQcm9qZWN0Vmlld0J1dHRvbnMsXG4gIHJlbmRlclRhc2tWaWV3QnV0dG9ucyxcbiAgY2xlYXJUYXNrVmlld0J1dHRvbnMsXG4gIHJlbmRlckJyZWFkY3J1bWJOYXYsXG4gIGNsZWFySXRlbUNvbnRhaW5lcixcbiAgcmVuZGVyQWxsUHJvamVjdHMsXG4gIHJlbmRlclRhc2tzLFxuICBzaG93VGFza1ZpZXdCdXR0b25zLFxuICBzaG93U29ydGluZ01vZGUsXG4gIHNob3dUb3BPZlBhZ2UsXG4gIGF1dG9BZGp1c3RIZWlnaHQsXG4gIHRvZ2dsZVRhc2tFbGVtZW50cyxcbiAgY2xpY2tIYW5kbGVyQ29tcGxldGVkVGFza0NhcmQsXG59O1xuIiwiaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi9jb250cm9sbGVyXCI7XG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IHsgVGFzayB9IGZyb20gXCIuL3Rhc2tcIjtcbmltcG9ydCB7IGRlbW9Qcm9qZWN0cyB9IGZyb20gXCIuL2RlbW9EYXRhXCI7XG5cbmV4cG9ydCBjb25zdCBzYXZlVG9Mb2NhbFN0b3JhZ2UgPSBmdW5jdGlvbiAoKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2FkRnJvbUxvY2FsU3RvcmFnZSA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3Qgc3RvcmVkUHJvamVjdHNKU09OID1cbiAgICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpIHx8IGRlbW9Qcm9qZWN0cztcblxuICBjb25zdCBwcm9qZWN0c1dpdGhGdW5jdGlvbnMgPSB7fTtcblxuICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhzdG9yZWRQcm9qZWN0c0pTT04pKSB7XG4gICAgbGV0IHRhc2tzV2l0aEZ1bmN0aW9ucyA9IFtdO1xuICAgIHZhbHVlLnRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIGNvbnN0IHRhc2tXaXRoRnVuY3Rpb25zID0gbmV3IFRhc2soXG4gICAgICAgIHRhc2suaWQsXG4gICAgICAgIHRhc2sudGl0bGUsXG4gICAgICAgIHRhc2suZGVzY3JpcHRpb24sXG4gICAgICAgIHRhc2suZHVlRGF0ZSxcbiAgICAgICAgdGFzay5zdGF0dXMsXG4gICAgICAgIHRhc2sucHJpb3JpdHksXG4gICAgICAgIHRhc2suaW5wdXRTdGF0dXNcbiAgICAgICk7XG4gICAgICB0YXNrc1dpdGhGdW5jdGlvbnMucHVzaCh0YXNrV2l0aEZ1bmN0aW9ucyk7XG4gICAgfSk7XG5cbiAgICBwcm9qZWN0c1dpdGhGdW5jdGlvbnNba2V5XSA9IG5ldyBQcm9qZWN0KFxuICAgICAgdmFsdWUuaWQsXG4gICAgICB2YWx1ZS50aXRsZSxcbiAgICAgIHRhc2tzV2l0aEZ1bmN0aW9uc1xuICAgICk7XG4gIH1cblxuICByZXR1cm4gcHJvamVjdHNXaXRoRnVuY3Rpb25zO1xufTtcbiIsImV4cG9ydCBsZXQgZGVtb1Byb2plY3RzID0ge1xuICBQMTY5NjgxMDUyNzYwMToge1xuICAgIGlkOiBcIlAxNjk2ODEwNTI3NjAxXCIsXG4gICAgdGl0bGU6IFwiSG9tZVwiLFxuICAgIHRhc2tzOiBbXG4gICAgICB7XG4gICAgICAgIGlkOiBcIlQxNjk3NzEwNjk0NDU4XCIsXG4gICAgICAgIHRpdGxlOiBcIlBsYXkgdmlkZW8gZ2FtZXNcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiWmVsZGEgVE9US1xcbkxpdHRsZSBOaWdodG1hcmVzIElJXCIsXG4gICAgICAgIGR1ZURhdGU6IFwiMjAyMy0xMC0yMFwiLFxuICAgICAgICBzdGF0dXM6IFwicGVuZGluZ1wiLFxuICAgICAgICBwcmlvcml0eTogXCJtZWRpdW1cIixcbiAgICAgICAgaW5wdXRTdGF0dXM6IFwiZW5hYmxlZFwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IFwiVDE2OTgzMDA3Mzc5NzhcIixcbiAgICAgICAgdGl0bGU6IFwiQ2xlYW4gdGhlIGhvdXNlXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgIFwiV2lwZSBkdXN0IGZyb20gc3VyZmFjZXNcXG5WYWN1dW0gYW5kIG1vcCBmbG9vcnNcXG5DbGVhbiBraXRjaGVuIGFuZCBiYXRocm9vbXNcXG5FbXB0eSBiaW5zXCIsXG4gICAgICAgIGR1ZURhdGU6IFwiMjAyMy0xMC0zMFwiLFxuICAgICAgICBzdGF0dXM6IFwicGVuZGluZ1wiLFxuICAgICAgICBwcmlvcml0eTogXCJtZWRpdW1cIixcbiAgICAgICAgaW5wdXRTdGF0dXM6IFwiZW5hYmxlZFwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IFwiVDE2OTgzNzExODcyNDFcIixcbiAgICAgICAgdGl0bGU6IFwiRml4IGtpdGNoZW4gbGlnaHRzXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxuICAgICAgICBkdWVEYXRlOiBcIlwiLFxuICAgICAgICBzdGF0dXM6IFwicGVuZGluZ1wiLFxuICAgICAgICBwcmlvcml0eTogXCJtZWRpdW1cIixcbiAgICAgICAgaW5wdXRTdGF0dXM6IFwiZW5hYmxlZFwiLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICBQMTY5NjgxMDUyNzYwMjoge1xuICAgIGlkOiBcIlAxNjk2ODEwNTI3NjAyXCIsXG4gICAgdGl0bGU6IFwiU3R1ZHlcIixcbiAgICB0YXNrczogW1xuICAgICAge1xuICAgICAgICBpZDogXCJUMTY5NzcxMTQxNTU2NVwiLFxuICAgICAgICB0aXRsZTogXCJGaW5pc2ggVG9kbyBMaXN0IHByb2plY3RcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgICAgIGR1ZURhdGU6IFwiMjAyMy0xMC0yNlwiLFxuICAgICAgICBzdGF0dXM6IFwiY29tcGxldGVkXCIsXG4gICAgICAgIHByaW9yaXR5OiBcIm1lZGl1bVwiLFxuICAgICAgICBpbnB1dFN0YXR1czogXCJkaXNhYmxlZFwiLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICBQMTY5NzcxMDczNjAwMDoge1xuICAgIGlkOiBcIlAxNjk3NzEwNzM2MDAwXCIsXG4gICAgdGl0bGU6IFwiVHJhdmVsXCIsXG4gICAgdGFza3M6IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6IFwiVDE2OTc3MTA3NDExMjBcIixcbiAgICAgICAgdGl0bGU6IFwiUGFzc3BvcnRcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQXBwbHkgZm9yIHBhc3Nwb3J0XCIsXG4gICAgICAgIGR1ZURhdGU6IFwiMjAyMy0xMC0yM1wiLFxuICAgICAgICBzdGF0dXM6IFwicGVuZGluZ1wiLFxuICAgICAgICBwcmlvcml0eTogXCJtZWRpdW1cIixcbiAgICAgICAgaW5wdXRTdGF0dXM6IFwiZW5hYmxlZFwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IFwiVDE2OTgzNzA3OTQ0ODNcIixcbiAgICAgICAgdGl0bGU6IFwiUGxhbiBpdGluZXJhcnlcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiTWFrZSBsaXN0IG9mIHBsYWNlcyB0byB2aXNpdFwiLFxuICAgICAgICBkdWVEYXRlOiBcIlwiLFxuICAgICAgICBzdGF0dXM6IFwicGVuZGluZ1wiLFxuICAgICAgICBwcmlvcml0eTogXCJtZWRpdW1cIixcbiAgICAgICAgaW5wdXRTdGF0dXM6IFwiZW5hYmxlZFwiLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICBQMTY5ODM3MDkzMTYzMDoge1xuICAgIGlkOiBcIlAxNjk4MzcwOTMxNjMwXCIsXG4gICAgdGl0bGU6IFwiR3JvY2VyaWVzXCIsXG4gICAgdGFza3M6IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6IFwiVDE2OTgzNzA5NDk3OTlcIixcbiAgICAgICAgdGl0bGU6IFwiV29vbHdvcnRoc1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJCYW5hbmFzXFxuTWlsa1xcbkJ1dHRlclxcbkZyb3plbiBkdW1wbGluZ3NcXG5Ub2lsZXQgcGFwZXJcIixcbiAgICAgICAgZHVlRGF0ZTogXCJcIixcbiAgICAgICAgc3RhdHVzOiBcInBlbmRpbmdcIixcbiAgICAgICAgcHJpb3JpdHk6IFwibWVkaXVtXCIsXG4gICAgICAgIGlucHV0U3RhdHVzOiBcImVuYWJsZWRcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiBcIlQxNjk4MzcxMTE5NTM2XCIsXG4gICAgICAgIHRpdGxlOiBcIkFsZGlcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQ2hlZXNlXFxuQmlzY3VpdHNcIixcbiAgICAgICAgZHVlRGF0ZTogXCJcIixcbiAgICAgICAgc3RhdHVzOiBcImNvbXBsZXRlZFwiLFxuICAgICAgICBwcmlvcml0eTogXCJtZWRpdW1cIixcbiAgICAgICAgaW5wdXRTdGF0dXM6IFwiZGlzYWJsZWRcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0MDogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IGluaXRBcHAgfSBmcm9tIFwiLi9jb250cm9sbGVyXCI7XG5cbihmdW5jdGlvbiAoKSB7XG4gIGluaXRBcHAoKTtcbn0pKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=