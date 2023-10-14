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
  P1696810527601: {
    id: "P1696810527601",
    title: "Home",
    tasks: [
      {
        id: "T1696810527601a",
        status: "completed",
        taskId: 123,
        title: "wash car",
        description: "vacuum interior, wash exterior",
        dueDate: "2023-09-29",
        priority: "low",
      },
      {
        id: "T1696810527601b",
        status: "pending",
        taskId: 456,
        title: "play video games",
        description: "Zelda",
        dueDate: "2023-10-05",
        priority: "high",
      },
    ],
  },
  P1696810527602: {
    id: "P1696810527602",
    title: "Study",
    tasks: [
      {
        id: "T1696810527602a",
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
  P1696810527603: {
    id: "P1696810527603",
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
  projectCard.dataset.projectId = project.id;
  projectCard.innerHTML = `
  <div class="project-header">
    <div class="project-header-left">
      <input class="input-project-title" value="${project.title}" />
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


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Task: () => (/* binding */ Task),
/* harmony export */   renderTaskCard: () => (/* binding */ renderTaskCard)
/* harmony export */ });
class Task {
  constructor(title, description, dueDate, status, priority) {
    this.id = `T${new Date().getTime()}`;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.status = status;
    this.priority = priority;
  }
}

const renderTaskCard = function (task) {
  const taskCard = document.createElement("div");
  taskCard.className = "task-card";
  taskCard.dataset.taskId = task.id;
  taskCard.innerHTML = `
    <div class="task-header">
      <div class="task-header-left">
        <button class="btn-complete-task">〇</button>
        <input class="input-task-title" value="${task.title}" />
      </div>
      <div class="task-header-right">
        <button class="btn-task-move-down">ᐯ</button>
        <button class="btn-task-move-up">ᐱ</button>
        <button class="btn-task-delete">X</button>
      </div>
    </div>
    <div class="task-details">
      <textarea class="input-task-description" name="task-description">${
        task.description
      }</textarea>
      <div class="task-bottom-row">
        <button class="btn-task-due-date">${
          task.status === "completed" ? "Completed" : task.dueDate
        }</button>
        <button class="btn-task-options">...</button>
      </div>
    </div>
  `;

  return taskCard;
};


/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   inputHandlerProjectTitle: () => (/* binding */ inputHandlerProjectTitle),
/* harmony export */   inputHandlerTaskDescription: () => (/* binding */ inputHandlerTaskDescription),
/* harmony export */   inputHandlerTaskTitle: () => (/* binding */ inputHandlerTaskTitle)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


const autoSaveProjectTitleChanges = function (projectId, title) {
  _project__WEBPACK_IMPORTED_MODULE_0__.projects[projectId].title = title.value;
};

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

const autoSaveTaskTitleChanges = function (targetProject, taskId, taskTitle) {
  targetProject.tasks.forEach((task) => {
    if (task.id === taskId) task.title = taskTitle.value;
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

const autoSaveTaskDescriptionChanges = function (
  targetProject,
  taskId,
  taskDescription
) {
  targetProject.tasks.forEach((task) => {
    if (task.id === taskId) task.description = taskDescription.value;
  });
};

const inputHandlerTaskDescription = function (targetProject) {
  const taskDescriptionsNL = document.querySelectorAll(
    ".input-task-description"
  );

  if (!taskDescriptionsNL) return;

  taskDescriptionsNL.forEach((description) =>
    description.addEventListener("input", (e) => {
      const taskId = e.target.closest(".task-card").dataset.taskId;
      autoSaveTaskDescriptionChanges(targetProject, taskId, description);
    })
  );
};


/***/ }),
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
  width: 60px;
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

button.btn-view-all-projects {
  background-color: var(--background-color-two);
  color: var(--accent-color);
  border: none;
  font-family: "Quicksand";
  font-size: medium;
  text-decoration: underline;
  letter-spacing: 0.23px;
}

button.btn-view-all-projects:hover {
  color: var(--active-color);
  font-weight: 700;
  letter-spacing: 0px;
}

button.btn-view-all-projects::after {
  content: attr(data-text);
  height: 0;
  visibility: hidden;
  font-weight: 700;
}

.item-container,
.project-form-container,
.task-form-container {
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

.project-card.active,
.task-card.active {
  border: 1px solid var(--accent-color);
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

.project-header.new-project,
.task-header.new-task {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  background-color: var(--accent-color);
}

button.btn-save-project,
button.btn-save-task {
  background-color: var(--accent-color-two);
  border: 2px solid var(--main-color);
  border-radius: 5px;
  padding: 5px 8px 5px;
}

input#input-project-title,
input#input-task-title {
  flex: 1;
  background-color: var(--accent-color);
  color: var(--accent-color-two);
  font-family: "Quicksand";
  font-size: medium;
  font-weight: bold;
  border: none;
  outline: none;
  margin-left: 5px;
}

input#input-project-title::placeholder,
input#input-task-title::placeholder {
  color: var(--accent-color-three);
}

input.input-project-title,
input.input-task-title {
  flex: 1;
  background-color: var(--accent-color-three);
  color: var(--accent-color-two);
  font-family: "Quicksand";
  font-size: medium;
  font-weight: bold;
  border: none;
  outline: none;
  margin-left: 5px;
}

.project-header-left,
.task-header-left {
  flex: 1;
  display: flex;
  align-items: center;
}

button.btn-complete-task {
  background-color: var(--accent-color-three);
  color: var(--accent-color-two);
  border: none;
  font-size: large;
  padding: 0px 6px 0px;
}

button.btn-complete-task.inactive {
  background-color: var(--accent-color);
  color: var(--inactive-color);
}

.task-title.complete {
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
  color: var(--accent-color);
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

textarea#input-task-description,
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

input#input-task-due-date {
  background-color: var(--accent-color-two);
  border: none;
  border-radius: 5px;
  outline: none;
  padding: 2px;
}

button.btn-task-due-date {
  cursor: pointer;
  background-color: var(--accent-three);
  color: var(--main-color);
  border: none;
  font-weight: 700;
}

button.btn-task-options {
  cursor: pointer;
  font-size: large;
  background-color: var(--accent-three);
  color: var(--main-color);
  border: none;
  font-weight: 700;
}

button.btn-new-item {
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Electrolize&family=Nova+Mono&family=PT+Mono&family=Quicksand:wght@500;700\");\n\n:root.default-theme {\n  --main-color: black;\n  --background-color: whitesmoke;\n  --background-color-two: lavenderblush;\n  --accent-color: salmon;\n  --accent-color-two: white;\n  --accent-color-three: lightpink;\n  --active-color: tomato;\n  --active-color-two: white;\n  --inactive-color: silver;\n}\n\nhtml {\n  box-sizing: border-box;\n  margin: 0px;\n  padding: 0px;\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n  /* border: 1px solid red; */\n}\n\n.hidden {\n  display: none;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0px;\n}\n\nbody {\n  height: 100vh;\n  background-color: var(--background-color);\n  color: var(--main-color);\n  font-family: \"Quicksand\", Tahoma, Geneva, Verdana, sans-serif;\n  margin: 0px;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\nheader {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 1;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  background-color: var(--background-color-two);\n  border-bottom: 1px solid var(--accent-color-two);\n}\n\n.header-top-row {\n  display: flex;\n  justify-content: space-between;\n  padding: 10px;\n}\n\nh1 {\n  font-family: \"Electrolize\";\n  color: var(--accent-color);\n  font-size: x-large;\n  text-align: center;\n  padding-top: 5px;\n}\n\nbutton:hover {\n  cursor: pointer;\n}\n\nnav.top-nav {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n}\n\nnav.top-nav button {\n  width: 60px;\n  background-color: var(--background-color-two);\n  color: var(--accent-color);\n  border: 1px solid var(--accent-color);\n  border-radius: 5px;\n  font-size: medium;\n  padding: 7px 8px 5px;\n}\n\nnav.top-nav button.btn-previous,\nnav.top-nav button.btn-next {\n  width: 25px;\n}\n\nnav.top-nav button:hover {\n  background-color: var(--accent-color);\n  color: var(--accent-color-two);\n}\n\nnav.breadcrumb-nav {\n  font-size: medium;\n  padding: 5px 10px 0px;\n  margin: 0px 0px 10px;\n}\n\nspan {\n  padding: 0px 5px 0px;\n}\n\nspan.accent {\n  color: var(--accent-color);\n  padding: 1px 6px 1px;\n}\n\nmain {\n  position: relative;\n  z-index: 0;\n\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  align-items: start;\n  padding: 15px;\n  padding-top: 110px;\n}\n\nbutton.btn-view-all-projects {\n  background-color: var(--background-color-two);\n  color: var(--accent-color);\n  border: none;\n  font-family: \"Quicksand\";\n  font-size: medium;\n  text-decoration: underline;\n  letter-spacing: 0.23px;\n}\n\nbutton.btn-view-all-projects:hover {\n  color: var(--active-color);\n  font-weight: 700;\n  letter-spacing: 0px;\n}\n\nbutton.btn-view-all-projects::after {\n  content: attr(data-text);\n  height: 0;\n  visibility: hidden;\n  font-weight: 700;\n}\n\n.item-container,\n.project-form-container,\n.task-form-container {\n  width: 100%;\n}\n\n.project-card,\n.task-card {\n  cursor: pointer;\n  flex: 1;\n  border: 1px solid var(--accent-color-three);\n  border-radius: 10px;\n  margin: 0px 0px 20px;\n}\n\n.project-card.active,\n.task-card.active {\n  border: 1px solid var(--accent-color);\n}\n\n.project-header,\n.task-header {\n  height: 40px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: var(--accent-color-three);\n  color: var(--accent-color-two);\n  font-family: \"Quicksand\";\n  font-weight: bold;\n  border-radius: 9px;\n  padding: 5px 5px 6px 5px;\n}\n\n.project-header:hover .input-project-title,\n.task-header:hover .input-task-title {\n  color: var(--main-color);\n}\n\n.project-header.new-project,\n.task-header.new-task {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 40px;\n  background-color: var(--accent-color);\n}\n\nbutton.btn-save-project,\nbutton.btn-save-task {\n  background-color: var(--accent-color-two);\n  border: 2px solid var(--main-color);\n  border-radius: 5px;\n  padding: 5px 8px 5px;\n}\n\ninput#input-project-title,\ninput#input-task-title {\n  flex: 1;\n  background-color: var(--accent-color);\n  color: var(--accent-color-two);\n  font-family: \"Quicksand\";\n  font-size: medium;\n  font-weight: bold;\n  border: none;\n  outline: none;\n  margin-left: 5px;\n}\n\ninput#input-project-title::placeholder,\ninput#input-task-title::placeholder {\n  color: var(--accent-color-three);\n}\n\ninput.input-project-title,\ninput.input-task-title {\n  flex: 1;\n  background-color: var(--accent-color-three);\n  color: var(--accent-color-two);\n  font-family: \"Quicksand\";\n  font-size: medium;\n  font-weight: bold;\n  border: none;\n  outline: none;\n  margin-left: 5px;\n}\n\n.project-header-left,\n.task-header-left {\n  flex: 1;\n  display: flex;\n  align-items: center;\n}\n\nbutton.btn-complete-task {\n  background-color: var(--accent-color-three);\n  color: var(--accent-color-two);\n  border: none;\n  font-size: large;\n  padding: 0px 6px 0px;\n}\n\nbutton.btn-complete-task.inactive {\n  background-color: var(--accent-color);\n  color: var(--inactive-color);\n}\n\n.task-title.complete {\n  text-decoration: line-through;\n  text-decoration-color: var(--accent-color-two);\n  text-decoration-thickness: 2px;\n}\n\n.task-header-right {\n  display: flex;\n  gap: 6px;\n}\n\nbutton.btn-project-move-down,\nbutton.btn-project-move-up,\nbutton.btn-task-move-down,\nbutton.btn-task-move-up,\nbutton.btn-project-delete,\nbutton.btn-task-delete {\n  background-color: var(--accent-three);\n  color: var(--accent-color-two);\n  border: none;\n  font-weight: 700;\n  padding: 0px 10px;\n}\n\nbutton.btn-project-move-down:hover,\nbutton.btn-project-move-up:hover,\nbutton.btn-task-move-down:hover,\nbutton.btn-task-move-up:hover,\nbutton.btn-project-delete:hover,\nbutton.btn-task-delete:hover {\n  color: var(--accent-color);\n}\n\n.project-details > div,\n.task-details > div {\n  background-color: var(--accent-color-two);\n  font-size: medium;\n  border-radius: 0px 0px 9px 9px;\n  padding: 10px 15px 10px;\n}\n\n.task-details {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\ntextarea#input-task-description,\ntextarea.input-task-description {\n  width: 100%;\n  background-color: var(--accent-color-two);\n  font-family: \"Quicksand\", Tahoma, Geneva, Verdana, sans-serif;\n  font-size: medium;\n  border: none;\n  outline: none;\n  resize: none;\n  padding: 10px 15px 10px;\n}\n\n.project-details > .task-bottom-row,\n.task-details > .task-bottom-row {\n  display: flex;\n  height: 40px;\n  justify-content: space-between;\n  align-items: center;\n  background-color: var(--background-color-two);\n  border-radius: 0px 0px 9px 9px;\n  font-weight: 700;\n}\n\ninput#input-task-due-date {\n  background-color: var(--accent-color-two);\n  border: none;\n  border-radius: 5px;\n  outline: none;\n  padding: 2px;\n}\n\nbutton.btn-task-due-date {\n  cursor: pointer;\n  background-color: var(--accent-three);\n  color: var(--main-color);\n  border: none;\n  font-weight: 700;\n}\n\nbutton.btn-task-options {\n  cursor: pointer;\n  font-size: large;\n  background-color: var(--accent-three);\n  color: var(--main-color);\n  border: none;\n  font-weight: 700;\n}\n\nbutton.btn-new-item {\n  position: fixed;\n  bottom: 50px;\n  right: 20px;\n  font-size: xx-large;\n  border: 2px solid var(--accent-color-two);\n  border-radius: 50px;\n  background-color: var(--accent-color);\n  color: var(--accent-color-two);\n  padding: 0px 10px 0px;\n}\n\nfooter {\n  position: fixed;\n  bottom: 0px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  background-color: lightgray;\n  padding: 5px;\n}\n\nfooter a {\n  font-family: \"Electrolize\";\n  color: gray;\n}\n"],"sourceRoot":""}]);
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
  <button class="btn-view-all-projects">All Projects</button>
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
/* harmony import */ var _autosave__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);



 // prettier-ignore


let view = "projects";
let targetProject;
const itemContainer = document.querySelector(".item-container");
const projectFormContainer = document.querySelector(".project-form-container");
const taskFormContainer = document.querySelector(".task-form-container");
const inputProjectTitle = document.querySelector("#input-project-title");
const inputTaskTitle = document.querySelector("#input-task-title");
const inputTaskDescription = document.querySelector("#input-task-description");
const inputTaskDueDate = document.querySelector("#input-task-due-date");
const btnNewItem = document.querySelector(".btn-new-item");

const unloadProjectForm = function () {
  inputProjectTitle.value = "";
  projectFormContainer.classList.add("hidden");
};

const unloadTaskForm = function () {
  inputTaskTitle.value = "";
  inputTaskDescription.value = "";
  taskFormContainer.classList.add("hidden");
};

const clearItemContainer = function () {
  itemContainer.innerHTML = "";
};

const loadProjectsView = function () {
  view = "projects";
  (0,_nav__WEBPACK_IMPORTED_MODULE_0__.renderBreadcrumbNav)("projectsView");
  unloadTaskForm();
  clearItemContainer();
  renderAllProjects(_project__WEBPACK_IMPORTED_MODULE_1__.projects);
  clickHandlerDivProjectDetails();
  clickHandlerBtnDeleteProject();
  (0,_autosave__WEBPACK_IMPORTED_MODULE_3__.inputHandlerProjectTitle)();
};

const renderAllProjects = function (projects) {
  for (let [key, value] of Object.entries(projects)) {
    itemContainer.prepend((0,_project__WEBPACK_IMPORTED_MODULE_1__.renderProjectCard)(value));
  }
};

const loadTasksView = function (targetProject) {
  view = "tasks";
  (0,_nav__WEBPACK_IMPORTED_MODULE_0__.renderBreadcrumbNav)("tasksView", targetProject);
  unloadProjectForm();
  clearItemContainer();
  renderTasks(targetProject.tasks);
  clickHandlerBtnViewAllProjects();
  clickHandlerBtnDeleteTask();
  (0,_autosave__WEBPACK_IMPORTED_MODULE_3__.inputHandlerTaskDescription)(targetProject);
  (0,_autosave__WEBPACK_IMPORTED_MODULE_3__.inputHandlerTaskTitle)(targetProject);
};

const renderTasks = function (targetProjectTasks) {
  for (let [key, value] of Object.entries(targetProjectTasks)) {
    itemContainer.prepend((0,_task__WEBPACK_IMPORTED_MODULE_2__.renderTaskCard)(value));
  }
};

const loadProjectForm = function () {
  projectFormContainer.classList.remove("hidden");
  inputProjectTitle.focus();
};

const saveProject = function () {
  let projectId = `P${new Date().getTime()}`;
  _project__WEBPACK_IMPORTED_MODULE_1__.projects[projectId] = new _project__WEBPACK_IMPORTED_MODULE_1__.Project(inputProjectTitle.value || "New Project");
  unloadProjectForm();
  clearItemContainer();
  loadProjectsView();
};

const deleteProject = function (e) {
  const projectId = e.target.closest(".project-card").dataset.projectId;
  const projectTitle = _project__WEBPACK_IMPORTED_MODULE_1__.projects[projectId].title;
  console.log(projectTitle);
  const confirmDelete = confirm(`${projectTitle} - Delete this project?`);
  if (!confirmDelete) return;
  delete _project__WEBPACK_IMPORTED_MODULE_1__.projects[projectId];
  loadProjectsView();
};

const loadTaskForm = function () {
  taskFormContainer.classList.remove("hidden");
  inputTaskTitle.focus();
};

const saveTask = function () {
  targetProject.tasks.push(
    new _task__WEBPACK_IMPORTED_MODULE_2__.Task(
      inputTaskTitle.value || "New Task",
      inputTaskDescription.value || ". . .",
      inputTaskDueDate.value || "( no due date )",
      "pending",
      "medium"
    )
  );
  unloadTaskForm();
  clearItemContainer();
  loadTasksView(targetProject);
};

const deleteTask = function (e) {
  const taskId = e.target.closest(".task-card").dataset.taskId;
  const taskTitle = targetProject.tasks.filter((task) => task.id === taskId)[0]
    .title;
  const confirmDelete = confirm(`${taskTitle} - Delete this task?`);
  if (!confirmDelete) return;
  const remainingTasks = targetProject.tasks.filter(
    (task) => task.id !== taskId
  );
  targetProject.tasks = remainingTasks;
  loadTasksView(targetProject);
};

const clickHandlerDivProjectDetails = function () {
  const projectDetailsNL = document.querySelectorAll(".project-details");
  projectDetailsNL.forEach((projectDetail) => {
    projectDetail.addEventListener("click", () => {
      const projectCardId = projectDetail.parentElement.dataset.projectId;
      targetProject = _project__WEBPACK_IMPORTED_MODULE_1__.projects[projectCardId];
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

const clickHandlerBtnNewItem = function () {
  btnNewItem.addEventListener("click", () => {
    if (view === "projects") loadProjectForm();
    if (view === "tasks") loadTaskForm();
  });
};

const clickHandlerBtnSaveProject = function () {
  const btnSaveProject = document.querySelector(".btn-save-project");
  btnSaveProject.addEventListener("click", saveProject);
};

const clickHandlerBtnSaveTask = function () {
  const btnSaveTask = document.querySelector(".btn-save-task");
  btnSaveTask.addEventListener("click", saveTask);
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

// Initialize app
(function () {
  loadProjectsView();
  clickHandlerBtnNewItem();
  clickHandlerBtnSaveProject();
  clickHandlerBtnSaveTask();
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRixxS0FBcUssS0FBSztBQUMxSztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxPQUFPLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxZQUFZLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsWUFBWSxjQUFjLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFlBQVksVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxPQUFPLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxh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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxXQUFXO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsOENBQVE7QUFDOUI7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvYXV0b3NhdmUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvbmF2LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBsZXQgcHJvamVjdHMgPSB7XG4gIFAxNjk2ODEwNTI3NjAxOiB7XG4gICAgaWQ6IFwiUDE2OTY4MTA1Mjc2MDFcIixcbiAgICB0aXRsZTogXCJIb21lXCIsXG4gICAgdGFza3M6IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6IFwiVDE2OTY4MTA1Mjc2MDFhXCIsXG4gICAgICAgIHN0YXR1czogXCJjb21wbGV0ZWRcIixcbiAgICAgICAgdGFza0lkOiAxMjMsXG4gICAgICAgIHRpdGxlOiBcIndhc2ggY2FyXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcInZhY3V1bSBpbnRlcmlvciwgd2FzaCBleHRlcmlvclwiLFxuICAgICAgICBkdWVEYXRlOiBcIjIwMjMtMDktMjlcIixcbiAgICAgICAgcHJpb3JpdHk6IFwibG93XCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogXCJUMTY5NjgxMDUyNzYwMWJcIixcbiAgICAgICAgc3RhdHVzOiBcInBlbmRpbmdcIixcbiAgICAgICAgdGFza0lkOiA0NTYsXG4gICAgICAgIHRpdGxlOiBcInBsYXkgdmlkZW8gZ2FtZXNcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiWmVsZGFcIixcbiAgICAgICAgZHVlRGF0ZTogXCIyMDIzLTEwLTA1XCIsXG4gICAgICAgIHByaW9yaXR5OiBcImhpZ2hcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAgUDE2OTY4MTA1Mjc2MDI6IHtcbiAgICBpZDogXCJQMTY5NjgxMDUyNzYwMlwiLFxuICAgIHRpdGxlOiBcIlN0dWR5XCIsXG4gICAgdGFza3M6IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6IFwiVDE2OTY4MTA1Mjc2MDJhXCIsXG4gICAgICAgIHN0YXR1czogXCJjb21wbGV0ZWRcIixcbiAgICAgICAgdGFza0lkOiAyMzQsXG4gICAgICAgIHRpdGxlOiBcInJlYWQgYXJ0aWNsZSBvbiBPT1BcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgXCJodHRwczovL3d3dy5lZHVjYXRpdmUuaW8vYmxvZy9vYmplY3Qtb3JpZW50ZWQtcHJvZ3JhbW1pbmdcIixcbiAgICAgICAgZHVlRGF0ZTogXCIyMDIzLTA5LTI4XCIsXG4gICAgICAgIHByaW9yaXR5OiBcImhpZ2hcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAgUDE2OTY4MTA1Mjc2MDM6IHtcbiAgICBpZDogXCJQMTY5NjgxMDUyNzYwM1wiLFxuICAgIHRpdGxlOiBcIldvcmtcIixcbiAgICB0YXNrczogW10sXG4gIH0sXG59O1xuXG5leHBvcnQgY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlKSB7XG4gICAgdGhpcy5pZCA9IGBQJHtuZXcgRGF0ZSgpLmdldFRpbWUoKX1gO1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLnRhc2tzID0gW107XG4gIH1cblxuICBhZGRUYXNrKHRhc2spIHtcbiAgICB0aGlzLnRhc2tzLnB1c2godGFzayk7XG4gICAgY29uc29sZS5sb2coYE5FVyBUQVNLIEFEREVEIC0gJHt0aGlzLnRpdGxlfSAtPiAke3Rhc2sudGl0bGV9YCk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHJlbmRlclByb2plY3RDYXJkID0gZnVuY3Rpb24gKHByb2plY3QpIHtcbiAgY29uc3QgcmVuZGVyUHJvamVjdERldGFpbHMgPSBmdW5jdGlvbiAocHJvamVjdCkge1xuICAgIGxldCB0YXNrQ291bnQgPSAwO1xuICAgIHByb2plY3QudGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgaWYgKHRhc2suc3RhdHVzID09PSBcInBlbmRpbmdcIikgdGFza0NvdW50ICs9IDE7XG4gICAgfSk7XG4gICAgcmV0dXJuIGAke3Rhc2tDb3VudH0gcGVuZGluZyB0YXNrc2A7XG4gIH07XG5cbiAgY29uc3QgcHJvamVjdENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcm9qZWN0Q2FyZC5jbGFzc05hbWUgPSBcInByb2plY3QtY2FyZFwiO1xuICBwcm9qZWN0Q2FyZC5kYXRhc2V0LnByb2plY3RJZCA9IHByb2plY3QuaWQ7XG4gIHByb2plY3RDYXJkLmlubmVySFRNTCA9IGBcbiAgPGRpdiBjbGFzcz1cInByb2plY3QtaGVhZGVyXCI+XG4gICAgPGRpdiBjbGFzcz1cInByb2plY3QtaGVhZGVyLWxlZnRcIj5cbiAgICAgIDxpbnB1dCBjbGFzcz1cImlucHV0LXByb2plY3QtdGl0bGVcIiB2YWx1ZT1cIiR7cHJvamVjdC50aXRsZX1cIiAvPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWhlYWRlci1yaWdodFwiPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bi1wcm9qZWN0LW1vdmUtZG93blwiPuGQrzwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bi1wcm9qZWN0LW1vdmUtdXBcIj7hkLE8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJidG4tcHJvamVjdC1kZWxldGVcIj5YPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwicHJvamVjdC1kZXRhaWxzXCI+XG4gICAgPGRpdj5cbiAgICAgICR7cmVuZGVyUHJvamVjdERldGFpbHMocHJvamVjdCl9XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICBgO1xuXG4gIHJldHVybiBwcm9qZWN0Q2FyZDtcbn07XG4iLCJleHBvcnQgY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgc3RhdHVzLCBwcmlvcml0eSkge1xuICAgIHRoaXMuaWQgPSBgVCR7bmV3IERhdGUoKS5nZXRUaW1lKCl9YDtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCByZW5kZXJUYXNrQ2FyZCA9IGZ1bmN0aW9uICh0YXNrKSB7XG4gIGNvbnN0IHRhc2tDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGFza0NhcmQuY2xhc3NOYW1lID0gXCJ0YXNrLWNhcmRcIjtcbiAgdGFza0NhcmQuZGF0YXNldC50YXNrSWQgPSB0YXNrLmlkO1xuICB0YXNrQ2FyZC5pbm5lckhUTUwgPSBgXG4gICAgPGRpdiBjbGFzcz1cInRhc2staGVhZGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwidGFzay1oZWFkZXItbGVmdFwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuLWNvbXBsZXRlLXRhc2tcIj7jgIc8L2J1dHRvbj5cbiAgICAgICAgPGlucHV0IGNsYXNzPVwiaW5wdXQtdGFzay10aXRsZVwiIHZhbHVlPVwiJHt0YXNrLnRpdGxlfVwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWhlYWRlci1yaWdodFwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuLXRhc2stbW92ZS1kb3duXCI+4ZCvPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4tdGFzay1tb3ZlLXVwXCI+4ZCxPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4tdGFzay1kZWxldGVcIj5YPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwidGFzay1kZXRhaWxzXCI+XG4gICAgICA8dGV4dGFyZWEgY2xhc3M9XCJpbnB1dC10YXNrLWRlc2NyaXB0aW9uXCIgbmFtZT1cInRhc2stZGVzY3JpcHRpb25cIj4ke1xuICAgICAgICB0YXNrLmRlc2NyaXB0aW9uXG4gICAgICB9PC90ZXh0YXJlYT5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWJvdHRvbS1yb3dcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bi10YXNrLWR1ZS1kYXRlXCI+JHtcbiAgICAgICAgICB0YXNrLnN0YXR1cyA9PT0gXCJjb21wbGV0ZWRcIiA/IFwiQ29tcGxldGVkXCIgOiB0YXNrLmR1ZURhdGVcbiAgICAgICAgfTwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuLXRhc2stb3B0aW9uc1wiPi4uLjwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGA7XG5cbiAgcmV0dXJuIHRhc2tDYXJkO1xufTtcbiIsImltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuXG5jb25zdCBhdXRvU2F2ZVByb2plY3RUaXRsZUNoYW5nZXMgPSBmdW5jdGlvbiAocHJvamVjdElkLCB0aXRsZSkge1xuICBwcm9qZWN0c1twcm9qZWN0SWRdLnRpdGxlID0gdGl0bGUudmFsdWU7XG59O1xuXG5leHBvcnQgY29uc3QgaW5wdXRIYW5kbGVyUHJvamVjdFRpdGxlID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBwcm9qZWN0VGl0bGVzTkwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmlucHV0LXByb2plY3QtdGl0bGVcIik7XG5cbiAgaWYgKCFwcm9qZWN0VGl0bGVzTkwpIHJldHVybjtcblxuICBwcm9qZWN0VGl0bGVzTkwuZm9yRWFjaCgodGl0bGUpID0+XG4gICAgdGl0bGUuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XG4gICAgICBjb25zdCBwcm9qZWN0SWQgPSBlLnRhcmdldC5jbG9zZXN0KFwiLnByb2plY3QtY2FyZFwiKS5kYXRhc2V0LnByb2plY3RJZDtcbiAgICAgIGF1dG9TYXZlUHJvamVjdFRpdGxlQ2hhbmdlcyhwcm9qZWN0SWQsIHRpdGxlKTtcbiAgICB9KVxuICApO1xufTtcblxuY29uc3QgYXV0b1NhdmVUYXNrVGl0bGVDaGFuZ2VzID0gZnVuY3Rpb24gKHRhcmdldFByb2plY3QsIHRhc2tJZCwgdGFza1RpdGxlKSB7XG4gIHRhcmdldFByb2plY3QudGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIGlmICh0YXNrLmlkID09PSB0YXNrSWQpIHRhc2sudGl0bGUgPSB0YXNrVGl0bGUudmFsdWU7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGlucHV0SGFuZGxlclRhc2tUaXRsZSA9IGZ1bmN0aW9uICh0YXJnZXRQcm9qZWN0KSB7XG4gIGNvbnN0IHRhc2tUaXRsZXNOTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaW5wdXQtdGFzay10aXRsZVwiKTtcblxuICBpZiAoIXRhc2tUaXRsZXNOTCkgcmV0dXJuO1xuXG4gIHRhc2tUaXRsZXNOTC5mb3JFYWNoKCh0aXRsZSkgPT5cbiAgICB0aXRsZS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcbiAgICAgIGNvbnN0IHRhc2tJZCA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIudGFzay1jYXJkXCIpLmRhdGFzZXQudGFza0lkO1xuICAgICAgYXV0b1NhdmVUYXNrVGl0bGVDaGFuZ2VzKHRhcmdldFByb2plY3QsIHRhc2tJZCwgdGl0bGUpO1xuICAgIH0pXG4gICk7XG59O1xuXG5jb25zdCBhdXRvU2F2ZVRhc2tEZXNjcmlwdGlvbkNoYW5nZXMgPSBmdW5jdGlvbiAoXG4gIHRhcmdldFByb2plY3QsXG4gIHRhc2tJZCxcbiAgdGFza0Rlc2NyaXB0aW9uXG4pIHtcbiAgdGFyZ2V0UHJvamVjdC50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgaWYgKHRhc2suaWQgPT09IHRhc2tJZCkgdGFzay5kZXNjcmlwdGlvbiA9IHRhc2tEZXNjcmlwdGlvbi52YWx1ZTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgaW5wdXRIYW5kbGVyVGFza0Rlc2NyaXB0aW9uID0gZnVuY3Rpb24gKHRhcmdldFByb2plY3QpIHtcbiAgY29uc3QgdGFza0Rlc2NyaXB0aW9uc05MID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICBcIi5pbnB1dC10YXNrLWRlc2NyaXB0aW9uXCJcbiAgKTtcblxuICBpZiAoIXRhc2tEZXNjcmlwdGlvbnNOTCkgcmV0dXJuO1xuXG4gIHRhc2tEZXNjcmlwdGlvbnNOTC5mb3JFYWNoKChkZXNjcmlwdGlvbikgPT5cbiAgICBkZXNjcmlwdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcbiAgICAgIGNvbnN0IHRhc2tJZCA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIudGFzay1jYXJkXCIpLmRhdGFzZXQudGFza0lkO1xuICAgICAgYXV0b1NhdmVUYXNrRGVzY3JpcHRpb25DaGFuZ2VzKHRhcmdldFByb2plY3QsIHRhc2tJZCwgZGVzY3JpcHRpb24pO1xuICAgIH0pXG4gICk7XG59O1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUVsZWN0cm9saXplJmZhbWlseT1Ob3ZhK01vbm8mZmFtaWx5PVBUK01vbm8mZmFtaWx5PVF1aWNrc2FuZDp3Z2h0QDUwMDs3MDApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290LmRlZmF1bHQtdGhlbWUge1xuICAtLW1haW4tY29sb3I6IGJsYWNrO1xuICAtLWJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gIC0tYmFja2dyb3VuZC1jb2xvci10d286IGxhdmVuZGVyYmx1c2g7XG4gIC0tYWNjZW50LWNvbG9yOiBzYWxtb247XG4gIC0tYWNjZW50LWNvbG9yLXR3bzogd2hpdGU7XG4gIC0tYWNjZW50LWNvbG9yLXRocmVlOiBsaWdodHBpbms7XG4gIC0tYWN0aXZlLWNvbG9yOiB0b21hdG87XG4gIC0tYWN0aXZlLWNvbG9yLXR3bzogd2hpdGU7XG4gIC0taW5hY3RpdmUtY29sb3I6IHNpbHZlcjtcbn1cblxuaHRtbCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbiosXG4qOmJlZm9yZSxcbio6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBpbmhlcml0O1xuICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXG59XG5cbi5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICBtYXJnaW46IDBweDtcbn1cblxuYm9keSB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG4gIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luOiAwcHg7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG5oZWFkZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDE7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3ItdHdvKTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWFjY2VudC1jb2xvci10d28pO1xufVxuXG4uaGVhZGVyLXRvcC1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbmgxIHtcbiAgZm9udC1mYW1pbHk6IFwiRWxlY3Ryb2xpemVcIjtcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuXG5idXR0b246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbm5hdi50b3AtbmF2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbn1cblxubmF2LnRvcC1uYXYgYnV0dG9uIHtcbiAgd2lkdGg6IDYwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3ItdHdvKTtcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFjY2VudC1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiBtZWRpdW07XG4gIHBhZGRpbmc6IDdweCA4cHggNXB4O1xufVxuXG5uYXYudG9wLW5hdiBidXR0b24uYnRuLXByZXZpb3VzLFxubmF2LnRvcC1uYXYgYnV0dG9uLmJ0bi1uZXh0IHtcbiAgd2lkdGg6IDI1cHg7XG59XG5cbm5hdi50b3AtbmF2IGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItdHdvKTtcbn1cblxubmF2LmJyZWFkY3J1bWItbmF2IHtcbiAgZm9udC1zaXplOiBtZWRpdW07XG4gIHBhZGRpbmc6IDVweCAxMHB4IDBweDtcbiAgbWFyZ2luOiAwcHggMHB4IDEwcHg7XG59XG5cbnNwYW4ge1xuICBwYWRkaW5nOiAwcHggNXB4IDBweDtcbn1cblxuc3Bhbi5hY2NlbnQge1xuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgcGFkZGluZzogMXB4IDZweCAxcHg7XG59XG5cbm1haW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDA7XG5cbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICBwYWRkaW5nOiAxNXB4O1xuICBwYWRkaW5nLXRvcDogMTEwcHg7XG59XG5cbmJ1dHRvbi5idG4tdmlldy1hbGwtcHJvamVjdHMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLXR3byk7XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiO1xuICBmb250LXNpemU6IG1lZGl1bTtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGxldHRlci1zcGFjaW5nOiAwLjIzcHg7XG59XG5cbmJ1dHRvbi5idG4tdmlldy1hbGwtcHJvamVjdHM6aG92ZXIge1xuICBjb2xvcjogdmFyKC0tYWN0aXZlLWNvbG9yKTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbn1cblxuYnV0dG9uLmJ0bi12aWV3LWFsbC1wcm9qZWN0czo6YWZ0ZXIge1xuICBjb250ZW50OiBhdHRyKGRhdGEtdGV4dCk7XG4gIGhlaWdodDogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uaXRlbS1jb250YWluZXIsXG4ucHJvamVjdC1mb3JtLWNvbnRhaW5lcixcbi50YXNrLWZvcm0tY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5wcm9qZWN0LWNhcmQsXG4udGFzay1jYXJkIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmbGV4OiAxO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3ItdGhyZWUpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW46IDBweCAwcHggMjBweDtcbn1cblxuLnByb2plY3QtY2FyZC5hY3RpdmUsXG4udGFzay1jYXJkLmFjdGl2ZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFjY2VudC1jb2xvcik7XG59XG5cbi5wcm9qZWN0LWhlYWRlcixcbi50YXNrLWhlYWRlciB7XG4gIGhlaWdodDogNDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItdGhyZWUpO1xuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yLXR3byk7XG4gIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICBwYWRkaW5nOiA1cHggNXB4IDZweCA1cHg7XG59XG5cbi5wcm9qZWN0LWhlYWRlcjpob3ZlciAuaW5wdXQtcHJvamVjdC10aXRsZSxcbi50YXNrLWhlYWRlcjpob3ZlciAuaW5wdXQtdGFzay10aXRsZSB7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcbn1cblxuLnByb2plY3QtaGVhZGVyLm5ldy1wcm9qZWN0LFxuLnRhc2staGVhZGVyLm5ldy10YXNrIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG59XG5cbmJ1dHRvbi5idG4tc2F2ZS1wcm9qZWN0LFxuYnV0dG9uLmJ0bi1zYXZlLXRhc2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItdHdvKTtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tbWFpbi1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogNXB4IDhweCA1cHg7XG59XG5cbmlucHV0I2lucHV0LXByb2plY3QtdGl0bGUsXG5pbnB1dCNpbnB1dC10YXNrLXRpdGxlIHtcbiAgZmxleDogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvci10d28pO1xuICBmb250LWZhbWlseTogXCJRdWlja3NhbmRcIjtcbiAgZm9udC1zaXplOiBtZWRpdW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbmlucHV0I2lucHV0LXByb2plY3QtdGl0bGU6OnBsYWNlaG9sZGVyLFxuaW5wdXQjaW5wdXQtdGFzay10aXRsZTo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yLXRocmVlKTtcbn1cblxuaW5wdXQuaW5wdXQtcHJvamVjdC10aXRsZSxcbmlucHV0LmlucHV0LXRhc2stdGl0bGUge1xuICBmbGV4OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItdGhyZWUpO1xuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yLXR3byk7XG4gIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiO1xuICBmb250LXNpemU6IG1lZGl1bTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLnByb2plY3QtaGVhZGVyLWxlZnQsXG4udGFzay1oZWFkZXItbGVmdCB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmJ1dHRvbi5idG4tY29tcGxldGUtdGFzayB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvci10aHJlZSk7XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItdHdvKTtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IGxhcmdlO1xuICBwYWRkaW5nOiAwcHggNnB4IDBweDtcbn1cblxuYnV0dG9uLmJ0bi1jb21wbGV0ZS10YXNrLmluYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLWluYWN0aXZlLWNvbG9yKTtcbn1cblxuLnRhc2stdGl0bGUuY29tcGxldGUge1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItdHdvKTtcbiAgdGV4dC1kZWNvcmF0aW9uLXRoaWNrbmVzczogMnB4O1xufVxuXG4udGFzay1oZWFkZXItcmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDZweDtcbn1cblxuYnV0dG9uLmJ0bi1wcm9qZWN0LW1vdmUtZG93bixcbmJ1dHRvbi5idG4tcHJvamVjdC1tb3ZlLXVwLFxuYnV0dG9uLmJ0bi10YXNrLW1vdmUtZG93bixcbmJ1dHRvbi5idG4tdGFzay1tb3ZlLXVwLFxuYnV0dG9uLmJ0bi1wcm9qZWN0LWRlbGV0ZSxcbmJ1dHRvbi5idG4tdGFzay1kZWxldGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtdGhyZWUpO1xuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yLXR3byk7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgcGFkZGluZzogMHB4IDEwcHg7XG59XG5cbmJ1dHRvbi5idG4tcHJvamVjdC1tb3ZlLWRvd246aG92ZXIsXG5idXR0b24uYnRuLXByb2plY3QtbW92ZS11cDpob3ZlcixcbmJ1dHRvbi5idG4tdGFzay1tb3ZlLWRvd246aG92ZXIsXG5idXR0b24uYnRuLXRhc2stbW92ZS11cDpob3ZlcixcbmJ1dHRvbi5idG4tcHJvamVjdC1kZWxldGU6aG92ZXIsXG5idXR0b24uYnRuLXRhc2stZGVsZXRlOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG59XG5cbi5wcm9qZWN0LWRldGFpbHMgPiBkaXYsXG4udGFzay1kZXRhaWxzID4gZGl2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yLXR3byk7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDlweCA5cHg7XG4gIHBhZGRpbmc6IDEwcHggMTVweCAxMHB4O1xufVxuXG4udGFzay1kZXRhaWxzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG50ZXh0YXJlYSNpbnB1dC10YXNrLWRlc2NyaXB0aW9uLFxudGV4dGFyZWEuaW5wdXQtdGFzay1kZXNjcmlwdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItdHdvKTtcbiAgZm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IG1lZGl1bTtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICByZXNpemU6IG5vbmU7XG4gIHBhZGRpbmc6IDEwcHggMTVweCAxMHB4O1xufVxuXG4ucHJvamVjdC1kZXRhaWxzID4gLnRhc2stYm90dG9tLXJvdyxcbi50YXNrLWRldGFpbHMgPiAudGFzay1ib3R0b20tcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3ItdHdvKTtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA5cHggOXB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG5pbnB1dCNpbnB1dC10YXNrLWR1ZS1kYXRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yLXR3byk7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiAycHg7XG59XG5cbmJ1dHRvbi5idG4tdGFzay1kdWUtZGF0ZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LXRocmVlKTtcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbmJ1dHRvbi5idG4tdGFzay1vcHRpb25zIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IGxhcmdlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtdGhyZWUpO1xuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuYnV0dG9uLmJ0bi1uZXctaXRlbSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiA1MHB4O1xuICByaWdodDogMjBweDtcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYWNjZW50LWNvbG9yLXR3byk7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItdHdvKTtcbiAgcGFkZGluZzogMHB4IDEwcHggMHB4O1xufVxuXG5mb290ZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgcGFkZGluZzogNXB4O1xufVxuXG5mb290ZXIgYSB7XG4gIGZvbnQtZmFtaWx5OiBcIkVsZWN0cm9saXplXCI7XG4gIGNvbG9yOiBncmF5O1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixxQ0FBcUM7RUFDckMsc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QiwrQkFBK0I7RUFDL0Isc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6Qix3QkFB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QWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLHlDQUF5QztFQUN6QyxtQkFBbUI7RUFDbkIscUNBQXFDO0VBQ3JDLDhCQUE4QjtFQUM5QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFdBQVc7RUFDWCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLDJCQUEyQjtFQUMzQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsV0FBVztBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUVsZWN0cm9saXplJmZhbWlseT1Ob3ZhK01vbm8mZmFtaWx5PVBUK01vbm8mZmFtaWx5PVF1aWNrc2FuZDp3Z2h0QDUwMDs3MDBcXFwiKTtcXG5cXG46cm9vdC5kZWZhdWx0LXRoZW1lIHtcXG4gIC0tbWFpbi1jb2xvcjogYmxhY2s7XFxuICAtLWJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICAtLWJhY2tncm91bmQtY29sb3ItdHdvOiBsYXZlbmRlcmJsdXNoO1xcbiAgLS1hY2NlbnQtY29sb3I6IHNhbG1vbjtcXG4gIC0tYWNjZW50LWNvbG9yLXR3bzogd2hpdGU7XFxuICAtLWFjY2VudC1jb2xvci10aHJlZTogbGlnaHRwaW5rO1xcbiAgLS1hY3RpdmUtY29sb3I6IHRvbWF0bztcXG4gIC0tYWN0aXZlLWNvbG9yLXR3bzogd2hpdGU7XFxuICAtLWluYWN0aXZlLWNvbG9yOiBzaWx2ZXI7XFxufVxcblxcbmh0bWwge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMHB4O1xcbiAgcGFkZGluZzogMHB4O1xcbn1cXG5cXG4qLFxcbio6YmVmb3JlLFxcbio6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNiB7XFxuICBtYXJnaW46IDBweDtcXG59XFxuXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxuICBmb250LWZhbWlseTogXFxcIlF1aWNrc2FuZFxcXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbiAgbWFyZ2luOiAwcHg7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgei1pbmRleDogMTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci10d28pO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWFjY2VudC1jb2xvci10d28pO1xcbn1cXG5cXG4uaGVhZGVyLXRvcC1yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRWxlY3Ryb2xpemVcXFwiO1xcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxuICBmb250LXNpemU6IHgtbGFyZ2U7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nLXRvcDogNXB4O1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5uYXYudG9wLW5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG5uYXYudG9wLW5hdiBidXR0b24ge1xcbiAgd2lkdGg6IDYwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLXR3byk7XFxuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFjY2VudC1jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBmb250LXNpemU6IG1lZGl1bTtcXG4gIHBhZGRpbmc6IDdweCA4cHggNXB4O1xcbn1cXG5cXG5uYXYudG9wLW5hdiBidXR0b24uYnRuLXByZXZpb3VzLFxcbm5hdi50b3AtbmF2IGJ1dHRvbi5idG4tbmV4dCB7XFxuICB3aWR0aDogMjVweDtcXG59XFxuXFxubmF2LnRvcC1uYXYgYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yLXR3byk7XFxufVxcblxcbm5hdi5icmVhZGNydW1iLW5hdiB7XFxuICBmb250LXNpemU6IG1lZGl1bTtcXG4gIHBhZGRpbmc6IDVweCAxMHB4IDBweDtcXG4gIG1hcmdpbjogMHB4IDBweCAxMHB4O1xcbn1cXG5cXG5zcGFuIHtcXG4gIHBhZGRpbmc6IDBweCA1cHggMHB4O1xcbn1cXG5cXG5zcGFuLmFjY2VudCB7XFxuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gIHBhZGRpbmc6IDFweCA2cHggMXB4O1xcbn1cXG5cXG5tYWluIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDA7XFxuXFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgcGFkZGluZzogMTVweDtcXG4gIHBhZGRpbmctdG9wOiAxMTBweDtcXG59XFxuXFxuYnV0dG9uLmJ0bi12aWV3LWFsbC1wcm9qZWN0cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLXR3byk7XFxuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUXVpY2tzYW5kXFxcIjtcXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICBsZXR0ZXItc3BhY2luZzogMC4yM3B4O1xcbn1cXG5cXG5idXR0b24uYnRuLXZpZXctYWxsLXByb2plY3RzOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1hY3RpdmUtY29sb3IpO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XFxufVxcblxcbmJ1dHRvbi5idG4tdmlldy1hbGwtcHJvamVjdHM6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS10ZXh0KTtcXG4gIGhlaWdodDogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5pdGVtLWNvbnRhaW5lcixcXG4ucHJvamVjdC1mb3JtLWNvbnRhaW5lcixcXG4udGFzay1mb3JtLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnByb2plY3QtY2FyZCxcXG4udGFzay1jYXJkIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZsZXg6IDE7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3ItdGhyZWUpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIG1hcmdpbjogMHB4IDBweCAyMHB4O1xcbn1cXG5cXG4ucHJvamVjdC1jYXJkLmFjdGl2ZSxcXG4udGFzay1jYXJkLmFjdGl2ZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbn1cXG5cXG4ucHJvamVjdC1oZWFkZXIsXFxuLnRhc2staGVhZGVyIHtcXG4gIGhlaWdodDogNDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yLXRocmVlKTtcXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItdHdvKTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUXVpY2tzYW5kXFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xcbiAgcGFkZGluZzogNXB4IDVweCA2cHggNXB4O1xcbn1cXG5cXG4ucHJvamVjdC1oZWFkZXI6aG92ZXIgLmlucHV0LXByb2plY3QtdGl0bGUsXFxuLnRhc2staGVhZGVyOmhvdmVyIC5pbnB1dC10YXNrLXRpdGxlIHtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG59XFxuXFxuLnByb2plY3QtaGVhZGVyLm5ldy1wcm9qZWN0LFxcbi50YXNrLWhlYWRlci5uZXctdGFzayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogNDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxufVxcblxcbmJ1dHRvbi5idG4tc2F2ZS1wcm9qZWN0LFxcbmJ1dHRvbi5idG4tc2F2ZS10YXNrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvci10d28pO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tbWFpbi1jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiA1cHggOHB4IDVweDtcXG59XFxuXFxuaW5wdXQjaW5wdXQtcHJvamVjdC10aXRsZSxcXG5pbnB1dCNpbnB1dC10YXNrLXRpdGxlIHtcXG4gIGZsZXg6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvci10d28pO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJRdWlja3NhbmRcXFwiO1xcbiAgZm9udC1zaXplOiBtZWRpdW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBtYXJnaW4tbGVmdDogNXB4O1xcbn1cXG5cXG5pbnB1dCNpbnB1dC1wcm9qZWN0LXRpdGxlOjpwbGFjZWhvbGRlcixcXG5pbnB1dCNpbnB1dC10YXNrLXRpdGxlOjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yLXRocmVlKTtcXG59XFxuXFxuaW5wdXQuaW5wdXQtcHJvamVjdC10aXRsZSxcXG5pbnB1dC5pbnB1dC10YXNrLXRpdGxlIHtcXG4gIGZsZXg6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItdGhyZWUpO1xcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvci10d28pO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJRdWlja3NhbmRcXFwiO1xcbiAgZm9udC1zaXplOiBtZWRpdW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBtYXJnaW4tbGVmdDogNXB4O1xcbn1cXG5cXG4ucHJvamVjdC1oZWFkZXItbGVmdCxcXG4udGFzay1oZWFkZXItbGVmdCB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmJ1dHRvbi5idG4tY29tcGxldGUtdGFzayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItdGhyZWUpO1xcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvci10d28pO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1zaXplOiBsYXJnZTtcXG4gIHBhZGRpbmc6IDBweCA2cHggMHB4O1xcbn1cXG5cXG5idXR0b24uYnRuLWNvbXBsZXRlLXRhc2suaW5hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1pbmFjdGl2ZS1jb2xvcik7XFxufVxcblxcbi50YXNrLXRpdGxlLmNvbXBsZXRlIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItdHdvKTtcXG4gIHRleHQtZGVjb3JhdGlvbi10aGlja25lc3M6IDJweDtcXG59XFxuXFxuLnRhc2staGVhZGVyLXJpZ2h0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDZweDtcXG59XFxuXFxuYnV0dG9uLmJ0bi1wcm9qZWN0LW1vdmUtZG93bixcXG5idXR0b24uYnRuLXByb2plY3QtbW92ZS11cCxcXG5idXR0b24uYnRuLXRhc2stbW92ZS1kb3duLFxcbmJ1dHRvbi5idG4tdGFzay1tb3ZlLXVwLFxcbmJ1dHRvbi5idG4tcHJvamVjdC1kZWxldGUsXFxuYnV0dG9uLmJ0bi10YXNrLWRlbGV0ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtdGhyZWUpO1xcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvci10d28pO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHBhZGRpbmc6IDBweCAxMHB4O1xcbn1cXG5cXG5idXR0b24uYnRuLXByb2plY3QtbW92ZS1kb3duOmhvdmVyLFxcbmJ1dHRvbi5idG4tcHJvamVjdC1tb3ZlLXVwOmhvdmVyLFxcbmJ1dHRvbi5idG4tdGFzay1tb3ZlLWRvd246aG92ZXIsXFxuYnV0dG9uLmJ0bi10YXNrLW1vdmUtdXA6aG92ZXIsXFxuYnV0dG9uLmJ0bi1wcm9qZWN0LWRlbGV0ZTpob3ZlcixcXG5idXR0b24uYnRuLXRhc2stZGVsZXRlOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbn1cXG5cXG4ucHJvamVjdC1kZXRhaWxzID4gZGl2LFxcbi50YXNrLWRldGFpbHMgPiBkaXYge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yLXR3byk7XFxuICBmb250LXNpemU6IG1lZGl1bTtcXG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggOXB4IDlweDtcXG4gIHBhZGRpbmc6IDEwcHggMTVweCAxMHB4O1xcbn1cXG5cXG4udGFzay1kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG50ZXh0YXJlYSNpbnB1dC10YXNrLWRlc2NyaXB0aW9uLFxcbnRleHRhcmVhLmlucHV0LXRhc2stZGVzY3JpcHRpb24ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItdHdvKTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUXVpY2tzYW5kXFxcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IG1lZGl1bTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICByZXNpemU6IG5vbmU7XFxuICBwYWRkaW5nOiAxMHB4IDE1cHggMTBweDtcXG59XFxuXFxuLnByb2plY3QtZGV0YWlscyA+IC50YXNrLWJvdHRvbS1yb3csXFxuLnRhc2stZGV0YWlscyA+IC50YXNrLWJvdHRvbS1yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogNDBweDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLXR3byk7XFxuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDlweCA5cHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5pbnB1dCNpbnB1dC10YXNrLWR1ZS1kYXRlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvci10d28pO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHBhZGRpbmc6IDJweDtcXG59XFxuXFxuYnV0dG9uLmJ0bi10YXNrLWR1ZS1kYXRlIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC10aHJlZSk7XFxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5idXR0b24uYnRuLXRhc2stb3B0aW9ucyB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IGxhcmdlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LXRocmVlKTtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbmJ1dHRvbi5idG4tbmV3LWl0ZW0ge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiA1MHB4O1xcbiAgcmlnaHQ6IDIwcHg7XFxuICBmb250LXNpemU6IHh4LWxhcmdlO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYWNjZW50LWNvbG9yLXR3byk7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItdHdvKTtcXG4gIHBhZGRpbmc6IDBweCAxMHB4IDBweDtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbmZvb3RlciBhIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRWxlY3Ryb2xpemVcXFwiO1xcbiAgY29sb3I6IGdyYXk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiY29uc3QgYnJlYWRjcnVtYk5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnJlYWRjcnVtYi1uYXZcIik7XG5cbmV4cG9ydCBjb25zdCByZW5kZXJCcmVhZGNydW1iTmF2ID0gZnVuY3Rpb24gKG1vZGUsIGN1cnJlbnRQcm9qZWN0KSB7XG4gIGlmIChtb2RlID09PSBcInByb2plY3RzVmlld1wiKSB7XG4gICAgYnJlYWRjcnVtYk5hdi5pbm5lckhUTUwgPSBgYDtcbiAgICBicmVhZGNydW1iTmF2LmlubmVySFRNTCA9IGBcbiAgPHNwYW4gY2xhc3M9XCJhY2NlbnRcIj5BbGwgUHJvamVjdHM8L3NwYW4+XG4gIDxzcGFuIGNsYXNzPVwic2VwYXJhdG9yXCI+Pjwvc3Bhbj5cbiAgYDtcbiAgfVxuXG4gIGlmIChtb2RlID09PSBcInRhc2tzVmlld1wiKSB7XG4gICAgYnJlYWRjcnVtYk5hdi5pbm5lckhUTUwgPSBgYDtcbiAgICBicmVhZGNydW1iTmF2LmlubmVySFRNTCA9IGBcbiAgPGJ1dHRvbiBjbGFzcz1cImJ0bi12aWV3LWFsbC1wcm9qZWN0c1wiPkFsbCBQcm9qZWN0czwvYnV0dG9uPlxuICA8c3BhbiBjbGFzcz1cInNlcGFyYXRvclwiPj48L3NwYW4+XG4gIDxzcGFuPiR7Y3VycmVudFByb2plY3QudGl0bGV9PC9zcGFuPlxuICBgO1xuICB9XG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgcmVuZGVyQnJlYWRjcnVtYk5hdiB9IGZyb20gXCIuL25hdlwiO1xuaW1wb3J0IHsgcHJvamVjdHMsIFByb2plY3QsIHJlbmRlclByb2plY3RDYXJkIH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IHsgVGFzaywgcmVuZGVyVGFza0NhcmQgfSBmcm9tIFwiLi90YXNrXCI7XG5pbXBvcnQgeyBpbnB1dEhhbmRsZXJQcm9qZWN0VGl0bGUsIGlucHV0SGFuZGxlclRhc2tUaXRsZSwgaW5wdXRIYW5kbGVyVGFza0Rlc2NyaXB0aW9uIH0gZnJvbSBcIi4vYXV0b3NhdmVcIjsgLy8gcHJldHRpZXItaWdub3JlXG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5sZXQgdmlldyA9IFwicHJvamVjdHNcIjtcbmxldCB0YXJnZXRQcm9qZWN0O1xuY29uc3QgaXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaXRlbS1jb250YWluZXJcIik7XG5jb25zdCBwcm9qZWN0Rm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1mb3JtLWNvbnRhaW5lclwiKTtcbmNvbnN0IHRhc2tGb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWZvcm0tY29udGFpbmVyXCIpO1xuY29uc3QgaW5wdXRQcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2lucHV0LXByb2plY3QtdGl0bGVcIik7XG5jb25zdCBpbnB1dFRhc2tUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5wdXQtdGFzay10aXRsZVwiKTtcbmNvbnN0IGlucHV0VGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbnB1dC10YXNrLWRlc2NyaXB0aW9uXCIpO1xuY29uc3QgaW5wdXRUYXNrRHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5wdXQtdGFzay1kdWUtZGF0ZVwiKTtcbmNvbnN0IGJ0bk5ld0l0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1uZXctaXRlbVwiKTtcblxuY29uc3QgdW5sb2FkUHJvamVjdEZvcm0gPSBmdW5jdGlvbiAoKSB7XG4gIGlucHV0UHJvamVjdFRpdGxlLnZhbHVlID0gXCJcIjtcbiAgcHJvamVjdEZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbn07XG5cbmNvbnN0IHVubG9hZFRhc2tGb3JtID0gZnVuY3Rpb24gKCkge1xuICBpbnB1dFRhc2tUaXRsZS52YWx1ZSA9IFwiXCI7XG4gIGlucHV0VGFza0Rlc2NyaXB0aW9uLnZhbHVlID0gXCJcIjtcbiAgdGFza0Zvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbn07XG5cbmNvbnN0IGNsZWFySXRlbUNvbnRhaW5lciA9IGZ1bmN0aW9uICgpIHtcbiAgaXRlbUNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xufTtcblxuY29uc3QgbG9hZFByb2plY3RzVmlldyA9IGZ1bmN0aW9uICgpIHtcbiAgdmlldyA9IFwicHJvamVjdHNcIjtcbiAgcmVuZGVyQnJlYWRjcnVtYk5hdihcInByb2plY3RzVmlld1wiKTtcbiAgdW5sb2FkVGFza0Zvcm0oKTtcbiAgY2xlYXJJdGVtQ29udGFpbmVyKCk7XG4gIHJlbmRlckFsbFByb2plY3RzKHByb2plY3RzKTtcbiAgY2xpY2tIYW5kbGVyRGl2UHJvamVjdERldGFpbHMoKTtcbiAgY2xpY2tIYW5kbGVyQnRuRGVsZXRlUHJvamVjdCgpO1xuICBpbnB1dEhhbmRsZXJQcm9qZWN0VGl0bGUoKTtcbn07XG5cbmNvbnN0IHJlbmRlckFsbFByb2plY3RzID0gZnVuY3Rpb24gKHByb2plY3RzKSB7XG4gIGZvciAobGV0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhwcm9qZWN0cykpIHtcbiAgICBpdGVtQ29udGFpbmVyLnByZXBlbmQocmVuZGVyUHJvamVjdENhcmQodmFsdWUpKTtcbiAgfVxufTtcblxuY29uc3QgbG9hZFRhc2tzVmlldyA9IGZ1bmN0aW9uICh0YXJnZXRQcm9qZWN0KSB7XG4gIHZpZXcgPSBcInRhc2tzXCI7XG4gIHJlbmRlckJyZWFkY3J1bWJOYXYoXCJ0YXNrc1ZpZXdcIiwgdGFyZ2V0UHJvamVjdCk7XG4gIHVubG9hZFByb2plY3RGb3JtKCk7XG4gIGNsZWFySXRlbUNvbnRhaW5lcigpO1xuICByZW5kZXJUYXNrcyh0YXJnZXRQcm9qZWN0LnRhc2tzKTtcbiAgY2xpY2tIYW5kbGVyQnRuVmlld0FsbFByb2plY3RzKCk7XG4gIGNsaWNrSGFuZGxlckJ0bkRlbGV0ZVRhc2soKTtcbiAgaW5wdXRIYW5kbGVyVGFza0Rlc2NyaXB0aW9uKHRhcmdldFByb2plY3QpO1xuICBpbnB1dEhhbmRsZXJUYXNrVGl0bGUodGFyZ2V0UHJvamVjdCk7XG59O1xuXG5jb25zdCByZW5kZXJUYXNrcyA9IGZ1bmN0aW9uICh0YXJnZXRQcm9qZWN0VGFza3MpIHtcbiAgZm9yIChsZXQgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHRhcmdldFByb2plY3RUYXNrcykpIHtcbiAgICBpdGVtQ29udGFpbmVyLnByZXBlbmQocmVuZGVyVGFza0NhcmQodmFsdWUpKTtcbiAgfVxufTtcblxuY29uc3QgbG9hZFByb2plY3RGb3JtID0gZnVuY3Rpb24gKCkge1xuICBwcm9qZWN0Rm9ybUNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICBpbnB1dFByb2plY3RUaXRsZS5mb2N1cygpO1xufTtcblxuY29uc3Qgc2F2ZVByb2plY3QgPSBmdW5jdGlvbiAoKSB7XG4gIGxldCBwcm9qZWN0SWQgPSBgUCR7bmV3IERhdGUoKS5nZXRUaW1lKCl9YDtcbiAgcHJvamVjdHNbcHJvamVjdElkXSA9IG5ldyBQcm9qZWN0KGlucHV0UHJvamVjdFRpdGxlLnZhbHVlIHx8IFwiTmV3IFByb2plY3RcIik7XG4gIHVubG9hZFByb2plY3RGb3JtKCk7XG4gIGNsZWFySXRlbUNvbnRhaW5lcigpO1xuICBsb2FkUHJvamVjdHNWaWV3KCk7XG59O1xuXG5jb25zdCBkZWxldGVQcm9qZWN0ID0gZnVuY3Rpb24gKGUpIHtcbiAgY29uc3QgcHJvamVjdElkID0gZS50YXJnZXQuY2xvc2VzdChcIi5wcm9qZWN0LWNhcmRcIikuZGF0YXNldC5wcm9qZWN0SWQ7XG4gIGNvbnN0IHByb2plY3RUaXRsZSA9IHByb2plY3RzW3Byb2plY3RJZF0udGl0bGU7XG4gIGNvbnNvbGUubG9nKHByb2plY3RUaXRsZSk7XG4gIGNvbnN0IGNvbmZpcm1EZWxldGUgPSBjb25maXJtKGAke3Byb2plY3RUaXRsZX0gLSBEZWxldGUgdGhpcyBwcm9qZWN0P2ApO1xuICBpZiAoIWNvbmZpcm1EZWxldGUpIHJldHVybjtcbiAgZGVsZXRlIHByb2plY3RzW3Byb2plY3RJZF07XG4gIGxvYWRQcm9qZWN0c1ZpZXcoKTtcbn07XG5cbmNvbnN0IGxvYWRUYXNrRm9ybSA9IGZ1bmN0aW9uICgpIHtcbiAgdGFza0Zvcm1Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgaW5wdXRUYXNrVGl0bGUuZm9jdXMoKTtcbn07XG5cbmNvbnN0IHNhdmVUYXNrID0gZnVuY3Rpb24gKCkge1xuICB0YXJnZXRQcm9qZWN0LnRhc2tzLnB1c2goXG4gICAgbmV3IFRhc2soXG4gICAgICBpbnB1dFRhc2tUaXRsZS52YWx1ZSB8fCBcIk5ldyBUYXNrXCIsXG4gICAgICBpbnB1dFRhc2tEZXNjcmlwdGlvbi52YWx1ZSB8fCBcIi4gLiAuXCIsXG4gICAgICBpbnB1dFRhc2tEdWVEYXRlLnZhbHVlIHx8IFwiKCBubyBkdWUgZGF0ZSApXCIsXG4gICAgICBcInBlbmRpbmdcIixcbiAgICAgIFwibWVkaXVtXCJcbiAgICApXG4gICk7XG4gIHVubG9hZFRhc2tGb3JtKCk7XG4gIGNsZWFySXRlbUNvbnRhaW5lcigpO1xuICBsb2FkVGFza3NWaWV3KHRhcmdldFByb2plY3QpO1xufTtcblxuY29uc3QgZGVsZXRlVGFzayA9IGZ1bmN0aW9uIChlKSB7XG4gIGNvbnN0IHRhc2tJZCA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIudGFzay1jYXJkXCIpLmRhdGFzZXQudGFza0lkO1xuICBjb25zdCB0YXNrVGl0bGUgPSB0YXJnZXRQcm9qZWN0LnRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay5pZCA9PT0gdGFza0lkKVswXVxuICAgIC50aXRsZTtcbiAgY29uc3QgY29uZmlybURlbGV0ZSA9IGNvbmZpcm0oYCR7dGFza1RpdGxlfSAtIERlbGV0ZSB0aGlzIHRhc2s/YCk7XG4gIGlmICghY29uZmlybURlbGV0ZSkgcmV0dXJuO1xuICBjb25zdCByZW1haW5pbmdUYXNrcyA9IHRhcmdldFByb2plY3QudGFza3MuZmlsdGVyKFxuICAgICh0YXNrKSA9PiB0YXNrLmlkICE9PSB0YXNrSWRcbiAgKTtcbiAgdGFyZ2V0UHJvamVjdC50YXNrcyA9IHJlbWFpbmluZ1Rhc2tzO1xuICBsb2FkVGFza3NWaWV3KHRhcmdldFByb2plY3QpO1xufTtcblxuY29uc3QgY2xpY2tIYW5kbGVyRGl2UHJvamVjdERldGFpbHMgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHByb2plY3REZXRhaWxzTkwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3QtZGV0YWlsc1wiKTtcbiAgcHJvamVjdERldGFpbHNOTC5mb3JFYWNoKChwcm9qZWN0RGV0YWlsKSA9PiB7XG4gICAgcHJvamVjdERldGFpbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY29uc3QgcHJvamVjdENhcmRJZCA9IHByb2plY3REZXRhaWwucGFyZW50RWxlbWVudC5kYXRhc2V0LnByb2plY3RJZDtcbiAgICAgIHRhcmdldFByb2plY3QgPSBwcm9qZWN0c1twcm9qZWN0Q2FyZElkXTtcbiAgICAgIGxvYWRUYXNrc1ZpZXcodGFyZ2V0UHJvamVjdCk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3QgY2xpY2tIYW5kbGVyQnRuVmlld0FsbFByb2plY3RzID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBidG5WaWV3QWxsUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi12aWV3LWFsbC1wcm9qZWN0c1wiKTtcbiAgYnRuVmlld0FsbFByb2plY3RzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbG9hZFByb2plY3RzVmlldygpO1xuICB9KTtcbn07XG5cbmNvbnN0IGNsaWNrSGFuZGxlckJ0bk5ld0l0ZW0gPSBmdW5jdGlvbiAoKSB7XG4gIGJ0bk5ld0l0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpZiAodmlldyA9PT0gXCJwcm9qZWN0c1wiKSBsb2FkUHJvamVjdEZvcm0oKTtcbiAgICBpZiAodmlldyA9PT0gXCJ0YXNrc1wiKSBsb2FkVGFza0Zvcm0oKTtcbiAgfSk7XG59O1xuXG5jb25zdCBjbGlja0hhbmRsZXJCdG5TYXZlUHJvamVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgYnRuU2F2ZVByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1zYXZlLXByb2plY3RcIik7XG4gIGJ0blNhdmVQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzYXZlUHJvamVjdCk7XG59O1xuXG5jb25zdCBjbGlja0hhbmRsZXJCdG5TYXZlVGFzayA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgYnRuU2F2ZVRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1zYXZlLXRhc2tcIik7XG4gIGJ0blNhdmVUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzYXZlVGFzayk7XG59O1xuXG5jb25zdCBjbGlja0hhbmRsZXJCdG5EZWxldGVQcm9qZWN0ID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBkZWxldGVQcm9qZWN0QnV0dG9uc05MID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICBcIi5idG4tcHJvamVjdC1kZWxldGVcIlxuICApO1xuICBkZWxldGVQcm9qZWN0QnV0dG9uc05MLmZvckVhY2goKGJ1dHRvbikgPT5cbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRlbGV0ZVByb2plY3QuYmluZCh0aGlzKSlcbiAgKTtcbn07XG5cbmNvbnN0IGNsaWNrSGFuZGxlckJ0bkRlbGV0ZVRhc2sgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGRlbGV0ZVRhc2tCdXR0b25zTkwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJ0bi10YXNrLWRlbGV0ZVwiKTtcbiAgZGVsZXRlVGFza0J1dHRvbnNOTC5mb3JFYWNoKChidXR0b24pID0+XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkZWxldGVUYXNrLmJpbmQodGhpcykpXG4gICk7XG59O1xuXG4vLyBJbml0aWFsaXplIGFwcFxuKGZ1bmN0aW9uICgpIHtcbiAgbG9hZFByb2plY3RzVmlldygpO1xuICBjbGlja0hhbmRsZXJCdG5OZXdJdGVtKCk7XG4gIGNsaWNrSGFuZGxlckJ0blNhdmVQcm9qZWN0KCk7XG4gIGNsaWNrSGFuZGxlckJ0blNhdmVUYXNrKCk7XG59KSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9