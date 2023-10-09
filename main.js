/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project),
/* harmony export */   projects: () => (/* binding */ projects),
/* harmony export */   renderProjectCard: () => (/* binding */ renderProjectCard)
/* harmony export */ });
let projects = {
  project1: {
    id: "P1696810527601",
    title: "Home",
    tasks: [
      {
        id: "T1696810527601",
        status: "completed",
        taskId: 123,
        title: "wash car",
        description: "vacuum interior, wash exterior",
        dueDate: "2023-09-29",
        priority: "low",
      },
      {
        id: "T1696810527601",
        status: "pending",
        taskId: 456,
        title: "play video games",
        description: "Zelda",
        dueDate: "2023-10-05",
        priority: "high",
      },
    ],
  },
  project2: {
    id: "P1696810527601",
    title: "Study",
    tasks: [
      {
        id: "T1696810527601",
        status: "completed",
        taskId: 234,
        title: "read article on OOP",
        description:
          "https://www.educative.io/blog/object-oriented-programming",
        dueDate: "2023-09-28",
        priority: "high",
      },
    ],
  },
  project3: {
    id: "P1696810527601",
    title: "Work",
    tasks: [],
  },
};

class Project {
  constructor(title) {
    this.id = `P${new Date().getTime()}`;
    this.title = title;
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
    console.log(`NEW TASK ADDED - ${this.title} -> ${task.title}`);
  }
}

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
  projectCard.innerHTML = `
  <div class="project-header" id="${project.id}${project.title}">
    <div class="project-header-left">
      <div class="task-title">${project.title}</div>
    </div>
    <div class="project-header-right">
      <button class="project-move-down">ᐯ</button>
      <button class="project-move-up">ᐱ</button>
    </div>
  </div>
  <div class="project-details">
    <ul>
      ${renderProjectDetails(project)}
    </ul>
  </div>
  `;

  return projectCard;
};


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Task: () => (/* binding */ Task),
/* harmony export */   renderTaskCard: () => (/* binding */ renderTaskCard)
/* harmony export */ });
class Task {
  constructor(taskId, status, title, description, dueDate, priority) {
    this.id = `T${new Date().getTime()}`;
    this.status = status;
    this.taskId = taskId;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

const renderTaskCard = function (task) {
  const taskCard = document.createElement("div");
  taskCard.className = "task-card";
  taskCard.innerHTML = `
    <div class="task-header">
      <div class="task-header-left">
        <button class="complete-task">〇</button>
        <div class="task-title">${task.title}</div>
      </div>
      <div class="task-header-right">
        <button class="task-move-down">ᐯ</button>
        <button class="task-move-up">ᐱ</button>
      </div>
    </div>
    <div class="task-details">
      <div class="task-description">${task.description}</div>
      <div class="task-bottom-row">
        <button class="task-due-date">${
          task.status === "completed" ? "Completed" : task.dueDate
        }</button>
        <button class="task-options">...</button>
      </div>
    </div>
  `;

  return taskCard;
};


/***/ }),
/* 3 */,
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 5 */
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
/* 6 */
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
/* 7 */
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
/* 8 */
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
/* 9 */
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
/* 10 */
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
/* 11 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Electrolize&family=Nova+Mono&family=PT+Mono&family=Quicksand:wght@500;700);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root.default-theme {
  --main-color: black;
  --background-color: whitesmoke;
  --background-color-two: lavenderblush;
  --accent-color: salmon;
  --accent-color-two: white;
  --accent-color-three: lightpink;
  --active-color: tomato;
  --active-color-two: white;
  --inactive-color: silver;
}

html {
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
  border-bottom: 1px solid var(--accent-color-two);
}

.header-top-row {
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
  height: 20px;
  background-color: var(--background-color-two);
  color: var(--accent-color);
  border: 1px solid var(--accent-color);
  border-radius: 5px;
  font-size: medium;
  padding: 7px 8px 5px;
}

nav.top-nav button.btn-previous,
nav.top-nav button.btn-next {
  width: 25px;
}

nav.top-nav button:hover {
  background-color: var(--accent-color);
  color: var(--accent-color-two);
}

nav.breadcrumb-nav {
  font-size: medium;
  padding: 5px 10px 0px;
  margin: 0px 0px 10px;
}

span {
  padding: 0px 5px 0px;
}

span.accent {
  color: var(--accent-color);
  padding: 1px 6px 1px;
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
  padding-top: 110px;
}

button.view-all-projects,
button.toggle-project-settings {
  background-color: var(--background-color-two);
  color: var(--accent-color);
  border: none;
  font-family: "Quicksand";
  font-size: medium;
  text-decoration: underline;
  letter-spacing: 0.23px;
}

button.view-all-projects:hover,
button.toggle-project-settings:hover {
  color: var(--active-color);
  font-weight: 700;
  letter-spacing: 0px;
}

button.view-all-projects::after,
button.toggle-project-settings::after {
  content: attr(data-text);
  height: 0;
  visibility: hidden;
  font-weight: 700;
}

.item-container,
.form-container {
  width: 100%;
}

.project-card,
.task-card {
  cursor: pointer;
  flex: 1;
  border: 1px solid var(--accent-color-three);
  border-radius: 10px;
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
  padding: 5px 8px 5px 5px;
}

.project-header.new-project {
  height: 40px;
  background-color: var(--accent-color);
}

button.btn-save-project {
  width: 40px;
  background-color: var(--accent-color-two);
  border: 2px solid var(--main-color);
  border-radius: 5px;
  padding: 5px 8px 5px;
}

input#project-title {
  background-color: var(--accent-color);
  color: var(--accent-color-two);
  font-family: "Quicksand";
  font-size: medium;
  font-weight: bold;
  border: none;
  outline: none;
  margin-left: 3px;
}

input#project-title::placeholder {
  color: var(--accent-color-three);
}

.project-header-left,
.task-header-left {
  display: flex;
  align-items: center;
}

button.complete-task {
  background-color: var(--accent-color-three);
  border: none;
  color: var(--accent-color-two);
  font-size: large;
  padding: 0px 6px 0px;
}

.task-title {
  margin-left: 5px;
}

.task-title.complete {
  text-decoration: line-through;
  text-decoration-color: white;
  text-decoration-thickness: 2px;
}

.task-header-right {
  display: flex;
  gap: 6px;
}

button.project-move-down,
button.project-move-up,
button.task-move-down,
button.task-move-up {
  background-color: var(--accent-three);
  color: var(--accent-color-two);
  border: none;
  font-weight: 700;
  padding: 0px 6px;
}

.project-details > div,
.task-details > div {
  background-color: var(--accent-color-two);
  font-size: small;
  padding: 5px 10px 5px 10px;
}

.project-details {
  min-height: 35px;
}

.project-details > ul {
  padding-left: 35px;
}

.task-details > .task-description {
  padding: 10px 15px 10px;
}

.project-details > .task-bottom-row,
.task-details > .task-bottom-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--background-color-two);
  border-radius: 0px 0px 9px 9px;
  font-weight: 700;
}

button.task-due-date {
  cursor: pointer;
  background-color: var(--accent-three);
  color: var(--main-color);
  border: none;
  font-weight: 700;
}

button.project-options,
button.task-options {
  cursor: pointer;
  font-size: large;
  background-color: var(--accent-three);
  color: var(--main-color);
  border: none;
  font-weight: 700;
}

button.btn-new-project {
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Electrolize&family=Nova+Mono&family=PT+Mono&family=Quicksand:wght@500;700\");\n\n:root.default-theme {\n  --main-color: black;\n  --background-color: whitesmoke;\n  --background-color-two: lavenderblush;\n  --accent-color: salmon;\n  --accent-color-two: white;\n  --accent-color-three: lightpink;\n  --active-color: tomato;\n  --active-color-two: white;\n  --inactive-color: silver;\n}\n\nhtml {\n  margin: 0px;\n  padding: 0px;\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n  /* border: 1px solid red; */\n}\n\n.hidden {\n  display: none;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0px;\n}\n\nbody {\n  height: 100vh;\n  background-color: var(--background-color);\n  color: var(--main-color);\n  font-family: \"Quicksand\", Tahoma, Geneva, Verdana, sans-serif;\n  margin: 0px;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\nheader {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 1;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  background-color: var(--background-color-two);\n  border-bottom: 1px solid var(--accent-color-two);\n}\n\n.header-top-row {\n  display: flex;\n  justify-content: space-between;\n  padding: 10px;\n}\n\nh1 {\n  font-family: \"Electrolize\";\n  color: var(--accent-color);\n  font-size: x-large;\n  text-align: center;\n  padding-top: 5px;\n}\n\nbutton:hover {\n  cursor: pointer;\n}\n\nnav.top-nav {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n}\n\nnav.top-nav button {\n  height: 20px;\n  background-color: var(--background-color-two);\n  color: var(--accent-color);\n  border: 1px solid var(--accent-color);\n  border-radius: 5px;\n  font-size: medium;\n  padding: 7px 8px 5px;\n}\n\nnav.top-nav button.btn-previous,\nnav.top-nav button.btn-next {\n  width: 25px;\n}\n\nnav.top-nav button:hover {\n  background-color: var(--accent-color);\n  color: var(--accent-color-two);\n}\n\nnav.breadcrumb-nav {\n  font-size: medium;\n  padding: 5px 10px 0px;\n  margin: 0px 0px 10px;\n}\n\nspan {\n  padding: 0px 5px 0px;\n}\n\nspan.accent {\n  color: var(--accent-color);\n  padding: 1px 6px 1px;\n}\n\nmain {\n  position: relative;\n  z-index: 0;\n\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  align-items: start;\n  padding: 15px;\n  padding-top: 110px;\n}\n\nbutton.view-all-projects,\nbutton.toggle-project-settings {\n  background-color: var(--background-color-two);\n  color: var(--accent-color);\n  border: none;\n  font-family: \"Quicksand\";\n  font-size: medium;\n  text-decoration: underline;\n  letter-spacing: 0.23px;\n}\n\nbutton.view-all-projects:hover,\nbutton.toggle-project-settings:hover {\n  color: var(--active-color);\n  font-weight: 700;\n  letter-spacing: 0px;\n}\n\nbutton.view-all-projects::after,\nbutton.toggle-project-settings::after {\n  content: attr(data-text);\n  height: 0;\n  visibility: hidden;\n  font-weight: 700;\n}\n\n.item-container,\n.form-container {\n  width: 100%;\n}\n\n.project-card,\n.task-card {\n  cursor: pointer;\n  flex: 1;\n  border: 1px solid var(--accent-color-three);\n  border-radius: 10px;\n  margin: 0px 0px 20px;\n}\n\n.project-header,\n.task-header {\n  height: 40px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: var(--accent-color-three);\n  color: var(--accent-color-two);\n  font-family: \"Quicksand\";\n  font-weight: bold;\n  border-radius: 9px;\n  padding: 5px 8px 5px 5px;\n}\n\n.project-header.new-project {\n  height: 40px;\n  background-color: var(--accent-color);\n}\n\nbutton.btn-save-project {\n  width: 40px;\n  background-color: var(--accent-color-two);\n  border: 2px solid var(--main-color);\n  border-radius: 5px;\n  padding: 5px 8px 5px;\n}\n\ninput#project-title {\n  background-color: var(--accent-color);\n  color: var(--accent-color-two);\n  font-family: \"Quicksand\";\n  font-size: medium;\n  font-weight: bold;\n  border: none;\n  outline: none;\n  margin-left: 3px;\n}\n\ninput#project-title::placeholder {\n  color: var(--accent-color-three);\n}\n\n.project-header-left,\n.task-header-left {\n  display: flex;\n  align-items: center;\n}\n\nbutton.complete-task {\n  background-color: var(--accent-color-three);\n  border: none;\n  color: var(--accent-color-two);\n  font-size: large;\n  padding: 0px 6px 0px;\n}\n\n.task-title {\n  margin-left: 5px;\n}\n\n.task-title.complete {\n  text-decoration: line-through;\n  text-decoration-color: white;\n  text-decoration-thickness: 2px;\n}\n\n.task-header-right {\n  display: flex;\n  gap: 6px;\n}\n\nbutton.project-move-down,\nbutton.project-move-up,\nbutton.task-move-down,\nbutton.task-move-up {\n  background-color: var(--accent-three);\n  color: var(--accent-color-two);\n  border: none;\n  font-weight: 700;\n  padding: 0px 6px;\n}\n\n.project-details > div,\n.task-details > div {\n  background-color: var(--accent-color-two);\n  font-size: small;\n  padding: 5px 10px 5px 10px;\n}\n\n.project-details {\n  min-height: 35px;\n}\n\n.project-details > ul {\n  padding-left: 35px;\n}\n\n.task-details > .task-description {\n  padding: 10px 15px 10px;\n}\n\n.project-details > .task-bottom-row,\n.task-details > .task-bottom-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: var(--background-color-two);\n  border-radius: 0px 0px 9px 9px;\n  font-weight: 700;\n}\n\nbutton.task-due-date {\n  cursor: pointer;\n  background-color: var(--accent-three);\n  color: var(--main-color);\n  border: none;\n  font-weight: 700;\n}\n\nbutton.project-options,\nbutton.task-options {\n  cursor: pointer;\n  font-size: large;\n  background-color: var(--accent-three);\n  color: var(--main-color);\n  border: none;\n  font-weight: 700;\n}\n\nbutton.btn-new-project {\n  position: fixed;\n  bottom: 50px;\n  right: 20px;\n  font-size: xx-large;\n  border: 2px solid var(--accent-color-two);\n  border-radius: 50px;\n  background-color: var(--accent-color);\n  color: var(--accent-color-two);\n  padding: 0px 10px 0px;\n}\n\nfooter {\n  position: fixed;\n  bottom: 0px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  background-color: lightgray;\n  padding: 5px;\n}\n\nfooter a {\n  font-family: \"Electrolize\";\n  color: gray;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 12 */
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
/* 13 */
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
/* 14 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderBreadcrumbNav: () => (/* binding */ renderBreadcrumbNav)
/* harmony export */ });
const breadcrumbNav = document.querySelector(".breadcrumb-nav");

const renderBreadcrumbNav = function (mode, currentProject) {
  if (mode === "projectsView") {
    breadcrumbNav.innerHTML = ``;
    breadcrumbNav.innerHTML = `
  <span class="accent">All Projects</span>
  <span class="separator">></span>
  `;
  }

  if (mode === "tasksView") {
    breadcrumbNav.innerHTML = ``;
    breadcrumbNav.innerHTML = `
  <button class="view-all-projects">All Projects</button>
  <span class="separator">></span>
  <span>${currentProject.title}</span>
  `;
  }
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
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);





const itemContainer = document.querySelector(".item-container");
const formContainer = document.querySelector(".form-container");
const inputProjectTitle = document.querySelector("#project-title");
const btnNewProject = document.querySelector(".btn-new-project");

const clearItemContainer = function () {
  itemContainer.innerHTML = "";
};

const displayAllProjects = function () {
  (0,_nav__WEBPACK_IMPORTED_MODULE_0__.renderBreadcrumbNav)("projectsView");
  clearItemContainer();
  renderAllProjects(_project__WEBPACK_IMPORTED_MODULE_1__.projects);
  enableTasksViewFromProjectCards();
};

const renderAllProjects = function (projects) {
  for (let [key, value] of Object.entries(projects)) {
    itemContainer.append((0,_project__WEBPACK_IMPORTED_MODULE_1__.renderProjectCard)(value));
  }
};

const displayProjectTasks = function (currentProject) {
  (0,_nav__WEBPACK_IMPORTED_MODULE_0__.renderBreadcrumbNav)("tasksView", currentProject);
  clearItemContainer();
  renderTasks(currentProject.tasks);
  enableViewAllProjectsBtn();
};

const renderTasks = function (currentProjectTasks) {
  for (let [key, value] of Object.entries(currentProjectTasks)) {
    itemContainer.append((0,_task__WEBPACK_IMPORTED_MODULE_2__.renderTaskCard)(value));
  }
};

const enableTasksViewFromProjectCards = function () {
  const projectCardsNL = document.querySelectorAll(".project-card");
  projectCardsNL.forEach((projectCard) => {
    const clickedProjectId = projectCard.children[0].getAttribute("id");
    for (let [key, value] of Object.entries(_project__WEBPACK_IMPORTED_MODULE_1__.projects)) {
      if (value.id + `${value.title}` === clickedProjectId) {
        projectCard.addEventListener("click", () => displayProjectTasks(value));
        break;
      }
    }
  });
};

const enableViewAllProjectsBtn = function () {
  const btnViewAllProjects = document.querySelector(".view-all-projects");
  btnViewAllProjects.addEventListener("click", () => {
    displayAllProjects();
  });
};

displayAllProjects();

const loadProjectForm = function () {
  formContainer.classList.remove("hidden");
  inputProjectTitle.focus();
  const btnSaveProject = document.querySelector(".btn-save-project");
  btnSaveProject.addEventListener("click", saveProject);
};

const saveProject = function () {
  let projectId = new Date().getTime();
  _project__WEBPACK_IMPORTED_MODULE_1__.projects[projectId] = new _project__WEBPACK_IMPORTED_MODULE_1__.Project(inputProjectTitle.value);
  formContainer.classList.add("hidden");
  console.log(_project__WEBPACK_IMPORTED_MODULE_1__.projects);
  console.log(_project__WEBPACK_IMPORTED_MODULE_1__.projects[projectId]);
  clearItemContainer();
  displayAllProjects();
};

btnNewProject.addEventListener("click", loadProjectForm);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxPQUFPLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxZQUFZLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsWUFBWSxjQUFjLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFlBQVksVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxRQUFRLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLHNKQUFzSixPQUFPLHlCQUF5Qix3QkFBd0IsbUNBQW1DLDBDQUEwQywyQkFBMkIsOEJBQThCLG9DQUFvQywyQkFBMkIsOEJBQThCLDZCQUE2QixHQUFHLFVBQVUsZ0JBQWdCLGlCQUFpQixHQUFHLDRCQUE0Qix3QkFBd0IsOEJBQThCLEtBQUssYUFBYSxrQkFBa0IsR0FBRyxpQ0FBaUMsZ0JBQWdCLEdBQUcsVUFBVSxrQkFBa0IsOENBQThDLDZCQUE2QixvRUFBb0UsZ0JBQWdCLG9CQUFvQiwyQkFBMkIsbUNBQW1DLEdBQUcsWUFBWSxvQkFBb0IsV0FBVyxnQkFBZ0IsZUFBZSxvQkFBb0IsMkJBQTJCLG1DQUFtQyxvREFBb0QscURBQXFELEdBQUcscUJBQXFCLGtCQUFrQixtQ0FBbUMsa0JBQWtCLEdBQUcsUUFBUSxpQ0FBaUMsK0JBQStCLHVCQUF1Qix1QkFBdUIscUJBQXFCLEdBQUcsa0JBQWtCLG9CQUFvQixHQUFHLGlCQUFpQixrQkFBa0IsNEJBQTRCLHdCQUF3QixjQUFjLEdBQUcsd0JBQXdCLGlCQUFpQixrREFBa0QsK0JBQStCLDBDQUEwQyx1QkFBdUIsc0JBQXNCLHlCQUF5QixHQUFHLG1FQUFtRSxnQkFBZ0IsR0FBRyw4QkFBOEIsMENBQTBDLG1DQUFtQyxHQUFHLHdCQUF3QixzQkFBc0IsMEJBQTBCLHlCQUF5QixHQUFHLFVBQVUseUJBQXlCLEdBQUcsaUJBQWlCLCtCQUErQix5QkFBeUIsR0FBRyxVQUFVLHVCQUF1QixlQUFlLGNBQWMsa0JBQWtCLDJCQUEyQiwyQkFBMkIsdUJBQXVCLGtCQUFrQix1QkFBdUIsR0FBRywrREFBK0Qsa0RBQWtELCtCQUErQixpQkFBaUIsK0JBQStCLHNCQUFzQiwrQkFBK0IsMkJBQTJCLEdBQUcsMkVBQTJFLCtCQUErQixxQkFBcUIsd0JBQXdCLEdBQUcsNkVBQTZFLDZCQUE2QixjQUFjLHVCQUF1QixxQkFBcUIsR0FBRyx1Q0FBdUMsZ0JBQWdCLEdBQUcsZ0NBQWdDLG9CQUFvQixZQUFZLGdEQUFnRCx3QkFBd0IseUJBQXlCLEdBQUcsb0NBQW9DLGlCQUFpQixrQkFBa0IsbUNBQW1DLHdCQUF3QixnREFBZ0QsbUNBQW1DLCtCQUErQixzQkFBc0IsdUJBQXVCLDZCQUE2QixHQUFHLGlDQUFpQyxpQkFBaUIsMENBQTBDLEdBQUcsNkJBQTZCLGdCQUFnQiw4Q0FBOEMsd0NBQXdDLHVCQUF1Qix5QkFBeUIsR0FBRyx5QkFBeUIsMENBQTBDLG1DQUFtQywrQkFBK0Isc0JBQXNCLHNCQUFzQixpQkFBaUIsa0JBQWtCLHFCQUFxQixHQUFHLHNDQUFzQyxxQ0FBcUMsR0FBRyw4Q0FBOEMsa0JBQWtCLHdCQUF3QixHQUFHLDBCQUEwQixnREFBZ0QsaUJBQWlCLG1DQUFtQyxxQkFBcUIseUJBQXlCLEdBQUcsaUJBQWlCLHFCQUFxQixHQUFHLDBCQUEwQixrQ0FBa0MsaUNBQWlDLG1DQUFtQyxHQUFHLHdCQUF3QixrQkFBa0IsYUFBYSxHQUFHLHFHQUFxRywwQ0FBMEMsbUNBQW1DLGlCQUFpQixxQkFBcUIscUJBQXFCLEdBQUcsa0RBQWtELDhDQUE4QyxxQkFBcUIsK0JBQStCLEdBQUcsc0JBQXNCLHFCQUFxQixHQUFHLDJCQUEyQix1QkFBdUIsR0FBRyx1Q0FBdUMsNEJBQTRCLEdBQUcsNEVBQTRFLGtCQUFrQixtQ0FBbUMsd0JBQXdCLGtEQUFrRCxtQ0FBbUMscUJBQXFCLEdBQUcsMEJBQTBCLG9CQUFvQiwwQ0FBMEMsNkJBQTZCLGlCQUFpQixxQkFBcUIsR0FBRyxrREFBa0Qsb0JBQW9CLHFCQUFxQiwwQ0FBMEMsNkJBQTZCLGlCQUFpQixxQkFBcUIsR0FBRyw0QkFBNEIsb0JBQW9CLGlCQUFpQixnQkFBZ0Isd0JBQXdCLDhDQUE4Qyx3QkFBd0IsMENBQTBDLG1DQUFtQywwQkFBMEIsR0FBRyxZQUFZLG9CQUFvQixnQkFBZ0IsZ0JBQWdCLGtCQUFrQiw0QkFBNEIsZ0NBQWdDLGlCQUFpQixHQUFHLGNBQWMsaUNBQWlDLGdCQUFnQixHQUFHLHFCQUFxQjtBQUNuNFI7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7OztBQ25WMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ2ZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRkE7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxxQkFBcUI7QUFDL0I7QUFDQTtBQUNBOzs7Ozs7VUNuQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7OztBQ0E0QztBQUNxQjtBQUN6QjtBQUNuQjs7QUFFckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSx5REFBbUI7QUFDckI7QUFDQSxvQkFBb0IsOENBQVE7QUFDNUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCLDJEQUFpQjtBQUMxQztBQUNBOztBQUVBO0FBQ0EsRUFBRSx5REFBbUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlCQUF5QixxREFBYztBQUN2QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLDhDQUFRO0FBQ3BELHdCQUF3QixZQUFZO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRSw4Q0FBUSxrQkFBa0IsNkNBQU87QUFDbkM7QUFDQSxjQUFjLDhDQUFRO0FBQ3RCLGNBQWMsOENBQVE7QUFDdEI7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL25hdi5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgbGV0IHByb2plY3RzID0ge1xuICBwcm9qZWN0MToge1xuICAgIGlkOiBcIlAxNjk2ODEwNTI3NjAxXCIsXG4gICAgdGl0bGU6IFwiSG9tZVwiLFxuICAgIHRhc2tzOiBbXG4gICAgICB7XG4gICAgICAgIGlkOiBcIlQxNjk2ODEwNTI3NjAxXCIsXG4gICAgICAgIHN0YXR1czogXCJjb21wbGV0ZWRcIixcbiAgICAgICAgdGFza0lkOiAxMjMsXG4gICAgICAgIHRpdGxlOiBcIndhc2ggY2FyXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcInZhY3V1bSBpbnRlcmlvciwgd2FzaCBleHRlcmlvclwiLFxuICAgICAgICBkdWVEYXRlOiBcIjIwMjMtMDktMjlcIixcbiAgICAgICAgcHJpb3JpdHk6IFwibG93XCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogXCJUMTY5NjgxMDUyNzYwMVwiLFxuICAgICAgICBzdGF0dXM6IFwicGVuZGluZ1wiLFxuICAgICAgICB0YXNrSWQ6IDQ1NixcbiAgICAgICAgdGl0bGU6IFwicGxheSB2aWRlbyBnYW1lc1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJaZWxkYVwiLFxuICAgICAgICBkdWVEYXRlOiBcIjIwMjMtMTAtMDVcIixcbiAgICAgICAgcHJpb3JpdHk6IFwiaGlnaFwiLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICBwcm9qZWN0Mjoge1xuICAgIGlkOiBcIlAxNjk2ODEwNTI3NjAxXCIsXG4gICAgdGl0bGU6IFwiU3R1ZHlcIixcbiAgICB0YXNrczogW1xuICAgICAge1xuICAgICAgICBpZDogXCJUMTY5NjgxMDUyNzYwMVwiLFxuICAgICAgICBzdGF0dXM6IFwiY29tcGxldGVkXCIsXG4gICAgICAgIHRhc2tJZDogMjM0LFxuICAgICAgICB0aXRsZTogXCJyZWFkIGFydGljbGUgb24gT09QXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgIFwiaHR0cHM6Ly93d3cuZWR1Y2F0aXZlLmlvL2Jsb2cvb2JqZWN0LW9yaWVudGVkLXByb2dyYW1taW5nXCIsXG4gICAgICAgIGR1ZURhdGU6IFwiMjAyMy0wOS0yOFwiLFxuICAgICAgICBwcmlvcml0eTogXCJoaWdoXCIsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHByb2plY3QzOiB7XG4gICAgaWQ6IFwiUDE2OTY4MTA1Mjc2MDFcIixcbiAgICB0aXRsZTogXCJXb3JrXCIsXG4gICAgdGFza3M6IFtdLFxuICB9LFxufTtcblxuZXhwb3J0IGNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xuICAgIHRoaXMuaWQgPSBgUCR7bmV3IERhdGUoKS5nZXRUaW1lKCl9YDtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy50YXNrcyA9IFtdO1xuICB9XG5cbiAgYWRkVGFzayh0YXNrKSB7XG4gICAgdGhpcy50YXNrcy5wdXNoKHRhc2spO1xuICAgIGNvbnNvbGUubG9nKGBORVcgVEFTSyBBRERFRCAtICR7dGhpcy50aXRsZX0gLT4gJHt0YXNrLnRpdGxlfWApO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCByZW5kZXJQcm9qZWN0Q2FyZCA9IGZ1bmN0aW9uIChwcm9qZWN0KSB7XG4gIGNvbnN0IHJlbmRlclByb2plY3REZXRhaWxzID0gZnVuY3Rpb24gKHByb2plY3QpIHtcbiAgICBsZXQgdGFza0NvdW50ID0gMDtcbiAgICBwcm9qZWN0LnRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIGlmICh0YXNrLnN0YXR1cyA9PT0gXCJwZW5kaW5nXCIpIHRhc2tDb3VudCArPSAxO1xuICAgIH0pO1xuICAgIHJldHVybiBgJHt0YXNrQ291bnR9IHBlbmRpbmcgdGFza3NgO1xuICB9O1xuXG4gIGNvbnN0IHByb2plY3RDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJvamVjdENhcmQuY2xhc3NOYW1lID0gXCJwcm9qZWN0LWNhcmRcIjtcbiAgcHJvamVjdENhcmQuaW5uZXJIVE1MID0gYFxuICA8ZGl2IGNsYXNzPVwicHJvamVjdC1oZWFkZXJcIiBpZD1cIiR7cHJvamVjdC5pZH0ke3Byb2plY3QudGl0bGV9XCI+XG4gICAgPGRpdiBjbGFzcz1cInByb2plY3QtaGVhZGVyLWxlZnRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLXRpdGxlXCI+JHtwcm9qZWN0LnRpdGxlfTwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWhlYWRlci1yaWdodFwiPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cInByb2plY3QtbW92ZS1kb3duXCI+4ZCvPC9idXR0b24+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwicHJvamVjdC1tb3ZlLXVwXCI+4ZCxPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwicHJvamVjdC1kZXRhaWxzXCI+XG4gICAgPHVsPlxuICAgICAgJHtyZW5kZXJQcm9qZWN0RGV0YWlscyhwcm9qZWN0KX1cbiAgICA8L3VsPlxuICA8L2Rpdj5cbiAgYDtcblxuICByZXR1cm4gcHJvamVjdENhcmQ7XG59O1xuIiwiZXhwb3J0IGNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3Rvcih0YXNrSWQsIHN0YXR1cywgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgIHRoaXMuaWQgPSBgVCR7bmV3IERhdGUoKS5nZXRUaW1lKCl9YDtcbiAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcbiAgICB0aGlzLnRhc2tJZCA9IHRhc2tJZDtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCByZW5kZXJUYXNrQ2FyZCA9IGZ1bmN0aW9uICh0YXNrKSB7XG4gIGNvbnN0IHRhc2tDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGFza0NhcmQuY2xhc3NOYW1lID0gXCJ0YXNrLWNhcmRcIjtcbiAgdGFza0NhcmQuaW5uZXJIVE1MID0gYFxuICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWhlYWRlclwiPlxuICAgICAgPGRpdiBjbGFzcz1cInRhc2staGVhZGVyLWxlZnRcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNvbXBsZXRlLXRhc2tcIj7jgIc8L2J1dHRvbj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stdGl0bGVcIj4ke3Rhc2sudGl0bGV9PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWhlYWRlci1yaWdodFwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwidGFzay1tb3ZlLWRvd25cIj7hkK88L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInRhc2stbW92ZS11cFwiPuGQsTwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInRhc2stZGV0YWlsc1wiPlxuICAgICAgPGRpdiBjbGFzcz1cInRhc2stZGVzY3JpcHRpb25cIj4ke3Rhc2suZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwidGFzay1ib3R0b20tcm93XCI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJ0YXNrLWR1ZS1kYXRlXCI+JHtcbiAgICAgICAgICB0YXNrLnN0YXR1cyA9PT0gXCJjb21wbGV0ZWRcIiA/IFwiQ29tcGxldGVkXCIgOiB0YXNrLmR1ZURhdGVcbiAgICAgICAgfTwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwidGFzay1vcHRpb25zXCI+Li4uPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYDtcblxuICByZXR1cm4gdGFza0NhcmQ7XG59O1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUVsZWN0cm9saXplJmZhbWlseT1Ob3ZhK01vbm8mZmFtaWx5PVBUK01vbm8mZmFtaWx5PVF1aWNrc2FuZDp3Z2h0QDUwMDs3MDApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290LmRlZmF1bHQtdGhlbWUge1xuICAtLW1haW4tY29sb3I6IGJsYWNrO1xuICAtLWJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gIC0tYmFja2dyb3VuZC1jb2xvci10d286IGxhdmVuZGVyYmx1c2g7XG4gIC0tYWNjZW50LWNvbG9yOiBzYWxtb247XG4gIC0tYWNjZW50LWNvbG9yLXR3bzogd2hpdGU7XG4gIC0tYWNjZW50LWNvbG9yLXRocmVlOiBsaWdodHBpbms7XG4gIC0tYWN0aXZlLWNvbG9yOiB0b21hdG87XG4gIC0tYWN0aXZlLWNvbG9yLXR3bzogd2hpdGU7XG4gIC0taW5hY3RpdmUtY29sb3I6IHNpbHZlcjtcbn1cblxuaHRtbCB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbiosXG4qOmJlZm9yZSxcbio6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBpbmhlcml0O1xuICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXG59XG5cbi5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICBtYXJnaW46IDBweDtcbn1cblxuYm9keSB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG4gIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luOiAwcHg7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG5oZWFkZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDE7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3ItdHdvKTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWFjY2VudC1jb2xvci10d28pO1xufVxuXG4uaGVhZGVyLXRvcC1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbmgxIHtcbiAgZm9udC1mYW1pbHk6IFwiRWxlY3Ryb2xpemVcIjtcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuXG5idXR0b246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbm5hdi50b3AtbmF2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbn1cblxubmF2LnRvcC1uYXYgYnV0dG9uIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLXR3byk7XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xuICBwYWRkaW5nOiA3cHggOHB4IDVweDtcbn1cblxubmF2LnRvcC1uYXYgYnV0dG9uLmJ0bi1wcmV2aW91cyxcbm5hdi50b3AtbmF2IGJ1dHRvbi5idG4tbmV4dCB7XG4gIHdpZHRoOiAyNXB4O1xufVxuXG5uYXYudG9wLW5hdiBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yLXR3byk7XG59XG5cbm5hdi5icmVhZGNydW1iLW5hdiB7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xuICBwYWRkaW5nOiA1cHggMTBweCAwcHg7XG4gIG1hcmdpbjogMHB4IDBweCAxMHB4O1xufVxuXG5zcGFuIHtcbiAgcGFkZGluZzogMHB4IDVweCAwcHg7XG59XG5cbnNwYW4uYWNjZW50IHtcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG4gIHBhZGRpbmc6IDFweCA2cHggMXB4O1xufVxuXG5tYWluIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAwO1xuXG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcbiAgcGFkZGluZzogMTVweDtcbiAgcGFkZGluZy10b3A6IDExMHB4O1xufVxuXG5idXR0b24udmlldy1hbGwtcHJvamVjdHMsXG5idXR0b24udG9nZ2xlLXByb2plY3Qtc2V0dGluZ3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLXR3byk7XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiO1xuICBmb250LXNpemU6IG1lZGl1bTtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGxldHRlci1zcGFjaW5nOiAwLjIzcHg7XG59XG5cbmJ1dHRvbi52aWV3LWFsbC1wcm9qZWN0czpob3ZlcixcbmJ1dHRvbi50b2dnbGUtcHJvamVjdC1zZXR0aW5nczpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1hY3RpdmUtY29sb3IpO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMHB4O1xufVxuXG5idXR0b24udmlldy1hbGwtcHJvamVjdHM6OmFmdGVyLFxuYnV0dG9uLnRvZ2dsZS1wcm9qZWN0LXNldHRpbmdzOjphZnRlciB7XG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS10ZXh0KTtcbiAgaGVpZ2h0OiAwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5pdGVtLWNvbnRhaW5lcixcbi5mb3JtLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucHJvamVjdC1jYXJkLFxuLnRhc2stY2FyZCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZmxleDogMTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYWNjZW50LWNvbG9yLXRocmVlKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luOiAwcHggMHB4IDIwcHg7XG59XG5cbi5wcm9qZWN0LWhlYWRlcixcbi50YXNrLWhlYWRlciB7XG4gIGhlaWdodDogNDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItdGhyZWUpO1xuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yLXR3byk7XG4gIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICBwYWRkaW5nOiA1cHggOHB4IDVweCA1cHg7XG59XG5cbi5wcm9qZWN0LWhlYWRlci5uZXctcHJvamVjdCB7XG4gIGhlaWdodDogNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbn1cblxuYnV0dG9uLmJ0bi1zYXZlLXByb2plY3Qge1xuICB3aWR0aDogNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yLXR3byk7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLW1haW4tY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDVweCA4cHggNXB4O1xufVxuXG5pbnB1dCNwcm9qZWN0LXRpdGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvci10d28pO1xuICBmb250LWZhbWlseTogXCJRdWlja3NhbmRcIjtcbiAgZm9udC1zaXplOiBtZWRpdW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIG1hcmdpbi1sZWZ0OiAzcHg7XG59XG5cbmlucHV0I3Byb2plY3QtdGl0bGU6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvci10aHJlZSk7XG59XG5cbi5wcm9qZWN0LWhlYWRlci1sZWZ0LFxuLnRhc2staGVhZGVyLWxlZnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5idXR0b24uY29tcGxldGUtdGFzayB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvci10aHJlZSk7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvci10d28pO1xuICBmb250LXNpemU6IGxhcmdlO1xuICBwYWRkaW5nOiAwcHggNnB4IDBweDtcbn1cblxuLnRhc2stdGl0bGUge1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4udGFzay10aXRsZS5jb21wbGV0ZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICB0ZXh0LWRlY29yYXRpb24tY29sb3I6IHdoaXRlO1xuICB0ZXh0LWRlY29yYXRpb24tdGhpY2tuZXNzOiAycHg7XG59XG5cbi50YXNrLWhlYWRlci1yaWdodCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogNnB4O1xufVxuXG5idXR0b24ucHJvamVjdC1tb3ZlLWRvd24sXG5idXR0b24ucHJvamVjdC1tb3ZlLXVwLFxuYnV0dG9uLnRhc2stbW92ZS1kb3duLFxuYnV0dG9uLnRhc2stbW92ZS11cCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC10aHJlZSk7XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItdHdvKTtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXdlaWdodDogNzAwO1xuICBwYWRkaW5nOiAwcHggNnB4O1xufVxuXG4ucHJvamVjdC1kZXRhaWxzID4gZGl2LFxuLnRhc2stZGV0YWlscyA+IGRpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvci10d28pO1xuICBmb250LXNpemU6IHNtYWxsO1xuICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTBweDtcbn1cblxuLnByb2plY3QtZGV0YWlscyB7XG4gIG1pbi1oZWlnaHQ6IDM1cHg7XG59XG5cbi5wcm9qZWN0LWRldGFpbHMgPiB1bCB7XG4gIHBhZGRpbmctbGVmdDogMzVweDtcbn1cblxuLnRhc2stZGV0YWlscyA+IC50YXNrLWRlc2NyaXB0aW9uIHtcbiAgcGFkZGluZzogMTBweCAxNXB4IDEwcHg7XG59XG5cbi5wcm9qZWN0LWRldGFpbHMgPiAudGFzay1ib3R0b20tcm93LFxuLnRhc2stZGV0YWlscyA+IC50YXNrLWJvdHRvbS1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3ItdHdvKTtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA5cHggOXB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG5idXR0b24udGFzay1kdWUtZGF0ZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LXRocmVlKTtcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbmJ1dHRvbi5wcm9qZWN0LW9wdGlvbnMsXG5idXR0b24udGFzay1vcHRpb25zIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IGxhcmdlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtdGhyZWUpO1xuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuYnV0dG9uLmJ0bi1uZXctcHJvamVjdCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiA1MHB4O1xuICByaWdodDogMjBweDtcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYWNjZW50LWNvbG9yLXR3byk7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItdHdvKTtcbiAgcGFkZGluZzogMHB4IDEwcHggMHB4O1xufVxuXG5mb290ZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgcGFkZGluZzogNXB4O1xufVxuXG5mb290ZXIgYSB7XG4gIGZvbnQtZmFtaWx5OiBcIkVsZWN0cm9saXplXCI7XG4gIGNvbG9yOiBncmF5O1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixxQ0FBcUM7RUFDckMsc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QiwrQkFBK0I7RUFDL0Isc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6Qix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBOzs7RUFHRSxtQkFBbUI7RUFDbkIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBOzs7Ozs7RUFNRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IseUNBQXlDO0VBQ3pDLHdCQUF3QjtFQUN4Qiw2REFBNkQ7RUFDN0QsV0FBVzs7RUFFWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sV0FBVztFQUNYLFVBQVU7O0VBRVYsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw4QkFBOEI7O0VBRTlCLDZDQUE2QztFQUM3QyxnREFBZ0Q7QUFDbEQ7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQiwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsWUFBWTtFQUNaLDZDQUE2QztFQUM3QywwQkFBMEI7RUFDMUIscUNBQXFDO0VBQ3JDLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCOztBQUVBOztFQUVFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTs7RUFFVixPQUFPO0VBQ1AsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsNkNBQTZDO0VBQzdDLDBCQUEwQjtFQUMxQixZQUFZO0VBQ1osd0JBQXdCO0VBQ3hCLGlCQUFpQjtFQUNqQiwwQkFBMEI7RUFDMUIsc0JBQXNCO0FBQ3hCOztBQUVBOztFQUVFLDBCQUEwQjtFQUMxQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLHdCQUF3QjtFQUN4QixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxXQUFXO0FBQ2I7O0FBRUE7O0VBRUUsZUFBZTtFQUNmLE9BQU87RUFDUCwyQ0FBMkM7RUFDM0MsbUJBQW1CO0VBQ25CLG9CQUFvQjtBQUN0Qjs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsMkNBQTJDO0VBQzNDLDhCQUE4QjtFQUM5Qix3QkFBd0I7RUFDeEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxZQUFZO0VBQ1oscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsV0FBVztFQUNYLHlDQUF5QztFQUN6QyxtQ0FBbUM7RUFDbkMsa0JBQWtCO0VBQ2xCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyw4QkFBOEI7RUFDOUIsd0JBQXdCO0VBQ3hCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDJDQUEyQztFQUMzQyxZQUFZO0VBQ1osOEJBQThCO0VBQzlCLGdCQUFnQjtFQUNoQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsNEJBQTRCO0VBQzVCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixRQUFRO0FBQ1Y7O0FBRUE7Ozs7RUFJRSxxQ0FBcUM7RUFDckMsOEJBQThCO0VBQzlCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLHlDQUF5QztFQUN6QyxnQkFBZ0I7RUFDaEIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBOztFQUVFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLDZDQUE2QztFQUM3Qyw4QkFBOEI7RUFDOUIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHFDQUFxQztFQUNyQyx3QkFBd0I7RUFDeEIsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHFDQUFxQztFQUNyQyx3QkFBd0I7RUFDeEIsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osV0FBVztFQUNYLG1CQUFtQjtFQUNuQix5Q0FBeUM7RUFDekMsbUJBQW1CO0VBQ25CLHFDQUFxQztFQUNyQyw4QkFBOEI7RUFDOUIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxXQUFXO0VBQ1gsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QiwyQkFBMkI7RUFDM0IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLFdBQVc7QUFDYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1FbGVjdHJvbGl6ZSZmYW1pbHk9Tm92YStNb25vJmZhbWlseT1QVCtNb25vJmZhbWlseT1RdWlja3NhbmQ6d2dodEA1MDA7NzAwXFxcIik7XFxuXFxuOnJvb3QuZGVmYXVsdC10aGVtZSB7XFxuICAtLW1haW4tY29sb3I6IGJsYWNrO1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yLXR3bzogbGF2ZW5kZXJibHVzaDtcXG4gIC0tYWNjZW50LWNvbG9yOiBzYWxtb247XFxuICAtLWFjY2VudC1jb2xvci10d286IHdoaXRlO1xcbiAgLS1hY2NlbnQtY29sb3ItdGhyZWU6IGxpZ2h0cGluaztcXG4gIC0tYWN0aXZlLWNvbG9yOiB0b21hdG87XFxuICAtLWFjdGl2ZS1jb2xvci10d286IHdoaXRlO1xcbiAgLS1pbmFjdGl2ZS1jb2xvcjogc2lsdmVyO1xcbn1cXG5cXG5odG1sIHtcXG4gIG1hcmdpbjogMHB4O1xcbiAgcGFkZGluZzogMHB4O1xcbn1cXG5cXG4qLFxcbio6YmVmb3JlLFxcbio6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNiB7XFxuICBtYXJnaW46IDBweDtcXG59XFxuXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxuICBmb250LWZhbWlseTogXFxcIlF1aWNrc2FuZFxcXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbiAgbWFyZ2luOiAwcHg7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgei1pbmRleDogMTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci10d28pO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWFjY2VudC1jb2xvci10d28pO1xcbn1cXG5cXG4uaGVhZGVyLXRvcC1yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRWxlY3Ryb2xpemVcXFwiO1xcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxuICBmb250LXNpemU6IHgtbGFyZ2U7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nLXRvcDogNXB4O1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5uYXYudG9wLW5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG5uYXYudG9wLW5hdiBidXR0b24ge1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci10d28pO1xcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZm9udC1zaXplOiBtZWRpdW07XFxuICBwYWRkaW5nOiA3cHggOHB4IDVweDtcXG59XFxuXFxubmF2LnRvcC1uYXYgYnV0dG9uLmJ0bi1wcmV2aW91cyxcXG5uYXYudG9wLW5hdiBidXR0b24uYnRuLW5leHQge1xcbiAgd2lkdGg6IDI1cHg7XFxufVxcblxcbm5hdi50b3AtbmF2IGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvci10d28pO1xcbn1cXG5cXG5uYXYuYnJlYWRjcnVtYi1uYXYge1xcbiAgZm9udC1zaXplOiBtZWRpdW07XFxuICBwYWRkaW5nOiA1cHggMTBweCAwcHg7XFxuICBtYXJnaW46IDBweCAwcHggMTBweDtcXG59XFxuXFxuc3BhbiB7XFxuICBwYWRkaW5nOiAwcHggNXB4IDBweDtcXG59XFxuXFxuc3Bhbi5hY2NlbnQge1xcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxuICBwYWRkaW5nOiAxcHggNnB4IDFweDtcXG59XFxuXFxubWFpbiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAwO1xcblxcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBwYWRkaW5nLXRvcDogMTEwcHg7XFxufVxcblxcbmJ1dHRvbi52aWV3LWFsbC1wcm9qZWN0cyxcXG5idXR0b24udG9nZ2xlLXByb2plY3Qtc2V0dGluZ3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci10d28pO1xcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LWZhbWlseTogXFxcIlF1aWNrc2FuZFxcXCI7XFxuICBmb250LXNpemU6IG1lZGl1bTtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMjNweDtcXG59XFxuXFxuYnV0dG9uLnZpZXctYWxsLXByb2plY3RzOmhvdmVyLFxcbmJ1dHRvbi50b2dnbGUtcHJvamVjdC1zZXR0aW5nczpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tYWN0aXZlLWNvbG9yKTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMHB4O1xcbn1cXG5cXG5idXR0b24udmlldy1hbGwtcHJvamVjdHM6OmFmdGVyLFxcbmJ1dHRvbi50b2dnbGUtcHJvamVjdC1zZXR0aW5nczo6YWZ0ZXIge1xcbiAgY29udGVudDogYXR0cihkYXRhLXRleHQpO1xcbiAgaGVpZ2h0OiAwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLml0ZW0tY29udGFpbmVyLFxcbi5mb3JtLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnByb2plY3QtY2FyZCxcXG4udGFzay1jYXJkIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZsZXg6IDE7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3ItdGhyZWUpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIG1hcmdpbjogMHB4IDBweCAyMHB4O1xcbn1cXG5cXG4ucHJvamVjdC1oZWFkZXIsXFxuLnRhc2staGVhZGVyIHtcXG4gIGhlaWdodDogNDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yLXRocmVlKTtcXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItdHdvKTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUXVpY2tzYW5kXFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xcbiAgcGFkZGluZzogNXB4IDhweCA1cHggNXB4O1xcbn1cXG5cXG4ucHJvamVjdC1oZWFkZXIubmV3LXByb2plY3Qge1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG59XFxuXFxuYnV0dG9uLmJ0bi1zYXZlLXByb2plY3Qge1xcbiAgd2lkdGg6IDQwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItdHdvKTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLW1haW4tY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogNXB4IDhweCA1cHg7XFxufVxcblxcbmlucHV0I3Byb2plY3QtdGl0bGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItdHdvKTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUXVpY2tzYW5kXFxcIjtcXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgbWFyZ2luLWxlZnQ6IDNweDtcXG59XFxuXFxuaW5wdXQjcHJvamVjdC10aXRsZTo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvci10aHJlZSk7XFxufVxcblxcbi5wcm9qZWN0LWhlYWRlci1sZWZ0LFxcbi50YXNrLWhlYWRlci1sZWZ0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5idXR0b24uY29tcGxldGUtdGFzayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItdGhyZWUpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvci10d28pO1xcbiAgZm9udC1zaXplOiBsYXJnZTtcXG4gIHBhZGRpbmc6IDBweCA2cHggMHB4O1xcbn1cXG5cXG4udGFzay10aXRsZSB7XFxuICBtYXJnaW4tbGVmdDogNXB4O1xcbn1cXG5cXG4udGFzay10aXRsZS5jb21wbGV0ZSB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogd2hpdGU7XFxuICB0ZXh0LWRlY29yYXRpb24tdGhpY2tuZXNzOiAycHg7XFxufVxcblxcbi50YXNrLWhlYWRlci1yaWdodCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA2cHg7XFxufVxcblxcbmJ1dHRvbi5wcm9qZWN0LW1vdmUtZG93bixcXG5idXR0b24ucHJvamVjdC1tb3ZlLXVwLFxcbmJ1dHRvbi50YXNrLW1vdmUtZG93bixcXG5idXR0b24udGFzay1tb3ZlLXVwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC10aHJlZSk7XFxuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yLXR3byk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgcGFkZGluZzogMHB4IDZweDtcXG59XFxuXFxuLnByb2plY3QtZGV0YWlscyA+IGRpdixcXG4udGFzay1kZXRhaWxzID4gZGl2IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvci10d28pO1xcbiAgZm9udC1zaXplOiBzbWFsbDtcXG4gIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4O1xcbn1cXG5cXG4ucHJvamVjdC1kZXRhaWxzIHtcXG4gIG1pbi1oZWlnaHQ6IDM1cHg7XFxufVxcblxcbi5wcm9qZWN0LWRldGFpbHMgPiB1bCB7XFxuICBwYWRkaW5nLWxlZnQ6IDM1cHg7XFxufVxcblxcbi50YXNrLWRldGFpbHMgPiAudGFzay1kZXNjcmlwdGlvbiB7XFxuICBwYWRkaW5nOiAxMHB4IDE1cHggMTBweDtcXG59XFxuXFxuLnByb2plY3QtZGV0YWlscyA+IC50YXNrLWJvdHRvbS1yb3csXFxuLnRhc2stZGV0YWlscyA+IC50YXNrLWJvdHRvbS1yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLXR3byk7XFxuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDlweCA5cHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5idXR0b24udGFzay1kdWUtZGF0ZSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtdGhyZWUpO1xcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuYnV0dG9uLnByb2plY3Qtb3B0aW9ucyxcXG5idXR0b24udGFzay1vcHRpb25zIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtdGhyZWUpO1xcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuYnV0dG9uLmJ0bi1uZXctcHJvamVjdCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDUwcHg7XFxuICByaWdodDogMjBweDtcXG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3ItdHdvKTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvci10d28pO1xcbiAgcGFkZGluZzogMHB4IDEwcHggMHB4O1xcbn1cXG5cXG5mb290ZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuZm9vdGVyIGEge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJFbGVjdHJvbGl6ZVxcXCI7XFxuICBjb2xvcjogZ3JheTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJjb25zdCBicmVhZGNydW1iTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5icmVhZGNydW1iLW5hdlwiKTtcblxuZXhwb3J0IGNvbnN0IHJlbmRlckJyZWFkY3J1bWJOYXYgPSBmdW5jdGlvbiAobW9kZSwgY3VycmVudFByb2plY3QpIHtcbiAgaWYgKG1vZGUgPT09IFwicHJvamVjdHNWaWV3XCIpIHtcbiAgICBicmVhZGNydW1iTmF2LmlubmVySFRNTCA9IGBgO1xuICAgIGJyZWFkY3J1bWJOYXYuaW5uZXJIVE1MID0gYFxuICA8c3BhbiBjbGFzcz1cImFjY2VudFwiPkFsbCBQcm9qZWN0czwvc3Bhbj5cbiAgPHNwYW4gY2xhc3M9XCJzZXBhcmF0b3JcIj4+PC9zcGFuPlxuICBgO1xuICB9XG5cbiAgaWYgKG1vZGUgPT09IFwidGFza3NWaWV3XCIpIHtcbiAgICBicmVhZGNydW1iTmF2LmlubmVySFRNTCA9IGBgO1xuICAgIGJyZWFkY3J1bWJOYXYuaW5uZXJIVE1MID0gYFxuICA8YnV0dG9uIGNsYXNzPVwidmlldy1hbGwtcHJvamVjdHNcIj5BbGwgUHJvamVjdHM8L2J1dHRvbj5cbiAgPHNwYW4gY2xhc3M9XCJzZXBhcmF0b3JcIj4+PC9zcGFuPlxuICA8c3Bhbj4ke2N1cnJlbnRQcm9qZWN0LnRpdGxlfTwvc3Bhbj5cbiAgYDtcbiAgfVxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IHJlbmRlckJyZWFkY3J1bWJOYXYgfSBmcm9tIFwiLi9uYXZcIjtcbmltcG9ydCB7IHByb2plY3RzLCBQcm9qZWN0LCByZW5kZXJQcm9qZWN0Q2FyZCB9IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCB7IHJlbmRlclRhc2tDYXJkIH0gZnJvbSBcIi4vdGFza1wiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuY29uc3QgaXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaXRlbS1jb250YWluZXJcIik7XG5jb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLWNvbnRhaW5lclwiKTtcbmNvbnN0IGlucHV0UHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LXRpdGxlXCIpO1xuY29uc3QgYnRuTmV3UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLW5ldy1wcm9qZWN0XCIpO1xuXG5jb25zdCBjbGVhckl0ZW1Db250YWluZXIgPSBmdW5jdGlvbiAoKSB7XG4gIGl0ZW1Db250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbn07XG5cbmNvbnN0IGRpc3BsYXlBbGxQcm9qZWN0cyA9IGZ1bmN0aW9uICgpIHtcbiAgcmVuZGVyQnJlYWRjcnVtYk5hdihcInByb2plY3RzVmlld1wiKTtcbiAgY2xlYXJJdGVtQ29udGFpbmVyKCk7XG4gIHJlbmRlckFsbFByb2plY3RzKHByb2plY3RzKTtcbiAgZW5hYmxlVGFza3NWaWV3RnJvbVByb2plY3RDYXJkcygpO1xufTtcblxuY29uc3QgcmVuZGVyQWxsUHJvamVjdHMgPSBmdW5jdGlvbiAocHJvamVjdHMpIHtcbiAgZm9yIChsZXQgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHByb2plY3RzKSkge1xuICAgIGl0ZW1Db250YWluZXIuYXBwZW5kKHJlbmRlclByb2plY3RDYXJkKHZhbHVlKSk7XG4gIH1cbn07XG5cbmNvbnN0IGRpc3BsYXlQcm9qZWN0VGFza3MgPSBmdW5jdGlvbiAoY3VycmVudFByb2plY3QpIHtcbiAgcmVuZGVyQnJlYWRjcnVtYk5hdihcInRhc2tzVmlld1wiLCBjdXJyZW50UHJvamVjdCk7XG4gIGNsZWFySXRlbUNvbnRhaW5lcigpO1xuICByZW5kZXJUYXNrcyhjdXJyZW50UHJvamVjdC50YXNrcyk7XG4gIGVuYWJsZVZpZXdBbGxQcm9qZWN0c0J0bigpO1xufTtcblxuY29uc3QgcmVuZGVyVGFza3MgPSBmdW5jdGlvbiAoY3VycmVudFByb2plY3RUYXNrcykge1xuICBmb3IgKGxldCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoY3VycmVudFByb2plY3RUYXNrcykpIHtcbiAgICBpdGVtQ29udGFpbmVyLmFwcGVuZChyZW5kZXJUYXNrQ2FyZCh2YWx1ZSkpO1xuICB9XG59O1xuXG5jb25zdCBlbmFibGVUYXNrc1ZpZXdGcm9tUHJvamVjdENhcmRzID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBwcm9qZWN0Q2FyZHNOTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdC1jYXJkXCIpO1xuICBwcm9qZWN0Q2FyZHNOTC5mb3JFYWNoKChwcm9qZWN0Q2FyZCkgPT4ge1xuICAgIGNvbnN0IGNsaWNrZWRQcm9qZWN0SWQgPSBwcm9qZWN0Q2FyZC5jaGlsZHJlblswXS5nZXRBdHRyaWJ1dGUoXCJpZFwiKTtcbiAgICBmb3IgKGxldCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMocHJvamVjdHMpKSB7XG4gICAgICBpZiAodmFsdWUuaWQgKyBgJHt2YWx1ZS50aXRsZX1gID09PSBjbGlja2VkUHJvamVjdElkKSB7XG4gICAgICAgIHByb2plY3RDYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBkaXNwbGF5UHJvamVjdFRhc2tzKHZhbHVlKSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCBlbmFibGVWaWV3QWxsUHJvamVjdHNCdG4gPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGJ0blZpZXdBbGxQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudmlldy1hbGwtcHJvamVjdHNcIik7XG4gIGJ0blZpZXdBbGxQcm9qZWN0cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGRpc3BsYXlBbGxQcm9qZWN0cygpO1xuICB9KTtcbn07XG5cbmRpc3BsYXlBbGxQcm9qZWN0cygpO1xuXG5jb25zdCBsb2FkUHJvamVjdEZvcm0gPSBmdW5jdGlvbiAoKSB7XG4gIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgaW5wdXRQcm9qZWN0VGl0bGUuZm9jdXMoKTtcbiAgY29uc3QgYnRuU2F2ZVByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1zYXZlLXByb2plY3RcIik7XG4gIGJ0blNhdmVQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzYXZlUHJvamVjdCk7XG59O1xuXG5jb25zdCBzYXZlUHJvamVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgbGV0IHByb2plY3RJZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICBwcm9qZWN0c1twcm9qZWN0SWRdID0gbmV3IFByb2plY3QoaW5wdXRQcm9qZWN0VGl0bGUudmFsdWUpO1xuICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gIGNvbnNvbGUubG9nKHByb2plY3RzKTtcbiAgY29uc29sZS5sb2cocHJvamVjdHNbcHJvamVjdElkXSk7XG4gIGNsZWFySXRlbUNvbnRhaW5lcigpO1xuICBkaXNwbGF5QWxsUHJvamVjdHMoKTtcbn07XG5cbmJ0bk5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGxvYWRQcm9qZWN0Rm9ybSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=