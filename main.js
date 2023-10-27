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
  --active-color: tomato;
  --active-color-two: white;
  --inactive-color: silver;
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
  content: "〇";
}

button.btn-task-status.completed::after {
  content: "◉";
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
button.btn-task-move-down,
button.btn-task-move-up,
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
button.btn-task-move-down:hover,
button.btn-task-move-up:hover,
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

button.btn-task-options {
  cursor: pointer;
  font-size: large;
  background-color: var(--accent-three);
  color: var(--main-color);
  border: none;
  font-weight: 700;
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: \"Electrolize\";\n  src: url(\"./fonts/Electrolize-Regular.woff\") format(\"woff\");\n  font-weight: 400;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: \"Quicksand\";\n  src: url(\"./fonts/Quicksand-Medium.woff\") format(\"woff\");\n  font-weight: 500;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: \"Quicksand\";\n  src: url(\"./fonts/Quicksand-Bold.woff\") format(\"woff\");\n  font-weight: 700;\n  font-style: normal;\n}\n\n:root.default-theme {\n  --main-color: black;\n  --background-color: whitesmoke;\n  --background-color-two: lavenderblush;\n  --accent-color: salmon;\n  --accent-color-two: white;\n  --accent-color-three: lightpink;\n  --active-color: tomato;\n  --active-color-two: white;\n  --inactive-color: silver;\n  --default-thickness: 2px;\n}\n\nhtml {\n  box-sizing: border-box;\n  margin: 0px;\n  padding: 0px;\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n  /* border: 1px solid red; */\n}\n\n.hidden {\n  display: none;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0px;\n}\n\nbody {\n  height: 100vh;\n  background-color: var(--background-color);\n  color: var(--main-color);\n  font-family: \"Quicksand\", Tahoma, Geneva, Verdana, sans-serif;\n  margin: 0px;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\nheader {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 1;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  background-color: var(--background-color-two);\n  border-bottom: var(--default-thickness) solid var(--accent-color-two);\n}\n\n.header-top-row {\n  height: 56px;\n  display: flex;\n  justify-content: space-between;\n  padding: 10px;\n}\n\nh1 {\n  font-family: \"Electrolize\";\n  color: var(--accent-color);\n  font-size: x-large;\n  text-align: center;\n  padding-top: 5px;\n}\n\nbutton:hover {\n  cursor: pointer;\n}\n\nnav.top-nav {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n}\n\nnav.top-nav button {\n  width: 96px;\n  background-color: var(--accent-color-two);\n  color: var(--accent-color);\n  border: 2px solid var(--accent-color-two);\n  border-radius: 12px;\n  font-family: \"Quicksand\";\n  font-size: medium;\n  padding: 7px 8px 5px;\n}\n\nnav.top-nav button:hover {\n  background-color: var(--accent-color-two);\n  color: var(--accent-color);\n  border: 2px solid var(--accent-color);\n}\n\nnav.breadcrumb-nav {\n  display: flex;\n  align-items: center;\n  font-size: larger;\n  padding: 5px 10px 0px;\n  margin: 0px 0px 10px;\n}\n\nspan {\n  padding: 0px 10px 0px;\n}\n\nspan.all-projects {\n  height: 36px;\n  color: var(--accent-color);\n  border: 2px solid var(--background-color-two);\n  font-size: medium;\n  letter-spacing: 0.23px;\n  padding: 6px 6px 3px;\n}\n\nspan.current-project {\n  color: var(--main-color);\n  font-size: large;\n  padding: 3px 6px 3px;\n}\n\nbutton.btn-view-all-projects {\n  height: 36px;\n  background-color: var(--accent-color-two);\n  color: var(--accent-color);\n  border: 2px solid var(--accent-color-two);\n  border-radius: 12px;\n  font-family: \"Quicksand\";\n  font-size: medium;\n  font-weight: bold;\n  text-decoration: underline;\n  color: var(--accent-color);\n  padding: 3px 6px 3px;\n}\n\nbutton.btn-view-all-projects:hover {\n  color: var(--active-color);\n  border: 2px solid var(--active-color);\n  font-weight: 700;\n  letter-spacing: 0px;\n}\n\nbutton.btn-view-all-projects::after {\n  height: 0;\n  visibility: hidden;\n  font-weight: 700;\n}\n\nmain {\n  position: relative;\n  z-index: 0;\n\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  align-items: start;\n  padding: 15px;\n  padding-top: 120px;\n}\n\n.item-container {\n  width: 100%;\n  padding-bottom: 80px;\n}\n\n.project-card,\n.task-card {\n  cursor: pointer;\n  flex: 1;\n  border: var(--default-thickness) solid var(--accent-color-three);\n  border-radius: 12px;\n  margin: 0px 0px 20px;\n}\n\n.project-header,\n.task-header {\n  height: 40px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: var(--accent-color-three);\n  color: var(--accent-color-two);\n  font-family: \"Quicksand\";\n  font-weight: bold;\n  border-radius: 9px;\n  padding: 5px 5px 6px 5px;\n}\n\n.project-header:hover .input-project-title,\n.task-header:hover .input-task-title {\n  color: var(--main-color);\n}\n\n.task-header.completed {\n  background-color: var(--inactive-color);\n}\n\n.task-details.completed {\n  transition: opacity 1.5s ease;\n  opacity: 0;\n  height: 0;\n  overflow: hidden;\n}\n\n.task-details.pending,\n.task-details.completed.visible {\n  transition: opacity 1.5s ease;\n  opacity: 1;\n  height: auto;\n}\n\n/* This rule is required for click events on disabled input elements to propagate upwards on some browsers */\ninput[disabled] {\n  pointer-events: none;\n}\n\ninput.input-task-title.completed {\n  text-decoration: line-through;\n}\n\n.task-card.completed {\n  border: var(--default-thickness) solid var(--inactive-color);\n}\n\nbutton.btn-save-project,\nbutton.btn-save-task {\n  background-color: var(--accent-color-two);\n  border: 2px solid var(--main-color);\n  border-radius: 5px;\n  padding: 5px 8px 5px;\n}\n\ninput.input-project-title,\ninput.input-task-title {\n  flex: 1;\n  background-color: inherit;\n  color: var(--accent-color-two);\n  font-family: \"Quicksand\";\n  font-size: medium;\n  font-weight: bold;\n  border: none;\n  outline: none;\n  margin-left: 5px;\n}\n\ninput.input-project-title:focus,\ninput.input-task-title:focus {\n  background-color: inherit;\n}\n\n.project-header-left,\n.task-header-left {\n  flex: 1;\n  display: flex;\n  align-items: center;\n}\n\nbutton.btn-task-status {\n  background-color: inherit;\n  color: var(--accent-color-two);\n  border: none;\n  font-size: large;\n  padding: 0px 6px 0px;\n}\n\nbutton.btn-task-status.pending::after {\n  content: \"〇\";\n}\n\nbutton.btn-task-status.completed::after {\n  content: \"◉\";\n}\n\n.project-header:focus-within,\n.task-header:focus-within {\n  background-color: var(--accent-color);\n}\n\n.task-title.completed {\n  text-decoration: line-through;\n  text-decoration-color: var(--accent-color-two);\n  text-decoration-thickness: 2px;\n}\n\n.task-header-right {\n  display: flex;\n  gap: 6px;\n}\n\nbutton.btn-project-move-down,\nbutton.btn-project-move-up,\nbutton.btn-task-move-down,\nbutton.btn-task-move-up,\nbutton.btn-project-delete,\nbutton.btn-task-delete {\n  background-color: var(--accent-three);\n  color: var(--accent-color-two);\n  border: none;\n  font-weight: 700;\n  padding: 0px 10px;\n}\n\nbutton.btn-project-move-down:hover,\nbutton.btn-project-move-up:hover,\nbutton.btn-task-move-down:hover,\nbutton.btn-task-move-up:hover,\nbutton.btn-project-delete:hover,\nbutton.btn-task-delete:hover {\n  color: var(--main-color);\n}\n\n.project-details > div,\n.task-details > div {\n  background-color: var(--accent-color-two);\n  font-size: medium;\n  border-radius: 0px 0px 9px 9px;\n  padding: 10px 15px 10px;\n}\n\n.task-details {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\ntextarea.input-task-description {\n  width: 100%;\n  background-color: var(--accent-color-two);\n  font-family: \"Quicksand\", Tahoma, Geneva, Verdana, sans-serif;\n  font-size: medium;\n  border: none;\n  outline: none;\n  resize: none;\n  padding: 10px 15px 10px;\n}\n\ntextarea.input-task-description.completed {\n  color: gray;\n}\n\n.project-details > .task-bottom-row,\n.task-details > .task-bottom-row {\n  display: flex;\n  height: 40px;\n  justify-content: space-between;\n  align-items: center;\n  background-color: var(--background-color-two);\n  border-radius: 0px 0px 9px 9px;\n  font-weight: 700;\n}\n\ninput.input-task-due-date {\n  background-color: var(--background-color-two);\n  border: 2px solid var(--accent-color-three);\n  border-radius: 5px;\n  outline: none;\n  padding: 2px;\n}\n\ninput[disabled].input-task-due-date {\n  background-color: var(--background-color);\n  border: 2px solid var(--inactive-color);\n}\n\nbutton.btn-task-options {\n  cursor: pointer;\n  font-size: large;\n  background-color: var(--accent-three);\n  color: var(--main-color);\n  border: none;\n  font-weight: 700;\n}\n\nbutton.btn-back-to-all-projects {\n  height: 42px;\n  width: 42px;\n  position: fixed;\n  bottom: 50px;\n  left: 20px;\n  font-size: xx-large;\n  border: 2px solid var(--accent-color-two);\n  border-radius: 50px;\n  background-color: var(--accent-color);\n  color: var(--accent-color-two);\n  padding: 2px 2px 0px 0px;\n}\n\nbutton.btn-new-item {\n  height: 42px;\n  width: 42px;\n  position: fixed;\n  bottom: 50px;\n  right: 20px;\n  font-size: xx-large;\n  border: 2px solid var(--accent-color-two);\n  border-radius: 50px;\n  background-color: var(--accent-color);\n  color: var(--accent-color-two);\n  padding: 0px 10px 0px;\n}\n\nfooter {\n  position: fixed;\n  bottom: 0px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  background-color: lightgray;\n  padding: 5px;\n}\n\nfooter a {\n  font-family: \"Electrolize\";\n  color: gray;\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20);
/* harmony import */ var _demoData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21);


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
  targetProject.addTask(new _task__WEBPACK_IMPORTED_MODULE_1__.Task("", "", "", "pending", "medium", "enabled"));
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
const autoSaveTaskDueDateChanges = function (targetProject, taskId, taskDueDate) {
  targetProject.tasks.forEach((task) => {
    if (task.id === taskId) task.dueDate = taskDueDate.value;
    (0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.saveToLocalStorage)();
  });
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

  taskDueDateNL.forEach((dueDate) =>
    dueDate.addEventListener("input", (e) => {
      const taskId = e.target.closest(".task-card").dataset.taskId;
      autoSaveTaskDueDateChanges(targetProject, taskId, dueDate);
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
class Task {
  constructor(title, description, dueDate, status, priority, inputStatus) {
    this.id = `T${new Date().getTime()}`;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.status = status;
    this.priority = priority;
    this.inputStatus = inputStatus;
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

const renderTaskCard = function (task) {
  const taskCard = document.createElement("div");
  taskCard.className = "task-card";
  taskCard.dataset.taskId = task.id;
  taskCard.classList.add(`${task.status}`);
  taskCard.innerHTML = `
    <div class="task-header ${task.status}">
      <div class="task-header-left">
        <button class="btn-task-status ${task.status}"></button>
        <input class="input-task-title ${task.status}" value="${task.title}"  ${task.inputStatus}/>
      </div>
      <div class="task-header-right">
        <button class="btn-task-move-down">ᐯ</button>
        <button class="btn-task-move-up">ᐱ</button>
        <button class="btn-task-delete">X</button>
      </div>
    </div>
    <div class="task-details ${task.status}">
      <textarea class="input-task-description ${task.status}" name="task-description" ${task.inputStatus}>${task.description}</textarea>
      <div class="task-bottom-row">
        <input type="date" class="input-task-due-date" value="${task.dueDate}" ${task.inputStatus}/>
        <button class="btn-task-options">...</button>
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
/* 19 */,
/* 20 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadFromLocalStorage: () => (/* binding */ loadFromLocalStorage),
/* harmony export */   saveToLocalStorage: () => (/* binding */ saveToLocalStorage)
/* harmony export */ });
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony import */ var _demoData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21);




const saveToLocalStorage = function () {
  localStorage.setItem("projects", JSON.stringify(_controller__WEBPACK_IMPORTED_MODULE_0__.projects));
};

const loadFromLocalStorage = function () {
  const storedProjectsJSON =
    JSON.parse(localStorage.getItem("projects")) || _demoData__WEBPACK_IMPORTED_MODULE_2__.demoProjects;

  let projectsWithFunctions = {};
  for (const [key, value] of Object.entries(storedProjectsJSON)) {
    projectsWithFunctions[key] = new _project__WEBPACK_IMPORTED_MODULE_1__.Project(
      value.id,
      value.title,
      value.tasks
    );
  }
  return projectsWithFunctions;
};


/***/ }),
/* 21 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sT0FBTyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsWUFBWSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFlBQVksY0FBYyxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksWUFBWSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsTUFBTSxZQUFZLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLFVBQVUsWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFh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QTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7O0FDQXFCO0FBQ2tCOztBQUV2QztBQUNBLEVBQUUsb0RBQU87QUFDVCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3ZpZXcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvbG9jYWxTdG9yYWdlLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2RlbW9EYXRhLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvRWxlY3Ryb2xpemUtUmVndWxhci53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9mb250cy9RdWlja3NhbmQtTWVkaXVtLndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL1F1aWNrc2FuZC1Cb2xkLndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkVsZWN0cm9saXplXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJRdWlja3NhbmRcIjtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSkgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG46cm9vdC5kZWZhdWx0LXRoZW1lIHtcbiAgLS1tYWluLWNvbG9yOiBibGFjaztcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICAtLWJhY2tncm91bmQtY29sb3ItdHdvOiBsYXZlbmRlcmJsdXNoO1xuICAtLWFjY2VudC1jb2xvcjogc2FsbW9uO1xuICAtLWFjY2VudC1jb2xvci10d286IHdoaXRlO1xuICAtLWFjY2VudC1jb2xvci10aHJlZTogbGlnaHRwaW5rO1xuICAtLWFjdGl2ZS1jb2xvcjogdG9tYXRvO1xuICAtLWFjdGl2ZS1jb2xvci10d286IHdoaXRlO1xuICAtLWluYWN0aXZlLWNvbG9yOiBzaWx2ZXI7XG4gIC0tZGVmYXVsdC10aGlja25lc3M6IDJweDtcbn1cblxuaHRtbCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbiosXG4qOmJlZm9yZSxcbio6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBpbmhlcml0O1xuICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXG59XG5cbi5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICBtYXJnaW46IDBweDtcbn1cblxuYm9keSB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG4gIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luOiAwcHg7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG5oZWFkZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDE7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3ItdHdvKTtcbiAgYm9yZGVyLWJvdHRvbTogdmFyKC0tZGVmYXVsdC10aGlja25lc3MpIHNvbGlkIHZhcigtLWFjY2VudC1jb2xvci10d28pO1xufVxuXG4uaGVhZGVyLXRvcC1yb3cge1xuICBoZWlnaHQ6IDU2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuaDEge1xuICBmb250LWZhbWlseTogXCJFbGVjdHJvbGl6ZVwiO1xuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxubmF2LnRvcC1uYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xufVxuXG5uYXYudG9wLW5hdiBidXR0b24ge1xuICB3aWR0aDogOTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yLXR3byk7XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3ItdHdvKTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgZm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCI7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xuICBwYWRkaW5nOiA3cHggOHB4IDVweDtcbn1cblxubmF2LnRvcC1uYXYgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yLXR3byk7XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3IpO1xufVxuXG5uYXYuYnJlYWRjcnVtYi1uYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IGxhcmdlcjtcbiAgcGFkZGluZzogNXB4IDEwcHggMHB4O1xuICBtYXJnaW46IDBweCAwcHggMTBweDtcbn1cblxuc3BhbiB7XG4gIHBhZGRpbmc6IDBweCAxMHB4IDBweDtcbn1cblxuc3Bhbi5hbGwtcHJvamVjdHMge1xuICBoZWlnaHQ6IDM2cHg7XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLXR3byk7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xuICBsZXR0ZXItc3BhY2luZzogMC4yM3B4O1xuICBwYWRkaW5nOiA2cHggNnB4IDNweDtcbn1cblxuc3Bhbi5jdXJyZW50LXByb2plY3Qge1xuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIHBhZGRpbmc6IDNweCA2cHggM3B4O1xufVxuXG5idXR0b24uYnRuLXZpZXctYWxsLXByb2plY3RzIHtcbiAgaGVpZ2h0OiAzNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItdHdvKTtcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWFjY2VudC1jb2xvci10d28pO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBmb250LWZhbWlseTogXCJRdWlja3NhbmRcIjtcbiAgZm9udC1zaXplOiBtZWRpdW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG4gIHBhZGRpbmc6IDNweCA2cHggM3B4O1xufVxuXG5idXR0b24uYnRuLXZpZXctYWxsLXByb2plY3RzOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLWFjdGl2ZS1jb2xvcik7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWFjdGl2ZS1jb2xvcik7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XG59XG5cbmJ1dHRvbi5idG4tdmlldy1hbGwtcHJvamVjdHM6OmFmdGVyIHtcbiAgaGVpZ2h0OiAwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbm1haW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDA7XG5cbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICBwYWRkaW5nOiAxNXB4O1xuICBwYWRkaW5nLXRvcDogMTIwcHg7XG59XG5cbi5pdGVtLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWJvdHRvbTogODBweDtcbn1cblxuLnByb2plY3QtY2FyZCxcbi50YXNrLWNhcmQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZsZXg6IDE7XG4gIGJvcmRlcjogdmFyKC0tZGVmYXVsdC10aGlja25lc3MpIHNvbGlkIHZhcigtLWFjY2VudC1jb2xvci10aHJlZSk7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIG1hcmdpbjogMHB4IDBweCAyMHB4O1xufVxuXG4ucHJvamVjdC1oZWFkZXIsXG4udGFzay1oZWFkZXIge1xuICBoZWlnaHQ6IDQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yLXRocmVlKTtcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvci10d28pO1xuICBmb250LWZhbWlseTogXCJRdWlja3NhbmRcIjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgcGFkZGluZzogNXB4IDVweCA2cHggNXB4O1xufVxuXG4ucHJvamVjdC1oZWFkZXI6aG92ZXIgLmlucHV0LXByb2plY3QtdGl0bGUsXG4udGFzay1oZWFkZXI6aG92ZXIgLmlucHV0LXRhc2stdGl0bGUge1xuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG59XG5cbi50YXNrLWhlYWRlci5jb21wbGV0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbmFjdGl2ZS1jb2xvcik7XG59XG5cbi50YXNrLWRldGFpbHMuY29tcGxldGVkIHtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxLjVzIGVhc2U7XG4gIG9wYWNpdHk6IDA7XG4gIGhlaWdodDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnRhc2stZGV0YWlscy5wZW5kaW5nLFxuLnRhc2stZGV0YWlscy5jb21wbGV0ZWQudmlzaWJsZSB7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMS41cyBlYXNlO1xuICBvcGFjaXR5OiAxO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi8qIFRoaXMgcnVsZSBpcyByZXF1aXJlZCBmb3IgY2xpY2sgZXZlbnRzIG9uIGRpc2FibGVkIGlucHV0IGVsZW1lbnRzIHRvIHByb3BhZ2F0ZSB1cHdhcmRzIG9uIHNvbWUgYnJvd3NlcnMgKi9cbmlucHV0W2Rpc2FibGVkXSB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG5pbnB1dC5pbnB1dC10YXNrLXRpdGxlLmNvbXBsZXRlZCB7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xufVxuXG4udGFzay1jYXJkLmNvbXBsZXRlZCB7XG4gIGJvcmRlcjogdmFyKC0tZGVmYXVsdC10aGlja25lc3MpIHNvbGlkIHZhcigtLWluYWN0aXZlLWNvbG9yKTtcbn1cblxuYnV0dG9uLmJ0bi1zYXZlLXByb2plY3QsXG5idXR0b24uYnRuLXNhdmUtdGFzayB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvci10d28pO1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1tYWluLWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiA1cHggOHB4IDVweDtcbn1cblxuaW5wdXQuaW5wdXQtcHJvamVjdC10aXRsZSxcbmlucHV0LmlucHV0LXRhc2stdGl0bGUge1xuICBmbGV4OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yLXR3byk7XG4gIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiO1xuICBmb250LXNpemU6IG1lZGl1bTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuaW5wdXQuaW5wdXQtcHJvamVjdC10aXRsZTpmb2N1cyxcbmlucHV0LmlucHV0LXRhc2stdGl0bGU6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xufVxuXG4ucHJvamVjdC1oZWFkZXItbGVmdCxcbi50YXNrLWhlYWRlci1sZWZ0IHtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuYnV0dG9uLmJ0bi10YXNrLXN0YXR1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItdHdvKTtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IGxhcmdlO1xuICBwYWRkaW5nOiAwcHggNnB4IDBweDtcbn1cblxuYnV0dG9uLmJ0bi10YXNrLXN0YXR1cy5wZW5kaW5nOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwi44CHXCI7XG59XG5cbmJ1dHRvbi5idG4tdGFzay1zdGF0dXMuY29tcGxldGVkOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwi4peJXCI7XG59XG5cbi5wcm9qZWN0LWhlYWRlcjpmb2N1cy13aXRoaW4sXG4udGFzay1oZWFkZXI6Zm9jdXMtd2l0aGluIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbn1cblxuLnRhc2stdGl0bGUuY29tcGxldGVkIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yLXR3byk7XG4gIHRleHQtZGVjb3JhdGlvbi10aGlja25lc3M6IDJweDtcbn1cblxuLnRhc2staGVhZGVyLXJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA2cHg7XG59XG5cbmJ1dHRvbi5idG4tcHJvamVjdC1tb3ZlLWRvd24sXG5idXR0b24uYnRuLXByb2plY3QtbW92ZS11cCxcbmJ1dHRvbi5idG4tdGFzay1tb3ZlLWRvd24sXG5idXR0b24uYnRuLXRhc2stbW92ZS11cCxcbmJ1dHRvbi5idG4tcHJvamVjdC1kZWxldGUsXG5idXR0b24uYnRuLXRhc2stZGVsZXRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LXRocmVlKTtcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvci10d28pO1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHBhZGRpbmc6IDBweCAxMHB4O1xufVxuXG5idXR0b24uYnRuLXByb2plY3QtbW92ZS1kb3duOmhvdmVyLFxuYnV0dG9uLmJ0bi1wcm9qZWN0LW1vdmUtdXA6aG92ZXIsXG5idXR0b24uYnRuLXRhc2stbW92ZS1kb3duOmhvdmVyLFxuYnV0dG9uLmJ0bi10YXNrLW1vdmUtdXA6aG92ZXIsXG5idXR0b24uYnRuLXByb2plY3QtZGVsZXRlOmhvdmVyLFxuYnV0dG9uLmJ0bi10YXNrLWRlbGV0ZTpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcbn1cblxuLnByb2plY3QtZGV0YWlscyA+IGRpdixcbi50YXNrLWRldGFpbHMgPiBkaXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItdHdvKTtcbiAgZm9udC1zaXplOiBtZWRpdW07XG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggOXB4IDlweDtcbiAgcGFkZGluZzogMTBweCAxNXB4IDEwcHg7XG59XG5cbi50YXNrLWRldGFpbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbnRleHRhcmVhLmlucHV0LXRhc2stZGVzY3JpcHRpb24ge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yLXR3byk7XG4gIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiBtZWRpdW07XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgcmVzaXplOiBub25lO1xuICBwYWRkaW5nOiAxMHB4IDE1cHggMTBweDtcbn1cblxudGV4dGFyZWEuaW5wdXQtdGFzay1kZXNjcmlwdGlvbi5jb21wbGV0ZWQge1xuICBjb2xvcjogZ3JheTtcbn1cblxuLnByb2plY3QtZGV0YWlscyA+IC50YXNrLWJvdHRvbS1yb3csXG4udGFzay1kZXRhaWxzID4gLnRhc2stYm90dG9tLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogNDBweDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLXR3byk7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggOXB4IDlweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuaW5wdXQuaW5wdXQtdGFzay1kdWUtZGF0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3ItdHdvKTtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYWNjZW50LWNvbG9yLXRocmVlKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiAycHg7XG59XG5cbmlucHV0W2Rpc2FibGVkXS5pbnB1dC10YXNrLWR1ZS1kYXRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWluYWN0aXZlLWNvbG9yKTtcbn1cblxuYnV0dG9uLmJ0bi10YXNrLW9wdGlvbnMge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC10aHJlZSk7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG5idXR0b24uYnRuLWJhY2stdG8tYWxsLXByb2plY3RzIHtcbiAgaGVpZ2h0OiA0MnB4O1xuICB3aWR0aDogNDJweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDUwcHg7XG4gIGxlZnQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWFjY2VudC1jb2xvci10d28pO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yLXR3byk7XG4gIHBhZGRpbmc6IDJweCAycHggMHB4IDBweDtcbn1cblxuYnV0dG9uLmJ0bi1uZXctaXRlbSB7XG4gIGhlaWdodDogNDJweDtcbiAgd2lkdGg6IDQycHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiA1MHB4O1xuICByaWdodDogMjBweDtcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYWNjZW50LWNvbG9yLXR3byk7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItdHdvKTtcbiAgcGFkZGluZzogMHB4IDEwcHggMHB4O1xufVxuXG5mb290ZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgcGFkZGluZzogNXB4O1xufVxuXG5mb290ZXIgYSB7XG4gIGZvbnQtZmFtaWx5OiBcIkVsZWN0cm9saXplXCI7XG4gIGNvbG9yOiBncmF5O1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsMEJBQTBCO0VBQzFCLDJEQUEyRDtFQUMzRCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLDJEQUF3RDtFQUN4RCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLDJEQUFzRDtFQUN0RCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixxQ0FBcUM7RUFDckMsc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QiwrQkFBK0I7RUFDL0Isc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6Qix3QkFBd0I7RUFDeEIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7OztFQUdFLG1CQUFtQjtFQUNuQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7Ozs7OztFQU1FLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYix5Q0FBeUM7RUFDekMsd0JBQXdCO0VBQ3hCLDZEQUE2RDtFQUM3RCxXQUFXOztFQUVYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixXQUFXO0VBQ1gsVUFBVTs7RUFFVixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDhCQUE4Qjs7RUFFOUIsNkNBQTZDO0VBQzdDLHFFQUFxRTtBQUN2RTs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQiwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsV0FBVztFQUNYLHlDQUF5QztFQUN6QywwQkFBMEI7RUFDMUIseUNBQXlDO0VBQ3pDLG1CQUFtQjtFQUNuQix3QkFBd0I7RUFDeEIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLHlDQUF5QztFQUN6QywwQkFBMEI7RUFDMUIscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIsNkNBQTZDO0VBQzdDLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGdCQUFnQjtFQUNoQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1oseUNBQXlDO0VBQ3pDLDBCQUEwQjtFQUMxQix5Q0FBeUM7RUFDekMsbUJBQW1CO0VBQ25CLHdCQUF3QjtFQUN4QixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLDBCQUEwQjtFQUMxQiwwQkFBMEI7RUFDMUIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLHFDQUFxQztFQUNyQyxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsU0FBUztFQUNULGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTs7RUFFVixPQUFPO0VBQ1AsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsb0JBQW9CO0FBQ3RCOztBQUVBOztFQUVFLGVBQWU7RUFDZixPQUFPO0VBQ1AsZ0VBQWdFO0VBQ2hFLG1CQUFtQjtFQUNuQixvQkFBb0I7QUFDdEI7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLDJDQUEyQztFQUMzQyw4QkFBOEI7RUFDOUIsd0JBQXdCO0VBQ3hCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsd0JBQXdCO0FBQzFCOztBQUVBOztFQUVFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixVQUFVO0VBQ1YsU0FBUztFQUNULGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSw2QkFBNkI7RUFDN0IsVUFBVTtFQUNWLFlBQVk7QUFDZDs7QUFFQSw0R0FBNEc7QUFDNUc7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSw0REFBNEQ7QUFDOUQ7O0FBRUE7O0VBRUUseUNBQXlDO0VBQ3pDLG1DQUFtQztFQUNuQyxrQkFBa0I7RUFDbEIsb0JBQW9CO0FBQ3RCOztBQUVBOztFQUVFLE9BQU87RUFDUCx5QkFBeUI7RUFDekIsOEJBQThCO0VBQzlCLHdCQUF3QjtFQUN4QixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLHlCQUF5QjtBQUMzQjs7QUFFQTs7RUFFRSxPQUFPO0VBQ1AsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qiw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLDhDQUE4QztFQUM5Qyw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsUUFBUTtBQUNWOztBQUVBOzs7Ozs7RUFNRSxxQ0FBcUM7RUFDckMsOEJBQThCO0VBQzlCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBOzs7Ozs7RUFNRSx3QkFBd0I7QUFDMUI7O0FBRUE7O0VBRUUseUNBQXlDO0VBQ3pDLGlCQUFpQjtFQUNqQiw4QkFBOEI7RUFDOUIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gseUNBQXlDO0VBQ3pDLDZEQUE2RDtFQUM3RCxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1osdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBOztFQUVFLGFBQWE7RUFDYixZQUFZO0VBQ1osOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQiw2Q0FBNkM7RUFDN0MsOEJBQThCO0VBQzlCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDZDQUE2QztFQUM3QywyQ0FBMkM7RUFDM0Msa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5Q0FBeUM7RUFDekMsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixxQ0FBcUM7RUFDckMsd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7RUFDZixZQUFZO0VBQ1osVUFBVTtFQUNWLG1CQUFtQjtFQUNuQix5Q0FBeUM7RUFDekMsbUJBQW1CO0VBQ25CLHFDQUFxQztFQUNyQyw4QkFBOEI7RUFDOUIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxlQUFlO0VBQ2YsWUFBWTtFQUNaLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIseUNBQXlDO0VBQ3pDLG1CQUFtQjtFQUNuQixxQ0FBcUM7RUFDckMsOEJBQThCO0VBQzlCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsV0FBVztFQUNYLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsMkJBQTJCO0VBQzNCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixXQUFXO0FBQ2JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkVsZWN0cm9saXplXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuL2ZvbnRzL0VsZWN0cm9saXplLVJlZ3VsYXIud29mZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlF1aWNrc2FuZFxcXCI7XFxuICBzcmM6IHVybChcXFwiLi9mb250cy9RdWlja3NhbmQtTWVkaXVtLndvZmZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJRdWlja3NhbmRcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4vZm9udHMvUXVpY2tzYW5kLUJvbGQud29mZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuOnJvb3QuZGVmYXVsdC10aGVtZSB7XFxuICAtLW1haW4tY29sb3I6IGJsYWNrO1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yLXR3bzogbGF2ZW5kZXJibHVzaDtcXG4gIC0tYWNjZW50LWNvbG9yOiBzYWxtb247XFxuICAtLWFjY2VudC1jb2xvci10d286IHdoaXRlO1xcbiAgLS1hY2NlbnQtY29sb3ItdGhyZWU6IGxpZ2h0cGluaztcXG4gIC0tYWN0aXZlLWNvbG9yOiB0b21hdG87XFxuICAtLWFjdGl2ZS1jb2xvci10d286IHdoaXRlO1xcbiAgLS1pbmFjdGl2ZS1jb2xvcjogc2lsdmVyO1xcbiAgLS1kZWZhdWx0LXRoaWNrbmVzczogMnB4O1xcbn1cXG5cXG5odG1sIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDBweDtcXG4gIHBhZGRpbmc6IDBweDtcXG59XFxuXFxuKixcXG4qOmJlZm9yZSxcXG4qOmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxuICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYge1xcbiAgbWFyZ2luOiAwcHg7XFxufVxcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJRdWlja3NhbmRcXFwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG4gIG1hcmdpbjogMHB4O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbmhlYWRlciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IDE7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3ItdHdvKTtcXG4gIGJvcmRlci1ib3R0b206IHZhcigtLWRlZmF1bHQtdGhpY2tuZXNzKSBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3ItdHdvKTtcXG59XFxuXFxuLmhlYWRlci10b3Atcm93IHtcXG4gIGhlaWdodDogNTZweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG5oMSB7XFxuICBmb250LWZhbWlseTogXFxcIkVsZWN0cm9saXplXFxcIjtcXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZy10b3A6IDVweDtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxubmF2LnRvcC1uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxubmF2LnRvcC1uYXYgYnV0dG9uIHtcXG4gIHdpZHRoOiA5NnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yLXR3byk7XFxuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWFjY2VudC1jb2xvci10d28pO1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUXVpY2tzYW5kXFxcIjtcXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xcbiAgcGFkZGluZzogN3B4IDhweCA1cHg7XFxufVxcblxcbm5hdi50b3AtbmF2IGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItdHdvKTtcXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYWNjZW50LWNvbG9yKTtcXG59XFxuXFxubmF2LmJyZWFkY3J1bWItbmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxuICBwYWRkaW5nOiA1cHggMTBweCAwcHg7XFxuICBtYXJnaW46IDBweCAwcHggMTBweDtcXG59XFxuXFxuc3BhbiB7XFxuICBwYWRkaW5nOiAwcHggMTBweCAwcHg7XFxufVxcblxcbnNwYW4uYWxsLXByb2plY3RzIHtcXG4gIGhlaWdodDogMzZweDtcXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYmFja2dyb3VuZC1jb2xvci10d28pO1xcbiAgZm9udC1zaXplOiBtZWRpdW07XFxuICBsZXR0ZXItc3BhY2luZzogMC4yM3B4O1xcbiAgcGFkZGluZzogNnB4IDZweCAzcHg7XFxufVxcblxcbnNwYW4uY3VycmVudC1wcm9qZWN0IHtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICBwYWRkaW5nOiAzcHggNnB4IDNweDtcXG59XFxuXFxuYnV0dG9uLmJ0bi12aWV3LWFsbC1wcm9qZWN0cyB7XFxuICBoZWlnaHQ6IDM2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItdHdvKTtcXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYWNjZW50LWNvbG9yLXR3byk7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJRdWlja3NhbmRcXFwiO1xcbiAgZm9udC1zaXplOiBtZWRpdW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxuICBwYWRkaW5nOiAzcHggNnB4IDNweDtcXG59XFxuXFxuYnV0dG9uLmJ0bi12aWV3LWFsbC1wcm9qZWN0czpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tYWN0aXZlLWNvbG9yKTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWFjdGl2ZS1jb2xvcik7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcXG59XFxuXFxuYnV0dG9uLmJ0bi12aWV3LWFsbC1wcm9qZWN0czo6YWZ0ZXIge1xcbiAgaGVpZ2h0OiAwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxubWFpbiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAwO1xcblxcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBwYWRkaW5nLXRvcDogMTIwcHg7XFxufVxcblxcbi5pdGVtLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmctYm90dG9tOiA4MHB4O1xcbn1cXG5cXG4ucHJvamVjdC1jYXJkLFxcbi50YXNrLWNhcmQge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZmxleDogMTtcXG4gIGJvcmRlcjogdmFyKC0tZGVmYXVsdC10aGlja25lc3MpIHNvbGlkIHZhcigtLWFjY2VudC1jb2xvci10aHJlZSk7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgbWFyZ2luOiAwcHggMHB4IDIwcHg7XFxufVxcblxcbi5wcm9qZWN0LWhlYWRlcixcXG4udGFzay1oZWFkZXIge1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItdGhyZWUpO1xcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvci10d28pO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJRdWlja3NhbmRcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBib3JkZXItcmFkaXVzOiA5cHg7XFxuICBwYWRkaW5nOiA1cHggNXB4IDZweCA1cHg7XFxufVxcblxcbi5wcm9qZWN0LWhlYWRlcjpob3ZlciAuaW5wdXQtcHJvamVjdC10aXRsZSxcXG4udGFzay1oZWFkZXI6aG92ZXIgLmlucHV0LXRhc2stdGl0bGUge1xcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbn1cXG5cXG4udGFzay1oZWFkZXIuY29tcGxldGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWluYWN0aXZlLWNvbG9yKTtcXG59XFxuXFxuLnRhc2stZGV0YWlscy5jb21wbGV0ZWQge1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxLjVzIGVhc2U7XFxuICBvcGFjaXR5OiAwO1xcbiAgaGVpZ2h0OiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLnRhc2stZGV0YWlscy5wZW5kaW5nLFxcbi50YXNrLWRldGFpbHMuY29tcGxldGVkLnZpc2libGUge1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxLjVzIGVhc2U7XFxuICBvcGFjaXR5OiAxO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKiBUaGlzIHJ1bGUgaXMgcmVxdWlyZWQgZm9yIGNsaWNrIGV2ZW50cyBvbiBkaXNhYmxlZCBpbnB1dCBlbGVtZW50cyB0byBwcm9wYWdhdGUgdXB3YXJkcyBvbiBzb21lIGJyb3dzZXJzICovXFxuaW5wdXRbZGlzYWJsZWRdIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG5pbnB1dC5pbnB1dC10YXNrLXRpdGxlLmNvbXBsZXRlZCB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLnRhc2stY2FyZC5jb21wbGV0ZWQge1xcbiAgYm9yZGVyOiB2YXIoLS1kZWZhdWx0LXRoaWNrbmVzcykgc29saWQgdmFyKC0taW5hY3RpdmUtY29sb3IpO1xcbn1cXG5cXG5idXR0b24uYnRuLXNhdmUtcHJvamVjdCxcXG5idXR0b24uYnRuLXNhdmUtdGFzayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItdHdvKTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLW1haW4tY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogNXB4IDhweCA1cHg7XFxufVxcblxcbmlucHV0LmlucHV0LXByb2plY3QtdGl0bGUsXFxuaW5wdXQuaW5wdXQtdGFzay10aXRsZSB7XFxuICBmbGV4OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItdHdvKTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUXVpY2tzYW5kXFxcIjtcXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXG59XFxuXFxuaW5wdXQuaW5wdXQtcHJvamVjdC10aXRsZTpmb2N1cyxcXG5pbnB1dC5pbnB1dC10YXNrLXRpdGxlOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbi5wcm9qZWN0LWhlYWRlci1sZWZ0LFxcbi50YXNrLWhlYWRlci1sZWZ0IHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuYnV0dG9uLmJ0bi10YXNrLXN0YXR1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvci10d28pO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1zaXplOiBsYXJnZTtcXG4gIHBhZGRpbmc6IDBweCA2cHggMHB4O1xcbn1cXG5cXG5idXR0b24uYnRuLXRhc2stc3RhdHVzLnBlbmRpbmc6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCLjgIdcXFwiO1xcbn1cXG5cXG5idXR0b24uYnRuLXRhc2stc3RhdHVzLmNvbXBsZXRlZDo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIuKXiVxcXCI7XFxufVxcblxcbi5wcm9qZWN0LWhlYWRlcjpmb2N1cy13aXRoaW4sXFxuLnRhc2staGVhZGVyOmZvY3VzLXdpdGhpbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbn1cXG5cXG4udGFzay10aXRsZS5jb21wbGV0ZWQge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICB0ZXh0LWRlY29yYXRpb24tY29sb3I6IHZhcigtLWFjY2VudC1jb2xvci10d28pO1xcbiAgdGV4dC1kZWNvcmF0aW9uLXRoaWNrbmVzczogMnB4O1xcbn1cXG5cXG4udGFzay1oZWFkZXItcmlnaHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNnB4O1xcbn1cXG5cXG5idXR0b24uYnRuLXByb2plY3QtbW92ZS1kb3duLFxcbmJ1dHRvbi5idG4tcHJvamVjdC1tb3ZlLXVwLFxcbmJ1dHRvbi5idG4tdGFzay1tb3ZlLWRvd24sXFxuYnV0dG9uLmJ0bi10YXNrLW1vdmUtdXAsXFxuYnV0dG9uLmJ0bi1wcm9qZWN0LWRlbGV0ZSxcXG5idXR0b24uYnRuLXRhc2stZGVsZXRlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC10aHJlZSk7XFxuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yLXR3byk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgcGFkZGluZzogMHB4IDEwcHg7XFxufVxcblxcbmJ1dHRvbi5idG4tcHJvamVjdC1tb3ZlLWRvd246aG92ZXIsXFxuYnV0dG9uLmJ0bi1wcm9qZWN0LW1vdmUtdXA6aG92ZXIsXFxuYnV0dG9uLmJ0bi10YXNrLW1vdmUtZG93bjpob3ZlcixcXG5idXR0b24uYnRuLXRhc2stbW92ZS11cDpob3ZlcixcXG5idXR0b24uYnRuLXByb2plY3QtZGVsZXRlOmhvdmVyLFxcbmJ1dHRvbi5idG4tdGFzay1kZWxldGU6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbn1cXG5cXG4ucHJvamVjdC1kZXRhaWxzID4gZGl2LFxcbi50YXNrLWRldGFpbHMgPiBkaXYge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yLXR3byk7XFxuICBmb250LXNpemU6IG1lZGl1bTtcXG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggOXB4IDlweDtcXG4gIHBhZGRpbmc6IDEwcHggMTVweCAxMHB4O1xcbn1cXG5cXG4udGFzay1kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG50ZXh0YXJlYS5pbnB1dC10YXNrLWRlc2NyaXB0aW9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yLXR3byk7XFxuICBmb250LWZhbWlseTogXFxcIlF1aWNrc2FuZFxcXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiBtZWRpdW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgcmVzaXplOiBub25lO1xcbiAgcGFkZGluZzogMTBweCAxNXB4IDEwcHg7XFxufVxcblxcbnRleHRhcmVhLmlucHV0LXRhc2stZGVzY3JpcHRpb24uY29tcGxldGVkIHtcXG4gIGNvbG9yOiBncmF5O1xcbn1cXG5cXG4ucHJvamVjdC1kZXRhaWxzID4gLnRhc2stYm90dG9tLXJvdyxcXG4udGFzay1kZXRhaWxzID4gLnRhc2stYm90dG9tLXJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3ItdHdvKTtcXG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggOXB4IDlweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbmlucHV0LmlucHV0LXRhc2stZHVlLWRhdGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci10d28pO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYWNjZW50LWNvbG9yLXRocmVlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBwYWRkaW5nOiAycHg7XFxufVxcblxcbmlucHV0W2Rpc2FibGVkXS5pbnB1dC10YXNrLWR1ZS1kYXRlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0taW5hY3RpdmUtY29sb3IpO1xcbn1cXG5cXG5idXR0b24uYnRuLXRhc2stb3B0aW9ucyB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IGxhcmdlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LXRocmVlKTtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbmJ1dHRvbi5idG4tYmFjay10by1hbGwtcHJvamVjdHMge1xcbiAgaGVpZ2h0OiA0MnB4O1xcbiAgd2lkdGg6IDQycHg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDUwcHg7XFxuICBsZWZ0OiAyMHB4O1xcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWFjY2VudC1jb2xvci10d28pO1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yLXR3byk7XFxuICBwYWRkaW5nOiAycHggMnB4IDBweCAwcHg7XFxufVxcblxcbmJ1dHRvbi5idG4tbmV3LWl0ZW0ge1xcbiAgaGVpZ2h0OiA0MnB4O1xcbiAgd2lkdGg6IDQycHg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDUwcHg7XFxuICByaWdodDogMjBweDtcXG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3ItdHdvKTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvci10d28pO1xcbiAgcGFkZGluZzogMHB4IDEwcHggMHB4O1xcbn1cXG5cXG5mb290ZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuZm9vdGVyIGEge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJFbGVjdHJvbGl6ZVxcXCI7XFxuICBjb2xvcjogZ3JheTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCB7IFRhc2sgfSBmcm9tIFwiLi90YXNrXCI7XG5pbXBvcnQgeyByZW5kZXJCcmVhZGNydW1iTmF2LCBjbGVhckl0ZW1Db250YWluZXIsIHJlbmRlckFsbFByb2plY3RzLCByZW5kZXJUYXNrcywgc2hvd1Rhc2tWaWV3QnV0dG9ucywgaGlkZVRhc2tWaWV3QnV0dG9ucywgc2hvd1RvcE9mUGFnZSwgYXV0b0FkanVzdEhlaWdodCx0b2dnbGVUYXNrRWxlbWVudHNPblN0YXR1c0NoYW5nZSwgY2xpY2tIYW5kbGVyQ29tcGxldGVkVGFza0NhcmQgfSBmcm9tIFwiLi92aWV3XCI7IC8vIHByZXR0aWVyLWlnbm9yZVxuaW1wb3J0IHsgc2F2ZVRvTG9jYWxTdG9yYWdlLCBsb2FkRnJvbUxvY2FsU3RvcmFnZSB9IGZyb20gXCIuL2xvY2FsU3RvcmFnZVwiO1xuaW1wb3J0IHsgZGVtb1Byb2plY3RzIH0gZnJvbSBcIi4vZGVtb0RhdGFcIjtcblxubGV0IHByb2plY3RzID0gbG9hZEZyb21Mb2NhbFN0b3JhZ2UoKSB8fCBkZW1vUHJvamVjdHM7XG5sZXQgdGFyZ2V0UHJvamVjdDtcbmxldCB2aWV3O1xuXG5jb25zdCBsb2FkUHJvamVjdHNWaWV3ID0gZnVuY3Rpb24gKCkge1xuICB2aWV3ID0gXCJwcm9qZWN0c1wiO1xuICByZW5kZXJCcmVhZGNydW1iTmF2KHZpZXcpO1xuICBjbGVhckl0ZW1Db250YWluZXIoKTtcbiAgcmVuZGVyQWxsUHJvamVjdHMocHJvamVjdHMpO1xuICBoaWRlVGFza1ZpZXdCdXR0b25zKCk7XG4gIGlucHV0SGFuZGxlclByb2plY3RUaXRsZSgpO1xuICBjbGlja0hhbmRsZXJEaXZQcm9qZWN0RGV0YWlscygpO1xuICBjbGlja0hhbmRsZXJCdG5EZWxldGVQcm9qZWN0KCk7XG59O1xuXG5jb25zdCBsb2FkVGFza3NWaWV3ID0gZnVuY3Rpb24gKHRhcmdldFByb2plY3QpIHtcbiAgdmlldyA9IFwidGFza3NcIjtcbiAgcmVuZGVyQnJlYWRjcnVtYk5hdih2aWV3LCB0YXJnZXRQcm9qZWN0KTtcbiAgY2xlYXJJdGVtQ29udGFpbmVyKCk7XG4gIHJlbmRlclRhc2tzKHRhcmdldFByb2plY3QudGFza3MpO1xuICBzaG93VGFza1ZpZXdCdXR0b25zKCk7XG4gIGNsaWNrSGFuZGxlckJ0blZpZXdBbGxQcm9qZWN0cygpO1xuICBjbGlja0hhbmRsZXJCdG5CYWNrVG9BbGxQcm9qZWN0cygpO1xuICBjbGlja0hhbmRsZXJDb21wbGV0ZWRUYXNrQ2FyZCgpO1xuICBjbGlja0hhbmRsZXJCdG5UYXNrU3RhdHVzKHRhcmdldFByb2plY3QpO1xuICBpbnB1dEhhbmRsZXJUYXNrVGl0bGUodGFyZ2V0UHJvamVjdCk7XG4gIGNsaWNrSGFuZGxlckJ0bkRlbGV0ZVRhc2soKTtcbiAgaW5wdXRIYW5kbGVyVGFza0Rlc2NyaXB0aW9uKHRhcmdldFByb2plY3QpO1xuICBpbnB1dEhhbmRsZXJUYXNrRHVlRGF0ZSh0YXJnZXRQcm9qZWN0KTtcbiAgc2hvd1RvcE9mUGFnZSgpO1xufTtcblxuY29uc3QgY3JlYXRlTmV3UHJvamVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KFwiXCIsIFwiXCIsIFtdKTtcbiAgcHJvamVjdC5pZCA9IGBQJHtuZXcgRGF0ZSgpLmdldFRpbWUoKX1gO1xuICBwcm9qZWN0c1twcm9qZWN0LmlkXSA9IHByb2plY3Q7XG4gIHNhdmVUb0xvY2FsU3RvcmFnZSgpO1xuICBjbGVhckl0ZW1Db250YWluZXIoKTtcbiAgbG9hZFByb2plY3RzVmlldygpO1xuICBjb25zdCBpbnB1dFByb2plY3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgXCIuaW5wdXQtcHJvamVjdC10aXRsZVwiXG4gIClbMF07XG4gIGlucHV0UHJvamVjdFRpdGxlLmZvY3VzKCk7XG59O1xuXG5jb25zdCBkZWxldGVQcm9qZWN0ID0gZnVuY3Rpb24gKGUpIHtcbiAgY29uc3QgcHJvamVjdElkID0gZS50YXJnZXQuY2xvc2VzdChcIi5wcm9qZWN0LWNhcmRcIikuZGF0YXNldC5wcm9qZWN0SWQ7XG4gIGNvbnN0IHByb2plY3RUaXRsZSA9IHByb2plY3RzW3Byb2plY3RJZF0udGl0bGU7XG4gIGNvbnN0IGNvbmZpcm1EZWxldGUgPSBjb25maXJtKFxuICAgIHByb2plY3RUaXRsZVxuICAgICAgPyBgJHtwcm9qZWN0VGl0bGV9IC0gRGVsZXRlIHRoaXMgcHJvamVjdD9gXG4gICAgICA6IFwiRGVsZXRlIHRoaXMgcHJvamVjdD9cIlxuICApO1xuICBpZiAoIWNvbmZpcm1EZWxldGUpIHJldHVybjtcbiAgZGVsZXRlIHByb2plY3RzW3Byb2plY3RJZF07XG4gIHNhdmVUb0xvY2FsU3RvcmFnZSgpO1xuICBsb2FkUHJvamVjdHNWaWV3KCk7XG59O1xuXG5jb25zdCBjcmVhdGVOZXdUYXNrID0gZnVuY3Rpb24gKCkge1xuICB0YXJnZXRQcm9qZWN0LmFkZFRhc2sobmV3IFRhc2soXCJcIiwgXCJcIiwgXCJcIiwgXCJwZW5kaW5nXCIsIFwibWVkaXVtXCIsIFwiZW5hYmxlZFwiKSk7XG4gIHNhdmVUb0xvY2FsU3RvcmFnZSgpO1xuICBjbGVhckl0ZW1Db250YWluZXIoKTtcbiAgbG9hZFRhc2tzVmlldyh0YXJnZXRQcm9qZWN0KTtcbiAgY29uc3QgaW5wdXRUYXNrVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlucHV0LXRhc2stdGl0bGVcIik7XG4gIGlucHV0VGFza1RpdGxlLmZvY3VzKCk7XG59O1xuXG5jb25zdCBkZWxldGVUYXNrID0gZnVuY3Rpb24gKGUpIHtcbiAgY29uc3QgdGFza0lkID0gZS50YXJnZXQuY2xvc2VzdChcIi50YXNrLWNhcmRcIikuZGF0YXNldC50YXNrSWQ7XG4gIGNvbnN0IHRhc2tUaXRsZSA9IHRhcmdldFByb2plY3QudGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmlkID09PSB0YXNrSWQpWzBdXG4gICAgLnRpdGxlO1xuICBjb25zdCBjb25maXJtRGVsZXRlID0gY29uZmlybShcbiAgICB0YXNrVGl0bGUgPyBgJHt0YXNrVGl0bGV9IC0gRGVsZXRlIHRoaXMgdGFzaz9gIDogXCJEZWxldGUgdGhpcyB0YXNrP1wiXG4gICk7XG4gIGlmICghY29uZmlybURlbGV0ZSkgcmV0dXJuO1xuICB0YXJnZXRQcm9qZWN0LmRlbGV0ZVRhc2sodGFza0lkKTtcbiAgc2F2ZVRvTG9jYWxTdG9yYWdlKCk7XG4gIGxvYWRUYXNrc1ZpZXcodGFyZ2V0UHJvamVjdCk7XG59O1xuXG4vLyBTYXZlIGZ1bmN0aW9ucyB0cmlnZ2VyZWQgYnkgaW5wdXRzL2VkaXRzXG5cbmNvbnN0IGF1dG9TYXZlUHJvamVjdFRpdGxlQ2hhbmdlcyA9IGZ1bmN0aW9uIChwcm9qZWN0SWQsIHRpdGxlKSB7XG4gIHByb2plY3RzW3Byb2plY3RJZF0udGl0bGUgPSB0aXRsZS52YWx1ZTtcbiAgc2F2ZVRvTG9jYWxTdG9yYWdlKCk7XG59O1xuXG5jb25zdCBhdXRvU2F2ZVRhc2tTdGF0dXNDaGFuZ2VzID0gZnVuY3Rpb24gKHRhcmdldFByb2plY3QsIHRhc2tJZCwgYnV0dG9uKSB7XG4gIHRhcmdldFByb2plY3QudGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIGlmICh0YXNrLmlkID09PSB0YXNrSWQpIHtcbiAgICAgIHRhc2suc3RhdHVzID09PSBcInBlbmRpbmdcIlxuICAgICAgICA/ICh0YXNrLnN0YXR1cyA9IFwiY29tcGxldGVkXCIpXG4gICAgICAgIDogKHRhc2suc3RhdHVzID0gXCJwZW5kaW5nXCIpO1xuXG4gICAgICB0YXNrLmlucHV0U3RhdHVzID09PSBcImVuYWJsZWRcIlxuICAgICAgICA/ICh0YXNrLmlucHV0U3RhdHVzID0gXCJkaXNhYmxlZFwiKVxuICAgICAgICA6ICh0YXNrLmlucHV0U3RhdHVzID0gXCJlbmFibGVkXCIpO1xuXG4gICAgICBidXR0b24uYmx1cigpO1xuXG4gICAgICB0b2dnbGVUYXNrRWxlbWVudHNPblN0YXR1c0NoYW5nZShidXR0b24pO1xuXG4gICAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgYXV0b1NhdmVUYXNrVGl0bGVDaGFuZ2VzID0gZnVuY3Rpb24gKHRhcmdldFByb2plY3QsIHRhc2tJZCwgdGFza1RpdGxlKSB7XG4gIHRhcmdldFByb2plY3QudGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIGlmICh0YXNrLmlkID09PSB0YXNrSWQpIHRhc2sudGl0bGUgPSB0YXNrVGl0bGUudmFsdWU7XG4gICAgc2F2ZVRvTG9jYWxTdG9yYWdlKCk7XG4gIH0pO1xufTtcblxuLy8gcHJldHRpZXItaWdub3JlXG5jb25zdCBhdXRvU2F2ZVRhc2tEZXNjcmlwdGlvbkNoYW5nZXMgPSBmdW5jdGlvbiAoIHRhcmdldFByb2plY3QsIHRhc2tJZCwgdGFza0Rlc2NyaXB0aW9uRWwpIHtcbiAgdGFyZ2V0UHJvamVjdC50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgaWYgKHRhc2suaWQgPT09IHRhc2tJZCkgdGFzay5kZXNjcmlwdGlvbiA9IHRhc2tEZXNjcmlwdGlvbkVsLnZhbHVlO1xuICAgIHNhdmVUb0xvY2FsU3RvcmFnZSgpO1xuICB9KTtcbn07XG5cbi8vIHByZXR0aWVyLWlnbm9yZVxuY29uc3QgYXV0b1NhdmVUYXNrRHVlRGF0ZUNoYW5nZXMgPSBmdW5jdGlvbiAodGFyZ2V0UHJvamVjdCwgdGFza0lkLCB0YXNrRHVlRGF0ZSkge1xuICB0YXJnZXRQcm9qZWN0LnRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICBpZiAodGFzay5pZCA9PT0gdGFza0lkKSB0YXNrLmR1ZURhdGUgPSB0YXNrRHVlRGF0ZS52YWx1ZTtcbiAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgfSk7XG59O1xuXG4vLyBFdmVudCBoYW5kbGVycyAtIE5hdmlnYXRpb25cblxuY29uc3QgY2xpY2tIYW5kbGVyRGl2UHJvamVjdERldGFpbHMgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHByb2plY3REZXRhaWxzTkwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3QtZGV0YWlsc1wiKTtcbiAgcHJvamVjdERldGFpbHNOTC5mb3JFYWNoKChwcm9qZWN0RGV0YWlsKSA9PiB7XG4gICAgcHJvamVjdERldGFpbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY29uc3QgcHJvamVjdENhcmRJZCA9IHByb2plY3REZXRhaWwucGFyZW50RWxlbWVudC5kYXRhc2V0LnByb2plY3RJZDtcbiAgICAgIHRhcmdldFByb2plY3QgPSBwcm9qZWN0c1twcm9qZWN0Q2FyZElkXTtcbiAgICAgIGxvYWRUYXNrc1ZpZXcodGFyZ2V0UHJvamVjdCk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3QgY2xpY2tIYW5kbGVyQnRuVmlld0FsbFByb2plY3RzID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBidG5WaWV3QWxsUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi12aWV3LWFsbC1wcm9qZWN0c1wiKTtcbiAgYnRuVmlld0FsbFByb2plY3RzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbG9hZFByb2plY3RzVmlldygpO1xuICB9KTtcbn07XG5cbmNvbnN0IGNsaWNrSGFuZGxlckJ0bkJhY2tUb0FsbFByb2plY3RzID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBidG5CYWNrVG9BbGxQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLWJhY2stdG8tYWxsLXByb2plY3RzXCIpOyAvLyBwcmV0dGllci1pZ25vcmVcbiAgYnRuQmFja1RvQWxsUHJvamVjdHMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBsb2FkUHJvamVjdHNWaWV3KCk7XG4gIH0pO1xufTtcblxuLy8gRXZlbnQgaGFuZGxlcnMgLSBDcmVhdGUgYW5kIGRlbGV0ZSBpdGVtc1xuXG5jb25zdCBjbGlja0hhbmRsZXJCdG5OZXdJdGVtID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBidG5OZXdJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG4tbmV3LWl0ZW1cIik7XG4gIGJ0bk5ld0l0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpZiAodmlldyA9PT0gXCJwcm9qZWN0c1wiKSBjcmVhdGVOZXdQcm9qZWN0KCk7XG4gICAgaWYgKHZpZXcgPT09IFwidGFza3NcIikgY3JlYXRlTmV3VGFzaygpO1xuICB9KTtcbn07XG5cbmNvbnN0IGNsaWNrSGFuZGxlckJ0bkRlbGV0ZVByb2plY3QgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGRlbGV0ZVByb2plY3RCdXR0b25zTkwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgIFwiLmJ0bi1wcm9qZWN0LWRlbGV0ZVwiXG4gICk7XG4gIGRlbGV0ZVByb2plY3RCdXR0b25zTkwuZm9yRWFjaCgoYnV0dG9uKSA9PlxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGVsZXRlUHJvamVjdC5iaW5kKHRoaXMpKVxuICApO1xufTtcblxuY29uc3QgY2xpY2tIYW5kbGVyQnRuRGVsZXRlVGFzayA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgZGVsZXRlVGFza0J1dHRvbnNOTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYnRuLXRhc2stZGVsZXRlXCIpO1xuICBkZWxldGVUYXNrQnV0dG9uc05MLmZvckVhY2goKGJ1dHRvbikgPT5cbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRlbGV0ZVRhc2suYmluZCh0aGlzKSlcbiAgKTtcbn07XG5cbi8vIEV2ZW50IGhhbmRsZXJzIC0gSW5wdXRzL2VkaXRzIG1hZGUgdG8gcHJvamVjdHMgYW5kIHRhc2tzXG5cbmNvbnN0IGlucHV0SGFuZGxlclByb2plY3RUaXRsZSA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgcHJvamVjdFRpdGxlc05MID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pbnB1dC1wcm9qZWN0LXRpdGxlXCIpO1xuXG4gIGlmICghcHJvamVjdFRpdGxlc05MKSByZXR1cm47XG5cbiAgcHJvamVjdFRpdGxlc05MLmZvckVhY2goKHRpdGxlKSA9PlxuICAgIHRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xuICAgICAgY29uc3QgcHJvamVjdElkID0gZS50YXJnZXQuY2xvc2VzdChcIi5wcm9qZWN0LWNhcmRcIikuZGF0YXNldC5wcm9qZWN0SWQ7XG4gICAgICBhdXRvU2F2ZVByb2plY3RUaXRsZUNoYW5nZXMocHJvamVjdElkLCB0aXRsZSk7XG4gICAgfSlcbiAgKTtcbn07XG5cbmNvbnN0IGNsaWNrSGFuZGxlckJ0blRhc2tTdGF0dXMgPSBmdW5jdGlvbiAodGFyZ2V0UHJvamVjdCkge1xuICBjb25zdCBidG5UYXNrUGVuZGluZ05MID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5idG4tdGFzay1zdGF0dXNcIik7XG4gIGJ0blRhc2tQZW5kaW5nTkwuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgY29uc3QgdGFza0lkID0gZS50YXJnZXQuY2xvc2VzdChcIi50YXNrLWNhcmRcIikuZGF0YXNldC50YXNrSWQ7XG4gICAgICBhdXRvU2F2ZVRhc2tTdGF0dXNDaGFuZ2VzKHRhcmdldFByb2plY3QsIHRhc2tJZCwgYnV0dG9uKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3QgaW5wdXRIYW5kbGVyVGFza1RpdGxlID0gZnVuY3Rpb24gKHRhcmdldFByb2plY3QpIHtcbiAgY29uc3QgdGFza1RpdGxlc05MID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pbnB1dC10YXNrLXRpdGxlXCIpO1xuXG4gIGlmICghdGFza1RpdGxlc05MKSByZXR1cm47XG5cbiAgdGFza1RpdGxlc05MLmZvckVhY2goKHRpdGxlKSA9PlxuICAgIHRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xuICAgICAgY29uc3QgdGFza0lkID0gZS50YXJnZXQuY2xvc2VzdChcIi50YXNrLWNhcmRcIikuZGF0YXNldC50YXNrSWQ7XG4gICAgICBhdXRvU2F2ZVRhc2tUaXRsZUNoYW5nZXModGFyZ2V0UHJvamVjdCwgdGFza0lkLCB0aXRsZSk7XG4gICAgfSlcbiAgKTtcbn07XG5cbmNvbnN0IGlucHV0SGFuZGxlclRhc2tEZXNjcmlwdGlvbiA9IGZ1bmN0aW9uICh0YXJnZXRQcm9qZWN0KSB7XG4gIGNvbnN0IHRhc2tEZXNjcmlwdGlvbnNOTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgXCIuaW5wdXQtdGFzay1kZXNjcmlwdGlvblwiXG4gICk7XG5cbiAgaWYgKCF0YXNrRGVzY3JpcHRpb25zTkwpIHJldHVybjtcblxuICB0YXNrRGVzY3JpcHRpb25zTkwuZm9yRWFjaCgodGFza0Rlc2NyaXB0aW9uRWwpID0+IHtcbiAgICBhdXRvQWRqdXN0SGVpZ2h0KHRhc2tEZXNjcmlwdGlvbkVsKTtcblxuICAgIHRhc2tEZXNjcmlwdGlvbkVsLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xuICAgICAgY29uc3QgdGFza0lkID0gZS50YXJnZXQuY2xvc2VzdChcIi50YXNrLWNhcmRcIikuZGF0YXNldC50YXNrSWQ7XG4gICAgICBhdXRvU2F2ZVRhc2tEZXNjcmlwdGlvbkNoYW5nZXModGFyZ2V0UHJvamVjdCwgdGFza0lkLCB0YXNrRGVzY3JpcHRpb25FbCk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3QgaW5wdXRIYW5kbGVyVGFza0R1ZURhdGUgPSBmdW5jdGlvbiAodGFyZ2V0UHJvamVjdCkge1xuICBjb25zdCB0YXNrRHVlRGF0ZU5MID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pbnB1dC10YXNrLWR1ZS1kYXRlXCIpO1xuXG4gIGlmICghdGFza0R1ZURhdGVOTCkgcmV0dXJuO1xuXG4gIHRhc2tEdWVEYXRlTkwuZm9yRWFjaCgoZHVlRGF0ZSkgPT5cbiAgICBkdWVEYXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xuICAgICAgY29uc3QgdGFza0lkID0gZS50YXJnZXQuY2xvc2VzdChcIi50YXNrLWNhcmRcIikuZGF0YXNldC50YXNrSWQ7XG4gICAgICBhdXRvU2F2ZVRhc2tEdWVEYXRlQ2hhbmdlcyh0YXJnZXRQcm9qZWN0LCB0YXNrSWQsIGR1ZURhdGUpO1xuICAgIH0pXG4gICk7XG59O1xuXG4vLyBJbml0aWFsaXplIGFwcFxuY29uc3QgaW5pdEFwcCA9IGZ1bmN0aW9uICgpIHtcbiAgbG9hZFByb2plY3RzVmlldygpO1xuICBjbGlja0hhbmRsZXJCdG5OZXdJdGVtKCk7XG59O1xuXG5leHBvcnQgeyBwcm9qZWN0cywgaW5pdEFwcCB9O1xuIiwiZXhwb3J0IGNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihpZCwgdGl0bGUsIHRhc2tzKSB7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLnRhc2tzID0gdGFza3M7XG4gIH1cblxuICBhZGRUYXNrKHRhc2spIHtcbiAgICB0aGlzLnRhc2tzLnB1c2godGFzayk7XG4gIH1cblxuICBkZWxldGVUYXNrKHRhc2tJZCkge1xuICAgIGNvbnN0IHJlbWFpbmluZ1Rhc2tzID0gdGhpcy50YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2suaWQgIT09IHRhc2tJZCk7XG4gICAgdGhpcy50YXNrcyA9IHJlbWFpbmluZ1Rhc2tzO1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgc3RhdHVzLCBwcmlvcml0eSwgaW5wdXRTdGF0dXMpIHtcbiAgICB0aGlzLmlkID0gYFQke25ldyBEYXRlKCkuZ2V0VGltZSgpfWA7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLmlucHV0U3RhdHVzID0gaW5wdXRTdGF0dXM7XG4gIH1cbn1cbiIsImNvbnN0IGJ0blNvcnRCeUR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1kdWUtZGF0ZVwiKTtcbmNvbnN0IGJ0blNvcnRCeVByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG4tcHJpb3JpdHlcIik7XG5jb25zdCBicmVhZGNydW1iTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5icmVhZGNydW1iLW5hdlwiKTtcbmNvbnN0IGl0ZW1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLml0ZW0tY29udGFpbmVyXCIpO1xuY29uc3QgYnRuQmFja1RvQWxsUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1iYWNrLXRvLWFsbC1wcm9qZWN0c1wiKTsgLy8gcHJldHRpZXItaWdub3JlXG5cbmNvbnN0IHJlbmRlckJyZWFkY3J1bWJOYXYgPSBmdW5jdGlvbiAodmlldywgY3VycmVudFByb2plY3QpIHtcbiAgaWYgKHZpZXcgPT09IFwicHJvamVjdHNcIikge1xuICAgIGJyZWFkY3J1bWJOYXYuZm9yRWFjaCgoZWxlbWVudCkgPT4gKGVsZW1lbnQuaW5uZXJIVE1MID0gYGApKTtcbiAgICBicmVhZGNydW1iTmF2LmZvckVhY2goXG4gICAgICAoZWxlbWVudCkgPT5cbiAgICAgICAgKGVsZW1lbnQuaW5uZXJIVE1MID0gYFxuICA8c3BhbiBjbGFzcz1cImFsbC1wcm9qZWN0c1wiPkFsbCBQcm9qZWN0czwvc3Bhbj5cbiAgPHNwYW4gY2xhc3M9XCJzZXBhcmF0b3JcIj4+PC9zcGFuPlxuICBgKVxuICAgICk7XG4gIH1cblxuICBpZiAodmlldyA9PT0gXCJ0YXNrc1wiKSB7XG4gICAgYnJlYWRjcnVtYk5hdi5mb3JFYWNoKChlbGVtZW50KSA9PiAoZWxlbWVudC5pbm5lckhUTUwgPSBgYCkpO1xuICAgIGJyZWFkY3J1bWJOYXYuZm9yRWFjaChcbiAgICAgIChlbGVtZW50KSA9PlxuICAgICAgICAoZWxlbWVudC5pbm5lckhUTUwgPSBgXG4gIDxidXR0b24gY2xhc3M9XCJidG4tdmlldy1hbGwtcHJvamVjdHNcIj5BbGwgUHJvamVjdHM8L2J1dHRvbj5cbiAgPHNwYW4gY2xhc3M9XCJzZXBhcmF0b3JcIj4+PC9zcGFuPlxuICA8c3BhbiBjbGFzcz1cImN1cnJlbnQtcHJvamVjdFwiPiR7Y3VycmVudFByb2plY3QudGl0bGV9PC9zcGFuPlxuICBgKVxuICAgICk7XG4gIH1cbn07XG5cbmNvbnN0IGNsZWFySXRlbUNvbnRhaW5lciA9IGZ1bmN0aW9uICgpIHtcbiAgaXRlbUNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xufTtcblxuY29uc3QgcmVuZGVyUHJvamVjdENhcmQgPSBmdW5jdGlvbiAocHJvamVjdCkge1xuICBjb25zdCByZW5kZXJQcm9qZWN0RGV0YWlscyA9IGZ1bmN0aW9uIChwcm9qZWN0KSB7XG4gICAgbGV0IHRhc2tDb3VudCA9IDA7XG4gICAgcHJvamVjdC50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICBpZiAodGFzay5zdGF0dXMgPT09IFwicGVuZGluZ1wiKSB0YXNrQ291bnQgKz0gMTtcbiAgICB9KTtcbiAgICByZXR1cm4gYCR7dGFza0NvdW50fSBwZW5kaW5nIHRhc2tzYDtcbiAgfTtcblxuICBjb25zdCBwcm9qZWN0Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByb2plY3RDYXJkLmNsYXNzTmFtZSA9IFwicHJvamVjdC1jYXJkXCI7XG4gIHByb2plY3RDYXJkLmRhdGFzZXQucHJvamVjdElkID0gcHJvamVjdC5pZDtcbiAgcHJvamVjdENhcmQuaW5uZXJIVE1MID0gYFxuICA8ZGl2IGNsYXNzPVwicHJvamVjdC1oZWFkZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1oZWFkZXItbGVmdFwiPlxuICAgICAgPGlucHV0IGNsYXNzPVwiaW5wdXQtcHJvamVjdC10aXRsZVwiIHZhbHVlPVwiJHtcbiAgICAgICAgcHJvamVjdC50aXRsZVxuICAgICAgfVwiIG1heGxlbmd0aD1cIjI4XCIvPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWhlYWRlci1yaWdodFwiPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bi1wcm9qZWN0LW1vdmUtZG93blwiPuGQrzwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bi1wcm9qZWN0LW1vdmUtdXBcIj7hkLE8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJidG4tcHJvamVjdC1kZWxldGVcIj5YPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwicHJvamVjdC1kZXRhaWxzXCI+XG4gICAgPGRpdj5cbiAgICAgICR7cmVuZGVyUHJvamVjdERldGFpbHMocHJvamVjdCl9XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICBgO1xuXG4gIHJldHVybiBwcm9qZWN0Q2FyZDtcbn07XG5cbmNvbnN0IHJlbmRlclRhc2tDYXJkID0gZnVuY3Rpb24gKHRhc2spIHtcbiAgY29uc3QgdGFza0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YXNrQ2FyZC5jbGFzc05hbWUgPSBcInRhc2stY2FyZFwiO1xuICB0YXNrQ2FyZC5kYXRhc2V0LnRhc2tJZCA9IHRhc2suaWQ7XG4gIHRhc2tDYXJkLmNsYXNzTGlzdC5hZGQoYCR7dGFzay5zdGF0dXN9YCk7XG4gIHRhc2tDYXJkLmlubmVySFRNTCA9IGBcbiAgICA8ZGl2IGNsYXNzPVwidGFzay1oZWFkZXIgJHt0YXNrLnN0YXR1c31cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWhlYWRlci1sZWZ0XCI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4tdGFzay1zdGF0dXMgJHt0YXNrLnN0YXR1c31cIj48L2J1dHRvbj5cbiAgICAgICAgPGlucHV0IGNsYXNzPVwiaW5wdXQtdGFzay10aXRsZSAke3Rhc2suc3RhdHVzfVwiIHZhbHVlPVwiJHt0YXNrLnRpdGxlfVwiICAke3Rhc2suaW5wdXRTdGF0dXN9Lz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInRhc2staGVhZGVyLXJpZ2h0XCI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4tdGFzay1tb3ZlLWRvd25cIj7hkK88L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bi10YXNrLW1vdmUtdXBcIj7hkLE8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bi10YXNrLWRlbGV0ZVwiPlg8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWRldGFpbHMgJHt0YXNrLnN0YXR1c31cIj5cbiAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cImlucHV0LXRhc2stZGVzY3JpcHRpb24gJHt0YXNrLnN0YXR1c31cIiBuYW1lPVwidGFzay1kZXNjcmlwdGlvblwiICR7dGFzay5pbnB1dFN0YXR1c30+JHt0YXNrLmRlc2NyaXB0aW9ufTwvdGV4dGFyZWE+XG4gICAgICA8ZGl2IGNsYXNzPVwidGFzay1ib3R0b20tcm93XCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGNsYXNzPVwiaW5wdXQtdGFzay1kdWUtZGF0ZVwiIHZhbHVlPVwiJHt0YXNrLmR1ZURhdGV9XCIgJHt0YXNrLmlucHV0U3RhdHVzfS8+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4tdGFzay1vcHRpb25zXCI+Li4uPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYDtcblxuICByZXR1cm4gdGFza0NhcmQ7XG59O1xuXG5jb25zdCByZW5kZXJBbGxQcm9qZWN0cyA9IGZ1bmN0aW9uIChwcm9qZWN0cykge1xuICBmb3IgKGxldCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMocHJvamVjdHMpKSB7XG4gICAgaXRlbUNvbnRhaW5lci5wcmVwZW5kKHJlbmRlclByb2plY3RDYXJkKHZhbHVlKSk7XG4gIH1cbn07XG5jb25zdCByZW5kZXJUYXNrcyA9IGZ1bmN0aW9uICh0YXJnZXRQcm9qZWN0VGFza3MpIHtcbiAgZm9yIChsZXQgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHRhcmdldFByb2plY3RUYXNrcykpIHtcbiAgICBpdGVtQ29udGFpbmVyLnByZXBlbmQocmVuZGVyVGFza0NhcmQodmFsdWUpKTtcbiAgfVxufTtcblxuY29uc3Qgc2hvd1Rhc2tWaWV3QnV0dG9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgYnRuU29ydEJ5RHVlRGF0ZS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICBidG5Tb3J0QnlQcmlvcml0eS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICBidG5CYWNrVG9BbGxQcm9qZWN0cy5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xufTtcblxuY29uc3QgaGlkZVRhc2tWaWV3QnV0dG9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgYnRuU29ydEJ5RHVlRGF0ZS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICBidG5Tb3J0QnlQcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICBidG5CYWNrVG9BbGxQcm9qZWN0cy5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xufTtcblxuY29uc3Qgc2hvd1RvcE9mUGFnZSA9IGZ1bmN0aW9uICgpIHtcbiAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xufTtcblxuY29uc3QgYXV0b0FkanVzdEhlaWdodCA9IGZ1bmN0aW9uICh0YXNrRGVzY3JpcHRpb25FbCkge1xuICB0YXNrRGVzY3JpcHRpb25FbC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCAoKSA9PiB7XG4gICAgdGFza0Rlc2NyaXB0aW9uRWwuc3R5bGUuaGVpZ2h0ID0gXCJcIjtcbiAgICB0YXNrRGVzY3JpcHRpb25FbC5zdHlsZS5oZWlnaHQgPSB0YXNrRGVzY3JpcHRpb25FbC5zY3JvbGxIZWlnaHQgKyBcInB4XCI7XG4gIH0pO1xuXG4gIHRhc2tEZXNjcmlwdGlvbkVsLmZvY3VzKCk7XG4gIHRhc2tEZXNjcmlwdGlvbkVsLmJsdXIoKTtcblxuICB0YXNrRGVzY3JpcHRpb25FbC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcbiAgICB0YXNrRGVzY3JpcHRpb25FbC5zdHlsZS5oZWlnaHQgPSBcIlwiO1xuICAgIHRhc2tEZXNjcmlwdGlvbkVsLnN0eWxlLmhlaWdodCA9IHRhc2tEZXNjcmlwdGlvbkVsLnNjcm9sbEhlaWdodCArIFwicHhcIjtcbiAgfSk7XG59O1xuXG5jb25zdCB0b2dnbGVUYXNrRGV0YWlscyA9IGZ1bmN0aW9uICh0YXNrQ2FyZCkge1xuICBjb25zdCB0YXNrRGV0YWlsc0VsID0gdGFza0NhcmQucXVlcnlTZWxlY3RvcihcIi50YXNrLWRldGFpbHNcIik7XG4gIHRhc2tEZXRhaWxzRWwuY2xhc3NMaXN0LnRvZ2dsZShcInZpc2libGVcIik7XG59O1xuXG5jb25zdCB0b2dnbGVUYXNrRWxlbWVudHNPblN0YXR1c0NoYW5nZSA9IGZ1bmN0aW9uIChidXR0b24pIHtcbiAgYnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJjb21wbGV0ZWRcIik7XG4gIGJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwicGVuZGluZ1wiKTtcblxuICBjb25zdCB0YXNrQ2FyZEVsID0gYnV0dG9uLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICBjb25zdCB0YXNrSGVhZGVyRWwgPSB0YXNrQ2FyZEVsLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1oZWFkZXJcIik7XG4gIGNvbnN0IHRhc2tUaXRsZUlucHV0RWwgPSB0YXNrQ2FyZEVsLnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXQtdGFzay10aXRsZVwiKTtcbiAgY29uc3QgdGFza0RldGFpbHNFbCA9IHRhc2tDYXJkRWwucXVlcnlTZWxlY3RvcihcIi50YXNrLWRldGFpbHNcIik7XG4gIGNvbnN0IHRhc2tEZXNjcmlwdGlvbkVsID0gdGFza0NhcmRFbC5xdWVyeVNlbGVjdG9yKFwiLmlucHV0LXRhc2stZGVzY3JpcHRpb25cIik7XG4gIGNvbnN0IHRhc2tEdWVEYXRlRWwgPSB0YXNrQ2FyZEVsLnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXQtdGFzay1kdWUtZGF0ZVwiKTtcblxuICB0YXNrQ2FyZEVsLmNsYXNzTGlzdC50b2dnbGUoXCJjb21wbGV0ZWRcIik7XG4gIHRhc2tDYXJkRWwuY2xhc3NMaXN0LnRvZ2dsZShcInBlbmRpbmdcIik7XG4gIHRhc2tIZWFkZXJFbC5jbGFzc0xpc3QudG9nZ2xlKFwiY29tcGxldGVkXCIpO1xuICB0YXNrSGVhZGVyRWwuY2xhc3NMaXN0LnRvZ2dsZShcInBlbmRpbmdcIik7XG4gIHRhc2tUaXRsZUlucHV0RWwuY2xhc3NMaXN0LnRvZ2dsZShcImNvbXBsZXRlZFwiKTtcbiAgdGFza1RpdGxlSW5wdXRFbC5jbGFzc0xpc3QudG9nZ2xlKFwicGVuZGluZ1wiKTtcbiAgdGFza0RldGFpbHNFbC5jbGFzc0xpc3QudG9nZ2xlKFwiY29tcGxldGVkXCIpO1xuICB0YXNrRGV0YWlsc0VsLmNsYXNzTGlzdC50b2dnbGUoXCJwZW5kaW5nXCIpO1xuICB0YXNrRGV0YWlsc0VsLmNsYXNzTGlzdC5yZW1vdmUoXCJ2aXNpYmxlXCIpO1xuICB0YXNrRGVzY3JpcHRpb25FbC5jbGFzc0xpc3QudG9nZ2xlKFwiY29tcGxldGVkXCIpO1xuICB0YXNrRGVzY3JpcHRpb25FbC5jbGFzc0xpc3QudG9nZ2xlKFwicGVuZGluZ1wiKTtcblxuICB0YXNrVGl0bGVJbnB1dEVsLmRpc2FibGVkID0gIXRhc2tUaXRsZUlucHV0RWwuZGlzYWJsZWQ7XG4gIHRhc2tEZXNjcmlwdGlvbkVsLmRpc2FibGVkID0gIXRhc2tEZXNjcmlwdGlvbkVsLmRpc2FibGVkO1xuICB0YXNrRHVlRGF0ZUVsLmRpc2FibGVkID0gIXRhc2tEdWVEYXRlRWwuZGlzYWJsZWQ7XG59O1xuXG5jb25zdCBjbGlja0hhbmRsZXJDb21wbGV0ZWRUYXNrQ2FyZCA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgY29tcGxldGVkVGFza0NhcmROTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFzay1jYXJkXCIpO1xuICBjb21wbGV0ZWRUYXNrQ2FyZE5MLmZvckVhY2goKHRhc2tDYXJkKSA9PiB7XG4gICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uRWwgPSB0YXNrQ2FyZC5xdWVyeVNlbGVjdG9yKFwiLmlucHV0LXRhc2stZGVzY3JpcHRpb25cIik7XG4gICAgdGFza0NhcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGlmICh0YXNrQ2FyZC5jbGFzc0xpc3QuY29udGFpbnMoXCJjb21wbGV0ZWRcIikpIHtcbiAgICAgICAgdGFza0Rlc2NyaXB0aW9uRWwuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgYXV0b0FkanVzdEhlaWdodCh0YXNrRGVzY3JpcHRpb25FbCk7XG4gICAgICAgIHRhc2tEZXNjcmlwdGlvbkVsLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHRvZ2dsZVRhc2tEZXRhaWxzKHRhc2tDYXJkKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQge1xuICByZW5kZXJCcmVhZGNydW1iTmF2LFxuICBjbGVhckl0ZW1Db250YWluZXIsXG4gIHJlbmRlckFsbFByb2plY3RzLFxuICByZW5kZXJUYXNrcyxcbiAgc2hvd1Rhc2tWaWV3QnV0dG9ucyxcbiAgaGlkZVRhc2tWaWV3QnV0dG9ucyxcbiAgc2hvd1RvcE9mUGFnZSxcbiAgYXV0b0FkanVzdEhlaWdodCxcbiAgdG9nZ2xlVGFza0VsZW1lbnRzT25TdGF0dXNDaGFuZ2UsXG4gIGNsaWNrSGFuZGxlckNvbXBsZXRlZFRhc2tDYXJkLFxufTtcbiIsImltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4vY29udHJvbGxlclwiO1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCB7IGRlbW9Qcm9qZWN0cyB9IGZyb20gXCIuL2RlbW9EYXRhXCI7XG5cbmV4cG9ydCBjb25zdCBzYXZlVG9Mb2NhbFN0b3JhZ2UgPSBmdW5jdGlvbiAoKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2FkRnJvbUxvY2FsU3RvcmFnZSA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3Qgc3RvcmVkUHJvamVjdHNKU09OID1cbiAgICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpIHx8IGRlbW9Qcm9qZWN0cztcblxuICBsZXQgcHJvamVjdHNXaXRoRnVuY3Rpb25zID0ge307XG4gIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHN0b3JlZFByb2plY3RzSlNPTikpIHtcbiAgICBwcm9qZWN0c1dpdGhGdW5jdGlvbnNba2V5XSA9IG5ldyBQcm9qZWN0KFxuICAgICAgdmFsdWUuaWQsXG4gICAgICB2YWx1ZS50aXRsZSxcbiAgICAgIHZhbHVlLnRhc2tzXG4gICAgKTtcbiAgfVxuICByZXR1cm4gcHJvamVjdHNXaXRoRnVuY3Rpb25zO1xufTtcbiIsImV4cG9ydCBsZXQgZGVtb1Byb2plY3RzID0ge1xuICBQMTY5NjgxMDUyNzYwMToge1xuICAgIGlkOiBcIlAxNjk2ODEwNTI3NjAxXCIsXG4gICAgdGl0bGU6IFwiSG9tZVwiLFxuICAgIHRhc2tzOiBbXG4gICAgICB7XG4gICAgICAgIGlkOiBcIlQxNjk3NzEwNjk0NDU4XCIsXG4gICAgICAgIHRpdGxlOiBcIlBsYXkgdmlkZW8gZ2FtZXNcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiWmVsZGEgVE9US1xcbkxpdHRsZSBOaWdodG1hcmVzIElJXCIsXG4gICAgICAgIGR1ZURhdGU6IFwiMjAyMy0xMC0yMFwiLFxuICAgICAgICBzdGF0dXM6IFwicGVuZGluZ1wiLFxuICAgICAgICBwcmlvcml0eTogXCJtZWRpdW1cIixcbiAgICAgICAgaW5wdXRTdGF0dXM6IFwiZW5hYmxlZFwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IFwiVDE2OTgzMDA3Mzc5NzhcIixcbiAgICAgICAgdGl0bGU6IFwiQ2xlYW4gdGhlIGhvdXNlXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgIFwiV2lwZSBkdXN0IGZyb20gc3VyZmFjZXNcXG5WYWN1dW0gYW5kIG1vcCBmbG9vcnNcXG5DbGVhbiBraXRjaGVuIGFuZCBiYXRocm9vbXNcXG5FbXB0eSBiaW5zXCIsXG4gICAgICAgIGR1ZURhdGU6IFwiMjAyMy0xMC0zMFwiLFxuICAgICAgICBzdGF0dXM6IFwicGVuZGluZ1wiLFxuICAgICAgICBwcmlvcml0eTogXCJtZWRpdW1cIixcbiAgICAgICAgaW5wdXRTdGF0dXM6IFwiZW5hYmxlZFwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IFwiVDE2OTgzNzExODcyNDFcIixcbiAgICAgICAgdGl0bGU6IFwiRml4IGtpdGNoZW4gbGlnaHRzXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxuICAgICAgICBkdWVEYXRlOiBcIlwiLFxuICAgICAgICBzdGF0dXM6IFwicGVuZGluZ1wiLFxuICAgICAgICBwcmlvcml0eTogXCJtZWRpdW1cIixcbiAgICAgICAgaW5wdXRTdGF0dXM6IFwiZW5hYmxlZFwiLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICBQMTY5NjgxMDUyNzYwMjoge1xuICAgIGlkOiBcIlAxNjk2ODEwNTI3NjAyXCIsXG4gICAgdGl0bGU6IFwiU3R1ZHlcIixcbiAgICB0YXNrczogW1xuICAgICAge1xuICAgICAgICBpZDogXCJUMTY5NzcxMTQxNTU2NVwiLFxuICAgICAgICB0aXRsZTogXCJGaW5pc2ggVG9kbyBMaXN0IHByb2plY3RcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgICAgIGR1ZURhdGU6IFwiMjAyMy0xMC0yNlwiLFxuICAgICAgICBzdGF0dXM6IFwiY29tcGxldGVkXCIsXG4gICAgICAgIHByaW9yaXR5OiBcIm1lZGl1bVwiLFxuICAgICAgICBpbnB1dFN0YXR1czogXCJkaXNhYmxlZFwiLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICBQMTY5NzcxMDczNjAwMDoge1xuICAgIGlkOiBcIlAxNjk3NzEwNzM2MDAwXCIsXG4gICAgdGl0bGU6IFwiVHJhdmVsXCIsXG4gICAgdGFza3M6IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6IFwiVDE2OTc3MTA3NDExMjBcIixcbiAgICAgICAgdGl0bGU6IFwiUGFzc3BvcnRcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQXBwbHkgZm9yIHBhc3Nwb3J0XCIsXG4gICAgICAgIGR1ZURhdGU6IFwiMjAyMy0xMC0yM1wiLFxuICAgICAgICBzdGF0dXM6IFwicGVuZGluZ1wiLFxuICAgICAgICBwcmlvcml0eTogXCJtZWRpdW1cIixcbiAgICAgICAgaW5wdXRTdGF0dXM6IFwiZW5hYmxlZFwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IFwiVDE2OTgzNzA3OTQ0ODNcIixcbiAgICAgICAgdGl0bGU6IFwiUGxhbiBpdGluZXJhcnlcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiTWFrZSBsaXN0IG9mIHBsYWNlcyB0byB2aXNpdFwiLFxuICAgICAgICBkdWVEYXRlOiBcIlwiLFxuICAgICAgICBzdGF0dXM6IFwicGVuZGluZ1wiLFxuICAgICAgICBwcmlvcml0eTogXCJtZWRpdW1cIixcbiAgICAgICAgaW5wdXRTdGF0dXM6IFwiZW5hYmxlZFwiLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICBQMTY5ODM3MDkzMTYzMDoge1xuICAgIGlkOiBcIlAxNjk4MzcwOTMxNjMwXCIsXG4gICAgdGl0bGU6IFwiR3JvY2VyaWVzXCIsXG4gICAgdGFza3M6IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6IFwiVDE2OTgzNzA5NDk3OTlcIixcbiAgICAgICAgdGl0bGU6IFwiV29vbHdvcnRoc1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJCYW5hbmFzXFxuTWlsa1xcbkJ1dHRlclxcbkZyb3plbiBkdW1wbGluZ3NcXG5Ub2lsZXQgcGFwZXJcIixcbiAgICAgICAgZHVlRGF0ZTogXCJcIixcbiAgICAgICAgc3RhdHVzOiBcInBlbmRpbmdcIixcbiAgICAgICAgcHJpb3JpdHk6IFwibWVkaXVtXCIsXG4gICAgICAgIGlucHV0U3RhdHVzOiBcImVuYWJsZWRcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiBcIlQxNjk4MzcxMTE5NTM2XCIsXG4gICAgICAgIHRpdGxlOiBcIkFsZGlcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQ2hlZXNlXFxuQmlzY3VpdHNcIixcbiAgICAgICAgZHVlRGF0ZTogXCJcIixcbiAgICAgICAgc3RhdHVzOiBcImNvbXBsZXRlZFwiLFxuICAgICAgICBwcmlvcml0eTogXCJtZWRpdW1cIixcbiAgICAgICAgaW5wdXRTdGF0dXM6IFwiZGlzYWJsZWRcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0MDogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IGluaXRBcHAgfSBmcm9tIFwiLi9jb250cm9sbGVyXCI7XG5cbihmdW5jdGlvbiAoKSB7XG4gIGluaXRBcHAoKTtcbn0pKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=