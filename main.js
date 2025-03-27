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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: \"Electrolize\";\n  src: url(\"./fonts/Electrolize-Regular.woff\") format(\"woff\");\n  font-weight: 400;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: \"Quicksand\";\n  src: url(\"./fonts/Quicksand-Medium.woff\") format(\"woff\");\n  font-weight: 500;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: \"Quicksand\";\n  src: url(\"./fonts/Quicksand-Bold.woff\") format(\"woff\");\n  font-weight: 700;\n  font-style: normal;\n}\n\n:root.theme-1 {\n  --main-color: black;\n  --background-color: whitesmoke;\n  --background-color-two: lavenderblush;\n  --accent-color: salmon;\n  --accent-color-two: white;\n  --accent-color-three: lightpink;\n  --priority-high-color: palevioletred;\n  --active-color: tomato;\n  --active-color-two: white;\n  --inactive-color: silver;\n  --inactive-color-two: gray;\n  --default-thickness: 2px;\n}\n\n:root.theme-2 {\n  --main-color: black;\n  --background-color: aliceblue;\n  --background-color-two: whitesmoke;\n  --accent-color: mediumslateblue;\n  --accent-color-two: white;\n  --accent-color-three: thistle;\n  --priority-high-color: palevioletred;\n  --active-color: mediumslateblue;\n  --active-color-two: white;\n  --inactive-color: silver;\n  --inactive-color-two: gray;\n  --default-thickness: 2px;\n}\n\nhtml {\n  box-sizing: border-box;\n  margin: 0px;\n  padding: 0px;\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n  /* border: 1px solid red; */\n}\n\n.hidden {\n  display: none;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0px;\n}\n\nbody {\n  height: 100vh;\n  background-color: var(--background-color);\n  color: var(--main-color);\n  font-family: \"Quicksand\", Tahoma, Geneva, Verdana, sans-serif;\n  margin: 0px;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\nheader {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 1;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  background-color: var(--background-color-two);\n  border-bottom: var(--default-thickness) solid var(--accent-color-two);\n}\n\n.header-top-row {\n  height: 56px;\n  display: flex;\n  justify-content: space-between;\n  padding: 10px;\n}\n\nh1 {\n  font-family: \"Electrolize\";\n  color: var(--accent-color);\n  font-size: x-large;\n  text-align: center;\n  padding-top: 5px;\n}\n\nbutton:hover {\n  cursor: pointer;\n}\n\nnav.sort-buttons-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n}\n\nnav.sort-buttons-container button {\n  width: 96px;\n  background-color: var(--accent-color-two);\n  color: var(--accent-color);\n  border: 2px solid var(--accent-color-two);\n  border-radius: 12px;\n  font-family: \"Quicksand\";\n  font-size: medium;\n  padding: 7px 8px 5px;\n}\n\nnav.sort-buttons-container button:hover {\n  background-color: var(--accent-color-two);\n  color: var(--accent-color);\n  border: 2px solid var(--accent-color);\n}\n\nnav.breadcrumb-nav {\n  display: flex;\n  align-items: center;\n  font-size: larger;\n  padding: 5px 10px 0px;\n  margin: 0px 0px 10px;\n}\n\nspan {\n  padding: 0px 10px 0px;\n}\n\nspan.all-projects {\n  height: 36px;\n  color: var(--accent-color);\n  border: 2px solid var(--background-color-two);\n  font-size: medium;\n  letter-spacing: 0.23px;\n  padding: 6px 6px 3px;\n}\n\nspan.current-project {\n  color: var(--main-color);\n  font-size: large;\n  padding: 3px 6px 3px;\n}\n\nbutton.btn-view-all-projects {\n  height: 36px;\n  background-color: var(--accent-color-two);\n  color: var(--accent-color);\n  border: 2px solid var(--accent-color-two);\n  border-radius: 12px;\n  font-family: \"Quicksand\";\n  font-size: medium;\n  font-weight: bold;\n  text-decoration: underline;\n  color: var(--accent-color);\n  padding: 3px 6px 3px;\n}\n\nbutton.btn-view-all-projects:hover {\n  color: var(--active-color);\n  border: 2px solid var(--active-color);\n  font-weight: 700;\n  letter-spacing: 0px;\n}\n\nbutton.btn-view-all-projects::after {\n  height: 0;\n  visibility: hidden;\n  font-weight: 700;\n}\n\nmain {\n  position: relative;\n  z-index: 0;\n\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  align-items: start;\n  padding: 15px;\n  padding-top: 130px;\n}\n\n.item-container {\n  width: 100%;\n  padding-bottom: 80px;\n}\n\n.project-card,\n.task-card {\n  cursor: pointer;\n  flex: 1;\n  border: var(--default-thickness) solid var(--accent-color-three);\n  border-radius: 12px;\n  margin: 0px 0px 20px;\n}\n\n.project-header,\n.task-header {\n  height: 40px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: var(--accent-color-three);\n  border-radius: 9px;\n  padding: 5px 5px 6px 5px;\n}\n\n.project-header:hover .input-project-title,\n.task-header:hover .input-task-title {\n  color: var(--main-color);\n}\n\n.task-header.completed {\n  background-color: var(--inactive-color);\n}\n\n.task-details.completed {\n  transition: opacity 1.5s ease;\n  opacity: 0;\n  height: 0;\n  overflow: hidden;\n}\n\n.task-details.pending,\n.task-details.completed.visible {\n  transition: opacity 1.5s ease;\n  opacity: 1;\n  height: auto;\n}\n\n/* This rule is required for click events on disabled input elements to propagate upwards on some browsers */\ninput[disabled] {\n  pointer-events: none;\n}\n\ninput.input-task-title.completed {\n  text-decoration: line-through;\n}\n\n.task-card.completed {\n  border: var(--default-thickness) solid var(--inactive-color);\n}\n\nbutton.btn-save-project,\nbutton.btn-save-task {\n  background-color: var(--accent-color-two);\n  border: 2px solid var(--main-color);\n  border-radius: 5px;\n  padding: 5px 8px 5px;\n}\n\ninput.input-project-title,\ninput.input-task-title {\n  flex: 1;\n  background-color: inherit;\n  color: var(--accent-color-two);\n  font-family: \"Quicksand\";\n  font-size: medium;\n  font-weight: bold;\n  border: none;\n  outline: none;\n  margin-left: 5px;\n  margin-right: 20px;\n}\n\ninput.input-project-title:focus,\ninput.input-task-title:focus {\n  background-color: inherit;\n}\n\n.project-header-left,\n.task-header-left {\n  flex: 1;\n  display: flex;\n  align-items: center;\n}\n\nbutton.btn-task-status {\n  background-color: inherit;\n  color: var(--accent-color-two);\n  border: none;\n  font-size: large;\n  padding: 0px 6px 0px;\n}\n\nbutton.btn-task-status.pending::after {\n  content: \"☐\";\n  font-size: xx-large;\n}\n\nbutton.btn-task-status.completed::after {\n  content: \"☑\";\n  font-size: xx-large;\n}\n\n.project-header:focus-within,\n.task-header:focus-within {\n  background-color: var(--accent-color);\n}\n\n.task-title.completed {\n  text-decoration: line-through;\n  text-decoration-color: var(--accent-color-two);\n  text-decoration-thickness: 2px;\n}\n\n.task-header-right {\n  display: flex;\n  gap: 6px;\n}\n\nbutton.btn-project-move-down,\nbutton.btn-project-move-up {\n  background-color: var(--accent-three);\n  color: var(--accent-color-two);\n  border: none;\n  font-weight: 700;\n  padding: 0px 10px;\n  visibility: hidden;\n}\n\nbutton.btn-project-delete,\nbutton.btn-task-delete {\n  background-color: var(--accent-three);\n  color: var(--accent-color-two);\n  border: none;\n  font-weight: 700;\n  padding: 0px 10px;\n}\n\nbutton.btn-project-move-down:hover,\nbutton.btn-project-move-up:hover,\nbutton.btn-project-delete:hover,\nbutton.btn-task-delete:hover {\n  color: var(--main-color);\n}\n\n.project-details > div,\n.task-details > div {\n  background-color: var(--accent-color-two);\n  font-size: medium;\n  border-radius: 0px 0px 9px 9px;\n  padding: 10px 15px 10px;\n}\n\n.task-details {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\ntextarea.input-task-description {\n  width: 100%;\n  background-color: var(--accent-color-two);\n  font-family: \"Quicksand\", Tahoma, Geneva, Verdana, sans-serif;\n  font-size: medium;\n  border: none;\n  outline: none;\n  resize: none;\n  padding: 10px 15px 10px;\n}\n\ntextarea.input-task-description.completed {\n  color: gray;\n}\n\n.project-details > .task-bottom-row,\n.task-details > .task-bottom-row {\n  display: flex;\n  height: 40px;\n  justify-content: space-between;\n  align-items: center;\n  background-color: var(--background-color-two);\n  border-radius: 0px 0px 9px 9px;\n  font-weight: 700;\n}\n\ninput.input-task-due-date {\n  background-color: var(--background-color-two);\n  border: 2px solid var(--accent-color-three);\n  border-radius: 5px;\n  outline: none;\n  padding: 2px;\n}\n\ninput[disabled].input-task-due-date {\n  background-color: var(--background-color);\n  border: 2px solid var(--inactive-color);\n}\n\n.task-days-remaining,\n.btn-task-priority {\n  display: flex;\n  align-items: center;\n  justify-content: end;\n  gap: 5px;\n  min-width: 82px;\n  color: var(--inactive-color-two);\n  font-size: small;\n  font-weight: 500;\n  text-align: center;\n  padding: 0px;\n}\n\nbutton.btn-task-priority {\n  background-color: var(--accent-three);\n  border: none;\n}\n\nspan.priority-label {\n  padding: 0px 2px 0px 0px;\n}\n\nspan.priority-indicator {\n  background-color: var(--accent-three);\n  margin: -8px;\n}\n\nspan.priority-indicator.low::after {\n  content: \"●\";\n  color: mediumseagreen;\n  font-size: xx-large;\n}\n\nspan.priority-indicator.medium::after {\n  content: \"●\";\n  color: gold;\n  font-size: xx-large;\n}\n\nspan.priority-indicator.high::after {\n  content: \"●\";\n  color: coral;\n  font-size: xx-large;\n}\n\n.priority-high {\n  background-color: var(--priority-high-color);\n}\n\nbutton.btn-back-to-all-projects {\n  height: 42px;\n  width: 42px;\n  position: fixed;\n  bottom: 50px;\n  left: 20px;\n  font-size: xx-large;\n  border: 2px solid var(--accent-color-two);\n  border-radius: 50px;\n  background-color: var(--accent-color);\n  color: var(--accent-color-two);\n  padding: 2px 2px 0px 0px;\n}\n\nbutton.btn-new-item {\n  height: 42px;\n  width: 42px;\n  position: fixed;\n  bottom: 50px;\n  right: 20px;\n  font-size: xx-large;\n  border: 2px solid var(--accent-color-two);\n  border-radius: 50px;\n  background-color: var(--accent-color);\n  color: var(--accent-color-two);\n  padding: 0px 10px 0px;\n}\n\nfooter {\n  position: fixed;\n  bottom: 0px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  background-color: lightgray;\n  padding: 5px;\n}\n\nfooter a {\n  font-family: \"Electrolize\";\n  color: gray;\n}\n"],"sourceRoot":""}]);
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
  localStorage.setItem("theme", theme);
};

const loadTheme = function () {
  if (localStorage.getItem("theme") !== null) {
    setTheme(localStorage.getItem("theme"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sT0FBTyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsWUFBWSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFlBQVksY0FBYyxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksWUFBWSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsTUFBTSxZQUFZLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVks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O1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7QUNBcUI7QUFDa0I7O0FBRXZDO0FBQ0EsRUFBRSxvREFBTztBQUNULENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2RpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy92aWV3LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2xvY2FsU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9kZW1vRGF0YS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL0VsZWN0cm9saXplLVJlZ3VsYXIud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vZm9udHMvUXVpY2tzYW5kLU1lZGl1bS53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9mb250cy9RdWlja3NhbmQtQm9sZC53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJFbGVjdHJvbGl6ZVwiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJRdWlja3NhbmRcIjtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSkgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuOnJvb3QudGhlbWUtMSB7XG4gIC0tbWFpbi1jb2xvcjogYmxhY2s7XG4gIC0tYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yLXR3bzogbGF2ZW5kZXJibHVzaDtcbiAgLS1hY2NlbnQtY29sb3I6IHNhbG1vbjtcbiAgLS1hY2NlbnQtY29sb3ItdHdvOiB3aGl0ZTtcbiAgLS1hY2NlbnQtY29sb3ItdGhyZWU6IGxpZ2h0cGluaztcbiAgLS1wcmlvcml0eS1oaWdoLWNvbG9yOiBwYWxldmlvbGV0cmVkO1xuICAtLWFjdGl2ZS1jb2xvcjogdG9tYXRvO1xuICAtLWFjdGl2ZS1jb2xvci10d286IHdoaXRlO1xuICAtLWluYWN0aXZlLWNvbG9yOiBzaWx2ZXI7XG4gIC0taW5hY3RpdmUtY29sb3ItdHdvOiBncmF5O1xuICAtLWRlZmF1bHQtdGhpY2tuZXNzOiAycHg7XG59XG5cbjpyb290LnRoZW1lLTIge1xuICAtLW1haW4tY29sb3I6IGJsYWNrO1xuICAtLWJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yLXR3bzogd2hpdGVzbW9rZTtcbiAgLS1hY2NlbnQtY29sb3I6IG1lZGl1bXNsYXRlYmx1ZTtcbiAgLS1hY2NlbnQtY29sb3ItdHdvOiB3aGl0ZTtcbiAgLS1hY2NlbnQtY29sb3ItdGhyZWU6IHRoaXN0bGU7XG4gIC0tcHJpb3JpdHktaGlnaC1jb2xvcjogcGFsZXZpb2xldHJlZDtcbiAgLS1hY3RpdmUtY29sb3I6IG1lZGl1bXNsYXRlYmx1ZTtcbiAgLS1hY3RpdmUtY29sb3ItdHdvOiB3aGl0ZTtcbiAgLS1pbmFjdGl2ZS1jb2xvcjogc2lsdmVyO1xuICAtLWluYWN0aXZlLWNvbG9yLXR3bzogZ3JheTtcbiAgLS1kZWZhdWx0LXRoaWNrbmVzczogMnB4O1xufVxuXG5odG1sIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuKixcbio6YmVmb3JlLFxuKjphZnRlciB7XG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cbn1cblxuLmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIG1hcmdpbjogMHB4O1xufVxuXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcbiAgZm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICBtYXJnaW46IDBweDtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbmhlYWRlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMTtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci10d28pO1xuICBib3JkZXItYm90dG9tOiB2YXIoLS1kZWZhdWx0LXRoaWNrbmVzcykgc29saWQgdmFyKC0tYWNjZW50LWNvbG9yLXR3byk7XG59XG5cbi5oZWFkZXItdG9wLXJvdyB7XG4gIGhlaWdodDogNTZweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG5oMSB7XG4gIGZvbnQtZmFtaWx5OiBcIkVsZWN0cm9saXplXCI7XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICBmb250LXNpemU6IHgtbGFyZ2U7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDVweDtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5uYXYuc29ydC1idXR0b25zLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG59XG5cbm5hdi5zb3J0LWJ1dHRvbnMtY29udGFpbmVyIGJ1dHRvbiB7XG4gIHdpZHRoOiA5NnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItdHdvKTtcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWFjY2VudC1jb2xvci10d28pO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBmb250LWZhbWlseTogXCJRdWlja3NhbmRcIjtcbiAgZm9udC1zaXplOiBtZWRpdW07XG4gIHBhZGRpbmc6IDdweCA4cHggNXB4O1xufVxuXG5uYXYuc29ydC1idXR0b25zLWNvbnRhaW5lciBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItdHdvKTtcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWFjY2VudC1jb2xvcik7XG59XG5cbm5hdi5icmVhZGNydW1iLW5hdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICBwYWRkaW5nOiA1cHggMTBweCAwcHg7XG4gIG1hcmdpbjogMHB4IDBweCAxMHB4O1xufVxuXG5zcGFuIHtcbiAgcGFkZGluZzogMHB4IDEwcHggMHB4O1xufVxuXG5zcGFuLmFsbC1wcm9qZWN0cyB7XG4gIGhlaWdodDogMzZweDtcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJhY2tncm91bmQtY29sb3ItdHdvKTtcbiAgZm9udC1zaXplOiBtZWRpdW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjIzcHg7XG4gIHBhZGRpbmc6IDZweCA2cHggM3B4O1xufVxuXG5zcGFuLmN1cnJlbnQtcHJvamVjdCB7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcbiAgZm9udC1zaXplOiBsYXJnZTtcbiAgcGFkZGluZzogM3B4IDZweCAzcHg7XG59XG5cbmJ1dHRvbi5idG4tdmlldy1hbGwtcHJvamVjdHMge1xuICBoZWlnaHQ6IDM2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvci10d28pO1xuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYWNjZW50LWNvbG9yLXR3byk7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiO1xuICBmb250LXNpemU6IG1lZGl1bTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgcGFkZGluZzogM3B4IDZweCAzcHg7XG59XG5cbmJ1dHRvbi5idG4tdmlldy1hbGwtcHJvamVjdHM6aG92ZXIge1xuICBjb2xvcjogdmFyKC0tYWN0aXZlLWNvbG9yKTtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYWN0aXZlLWNvbG9yKTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbn1cblxuYnV0dG9uLmJ0bi12aWV3LWFsbC1wcm9qZWN0czo6YWZ0ZXIge1xuICBoZWlnaHQ6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxubWFpbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMDtcblxuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIHBhZGRpbmctdG9wOiAxMzBweDtcbn1cblxuLml0ZW0tY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctYm90dG9tOiA4MHB4O1xufVxuXG4ucHJvamVjdC1jYXJkLFxuLnRhc2stY2FyZCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZmxleDogMTtcbiAgYm9yZGVyOiB2YXIoLS1kZWZhdWx0LXRoaWNrbmVzcykgc29saWQgdmFyKC0tYWNjZW50LWNvbG9yLXRocmVlKTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgbWFyZ2luOiAwcHggMHB4IDIwcHg7XG59XG5cbi5wcm9qZWN0LWhlYWRlcixcbi50YXNrLWhlYWRlciB7XG4gIGhlaWdodDogNDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItdGhyZWUpO1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG4gIHBhZGRpbmc6IDVweCA1cHggNnB4IDVweDtcbn1cblxuLnByb2plY3QtaGVhZGVyOmhvdmVyIC5pbnB1dC1wcm9qZWN0LXRpdGxlLFxuLnRhc2staGVhZGVyOmhvdmVyIC5pbnB1dC10YXNrLXRpdGxlIHtcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xufVxuXG4udGFzay1oZWFkZXIuY29tcGxldGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW5hY3RpdmUtY29sb3IpO1xufVxuXG4udGFzay1kZXRhaWxzLmNvbXBsZXRlZCB7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMS41cyBlYXNlO1xuICBvcGFjaXR5OiAwO1xuICBoZWlnaHQ6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi50YXNrLWRldGFpbHMucGVuZGluZyxcbi50YXNrLWRldGFpbHMuY29tcGxldGVkLnZpc2libGUge1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDEuNXMgZWFzZTtcbiAgb3BhY2l0eTogMTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4vKiBUaGlzIHJ1bGUgaXMgcmVxdWlyZWQgZm9yIGNsaWNrIGV2ZW50cyBvbiBkaXNhYmxlZCBpbnB1dCBlbGVtZW50cyB0byBwcm9wYWdhdGUgdXB3YXJkcyBvbiBzb21lIGJyb3dzZXJzICovXG5pbnB1dFtkaXNhYmxlZF0ge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuaW5wdXQuaW5wdXQtdGFzay10aXRsZS5jb21wbGV0ZWQge1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cblxuLnRhc2stY2FyZC5jb21wbGV0ZWQge1xuICBib3JkZXI6IHZhcigtLWRlZmF1bHQtdGhpY2tuZXNzKSBzb2xpZCB2YXIoLS1pbmFjdGl2ZS1jb2xvcik7XG59XG5cbmJ1dHRvbi5idG4tc2F2ZS1wcm9qZWN0LFxuYnV0dG9uLmJ0bi1zYXZlLXRhc2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItdHdvKTtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tbWFpbi1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogNXB4IDhweCA1cHg7XG59XG5cbmlucHV0LmlucHV0LXByb2plY3QtdGl0bGUsXG5pbnB1dC5pbnB1dC10YXNrLXRpdGxlIHtcbiAgZmxleDogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvci10d28pO1xuICBmb250LWZhbWlseTogXCJRdWlja3NhbmRcIjtcbiAgZm9udC1zaXplOiBtZWRpdW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuaW5wdXQuaW5wdXQtcHJvamVjdC10aXRsZTpmb2N1cyxcbmlucHV0LmlucHV0LXRhc2stdGl0bGU6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xufVxuXG4ucHJvamVjdC1oZWFkZXItbGVmdCxcbi50YXNrLWhlYWRlci1sZWZ0IHtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuYnV0dG9uLmJ0bi10YXNrLXN0YXR1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItdHdvKTtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IGxhcmdlO1xuICBwYWRkaW5nOiAwcHggNnB4IDBweDtcbn1cblxuYnV0dG9uLmJ0bi10YXNrLXN0YXR1cy5wZW5kaW5nOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwi4piQXCI7XG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG59XG5cbmJ1dHRvbi5idG4tdGFzay1zdGF0dXMuY29tcGxldGVkOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwi4piRXCI7XG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG59XG5cbi5wcm9qZWN0LWhlYWRlcjpmb2N1cy13aXRoaW4sXG4udGFzay1oZWFkZXI6Zm9jdXMtd2l0aGluIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbn1cblxuLnRhc2stdGl0bGUuY29tcGxldGVkIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yLXR3byk7XG4gIHRleHQtZGVjb3JhdGlvbi10aGlja25lc3M6IDJweDtcbn1cblxuLnRhc2staGVhZGVyLXJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA2cHg7XG59XG5cbmJ1dHRvbi5idG4tcHJvamVjdC1tb3ZlLWRvd24sXG5idXR0b24uYnRuLXByb2plY3QtbW92ZS11cCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC10aHJlZSk7XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItdHdvKTtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXdlaWdodDogNzAwO1xuICBwYWRkaW5nOiAwcHggMTBweDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG5idXR0b24uYnRuLXByb2plY3QtZGVsZXRlLFxuYnV0dG9uLmJ0bi10YXNrLWRlbGV0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC10aHJlZSk7XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItdHdvKTtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXdlaWdodDogNzAwO1xuICBwYWRkaW5nOiAwcHggMTBweDtcbn1cblxuYnV0dG9uLmJ0bi1wcm9qZWN0LW1vdmUtZG93bjpob3ZlcixcbmJ1dHRvbi5idG4tcHJvamVjdC1tb3ZlLXVwOmhvdmVyLFxuYnV0dG9uLmJ0bi1wcm9qZWN0LWRlbGV0ZTpob3ZlcixcbmJ1dHRvbi5idG4tdGFzay1kZWxldGU6aG92ZXIge1xuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG59XG5cbi5wcm9qZWN0LWRldGFpbHMgPiBkaXYsXG4udGFzay1kZXRhaWxzID4gZGl2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yLXR3byk7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDlweCA5cHg7XG4gIHBhZGRpbmc6IDEwcHggMTVweCAxMHB4O1xufVxuXG4udGFzay1kZXRhaWxzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG50ZXh0YXJlYS5pbnB1dC10YXNrLWRlc2NyaXB0aW9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvci10d28pO1xuICBmb250LWZhbWlseTogXCJRdWlja3NhbmRcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHJlc2l6ZTogbm9uZTtcbiAgcGFkZGluZzogMTBweCAxNXB4IDEwcHg7XG59XG5cbnRleHRhcmVhLmlucHV0LXRhc2stZGVzY3JpcHRpb24uY29tcGxldGVkIHtcbiAgY29sb3I6IGdyYXk7XG59XG5cbi5wcm9qZWN0LWRldGFpbHMgPiAudGFzay1ib3R0b20tcm93LFxuLnRhc2stZGV0YWlscyA+IC50YXNrLWJvdHRvbS1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci10d28pO1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDlweCA5cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbmlucHV0LmlucHV0LXRhc2stZHVlLWRhdGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLXR3byk7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWFjY2VudC1jb2xvci10aHJlZSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogMnB4O1xufVxuXG5pbnB1dFtkaXNhYmxlZF0uaW5wdXQtdGFzay1kdWUtZGF0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pbmFjdGl2ZS1jb2xvcik7XG59XG5cbi50YXNrLWRheXMtcmVtYWluaW5nLFxuLmJ0bi10YXNrLXByaW9yaXR5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gIGdhcDogNXB4O1xuICBtaW4td2lkdGg6IDgycHg7XG4gIGNvbG9yOiB2YXIoLS1pbmFjdGl2ZS1jb2xvci10d28pO1xuICBmb250LXNpemU6IHNtYWxsO1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuYnV0dG9uLmJ0bi10YXNrLXByaW9yaXR5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LXRocmVlKTtcbiAgYm9yZGVyOiBub25lO1xufVxuXG5zcGFuLnByaW9yaXR5LWxhYmVsIHtcbiAgcGFkZGluZzogMHB4IDJweCAwcHggMHB4O1xufVxuXG5zcGFuLnByaW9yaXR5LWluZGljYXRvciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC10aHJlZSk7XG4gIG1hcmdpbjogLThweDtcbn1cblxuc3Bhbi5wcmlvcml0eS1pbmRpY2F0b3IubG93OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwi4pePXCI7XG4gIGNvbG9yOiBtZWRpdW1zZWFncmVlbjtcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcbn1cblxuc3Bhbi5wcmlvcml0eS1pbmRpY2F0b3IubWVkaXVtOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwi4pePXCI7XG4gIGNvbG9yOiBnb2xkO1xuICBmb250LXNpemU6IHh4LWxhcmdlO1xufVxuXG5zcGFuLnByaW9yaXR5LWluZGljYXRvci5oaWdoOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwi4pePXCI7XG4gIGNvbG9yOiBjb3JhbDtcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcbn1cblxuLnByaW9yaXR5LWhpZ2gge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmlvcml0eS1oaWdoLWNvbG9yKTtcbn1cblxuYnV0dG9uLmJ0bi1iYWNrLXRvLWFsbC1wcm9qZWN0cyB7XG4gIGhlaWdodDogNDJweDtcbiAgd2lkdGg6IDQycHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiA1MHB4O1xuICBsZWZ0OiAyMHB4O1xuICBmb250LXNpemU6IHh4LWxhcmdlO1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3ItdHdvKTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvci10d28pO1xuICBwYWRkaW5nOiAycHggMnB4IDBweCAwcHg7XG59XG5cbmJ1dHRvbi5idG4tbmV3LWl0ZW0ge1xuICBoZWlnaHQ6IDQycHg7XG4gIHdpZHRoOiA0MnB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogNTBweDtcbiAgcmlnaHQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWFjY2VudC1jb2xvci10d28pO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yLXR3byk7XG4gIHBhZGRpbmc6IDBweCAxMHB4IDBweDtcbn1cblxuZm9vdGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuZm9vdGVyIGEge1xuICBmb250LWZhbWlseTogXCJFbGVjdHJvbGl6ZVwiO1xuICBjb2xvcjogZ3JheTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLDBCQUEwQjtFQUMxQiwyREFBMkQ7RUFDM0QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QiwyREFBd0Q7RUFDeEQsZ0JBQWdCO0VBQ2hCLGtC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LFlBQVk7RUFDWixXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7RUFDZixZQUFZO0VBQ1osVUFBVTtFQUNWLG1CQUFtQjtFQUNuQix5Q0FBeUM7RUFDekMsbUJBQW1CO0VBQ25CLHFDQUFxQztFQUNyQyw4QkFBOEI7RUFDOUIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxlQUFlO0VBQ2YsWUFBWTtFQUNaLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIseUNBQXlDO0VBQ3pDLG1CQUFtQjtFQUNuQixxQ0FBcUM7RUFDckMsOEJBQThCO0VBQzlCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsV0FBVztFQUNYLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsMkJBQTJCO0VBQzNCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixXQUFXO0FBQ2JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkVsZWN0cm9saXplXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuL2ZvbnRzL0VsZWN0cm9saXplLVJlZ3VsYXIud29mZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlF1aWNrc2FuZFxcXCI7XFxuICBzcmM6IHVybChcXFwiLi9mb250cy9RdWlja3NhbmQtTWVkaXVtLndvZmZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJRdWlja3NhbmRcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4vZm9udHMvUXVpY2tzYW5kLUJvbGQud29mZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuOnJvb3QudGhlbWUtMSB7XFxuICAtLW1haW4tY29sb3I6IGJsYWNrO1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yLXR3bzogbGF2ZW5kZXJibHVzaDtcXG4gIC0tYWNjZW50LWNvbG9yOiBzYWxtb247XFxuICAtLWFjY2VudC1jb2xvci10d286IHdoaXRlO1xcbiAgLS1hY2NlbnQtY29sb3ItdGhyZWU6IGxpZ2h0cGluaztcXG4gIC0tcHJpb3JpdHktaGlnaC1jb2xvcjogcGFsZXZpb2xldHJlZDtcXG4gIC0tYWN0aXZlLWNvbG9yOiB0b21hdG87XFxuICAtLWFjdGl2ZS1jb2xvci10d286IHdoaXRlO1xcbiAgLS1pbmFjdGl2ZS1jb2xvcjogc2lsdmVyO1xcbiAgLS1pbmFjdGl2ZS1jb2xvci10d286IGdyYXk7XFxuICAtLWRlZmF1bHQtdGhpY2tuZXNzOiAycHg7XFxufVxcblxcbjpyb290LnRoZW1lLTIge1xcbiAgLS1tYWluLWNvbG9yOiBibGFjaztcXG4gIC0tYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yLXR3bzogd2hpdGVzbW9rZTtcXG4gIC0tYWNjZW50LWNvbG9yOiBtZWRpdW1zbGF0ZWJsdWU7XFxuICAtLWFjY2VudC1jb2xvci10d286IHdoaXRlO1xcbiAgLS1hY2NlbnQtY29sb3ItdGhyZWU6IHRoaXN0bGU7XFxuICAtLXByaW9yaXR5LWhpZ2gtY29sb3I6IHBhbGV2aW9sZXRyZWQ7XFxuICAtLWFjdGl2ZS1jb2xvcjogbWVkaXVtc2xhdGVibHVlO1xcbiAgLS1hY3RpdmUtY29sb3ItdHdvOiB3aGl0ZTtcXG4gIC0taW5hY3RpdmUtY29sb3I6IHNpbHZlcjtcXG4gIC0taW5hY3RpdmUtY29sb3ItdHdvOiBncmF5O1xcbiAgLS1kZWZhdWx0LXRoaWNrbmVzczogMnB4O1xcbn1cXG5cXG5odG1sIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDBweDtcXG4gIHBhZGRpbmc6IDBweDtcXG59XFxuXFxuKixcXG4qOmJlZm9yZSxcXG4qOmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxuICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYge1xcbiAgbWFyZ2luOiAwcHg7XFxufVxcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJRdWlja3NhbmRcXFwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG4gIG1hcmdpbjogMHB4O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbmhlYWRlciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IDE7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3ItdHdvKTtcXG4gIGJvcmRlci1ib3R0b206IHZhcigtLWRlZmF1bHQtdGhpY2tuZXNzKSBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3ItdHdvKTtcXG59XFxuXFxuLmhlYWRlci10b3Atcm93IHtcXG4gIGhlaWdodDogNTZweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG5oMSB7XFxuICBmb250LWZhbWlseTogXFxcIkVsZWN0cm9saXplXFxcIjtcXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZy10b3A6IDVweDtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxubmF2LnNvcnQtYnV0dG9ucy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxubmF2LnNvcnQtYnV0dG9ucy1jb250YWluZXIgYnV0dG9uIHtcXG4gIHdpZHRoOiA5NnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yLXR3byk7XFxuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWFjY2VudC1jb2xvci10d28pO1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUXVpY2tzYW5kXFxcIjtcXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xcbiAgcGFkZGluZzogN3B4IDhweCA1cHg7XFxufVxcblxcbm5hdi5zb3J0LWJ1dHRvbnMtY29udGFpbmVyIGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItdHdvKTtcXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYWNjZW50LWNvbG9yKTtcXG59XFxuXFxubmF2LmJyZWFkY3J1bWItbmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxuICBwYWRkaW5nOiA1cHggMTBweCAwcHg7XFxuICBtYXJnaW46IDBweCAwcHggMTBweDtcXG59XFxuXFxuc3BhbiB7XFxuICBwYWRkaW5nOiAwcHggMTBweCAwcHg7XFxufVxcblxcbnNwYW4uYWxsLXByb2plY3RzIHtcXG4gIGhlaWdodDogMzZweDtcXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYmFja2dyb3VuZC1jb2xvci10d28pO1xcbiAgZm9udC1zaXplOiBtZWRpdW07XFxuICBsZXR0ZXItc3BhY2luZzogMC4yM3B4O1xcbiAgcGFkZGluZzogNnB4IDZweCAzcHg7XFxufVxcblxcbnNwYW4uY3VycmVudC1wcm9qZWN0IHtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICBwYWRkaW5nOiAzcHggNnB4IDNweDtcXG59XFxuXFxuYnV0dG9uLmJ0bi12aWV3LWFsbC1wcm9qZWN0cyB7XFxuICBoZWlnaHQ6IDM2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItdHdvKTtcXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYWNjZW50LWNvbG9yLXR3byk7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJRdWlja3NhbmRcXFwiO1xcbiAgZm9udC1zaXplOiBtZWRpdW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxuICBwYWRkaW5nOiAzcHggNnB4IDNweDtcXG59XFxuXFxuYnV0dG9uLmJ0bi12aWV3LWFsbC1wcm9qZWN0czpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tYWN0aXZlLWNvbG9yKTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWFjdGl2ZS1jb2xvcik7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcXG59XFxuXFxuYnV0dG9uLmJ0bi12aWV3LWFsbC1wcm9qZWN0czo6YWZ0ZXIge1xcbiAgaGVpZ2h0OiAwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxubWFpbiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAwO1xcblxcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBwYWRkaW5nLXRvcDogMTMwcHg7XFxufVxcblxcbi5pdGVtLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmctYm90dG9tOiA4MHB4O1xcbn1cXG5cXG4ucHJvamVjdC1jYXJkLFxcbi50YXNrLWNhcmQge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZmxleDogMTtcXG4gIGJvcmRlcjogdmFyKC0tZGVmYXVsdC10aGlja25lc3MpIHNvbGlkIHZhcigtLWFjY2VudC1jb2xvci10aHJlZSk7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgbWFyZ2luOiAwcHggMHB4IDIwcHg7XFxufVxcblxcbi5wcm9qZWN0LWhlYWRlcixcXG4udGFzay1oZWFkZXIge1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItdGhyZWUpO1xcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xcbiAgcGFkZGluZzogNXB4IDVweCA2cHggNXB4O1xcbn1cXG5cXG4ucHJvamVjdC1oZWFkZXI6aG92ZXIgLmlucHV0LXByb2plY3QtdGl0bGUsXFxuLnRhc2staGVhZGVyOmhvdmVyIC5pbnB1dC10YXNrLXRpdGxlIHtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG59XFxuXFxuLnRhc2staGVhZGVyLmNvbXBsZXRlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbmFjdGl2ZS1jb2xvcik7XFxufVxcblxcbi50YXNrLWRldGFpbHMuY29tcGxldGVkIHtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMS41cyBlYXNlO1xcbiAgb3BhY2l0eTogMDtcXG4gIGhlaWdodDogMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi50YXNrLWRldGFpbHMucGVuZGluZyxcXG4udGFzay1kZXRhaWxzLmNvbXBsZXRlZC52aXNpYmxlIHtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMS41cyBlYXNlO1xcbiAgb3BhY2l0eTogMTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyogVGhpcyBydWxlIGlzIHJlcXVpcmVkIGZvciBjbGljayBldmVudHMgb24gZGlzYWJsZWQgaW5wdXQgZWxlbWVudHMgdG8gcHJvcGFnYXRlIHVwd2FyZHMgb24gc29tZSBicm93c2VycyAqL1xcbmlucHV0W2Rpc2FibGVkXSB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuaW5wdXQuaW5wdXQtdGFzay10aXRsZS5jb21wbGV0ZWQge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi50YXNrLWNhcmQuY29tcGxldGVkIHtcXG4gIGJvcmRlcjogdmFyKC0tZGVmYXVsdC10aGlja25lc3MpIHNvbGlkIHZhcigtLWluYWN0aXZlLWNvbG9yKTtcXG59XFxuXFxuYnV0dG9uLmJ0bi1zYXZlLXByb2plY3QsXFxuYnV0dG9uLmJ0bi1zYXZlLXRhc2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yLXR3byk7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1tYWluLWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDVweCA4cHggNXB4O1xcbn1cXG5cXG5pbnB1dC5pbnB1dC1wcm9qZWN0LXRpdGxlLFxcbmlucHV0LmlucHV0LXRhc2stdGl0bGUge1xcbiAgZmxleDogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yLXR3byk7XFxuICBmb250LWZhbWlseTogXFxcIlF1aWNrc2FuZFxcXCI7XFxuICBmb250LXNpemU6IG1lZGl1bTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxufVxcblxcbmlucHV0LmlucHV0LXByb2plY3QtdGl0bGU6Zm9jdXMsXFxuaW5wdXQuaW5wdXQtdGFzay10aXRsZTpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4ucHJvamVjdC1oZWFkZXItbGVmdCxcXG4udGFzay1oZWFkZXItbGVmdCB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmJ1dHRvbi5idG4tdGFzay1zdGF0dXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItdHdvKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICBwYWRkaW5nOiAwcHggNnB4IDBweDtcXG59XFxuXFxuYnV0dG9uLmJ0bi10YXNrLXN0YXR1cy5wZW5kaW5nOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwi4piQXFxcIjtcXG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxufVxcblxcbmJ1dHRvbi5idG4tdGFzay1zdGF0dXMuY29tcGxldGVkOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwi4piRXFxcIjtcXG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxufVxcblxcbi5wcm9qZWN0LWhlYWRlcjpmb2N1cy13aXRoaW4sXFxuLnRhc2staGVhZGVyOmZvY3VzLXdpdGhpbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbn1cXG5cXG4udGFzay10aXRsZS5jb21wbGV0ZWQge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICB0ZXh0LWRlY29yYXRpb24tY29sb3I6IHZhcigtLWFjY2VudC1jb2xvci10d28pO1xcbiAgdGV4dC1kZWNvcmF0aW9uLXRoaWNrbmVzczogMnB4O1xcbn1cXG5cXG4udGFzay1oZWFkZXItcmlnaHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNnB4O1xcbn1cXG5cXG5idXR0b24uYnRuLXByb2plY3QtbW92ZS1kb3duLFxcbmJ1dHRvbi5idG4tcHJvamVjdC1tb3ZlLXVwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC10aHJlZSk7XFxuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yLXR3byk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgcGFkZGluZzogMHB4IDEwcHg7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbmJ1dHRvbi5idG4tcHJvamVjdC1kZWxldGUsXFxuYnV0dG9uLmJ0bi10YXNrLWRlbGV0ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtdGhyZWUpO1xcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvci10d28pO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHBhZGRpbmc6IDBweCAxMHB4O1xcbn1cXG5cXG5idXR0b24uYnRuLXByb2plY3QtbW92ZS1kb3duOmhvdmVyLFxcbmJ1dHRvbi5idG4tcHJvamVjdC1tb3ZlLXVwOmhvdmVyLFxcbmJ1dHRvbi5idG4tcHJvamVjdC1kZWxldGU6aG92ZXIsXFxuYnV0dG9uLmJ0bi10YXNrLWRlbGV0ZTpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxufVxcblxcbi5wcm9qZWN0LWRldGFpbHMgPiBkaXYsXFxuLnRhc2stZGV0YWlscyA+IGRpdiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItdHdvKTtcXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA5cHggOXB4O1xcbiAgcGFkZGluZzogMTBweCAxNXB4IDEwcHg7XFxufVxcblxcbi50YXNrLWRldGFpbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbnRleHRhcmVhLmlucHV0LXRhc2stZGVzY3JpcHRpb24ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItdHdvKTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUXVpY2tzYW5kXFxcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IG1lZGl1bTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICByZXNpemU6IG5vbmU7XFxuICBwYWRkaW5nOiAxMHB4IDE1cHggMTBweDtcXG59XFxuXFxudGV4dGFyZWEuaW5wdXQtdGFzay1kZXNjcmlwdGlvbi5jb21wbGV0ZWQge1xcbiAgY29sb3I6IGdyYXk7XFxufVxcblxcbi5wcm9qZWN0LWRldGFpbHMgPiAudGFzay1ib3R0b20tcm93LFxcbi50YXNrLWRldGFpbHMgPiAudGFzay1ib3R0b20tcm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci10d28pO1xcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA5cHggOXB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuaW5wdXQuaW5wdXQtdGFzay1kdWUtZGF0ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLXR3byk7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3ItdGhyZWUpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHBhZGRpbmc6IDJweDtcXG59XFxuXFxuaW5wdXRbZGlzYWJsZWRdLmlucHV0LXRhc2stZHVlLWRhdGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pbmFjdGl2ZS1jb2xvcik7XFxufVxcblxcbi50YXNrLWRheXMtcmVtYWluaW5nLFxcbi5idG4tdGFzay1wcmlvcml0eSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgZ2FwOiA1cHg7XFxuICBtaW4td2lkdGg6IDgycHg7XFxuICBjb2xvcjogdmFyKC0taW5hY3RpdmUtY29sb3ItdHdvKTtcXG4gIGZvbnQtc2l6ZTogc21hbGw7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMHB4O1xcbn1cXG5cXG5idXR0b24uYnRuLXRhc2stcHJpb3JpdHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LXRocmVlKTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuc3Bhbi5wcmlvcml0eS1sYWJlbCB7XFxuICBwYWRkaW5nOiAwcHggMnB4IDBweCAwcHg7XFxufVxcblxcbnNwYW4ucHJpb3JpdHktaW5kaWNhdG9yIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC10aHJlZSk7XFxuICBtYXJnaW46IC04cHg7XFxufVxcblxcbnNwYW4ucHJpb3JpdHktaW5kaWNhdG9yLmxvdzo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIuKXj1xcXCI7XFxuICBjb2xvcjogbWVkaXVtc2VhZ3JlZW47XFxuICBmb250LXNpemU6IHh4LWxhcmdlO1xcbn1cXG5cXG5zcGFuLnByaW9yaXR5LWluZGljYXRvci5tZWRpdW06OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCLil49cXFwiO1xcbiAgY29sb3I6IGdvbGQ7XFxuICBmb250LXNpemU6IHh4LWxhcmdlO1xcbn1cXG5cXG5zcGFuLnByaW9yaXR5LWluZGljYXRvci5oaWdoOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwi4pePXFxcIjtcXG4gIGNvbG9yOiBjb3JhbDtcXG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxufVxcblxcbi5wcmlvcml0eS1oaWdoIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW9yaXR5LWhpZ2gtY29sb3IpO1xcbn1cXG5cXG5idXR0b24uYnRuLWJhY2stdG8tYWxsLXByb2plY3RzIHtcXG4gIGhlaWdodDogNDJweDtcXG4gIHdpZHRoOiA0MnB4O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiA1MHB4O1xcbiAgbGVmdDogMjBweDtcXG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3ItdHdvKTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvci10d28pO1xcbiAgcGFkZGluZzogMnB4IDJweCAwcHggMHB4O1xcbn1cXG5cXG5idXR0b24uYnRuLW5ldy1pdGVtIHtcXG4gIGhlaWdodDogNDJweDtcXG4gIHdpZHRoOiA0MnB4O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiA1MHB4O1xcbiAgcmlnaHQ6IDIwcHg7XFxuICBmb250LXNpemU6IHh4LWxhcmdlO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYWNjZW50LWNvbG9yLXR3byk7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItdHdvKTtcXG4gIHBhZGRpbmc6IDBweCAxMHB4IDBweDtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbmZvb3RlciBhIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRWxlY3Ryb2xpemVcXFwiO1xcbiAgY29sb3I6IGdyYXk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4vdGFza1wiO1xuaW1wb3J0IHsgbG9hZFRoZW1lLCB0b2dnbGVUaGVtZSwgcmVuZGVyUHJvamVjdFZpZXdCdXR0b25zLCByZW5kZXJUYXNrVmlld0J1dHRvbnMsIGNsZWFyUHJvamVjdFZpZXdCdXR0b25zLCBjbGVhclRhc2tWaWV3QnV0dG9ucywgcmVuZGVyQnJlYWRjcnVtYk5hdiwgY2xlYXJJdGVtQ29udGFpbmVyLCByZW5kZXJBbGxQcm9qZWN0cywgcmVuZGVyVGFza3MsIHNob3dUYXNrVmlld0J1dHRvbnMsIHNob3dUb3BPZlBhZ2UsIGF1dG9BZGp1c3RIZWlnaHQsdG9nZ2xlVGFza0VsZW1lbnRzLCBjbGlja0hhbmRsZXJDb21wbGV0ZWRUYXNrQ2FyZCB9IGZyb20gXCIuL3ZpZXdcIjsgLy8gcHJldHRpZXItaWdub3JlXG5pbXBvcnQgeyBzYXZlVG9Mb2NhbFN0b3JhZ2UsIGxvYWRGcm9tTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vbG9jYWxTdG9yYWdlXCI7XG5pbXBvcnQgeyBkZW1vUHJvamVjdHMgfSBmcm9tIFwiLi9kZW1vRGF0YVwiO1xuXG5sZXQgcHJvamVjdHMgPSBsb2FkRnJvbUxvY2FsU3RvcmFnZSgpIHx8IGRlbW9Qcm9qZWN0cztcbmxldCB0YXJnZXRQcm9qZWN0O1xubGV0IHZpZXc7XG5cbmNvbnN0IGxvYWRQcm9qZWN0c1ZpZXcgPSBmdW5jdGlvbiAoKSB7XG4gIHZpZXcgPSBcInByb2plY3RzXCI7XG4gIGNsZWFyVGFza1ZpZXdCdXR0b25zKCk7XG4gIHJlbmRlclByb2plY3RWaWV3QnV0dG9ucygpO1xuICBjbGlja0hhbmRsZXJCdG5OZXdJdGVtKCk7XG4gIHJlbmRlckJyZWFkY3J1bWJOYXYodmlldyk7XG4gIGNsZWFySXRlbUNvbnRhaW5lcigpO1xuICByZW5kZXJBbGxQcm9qZWN0cyhwcm9qZWN0cyk7XG4gIGlucHV0SGFuZGxlclByb2plY3RUaXRsZSgpO1xuICBjbGlja0hhbmRsZXJEaXZQcm9qZWN0RGV0YWlscygpO1xuICBjbGlja0hhbmRsZXJCdG5EZWxldGVQcm9qZWN0KCk7XG59O1xuXG5jb25zdCBsb2FkVGFza3NWaWV3ID0gZnVuY3Rpb24gKHRhcmdldFByb2plY3QsIHNvcnRDcml0ZXJpYSkge1xuICB2aWV3ID0gXCJ0YXNrc1wiO1xuICBjbGVhclByb2plY3RWaWV3QnV0dG9ucygpO1xuICByZW5kZXJUYXNrVmlld0J1dHRvbnMoKTtcbiAgY2xpY2tIYW5kbGVyQnRuTmV3SXRlbSgpO1xuICByZW5kZXJCcmVhZGNydW1iTmF2KHZpZXcsIHRhcmdldFByb2plY3QpO1xuICBjbGVhckl0ZW1Db250YWluZXIoKTtcbiAgcmVuZGVyVGFza3ModGFyZ2V0UHJvamVjdC50YXNrcywgc29ydENyaXRlcmlhKTtcbiAgc2hvd1Rhc2tWaWV3QnV0dG9ucyh0YXJnZXRQcm9qZWN0KTtcbiAgY2xpY2tIYW5kbGVyQnRuU29ydEJ5RHVlRGF0ZSh0YXJnZXRQcm9qZWN0KTtcbiAgY2xpY2tIYW5kbGVyQnRuU29ydEJ5UHJpb3JpdHkodGFyZ2V0UHJvamVjdCk7XG4gIGNsaWNrSGFuZGxlckJ0blZpZXdBbGxQcm9qZWN0cygpO1xuICBjbGlja0hhbmRsZXJCdG5CYWNrVG9BbGxQcm9qZWN0cygpO1xuICBjbGlja0hhbmRsZXJDb21wbGV0ZWRUYXNrQ2FyZCgpO1xuICBjbGlja0hhbmRsZXJCdG5UYXNrU3RhdHVzKHRhcmdldFByb2plY3QpO1xuICBpbnB1dEhhbmRsZXJUYXNrVGl0bGUodGFyZ2V0UHJvamVjdCk7XG4gIGNsaWNrSGFuZGxlckJ0bkRlbGV0ZVRhc2soKTtcbiAgaW5wdXRIYW5kbGVyVGFza0Rlc2NyaXB0aW9uKHRhcmdldFByb2plY3QpO1xuICBpbnB1dEhhbmRsZXJUYXNrRHVlRGF0ZSh0YXJnZXRQcm9qZWN0KTtcbiAgY2xpY2tIYW5kbGVyQnRuVGFza1ByaW9yaXR5KHRhcmdldFByb2plY3QpO1xuICBzaG93VG9wT2ZQYWdlKCk7XG59O1xuXG5jb25zdCBjcmVhdGVOZXdQcm9qZWN0ID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QoXCJcIiwgXCJcIiwgW10pO1xuICBwcm9qZWN0LmlkID0gYFAke25ldyBEYXRlKCkuZ2V0VGltZSgpfWA7XG4gIHByb2plY3RzW3Byb2plY3QuaWRdID0gcHJvamVjdDtcbiAgc2F2ZVRvTG9jYWxTdG9yYWdlKCk7XG4gIGNsZWFySXRlbUNvbnRhaW5lcigpO1xuICBsb2FkUHJvamVjdHNWaWV3KCk7XG4gIGNvbnN0IGlucHV0UHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICBcIi5pbnB1dC1wcm9qZWN0LXRpdGxlXCJcbiAgKVswXTtcbiAgaW5wdXRQcm9qZWN0VGl0bGUuZm9jdXMoKTtcbn07XG5cbmNvbnN0IGRlbGV0ZVByb2plY3QgPSBmdW5jdGlvbiAoZSkge1xuICBjb25zdCBwcm9qZWN0SWQgPSBlLnRhcmdldC5jbG9zZXN0KFwiLnByb2plY3QtY2FyZFwiKS5kYXRhc2V0LnByb2plY3RJZDtcbiAgY29uc3QgcHJvamVjdFRpdGxlID0gcHJvamVjdHNbcHJvamVjdElkXS50aXRsZTtcbiAgY29uc3QgY29uZmlybURlbGV0ZSA9IGNvbmZpcm0oXG4gICAgcHJvamVjdFRpdGxlXG4gICAgICA/IGAke3Byb2plY3RUaXRsZX0gLSBEZWxldGUgdGhpcyBwcm9qZWN0P2BcbiAgICAgIDogXCJEZWxldGUgdGhpcyBwcm9qZWN0P1wiXG4gICk7XG4gIGlmICghY29uZmlybURlbGV0ZSkgcmV0dXJuO1xuICBkZWxldGUgcHJvamVjdHNbcHJvamVjdElkXTtcbiAgc2F2ZVRvTG9jYWxTdG9yYWdlKCk7XG4gIGxvYWRQcm9qZWN0c1ZpZXcoKTtcbn07XG5cbmNvbnN0IGNyZWF0ZU5ld1Rhc2sgPSBmdW5jdGlvbiAoKSB7XG4gIGxldCBpZCA9IGBUJHtuZXcgRGF0ZSgpLmdldFRpbWUoKX1gO1xuICB0YXJnZXRQcm9qZWN0LmFkZFRhc2soXG4gICAgbmV3IFRhc2soaWQsIFwiXCIsIFwiXCIsIFwiXCIsIFwicGVuZGluZ1wiLCBcIm1lZGl1bVwiLCBcImVuYWJsZWRcIilcbiAgKTtcbiAgc2F2ZVRvTG9jYWxTdG9yYWdlKCk7XG4gIGNsZWFySXRlbUNvbnRhaW5lcigpO1xuICBsb2FkVGFza3NWaWV3KHRhcmdldFByb2plY3QpO1xuICBjb25zdCBpbnB1dFRhc2tUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXQtdGFzay10aXRsZVwiKTtcbiAgaW5wdXRUYXNrVGl0bGUuZm9jdXMoKTtcbn07XG5cbmNvbnN0IGRlbGV0ZVRhc2sgPSBmdW5jdGlvbiAoZSkge1xuICBjb25zdCB0YXNrSWQgPSBlLnRhcmdldC5jbG9zZXN0KFwiLnRhc2stY2FyZFwiKS5kYXRhc2V0LnRhc2tJZDtcbiAgY29uc3QgdGFza1RpdGxlID0gdGFyZ2V0UHJvamVjdC50YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2suaWQgPT09IHRhc2tJZClbMF1cbiAgICAudGl0bGU7XG4gIGNvbnN0IGNvbmZpcm1EZWxldGUgPSBjb25maXJtKFxuICAgIHRhc2tUaXRsZSA/IGAke3Rhc2tUaXRsZX0gLSBEZWxldGUgdGhpcyB0YXNrP2AgOiBcIkRlbGV0ZSB0aGlzIHRhc2s/XCJcbiAgKTtcbiAgaWYgKCFjb25maXJtRGVsZXRlKSByZXR1cm47XG4gIHRhcmdldFByb2plY3QuZGVsZXRlVGFzayh0YXNrSWQpO1xuICBzYXZlVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgbG9hZFRhc2tzVmlldyh0YXJnZXRQcm9qZWN0KTtcbn07XG5cbi8vIFNhdmUgZnVuY3Rpb25zIHRyaWdnZXJlZCBieSBpbnB1dHMvZWRpdHNcblxuY29uc3QgYXV0b1NhdmVQcm9qZWN0VGl0bGVDaGFuZ2VzID0gZnVuY3Rpb24gKHByb2plY3RJZCwgdGl0bGUpIHtcbiAgcHJvamVjdHNbcHJvamVjdElkXS50aXRsZSA9IHRpdGxlLnZhbHVlO1xuICBzYXZlVG9Mb2NhbFN0b3JhZ2UoKTtcbn07XG5cbmNvbnN0IHRvZ2dsZVRhc2tTdGF0dXMgPSBmdW5jdGlvbiAodGFyZ2V0UHJvamVjdCwgdGFza0lkKSB7XG4gIHRhcmdldFByb2plY3QudGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIGlmICh0YXNrLmlkID09PSB0YXNrSWQpIHtcbiAgICAgIHRhc2suc3RhdHVzID09PSBcInBlbmRpbmdcIlxuICAgICAgICA/ICh0YXNrLnN0YXR1cyA9IFwiY29tcGxldGVkXCIpXG4gICAgICAgIDogKHRhc2suc3RhdHVzID0gXCJwZW5kaW5nXCIpO1xuXG4gICAgICB0YXNrLmlucHV0U3RhdHVzID09PSBcImVuYWJsZWRcIlxuICAgICAgICA/ICh0YXNrLmlucHV0U3RhdHVzID0gXCJkaXNhYmxlZFwiKVxuICAgICAgICA6ICh0YXNrLmlucHV0U3RhdHVzID0gXCJlbmFibGVkXCIpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCBhdXRvU2F2ZVRhc2tUaXRsZUNoYW5nZXMgPSBmdW5jdGlvbiAodGFyZ2V0UHJvamVjdCwgdGFza0lkLCB0YXNrVGl0bGUpIHtcbiAgdGFyZ2V0UHJvamVjdC50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgaWYgKHRhc2suaWQgPT09IHRhc2tJZCkgdGFzay50aXRsZSA9IHRhc2tUaXRsZS52YWx1ZTtcbiAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgfSk7XG59O1xuXG4vLyBwcmV0dGllci1pZ25vcmVcbmNvbnN0IGF1dG9TYXZlVGFza0Rlc2NyaXB0aW9uQ2hhbmdlcyA9IGZ1bmN0aW9uICh0YXJnZXRQcm9qZWN0LCB0YXNrSWQsIHRhc2tEZXNjcmlwdGlvbkVsKSB7XG4gIHRhcmdldFByb2plY3QudGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIGlmICh0YXNrLmlkID09PSB0YXNrSWQpIHRhc2suZGVzY3JpcHRpb24gPSB0YXNrRGVzY3JpcHRpb25FbC52YWx1ZTtcbiAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgfSk7XG59O1xuXG4vLyBwcmV0dGllci1pZ25vcmVcbmNvbnN0IGF1dG9TYXZlVGFza0R1ZURhdGVDaGFuZ2VzID0gZnVuY3Rpb24gKHRhcmdldFByb2plY3QsIHRhc2tJZCwgdGFza0R1ZURhdGVFbCkge1xuICB0YXJnZXRQcm9qZWN0LnRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICBpZiAodGFzay5pZCA9PT0gdGFza0lkKSB0YXNrLmR1ZURhdGUgPSB0YXNrRHVlRGF0ZUVsLnZhbHVlO1xuICAgIHNhdmVUb0xvY2FsU3RvcmFnZSgpO1xuICB9KTtcbn07XG5cbi8vIHByZXR0aWVyLWlnbm9yZVxuY29uc3QgdXBkYXRlRGF5c1JlbWFpbmluZyA9IGZ1bmN0aW9uICh0YXJnZXRQcm9qZWN0LCB0YXNrSWQsIGUpIHtcbiAgY29uc3QgdGFza0RheXNSZW1haW5pbmdFbCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWRheXMtcmVtYWluaW5nXCIpO1xuICB0YXJnZXRQcm9qZWN0LnRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICBpZiAodGFzay5pZCA9PT0gdGFza0lkKSB0YXNrRGF5c1JlbWFpbmluZ0VsLmlubmVySFRNTCA9IHRhc2suZ2V0RGF5c1JlbWFpbmluZygpO1xuICB9KVxufTtcblxuLy8gcHJldHRpZXItaWdub3JlXG5jb25zdCB0b2dnbGVUYXNrUHJpb3J0eSA9IGZ1bmN0aW9uICh0YXJnZXRQcm9qZWN0LCB0YXNrSWQsIGJ1dHRvbikge1xuICBjb25zdCBwcmlvcml0eUxldmVsU2hpZnRlciA9IHsgbG93OiBcIm1lZGl1bVwiLCBtZWRpdW06IFwiaGlnaFwiLCBoaWdoOiBcImxvd1wiIH07XG4gIHRhcmdldFByb2plY3QudGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIGlmICh0YXNrLmlkID09PSB0YXNrSWQpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRMZXZlbCA9IHRhc2sucHJpb3JpdHk7XG4gICAgICBjb25zdCBuZXh0TGV2ZWwgPSBwcmlvcml0eUxldmVsU2hpZnRlclt0YXNrLnByaW9yaXR5XTtcbiAgICAgIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBidXR0b24ucXVlcnlTZWxlY3RvcihcIi5wcmlvcml0eS1sYWJlbFwiKVxuICAgICAgY29uc3QgcHJpb3JpdHlJbmRpY2F0b3IgPSBidXR0b24ucXVlcnlTZWxlY3RvcihcIi5wcmlvcml0eS1pbmRpY2F0b3JcIilcbiAgICAgIGNvbnN0IHRhc2tDYXJkID0gYnV0dG9uLmNsb3Nlc3QoXCIudGFzay1jYXJkXCIpXG4gICAgICBwcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gbmV4dExldmVsO1xuICAgICAgcHJpb3JpdHlJbmRpY2F0b3IuY2xhc3NMaXN0LnJlcGxhY2UoY3VycmVudExldmVsLCBuZXh0TGV2ZWwpO1xuICAgICAgdGFza0NhcmQuY2xhc3NMaXN0LnJlcGxhY2UoY3VycmVudExldmVsLCBuZXh0TGV2ZWwpO1xuICAgICAgdGFzay5wcmlvcml0eSA9IG5leHRMZXZlbDtcbiAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UoKVxuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCBzb3J0QnlEdWVEYXRlID0gZnVuY3Rpb24gKHRhcmdldFByb2plY3QpIHtcbiAgbG9hZFRhc2tzVmlldyh0YXJnZXRQcm9qZWN0LCBcImR1ZURhdGVcIik7XG59O1xuXG5jb25zdCBzb3J0QnlQcmlvcml0eSA9IGZ1bmN0aW9uICh0YXJnZXRQcm9qZWN0KSB7XG4gIGxvYWRUYXNrc1ZpZXcodGFyZ2V0UHJvamVjdCwgXCJwcmlvcml0eVwiKTtcbn07XG5cbi8vIEV2ZW50IGhhbmRsZXJzIC0gTmF2aWdhdGlvblxuXG5jb25zdCBjbGlja0hhbmRsZXJEaXZQcm9qZWN0RGV0YWlscyA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgcHJvamVjdERldGFpbHNOTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdC1kZXRhaWxzXCIpO1xuICBwcm9qZWN0RGV0YWlsc05MLmZvckVhY2goKHByb2plY3REZXRhaWwpID0+IHtcbiAgICBwcm9qZWN0RGV0YWlsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjb25zdCBwcm9qZWN0Q2FyZElkID0gcHJvamVjdERldGFpbC5wYXJlbnRFbGVtZW50LmRhdGFzZXQucHJvamVjdElkO1xuICAgICAgdGFyZ2V0UHJvamVjdCA9IHByb2plY3RzW3Byb2plY3RDYXJkSWRdO1xuICAgICAgbG9hZFRhc2tzVmlldyh0YXJnZXRQcm9qZWN0KTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCBjbGlja0hhbmRsZXJCdG5WaWV3QWxsUHJvamVjdHMgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGJ0blZpZXdBbGxQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLXZpZXctYWxsLXByb2plY3RzXCIpO1xuICBidG5WaWV3QWxsUHJvamVjdHMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBsb2FkUHJvamVjdHNWaWV3KCk7XG4gIH0pO1xufTtcblxuY29uc3QgY2xpY2tIYW5kbGVyQnRuQmFja1RvQWxsUHJvamVjdHMgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGJ0bkJhY2tUb0FsbFByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG4tYmFjay10by1hbGwtcHJvamVjdHNcIik7IC8vIHByZXR0aWVyLWlnbm9yZVxuICBidG5CYWNrVG9BbGxQcm9qZWN0cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGxvYWRQcm9qZWN0c1ZpZXcoKTtcbiAgfSk7XG59O1xuXG5jb25zdCBjbGlja0hhbmRsZXJCdG5Tb3J0QnlEdWVEYXRlID0gZnVuY3Rpb24gKHRhcmdldFByb2plY3QpIHtcbiAgY29uc3QgYnRuU29ydEJ5RHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLXNvcnQtZHVlLWRhdGVcIik7XG4gIGJ0blNvcnRCeUR1ZURhdGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+XG4gICAgc29ydEJ5RHVlRGF0ZSh0YXJnZXRQcm9qZWN0KVxuICApO1xufTtcblxuY29uc3QgY2xpY2tIYW5kbGVyQnRuU29ydEJ5UHJpb3JpdHkgPSBmdW5jdGlvbiAodGFyZ2V0UHJvamVjdCkge1xuICBjb25zdCBidG5Tb3J0QnlQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLXNvcnQtcHJpb3JpdHlcIik7XG4gIGJ0blNvcnRCeVByaW9yaXR5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PlxuICAgIHNvcnRCeVByaW9yaXR5KHRhcmdldFByb2plY3QpXG4gICk7XG59O1xuXG4vLyBFdmVudCBoYW5kbGVycyAtIENyZWF0ZSBhbmQgZGVsZXRlIGl0ZW1zXG5cbmNvbnN0IGNsaWNrSGFuZGxlckJ0bk5ld0l0ZW0gPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGJ0bk5ld0l0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1uZXctaXRlbVwiKTtcbiAgYnRuTmV3SXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlmICh2aWV3ID09PSBcInByb2plY3RzXCIpIGNyZWF0ZU5ld1Byb2plY3QoKTtcbiAgICBpZiAodmlldyA9PT0gXCJ0YXNrc1wiKSBjcmVhdGVOZXdUYXNrKCk7XG4gIH0pO1xufTtcblxuY29uc3QgY2xpY2tIYW5kbGVyQnRuRGVsZXRlUHJvamVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgZGVsZXRlUHJvamVjdEJ1dHRvbnNOTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgXCIuYnRuLXByb2plY3QtZGVsZXRlXCJcbiAgKTtcbiAgZGVsZXRlUHJvamVjdEJ1dHRvbnNOTC5mb3JFYWNoKChidXR0b24pID0+XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkZWxldGVQcm9qZWN0LmJpbmQodGhpcykpXG4gICk7XG59O1xuXG5jb25zdCBjbGlja0hhbmRsZXJCdG5EZWxldGVUYXNrID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBkZWxldGVUYXNrQnV0dG9uc05MID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5idG4tdGFzay1kZWxldGVcIik7XG4gIGRlbGV0ZVRhc2tCdXR0b25zTkwuZm9yRWFjaCgoYnV0dG9uKSA9PlxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGVsZXRlVGFzay5iaW5kKHRoaXMpKVxuICApO1xufTtcblxuLy8gRXZlbnQgaGFuZGxlcnMgLSBJbnB1dHMvZWRpdHMgbWFkZSB0byBwcm9qZWN0cyBhbmQgdGFza3NcblxuY29uc3QgaW5wdXRIYW5kbGVyUHJvamVjdFRpdGxlID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBwcm9qZWN0VGl0bGVzTkwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmlucHV0LXByb2plY3QtdGl0bGVcIik7XG5cbiAgaWYgKCFwcm9qZWN0VGl0bGVzTkwpIHJldHVybjtcblxuICBwcm9qZWN0VGl0bGVzTkwuZm9yRWFjaCgodGl0bGUpID0+XG4gICAgdGl0bGUuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XG4gICAgICBjb25zdCBwcm9qZWN0SWQgPSBlLnRhcmdldC5jbG9zZXN0KFwiLnByb2plY3QtY2FyZFwiKS5kYXRhc2V0LnByb2plY3RJZDtcbiAgICAgIGF1dG9TYXZlUHJvamVjdFRpdGxlQ2hhbmdlcyhwcm9qZWN0SWQsIHRpdGxlKTtcbiAgICB9KVxuICApO1xufTtcblxuLy8gcHJldHRpZXItaWdub3JlXG5jb25zdCBjbGlja0hhbmRsZXJCdG5UYXNrU3RhdHVzID0gZnVuY3Rpb24gKHRhcmdldFByb2plY3QpIHtcbiAgY29uc3QgYnRuVGFza1BlbmRpbmdOTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYnRuLXRhc2stc3RhdHVzXCIpO1xuICBidG5UYXNrUGVuZGluZ05MLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBidXR0b24uYmx1cigpO1xuICAgICAgY29uc3QgdGFza0NhcmQgPSBlLnRhcmdldC5jbG9zZXN0KFwiLnRhc2stY2FyZFwiKTtcbiAgICAgIGNvbnN0IHRhc2tJZCA9IHRhc2tDYXJkLmRhdGFzZXQudGFza0lkO1xuICAgICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uRWwgPSB0YXNrQ2FyZC5xdWVyeVNlbGVjdG9yKFwiLmlucHV0LXRhc2stZGVzY3JpcHRpb25cIik7XG4gICAgICB0b2dnbGVUYXNrU3RhdHVzKHRhcmdldFByb2plY3QsIHRhc2tJZCk7XG4gICAgICB0b2dnbGVUYXNrRWxlbWVudHMoYnV0dG9uKTtcbiAgICAgIGF1dG9BZGp1c3RIZWlnaHQodGFza0Rlc2NyaXB0aW9uRWwpO1xuICAgICAgc2F2ZVRvTG9jYWxTdG9yYWdlKCk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3QgaW5wdXRIYW5kbGVyVGFza1RpdGxlID0gZnVuY3Rpb24gKHRhcmdldFByb2plY3QpIHtcbiAgY29uc3QgdGFza1RpdGxlc05MID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pbnB1dC10YXNrLXRpdGxlXCIpO1xuXG4gIGlmICghdGFza1RpdGxlc05MKSByZXR1cm47XG5cbiAgdGFza1RpdGxlc05MLmZvckVhY2goKHRpdGxlKSA9PlxuICAgIHRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xuICAgICAgY29uc3QgdGFza0lkID0gZS50YXJnZXQuY2xvc2VzdChcIi50YXNrLWNhcmRcIikuZGF0YXNldC50YXNrSWQ7XG4gICAgICBhdXRvU2F2ZVRhc2tUaXRsZUNoYW5nZXModGFyZ2V0UHJvamVjdCwgdGFza0lkLCB0aXRsZSk7XG4gICAgfSlcbiAgKTtcbn07XG5cbi8vIHByZXR0aWVyLWlnbm9yZVxuY29uc3QgaW5wdXRIYW5kbGVyVGFza0Rlc2NyaXB0aW9uID0gZnVuY3Rpb24gKHRhcmdldFByb2plY3QpIHtcbiAgY29uc3QgdGFza0Rlc2NyaXB0aW9uc05MID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pbnB1dC10YXNrLWRlc2NyaXB0aW9uXCIpO1xuXG4gIGlmICghdGFza0Rlc2NyaXB0aW9uc05MKSByZXR1cm47XG5cbiAgdGFza0Rlc2NyaXB0aW9uc05MLmZvckVhY2goKHRhc2tEZXNjcmlwdGlvbkVsKSA9PiB7XG4gICAgYXV0b0FkanVzdEhlaWdodCh0YXNrRGVzY3JpcHRpb25FbCk7XG5cbiAgICB0YXNrRGVzY3JpcHRpb25FbC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcbiAgICAgIGNvbnN0IHRhc2tJZCA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIudGFzay1jYXJkXCIpLmRhdGFzZXQudGFza0lkO1xuICAgICAgYXV0b1NhdmVUYXNrRGVzY3JpcHRpb25DaGFuZ2VzKHRhcmdldFByb2plY3QsIHRhc2tJZCwgdGFza0Rlc2NyaXB0aW9uRWwpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IGlucHV0SGFuZGxlclRhc2tEdWVEYXRlID0gZnVuY3Rpb24gKHRhcmdldFByb2plY3QpIHtcbiAgY29uc3QgdGFza0R1ZURhdGVOTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaW5wdXQtdGFzay1kdWUtZGF0ZVwiKTtcblxuICBpZiAoIXRhc2tEdWVEYXRlTkwpIHJldHVybjtcblxuICB0YXNrRHVlRGF0ZU5MLmZvckVhY2goKHRhc2tEdWVEYXRlRWwpID0+XG4gICAgdGFza0R1ZURhdGVFbC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcbiAgICAgIGNvbnN0IHRhc2tJZCA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIudGFzay1jYXJkXCIpLmRhdGFzZXQudGFza0lkO1xuICAgICAgYXV0b1NhdmVUYXNrRHVlRGF0ZUNoYW5nZXModGFyZ2V0UHJvamVjdCwgdGFza0lkLCB0YXNrRHVlRGF0ZUVsKTtcbiAgICAgIHVwZGF0ZURheXNSZW1haW5pbmcodGFyZ2V0UHJvamVjdCwgdGFza0lkLCBlKTtcbiAgICB9KVxuICApO1xufTtcblxuY29uc3QgY2xpY2tIYW5kbGVyQnRuVGFza1ByaW9yaXR5ID0gZnVuY3Rpb24gKHRhcmdldFByb2plY3QpIHtcbiAgY29uc3QgYnRuVGFza1ByaW9yaXR5TkwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJ0bi10YXNrLXByaW9yaXR5XCIpO1xuICBidG5UYXNrUHJpb3JpdHlOTC5mb3JFYWNoKChidXR0b24pID0+XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgY29uc3QgdGFza0lkID0gZS50YXJnZXQuY2xvc2VzdChcIi50YXNrLWNhcmRcIikuZGF0YXNldC50YXNrSWQ7XG4gICAgICB0b2dnbGVUYXNrUHJpb3J0eSh0YXJnZXRQcm9qZWN0LCB0YXNrSWQsIGJ1dHRvbik7XG4gICAgfSlcbiAgKTtcbn07XG5cbi8vIEluaXRpYWxpemUgYXBwXG5jb25zdCBpbml0QXBwID0gZnVuY3Rpb24gKCkge1xuICBsb2FkUHJvamVjdHNWaWV3KCk7XG4gIHJlbmRlclByb2plY3RWaWV3QnV0dG9ucygpO1xuICBjbGlja0hhbmRsZXJCdG5OZXdJdGVtKCk7XG4gIGxvYWRUaGVtZSgpO1xuICB0b2dnbGVUaGVtZSgpO1xufTtcblxuZXhwb3J0IHsgcHJvamVjdHMsIGluaXRBcHAgfTtcbiIsImV4cG9ydCBjbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IoaWQsIHRpdGxlLCB0YXNrcykge1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy50YXNrcyA9IHRhc2tzO1xuICB9XG5cbiAgYWRkVGFzayh0YXNrKSB7XG4gICAgdGhpcy50YXNrcy5wdXNoKHRhc2spO1xuICB9XG5cbiAgZGVsZXRlVGFzayh0YXNrSWQpIHtcbiAgICBjb25zdCByZW1haW5pbmdUYXNrcyA9IHRoaXMudGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmlkICE9PSB0YXNrSWQpO1xuICAgIHRoaXMudGFza3MgPSByZW1haW5pbmdUYXNrcztcbiAgfVxufVxuIiwiaW1wb3J0IHsgZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5cbmV4cG9ydCBjbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IoaWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgc3RhdHVzLCBwcmlvcml0eSwgaW5wdXRTdGF0dXMpIHtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLmlucHV0U3RhdHVzID0gaW5wdXRTdGF0dXM7XG4gIH1cblxuICBnZXREYXlzUmVtYWluaW5nKCkge1xuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCBkdWVEYXRlID0gRGF0ZS5wYXJzZSh0aGlzLmR1ZURhdGUpO1xuXG4gICAgaWYgKCF0aGlzLmR1ZURhdGUpIHJldHVybiBgbm8gZHVlIGRhdGVgO1xuXG4gICAgY29uc3QgZGF5c1JlbWFpbmluZyA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhkdWVEYXRlLCB0b2RheSk7XG5cbiAgICBpZiAoZGF5c1JlbWFpbmluZyA8IC0xKSByZXR1cm4gYGR1ZSAkey1kYXlzUmVtYWluaW5nfSBkYXlzIGFnb2A7XG4gICAgaWYgKGRheXNSZW1haW5pbmcgPT09IC0xKSByZXR1cm4gYGR1ZSAxIGRheSBhZ29gO1xuICAgIGlmIChkYXlzUmVtYWluaW5nID09PSAwKSByZXR1cm4gYGR1ZSB0b2RheWA7XG4gICAgaWYgKGRheXNSZW1haW5pbmcgPT09IDEpIHJldHVybiBgZHVlIGluIDEgZGF5YDtcbiAgICBpZiAoZGF5c1JlbWFpbmluZyA+IDEpIHJldHVybiBgZHVlIGluICR7ZGF5c1JlbWFpbmluZ30gZGF5c2A7XG4gIH1cbn1cbiIsImltcG9ydCBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mRGF5IGZyb20gXCIuLi9zdGFydE9mRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9EQVkgPSA4NjQwMDAwMDtcblxuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXNcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgZGF5cyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIGRheXMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuIFRoaXMgbWVhbnMgdGhhdCB0aGUgdGltZXMgYXJlIHJlbW92ZWRcbiAqIGZyb20gdGhlIGRhdGVzIGFuZCB0aGVuIHRoZSBkaWZmZXJlbmNlIGluIGRheXMgaXMgY2FsY3VsYXRlZC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgZWFybGllciBkYXRlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIGRheXNcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgY2FsZW5kYXIgZGF5cyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTEgMjM6MDA6MDAgYW5kIDIgSnVseSAyMDEyIDAwOjAwOjAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKFxuICogICBuZXcgRGF0ZSgyMDEyLCA2LCAyLCAwLCAwKSxcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMiwgMjMsIDApXG4gKiApXG4gKiAvLz0+IDM2NlxuICogLy8gSG93IG1hbnkgY2FsZW5kYXIgZGF5cyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTEgMjM6NTk6MDAgYW5kIDMgSnVseSAyMDExIDAwOjAxOjAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAzLCAwLCAxKSxcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMiwgMjMsIDU5KVxuICogKVxuICogLy89PiAxXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIHN0YXJ0T2ZEYXlMZWZ0ID0gc3RhcnRPZkRheShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIHN0YXJ0T2ZEYXlSaWdodCA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlUmlnaHQpO1xuICB2YXIgdGltZXN0YW1wTGVmdCA9IHN0YXJ0T2ZEYXlMZWZ0LmdldFRpbWUoKSAtIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoc3RhcnRPZkRheUxlZnQpO1xuICB2YXIgdGltZXN0YW1wUmlnaHQgPSBzdGFydE9mRGF5UmlnaHQuZ2V0VGltZSgpIC0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhzdGFydE9mRGF5UmlnaHQpO1xuXG4gIC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSBkYXkgaXMgbm90IGNvbnN0YW50XG4gIC8vIChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSBkYXkgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuICByZXR1cm4gTWF0aC5yb3VuZCgodGltZXN0YW1wTGVmdCAtIHRpbWVzdGFtcFJpZ2h0KSAvIE1JTExJU0VDT05EU19JTl9EQVkpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSBkYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSBkYXkgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mRGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZlwiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpO1xuXG4gIC8vIENsb25lIHRoZSBkYXRlXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZihhcmd1bWVudCkgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNzdHJpbmctYXJndW1lbnRzXCIpO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3R5cGVvZihvKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvO1xuICB9IDogZnVuY3Rpb24gKG8pIHtcbiAgICByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbztcbiAgfSwgX3R5cGVvZihvKTtcbn0iLCIvKipcbiAqIEdvb2dsZSBDaHJvbWUgYXMgb2YgNjcuMC4zMzk2Ljg3IGludHJvZHVjZWQgdGltZXpvbmVzIHdpdGggb2Zmc2V0IHRoYXQgaW5jbHVkZXMgc2Vjb25kcy5cbiAqIFRoZXkgdXN1YWxseSBhcHBlYXIgZm9yIGRhdGVzIHRoYXQgZGVub3RlIHRpbWUgYmVmb3JlIHRoZSB0aW1lem9uZXMgd2VyZSBpbnRyb2R1Y2VkXG4gKiAoZS5nLiBmb3IgJ0V1cm9wZS9QcmFndWUnIHRpbWV6b25lIHRoZSBvZmZzZXQgaXMgR01UKzAwOjU3OjQ0IGJlZm9yZSAxIE9jdG9iZXIgMTg5MVxuICogYW5kIEdNVCswMTowMDowMCBhZnRlciB0aGF0IGRhdGUpXG4gKlxuICogRGF0ZSNnZXRUaW1lem9uZU9mZnNldCByZXR1cm5zIHRoZSBvZmZzZXQgaW4gbWludXRlcyBhbmQgd291bGQgcmV0dXJuIDU3IGZvciB0aGUgZXhhbXBsZSBhYm92ZSxcbiAqIHdoaWNoIHdvdWxkIGxlYWQgdG8gaW5jb3JyZWN0IGNhbGN1bGF0aW9ucy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHRpbWV6b25lIG9mZnNldCBpbiBtaWxsaXNlY29uZHMgdGhhdCB0YWtlcyBzZWNvbmRzIGluIGFjY291bnQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZSkge1xuICB2YXIgdXRjRGF0ZSA9IG5ldyBEYXRlKERhdGUuVVRDKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSwgZGF0ZS5nZXRIb3VycygpLCBkYXRlLmdldE1pbnV0ZXMoKSwgZGF0ZS5nZXRTZWNvbmRzKCksIGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkpKTtcbiAgdXRjRGF0ZS5zZXRVVENGdWxsWWVhcihkYXRlLmdldEZ1bGxZZWFyKCkpO1xuICByZXR1cm4gZGF0ZS5nZXRUaW1lKCkgLSB1dGNEYXRlLmdldFRpbWUoKTtcbn0iLCJjb25zdCBoMUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgxXCIpO1xuY29uc3QgYnJlYWRjcnVtYk5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYnJlYWRjcnVtYi1uYXZcIik7XG5jb25zdCBzb3J0QnV0dG9uc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc29ydC1idXR0b25zLWNvbnRhaW5lclwiKTtcbmNvbnN0IGl0ZW1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLml0ZW0tY29udGFpbmVyXCIpO1xuY29uc3QgbG93ZXJCdXR0b25zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb3dlci1idXR0b25zLWNvbnRhaW5lclwiKTsgLy8gcHJldHRpZXItaWdub3JlXG5cbmNvbnN0IHNldFRoZW1lID0gZnVuY3Rpb24gKHRoZW1lKSB7XG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc05hbWUgPSB0aGVtZTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0aGVtZVwiLCB0aGVtZSk7XG59O1xuXG5jb25zdCBsb2FkVGhlbWUgPSBmdW5jdGlvbiAoKSB7XG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRoZW1lXCIpICE9PSBudWxsKSB7XG4gICAgc2V0VGhlbWUobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0aGVtZVwiKSk7XG4gIH0gZWxzZSB7XG4gICAgc2V0VGhlbWUoXCJ0aGVtZS0xXCIpO1xuICB9XG59O1xuXG5jb25zdCB0b2dnbGVUaGVtZSA9IGZ1bmN0aW9uICgpIHtcbiAgaDFFbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc05hbWUgPT09IFwidGhlbWUtMVwiXG4gICAgICA/IHNldFRoZW1lKFwidGhlbWUtMlwiKVxuICAgICAgOiBzZXRUaGVtZShcInRoZW1lLTFcIik7XG4gIH0pO1xufTtcblxuY29uc3QgcmVuZGVyQnJlYWRjcnVtYk5hdiA9IGZ1bmN0aW9uICh2aWV3LCBjdXJyZW50UHJvamVjdCkge1xuICBpZiAodmlldyA9PT0gXCJwcm9qZWN0c1wiKSB7XG4gICAgYnJlYWRjcnVtYk5hdi5mb3JFYWNoKChlbGVtZW50KSA9PiAoZWxlbWVudC5pbm5lckhUTUwgPSBgYCkpO1xuICAgIGJyZWFkY3J1bWJOYXYuZm9yRWFjaChcbiAgICAgIChlbGVtZW50KSA9PlxuICAgICAgICAoZWxlbWVudC5pbm5lckhUTUwgPSBgXG4gIDxzcGFuIGNsYXNzPVwiYWxsLXByb2plY3RzXCI+QWxsIFByb2plY3RzPC9zcGFuPlxuICA8c3BhbiBjbGFzcz1cInNlcGFyYXRvclwiPj48L3NwYW4+XG4gIGApXG4gICAgKTtcbiAgfVxuXG4gIGlmICh2aWV3ID09PSBcInRhc2tzXCIpIHtcbiAgICBicmVhZGNydW1iTmF2LmZvckVhY2goKGVsZW1lbnQpID0+IChlbGVtZW50LmlubmVySFRNTCA9IGBgKSk7XG4gICAgYnJlYWRjcnVtYk5hdi5mb3JFYWNoKFxuICAgICAgKGVsZW1lbnQpID0+XG4gICAgICAgIChlbGVtZW50LmlubmVySFRNTCA9IGBcbiAgPGJ1dHRvbiBjbGFzcz1cImJ0bi12aWV3LWFsbC1wcm9qZWN0c1wiPkFsbCBQcm9qZWN0czwvYnV0dG9uPlxuICA8c3BhbiBjbGFzcz1cInNlcGFyYXRvclwiPj48L3NwYW4+XG4gIDxzcGFuIGNsYXNzPVwiY3VycmVudC1wcm9qZWN0XCI+JHtjdXJyZW50UHJvamVjdC50aXRsZX08L3NwYW4+XG4gIGApXG4gICAgKTtcbiAgfVxufTtcblxuY29uc3QgcmVuZGVyUHJvamVjdFZpZXdCdXR0b25zID0gZnVuY3Rpb24gKCkge1xuICBsb3dlckJ1dHRvbnNDb250YWluZXIuaW5uZXJIVE1MID0gYFxuICA8YnV0dG9uIGNsYXNzPVwiYnRuLW5ldy1pdGVtXCI+KzwvYnV0dG9uPlxuICBgO1xufTtcblxuY29uc3QgY2xlYXJQcm9qZWN0Vmlld0J1dHRvbnMgPSBmdW5jdGlvbiAoKSB7XG4gIHNvcnRCdXR0b25zQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gIGxvd2VyQnV0dG9uc0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xufTtcblxuY29uc3QgcmVuZGVyVGFza1ZpZXdCdXR0b25zID0gZnVuY3Rpb24gKCkge1xuICBzb3J0QnV0dG9uc0NvbnRhaW5lci5pbm5lckhUTUwgPSBgXG4gIDxidXR0b24gY2xhc3M9XCJidG4tc29ydC1kdWUtZGF0ZVwiPkR1ZSBEYXRlPC9idXR0b24+XG4gIDxidXR0b24gY2xhc3M9XCJidG4tc29ydC1wcmlvcml0eVwiPlByaW9yaXR5PC9idXR0b24+XG4gIGA7XG5cbiAgbG93ZXJCdXR0b25zQ29udGFpbmVyLmlubmVySFRNTCA9IGBcbiAgPGJ1dHRvbiBjbGFzcz1cImJ0bi1iYWNrLXRvLWFsbC1wcm9qZWN0c1wiPiZsdDwvYnV0dG9uPlxuICA8YnV0dG9uIGNsYXNzPVwiYnRuLW5ldy1pdGVtXCI+KzwvYnV0dG9uPlxuICBgO1xufTtcblxuY29uc3QgY2xlYXJUYXNrVmlld0J1dHRvbnMgPSBmdW5jdGlvbiAoKSB7XG4gIHNvcnRCdXR0b25zQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gIGxvd2VyQnV0dG9uc0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xufTtcblxuY29uc3QgY2xlYXJJdGVtQ29udGFpbmVyID0gZnVuY3Rpb24gKCkge1xuICBpdGVtQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG59O1xuXG5jb25zdCByZW5kZXJQcm9qZWN0Q2FyZCA9IGZ1bmN0aW9uIChwcm9qZWN0KSB7XG4gIGNvbnN0IHJlbmRlclByb2plY3REZXRhaWxzID0gZnVuY3Rpb24gKHByb2plY3QpIHtcbiAgICBsZXQgdGFza0NvdW50ID0gMDtcbiAgICBwcm9qZWN0LnRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIGlmICh0YXNrLnN0YXR1cyA9PT0gXCJwZW5kaW5nXCIpIHRhc2tDb3VudCArPSAxO1xuICAgIH0pO1xuICAgIHJldHVybiBgJHt0YXNrQ291bnR9IHBlbmRpbmcgdGFza3NgO1xuICB9O1xuXG4gIGNvbnN0IHByb2plY3RDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJvamVjdENhcmQuY2xhc3NOYW1lID0gXCJwcm9qZWN0LWNhcmRcIjtcbiAgcHJvamVjdENhcmQuZGF0YXNldC5wcm9qZWN0SWQgPSBwcm9qZWN0LmlkO1xuICBwcm9qZWN0Q2FyZC5pbm5lckhUTUwgPSBgXG4gIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWhlYWRlclwiPlxuICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWhlYWRlci1sZWZ0XCI+XG4gICAgICA8aW5wdXQgY2xhc3M9XCJpbnB1dC1wcm9qZWN0LXRpdGxlXCIgdmFsdWU9XCIke1xuICAgICAgICBwcm9qZWN0LnRpdGxlXG4gICAgICB9XCIgbWF4bGVuZ3RoPVwiMjhcIi8+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInByb2plY3QtaGVhZGVyLXJpZ2h0XCI+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuLXByb2plY3QtbW92ZS1kb3duXCI+4ZCvPC9idXR0b24+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuLXByb2plY3QtbW92ZS11cFwiPuGQsTwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bi1wcm9qZWN0LWRlbGV0ZVwiPlg8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWRldGFpbHNcIj5cbiAgICA8ZGl2PlxuICAgICAgJHtyZW5kZXJQcm9qZWN0RGV0YWlscyhwcm9qZWN0KX1cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIGA7XG5cbiAgcmV0dXJuIHByb2plY3RDYXJkO1xufTtcblxuLy8gcHJldHRpZXItaWdub3JlXG5jb25zdCByZW5kZXJUYXNrQ2FyZCA9IGZ1bmN0aW9uICh0YXNrKSB7XG4gIGNvbnN0IHRhc2tDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGFza0NhcmQuY2xhc3NOYW1lID0gXCJ0YXNrLWNhcmRcIjtcbiAgdGFza0NhcmQuZGF0YXNldC50YXNrSWQgPSB0YXNrLmlkO1xuICB0YXNrQ2FyZC5jbGFzc0xpc3QuYWRkKGAke3Rhc2suc3RhdHVzfWApO1xuICB0YXNrQ2FyZC5jbGFzc0xpc3QuYWRkKGAke3Rhc2sucHJpb3JpdHl9YCk7XG4gIHRhc2tDYXJkLmlubmVySFRNTCA9IGBcbiAgICA8ZGl2IGNsYXNzPVwidGFzay1oZWFkZXIgJHt0YXNrLnN0YXR1c31cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWhlYWRlci1sZWZ0XCI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4tdGFzay1zdGF0dXMgJHt0YXNrLnN0YXR1c31cIj48L2J1dHRvbj5cbiAgICAgICAgPGlucHV0IGNsYXNzPVwiaW5wdXQtdGFzay10aXRsZSAke3Rhc2suc3RhdHVzfVwiIHZhbHVlPVwiJHt0YXNrLnRpdGxlfVwiICR7dGFzay5pbnB1dFN0YXR1c30vPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwidGFzay1oZWFkZXItcmlnaHRcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bi10YXNrLWRlbGV0ZVwiPlg8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWRldGFpbHMgJHt0YXNrLnN0YXR1c31cIj5cbiAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cImlucHV0LXRhc2stZGVzY3JpcHRpb24gJHt0YXNrLnN0YXR1c31cIiBuYW1lPVwidGFzay1kZXNjcmlwdGlvblwiICR7dGFzay5pbnB1dFN0YXR1c30+JHt0YXNrLmRlc2NyaXB0aW9ufTwvdGV4dGFyZWE+XG4gICAgICA8ZGl2IGNsYXNzPVwidGFzay1ib3R0b20tcm93XCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGNsYXNzPVwiaW5wdXQtdGFzay1kdWUtZGF0ZVwiIHZhbHVlPVwiJHt0YXNrLmR1ZURhdGV9XCIgJHt0YXNrLmlucHV0U3RhdHVzfS8+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWRheXMtcmVtYWluaW5nXCI+JHt0YXNrLmdldERheXNSZW1haW5pbmcoKX08L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bi10YXNrLXByaW9yaXR5XCIgJHt0YXNrLmlucHV0U3RhdHVzfT5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInByaW9yaXR5LWxhYmVsXCI+JHt0YXNrLnByaW9yaXR5fTwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInByaW9yaXR5LWluZGljYXRvciAke3Rhc2sucHJpb3JpdHl9XCI+PC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgO1xuXG4gIHJldHVybiB0YXNrQ2FyZDtcbn07XG5cbmNvbnN0IHJlbmRlckFsbFByb2plY3RzID0gZnVuY3Rpb24gKHByb2plY3RzKSB7XG4gIGZvciAobGV0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhwcm9qZWN0cykpIHtcbiAgICBpdGVtQ29udGFpbmVyLnByZXBlbmQocmVuZGVyUHJvamVjdENhcmQodmFsdWUpKTtcbiAgfVxufTtcblxuY29uc3Qgc29ydFRhc2tzQnlEdWVEYXRlID0gZnVuY3Rpb24gKHRhcmdldFByb2plY3RUYXNrcykge1xuICBjb25zdCB0YXNrcyA9IFsuLi50YXJnZXRQcm9qZWN0VGFza3NdO1xuICBsZXQgaXNTb3J0ZWQgPSBmYWxzZTtcbiAgd2hpbGUgKCFpc1NvcnRlZCkge1xuICAgIGlzU29ydGVkID0gdHJ1ZTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgY29uc3QgZGF0ZTEgPSBuZXcgRGF0ZSh0YXNrc1tpXS5kdWVEYXRlKTtcbiAgICAgIGNvbnN0IGRhdGUyID0gbmV3IERhdGUodGFza3NbaSArIDFdLmR1ZURhdGUpO1xuICAgICAgaWYgKGRhdGUxID4gZGF0ZTIpIHtcbiAgICAgICAgbGV0IHRlbXAgPSB0YXNrc1tpICsgMV07XG4gICAgICAgIHRhc2tzW2kgKyAxXSA9IHRhc2tzW2ldO1xuICAgICAgICB0YXNrc1tpXSA9IHRlbXA7XG4gICAgICAgIGlzU29ydGVkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiB0YXNrcztcbn07XG5cbi8vIHByZXR0aWVyLWlnbm9yZVxuY29uc3Qgc29ydFRhc2tzQnlQcmlvcml0eSA9IGZ1bmN0aW9uICh0YXJnZXRQcm9qZWN0VGFza3MpIHtcbiAgY29uc3QgdGFza3NIaWdoUHJpb3JpdHkgPSB0YXJnZXRQcm9qZWN0VGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLnByaW9yaXR5ID09PSBcImhpZ2hcIik7XG4gIGNvbnN0IHRhc2tzTWVkaXVtUHJpb3JpdHkgPSB0YXJnZXRQcm9qZWN0VGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLnByaW9yaXR5ID09PSBcIm1lZGl1bVwiKTtcbiAgY29uc3QgdGFza3NMb3dQcmlvcml0eSA9IHRhcmdldFByb2plY3RUYXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2sucHJpb3JpdHkgPT09IFwibG93XCIpO1xuXG4gIGNvbnN0IHRhc2tzID0gWy4uLnRhc2tzSGlnaFByaW9yaXR5LCAuLi50YXNrc01lZGl1bVByaW9yaXR5LCAuLi50YXNrc0xvd1ByaW9yaXR5XTtcbiAgcmV0dXJuIHRhc2tzO1xufTtcblxuLy8gcHJldHRpZXItaWdub3JlXG5jb25zdCByZW5kZXJUYXNrcyA9IGZ1bmN0aW9uICh0YXJnZXRQcm9qZWN0VGFza3MsIHNvcnRDcml0ZXJpYSkge1xuICBpZiAoc29ydENyaXRlcmlhID09PSBcImR1ZURhdGVcIikge1xuICAgIGNvbnN0IHRhc2tzQnlQcmlvcml0eSA9IHNvcnRUYXNrc0J5UHJpb3JpdHkodGFyZ2V0UHJvamVjdFRhc2tzKTtcbiAgICBjb25zdCB0YXNrc0J5RHVlRGF0ZSA9IHNvcnRUYXNrc0J5RHVlRGF0ZSh0YXNrc0J5UHJpb3JpdHkpO1xuICAgIHRhc2tzQnlEdWVEYXRlLmZvckVhY2goKHRhc2spID0+IGl0ZW1Db250YWluZXIuYXBwZW5kKHJlbmRlclRhc2tDYXJkKHRhc2spKSk7XG4gIH0gZWxzZSBpZiAoc29ydENyaXRlcmlhID09PSBcInByaW9yaXR5XCIpIHtcbiAgICBjb25zdCB0YXNrc0J5RHVlRGF0ZSA9IHNvcnRUYXNrc0J5RHVlRGF0ZSh0YXJnZXRQcm9qZWN0VGFza3MpO1xuICAgIGNvbnN0IHRhc2tzQnlQcmlvcml0eSA9IHNvcnRUYXNrc0J5UHJpb3JpdHkodGFza3NCeUR1ZURhdGUpO1xuICAgIHRhc2tzQnlQcmlvcml0eS5mb3JFYWNoKCh0YXNrKSA9PiBpdGVtQ29udGFpbmVyLmFwcGVuZChyZW5kZXJUYXNrQ2FyZCh0YXNrKSkpO1xuICB9IGVsc2Uge1xuICAgIGZvciAobGV0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyh0YXJnZXRQcm9qZWN0VGFza3MpKSB7XG4gICAgICBpdGVtQ29udGFpbmVyLnByZXBlbmQocmVuZGVyVGFza0NhcmQodmFsdWUpKTtcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IHNob3dUYXNrVmlld0J1dHRvbnMgPSBmdW5jdGlvbiAodGFyZ2V0UHJvamVjdCkge1xuICBpZiAodGFyZ2V0UHJvamVjdC50YXNrcy5sZW5ndGggPCAyKSB7XG4gICAgY29uc3QgYnRuU29ydEJ5RHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLXNvcnQtZHVlLWRhdGVcIik7XG4gICAgY29uc3QgYnRuU29ydEJ5UHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1zb3J0LXByaW9yaXR5XCIpO1xuXG4gICAgaWYgKGJ0blNvcnRCeUR1ZURhdGUpIGJ0blNvcnRCeUR1ZURhdGUuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICBpZiAoYnRuU29ydEJ5UHJpb3JpdHkpIGJ0blNvcnRCeVByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gIH1cbn07XG5cbmNvbnN0IHNob3dUb3BPZlBhZ2UgPSBmdW5jdGlvbiAoKSB7XG4gIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbn07XG5cbmNvbnN0IGF1dG9BZGp1c3RIZWlnaHQgPSBmdW5jdGlvbiAodGFza0Rlc2NyaXB0aW9uRWwpIHtcbiAgLy8gQWRqdXN0IGhlaWdodCB1cG9uIHJlbmRlcmluZyBvciBleHBhbnNpb24gb2YgdGhlIHRhc2sgY2FyZFxuICB0YXNrRGVzY3JpcHRpb25FbC5zdHlsZS5oZWlnaHQgPSBcIlwiO1xuICB0YXNrRGVzY3JpcHRpb25FbC5zdHlsZS5oZWlnaHQgPSB0YXNrRGVzY3JpcHRpb25FbC5zY3JvbGxIZWlnaHQgKyBcInB4XCI7XG5cbiAgLy8gQWRqdXN0IGhlaWdodCB0byBhY2NvbW9kYXRlIGFkZGl0aW9uYWwgbGluZXMgb2YgdGV4dCBhcyByZXF1aXJlZFxuICB0YXNrRGVzY3JpcHRpb25FbC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xuICAgIHRhc2tEZXNjcmlwdGlvbkVsLnN0eWxlLmhlaWdodCA9IFwiXCI7XG4gICAgdGFza0Rlc2NyaXB0aW9uRWwuc3R5bGUuaGVpZ2h0ID0gdGFza0Rlc2NyaXB0aW9uRWwuc2Nyb2xsSGVpZ2h0ICsgXCJweFwiO1xuICB9KTtcbn07XG5cbmNvbnN0IHRvZ2dsZVRhc2tEZXRhaWxzID0gZnVuY3Rpb24gKHRhc2tDYXJkKSB7XG4gIGNvbnN0IHRhc2tEZXRhaWxzRWwgPSB0YXNrQ2FyZC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZGV0YWlsc1wiKTtcbiAgdGFza0RldGFpbHNFbC5jbGFzc0xpc3QudG9nZ2xlKFwidmlzaWJsZVwiKTtcbn07XG5cbmNvbnN0IHRvZ2dsZVRhc2tFbGVtZW50cyA9IGZ1bmN0aW9uIChidXR0b24pIHtcbiAgYnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJjb21wbGV0ZWRcIik7XG4gIGJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwicGVuZGluZ1wiKTtcblxuICBjb25zdCB0YXNrQ2FyZEVsID0gYnV0dG9uLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICBjb25zdCB0YXNrSGVhZGVyRWwgPSB0YXNrQ2FyZEVsLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1oZWFkZXJcIik7XG4gIGNvbnN0IHRhc2tUaXRsZUlucHV0RWwgPSB0YXNrQ2FyZEVsLnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXQtdGFzay10aXRsZVwiKTtcbiAgY29uc3QgdGFza0RldGFpbHNFbCA9IHRhc2tDYXJkRWwucXVlcnlTZWxlY3RvcihcIi50YXNrLWRldGFpbHNcIik7XG4gIGNvbnN0IHRhc2tEZXNjcmlwdGlvbkVsID0gdGFza0NhcmRFbC5xdWVyeVNlbGVjdG9yKFwiLmlucHV0LXRhc2stZGVzY3JpcHRpb25cIik7XG4gIGNvbnN0IHRhc2tEdWVEYXRlRWwgPSB0YXNrQ2FyZEVsLnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXQtdGFzay1kdWUtZGF0ZVwiKTtcbiAgY29uc3QgdGFza1ByaW9yaXR5RWwgPSB0YXNrQ2FyZEVsLnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLXRhc2stcHJpb3JpdHlcIik7XG5cbiAgdGFza0NhcmRFbC5jbGFzc0xpc3QudG9nZ2xlKFwiY29tcGxldGVkXCIpO1xuICB0YXNrQ2FyZEVsLmNsYXNzTGlzdC50b2dnbGUoXCJwZW5kaW5nXCIpO1xuICB0YXNrSGVhZGVyRWwuY2xhc3NMaXN0LnRvZ2dsZShcImNvbXBsZXRlZFwiKTtcbiAgdGFza0hlYWRlckVsLmNsYXNzTGlzdC50b2dnbGUoXCJwZW5kaW5nXCIpO1xuICB0YXNrVGl0bGVJbnB1dEVsLmNsYXNzTGlzdC50b2dnbGUoXCJjb21wbGV0ZWRcIik7XG4gIHRhc2tUaXRsZUlucHV0RWwuY2xhc3NMaXN0LnRvZ2dsZShcInBlbmRpbmdcIik7XG4gIHRhc2tEZXRhaWxzRWwuY2xhc3NMaXN0LnRvZ2dsZShcImNvbXBsZXRlZFwiKTtcbiAgdGFza0RldGFpbHNFbC5jbGFzc0xpc3QudG9nZ2xlKFwicGVuZGluZ1wiKTtcbiAgdGFza0Rlc2NyaXB0aW9uRWwuY2xhc3NMaXN0LnRvZ2dsZShcImNvbXBsZXRlZFwiKTtcbiAgdGFza0Rlc2NyaXB0aW9uRWwuY2xhc3NMaXN0LnRvZ2dsZShcInBlbmRpbmdcIik7XG5cbiAgdGFza0RldGFpbHNFbC5jbGFzc0xpc3QucmVtb3ZlKFwidmlzaWJsZVwiKTtcblxuICB0YXNrVGl0bGVJbnB1dEVsLmRpc2FibGVkID0gIXRhc2tUaXRsZUlucHV0RWwuZGlzYWJsZWQ7XG4gIHRhc2tEZXNjcmlwdGlvbkVsLmRpc2FibGVkID0gIXRhc2tEZXNjcmlwdGlvbkVsLmRpc2FibGVkO1xuICB0YXNrRHVlRGF0ZUVsLmRpc2FibGVkID0gIXRhc2tEdWVEYXRlRWwuZGlzYWJsZWQ7XG4gIHRhc2tQcmlvcml0eUVsLmRpc2FibGVkID0gIXRhc2tQcmlvcml0eUVsLmRpc2FibGVkO1xufTtcblxuLy8gcHJldHRpZXItaWdub3JlXG5jb25zdCBjbGlja0hhbmRsZXJDb21wbGV0ZWRUYXNrQ2FyZCA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgY29tcGxldGVkVGFza0NhcmROTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFzay1jYXJkXCIpO1xuICBjb21wbGV0ZWRUYXNrQ2FyZE5MLmZvckVhY2goKHRhc2tDYXJkKSA9PiB7XG4gICAgdGFza0NhcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGlmICh0YXNrQ2FyZC5jbGFzc0xpc3QuY29udGFpbnMoXCJjb21wbGV0ZWRcIikpIHtcbiAgICAgICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uRWwgPSB0YXNrQ2FyZC5xdWVyeVNlbGVjdG9yKFwiLmlucHV0LXRhc2stZGVzY3JpcHRpb25cIik7XG4gICAgICAgIHRhc2tEZXNjcmlwdGlvbkVsLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIGF1dG9BZGp1c3RIZWlnaHQodGFza0Rlc2NyaXB0aW9uRWwpO1xuICAgICAgICB0YXNrRGVzY3JpcHRpb25FbC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICB0b2dnbGVUYXNrRGV0YWlscyh0YXNrQ2FyZCk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IHtcbiAgbG9hZFRoZW1lLFxuICB0b2dnbGVUaGVtZSxcbiAgcmVuZGVyUHJvamVjdFZpZXdCdXR0b25zLFxuICBjbGVhclByb2plY3RWaWV3QnV0dG9ucyxcbiAgcmVuZGVyVGFza1ZpZXdCdXR0b25zLFxuICBjbGVhclRhc2tWaWV3QnV0dG9ucyxcbiAgcmVuZGVyQnJlYWRjcnVtYk5hdixcbiAgY2xlYXJJdGVtQ29udGFpbmVyLFxuICByZW5kZXJBbGxQcm9qZWN0cyxcbiAgcmVuZGVyVGFza3MsXG4gIHNob3dUYXNrVmlld0J1dHRvbnMsXG4gIHNob3dUb3BPZlBhZ2UsXG4gIGF1dG9BZGp1c3RIZWlnaHQsXG4gIHRvZ2dsZVRhc2tFbGVtZW50cyxcbiAgY2xpY2tIYW5kbGVyQ29tcGxldGVkVGFza0NhcmQsXG59O1xuIiwiaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi9jb250cm9sbGVyXCI7XG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IHsgVGFzayB9IGZyb20gXCIuL3Rhc2tcIjtcbmltcG9ydCB7IGRlbW9Qcm9qZWN0cyB9IGZyb20gXCIuL2RlbW9EYXRhXCI7XG5cbmV4cG9ydCBjb25zdCBzYXZlVG9Mb2NhbFN0b3JhZ2UgPSBmdW5jdGlvbiAoKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2FkRnJvbUxvY2FsU3RvcmFnZSA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3Qgc3RvcmVkUHJvamVjdHNKU09OID1cbiAgICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpIHx8IGRlbW9Qcm9qZWN0cztcblxuICBjb25zdCBwcm9qZWN0c1dpdGhGdW5jdGlvbnMgPSB7fTtcblxuICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhzdG9yZWRQcm9qZWN0c0pTT04pKSB7XG4gICAgbGV0IHRhc2tzV2l0aEZ1bmN0aW9ucyA9IFtdO1xuICAgIHZhbHVlLnRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIGNvbnN0IHRhc2tXaXRoRnVuY3Rpb25zID0gbmV3IFRhc2soXG4gICAgICAgIHRhc2suaWQsXG4gICAgICAgIHRhc2sudGl0bGUsXG4gICAgICAgIHRhc2suZGVzY3JpcHRpb24sXG4gICAgICAgIHRhc2suZHVlRGF0ZSxcbiAgICAgICAgdGFzay5zdGF0dXMsXG4gICAgICAgIHRhc2sucHJpb3JpdHksXG4gICAgICAgIHRhc2suaW5wdXRTdGF0dXNcbiAgICAgICk7XG4gICAgICB0YXNrc1dpdGhGdW5jdGlvbnMucHVzaCh0YXNrV2l0aEZ1bmN0aW9ucyk7XG4gICAgfSk7XG5cbiAgICBwcm9qZWN0c1dpdGhGdW5jdGlvbnNba2V5XSA9IG5ldyBQcm9qZWN0KFxuICAgICAgdmFsdWUuaWQsXG4gICAgICB2YWx1ZS50aXRsZSxcbiAgICAgIHRhc2tzV2l0aEZ1bmN0aW9uc1xuICAgICk7XG4gIH1cblxuICByZXR1cm4gcHJvamVjdHNXaXRoRnVuY3Rpb25zO1xufTtcbiIsImV4cG9ydCBsZXQgZGVtb1Byb2plY3RzID0ge1xuICBQMTY5NjgxMDUyNzYwMToge1xuICAgIGlkOiBcIlAxNjk2ODEwNTI3NjAxXCIsXG4gICAgdGl0bGU6IFwiSG9tZVwiLFxuICAgIHRhc2tzOiBbXG4gICAgICB7XG4gICAgICAgIGlkOiBcIlQxNjk3NzEwNjk0NDU4XCIsXG4gICAgICAgIHRpdGxlOiBcIlBsYXkgdmlkZW8gZ2FtZXNcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiWmVsZGEgVE9US1xcbkxpdHRsZSBOaWdodG1hcmVzIElJXCIsXG4gICAgICAgIGR1ZURhdGU6IFwiMjAyMy0xMC0yMFwiLFxuICAgICAgICBzdGF0dXM6IFwicGVuZGluZ1wiLFxuICAgICAgICBwcmlvcml0eTogXCJtZWRpdW1cIixcbiAgICAgICAgaW5wdXRTdGF0dXM6IFwiZW5hYmxlZFwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IFwiVDE2OTgzMDA3Mzc5NzhcIixcbiAgICAgICAgdGl0bGU6IFwiQ2xlYW4gdGhlIGhvdXNlXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgIFwiV2lwZSBkdXN0IGZyb20gc3VyZmFjZXNcXG5WYWN1dW0gYW5kIG1vcCBmbG9vcnNcXG5DbGVhbiBraXRjaGVuIGFuZCBiYXRocm9vbXNcXG5FbXB0eSBiaW5zXCIsXG4gICAgICAgIGR1ZURhdGU6IFwiMjAyMy0xMC0zMFwiLFxuICAgICAgICBzdGF0dXM6IFwicGVuZGluZ1wiLFxuICAgICAgICBwcmlvcml0eTogXCJtZWRpdW1cIixcbiAgICAgICAgaW5wdXRTdGF0dXM6IFwiZW5hYmxlZFwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IFwiVDE2OTgzNzExODcyNDFcIixcbiAgICAgICAgdGl0bGU6IFwiRml4IGtpdGNoZW4gbGlnaHRzXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxuICAgICAgICBkdWVEYXRlOiBcIlwiLFxuICAgICAgICBzdGF0dXM6IFwicGVuZGluZ1wiLFxuICAgICAgICBwcmlvcml0eTogXCJtZWRpdW1cIixcbiAgICAgICAgaW5wdXRTdGF0dXM6IFwiZW5hYmxlZFwiLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICBQMTY5NjgxMDUyNzYwMjoge1xuICAgIGlkOiBcIlAxNjk2ODEwNTI3NjAyXCIsXG4gICAgdGl0bGU6IFwiU3R1ZHlcIixcbiAgICB0YXNrczogW1xuICAgICAge1xuICAgICAgICBpZDogXCJUMTY5NzcxMTQxNTU2NVwiLFxuICAgICAgICB0aXRsZTogXCJGaW5pc2ggVG9kbyBMaXN0IHByb2plY3RcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgICAgIGR1ZURhdGU6IFwiMjAyMy0xMC0yNlwiLFxuICAgICAgICBzdGF0dXM6IFwiY29tcGxldGVkXCIsXG4gICAgICAgIHByaW9yaXR5OiBcIm1lZGl1bVwiLFxuICAgICAgICBpbnB1dFN0YXR1czogXCJkaXNhYmxlZFwiLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICBQMTY5NzcxMDczNjAwMDoge1xuICAgIGlkOiBcIlAxNjk3NzEwNzM2MDAwXCIsXG4gICAgdGl0bGU6IFwiVHJhdmVsXCIsXG4gICAgdGFza3M6IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6IFwiVDE2OTc3MTA3NDExMjBcIixcbiAgICAgICAgdGl0bGU6IFwiUGFzc3BvcnRcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQXBwbHkgZm9yIHBhc3Nwb3J0XCIsXG4gICAgICAgIGR1ZURhdGU6IFwiMjAyMy0xMC0yM1wiLFxuICAgICAgICBzdGF0dXM6IFwicGVuZGluZ1wiLFxuICAgICAgICBwcmlvcml0eTogXCJtZWRpdW1cIixcbiAgICAgICAgaW5wdXRTdGF0dXM6IFwiZW5hYmxlZFwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IFwiVDE2OTgzNzA3OTQ0ODNcIixcbiAgICAgICAgdGl0bGU6IFwiUGxhbiBpdGluZXJhcnlcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiTWFrZSBsaXN0IG9mIHBsYWNlcyB0byB2aXNpdFwiLFxuICAgICAgICBkdWVEYXRlOiBcIlwiLFxuICAgICAgICBzdGF0dXM6IFwicGVuZGluZ1wiLFxuICAgICAgICBwcmlvcml0eTogXCJtZWRpdW1cIixcbiAgICAgICAgaW5wdXRTdGF0dXM6IFwiZW5hYmxlZFwiLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICBQMTY5ODM3MDkzMTYzMDoge1xuICAgIGlkOiBcIlAxNjk4MzcwOTMxNjMwXCIsXG4gICAgdGl0bGU6IFwiR3JvY2VyaWVzXCIsXG4gICAgdGFza3M6IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6IFwiVDE2OTgzNzA5NDk3OTlcIixcbiAgICAgICAgdGl0bGU6IFwiV29vbHdvcnRoc1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJCYW5hbmFzXFxuTWlsa1xcbkJ1dHRlclxcbkZyb3plbiBkdW1wbGluZ3NcXG5Ub2lsZXQgcGFwZXJcIixcbiAgICAgICAgZHVlRGF0ZTogXCJcIixcbiAgICAgICAgc3RhdHVzOiBcInBlbmRpbmdcIixcbiAgICAgICAgcHJpb3JpdHk6IFwibWVkaXVtXCIsXG4gICAgICAgIGlucHV0U3RhdHVzOiBcImVuYWJsZWRcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiBcIlQxNjk4MzcxMTE5NTM2XCIsXG4gICAgICAgIHRpdGxlOiBcIkFsZGlcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQ2hlZXNlXFxuQmlzY3VpdHNcIixcbiAgICAgICAgZHVlRGF0ZTogXCJcIixcbiAgICAgICAgc3RhdHVzOiBcImNvbXBsZXRlZFwiLFxuICAgICAgICBwcmlvcml0eTogXCJtZWRpdW1cIixcbiAgICAgICAgaW5wdXRTdGF0dXM6IFwiZGlzYWJsZWRcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0MDogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IGluaXRBcHAgfSBmcm9tIFwiLi9jb250cm9sbGVyXCI7XG5cbihmdW5jdGlvbiAoKSB7XG4gIGluaXRBcHAoKTtcbn0pKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=