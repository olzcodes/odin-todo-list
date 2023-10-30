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

:root.default-theme {
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

button:hover {
  cursor: pointer;
}

nav.top-nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

nav.top-nav button {
  width: 96px;
  background-color: var(--accent-color-two);
  color: var(--accent-color);
  border: 2px solid var(--accent-color-two);
  border-radius: 12px;
  font-family: "Quicksand";
  font-size: medium;
  padding: 7px 8px 5px;
}

nav.top-nav button:hover {
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
  padding-top: 120px;
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
  color: var(--accent-color-two);
  font-family: "Quicksand";
  font-weight: bold;
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
button.btn-project-move-up,
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

span.priority-label {
  padding: 0px 5px 0px 0px;
}

button.btn-task-priority {
  background-color: var(--accent-three);
  border: none;
  margin: -8px;
}

button.btn-task-priority.low::after {
  content: "⬤";
  color: palegreen;
  font-size: large;
}

button.btn-task-priority.medium::after {
  content: "⬤";
  color: gold;
  font-size: large;
}

button.btn-task-priority.high::after {
  content: "⬤";
  color: coral;
  font-size: large;
}

.priority-high {
  background-color: var(--priority-high-color);
}

.task-days-remaining,
.task-priority {
  color: var(--inactive-color-two);
  font-size: small;
  font-weight: 500;
  text-align: center;
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,0BAA0B;EAC1B,2DAA2D;EAC3D,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,wBAAwB;EACxB,2DAAwD;EACxD,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,wBAAwB;EACxB,2DAAsD;EACtD,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;EACnB,8BAA8B;EAC9B,qCAAqC;EACrC,sBAAsB;EACtB,yBAAyB;EACzB,+BAA+B;EAC/B,oCAAoC;EACpC,sBAAsB;EACtB,yBAAyB;EACzB,wBAAwB;EACxB,0BAA0B;EAC1B,wBAAwB;AAC1B;;AAEA;EACE,sBAAsB;EACtB,WAAW;EACX,YAAY;AACd;;AAEA;;;EAGE,mBAAmB;EACnB,2BAA2B;AAC7B;;AAEA;EACE,aAAa;AACf;;AAEA;;;;;;EAME,WAAW;AACb;;AAEA;EACE,aAAa;EACb,yCAAyC;EACzC,wBAAwB;EACxB,6DAA6D;EAC7D,WAAW;;EAEX,aAAa;EACb,sBAAsB;EACtB,8BAA8B;AAChC;;AAEA;EACE,eAAe;EACf,MAAM;EACN,WAAW;EACX,UAAU;;EAEV,aAAa;EACb,sBAAsB;EACtB,8BAA8B;;EAE9B,6CAA6C;EAC7C,qEAAqE;AACvE;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,8BAA8B;EAC9B,aAAa;AACf;;AAEA;EACE,0BAA0B;EAC1B,0BAA0B;EAC1B,kBAAkB;EAClB,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,WAAW;EACX,yCAAyC;EACzC,0BAA0B;EAC1B,yCAAyC;EACzC,mBAAmB;EACnB,wBAAwB;EACxB,iBAAiB;EACjB,oBAAoB;AACtB;;AAEA;EACE,yCAAyC;EACzC,0BAA0B;EAC1B,qCAAqC;AACvC;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,iBAAiB;EACjB,qBAAqB;EACrB,oBAAoB;AACtB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,YAAY;EACZ,0BAA0B;EAC1B,6CAA6C;EAC7C,iBAAiB;EACjB,sBAAsB;EACtB,oBAAoB;AACtB;;AAEA;EACE,wBAAwB;EACxB,gBAAgB;EAChB,oBAAoB;AACtB;;AAEA;EACE,YAAY;EACZ,yCAAyC;EACzC,0BAA0B;EAC1B,yCAAyC;EACzC,mBAAmB;EACnB,wBAAwB;EACxB,iBAAiB;EACjB,iBAAiB;EACjB,0BAA0B;EAC1B,0BAA0B;EAC1B,oBAAoB;AACtB;;AAEA;EACE,0BAA0B;EAC1B,qCAAqC;EACrC,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,SAAS;EACT,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,UAAU;;EAEV,OAAO;EACP,aAAa;EACb,sBAAsB;EACtB,sBAAsB;EACtB,kBAAkB;EAClB,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,oBAAoB;AACtB;;AAEA;;EAEE,eAAe;EACf,OAAO;EACP,gEAAgE;EAChE,mBAAmB;EACnB,oBAAoB;AACtB;;AAEA;;EAEE,YAAY;EACZ,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,2CAA2C;EAC3C,8BAA8B;EAC9B,wBAAwB;EACxB,iBAAiB;EACjB,kBAAkB;EAClB,wBAAwB;AAC1B;;AAEA;;EAEE,wBAAwB;AAC1B;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,6BAA6B;EAC7B,UAAU;EACV,SAAS;EACT,gBAAgB;AAClB;;AAEA;;EAEE,6BAA6B;EAC7B,UAAU;EACV,YAAY;AACd;;AAEA,4GAA4G;AAC5G;EACE,oBAAoB;AACtB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,4DAA4D;AAC9D;;AAEA;;EAEE,yCAAyC;EACzC,mCAAmC;EACnC,kBAAkB;EAClB,oBAAoB;AACtB;;AAEA;;EAEE,OAAO;EACP,yBAAyB;EACzB,8BAA8B;EAC9B,wBAAwB;EACxB,iBAAiB;EACjB,iBAAiB;EACjB,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;;EAEE,yBAAyB;AAC3B;;AAEA;;EAEE,OAAO;EACP,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;EACzB,8BAA8B;EAC9B,YAAY;EACZ,gBAAgB;EAChB,oBAAoB;AACtB;;AAEA;EACE,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,mBAAmB;AACrB;;AAEA;;EAEE,qCAAqC;AACvC;;AAEA;EACE,6BAA6B;EAC7B,8CAA8C;EAC9C,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,QAAQ;AACV;;AAEA;;;;EAIE,qCAAqC;EACrC,8BAA8B;EAC9B,YAAY;EACZ,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;;;;EAIE,wBAAwB;AAC1B;;AAEA;;EAEE,yCAAyC;EACzC,iBAAiB;EACjB,8BAA8B;EAC9B,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,8BAA8B;AAChC;;AAEA;EACE,WAAW;EACX,yCAAyC;EACzC,6DAA6D;EAC7D,iBAAiB;EACjB,YAAY;EACZ,aAAa;EACb,YAAY;EACZ,uBAAuB;AACzB;;AAEA;EACE,WAAW;AACb;;AAEA;;EAEE,aAAa;EACb,YAAY;EACZ,8BAA8B;EAC9B,mBAAmB;EACnB,6CAA6C;EAC7C,8BAA8B;EAC9B,gBAAgB;AAClB;;AAEA;EACE,6CAA6C;EAC7C,2CAA2C;EAC3C,kBAAkB;EAClB,aAAa;EACb,YAAY;AACd;;AAEA;EACE,yCAAyC;EACzC,uCAAuC;AACzC;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,qCAAqC;EACrC,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,4CAA4C;AAC9C;;AAEA;;EAEE,gCAAgC;EAChC,gBAAgB;EAChB,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,eAAe;EACf,YAAY;EACZ,UAAU;EACV,mBAAmB;EACnB,yCAAyC;EACzC,mBAAmB;EACnB,qCAAqC;EACrC,8BAA8B;EAC9B,wBAAwB;AAC1B;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,eAAe;EACf,YAAY;EACZ,WAAW;EACX,mBAAmB;EACnB,yCAAyC;EACzC,mBAAmB;EACnB,qCAAqC;EACrC,8BAA8B;EAC9B,qBAAqB;AACvB;;AAEA;EACE,eAAe;EACf,WAAW;EACX,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,2BAA2B;EAC3B,YAAY;AACd;;AAEA;EACE,0BAA0B;EAC1B,WAAW;AACb","sourcesContent":["@font-face {\n  font-family: \"Electrolize\";\n  src: url(\"./fonts/Electrolize-Regular.woff\") format(\"woff\");\n  font-weight: 400;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: \"Quicksand\";\n  src: url(\"./fonts/Quicksand-Medium.woff\") format(\"woff\");\n  font-weight: 500;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: \"Quicksand\";\n  src: url(\"./fonts/Quicksand-Bold.woff\") format(\"woff\");\n  font-weight: 700;\n  font-style: normal;\n}\n\n:root.default-theme {\n  --main-color: black;\n  --background-color: whitesmoke;\n  --background-color-two: lavenderblush;\n  --accent-color: salmon;\n  --accent-color-two: white;\n  --accent-color-three: lightpink;\n  --priority-high-color: palevioletred;\n  --active-color: tomato;\n  --active-color-two: white;\n  --inactive-color: silver;\n  --inactive-color-two: gray;\n  --default-thickness: 2px;\n}\n\nhtml {\n  box-sizing: border-box;\n  margin: 0px;\n  padding: 0px;\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n  /* border: 1px solid red; */\n}\n\n.hidden {\n  display: none;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0px;\n}\n\nbody {\n  height: 100vh;\n  background-color: var(--background-color);\n  color: var(--main-color);\n  font-family: \"Quicksand\", Tahoma, Geneva, Verdana, sans-serif;\n  margin: 0px;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\nheader {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 1;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  background-color: var(--background-color-two);\n  border-bottom: var(--default-thickness) solid var(--accent-color-two);\n}\n\n.header-top-row {\n  height: 56px;\n  display: flex;\n  justify-content: space-between;\n  padding: 10px;\n}\n\nh1 {\n  font-family: \"Electrolize\";\n  color: var(--accent-color);\n  font-size: x-large;\n  text-align: center;\n  padding-top: 5px;\n}\n\nbutton:hover {\n  cursor: pointer;\n}\n\nnav.top-nav {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n}\n\nnav.top-nav button {\n  width: 96px;\n  background-color: var(--accent-color-two);\n  color: var(--accent-color);\n  border: 2px solid var(--accent-color-two);\n  border-radius: 12px;\n  font-family: \"Quicksand\";\n  font-size: medium;\n  padding: 7px 8px 5px;\n}\n\nnav.top-nav button:hover {\n  background-color: var(--accent-color-two);\n  color: var(--accent-color);\n  border: 2px solid var(--accent-color);\n}\n\nnav.breadcrumb-nav {\n  display: flex;\n  align-items: center;\n  font-size: larger;\n  padding: 5px 10px 0px;\n  margin: 0px 0px 10px;\n}\n\nspan {\n  padding: 0px 10px 0px;\n}\n\nspan.all-projects {\n  height: 36px;\n  color: var(--accent-color);\n  border: 2px solid var(--background-color-two);\n  font-size: medium;\n  letter-spacing: 0.23px;\n  padding: 6px 6px 3px;\n}\n\nspan.current-project {\n  color: var(--main-color);\n  font-size: large;\n  padding: 3px 6px 3px;\n}\n\nbutton.btn-view-all-projects {\n  height: 36px;\n  background-color: var(--accent-color-two);\n  color: var(--accent-color);\n  border: 2px solid var(--accent-color-two);\n  border-radius: 12px;\n  font-family: \"Quicksand\";\n  font-size: medium;\n  font-weight: bold;\n  text-decoration: underline;\n  color: var(--accent-color);\n  padding: 3px 6px 3px;\n}\n\nbutton.btn-view-all-projects:hover {\n  color: var(--active-color);\n  border: 2px solid var(--active-color);\n  font-weight: 700;\n  letter-spacing: 0px;\n}\n\nbutton.btn-view-all-projects::after {\n  height: 0;\n  visibility: hidden;\n  font-weight: 700;\n}\n\nmain {\n  position: relative;\n  z-index: 0;\n\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  align-items: start;\n  padding: 15px;\n  padding-top: 120px;\n}\n\n.item-container {\n  width: 100%;\n  padding-bottom: 80px;\n}\n\n.project-card,\n.task-card {\n  cursor: pointer;\n  flex: 1;\n  border: var(--default-thickness) solid var(--accent-color-three);\n  border-radius: 12px;\n  margin: 0px 0px 20px;\n}\n\n.project-header,\n.task-header {\n  height: 40px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: var(--accent-color-three);\n  color: var(--accent-color-two);\n  font-family: \"Quicksand\";\n  font-weight: bold;\n  border-radius: 9px;\n  padding: 5px 5px 6px 5px;\n}\n\n.project-header:hover .input-project-title,\n.task-header:hover .input-task-title {\n  color: var(--main-color);\n}\n\n.task-header.completed {\n  background-color: var(--inactive-color);\n}\n\n.task-details.completed {\n  transition: opacity 1.5s ease;\n  opacity: 0;\n  height: 0;\n  overflow: hidden;\n}\n\n.task-details.pending,\n.task-details.completed.visible {\n  transition: opacity 1.5s ease;\n  opacity: 1;\n  height: auto;\n}\n\n/* This rule is required for click events on disabled input elements to propagate upwards on some browsers */\ninput[disabled] {\n  pointer-events: none;\n}\n\ninput.input-task-title.completed {\n  text-decoration: line-through;\n}\n\n.task-card.completed {\n  border: var(--default-thickness) solid var(--inactive-color);\n}\n\nbutton.btn-save-project,\nbutton.btn-save-task {\n  background-color: var(--accent-color-two);\n  border: 2px solid var(--main-color);\n  border-radius: 5px;\n  padding: 5px 8px 5px;\n}\n\ninput.input-project-title,\ninput.input-task-title {\n  flex: 1;\n  background-color: inherit;\n  color: var(--accent-color-two);\n  font-family: \"Quicksand\";\n  font-size: medium;\n  font-weight: bold;\n  border: none;\n  outline: none;\n  margin-left: 5px;\n  margin-right: 20px;\n}\n\ninput.input-project-title:focus,\ninput.input-task-title:focus {\n  background-color: inherit;\n}\n\n.project-header-left,\n.task-header-left {\n  flex: 1;\n  display: flex;\n  align-items: center;\n}\n\nbutton.btn-task-status {\n  background-color: inherit;\n  color: var(--accent-color-two);\n  border: none;\n  font-size: large;\n  padding: 0px 6px 0px;\n}\n\nbutton.btn-task-status.pending::after {\n  content: \"☐\";\n  font-size: xx-large;\n}\n\nbutton.btn-task-status.completed::after {\n  content: \"☑\";\n  font-size: xx-large;\n}\n\n.project-header:focus-within,\n.task-header:focus-within {\n  background-color: var(--accent-color);\n}\n\n.task-title.completed {\n  text-decoration: line-through;\n  text-decoration-color: var(--accent-color-two);\n  text-decoration-thickness: 2px;\n}\n\n.task-header-right {\n  display: flex;\n  gap: 6px;\n}\n\nbutton.btn-project-move-down,\nbutton.btn-project-move-up,\nbutton.btn-project-delete,\nbutton.btn-task-delete {\n  background-color: var(--accent-three);\n  color: var(--accent-color-two);\n  border: none;\n  font-weight: 700;\n  padding: 0px 10px;\n}\n\nbutton.btn-project-move-down:hover,\nbutton.btn-project-move-up:hover,\nbutton.btn-project-delete:hover,\nbutton.btn-task-delete:hover {\n  color: var(--main-color);\n}\n\n.project-details > div,\n.task-details > div {\n  background-color: var(--accent-color-two);\n  font-size: medium;\n  border-radius: 0px 0px 9px 9px;\n  padding: 10px 15px 10px;\n}\n\n.task-details {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\ntextarea.input-task-description {\n  width: 100%;\n  background-color: var(--accent-color-two);\n  font-family: \"Quicksand\", Tahoma, Geneva, Verdana, sans-serif;\n  font-size: medium;\n  border: none;\n  outline: none;\n  resize: none;\n  padding: 10px 15px 10px;\n}\n\ntextarea.input-task-description.completed {\n  color: gray;\n}\n\n.project-details > .task-bottom-row,\n.task-details > .task-bottom-row {\n  display: flex;\n  height: 40px;\n  justify-content: space-between;\n  align-items: center;\n  background-color: var(--background-color-two);\n  border-radius: 0px 0px 9px 9px;\n  font-weight: 700;\n}\n\ninput.input-task-due-date {\n  background-color: var(--background-color-two);\n  border: 2px solid var(--accent-color-three);\n  border-radius: 5px;\n  outline: none;\n  padding: 2px;\n}\n\ninput[disabled].input-task-due-date {\n  background-color: var(--background-color);\n  border: 2px solid var(--inactive-color);\n}\n\nspan.priority-label {\n  padding: 0px 5px 0px 0px;\n}\n\nbutton.btn-task-priority {\n  background-color: var(--accent-three);\n  border: none;\n  margin: -8px;\n}\n\nbutton.btn-task-priority.low::after {\n  content: \"⬤\";\n  color: palegreen;\n  font-size: large;\n}\n\nbutton.btn-task-priority.medium::after {\n  content: \"⬤\";\n  color: gold;\n  font-size: large;\n}\n\nbutton.btn-task-priority.high::after {\n  content: \"⬤\";\n  color: coral;\n  font-size: large;\n}\n\n.priority-high {\n  background-color: var(--priority-high-color);\n}\n\n.task-days-remaining,\n.task-priority {\n  color: var(--inactive-color-two);\n  font-size: small;\n  font-weight: 500;\n  text-align: center;\n}\n\nbutton.btn-back-to-all-projects {\n  height: 42px;\n  width: 42px;\n  position: fixed;\n  bottom: 50px;\n  left: 20px;\n  font-size: xx-large;\n  border: 2px solid var(--accent-color-two);\n  border-radius: 50px;\n  background-color: var(--accent-color);\n  color: var(--accent-color-two);\n  padding: 2px 2px 0px 0px;\n}\n\nbutton.btn-new-item {\n  height: 42px;\n  width: 42px;\n  position: fixed;\n  bottom: 50px;\n  right: 20px;\n  font-size: xx-large;\n  border: 2px solid var(--accent-color-two);\n  border-radius: 50px;\n  background-color: var(--accent-color);\n  color: var(--accent-color-two);\n  padding: 0px 10px 0px;\n}\n\nfooter {\n  position: fixed;\n  bottom: 0px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  background-color: lightgray;\n  padding: 5px;\n}\n\nfooter a {\n  font-family: \"Electrolize\";\n  color: gray;\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19);
/* harmony import */ var _demoData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20);


 // prettier-ignore



let projects = (0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.loadFromLocalStorage)() || _demoData__WEBPACK_IMPORTED_MODULE_4__.demoProjects;
let targetProject;
let view;

const loadProjectsView = function () {
  view = "projects";
  (0,_view__WEBPACK_IMPORTED_MODULE_2__.renderBreadcrumbNav)(view);
  (0,_view__WEBPACK_IMPORTED_MODULE_2__.clearItemContainer)();
  (0,_view__WEBPACK_IMPORTED_MODULE_2__.renderAllProjects)(projects);
  (0,_view__WEBPACK_IMPORTED_MODULE_2__.hideTaskViewButtons)();
  inputHandlerProjectTitle();
  clickHandlerDivProjectDetails();
  clickHandlerBtnDeleteProject();
};

const loadTasksView = function (targetProject) {
  view = "tasks";
  (0,_view__WEBPACK_IMPORTED_MODULE_2__.renderBreadcrumbNav)(view, targetProject);
  (0,_view__WEBPACK_IMPORTED_MODULE_2__.clearItemContainer)();
  (0,_view__WEBPACK_IMPORTED_MODULE_2__.renderTasks)(targetProject.tasks);
  (0,_view__WEBPACK_IMPORTED_MODULE_2__.showTaskViewButtons)();
  clickHandlerBtnViewAllProjects();
  clickHandlerBtnBackToAllProjects();
  (0,_view__WEBPACK_IMPORTED_MODULE_2__.clickHandlerCompletedTaskCard)();
  clickHandlerBtnTaskStatus(targetProject);
  inputHandlerTaskTitle(targetProject);
  clickHandlerBtnDeleteTask();
  inputHandlerTaskDescription(targetProject);
  inputHandlerTaskDueDate(targetProject);
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

const autoSaveTaskStatusChanges = function (targetProject, taskId, button) {
  targetProject.tasks.forEach((task) => {
    if (task.id === taskId) {
      task.status === "pending"
        ? (task.status = "completed")
        : (task.status = "pending");

      task.inputStatus === "enabled"
        ? (task.inputStatus = "disabled")
        : (task.inputStatus = "enabled");

      button.blur();

      (0,_view__WEBPACK_IMPORTED_MODULE_2__.toggleTaskElementsOnStatusChange)(button);

      (0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.saveToLocalStorage)();
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
const autoSaveTaskDescriptionChanges = function ( targetProject, taskId, taskDescriptionEl) {
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

const clickHandlerBtnTaskStatus = function (targetProject) {
  const btnTaskPendingNL = document.querySelectorAll(".btn-task-status");
  btnTaskPendingNL.forEach((button) => {
    button.addEventListener("click", (e) => {
      const taskId = e.target.closest(".task-card").dataset.taskId;
      console.log(taskId);
      autoSaveTaskStatusChanges(targetProject, taskId, button);
      e.stopPropagation();
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

const inputHandlerTaskDescription = function (targetProject) {
  const taskDescriptionsNL = document.querySelectorAll(
    ".input-task-description"
  );

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

// Initialize app
const initApp = function () {
  loadProjectsView();
  clickHandlerBtnNewItem();
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
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53);


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
/* harmony export */   autoAdjustHeight: () => (/* binding */ autoAdjustHeight),
/* harmony export */   clearItemContainer: () => (/* binding */ clearItemContainer),
/* harmony export */   clickHandlerCompletedTaskCard: () => (/* binding */ clickHandlerCompletedTaskCard),
/* harmony export */   hideTaskViewButtons: () => (/* binding */ hideTaskViewButtons),
/* harmony export */   renderAllProjects: () => (/* binding */ renderAllProjects),
/* harmony export */   renderBreadcrumbNav: () => (/* binding */ renderBreadcrumbNav),
/* harmony export */   renderTasks: () => (/* binding */ renderTasks),
/* harmony export */   showTaskViewButtons: () => (/* binding */ showTaskViewButtons),
/* harmony export */   showTopOfPage: () => (/* binding */ showTopOfPage),
/* harmony export */   toggleTaskElementsOnStatusChange: () => (/* binding */ toggleTaskElementsOnStatusChange)
/* harmony export */ });
const btnSortByDueDate = document.querySelector(".btn-due-date");
const btnSortByPriority = document.querySelector(".btn-priority");
const breadcrumbNav = document.querySelectorAll(".breadcrumb-nav");
const itemContainer = document.querySelector(".item-container");
const btnBackToAllProjects = document.querySelector(".btn-back-to-all-projects"); // prettier-ignore

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

const clearItemContainer = function () {
  itemContainer.innerHTML = "";
};

const renderProjectCard = function (project) {
  const renderProjectDetails = function (project) {
    let taskCount = 0;
    project.tasks.forEach((task) => {
      if (task.status === "pending") taskCount += 1;
    });
    return `${taskCount} pending tasks`;
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
        <div class="task-priority">
          <span class="priority-label">${task.priority}</span>
          <button class="btn-task-priority ${task.priority}"></button>
        </div>
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
const renderTasks = function (targetProjectTasks) {
  for (let [key, value] of Object.entries(targetProjectTasks)) {
    itemContainer.prepend(renderTaskCard(value));
  }
};

const showTaskViewButtons = function () {
  btnSortByDueDate.classList.remove("hidden");
  btnSortByPriority.classList.remove("hidden");
  btnBackToAllProjects.classList.remove("hidden");
};

const hideTaskViewButtons = function () {
  btnSortByDueDate.classList.add("hidden");
  btnSortByPriority.classList.add("hidden");
  btnBackToAllProjects.classList.add("hidden");
};

const showTopOfPage = function () {
  window.scrollTo(0, 0);
};

const autoAdjustHeight = function (taskDescriptionEl) {
  taskDescriptionEl.addEventListener("blur", () => {
    taskDescriptionEl.style.height = "";
    taskDescriptionEl.style.height = taskDescriptionEl.scrollHeight + "px";
  });

  taskDescriptionEl.focus();
  taskDescriptionEl.blur();

  taskDescriptionEl.addEventListener("input", (e) => {
    taskDescriptionEl.style.height = "";
    taskDescriptionEl.style.height = taskDescriptionEl.scrollHeight + "px";
  });
};

const toggleTaskDetails = function (taskCard) {
  const taskDetailsEl = taskCard.querySelector(".task-details");
  taskDetailsEl.classList.toggle("visible");
};

const toggleTaskElementsOnStatusChange = function (button) {
  button.classList.toggle("completed");
  button.classList.toggle("pending");

  const taskCardEl = button.parentElement.parentElement.parentElement;
  const taskHeaderEl = taskCardEl.querySelector(".task-header");
  const taskTitleInputEl = taskCardEl.querySelector(".input-task-title");
  const taskDetailsEl = taskCardEl.querySelector(".task-details");
  const taskDescriptionEl = taskCardEl.querySelector(".input-task-description");
  const taskDueDateEl = taskCardEl.querySelector(".input-task-due-date");

  taskCardEl.classList.toggle("completed");
  taskCardEl.classList.toggle("pending");
  taskHeaderEl.classList.toggle("completed");
  taskHeaderEl.classList.toggle("pending");
  taskTitleInputEl.classList.toggle("completed");
  taskTitleInputEl.classList.toggle("pending");
  taskDetailsEl.classList.toggle("completed");
  taskDetailsEl.classList.toggle("pending");
  taskDetailsEl.classList.remove("visible");
  taskDescriptionEl.classList.toggle("completed");
  taskDescriptionEl.classList.toggle("pending");

  taskTitleInputEl.disabled = !taskTitleInputEl.disabled;
  taskDescriptionEl.disabled = !taskDescriptionEl.disabled;
  taskDueDateEl.disabled = !taskDueDateEl.disabled;
};

const clickHandlerCompletedTaskCard = function () {
  const completedTaskCardNL = document.querySelectorAll(".task-card");
  completedTaskCardNL.forEach((taskCard) => {
    const taskDescriptionEl = taskCard.querySelector(".input-task-description");
    taskCard.addEventListener("click", () => {
      if (taskCard.classList.contains("completed")) {
        taskDescriptionEl.disabled = false;
        autoAdjustHeight(taskDescriptionEl);
        taskDescriptionEl.disabled = true;
      }
      toggleTaskDetails(taskCard);
    });
  });
};




/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadFromLocalStorage: () => (/* binding */ loadFromLocalStorage),
/* harmony export */   saveToLocalStorage: () => (/* binding */ saveToLocalStorage)
/* harmony export */ });
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);
/* harmony import */ var _demoData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20);





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
/* 20 */
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


/***/ }),
/* 21 */,
/* 22 */
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
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22);


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
/* 37 */
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
/* 38 */,
/* 39 */,
/* 40 */
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
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInCalendarDays)
/* harmony export */ });
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40);
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);



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
/* 54 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxPQUFPLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxZQUFZLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsWUFBWSxjQUFjLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxZQUFZLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLFdBQVcsVUFBVSxNQUFNLFlBQVksTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLFFBQVEsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sUUFBUSxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFB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QWEsNERBQU07QUFDbkI7QUFDQTtBQUNBOzs7OztVQ3pCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7O0FDQXFCO0FBQ2tCOztBQUV2QztBQUNBLEVBQUUsb0RBQU87QUFDVCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3ZpZXcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvbG9jYWxTdG9yYWdlLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2RlbW9EYXRhLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9kaWZmZXJlbmNlSW5DYWxlbmRhckRheXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9FbGVjdHJvbGl6ZS1SZWd1bGFyLndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL1F1aWNrc2FuZC1NZWRpdW0ud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vZm9udHMvUXVpY2tzYW5kLUJvbGQud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiRWxlY3Ryb2xpemVcIjtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbjpyb290LmRlZmF1bHQtdGhlbWUge1xuICAtLW1haW4tY29sb3I6IGJsYWNrO1xuICAtLWJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gIC0tYmFja2dyb3VuZC1jb2xvci10d286IGxhdmVuZGVyYmx1c2g7XG4gIC0tYWNjZW50LWNvbG9yOiBzYWxtb247XG4gIC0tYWNjZW50LWNvbG9yLXR3bzogd2hpdGU7XG4gIC0tYWNjZW50LWNvbG9yLXRocmVlOiBsaWdodHBpbms7XG4gIC0tcHJpb3JpdHktaGlnaC1jb2xvcjogcGFsZXZpb2xldHJlZDtcbiAgLS1hY3RpdmUtY29sb3I6IHRvbWF0bztcbiAgLS1hY3RpdmUtY29sb3ItdHdvOiB3aGl0ZTtcbiAgLS1pbmFjdGl2ZS1jb2xvcjogc2lsdmVyO1xuICAtLWluYWN0aXZlLWNvbG9yLXR3bzogZ3JheTtcbiAgLS1kZWZhdWx0LXRoaWNrbmVzczogMnB4O1xufVxuXG5odG1sIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuKixcbio6YmVmb3JlLFxuKjphZnRlciB7XG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cbn1cblxuLmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIG1hcmdpbjogMHB4O1xufVxuXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcbiAgZm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICBtYXJnaW46IDBweDtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbmhlYWRlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMTtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci10d28pO1xuICBib3JkZXItYm90dG9tOiB2YXIoLS1kZWZhdWx0LXRoaWNrbmVzcykgc29saWQgdmFyKC0tYWNjZW50LWNvbG9yLXR3byk7XG59XG5cbi5oZWFkZXItdG9wLXJvdyB7XG4gIGhlaWdodDogNTZweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG5oMSB7XG4gIGZvbnQtZmFtaWx5OiBcIkVsZWN0cm9saXplXCI7XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICBmb250LXNpemU6IHgtbGFyZ2U7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDVweDtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5uYXYudG9wLW5hdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG59XG5cbm5hdi50b3AtbmF2IGJ1dHRvbiB7XG4gIHdpZHRoOiA5NnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItdHdvKTtcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWFjY2VudC1jb2xvci10d28pO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBmb250LWZhbWlseTogXCJRdWlja3NhbmRcIjtcbiAgZm9udC1zaXplOiBtZWRpdW07XG4gIHBhZGRpbmc6IDdweCA4cHggNXB4O1xufVxuXG5uYXYudG9wLW5hdiBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItdHdvKTtcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWFjY2VudC1jb2xvcik7XG59XG5cbm5hdi5icmVhZGNydW1iLW5hdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICBwYWRkaW5nOiA1cHggMTBweCAwcHg7XG4gIG1hcmdpbjogMHB4IDBweCAxMHB4O1xufVxuXG5zcGFuIHtcbiAgcGFkZGluZzogMHB4IDEwcHggMHB4O1xufVxuXG5zcGFuLmFsbC1wcm9qZWN0cyB7XG4gIGhlaWdodDogMzZweDtcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJhY2tncm91bmQtY29sb3ItdHdvKTtcbiAgZm9udC1zaXplOiBtZWRpdW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjIzcHg7XG4gIHBhZGRpbmc6IDZweCA2cHggM3B4O1xufVxuXG5zcGFuLmN1cnJlbnQtcHJvamVjdCB7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcbiAgZm9udC1zaXplOiBsYXJnZTtcbiAgcGFkZGluZzogM3B4IDZweCAzcHg7XG59XG5cbmJ1dHRvbi5idG4tdmlldy1hbGwtcHJvamVjdHMge1xuICBoZWlnaHQ6IDM2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvci10d28pO1xuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYWNjZW50LWNvbG9yLXR3byk7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiO1xuICBmb250LXNpemU6IG1lZGl1bTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgcGFkZGluZzogM3B4IDZweCAzcHg7XG59XG5cbmJ1dHRvbi5idG4tdmlldy1hbGwtcHJvamVjdHM6aG92ZXIge1xuICBjb2xvcjogdmFyKC0tYWN0aXZlLWNvbG9yKTtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYWN0aXZlLWNvbG9yKTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbn1cblxuYnV0dG9uLmJ0bi12aWV3LWFsbC1wcm9qZWN0czo6YWZ0ZXIge1xuICBoZWlnaHQ6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxubWFpbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMDtcblxuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIHBhZGRpbmctdG9wOiAxMjBweDtcbn1cblxuLml0ZW0tY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctYm90dG9tOiA4MHB4O1xufVxuXG4ucHJvamVjdC1jYXJkLFxuLnRhc2stY2FyZCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZmxleDogMTtcbiAgYm9yZGVyOiB2YXIoLS1kZWZhdWx0LXRoaWNrbmVzcykgc29saWQgdmFyKC0tYWNjZW50LWNvbG9yLXRocmVlKTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgbWFyZ2luOiAwcHggMHB4IDIwcHg7XG59XG5cbi5wcm9qZWN0LWhlYWRlcixcbi50YXNrLWhlYWRlciB7XG4gIGhlaWdodDogNDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItdGhyZWUpO1xuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yLXR3byk7XG4gIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICBwYWRkaW5nOiA1cHggNXB4IDZweCA1cHg7XG59XG5cbi5wcm9qZWN0LWhlYWRlcjpob3ZlciAuaW5wdXQtcHJvamVjdC10aXRsZSxcbi50YXNrLWhlYWRlcjpob3ZlciAuaW5wdXQtdGFzay10aXRsZSB7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcbn1cblxuLnRhc2staGVhZGVyLmNvbXBsZXRlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWluYWN0aXZlLWNvbG9yKTtcbn1cblxuLnRhc2stZGV0YWlscy5jb21wbGV0ZWQge1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDEuNXMgZWFzZTtcbiAgb3BhY2l0eTogMDtcbiAgaGVpZ2h0OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4udGFzay1kZXRhaWxzLnBlbmRpbmcsXG4udGFzay1kZXRhaWxzLmNvbXBsZXRlZC52aXNpYmxlIHtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxLjVzIGVhc2U7XG4gIG9wYWNpdHk6IDE7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLyogVGhpcyBydWxlIGlzIHJlcXVpcmVkIGZvciBjbGljayBldmVudHMgb24gZGlzYWJsZWQgaW5wdXQgZWxlbWVudHMgdG8gcHJvcGFnYXRlIHVwd2FyZHMgb24gc29tZSBicm93c2VycyAqL1xuaW5wdXRbZGlzYWJsZWRdIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbmlucHV0LmlucHV0LXRhc2stdGl0bGUuY29tcGxldGVkIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG5cbi50YXNrLWNhcmQuY29tcGxldGVkIHtcbiAgYm9yZGVyOiB2YXIoLS1kZWZhdWx0LXRoaWNrbmVzcykgc29saWQgdmFyKC0taW5hY3RpdmUtY29sb3IpO1xufVxuXG5idXR0b24uYnRuLXNhdmUtcHJvamVjdCxcbmJ1dHRvbi5idG4tc2F2ZS10YXNrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yLXR3byk7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLW1haW4tY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDVweCA4cHggNXB4O1xufVxuXG5pbnB1dC5pbnB1dC1wcm9qZWN0LXRpdGxlLFxuaW5wdXQuaW5wdXQtdGFzay10aXRsZSB7XG4gIGZsZXg6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItdHdvKTtcbiAgZm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCI7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbmlucHV0LmlucHV0LXByb2plY3QtdGl0bGU6Zm9jdXMsXG5pbnB1dC5pbnB1dC10YXNrLXRpdGxlOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbn1cblxuLnByb2plY3QtaGVhZGVyLWxlZnQsXG4udGFzay1oZWFkZXItbGVmdCB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmJ1dHRvbi5idG4tdGFzay1zdGF0dXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yLXR3byk7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1zaXplOiBsYXJnZTtcbiAgcGFkZGluZzogMHB4IDZweCAwcHg7XG59XG5cbmJ1dHRvbi5idG4tdGFzay1zdGF0dXMucGVuZGluZzo6YWZ0ZXIge1xuICBjb250ZW50OiBcIuKYkFwiO1xuICBmb250LXNpemU6IHh4LWxhcmdlO1xufVxuXG5idXR0b24uYnRuLXRhc2stc3RhdHVzLmNvbXBsZXRlZDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIuKYkVwiO1xuICBmb250LXNpemU6IHh4LWxhcmdlO1xufVxuXG4ucHJvamVjdC1oZWFkZXI6Zm9jdXMtd2l0aGluLFxuLnRhc2staGVhZGVyOmZvY3VzLXdpdGhpbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG59XG5cbi50YXNrLXRpdGxlLmNvbXBsZXRlZCB7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICB0ZXh0LWRlY29yYXRpb24tY29sb3I6IHZhcigtLWFjY2VudC1jb2xvci10d28pO1xuICB0ZXh0LWRlY29yYXRpb24tdGhpY2tuZXNzOiAycHg7XG59XG5cbi50YXNrLWhlYWRlci1yaWdodCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogNnB4O1xufVxuXG5idXR0b24uYnRuLXByb2plY3QtbW92ZS1kb3duLFxuYnV0dG9uLmJ0bi1wcm9qZWN0LW1vdmUtdXAsXG5idXR0b24uYnRuLXByb2plY3QtZGVsZXRlLFxuYnV0dG9uLmJ0bi10YXNrLWRlbGV0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC10aHJlZSk7XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItdHdvKTtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXdlaWdodDogNzAwO1xuICBwYWRkaW5nOiAwcHggMTBweDtcbn1cblxuYnV0dG9uLmJ0bi1wcm9qZWN0LW1vdmUtZG93bjpob3ZlcixcbmJ1dHRvbi5idG4tcHJvamVjdC1tb3ZlLXVwOmhvdmVyLFxuYnV0dG9uLmJ0bi1wcm9qZWN0LWRlbGV0ZTpob3ZlcixcbmJ1dHRvbi5idG4tdGFzay1kZWxldGU6aG92ZXIge1xuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG59XG5cbi5wcm9qZWN0LWRldGFpbHMgPiBkaXYsXG4udGFzay1kZXRhaWxzID4gZGl2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yLXR3byk7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDlweCA5cHg7XG4gIHBhZGRpbmc6IDEwcHggMTVweCAxMHB4O1xufVxuXG4udGFzay1kZXRhaWxzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG50ZXh0YXJlYS5pbnB1dC10YXNrLWRlc2NyaXB0aW9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvci10d28pO1xuICBmb250LWZhbWlseTogXCJRdWlja3NhbmRcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHJlc2l6ZTogbm9uZTtcbiAgcGFkZGluZzogMTBweCAxNXB4IDEwcHg7XG59XG5cbnRleHRhcmVhLmlucHV0LXRhc2stZGVzY3JpcHRpb24uY29tcGxldGVkIHtcbiAgY29sb3I6IGdyYXk7XG59XG5cbi5wcm9qZWN0LWRldGFpbHMgPiAudGFzay1ib3R0b20tcm93LFxuLnRhc2stZGV0YWlscyA+IC50YXNrLWJvdHRvbS1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci10d28pO1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDlweCA5cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbmlucHV0LmlucHV0LXRhc2stZHVlLWRhdGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLXR3byk7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWFjY2VudC1jb2xvci10aHJlZSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogMnB4O1xufVxuXG5pbnB1dFtkaXNhYmxlZF0uaW5wdXQtdGFzay1kdWUtZGF0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pbmFjdGl2ZS1jb2xvcik7XG59XG5cbnNwYW4ucHJpb3JpdHktbGFiZWwge1xuICBwYWRkaW5nOiAwcHggNXB4IDBweCAwcHg7XG59XG5cbmJ1dHRvbi5idG4tdGFzay1wcmlvcml0eSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC10aHJlZSk7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luOiAtOHB4O1xufVxuXG5idXR0b24uYnRuLXRhc2stcHJpb3JpdHkubG93OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwi4qykXCI7XG4gIGNvbG9yOiBwYWxlZ3JlZW47XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG59XG5cbmJ1dHRvbi5idG4tdGFzay1wcmlvcml0eS5tZWRpdW06OmFmdGVyIHtcbiAgY29udGVudDogXCLirKRcIjtcbiAgY29sb3I6IGdvbGQ7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG59XG5cbmJ1dHRvbi5idG4tdGFzay1wcmlvcml0eS5oaWdoOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwi4qykXCI7XG4gIGNvbG9yOiBjb3JhbDtcbiAgZm9udC1zaXplOiBsYXJnZTtcbn1cblxuLnByaW9yaXR5LWhpZ2gge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmlvcml0eS1oaWdoLWNvbG9yKTtcbn1cblxuLnRhc2stZGF5cy1yZW1haW5pbmcsXG4udGFzay1wcmlvcml0eSB7XG4gIGNvbG9yOiB2YXIoLS1pbmFjdGl2ZS1jb2xvci10d28pO1xuICBmb250LXNpemU6IHNtYWxsO1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmJ1dHRvbi5idG4tYmFjay10by1hbGwtcHJvamVjdHMge1xuICBoZWlnaHQ6IDQycHg7XG4gIHdpZHRoOiA0MnB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogNTBweDtcbiAgbGVmdDogMjBweDtcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYWNjZW50LWNvbG9yLXR3byk7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItdHdvKTtcbiAgcGFkZGluZzogMnB4IDJweCAwcHggMHB4O1xufVxuXG5idXR0b24uYnRuLW5ldy1pdGVtIHtcbiAgaGVpZ2h0OiA0MnB4O1xuICB3aWR0aDogNDJweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDUwcHg7XG4gIHJpZ2h0OiAyMHB4O1xuICBmb250LXNpemU6IHh4LWxhcmdlO1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3ItdHdvKTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvci10d28pO1xuICBwYWRkaW5nOiAwcHggMTBweCAwcHg7XG59XG5cbmZvb3RlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbmZvb3RlciBhIHtcbiAgZm9udC1mYW1pbHk6IFwiRWxlY3Ryb2xpemVcIjtcbiAgY29sb3I6IGdyYXk7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSwwQkFBMEI7RUFDMUIsMkRBQTJEO0VBQzNELGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsMkRBQXdEO0VBQ3hELGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsMkRBQXNEO0VBQ3RELGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLHFDQUFxQztFQUNyQyxzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLCtCQUErQjtFQUMvQixvQ0FBb0M7RUFDcEMsc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6Qix3QkFBd0I7RUFDeEIsMEJBQTBCO0VBQzFCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHNC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XCJFbGVjdHJvbGl6ZVxcXCI7XFxuICBzcmM6IHVybChcXFwiLi9mb250cy9FbGVjdHJvbGl6ZS1SZWd1bGFyLndvZmZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJRdWlja3NhbmRcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4vZm9udHMvUXVpY2tzYW5kLU1lZGl1bS53b2ZmXFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUXVpY2tzYW5kXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuL2ZvbnRzL1F1aWNrc2FuZC1Cb2xkLndvZmZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbjpyb290LmRlZmF1bHQtdGhlbWUge1xcbiAgLS1tYWluLWNvbG9yOiBibGFjaztcXG4gIC0tYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gIC0tYmFja2dyb3VuZC1jb2xvci10d286IGxhdmVuZGVyYmx1c2g7XFxuICAtLWFjY2VudC1jb2xvcjogc2FsbW9uO1xcbiAgLS1hY2NlbnQtY29sb3ItdHdvOiB3aGl0ZTtcXG4gIC0tYWNjZW50LWNvbG9yLXRocmVlOiBsaWdodHBpbms7XFxuICAtLXByaW9yaXR5LWhpZ2gtY29sb3I6IHBhbGV2aW9sZXRyZWQ7XFxuICAtLWFjdGl2ZS1jb2xvcjogdG9tYXRvO1xcbiAgLS1hY3RpdmUtY29sb3ItdHdvOiB3aGl0ZTtcXG4gIC0taW5hY3RpdmUtY29sb3I6IHNpbHZlcjtcXG4gIC0taW5hY3RpdmUtY29sb3ItdHdvOiBncmF5O1xcbiAgLS1kZWZhdWx0LXRoaWNrbmVzczogMnB4O1xcbn1cXG5cXG5odG1sIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDBweDtcXG4gIHBhZGRpbmc6IDBweDtcXG59XFxuXFxuKixcXG4qOmJlZm9yZSxcXG4qOmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxuICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYge1xcbiAgbWFyZ2luOiAwcHg7XFxufVxcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJRdWlja3NhbmRcXFwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG4gIG1hcmdpbjogMHB4O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbmhlYWRlciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IDE7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3ItdHdvKTtcXG4gIGJvcmRlci1ib3R0b206IHZhcigtLWRlZmF1bHQtdGhpY2tuZXNzKSBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3ItdHdvKTtcXG59XFxuXFxuLmhlYWRlci10b3Atcm93IHtcXG4gIGhlaWdodDogNTZweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG5oMSB7XFxuICBmb250LWZhbWlseTogXFxcIkVsZWN0cm9saXplXFxcIjtcXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZy10b3A6IDVweDtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxubmF2LnRvcC1uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxubmF2LnRvcC1uYXYgYnV0dG9uIHtcXG4gIHdpZHRoOiA5NnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yLXR3byk7XFxuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWFjY2VudC1jb2xvci10d28pO1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUXVpY2tzYW5kXFxcIjtcXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xcbiAgcGFkZGluZzogN3B4IDhweCA1cHg7XFxufVxcblxcbm5hdi50b3AtbmF2IGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItdHdvKTtcXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYWNjZW50LWNvbG9yKTtcXG59XFxuXFxubmF2LmJyZWFkY3J1bWItbmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxuICBwYWRkaW5nOiA1cHggMTBweCAwcHg7XFxuICBtYXJnaW46IDBweCAwcHggMTBweDtcXG59XFxuXFxuc3BhbiB7XFxuICBwYWRkaW5nOiAwcHggMTBweCAwcHg7XFxufVxcblxcbnNwYW4uYWxsLXByb2plY3RzIHtcXG4gIGhlaWdodDogMzZweDtcXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYmFja2dyb3VuZC1jb2xvci10d28pO1xcbiAgZm9udC1zaXplOiBtZWRpdW07XFxuICBsZXR0ZXItc3BhY2luZzogMC4yM3B4O1xcbiAgcGFkZGluZzogNnB4IDZweCAzcHg7XFxufVxcblxcbnNwYW4uY3VycmVudC1wcm9qZWN0IHtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICBwYWRkaW5nOiAzcHggNnB4IDNweDtcXG59XFxuXFxuYnV0dG9uLmJ0bi12aWV3LWFsbC1wcm9qZWN0cyB7XFxuICBoZWlnaHQ6IDM2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItdHdvKTtcXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYWNjZW50LWNvbG9yLXR3byk7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJRdWlja3NhbmRcXFwiO1xcbiAgZm9udC1zaXplOiBtZWRpdW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxuICBwYWRkaW5nOiAzcHggNnB4IDNweDtcXG59XFxuXFxuYnV0dG9uLmJ0bi12aWV3LWFsbC1wcm9qZWN0czpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tYWN0aXZlLWNvbG9yKTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWFjdGl2ZS1jb2xvcik7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcXG59XFxuXFxuYnV0dG9uLmJ0bi12aWV3LWFsbC1wcm9qZWN0czo6YWZ0ZXIge1xcbiAgaGVpZ2h0OiAwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxubWFpbiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAwO1xcblxcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBwYWRkaW5nLXRvcDogMTIwcHg7XFxufVxcblxcbi5pdGVtLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmctYm90dG9tOiA4MHB4O1xcbn1cXG5cXG4ucHJvamVjdC1jYXJkLFxcbi50YXNrLWNhcmQge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZmxleDogMTtcXG4gIGJvcmRlcjogdmFyKC0tZGVmYXVsdC10aGlja25lc3MpIHNvbGlkIHZhcigtLWFjY2VudC1jb2xvci10aHJlZSk7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgbWFyZ2luOiAwcHggMHB4IDIwcHg7XFxufVxcblxcbi5wcm9qZWN0LWhlYWRlcixcXG4udGFzay1oZWFkZXIge1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItdGhyZWUpO1xcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvci10d28pO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJRdWlja3NhbmRcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBib3JkZXItcmFkaXVzOiA5cHg7XFxuICBwYWRkaW5nOiA1cHggNXB4IDZweCA1cHg7XFxufVxcblxcbi5wcm9qZWN0LWhlYWRlcjpob3ZlciAuaW5wdXQtcHJvamVjdC10aXRsZSxcXG4udGFzay1oZWFkZXI6aG92ZXIgLmlucHV0LXRhc2stdGl0bGUge1xcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbn1cXG5cXG4udGFzay1oZWFkZXIuY29tcGxldGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWluYWN0aXZlLWNvbG9yKTtcXG59XFxuXFxuLnRhc2stZGV0YWlscy5jb21wbGV0ZWQge1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxLjVzIGVhc2U7XFxuICBvcGFjaXR5OiAwO1xcbiAgaGVpZ2h0OiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLnRhc2stZGV0YWlscy5wZW5kaW5nLFxcbi50YXNrLWRldGFpbHMuY29tcGxldGVkLnZpc2libGUge1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxLjVzIGVhc2U7XFxuICBvcGFjaXR5OiAxO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKiBUaGlzIHJ1bGUgaXMgcmVxdWlyZWQgZm9yIGNsaWNrIGV2ZW50cyBvbiBkaXNhYmxlZCBpbnB1dCBlbGVtZW50cyB0byBwcm9wYWdhdGUgdXB3YXJkcyBvbiBzb21lIGJyb3dzZXJzICovXFxuaW5wdXRbZGlzYWJsZWRdIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG5pbnB1dC5pbnB1dC10YXNrLXRpdGxlLmNvbXBsZXRlZCB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLnRhc2stY2FyZC5jb21wbGV0ZWQge1xcbiAgYm9yZGVyOiB2YXIoLS1kZWZhdWx0LXRoaWNrbmVzcykgc29saWQgdmFyKC0taW5hY3RpdmUtY29sb3IpO1xcbn1cXG5cXG5idXR0b24uYnRuLXNhdmUtcHJvamVjdCxcXG5idXR0b24uYnRuLXNhdmUtdGFzayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItdHdvKTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLW1haW4tY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogNXB4IDhweCA1cHg7XFxufVxcblxcbmlucHV0LmlucHV0LXByb2plY3QtdGl0bGUsXFxuaW5wdXQuaW5wdXQtdGFzay10aXRsZSB7XFxuICBmbGV4OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItdHdvKTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUXVpY2tzYW5kXFxcIjtcXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXG4gIG1hcmdpbi1yaWdodDogMjBweDtcXG59XFxuXFxuaW5wdXQuaW5wdXQtcHJvamVjdC10aXRsZTpmb2N1cyxcXG5pbnB1dC5pbnB1dC10YXNrLXRpdGxlOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbi5wcm9qZWN0LWhlYWRlci1sZWZ0LFxcbi50YXNrLWhlYWRlci1sZWZ0IHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuYnV0dG9uLmJ0bi10YXNrLXN0YXR1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvci10d28pO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1zaXplOiBsYXJnZTtcXG4gIHBhZGRpbmc6IDBweCA2cHggMHB4O1xcbn1cXG5cXG5idXR0b24uYnRuLXRhc2stc3RhdHVzLnBlbmRpbmc6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCLimJBcXFwiO1xcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcXG59XFxuXFxuYnV0dG9uLmJ0bi10YXNrLXN0YXR1cy5jb21wbGV0ZWQ6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCLimJFcXFwiO1xcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcXG59XFxuXFxuLnByb2plY3QtaGVhZGVyOmZvY3VzLXdpdGhpbixcXG4udGFzay1oZWFkZXI6Zm9jdXMtd2l0aGluIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxufVxcblxcbi50YXNrLXRpdGxlLmNvbXBsZXRlZCB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yLXR3byk7XFxuICB0ZXh0LWRlY29yYXRpb24tdGhpY2tuZXNzOiAycHg7XFxufVxcblxcbi50YXNrLWhlYWRlci1yaWdodCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA2cHg7XFxufVxcblxcbmJ1dHRvbi5idG4tcHJvamVjdC1tb3ZlLWRvd24sXFxuYnV0dG9uLmJ0bi1wcm9qZWN0LW1vdmUtdXAsXFxuYnV0dG9uLmJ0bi1wcm9qZWN0LWRlbGV0ZSxcXG5idXR0b24uYnRuLXRhc2stZGVsZXRlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC10aHJlZSk7XFxuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yLXR3byk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgcGFkZGluZzogMHB4IDEwcHg7XFxufVxcblxcbmJ1dHRvbi5idG4tcHJvamVjdC1tb3ZlLWRvd246aG92ZXIsXFxuYnV0dG9uLmJ0bi1wcm9qZWN0LW1vdmUtdXA6aG92ZXIsXFxuYnV0dG9uLmJ0bi1wcm9qZWN0LWRlbGV0ZTpob3ZlcixcXG5idXR0b24uYnRuLXRhc2stZGVsZXRlOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG59XFxuXFxuLnByb2plY3QtZGV0YWlscyA+IGRpdixcXG4udGFzay1kZXRhaWxzID4gZGl2IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvci10d28pO1xcbiAgZm9udC1zaXplOiBtZWRpdW07XFxuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDlweCA5cHg7XFxuICBwYWRkaW5nOiAxMHB4IDE1cHggMTBweDtcXG59XFxuXFxuLnRhc2stZGV0YWlscyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxudGV4dGFyZWEuaW5wdXQtdGFzay1kZXNjcmlwdGlvbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvci10d28pO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJRdWlja3NhbmRcXFwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIHBhZGRpbmc6IDEwcHggMTVweCAxMHB4O1xcbn1cXG5cXG50ZXh0YXJlYS5pbnB1dC10YXNrLWRlc2NyaXB0aW9uLmNvbXBsZXRlZCB7XFxuICBjb2xvcjogZ3JheTtcXG59XFxuXFxuLnByb2plY3QtZGV0YWlscyA+IC50YXNrLWJvdHRvbS1yb3csXFxuLnRhc2stZGV0YWlscyA+IC50YXNrLWJvdHRvbS1yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogNDBweDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLXR3byk7XFxuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDlweCA5cHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5pbnB1dC5pbnB1dC10YXNrLWR1ZS1kYXRlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3ItdHdvKTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWFjY2VudC1jb2xvci10aHJlZSk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgcGFkZGluZzogMnB4O1xcbn1cXG5cXG5pbnB1dFtkaXNhYmxlZF0uaW5wdXQtdGFzay1kdWUtZGF0ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWluYWN0aXZlLWNvbG9yKTtcXG59XFxuXFxuc3Bhbi5wcmlvcml0eS1sYWJlbCB7XFxuICBwYWRkaW5nOiAwcHggNXB4IDBweCAwcHg7XFxufVxcblxcbmJ1dHRvbi5idG4tdGFzay1wcmlvcml0eSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtdGhyZWUpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgbWFyZ2luOiAtOHB4O1xcbn1cXG5cXG5idXR0b24uYnRuLXRhc2stcHJpb3JpdHkubG93OjphZnRlciB7XFxuICBjb250ZW50OiBcXFwi4qykXFxcIjtcXG4gIGNvbG9yOiBwYWxlZ3JlZW47XFxuICBmb250LXNpemU6IGxhcmdlO1xcbn1cXG5cXG5idXR0b24uYnRuLXRhc2stcHJpb3JpdHkubWVkaXVtOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwi4qykXFxcIjtcXG4gIGNvbG9yOiBnb2xkO1xcbiAgZm9udC1zaXplOiBsYXJnZTtcXG59XFxuXFxuYnV0dG9uLmJ0bi10YXNrLXByaW9yaXR5LmhpZ2g6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCLirKRcXFwiO1xcbiAgY29sb3I6IGNvcmFsO1xcbiAgZm9udC1zaXplOiBsYXJnZTtcXG59XFxuXFxuLnByaW9yaXR5LWhpZ2gge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpb3JpdHktaGlnaC1jb2xvcik7XFxufVxcblxcbi50YXNrLWRheXMtcmVtYWluaW5nLFxcbi50YXNrLXByaW9yaXR5IHtcXG4gIGNvbG9yOiB2YXIoLS1pbmFjdGl2ZS1jb2xvci10d28pO1xcbiAgZm9udC1zaXplOiBzbWFsbDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmJ1dHRvbi5idG4tYmFjay10by1hbGwtcHJvamVjdHMge1xcbiAgaGVpZ2h0OiA0MnB4O1xcbiAgd2lkdGg6IDQycHg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDUwcHg7XFxuICBsZWZ0OiAyMHB4O1xcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWFjY2VudC1jb2xvci10d28pO1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yLXR3byk7XFxuICBwYWRkaW5nOiAycHggMnB4IDBweCAwcHg7XFxufVxcblxcbmJ1dHRvbi5idG4tbmV3LWl0ZW0ge1xcbiAgaGVpZ2h0OiA0MnB4O1xcbiAgd2lkdGg6IDQycHg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDUwcHg7XFxuICByaWdodDogMjBweDtcXG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3ItdHdvKTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvci10d28pO1xcbiAgcGFkZGluZzogMHB4IDEwcHggMHB4O1xcbn1cXG5cXG5mb290ZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuZm9vdGVyIGEge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJFbGVjdHJvbGl6ZVxcXCI7XFxuICBjb2xvcjogZ3JheTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCB7IFRhc2sgfSBmcm9tIFwiLi90YXNrXCI7XG5pbXBvcnQgeyByZW5kZXJCcmVhZGNydW1iTmF2LCBjbGVhckl0ZW1Db250YWluZXIsIHJlbmRlckFsbFByb2plY3RzLCByZW5kZXJUYXNrcywgc2hvd1Rhc2tWaWV3QnV0dG9ucywgaGlkZVRhc2tWaWV3QnV0dG9ucywgc2hvd1RvcE9mUGFnZSwgYXV0b0FkanVzdEhlaWdodCx0b2dnbGVUYXNrRWxlbWVudHNPblN0YXR1c0NoYW5nZSwgY2xpY2tIYW5kbGVyQ29tcGxldGVkVGFza0NhcmQgfSBmcm9tIFwiLi92aWV3XCI7IC8vIHByZXR0aWVyLWlnbm9yZVxuaW1wb3J0IHsgc2F2ZVRvTG9jYWxTdG9yYWdlLCBsb2FkRnJvbUxvY2FsU3RvcmFnZSB9IGZyb20gXCIuL2xvY2FsU3RvcmFnZVwiO1xuaW1wb3J0IHsgZGVtb1Byb2plY3RzIH0gZnJvbSBcIi4vZGVtb0RhdGFcIjtcblxubGV0IHByb2plY3RzID0gbG9hZEZyb21Mb2NhbFN0b3JhZ2UoKSB8fCBkZW1vUHJvamVjdHM7XG5sZXQgdGFyZ2V0UHJvamVjdDtcbmxldCB2aWV3O1xuXG5jb25zdCBsb2FkUHJvamVjdHNWaWV3ID0gZnVuY3Rpb24gKCkge1xuICB2aWV3ID0gXCJwcm9qZWN0c1wiO1xuICByZW5kZXJCcmVhZGNydW1iTmF2KHZpZXcpO1xuICBjbGVhckl0ZW1Db250YWluZXIoKTtcbiAgcmVuZGVyQWxsUHJvamVjdHMocHJvamVjdHMpO1xuICBoaWRlVGFza1ZpZXdCdXR0b25zKCk7XG4gIGlucHV0SGFuZGxlclByb2plY3RUaXRsZSgpO1xuICBjbGlja0hhbmRsZXJEaXZQcm9qZWN0RGV0YWlscygpO1xuICBjbGlja0hhbmRsZXJCdG5EZWxldGVQcm9qZWN0KCk7XG59O1xuXG5jb25zdCBsb2FkVGFza3NWaWV3ID0gZnVuY3Rpb24gKHRhcmdldFByb2plY3QpIHtcbiAgdmlldyA9IFwidGFza3NcIjtcbiAgcmVuZGVyQnJlYWRjcnVtYk5hdih2aWV3LCB0YXJnZXRQcm9qZWN0KTtcbiAgY2xlYXJJdGVtQ29udGFpbmVyKCk7XG4gIHJlbmRlclRhc2tzKHRhcmdldFByb2plY3QudGFza3MpO1xuICBzaG93VGFza1ZpZXdCdXR0b25zKCk7XG4gIGNsaWNrSGFuZGxlckJ0blZpZXdBbGxQcm9qZWN0cygpO1xuICBjbGlja0hhbmRsZXJCdG5CYWNrVG9BbGxQcm9qZWN0cygpO1xuICBjbGlja0hhbmRsZXJDb21wbGV0ZWRUYXNrQ2FyZCgpO1xuICBjbGlja0hhbmRsZXJCdG5UYXNrU3RhdHVzKHRhcmdldFByb2plY3QpO1xuICBpbnB1dEhhbmRsZXJUYXNrVGl0bGUodGFyZ2V0UHJvamVjdCk7XG4gIGNsaWNrSGFuZGxlckJ0bkRlbGV0ZVRhc2soKTtcbiAgaW5wdXRIYW5kbGVyVGFza0Rlc2NyaXB0aW9uKHRhcmdldFByb2plY3QpO1xuICBpbnB1dEhhbmRsZXJUYXNrRHVlRGF0ZSh0YXJnZXRQcm9qZWN0KTtcbiAgc2hvd1RvcE9mUGFnZSgpO1xufTtcblxuY29uc3QgY3JlYXRlTmV3UHJvamVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KFwiXCIsIFwiXCIsIFtdKTtcbiAgcHJvamVjdC5pZCA9IGBQJHtuZXcgRGF0ZSgpLmdldFRpbWUoKX1gO1xuICBwcm9qZWN0c1twcm9qZWN0LmlkXSA9IHByb2plY3Q7XG4gIHNhdmVUb0xvY2FsU3RvcmFnZSgpO1xuICBjbGVhckl0ZW1Db250YWluZXIoKTtcbiAgbG9hZFByb2plY3RzVmlldygpO1xuICBjb25zdCBpbnB1dFByb2plY3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgXCIuaW5wdXQtcHJvamVjdC10aXRsZVwiXG4gIClbMF07XG4gIGlucHV0UHJvamVjdFRpdGxlLmZvY3VzKCk7XG59O1xuXG5jb25zdCBkZWxldGVQcm9qZWN0ID0gZnVuY3Rpb24gKGUpIHtcbiAgY29uc3QgcHJvamVjdElkID0gZS50YXJnZXQuY2xvc2VzdChcIi5wcm9qZWN0LWNhcmRcIikuZGF0YXNldC5wcm9qZWN0SWQ7XG4gIGNvbnN0IHByb2plY3RUaXRsZSA9IHByb2plY3RzW3Byb2plY3RJZF0udGl0bGU7XG4gIGNvbnN0IGNvbmZpcm1EZWxldGUgPSBjb25maXJtKFxuICAgIHByb2plY3RUaXRsZVxuICAgICAgPyBgJHtwcm9qZWN0VGl0bGV9IC0gRGVsZXRlIHRoaXMgcHJvamVjdD9gXG4gICAgICA6IFwiRGVsZXRlIHRoaXMgcHJvamVjdD9cIlxuICApO1xuICBpZiAoIWNvbmZpcm1EZWxldGUpIHJldHVybjtcbiAgZGVsZXRlIHByb2plY3RzW3Byb2plY3RJZF07XG4gIHNhdmVUb0xvY2FsU3RvcmFnZSgpO1xuICBsb2FkUHJvamVjdHNWaWV3KCk7XG59O1xuXG5jb25zdCBjcmVhdGVOZXdUYXNrID0gZnVuY3Rpb24gKCkge1xuICBsZXQgaWQgPSBgVCR7bmV3IERhdGUoKS5nZXRUaW1lKCl9YDtcbiAgdGFyZ2V0UHJvamVjdC5hZGRUYXNrKFxuICAgIG5ldyBUYXNrKGlkLCBcIlwiLCBcIlwiLCBcIlwiLCBcInBlbmRpbmdcIiwgXCJtZWRpdW1cIiwgXCJlbmFibGVkXCIpXG4gICk7XG4gIHNhdmVUb0xvY2FsU3RvcmFnZSgpO1xuICBjbGVhckl0ZW1Db250YWluZXIoKTtcbiAgbG9hZFRhc2tzVmlldyh0YXJnZXRQcm9qZWN0KTtcbiAgY29uc3QgaW5wdXRUYXNrVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlucHV0LXRhc2stdGl0bGVcIik7XG4gIGlucHV0VGFza1RpdGxlLmZvY3VzKCk7XG59O1xuXG5jb25zdCBkZWxldGVUYXNrID0gZnVuY3Rpb24gKGUpIHtcbiAgY29uc3QgdGFza0lkID0gZS50YXJnZXQuY2xvc2VzdChcIi50YXNrLWNhcmRcIikuZGF0YXNldC50YXNrSWQ7XG4gIGNvbnN0IHRhc2tUaXRsZSA9IHRhcmdldFByb2plY3QudGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmlkID09PSB0YXNrSWQpWzBdXG4gICAgLnRpdGxlO1xuICBjb25zdCBjb25maXJtRGVsZXRlID0gY29uZmlybShcbiAgICB0YXNrVGl0bGUgPyBgJHt0YXNrVGl0bGV9IC0gRGVsZXRlIHRoaXMgdGFzaz9gIDogXCJEZWxldGUgdGhpcyB0YXNrP1wiXG4gICk7XG4gIGlmICghY29uZmlybURlbGV0ZSkgcmV0dXJuO1xuICB0YXJnZXRQcm9qZWN0LmRlbGV0ZVRhc2sodGFza0lkKTtcbiAgc2F2ZVRvTG9jYWxTdG9yYWdlKCk7XG4gIGxvYWRUYXNrc1ZpZXcodGFyZ2V0UHJvamVjdCk7XG59O1xuXG4vLyBTYXZlIGZ1bmN0aW9ucyB0cmlnZ2VyZWQgYnkgaW5wdXRzL2VkaXRzXG5cbmNvbnN0IGF1dG9TYXZlUHJvamVjdFRpdGxlQ2hhbmdlcyA9IGZ1bmN0aW9uIChwcm9qZWN0SWQsIHRpdGxlKSB7XG4gIHByb2plY3RzW3Byb2plY3RJZF0udGl0bGUgPSB0aXRsZS52YWx1ZTtcbiAgc2F2ZVRvTG9jYWxTdG9yYWdlKCk7XG59O1xuXG5jb25zdCBhdXRvU2F2ZVRhc2tTdGF0dXNDaGFuZ2VzID0gZnVuY3Rpb24gKHRhcmdldFByb2plY3QsIHRhc2tJZCwgYnV0dG9uKSB7XG4gIHRhcmdldFByb2plY3QudGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIGlmICh0YXNrLmlkID09PSB0YXNrSWQpIHtcbiAgICAgIHRhc2suc3RhdHVzID09PSBcInBlbmRpbmdcIlxuICAgICAgICA/ICh0YXNrLnN0YXR1cyA9IFwiY29tcGxldGVkXCIpXG4gICAgICAgIDogKHRhc2suc3RhdHVzID0gXCJwZW5kaW5nXCIpO1xuXG4gICAgICB0YXNrLmlucHV0U3RhdHVzID09PSBcImVuYWJsZWRcIlxuICAgICAgICA/ICh0YXNrLmlucHV0U3RhdHVzID0gXCJkaXNhYmxlZFwiKVxuICAgICAgICA6ICh0YXNrLmlucHV0U3RhdHVzID0gXCJlbmFibGVkXCIpO1xuXG4gICAgICBidXR0b24uYmx1cigpO1xuXG4gICAgICB0b2dnbGVUYXNrRWxlbWVudHNPblN0YXR1c0NoYW5nZShidXR0b24pO1xuXG4gICAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgYXV0b1NhdmVUYXNrVGl0bGVDaGFuZ2VzID0gZnVuY3Rpb24gKHRhcmdldFByb2plY3QsIHRhc2tJZCwgdGFza1RpdGxlKSB7XG4gIHRhcmdldFByb2plY3QudGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIGlmICh0YXNrLmlkID09PSB0YXNrSWQpIHRhc2sudGl0bGUgPSB0YXNrVGl0bGUudmFsdWU7XG4gICAgc2F2ZVRvTG9jYWxTdG9yYWdlKCk7XG4gIH0pO1xufTtcblxuLy8gcHJldHRpZXItaWdub3JlXG5jb25zdCBhdXRvU2F2ZVRhc2tEZXNjcmlwdGlvbkNoYW5nZXMgPSBmdW5jdGlvbiAoIHRhcmdldFByb2plY3QsIHRhc2tJZCwgdGFza0Rlc2NyaXB0aW9uRWwpIHtcbiAgdGFyZ2V0UHJvamVjdC50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgaWYgKHRhc2suaWQgPT09IHRhc2tJZCkgdGFzay5kZXNjcmlwdGlvbiA9IHRhc2tEZXNjcmlwdGlvbkVsLnZhbHVlO1xuICAgIHNhdmVUb0xvY2FsU3RvcmFnZSgpO1xuICB9KTtcbn07XG5cbi8vIHByZXR0aWVyLWlnbm9yZVxuY29uc3QgYXV0b1NhdmVUYXNrRHVlRGF0ZUNoYW5nZXMgPSBmdW5jdGlvbiAodGFyZ2V0UHJvamVjdCwgdGFza0lkLCB0YXNrRHVlRGF0ZUVsKSB7XG4gIHRhcmdldFByb2plY3QudGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIGlmICh0YXNrLmlkID09PSB0YXNrSWQpIHRhc2suZHVlRGF0ZSA9IHRhc2tEdWVEYXRlRWwudmFsdWU7XG4gICAgc2F2ZVRvTG9jYWxTdG9yYWdlKCk7XG4gIH0pO1xufTtcblxuLy8gcHJldHRpZXItaWdub3JlXG5jb25zdCB1cGRhdGVEYXlzUmVtYWluaW5nID0gZnVuY3Rpb24gKHRhcmdldFByb2plY3QsIHRhc2tJZCwgZSkge1xuICBjb25zdCB0YXNrRGF5c1JlbWFpbmluZ0VsID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZGF5cy1yZW1haW5pbmdcIik7XG4gIHRhcmdldFByb2plY3QudGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIGlmICh0YXNrLmlkID09PSB0YXNrSWQpIHRhc2tEYXlzUmVtYWluaW5nRWwuaW5uZXJIVE1MID0gdGFzay5nZXREYXlzUmVtYWluaW5nKCk7XG4gIH0pXG59O1xuXG4vLyBFdmVudCBoYW5kbGVycyAtIE5hdmlnYXRpb25cblxuY29uc3QgY2xpY2tIYW5kbGVyRGl2UHJvamVjdERldGFpbHMgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHByb2plY3REZXRhaWxzTkwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3QtZGV0YWlsc1wiKTtcbiAgcHJvamVjdERldGFpbHNOTC5mb3JFYWNoKChwcm9qZWN0RGV0YWlsKSA9PiB7XG4gICAgcHJvamVjdERldGFpbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY29uc3QgcHJvamVjdENhcmRJZCA9IHByb2plY3REZXRhaWwucGFyZW50RWxlbWVudC5kYXRhc2V0LnByb2plY3RJZDtcbiAgICAgIHRhcmdldFByb2plY3QgPSBwcm9qZWN0c1twcm9qZWN0Q2FyZElkXTtcbiAgICAgIGxvYWRUYXNrc1ZpZXcodGFyZ2V0UHJvamVjdCk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3QgY2xpY2tIYW5kbGVyQnRuVmlld0FsbFByb2plY3RzID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBidG5WaWV3QWxsUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi12aWV3LWFsbC1wcm9qZWN0c1wiKTtcbiAgYnRuVmlld0FsbFByb2plY3RzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbG9hZFByb2plY3RzVmlldygpO1xuICB9KTtcbn07XG5cbmNvbnN0IGNsaWNrSGFuZGxlckJ0bkJhY2tUb0FsbFByb2plY3RzID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBidG5CYWNrVG9BbGxQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLWJhY2stdG8tYWxsLXByb2plY3RzXCIpOyAvLyBwcmV0dGllci1pZ25vcmVcbiAgYnRuQmFja1RvQWxsUHJvamVjdHMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBsb2FkUHJvamVjdHNWaWV3KCk7XG4gIH0pO1xufTtcblxuLy8gRXZlbnQgaGFuZGxlcnMgLSBDcmVhdGUgYW5kIGRlbGV0ZSBpdGVtc1xuXG5jb25zdCBjbGlja0hhbmRsZXJCdG5OZXdJdGVtID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBidG5OZXdJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG4tbmV3LWl0ZW1cIik7XG4gIGJ0bk5ld0l0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpZiAodmlldyA9PT0gXCJwcm9qZWN0c1wiKSBjcmVhdGVOZXdQcm9qZWN0KCk7XG4gICAgaWYgKHZpZXcgPT09IFwidGFza3NcIikgY3JlYXRlTmV3VGFzaygpO1xuICB9KTtcbn07XG5cbmNvbnN0IGNsaWNrSGFuZGxlckJ0bkRlbGV0ZVByb2plY3QgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGRlbGV0ZVByb2plY3RCdXR0b25zTkwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgIFwiLmJ0bi1wcm9qZWN0LWRlbGV0ZVwiXG4gICk7XG4gIGRlbGV0ZVByb2plY3RCdXR0b25zTkwuZm9yRWFjaCgoYnV0dG9uKSA9PlxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGVsZXRlUHJvamVjdC5iaW5kKHRoaXMpKVxuICApO1xufTtcblxuY29uc3QgY2xpY2tIYW5kbGVyQnRuRGVsZXRlVGFzayA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgZGVsZXRlVGFza0J1dHRvbnNOTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYnRuLXRhc2stZGVsZXRlXCIpO1xuICBkZWxldGVUYXNrQnV0dG9uc05MLmZvckVhY2goKGJ1dHRvbikgPT5cbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRlbGV0ZVRhc2suYmluZCh0aGlzKSlcbiAgKTtcbn07XG5cbi8vIEV2ZW50IGhhbmRsZXJzIC0gSW5wdXRzL2VkaXRzIG1hZGUgdG8gcHJvamVjdHMgYW5kIHRhc2tzXG5cbmNvbnN0IGlucHV0SGFuZGxlclByb2plY3RUaXRsZSA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgcHJvamVjdFRpdGxlc05MID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pbnB1dC1wcm9qZWN0LXRpdGxlXCIpO1xuXG4gIGlmICghcHJvamVjdFRpdGxlc05MKSByZXR1cm47XG5cbiAgcHJvamVjdFRpdGxlc05MLmZvckVhY2goKHRpdGxlKSA9PlxuICAgIHRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xuICAgICAgY29uc3QgcHJvamVjdElkID0gZS50YXJnZXQuY2xvc2VzdChcIi5wcm9qZWN0LWNhcmRcIikuZGF0YXNldC5wcm9qZWN0SWQ7XG4gICAgICBhdXRvU2F2ZVByb2plY3RUaXRsZUNoYW5nZXMocHJvamVjdElkLCB0aXRsZSk7XG4gICAgfSlcbiAgKTtcbn07XG5cbmNvbnN0IGNsaWNrSGFuZGxlckJ0blRhc2tTdGF0dXMgPSBmdW5jdGlvbiAodGFyZ2V0UHJvamVjdCkge1xuICBjb25zdCBidG5UYXNrUGVuZGluZ05MID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5idG4tdGFzay1zdGF0dXNcIik7XG4gIGJ0blRhc2tQZW5kaW5nTkwuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgY29uc3QgdGFza0lkID0gZS50YXJnZXQuY2xvc2VzdChcIi50YXNrLWNhcmRcIikuZGF0YXNldC50YXNrSWQ7XG4gICAgICBjb25zb2xlLmxvZyh0YXNrSWQpO1xuICAgICAgYXV0b1NhdmVUYXNrU3RhdHVzQ2hhbmdlcyh0YXJnZXRQcm9qZWN0LCB0YXNrSWQsIGJ1dHRvbik7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IGlucHV0SGFuZGxlclRhc2tUaXRsZSA9IGZ1bmN0aW9uICh0YXJnZXRQcm9qZWN0KSB7XG4gIGNvbnN0IHRhc2tUaXRsZXNOTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaW5wdXQtdGFzay10aXRsZVwiKTtcblxuICBpZiAoIXRhc2tUaXRsZXNOTCkgcmV0dXJuO1xuXG4gIHRhc2tUaXRsZXNOTC5mb3JFYWNoKCh0aXRsZSkgPT5cbiAgICB0aXRsZS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcbiAgICAgIGNvbnN0IHRhc2tJZCA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIudGFzay1jYXJkXCIpLmRhdGFzZXQudGFza0lkO1xuICAgICAgYXV0b1NhdmVUYXNrVGl0bGVDaGFuZ2VzKHRhcmdldFByb2plY3QsIHRhc2tJZCwgdGl0bGUpO1xuICAgIH0pXG4gICk7XG59O1xuXG5jb25zdCBpbnB1dEhhbmRsZXJUYXNrRGVzY3JpcHRpb24gPSBmdW5jdGlvbiAodGFyZ2V0UHJvamVjdCkge1xuICBjb25zdCB0YXNrRGVzY3JpcHRpb25zTkwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgIFwiLmlucHV0LXRhc2stZGVzY3JpcHRpb25cIlxuICApO1xuXG4gIGlmICghdGFza0Rlc2NyaXB0aW9uc05MKSByZXR1cm47XG5cbiAgdGFza0Rlc2NyaXB0aW9uc05MLmZvckVhY2goKHRhc2tEZXNjcmlwdGlvbkVsKSA9PiB7XG4gICAgYXV0b0FkanVzdEhlaWdodCh0YXNrRGVzY3JpcHRpb25FbCk7XG5cbiAgICB0YXNrRGVzY3JpcHRpb25FbC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcbiAgICAgIGNvbnN0IHRhc2tJZCA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIudGFzay1jYXJkXCIpLmRhdGFzZXQudGFza0lkO1xuICAgICAgYXV0b1NhdmVUYXNrRGVzY3JpcHRpb25DaGFuZ2VzKHRhcmdldFByb2plY3QsIHRhc2tJZCwgdGFza0Rlc2NyaXB0aW9uRWwpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IGlucHV0SGFuZGxlclRhc2tEdWVEYXRlID0gZnVuY3Rpb24gKHRhcmdldFByb2plY3QpIHtcbiAgY29uc3QgdGFza0R1ZURhdGVOTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaW5wdXQtdGFzay1kdWUtZGF0ZVwiKTtcblxuICBpZiAoIXRhc2tEdWVEYXRlTkwpIHJldHVybjtcblxuICB0YXNrRHVlRGF0ZU5MLmZvckVhY2goKHRhc2tEdWVEYXRlRWwpID0+XG4gICAgdGFza0R1ZURhdGVFbC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcbiAgICAgIGNvbnN0IHRhc2tJZCA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIudGFzay1jYXJkXCIpLmRhdGFzZXQudGFza0lkO1xuICAgICAgYXV0b1NhdmVUYXNrRHVlRGF0ZUNoYW5nZXModGFyZ2V0UHJvamVjdCwgdGFza0lkLCB0YXNrRHVlRGF0ZUVsKTtcbiAgICAgIHVwZGF0ZURheXNSZW1haW5pbmcodGFyZ2V0UHJvamVjdCwgdGFza0lkLCBlKTtcbiAgICB9KVxuICApO1xufTtcblxuLy8gSW5pdGlhbGl6ZSBhcHBcbmNvbnN0IGluaXRBcHAgPSBmdW5jdGlvbiAoKSB7XG4gIGxvYWRQcm9qZWN0c1ZpZXcoKTtcbiAgY2xpY2tIYW5kbGVyQnRuTmV3SXRlbSgpO1xufTtcblxuZXhwb3J0IHsgcHJvamVjdHMsIGluaXRBcHAgfTtcbiIsImV4cG9ydCBjbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IoaWQsIHRpdGxlLCB0YXNrcykge1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy50YXNrcyA9IHRhc2tzO1xuICB9XG5cbiAgYWRkVGFzayh0YXNrKSB7XG4gICAgdGhpcy50YXNrcy5wdXNoKHRhc2spO1xuICB9XG5cbiAgZGVsZXRlVGFzayh0YXNrSWQpIHtcbiAgICBjb25zdCByZW1haW5pbmdUYXNrcyA9IHRoaXMudGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmlkICE9PSB0YXNrSWQpO1xuICAgIHRoaXMudGFza3MgPSByZW1haW5pbmdUYXNrcztcbiAgfVxufVxuIiwiaW1wb3J0IHsgZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5cbmV4cG9ydCBjbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IoaWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgc3RhdHVzLCBwcmlvcml0eSwgaW5wdXRTdGF0dXMpIHtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLmlucHV0U3RhdHVzID0gaW5wdXRTdGF0dXM7XG4gIH1cblxuICBnZXREYXlzUmVtYWluaW5nKCkge1xuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCBkdWVEYXRlID0gRGF0ZS5wYXJzZSh0aGlzLmR1ZURhdGUpO1xuXG4gICAgaWYgKCF0aGlzLmR1ZURhdGUpIHJldHVybiBgbm8gZHVlIGRhdGVgO1xuXG4gICAgY29uc3QgZGF5c1JlbWFpbmluZyA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhkdWVEYXRlLCB0b2RheSk7XG5cbiAgICBpZiAoZGF5c1JlbWFpbmluZyA8IC0xKSByZXR1cm4gYGR1ZSAkey1kYXlzUmVtYWluaW5nfSBkYXlzIGFnb2A7XG4gICAgaWYgKGRheXNSZW1haW5pbmcgPT09IC0xKSByZXR1cm4gYGR1ZSAxIGRheSBhZ29gO1xuICAgIGlmIChkYXlzUmVtYWluaW5nID09PSAwKSByZXR1cm4gYGR1ZSB0b2RheWA7XG4gICAgaWYgKGRheXNSZW1haW5pbmcgPT09IDEpIHJldHVybiBgZHVlIGluIDEgZGF5YDtcbiAgICBpZiAoZGF5c1JlbWFpbmluZyA+IDEpIHJldHVybiBgZHVlIGluICR7ZGF5c1JlbWFpbmluZ30gZGF5c2A7XG4gIH1cbn1cbiIsImNvbnN0IGJ0blNvcnRCeUR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1kdWUtZGF0ZVwiKTtcbmNvbnN0IGJ0blNvcnRCeVByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG4tcHJpb3JpdHlcIik7XG5jb25zdCBicmVhZGNydW1iTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5icmVhZGNydW1iLW5hdlwiKTtcbmNvbnN0IGl0ZW1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLml0ZW0tY29udGFpbmVyXCIpO1xuY29uc3QgYnRuQmFja1RvQWxsUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1iYWNrLXRvLWFsbC1wcm9qZWN0c1wiKTsgLy8gcHJldHRpZXItaWdub3JlXG5cbmNvbnN0IHJlbmRlckJyZWFkY3J1bWJOYXYgPSBmdW5jdGlvbiAodmlldywgY3VycmVudFByb2plY3QpIHtcbiAgaWYgKHZpZXcgPT09IFwicHJvamVjdHNcIikge1xuICAgIGJyZWFkY3J1bWJOYXYuZm9yRWFjaCgoZWxlbWVudCkgPT4gKGVsZW1lbnQuaW5uZXJIVE1MID0gYGApKTtcbiAgICBicmVhZGNydW1iTmF2LmZvckVhY2goXG4gICAgICAoZWxlbWVudCkgPT5cbiAgICAgICAgKGVsZW1lbnQuaW5uZXJIVE1MID0gYFxuICA8c3BhbiBjbGFzcz1cImFsbC1wcm9qZWN0c1wiPkFsbCBQcm9qZWN0czwvc3Bhbj5cbiAgPHNwYW4gY2xhc3M9XCJzZXBhcmF0b3JcIj4+PC9zcGFuPlxuICBgKVxuICAgICk7XG4gIH1cblxuICBpZiAodmlldyA9PT0gXCJ0YXNrc1wiKSB7XG4gICAgYnJlYWRjcnVtYk5hdi5mb3JFYWNoKChlbGVtZW50KSA9PiAoZWxlbWVudC5pbm5lckhUTUwgPSBgYCkpO1xuICAgIGJyZWFkY3J1bWJOYXYuZm9yRWFjaChcbiAgICAgIChlbGVtZW50KSA9PlxuICAgICAgICAoZWxlbWVudC5pbm5lckhUTUwgPSBgXG4gIDxidXR0b24gY2xhc3M9XCJidG4tdmlldy1hbGwtcHJvamVjdHNcIj5BbGwgUHJvamVjdHM8L2J1dHRvbj5cbiAgPHNwYW4gY2xhc3M9XCJzZXBhcmF0b3JcIj4+PC9zcGFuPlxuICA8c3BhbiBjbGFzcz1cImN1cnJlbnQtcHJvamVjdFwiPiR7Y3VycmVudFByb2plY3QudGl0bGV9PC9zcGFuPlxuICBgKVxuICAgICk7XG4gIH1cbn07XG5cbmNvbnN0IGNsZWFySXRlbUNvbnRhaW5lciA9IGZ1bmN0aW9uICgpIHtcbiAgaXRlbUNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xufTtcblxuY29uc3QgcmVuZGVyUHJvamVjdENhcmQgPSBmdW5jdGlvbiAocHJvamVjdCkge1xuICBjb25zdCByZW5kZXJQcm9qZWN0RGV0YWlscyA9IGZ1bmN0aW9uIChwcm9qZWN0KSB7XG4gICAgbGV0IHRhc2tDb3VudCA9IDA7XG4gICAgcHJvamVjdC50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICBpZiAodGFzay5zdGF0dXMgPT09IFwicGVuZGluZ1wiKSB0YXNrQ291bnQgKz0gMTtcbiAgICB9KTtcbiAgICByZXR1cm4gYCR7dGFza0NvdW50fSBwZW5kaW5nIHRhc2tzYDtcbiAgfTtcblxuICBjb25zdCBwcm9qZWN0Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByb2plY3RDYXJkLmNsYXNzTmFtZSA9IFwicHJvamVjdC1jYXJkXCI7XG4gIHByb2plY3RDYXJkLmRhdGFzZXQucHJvamVjdElkID0gcHJvamVjdC5pZDtcbiAgcHJvamVjdENhcmQuaW5uZXJIVE1MID0gYFxuICA8ZGl2IGNsYXNzPVwicHJvamVjdC1oZWFkZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1oZWFkZXItbGVmdFwiPlxuICAgICAgPGlucHV0IGNsYXNzPVwiaW5wdXQtcHJvamVjdC10aXRsZVwiIHZhbHVlPVwiJHtcbiAgICAgICAgcHJvamVjdC50aXRsZVxuICAgICAgfVwiIG1heGxlbmd0aD1cIjI4XCIvPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWhlYWRlci1yaWdodFwiPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bi1wcm9qZWN0LW1vdmUtZG93blwiPuGQrzwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bi1wcm9qZWN0LW1vdmUtdXBcIj7hkLE8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJidG4tcHJvamVjdC1kZWxldGVcIj5YPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwicHJvamVjdC1kZXRhaWxzXCI+XG4gICAgPGRpdj5cbiAgICAgICR7cmVuZGVyUHJvamVjdERldGFpbHMocHJvamVjdCl9XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICBgO1xuXG4gIHJldHVybiBwcm9qZWN0Q2FyZDtcbn07XG5cbi8vIHByZXR0aWVyLWlnbm9yZVxuY29uc3QgcmVuZGVyVGFza0NhcmQgPSBmdW5jdGlvbiAodGFzaykge1xuICBjb25zdCB0YXNrQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRhc2tDYXJkLmNsYXNzTmFtZSA9IFwidGFzay1jYXJkXCI7XG4gIHRhc2tDYXJkLmRhdGFzZXQudGFza0lkID0gdGFzay5pZDtcbiAgdGFza0NhcmQuY2xhc3NMaXN0LmFkZChgJHt0YXNrLnN0YXR1c31gKTtcbiAgdGFza0NhcmQuaW5uZXJIVE1MID0gYFxuICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWhlYWRlciAke3Rhc2suc3RhdHVzfVwiPlxuICAgICAgPGRpdiBjbGFzcz1cInRhc2staGVhZGVyLWxlZnRcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bi10YXNrLXN0YXR1cyAke3Rhc2suc3RhdHVzfVwiPjwvYnV0dG9uPlxuICAgICAgICA8aW5wdXQgY2xhc3M9XCJpbnB1dC10YXNrLXRpdGxlICR7dGFzay5zdGF0dXN9XCIgdmFsdWU9XCIke3Rhc2sudGl0bGV9XCIgJHt0YXNrLmlucHV0U3RhdHVzfS8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWhlYWRlci1yaWdodFwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuLXRhc2stZGVsZXRlXCI+WDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInRhc2stZGV0YWlscyAke3Rhc2suc3RhdHVzfVwiPlxuICAgICAgPHRleHRhcmVhIGNsYXNzPVwiaW5wdXQtdGFzay1kZXNjcmlwdGlvbiAke3Rhc2suc3RhdHVzfVwiIG5hbWU9XCJ0YXNrLWRlc2NyaXB0aW9uXCIgJHt0YXNrLmlucHV0U3RhdHVzfT4ke3Rhc2suZGVzY3JpcHRpb259PC90ZXh0YXJlYT5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWJvdHRvbS1yb3dcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgY2xhc3M9XCJpbnB1dC10YXNrLWR1ZS1kYXRlXCIgdmFsdWU9XCIke3Rhc2suZHVlRGF0ZX1cIiAke3Rhc2suaW5wdXRTdGF0dXN9Lz5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stZGF5cy1yZW1haW5pbmdcIj4ke3Rhc2suZ2V0RGF5c1JlbWFpbmluZygpfTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1wcmlvcml0eVwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJpb3JpdHktbGFiZWxcIj4ke3Rhc2sucHJpb3JpdHl9PC9zcGFuPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4tdGFzay1wcmlvcml0eSAke3Rhc2sucHJpb3JpdHl9XCI+PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGA7XG5cbiAgcmV0dXJuIHRhc2tDYXJkO1xufTtcblxuY29uc3QgcmVuZGVyQWxsUHJvamVjdHMgPSBmdW5jdGlvbiAocHJvamVjdHMpIHtcbiAgZm9yIChsZXQgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHByb2plY3RzKSkge1xuICAgIGl0ZW1Db250YWluZXIucHJlcGVuZChyZW5kZXJQcm9qZWN0Q2FyZCh2YWx1ZSkpO1xuICB9XG59O1xuY29uc3QgcmVuZGVyVGFza3MgPSBmdW5jdGlvbiAodGFyZ2V0UHJvamVjdFRhc2tzKSB7XG4gIGZvciAobGV0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyh0YXJnZXRQcm9qZWN0VGFza3MpKSB7XG4gICAgaXRlbUNvbnRhaW5lci5wcmVwZW5kKHJlbmRlclRhc2tDYXJkKHZhbHVlKSk7XG4gIH1cbn07XG5cbmNvbnN0IHNob3dUYXNrVmlld0J1dHRvbnMgPSBmdW5jdGlvbiAoKSB7XG4gIGJ0blNvcnRCeUR1ZURhdGUuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgYnRuU29ydEJ5UHJpb3JpdHkuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgYnRuQmFja1RvQWxsUHJvamVjdHMuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbn07XG5cbmNvbnN0IGhpZGVUYXNrVmlld0J1dHRvbnMgPSBmdW5jdGlvbiAoKSB7XG4gIGJ0blNvcnRCeUR1ZURhdGUuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgYnRuU29ydEJ5UHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgYnRuQmFja1RvQWxsUHJvamVjdHMuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbn07XG5cbmNvbnN0IHNob3dUb3BPZlBhZ2UgPSBmdW5jdGlvbiAoKSB7XG4gIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbn07XG5cbmNvbnN0IGF1dG9BZGp1c3RIZWlnaHQgPSBmdW5jdGlvbiAodGFza0Rlc2NyaXB0aW9uRWwpIHtcbiAgdGFza0Rlc2NyaXB0aW9uRWwuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgKCkgPT4ge1xuICAgIHRhc2tEZXNjcmlwdGlvbkVsLnN0eWxlLmhlaWdodCA9IFwiXCI7XG4gICAgdGFza0Rlc2NyaXB0aW9uRWwuc3R5bGUuaGVpZ2h0ID0gdGFza0Rlc2NyaXB0aW9uRWwuc2Nyb2xsSGVpZ2h0ICsgXCJweFwiO1xuICB9KTtcblxuICB0YXNrRGVzY3JpcHRpb25FbC5mb2N1cygpO1xuICB0YXNrRGVzY3JpcHRpb25FbC5ibHVyKCk7XG5cbiAgdGFza0Rlc2NyaXB0aW9uRWwuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XG4gICAgdGFza0Rlc2NyaXB0aW9uRWwuc3R5bGUuaGVpZ2h0ID0gXCJcIjtcbiAgICB0YXNrRGVzY3JpcHRpb25FbC5zdHlsZS5oZWlnaHQgPSB0YXNrRGVzY3JpcHRpb25FbC5zY3JvbGxIZWlnaHQgKyBcInB4XCI7XG4gIH0pO1xufTtcblxuY29uc3QgdG9nZ2xlVGFza0RldGFpbHMgPSBmdW5jdGlvbiAodGFza0NhcmQpIHtcbiAgY29uc3QgdGFza0RldGFpbHNFbCA9IHRhc2tDYXJkLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1kZXRhaWxzXCIpO1xuICB0YXNrRGV0YWlsc0VsLmNsYXNzTGlzdC50b2dnbGUoXCJ2aXNpYmxlXCIpO1xufTtcblxuY29uc3QgdG9nZ2xlVGFza0VsZW1lbnRzT25TdGF0dXNDaGFuZ2UgPSBmdW5jdGlvbiAoYnV0dG9uKSB7XG4gIGJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwiY29tcGxldGVkXCIpO1xuICBidXR0b24uY2xhc3NMaXN0LnRvZ2dsZShcInBlbmRpbmdcIik7XG5cbiAgY29uc3QgdGFza0NhcmRFbCA9IGJ1dHRvbi5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgY29uc3QgdGFza0hlYWRlckVsID0gdGFza0NhcmRFbC5xdWVyeVNlbGVjdG9yKFwiLnRhc2staGVhZGVyXCIpO1xuICBjb25zdCB0YXNrVGl0bGVJbnB1dEVsID0gdGFza0NhcmRFbC5xdWVyeVNlbGVjdG9yKFwiLmlucHV0LXRhc2stdGl0bGVcIik7XG4gIGNvbnN0IHRhc2tEZXRhaWxzRWwgPSB0YXNrQ2FyZEVsLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1kZXRhaWxzXCIpO1xuICBjb25zdCB0YXNrRGVzY3JpcHRpb25FbCA9IHRhc2tDYXJkRWwucXVlcnlTZWxlY3RvcihcIi5pbnB1dC10YXNrLWRlc2NyaXB0aW9uXCIpO1xuICBjb25zdCB0YXNrRHVlRGF0ZUVsID0gdGFza0NhcmRFbC5xdWVyeVNlbGVjdG9yKFwiLmlucHV0LXRhc2stZHVlLWRhdGVcIik7XG5cbiAgdGFza0NhcmRFbC5jbGFzc0xpc3QudG9nZ2xlKFwiY29tcGxldGVkXCIpO1xuICB0YXNrQ2FyZEVsLmNsYXNzTGlzdC50b2dnbGUoXCJwZW5kaW5nXCIpO1xuICB0YXNrSGVhZGVyRWwuY2xhc3NMaXN0LnRvZ2dsZShcImNvbXBsZXRlZFwiKTtcbiAgdGFza0hlYWRlckVsLmNsYXNzTGlzdC50b2dnbGUoXCJwZW5kaW5nXCIpO1xuICB0YXNrVGl0bGVJbnB1dEVsLmNsYXNzTGlzdC50b2dnbGUoXCJjb21wbGV0ZWRcIik7XG4gIHRhc2tUaXRsZUlucHV0RWwuY2xhc3NMaXN0LnRvZ2dsZShcInBlbmRpbmdcIik7XG4gIHRhc2tEZXRhaWxzRWwuY2xhc3NMaXN0LnRvZ2dsZShcImNvbXBsZXRlZFwiKTtcbiAgdGFza0RldGFpbHNFbC5jbGFzc0xpc3QudG9nZ2xlKFwicGVuZGluZ1wiKTtcbiAgdGFza0RldGFpbHNFbC5jbGFzc0xpc3QucmVtb3ZlKFwidmlzaWJsZVwiKTtcbiAgdGFza0Rlc2NyaXB0aW9uRWwuY2xhc3NMaXN0LnRvZ2dsZShcImNvbXBsZXRlZFwiKTtcbiAgdGFza0Rlc2NyaXB0aW9uRWwuY2xhc3NMaXN0LnRvZ2dsZShcInBlbmRpbmdcIik7XG5cbiAgdGFza1RpdGxlSW5wdXRFbC5kaXNhYmxlZCA9ICF0YXNrVGl0bGVJbnB1dEVsLmRpc2FibGVkO1xuICB0YXNrRGVzY3JpcHRpb25FbC5kaXNhYmxlZCA9ICF0YXNrRGVzY3JpcHRpb25FbC5kaXNhYmxlZDtcbiAgdGFza0R1ZURhdGVFbC5kaXNhYmxlZCA9ICF0YXNrRHVlRGF0ZUVsLmRpc2FibGVkO1xufTtcblxuY29uc3QgY2xpY2tIYW5kbGVyQ29tcGxldGVkVGFza0NhcmQgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGNvbXBsZXRlZFRhc2tDYXJkTkwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2stY2FyZFwiKTtcbiAgY29tcGxldGVkVGFza0NhcmROTC5mb3JFYWNoKCh0YXNrQ2FyZCkgPT4ge1xuICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbkVsID0gdGFza0NhcmQucXVlcnlTZWxlY3RvcihcIi5pbnB1dC10YXNrLWRlc2NyaXB0aW9uXCIpO1xuICAgIHRhc2tDYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBpZiAodGFza0NhcmQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY29tcGxldGVkXCIpKSB7XG4gICAgICAgIHRhc2tEZXNjcmlwdGlvbkVsLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIGF1dG9BZGp1c3RIZWlnaHQodGFza0Rlc2NyaXB0aW9uRWwpO1xuICAgICAgICB0YXNrRGVzY3JpcHRpb25FbC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICB0b2dnbGVUYXNrRGV0YWlscyh0YXNrQ2FyZCk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IHtcbiAgcmVuZGVyQnJlYWRjcnVtYk5hdixcbiAgY2xlYXJJdGVtQ29udGFpbmVyLFxuICByZW5kZXJBbGxQcm9qZWN0cyxcbiAgcmVuZGVyVGFza3MsXG4gIHNob3dUYXNrVmlld0J1dHRvbnMsXG4gIGhpZGVUYXNrVmlld0J1dHRvbnMsXG4gIHNob3dUb3BPZlBhZ2UsXG4gIGF1dG9BZGp1c3RIZWlnaHQsXG4gIHRvZ2dsZVRhc2tFbGVtZW50c09uU3RhdHVzQ2hhbmdlLFxuICBjbGlja0hhbmRsZXJDb21wbGV0ZWRUYXNrQ2FyZCxcbn07XG4iLCJpbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL2NvbnRyb2xsZXJcIjtcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4vdGFza1wiO1xuaW1wb3J0IHsgZGVtb1Byb2plY3RzIH0gZnJvbSBcIi4vZGVtb0RhdGFcIjtcblxuZXhwb3J0IGNvbnN0IHNhdmVUb0xvY2FsU3RvcmFnZSA9IGZ1bmN0aW9uICgpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvYWRGcm9tTG9jYWxTdG9yYWdlID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBzdG9yZWRQcm9qZWN0c0pTT04gPVxuICAgIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSkgfHwgZGVtb1Byb2plY3RzO1xuXG4gIGNvbnN0IHByb2plY3RzV2l0aEZ1bmN0aW9ucyA9IHt9O1xuXG4gIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHN0b3JlZFByb2plY3RzSlNPTikpIHtcbiAgICBsZXQgdGFza3NXaXRoRnVuY3Rpb25zID0gW107XG4gICAgdmFsdWUudGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgY29uc3QgdGFza1dpdGhGdW5jdGlvbnMgPSBuZXcgVGFzayhcbiAgICAgICAgdGFzay5pZCxcbiAgICAgICAgdGFzay50aXRsZSxcbiAgICAgICAgdGFzay5kZXNjcmlwdGlvbixcbiAgICAgICAgdGFzay5kdWVEYXRlLFxuICAgICAgICB0YXNrLnN0YXR1cyxcbiAgICAgICAgdGFzay5wcmlvcml0eSxcbiAgICAgICAgdGFzay5pbnB1dFN0YXR1c1xuICAgICAgKTtcbiAgICAgIHRhc2tzV2l0aEZ1bmN0aW9ucy5wdXNoKHRhc2tXaXRoRnVuY3Rpb25zKTtcbiAgICB9KTtcblxuICAgIHByb2plY3RzV2l0aEZ1bmN0aW9uc1trZXldID0gbmV3IFByb2plY3QoXG4gICAgICB2YWx1ZS5pZCxcbiAgICAgIHZhbHVlLnRpdGxlLFxuICAgICAgdGFza3NXaXRoRnVuY3Rpb25zXG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiBwcm9qZWN0c1dpdGhGdW5jdGlvbnM7XG59O1xuIiwiZXhwb3J0IGxldCBkZW1vUHJvamVjdHMgPSB7XG4gIFAxNjk2ODEwNTI3NjAxOiB7XG4gICAgaWQ6IFwiUDE2OTY4MTA1Mjc2MDFcIixcbiAgICB0aXRsZTogXCJIb21lXCIsXG4gICAgdGFza3M6IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6IFwiVDE2OTc3MTA2OTQ0NThcIixcbiAgICAgICAgdGl0bGU6IFwiUGxheSB2aWRlbyBnYW1lc1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJaZWxkYSBUT1RLXFxuTGl0dGxlIE5pZ2h0bWFyZXMgSUlcIixcbiAgICAgICAgZHVlRGF0ZTogXCIyMDIzLTEwLTIwXCIsXG4gICAgICAgIHN0YXR1czogXCJwZW5kaW5nXCIsXG4gICAgICAgIHByaW9yaXR5OiBcIm1lZGl1bVwiLFxuICAgICAgICBpbnB1dFN0YXR1czogXCJlbmFibGVkXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogXCJUMTY5ODMwMDczNzk3OFwiLFxuICAgICAgICB0aXRsZTogXCJDbGVhbiB0aGUgaG91c2VcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgXCJXaXBlIGR1c3QgZnJvbSBzdXJmYWNlc1xcblZhY3V1bSBhbmQgbW9wIGZsb29yc1xcbkNsZWFuIGtpdGNoZW4gYW5kIGJhdGhyb29tc1xcbkVtcHR5IGJpbnNcIixcbiAgICAgICAgZHVlRGF0ZTogXCIyMDIzLTEwLTMwXCIsXG4gICAgICAgIHN0YXR1czogXCJwZW5kaW5nXCIsXG4gICAgICAgIHByaW9yaXR5OiBcIm1lZGl1bVwiLFxuICAgICAgICBpbnB1dFN0YXR1czogXCJlbmFibGVkXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogXCJUMTY5ODM3MTE4NzI0MVwiLFxuICAgICAgICB0aXRsZTogXCJGaXgga2l0Y2hlbiBsaWdodHNcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgICAgIGR1ZURhdGU6IFwiXCIsXG4gICAgICAgIHN0YXR1czogXCJwZW5kaW5nXCIsXG4gICAgICAgIHByaW9yaXR5OiBcIm1lZGl1bVwiLFxuICAgICAgICBpbnB1dFN0YXR1czogXCJlbmFibGVkXCIsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIFAxNjk2ODEwNTI3NjAyOiB7XG4gICAgaWQ6IFwiUDE2OTY4MTA1Mjc2MDJcIixcbiAgICB0aXRsZTogXCJTdHVkeVwiLFxuICAgIHRhc2tzOiBbXG4gICAgICB7XG4gICAgICAgIGlkOiBcIlQxNjk3NzExNDE1NTY1XCIsXG4gICAgICAgIHRpdGxlOiBcIkZpbmlzaCBUb2RvIExpc3QgcHJvamVjdFwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICAgICAgZHVlRGF0ZTogXCIyMDIzLTEwLTI2XCIsXG4gICAgICAgIHN0YXR1czogXCJjb21wbGV0ZWRcIixcbiAgICAgICAgcHJpb3JpdHk6IFwibWVkaXVtXCIsXG4gICAgICAgIGlucHV0U3RhdHVzOiBcImRpc2FibGVkXCIsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIFAxNjk3NzEwNzM2MDAwOiB7XG4gICAgaWQ6IFwiUDE2OTc3MTA3MzYwMDBcIixcbiAgICB0aXRsZTogXCJUcmF2ZWxcIixcbiAgICB0YXNrczogW1xuICAgICAge1xuICAgICAgICBpZDogXCJUMTY5NzcxMDc0MTEyMFwiLFxuICAgICAgICB0aXRsZTogXCJQYXNzcG9ydFwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJBcHBseSBmb3IgcGFzc3BvcnRcIixcbiAgICAgICAgZHVlRGF0ZTogXCIyMDIzLTEwLTIzXCIsXG4gICAgICAgIHN0YXR1czogXCJwZW5kaW5nXCIsXG4gICAgICAgIHByaW9yaXR5OiBcIm1lZGl1bVwiLFxuICAgICAgICBpbnB1dFN0YXR1czogXCJlbmFibGVkXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogXCJUMTY5ODM3MDc5NDQ4M1wiLFxuICAgICAgICB0aXRsZTogXCJQbGFuIGl0aW5lcmFyeVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJNYWtlIGxpc3Qgb2YgcGxhY2VzIHRvIHZpc2l0XCIsXG4gICAgICAgIGR1ZURhdGU6IFwiXCIsXG4gICAgICAgIHN0YXR1czogXCJwZW5kaW5nXCIsXG4gICAgICAgIHByaW9yaXR5OiBcIm1lZGl1bVwiLFxuICAgICAgICBpbnB1dFN0YXR1czogXCJlbmFibGVkXCIsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIFAxNjk4MzcwOTMxNjMwOiB7XG4gICAgaWQ6IFwiUDE2OTgzNzA5MzE2MzBcIixcbiAgICB0aXRsZTogXCJHcm9jZXJpZXNcIixcbiAgICB0YXNrczogW1xuICAgICAge1xuICAgICAgICBpZDogXCJUMTY5ODM3MDk0OTc5OVwiLFxuICAgICAgICB0aXRsZTogXCJXb29sd29ydGhzXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkJhbmFuYXNcXG5NaWxrXFxuQnV0dGVyXFxuRnJvemVuIGR1bXBsaW5nc1xcblRvaWxldCBwYXBlclwiLFxuICAgICAgICBkdWVEYXRlOiBcIlwiLFxuICAgICAgICBzdGF0dXM6IFwicGVuZGluZ1wiLFxuICAgICAgICBwcmlvcml0eTogXCJtZWRpdW1cIixcbiAgICAgICAgaW5wdXRTdGF0dXM6IFwiZW5hYmxlZFwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IFwiVDE2OTgzNzExMTk1MzZcIixcbiAgICAgICAgdGl0bGU6IFwiQWxkaVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJDaGVlc2VcXG5CaXNjdWl0c1wiLFxuICAgICAgICBkdWVEYXRlOiBcIlwiLFxuICAgICAgICBzdGF0dXM6IFwiY29tcGxldGVkXCIsXG4gICAgICAgIHByaW9yaXR5OiBcIm1lZGl1bVwiLFxuICAgICAgICBpbnB1dFN0YXR1czogXCJkaXNhYmxlZFwiLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxufTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImltcG9ydCBfdHlwZW9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2ZcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTtcblxuICAvLyBDbG9uZSB0aGUgZGF0ZVxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IF90eXBlb2YoYXJndW1lbnQpID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjc3RyaW5nLWFyZ3VtZW50c1wiKTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90eXBlb2Yobykge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykge1xuICAgIHJldHVybiB0eXBlb2YgbztcbiAgfSA6IGZ1bmN0aW9uIChvKSB7XG4gICAgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87XG4gIH0sIF90eXBlb2Yobyk7XG59IiwiLyoqXG4gKiBHb29nbGUgQ2hyb21lIGFzIG9mIDY3LjAuMzM5Ni44NyBpbnRyb2R1Y2VkIHRpbWV6b25lcyB3aXRoIG9mZnNldCB0aGF0IGluY2x1ZGVzIHNlY29uZHMuXG4gKiBUaGV5IHVzdWFsbHkgYXBwZWFyIGZvciBkYXRlcyB0aGF0IGRlbm90ZSB0aW1lIGJlZm9yZSB0aGUgdGltZXpvbmVzIHdlcmUgaW50cm9kdWNlZFxuICogKGUuZy4gZm9yICdFdXJvcGUvUHJhZ3VlJyB0aW1lem9uZSB0aGUgb2Zmc2V0IGlzIEdNVCswMDo1Nzo0NCBiZWZvcmUgMSBPY3RvYmVyIDE4OTFcbiAqIGFuZCBHTVQrMDE6MDA6MDAgYWZ0ZXIgdGhhdCBkYXRlKVxuICpcbiAqIERhdGUjZ2V0VGltZXpvbmVPZmZzZXQgcmV0dXJucyB0aGUgb2Zmc2V0IGluIG1pbnV0ZXMgYW5kIHdvdWxkIHJldHVybiA1NyBmb3IgdGhlIGV4YW1wbGUgYWJvdmUsXG4gKiB3aGljaCB3b3VsZCBsZWFkIHRvIGluY29ycmVjdCBjYWxjdWxhdGlvbnMuXG4gKlxuICogVGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSB0aW1lem9uZSBvZmZzZXQgaW4gbWlsbGlzZWNvbmRzIHRoYXQgdGFrZXMgc2Vjb25kcyBpbiBhY2NvdW50LlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGRhdGUpIHtcbiAgdmFyIHV0Y0RhdGUgPSBuZXcgRGF0ZShEYXRlLlVUQyhkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgZGF0ZS5nZXREYXRlKCksIGRhdGUuZ2V0SG91cnMoKSwgZGF0ZS5nZXRNaW51dGVzKCksIGRhdGUuZ2V0U2Vjb25kcygpLCBkYXRlLmdldE1pbGxpc2Vjb25kcygpKSk7XG4gIHV0Y0RhdGUuc2V0VVRDRnVsbFllYXIoZGF0ZS5nZXRGdWxsWWVhcigpKTtcbiAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpIC0gdXRjRGF0ZS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMgZnJvbSBcIi4uL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZEYXkgZnJvbSBcIi4uL3N0YXJ0T2ZEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX0RBWSA9IDg2NDAwMDAwO1xuXG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5c1xuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciBkYXlzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgZGF5cyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy4gVGhpcyBtZWFucyB0aGF0IHRoZSB0aW1lcyBhcmUgcmVtb3ZlZFxuICogZnJvbSB0aGUgZGF0ZXMgYW5kIHRoZW4gdGhlIGRpZmZlcmVuY2UgaW4gZGF5cyBpcyBjYWxjdWxhdGVkLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBlYXJsaWVyIGRhdGVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgZGF5c1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBjYWxlbmRhciBkYXlzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxMSAyMzowMDowMCBhbmQgMiBKdWx5IDIwMTIgMDA6MDA6MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoXG4gKiAgIG5ldyBEYXRlKDIwMTIsIDYsIDIsIDAsIDApLFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAyLCAyMywgMClcbiAqIClcbiAqIC8vPT4gMzY2XG4gKiAvLyBIb3cgbWFueSBjYWxlbmRhciBkYXlzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxMSAyMzo1OTowMCBhbmQgMyBKdWx5IDIwMTEgMDA6MDE6MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDMsIDAsIDEpLFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAyLCAyMywgNTkpXG4gKiApXG4gKiAvLz0+IDFcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgc3RhcnRPZkRheUxlZnQgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgc3RhcnRPZkRheVJpZ2h0ID0gc3RhcnRPZkRheShkaXJ0eURhdGVSaWdodCk7XG4gIHZhciB0aW1lc3RhbXBMZWZ0ID0gc3RhcnRPZkRheUxlZnQuZ2V0VGltZSgpIC0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhzdGFydE9mRGF5TGVmdCk7XG4gIHZhciB0aW1lc3RhbXBSaWdodCA9IHN0YXJ0T2ZEYXlSaWdodC5nZXRUaW1lKCkgLSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKHN0YXJ0T2ZEYXlSaWdodCk7XG5cbiAgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXJcbiAgLy8gYmVjYXVzZSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpbiBhIGRheSBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIGRheSBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG4gIHJldHVybiBNYXRoLnJvdW5kKCh0aW1lc3RhbXBMZWZ0IC0gdGltZXN0YW1wUmlnaHQpIC8gTUlMTElTRUNPTkRTX0lOX0RBWSk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIGRheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZEYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0MDogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IGluaXRBcHAgfSBmcm9tIFwiLi9jb250cm9sbGVyXCI7XG5cbihmdW5jdGlvbiAoKSB7XG4gIGluaXRBcHAoKTtcbn0pKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=