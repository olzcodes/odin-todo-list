/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   projects: () => (/* binding */ projects)
/* harmony export */ });
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _autoSave__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var _demoData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);



 // prettier-ignore




let projects = (0,_localStorage__WEBPACK_IMPORTED_MODULE_4__.loadFromLocalStorage)() || _demoData__WEBPACK_IMPORTED_MODULE_5__.demoProjects;

let view = "projects";
let targetProject;
const itemContainer = document.querySelector(".item-container");
const btnNewItem = document.querySelector(".btn-new-item");

const clearItemContainer = function () {
  itemContainer.innerHTML = "";
};

const showTopOfPage = function () {
  window.scrollTo(0, 0);
};

const loadProjectsView = function () {
  view = "projects";
  (0,_nav__WEBPACK_IMPORTED_MODULE_0__.renderBreadcrumbNav)("projectsView");
  clearItemContainer();
  renderAllProjects(projects);
  (0,_autoSave__WEBPACK_IMPORTED_MODULE_3__.inputHandlerProjectTitle)();
  clickHandlerDivProjectDetails();
  clickHandlerBtnDeleteProject();
};

const renderAllProjects = function (projects) {
  for (let [key, value] of Object.entries(projects)) {
    itemContainer.prepend((0,_project__WEBPACK_IMPORTED_MODULE_1__.renderProjectCard)(value));
  }
};

const loadTasksView = function (targetProject) {
  view = "tasks";
  (0,_nav__WEBPACK_IMPORTED_MODULE_0__.renderBreadcrumbNav)("tasksView", targetProject);
  clearItemContainer();
  renderTasks(targetProject.tasks);
  clickHandlerBtnViewAllProjects();
  (0,_autoSave__WEBPACK_IMPORTED_MODULE_3__.clickHandlerCompletedTaskCard)();
  (0,_autoSave__WEBPACK_IMPORTED_MODULE_3__.clickHandlerBtnTaskStatus)(targetProject);
  (0,_autoSave__WEBPACK_IMPORTED_MODULE_3__.inputHandlerTaskTitle)(targetProject);
  clickHandlerBtnDeleteTask();
  (0,_autoSave__WEBPACK_IMPORTED_MODULE_3__.inputHandlerTaskDescription)(targetProject);
  (0,_autoSave__WEBPACK_IMPORTED_MODULE_3__.inputHandlerTaskDueDate)(targetProject);
  showTopOfPage();
};

const renderTasks = function (targetProjectTasks) {
  for (let [key, value] of Object.entries(targetProjectTasks)) {
    itemContainer.prepend((0,_task__WEBPACK_IMPORTED_MODULE_2__.renderTaskCard)(value));
  }
};

const createNewProject = function () {
  const project = new _project__WEBPACK_IMPORTED_MODULE_1__.Project("", "", []);
  project.id = `P${new Date().getTime()}`;
  projects[project.id] = project;
  (0,_localStorage__WEBPACK_IMPORTED_MODULE_4__.saveToLocalStorage)();
  clearItemContainer();
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
  (0,_localStorage__WEBPACK_IMPORTED_MODULE_4__.saveToLocalStorage)();
  loadProjectsView();
};

const createNewTask = function () {
  targetProject.addTask(new _task__WEBPACK_IMPORTED_MODULE_2__.Task("", "", "", "pending", "medium", "enabled"));
  (0,_localStorage__WEBPACK_IMPORTED_MODULE_4__.saveToLocalStorage)();
  clearItemContainer();
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
  (0,_localStorage__WEBPACK_IMPORTED_MODULE_4__.saveToLocalStorage)();
  loadTasksView(targetProject);
};

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

const clickHandlerBtnNewItem = function () {
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

// Initialize app
(function () {
  loadProjectsView();
  clickHandlerBtnNewItem();
})();


/***/ }),
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderBreadcrumbNav: () => (/* binding */ renderBreadcrumbNav)
/* harmony export */ });
const breadcrumbNav = document.querySelectorAll(".breadcrumb-nav");

const renderBreadcrumbNav = function (mode, currentProject) {
  if (mode === "projectsView") {
    breadcrumbNav.forEach((element) => (element.innerHTML = ``));
    breadcrumbNav.forEach(
      (element) =>
        (element.innerHTML = `
  <span class="all-projects">All Projects</span>
  <span class="separator">></span>
  `)
    );
  }

  if (mode === "tasksView") {
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


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project),
/* harmony export */   renderProjectCard: () => (/* binding */ renderProjectCard)
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


/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Task: () => (/* binding */ Task),
/* harmony export */   renderTaskCard: () => (/* binding */ renderTaskCard)
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


/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clickHandlerBtnTaskStatus: () => (/* binding */ clickHandlerBtnTaskStatus),
/* harmony export */   clickHandlerCompletedTaskCard: () => (/* binding */ clickHandlerCompletedTaskCard),
/* harmony export */   inputHandlerProjectTitle: () => (/* binding */ inputHandlerProjectTitle),
/* harmony export */   inputHandlerTaskDescription: () => (/* binding */ inputHandlerTaskDescription),
/* harmony export */   inputHandlerTaskDueDate: () => (/* binding */ inputHandlerTaskDueDate),
/* harmony export */   inputHandlerTaskTitle: () => (/* binding */ inputHandlerTaskTitle)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);



const autoSaveProjectTitleChanges = function (projectId, title) {
  _index__WEBPACK_IMPORTED_MODULE_0__.projects[projectId].title = title.value;
  (0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.saveToLocalStorage)();
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

      toggleTaskElementsOnStatusChange(button);

      (0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.saveToLocalStorage)();
    }
  });
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

const autoSaveTaskTitleChanges = function (targetProject, taskId, taskTitle) {
  targetProject.tasks.forEach((task) => {
    if (task.id === taskId) task.title = taskTitle.value;
    (0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.saveToLocalStorage)();
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
  taskDescriptionEl
) {
  targetProject.tasks.forEach((task) => {
    if (task.id === taskId) task.description = taskDescriptionEl.value;
    (0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.saveToLocalStorage)();
  });
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

const inputHandlerTaskDescription = function (targetProject) {
  const taskDescriptionsNL = document.querySelectorAll(
    ".input-task-description"
  );

  if (!taskDescriptionsNL) return;

  taskDescriptionsNL.forEach((taskDescriptionEl) => {
    autoAdjustHeight(taskDescriptionEl);

    taskDescriptionEl.addEventListener("input", (e) => {
      const taskId = e.target.closest(".task-card").dataset.taskId;
      autoSaveTaskDescriptionChanges(targetProject, taskId, taskDescriptionEl);
    });
  });
};

const autoSaveTaskDueDateChanges = function (
  targetProject,
  taskId,
  taskDueDate
) {
  targetProject.tasks.forEach((task) => {
    if (task.id === taskId) task.dueDate = taskDueDate.value;
    (0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.saveToLocalStorage)();
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

const toggleTaskDetails = function (taskCard) {
  const taskDetailsEl = taskCard.querySelector(".task-details");
  taskDetailsEl.classList.toggle("visible");
};

const clickHandlerCompletedTaskCard = function () {
  const completedTaskCardNL = document.querySelectorAll(".task-card");
  completedTaskCardNL.forEach((taskCard) => {
    taskCard.addEventListener("click", () => {
      toggleTaskDetails(taskCard);
    });
  });
};


/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadFromLocalStorage: () => (/* binding */ loadFromLocalStorage),
/* harmony export */   saveToLocalStorage: () => (/* binding */ saveToLocalStorage)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _demoData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);




const saveToLocalStorage = function () {
  localStorage.setItem("projects", JSON.stringify(_index__WEBPACK_IMPORTED_MODULE_0__.projects));
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
/* 6 */
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


/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 8 */
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
/* 9 */
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
/* 10 */
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
/* 11 */
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
/* 12 */
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
/* 13 */
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
/* 14 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(18), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(19), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(20), __webpack_require__.b);
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

nav.top-nav button:hover {
  background-color: var(--accent-color);
  color: var(--accent-color-two);
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
  color: var(--accent-color);
  border: 2px solid var(--background-color-two);
  font-size: medium;
  letter-spacing: 0.23px;
  padding: 3px 6px 3px;
}

span.current-project {
  color: var(--main-color);
  font-size: large;
  padding: 3px 6px 3px;
}

button.btn-view-all-projects {
  background-color: var(--accent-color-two);
  color: var(--accent-color);
  border: 2px solid var(--accent-color-two);
  border-radius: 5px;
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
  padding-top: 110px;
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: \"Electrolize\";\n  src: url(\"./fonts/Electrolize-Regular.woff\") format(\"woff\");\n  font-weight: 400;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: \"Quicksand\";\n  src: url(\"./fonts/Quicksand-Medium.woff\") format(\"woff\");\n  font-weight: 500;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: \"Quicksand\";\n  src: url(\"./fonts/Quicksand-Bold.woff\") format(\"woff\");\n  font-weight: 700;\n  font-style: normal;\n}\n\n:root.default-theme {\n  --main-color: black;\n  --background-color: whitesmoke;\n  --background-color-two: lavenderblush;\n  --accent-color: salmon;\n  --accent-color-two: white;\n  --accent-color-three: lightpink;\n  --active-color: tomato;\n  --active-color-two: white;\n  --inactive-color: silver;\n  --default-thickness: 2px;\n}\n\nhtml {\n  box-sizing: border-box;\n  margin: 0px;\n  padding: 0px;\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n  /* border: 1px solid red; */\n}\n\n.hidden {\n  display: none;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0px;\n}\n\nbody {\n  height: 100vh;\n  background-color: var(--background-color);\n  color: var(--main-color);\n  font-family: \"Quicksand\", Tahoma, Geneva, Verdana, sans-serif;\n  margin: 0px;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\nheader {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 1;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  background-color: var(--background-color-two);\n  border-bottom: var(--default-thickness) solid var(--accent-color-two);\n}\n\n.header-top-row {\n  display: flex;\n  justify-content: space-between;\n  padding: 10px;\n}\n\nh1 {\n  font-family: \"Electrolize\";\n  color: var(--accent-color);\n  font-size: x-large;\n  text-align: center;\n  padding-top: 5px;\n}\n\nbutton:hover {\n  cursor: pointer;\n}\n\nnav.top-nav {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n}\n\nnav.top-nav button {\n  width: 60px;\n  background-color: var(--background-color-two);\n  color: var(--accent-color);\n  border: 1px solid var(--accent-color);\n  border-radius: 5px;\n  font-size: medium;\n  padding: 7px 8px 5px;\n}\n\nnav.top-nav button:hover {\n  background-color: var(--accent-color);\n  color: var(--accent-color-two);\n}\n\nnav.breadcrumb-nav {\n  display: flex;\n  align-items: center;\n  font-size: larger;\n  padding: 5px 10px 0px;\n  margin: 0px 0px 10px;\n}\n\nspan {\n  padding: 0px 10px 0px;\n}\n\nspan.all-projects {\n  color: var(--accent-color);\n  border: 2px solid var(--background-color-two);\n  font-size: medium;\n  letter-spacing: 0.23px;\n  padding: 3px 6px 3px;\n}\n\nspan.current-project {\n  color: var(--main-color);\n  font-size: large;\n  padding: 3px 6px 3px;\n}\n\nbutton.btn-view-all-projects {\n  background-color: var(--accent-color-two);\n  color: var(--accent-color);\n  border: 2px solid var(--accent-color-two);\n  border-radius: 5px;\n  font-family: \"Quicksand\";\n  font-size: medium;\n  font-weight: bold;\n  text-decoration: underline;\n  color: var(--accent-color);\n  padding: 3px 6px 3px;\n}\n\nbutton.btn-view-all-projects:hover {\n  color: var(--active-color);\n  border: 2px solid var(--active-color);\n  font-weight: 700;\n  letter-spacing: 0px;\n}\n\nbutton.btn-view-all-projects::after {\n  height: 0;\n  visibility: hidden;\n  font-weight: 700;\n}\n\nmain {\n  position: relative;\n  z-index: 0;\n\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  align-items: start;\n  padding: 15px;\n  padding-top: 110px;\n}\n\n.item-container {\n  width: 100%;\n  padding-bottom: 80px;\n}\n\n.project-card,\n.task-card {\n  cursor: pointer;\n  flex: 1;\n  border: var(--default-thickness) solid var(--accent-color-three);\n  border-radius: 12px;\n  margin: 0px 0px 20px;\n}\n\n.project-header,\n.task-header {\n  height: 40px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: var(--accent-color-three);\n  color: var(--accent-color-two);\n  font-family: \"Quicksand\";\n  font-weight: bold;\n  border-radius: 9px;\n  padding: 5px 5px 6px 5px;\n}\n\n.project-header:hover .input-project-title,\n.task-header:hover .input-task-title {\n  color: var(--main-color);\n}\n\n.task-header.completed {\n  background-color: var(--inactive-color);\n}\n\n.task-details.completed {\n  transition: opacity 1.5s ease;\n  opacity: 0;\n  height: 0;\n  overflow: hidden;\n}\n\n.task-details.pending,\n.task-details.completed.visible {\n  transition: opacity 1.5s ease;\n  opacity: 1;\n  height: auto;\n}\n\n/* This rule is required for click events on disabled input elements to propagate upwards on some browsers */\ninput[disabled] {\n  pointer-events: none;\n}\n\ninput.input-task-title.completed {\n  text-decoration: line-through;\n}\n\n.task-card.completed {\n  border: var(--default-thickness) solid var(--inactive-color);\n}\n\nbutton.btn-save-project,\nbutton.btn-save-task {\n  background-color: var(--accent-color-two);\n  border: 2px solid var(--main-color);\n  border-radius: 5px;\n  padding: 5px 8px 5px;\n}\n\ninput.input-project-title,\ninput.input-task-title {\n  flex: 1;\n  background-color: inherit;\n  color: var(--accent-color-two);\n  font-family: \"Quicksand\";\n  font-size: medium;\n  font-weight: bold;\n  border: none;\n  outline: none;\n  margin-left: 5px;\n}\n\ninput.input-project-title:focus,\ninput.input-task-title:focus {\n  background-color: inherit;\n}\n\n.project-header-left,\n.task-header-left {\n  flex: 1;\n  display: flex;\n  align-items: center;\n}\n\nbutton.btn-task-status {\n  background-color: inherit;\n  color: var(--accent-color-two);\n  border: none;\n  font-size: large;\n  padding: 0px 6px 0px;\n}\n\nbutton.btn-task-status.pending::after {\n  content: \"〇\";\n}\n\nbutton.btn-task-status.completed::after {\n  content: \"◉\";\n}\n\n.project-header:focus-within,\n.task-header:focus-within {\n  background-color: var(--accent-color);\n}\n\n.task-title.completed {\n  text-decoration: line-through;\n  text-decoration-color: var(--accent-color-two);\n  text-decoration-thickness: 2px;\n}\n\n.task-header-right {\n  display: flex;\n  gap: 6px;\n}\n\nbutton.btn-project-move-down,\nbutton.btn-project-move-up,\nbutton.btn-task-move-down,\nbutton.btn-task-move-up,\nbutton.btn-project-delete,\nbutton.btn-task-delete {\n  background-color: var(--accent-three);\n  color: var(--accent-color-two);\n  border: none;\n  font-weight: 700;\n  padding: 0px 10px;\n}\n\nbutton.btn-project-move-down:hover,\nbutton.btn-project-move-up:hover,\nbutton.btn-task-move-down:hover,\nbutton.btn-task-move-up:hover,\nbutton.btn-project-delete:hover,\nbutton.btn-task-delete:hover {\n  color: var(--main-color);\n}\n\n.project-details > div,\n.task-details > div {\n  background-color: var(--accent-color-two);\n  font-size: medium;\n  border-radius: 0px 0px 9px 9px;\n  padding: 10px 15px 10px;\n}\n\n.task-details {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\ntextarea.input-task-description {\n  width: 100%;\n  background-color: var(--accent-color-two);\n  font-family: \"Quicksand\", Tahoma, Geneva, Verdana, sans-serif;\n  font-size: medium;\n  border: none;\n  outline: none;\n  resize: none;\n  padding: 10px 15px 10px;\n}\n\ntextarea.input-task-description.completed {\n  color: gray;\n}\n\n.project-details > .task-bottom-row,\n.task-details > .task-bottom-row {\n  display: flex;\n  height: 40px;\n  justify-content: space-between;\n  align-items: center;\n  background-color: var(--background-color-two);\n  border-radius: 0px 0px 9px 9px;\n  font-weight: 700;\n}\n\ninput.input-task-due-date {\n  background-color: var(--background-color-two);\n  border: 2px solid var(--accent-color-three);\n  border-radius: 5px;\n  outline: none;\n  padding: 2px;\n}\n\ninput[disabled].input-task-due-date {\n  background-color: var(--background-color);\n  border: 2px solid var(--inactive-color);\n}\n\nbutton.btn-task-options {\n  cursor: pointer;\n  font-size: large;\n  background-color: var(--accent-three);\n  color: var(--main-color);\n  border: none;\n  font-weight: 700;\n}\n\nbutton.btn-new-item {\n  position: fixed;\n  bottom: 50px;\n  right: 20px;\n  font-size: xx-large;\n  border: 2px solid var(--accent-color-two);\n  border-radius: 50px;\n  background-color: var(--accent-color);\n  color: var(--accent-color-two);\n  padding: 0px 10px 0px;\n}\n\nfooter {\n  position: fixed;\n  bottom: 0px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  background-color: lightgray;\n  padding: 5px;\n}\n\nfooter a {\n  font-family: \"Electrolize\";\n  color: gray;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 15 */
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
/* 16 */
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
/* 17 */
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
/* 18 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5c1e7169fdffff310e8b.woff";

/***/ }),
/* 19 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d45eaadb94deb4d911b3.woff";

/***/ }),
/* 20 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2b8f265dbe25b17da681.woff";

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(0);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxPQUFPLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxZQUFZLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsWUFBWSxjQUFjLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFlBQVksVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksV0FBVyxVQUFVLE1BQU0sWUFBWSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxV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QTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL25hdi5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvYXV0b1NhdmUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvbG9jYWxTdG9yYWdlLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2RlbW9EYXRhLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXJCcmVhZGNydW1iTmF2IH0gZnJvbSBcIi4vbmF2XCI7XG5pbXBvcnQgeyBQcm9qZWN0LCByZW5kZXJQcm9qZWN0Q2FyZCB9IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCB7IFRhc2ssIHJlbmRlclRhc2tDYXJkIH0gZnJvbSBcIi4vdGFza1wiO1xuaW1wb3J0IHsgaW5wdXRIYW5kbGVyUHJvamVjdFRpdGxlLCBjbGlja0hhbmRsZXJCdG5UYXNrU3RhdHVzLCBpbnB1dEhhbmRsZXJUYXNrVGl0bGUsIGlucHV0SGFuZGxlclRhc2tEZXNjcmlwdGlvbiwgaW5wdXRIYW5kbGVyVGFza0R1ZURhdGUsIGNsaWNrSGFuZGxlckNvbXBsZXRlZFRhc2tDYXJkIH0gZnJvbSBcIi4vYXV0b1NhdmVcIjsgLy8gcHJldHRpZXItaWdub3JlXG5pbXBvcnQgeyBzYXZlVG9Mb2NhbFN0b3JhZ2UsIGxvYWRGcm9tTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vbG9jYWxTdG9yYWdlXCI7XG5pbXBvcnQgeyBkZW1vUHJvamVjdHMgfSBmcm9tIFwiLi9kZW1vRGF0YVwiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuZXhwb3J0IGxldCBwcm9qZWN0cyA9IGxvYWRGcm9tTG9jYWxTdG9yYWdlKCkgfHwgZGVtb1Byb2plY3RzO1xuXG5sZXQgdmlldyA9IFwicHJvamVjdHNcIjtcbmxldCB0YXJnZXRQcm9qZWN0O1xuY29uc3QgaXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaXRlbS1jb250YWluZXJcIik7XG5jb25zdCBidG5OZXdJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG4tbmV3LWl0ZW1cIik7XG5cbmNvbnN0IGNsZWFySXRlbUNvbnRhaW5lciA9IGZ1bmN0aW9uICgpIHtcbiAgaXRlbUNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xufTtcblxuY29uc3Qgc2hvd1RvcE9mUGFnZSA9IGZ1bmN0aW9uICgpIHtcbiAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xufTtcblxuY29uc3QgbG9hZFByb2plY3RzVmlldyA9IGZ1bmN0aW9uICgpIHtcbiAgdmlldyA9IFwicHJvamVjdHNcIjtcbiAgcmVuZGVyQnJlYWRjcnVtYk5hdihcInByb2plY3RzVmlld1wiKTtcbiAgY2xlYXJJdGVtQ29udGFpbmVyKCk7XG4gIHJlbmRlckFsbFByb2plY3RzKHByb2plY3RzKTtcbiAgaW5wdXRIYW5kbGVyUHJvamVjdFRpdGxlKCk7XG4gIGNsaWNrSGFuZGxlckRpdlByb2plY3REZXRhaWxzKCk7XG4gIGNsaWNrSGFuZGxlckJ0bkRlbGV0ZVByb2plY3QoKTtcbn07XG5cbmNvbnN0IHJlbmRlckFsbFByb2plY3RzID0gZnVuY3Rpb24gKHByb2plY3RzKSB7XG4gIGZvciAobGV0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhwcm9qZWN0cykpIHtcbiAgICBpdGVtQ29udGFpbmVyLnByZXBlbmQocmVuZGVyUHJvamVjdENhcmQodmFsdWUpKTtcbiAgfVxufTtcblxuY29uc3QgbG9hZFRhc2tzVmlldyA9IGZ1bmN0aW9uICh0YXJnZXRQcm9qZWN0KSB7XG4gIHZpZXcgPSBcInRhc2tzXCI7XG4gIHJlbmRlckJyZWFkY3J1bWJOYXYoXCJ0YXNrc1ZpZXdcIiwgdGFyZ2V0UHJvamVjdCk7XG4gIGNsZWFySXRlbUNvbnRhaW5lcigpO1xuICByZW5kZXJUYXNrcyh0YXJnZXRQcm9qZWN0LnRhc2tzKTtcbiAgY2xpY2tIYW5kbGVyQnRuVmlld0FsbFByb2plY3RzKCk7XG4gIGNsaWNrSGFuZGxlckNvbXBsZXRlZFRhc2tDYXJkKCk7XG4gIGNsaWNrSGFuZGxlckJ0blRhc2tTdGF0dXModGFyZ2V0UHJvamVjdCk7XG4gIGlucHV0SGFuZGxlclRhc2tUaXRsZSh0YXJnZXRQcm9qZWN0KTtcbiAgY2xpY2tIYW5kbGVyQnRuRGVsZXRlVGFzaygpO1xuICBpbnB1dEhhbmRsZXJUYXNrRGVzY3JpcHRpb24odGFyZ2V0UHJvamVjdCk7XG4gIGlucHV0SGFuZGxlclRhc2tEdWVEYXRlKHRhcmdldFByb2plY3QpO1xuICBzaG93VG9wT2ZQYWdlKCk7XG59O1xuXG5jb25zdCByZW5kZXJUYXNrcyA9IGZ1bmN0aW9uICh0YXJnZXRQcm9qZWN0VGFza3MpIHtcbiAgZm9yIChsZXQgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHRhcmdldFByb2plY3RUYXNrcykpIHtcbiAgICBpdGVtQ29udGFpbmVyLnByZXBlbmQocmVuZGVyVGFza0NhcmQodmFsdWUpKTtcbiAgfVxufTtcblxuY29uc3QgY3JlYXRlTmV3UHJvamVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KFwiXCIsIFwiXCIsIFtdKTtcbiAgcHJvamVjdC5pZCA9IGBQJHtuZXcgRGF0ZSgpLmdldFRpbWUoKX1gO1xuICBwcm9qZWN0c1twcm9qZWN0LmlkXSA9IHByb2plY3Q7XG4gIHNhdmVUb0xvY2FsU3RvcmFnZSgpO1xuICBjbGVhckl0ZW1Db250YWluZXIoKTtcbiAgbG9hZFByb2plY3RzVmlldygpO1xuICBjb25zdCBpbnB1dFByb2plY3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgXCIuaW5wdXQtcHJvamVjdC10aXRsZVwiXG4gIClbMF07XG4gIGlucHV0UHJvamVjdFRpdGxlLmZvY3VzKCk7XG59O1xuXG5jb25zdCBkZWxldGVQcm9qZWN0ID0gZnVuY3Rpb24gKGUpIHtcbiAgY29uc3QgcHJvamVjdElkID0gZS50YXJnZXQuY2xvc2VzdChcIi5wcm9qZWN0LWNhcmRcIikuZGF0YXNldC5wcm9qZWN0SWQ7XG4gIGNvbnN0IHByb2plY3RUaXRsZSA9IHByb2plY3RzW3Byb2plY3RJZF0udGl0bGU7XG4gIGNvbnN0IGNvbmZpcm1EZWxldGUgPSBjb25maXJtKFxuICAgIHByb2plY3RUaXRsZVxuICAgICAgPyBgJHtwcm9qZWN0VGl0bGV9IC0gRGVsZXRlIHRoaXMgcHJvamVjdD9gXG4gICAgICA6IFwiRGVsZXRlIHRoaXMgcHJvamVjdD9cIlxuICApO1xuICBpZiAoIWNvbmZpcm1EZWxldGUpIHJldHVybjtcbiAgZGVsZXRlIHByb2plY3RzW3Byb2plY3RJZF07XG4gIHNhdmVUb0xvY2FsU3RvcmFnZSgpO1xuICBsb2FkUHJvamVjdHNWaWV3KCk7XG59O1xuXG5jb25zdCBjcmVhdGVOZXdUYXNrID0gZnVuY3Rpb24gKCkge1xuICB0YXJnZXRQcm9qZWN0LmFkZFRhc2sobmV3IFRhc2soXCJcIiwgXCJcIiwgXCJcIiwgXCJwZW5kaW5nXCIsIFwibWVkaXVtXCIsIFwiZW5hYmxlZFwiKSk7XG4gIHNhdmVUb0xvY2FsU3RvcmFnZSgpO1xuICBjbGVhckl0ZW1Db250YWluZXIoKTtcbiAgbG9hZFRhc2tzVmlldyh0YXJnZXRQcm9qZWN0KTtcbiAgY29uc3QgaW5wdXRUYXNrVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlucHV0LXRhc2stdGl0bGVcIik7XG4gIGlucHV0VGFza1RpdGxlLmZvY3VzKCk7XG59O1xuXG5jb25zdCBkZWxldGVUYXNrID0gZnVuY3Rpb24gKGUpIHtcbiAgY29uc3QgdGFza0lkID0gZS50YXJnZXQuY2xvc2VzdChcIi50YXNrLWNhcmRcIikuZGF0YXNldC50YXNrSWQ7XG4gIGNvbnN0IHRhc2tUaXRsZSA9IHRhcmdldFByb2plY3QudGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmlkID09PSB0YXNrSWQpWzBdXG4gICAgLnRpdGxlO1xuICBjb25zdCBjb25maXJtRGVsZXRlID0gY29uZmlybShcbiAgICB0YXNrVGl0bGUgPyBgJHt0YXNrVGl0bGV9IC0gRGVsZXRlIHRoaXMgdGFzaz9gIDogXCJEZWxldGUgdGhpcyB0YXNrP1wiXG4gICk7XG4gIGlmICghY29uZmlybURlbGV0ZSkgcmV0dXJuO1xuICB0YXJnZXRQcm9qZWN0LmRlbGV0ZVRhc2sodGFza0lkKTtcbiAgc2F2ZVRvTG9jYWxTdG9yYWdlKCk7XG4gIGxvYWRUYXNrc1ZpZXcodGFyZ2V0UHJvamVjdCk7XG59O1xuXG5jb25zdCBjbGlja0hhbmRsZXJEaXZQcm9qZWN0RGV0YWlscyA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgcHJvamVjdERldGFpbHNOTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdC1kZXRhaWxzXCIpO1xuICBwcm9qZWN0RGV0YWlsc05MLmZvckVhY2goKHByb2plY3REZXRhaWwpID0+IHtcbiAgICBwcm9qZWN0RGV0YWlsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjb25zdCBwcm9qZWN0Q2FyZElkID0gcHJvamVjdERldGFpbC5wYXJlbnRFbGVtZW50LmRhdGFzZXQucHJvamVjdElkO1xuICAgICAgdGFyZ2V0UHJvamVjdCA9IHByb2plY3RzW3Byb2plY3RDYXJkSWRdO1xuICAgICAgbG9hZFRhc2tzVmlldyh0YXJnZXRQcm9qZWN0KTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCBjbGlja0hhbmRsZXJCdG5WaWV3QWxsUHJvamVjdHMgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGJ0blZpZXdBbGxQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLXZpZXctYWxsLXByb2plY3RzXCIpO1xuICBidG5WaWV3QWxsUHJvamVjdHMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBsb2FkUHJvamVjdHNWaWV3KCk7XG4gIH0pO1xufTtcblxuY29uc3QgY2xpY2tIYW5kbGVyQnRuTmV3SXRlbSA9IGZ1bmN0aW9uICgpIHtcbiAgYnRuTmV3SXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlmICh2aWV3ID09PSBcInByb2plY3RzXCIpIGNyZWF0ZU5ld1Byb2plY3QoKTtcbiAgICBpZiAodmlldyA9PT0gXCJ0YXNrc1wiKSBjcmVhdGVOZXdUYXNrKCk7XG4gIH0pO1xufTtcblxuY29uc3QgY2xpY2tIYW5kbGVyQnRuRGVsZXRlUHJvamVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgZGVsZXRlUHJvamVjdEJ1dHRvbnNOTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgXCIuYnRuLXByb2plY3QtZGVsZXRlXCJcbiAgKTtcbiAgZGVsZXRlUHJvamVjdEJ1dHRvbnNOTC5mb3JFYWNoKChidXR0b24pID0+XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkZWxldGVQcm9qZWN0LmJpbmQodGhpcykpXG4gICk7XG59O1xuXG5jb25zdCBjbGlja0hhbmRsZXJCdG5EZWxldGVUYXNrID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBkZWxldGVUYXNrQnV0dG9uc05MID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5idG4tdGFzay1kZWxldGVcIik7XG4gIGRlbGV0ZVRhc2tCdXR0b25zTkwuZm9yRWFjaCgoYnV0dG9uKSA9PlxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGVsZXRlVGFzay5iaW5kKHRoaXMpKVxuICApO1xufTtcblxuLy8gSW5pdGlhbGl6ZSBhcHBcbihmdW5jdGlvbiAoKSB7XG4gIGxvYWRQcm9qZWN0c1ZpZXcoKTtcbiAgY2xpY2tIYW5kbGVyQnRuTmV3SXRlbSgpO1xufSkoKTtcbiIsImNvbnN0IGJyZWFkY3J1bWJOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJyZWFkY3J1bWItbmF2XCIpO1xuXG5leHBvcnQgY29uc3QgcmVuZGVyQnJlYWRjcnVtYk5hdiA9IGZ1bmN0aW9uIChtb2RlLCBjdXJyZW50UHJvamVjdCkge1xuICBpZiAobW9kZSA9PT0gXCJwcm9qZWN0c1ZpZXdcIikge1xuICAgIGJyZWFkY3J1bWJOYXYuZm9yRWFjaCgoZWxlbWVudCkgPT4gKGVsZW1lbnQuaW5uZXJIVE1MID0gYGApKTtcbiAgICBicmVhZGNydW1iTmF2LmZvckVhY2goXG4gICAgICAoZWxlbWVudCkgPT5cbiAgICAgICAgKGVsZW1lbnQuaW5uZXJIVE1MID0gYFxuICA8c3BhbiBjbGFzcz1cImFsbC1wcm9qZWN0c1wiPkFsbCBQcm9qZWN0czwvc3Bhbj5cbiAgPHNwYW4gY2xhc3M9XCJzZXBhcmF0b3JcIj4+PC9zcGFuPlxuICBgKVxuICAgICk7XG4gIH1cblxuICBpZiAobW9kZSA9PT0gXCJ0YXNrc1ZpZXdcIikge1xuICAgIGJyZWFkY3J1bWJOYXYuZm9yRWFjaCgoZWxlbWVudCkgPT4gKGVsZW1lbnQuaW5uZXJIVE1MID0gYGApKTtcbiAgICBicmVhZGNydW1iTmF2LmZvckVhY2goXG4gICAgICAoZWxlbWVudCkgPT5cbiAgICAgICAgKGVsZW1lbnQuaW5uZXJIVE1MID0gYFxuICA8YnV0dG9uIGNsYXNzPVwiYnRuLXZpZXctYWxsLXByb2plY3RzXCI+QWxsIFByb2plY3RzPC9idXR0b24+XG4gIDxzcGFuIGNsYXNzPVwic2VwYXJhdG9yXCI+Pjwvc3Bhbj5cbiAgPHNwYW4gY2xhc3M9XCJjdXJyZW50LXByb2plY3RcIj4ke2N1cnJlbnRQcm9qZWN0LnRpdGxlfTwvc3Bhbj5cbiAgYClcbiAgICApO1xuICB9XG59O1xuIiwiZXhwb3J0IGNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihpZCwgdGl0bGUsIHRhc2tzKSB7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLnRhc2tzID0gdGFza3M7XG4gIH1cblxuICBhZGRUYXNrKHRhc2spIHtcbiAgICB0aGlzLnRhc2tzLnB1c2godGFzayk7XG4gIH1cblxuICBkZWxldGVUYXNrKHRhc2tJZCkge1xuICAgIGNvbnN0IHJlbWFpbmluZ1Rhc2tzID0gdGhpcy50YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2suaWQgIT09IHRhc2tJZCk7XG4gICAgdGhpcy50YXNrcyA9IHJlbWFpbmluZ1Rhc2tzO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCByZW5kZXJQcm9qZWN0Q2FyZCA9IGZ1bmN0aW9uIChwcm9qZWN0KSB7XG4gIGNvbnN0IHJlbmRlclByb2plY3REZXRhaWxzID0gZnVuY3Rpb24gKHByb2plY3QpIHtcbiAgICBsZXQgdGFza0NvdW50ID0gMDtcbiAgICBwcm9qZWN0LnRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIGlmICh0YXNrLnN0YXR1cyA9PT0gXCJwZW5kaW5nXCIpIHRhc2tDb3VudCArPSAxO1xuICAgIH0pO1xuICAgIHJldHVybiBgJHt0YXNrQ291bnR9IHBlbmRpbmcgdGFza3NgO1xuICB9O1xuXG4gIGNvbnN0IHByb2plY3RDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJvamVjdENhcmQuY2xhc3NOYW1lID0gXCJwcm9qZWN0LWNhcmRcIjtcbiAgcHJvamVjdENhcmQuZGF0YXNldC5wcm9qZWN0SWQgPSBwcm9qZWN0LmlkO1xuICBwcm9qZWN0Q2FyZC5pbm5lckhUTUwgPSBgXG4gIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWhlYWRlclwiPlxuICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWhlYWRlci1sZWZ0XCI+XG4gICAgICA8aW5wdXQgY2xhc3M9XCJpbnB1dC1wcm9qZWN0LXRpdGxlXCIgdmFsdWU9XCIke1xuICAgICAgICBwcm9qZWN0LnRpdGxlXG4gICAgICB9XCIgbWF4bGVuZ3RoPVwiMjhcIi8+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInByb2plY3QtaGVhZGVyLXJpZ2h0XCI+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuLXByb2plY3QtbW92ZS1kb3duXCI+4ZCvPC9idXR0b24+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuLXByb2plY3QtbW92ZS11cFwiPuGQsTwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bi1wcm9qZWN0LWRlbGV0ZVwiPlg8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWRldGFpbHNcIj5cbiAgICA8ZGl2PlxuICAgICAgJHtyZW5kZXJQcm9qZWN0RGV0YWlscyhwcm9qZWN0KX1cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIGA7XG5cbiAgcmV0dXJuIHByb2plY3RDYXJkO1xufTtcbiIsImV4cG9ydCBjbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBzdGF0dXMsIHByaW9yaXR5LCBpbnB1dFN0YXR1cykge1xuICAgIHRoaXMuaWQgPSBgVCR7bmV3IERhdGUoKS5nZXRUaW1lKCl9YDtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMuaW5wdXRTdGF0dXMgPSBpbnB1dFN0YXR1cztcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgcmVuZGVyVGFza0NhcmQgPSBmdW5jdGlvbiAodGFzaykge1xuICBjb25zdCB0YXNrQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRhc2tDYXJkLmNsYXNzTmFtZSA9IFwidGFzay1jYXJkXCI7XG4gIHRhc2tDYXJkLmRhdGFzZXQudGFza0lkID0gdGFzay5pZDtcbiAgdGFza0NhcmQuY2xhc3NMaXN0LmFkZChgJHt0YXNrLnN0YXR1c31gKTtcbiAgdGFza0NhcmQuaW5uZXJIVE1MID0gYFxuICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWhlYWRlciAke3Rhc2suc3RhdHVzfVwiPlxuICAgICAgPGRpdiBjbGFzcz1cInRhc2staGVhZGVyLWxlZnRcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bi10YXNrLXN0YXR1cyAke3Rhc2suc3RhdHVzfVwiPjwvYnV0dG9uPlxuICAgICAgICA8aW5wdXQgY2xhc3M9XCJpbnB1dC10YXNrLXRpdGxlICR7dGFzay5zdGF0dXN9XCIgdmFsdWU9XCIke3Rhc2sudGl0bGV9XCIgICR7dGFzay5pbnB1dFN0YXR1c30vPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwidGFzay1oZWFkZXItcmlnaHRcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bi10YXNrLW1vdmUtZG93blwiPuGQrzwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuLXRhc2stbW92ZS11cFwiPuGQsTwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuLXRhc2stZGVsZXRlXCI+WDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInRhc2stZGV0YWlscyAke3Rhc2suc3RhdHVzfVwiPlxuICAgICAgPHRleHRhcmVhIGNsYXNzPVwiaW5wdXQtdGFzay1kZXNjcmlwdGlvbiAke3Rhc2suc3RhdHVzfVwiIG5hbWU9XCJ0YXNrLWRlc2NyaXB0aW9uXCIgJHt0YXNrLmlucHV0U3RhdHVzfT4ke3Rhc2suZGVzY3JpcHRpb259PC90ZXh0YXJlYT5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWJvdHRvbS1yb3dcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgY2xhc3M9XCJpbnB1dC10YXNrLWR1ZS1kYXRlXCIgdmFsdWU9XCIke3Rhc2suZHVlRGF0ZX1cIiAke3Rhc2suaW5wdXRTdGF0dXN9Lz5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bi10YXNrLW9wdGlvbnNcIj4uLi48L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgO1xuXG4gIHJldHVybiB0YXNrQ2FyZDtcbn07XG4iLCJpbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL2luZGV4XCI7XG5pbXBvcnQgeyBzYXZlVG9Mb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2VcIjtcblxuY29uc3QgYXV0b1NhdmVQcm9qZWN0VGl0bGVDaGFuZ2VzID0gZnVuY3Rpb24gKHByb2plY3RJZCwgdGl0bGUpIHtcbiAgcHJvamVjdHNbcHJvamVjdElkXS50aXRsZSA9IHRpdGxlLnZhbHVlO1xuICBzYXZlVG9Mb2NhbFN0b3JhZ2UoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBpbnB1dEhhbmRsZXJQcm9qZWN0VGl0bGUgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHByb2plY3RUaXRsZXNOTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaW5wdXQtcHJvamVjdC10aXRsZVwiKTtcblxuICBpZiAoIXByb2plY3RUaXRsZXNOTCkgcmV0dXJuO1xuXG4gIHByb2plY3RUaXRsZXNOTC5mb3JFYWNoKCh0aXRsZSkgPT5cbiAgICB0aXRsZS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcbiAgICAgIGNvbnN0IHByb2plY3RJZCA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIucHJvamVjdC1jYXJkXCIpLmRhdGFzZXQucHJvamVjdElkO1xuICAgICAgYXV0b1NhdmVQcm9qZWN0VGl0bGVDaGFuZ2VzKHByb2plY3RJZCwgdGl0bGUpO1xuICAgIH0pXG4gICk7XG59O1xuXG5jb25zdCB0b2dnbGVUYXNrRWxlbWVudHNPblN0YXR1c0NoYW5nZSA9IGZ1bmN0aW9uIChidXR0b24pIHtcbiAgYnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJjb21wbGV0ZWRcIik7XG4gIGJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwicGVuZGluZ1wiKTtcblxuICBjb25zdCB0YXNrQ2FyZEVsID0gYnV0dG9uLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICBjb25zdCB0YXNrSGVhZGVyRWwgPSB0YXNrQ2FyZEVsLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1oZWFkZXJcIik7XG4gIGNvbnN0IHRhc2tUaXRsZUlucHV0RWwgPSB0YXNrQ2FyZEVsLnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXQtdGFzay10aXRsZVwiKTtcbiAgY29uc3QgdGFza0RldGFpbHNFbCA9IHRhc2tDYXJkRWwucXVlcnlTZWxlY3RvcihcIi50YXNrLWRldGFpbHNcIik7XG4gIGNvbnN0IHRhc2tEZXNjcmlwdGlvbkVsID0gdGFza0NhcmRFbC5xdWVyeVNlbGVjdG9yKFwiLmlucHV0LXRhc2stZGVzY3JpcHRpb25cIik7XG4gIGNvbnN0IHRhc2tEdWVEYXRlRWwgPSB0YXNrQ2FyZEVsLnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXQtdGFzay1kdWUtZGF0ZVwiKTtcblxuICB0YXNrQ2FyZEVsLmNsYXNzTGlzdC50b2dnbGUoXCJjb21wbGV0ZWRcIik7XG4gIHRhc2tDYXJkRWwuY2xhc3NMaXN0LnRvZ2dsZShcInBlbmRpbmdcIik7XG4gIHRhc2tIZWFkZXJFbC5jbGFzc0xpc3QudG9nZ2xlKFwiY29tcGxldGVkXCIpO1xuICB0YXNrSGVhZGVyRWwuY2xhc3NMaXN0LnRvZ2dsZShcInBlbmRpbmdcIik7XG4gIHRhc2tUaXRsZUlucHV0RWwuY2xhc3NMaXN0LnRvZ2dsZShcImNvbXBsZXRlZFwiKTtcbiAgdGFza1RpdGxlSW5wdXRFbC5jbGFzc0xpc3QudG9nZ2xlKFwicGVuZGluZ1wiKTtcbiAgdGFza0RldGFpbHNFbC5jbGFzc0xpc3QudG9nZ2xlKFwiY29tcGxldGVkXCIpO1xuICB0YXNrRGV0YWlsc0VsLmNsYXNzTGlzdC50b2dnbGUoXCJwZW5kaW5nXCIpO1xuICB0YXNrRGV0YWlsc0VsLmNsYXNzTGlzdC5yZW1vdmUoXCJ2aXNpYmxlXCIpO1xuICB0YXNrRGVzY3JpcHRpb25FbC5jbGFzc0xpc3QudG9nZ2xlKFwiY29tcGxldGVkXCIpO1xuICB0YXNrRGVzY3JpcHRpb25FbC5jbGFzc0xpc3QudG9nZ2xlKFwicGVuZGluZ1wiKTtcblxuICB0YXNrVGl0bGVJbnB1dEVsLmRpc2FibGVkID0gIXRhc2tUaXRsZUlucHV0RWwuZGlzYWJsZWQ7XG4gIHRhc2tEZXNjcmlwdGlvbkVsLmRpc2FibGVkID0gIXRhc2tEZXNjcmlwdGlvbkVsLmRpc2FibGVkO1xuICB0YXNrRHVlRGF0ZUVsLmRpc2FibGVkID0gIXRhc2tEdWVEYXRlRWwuZGlzYWJsZWQ7XG59O1xuXG5jb25zdCBhdXRvU2F2ZVRhc2tTdGF0dXNDaGFuZ2VzID0gZnVuY3Rpb24gKHRhcmdldFByb2plY3QsIHRhc2tJZCwgYnV0dG9uKSB7XG4gIHRhcmdldFByb2plY3QudGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIGlmICh0YXNrLmlkID09PSB0YXNrSWQpIHtcbiAgICAgIHRhc2suc3RhdHVzID09PSBcInBlbmRpbmdcIlxuICAgICAgICA/ICh0YXNrLnN0YXR1cyA9IFwiY29tcGxldGVkXCIpXG4gICAgICAgIDogKHRhc2suc3RhdHVzID0gXCJwZW5kaW5nXCIpO1xuXG4gICAgICB0YXNrLmlucHV0U3RhdHVzID09PSBcImVuYWJsZWRcIlxuICAgICAgICA/ICh0YXNrLmlucHV0U3RhdHVzID0gXCJkaXNhYmxlZFwiKVxuICAgICAgICA6ICh0YXNrLmlucHV0U3RhdHVzID0gXCJlbmFibGVkXCIpO1xuXG4gICAgICBidXR0b24uYmx1cigpO1xuXG4gICAgICB0b2dnbGVUYXNrRWxlbWVudHNPblN0YXR1c0NoYW5nZShidXR0b24pO1xuXG4gICAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGNsaWNrSGFuZGxlckJ0blRhc2tTdGF0dXMgPSBmdW5jdGlvbiAodGFyZ2V0UHJvamVjdCkge1xuICBjb25zdCBidG5UYXNrUGVuZGluZ05MID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5idG4tdGFzay1zdGF0dXNcIik7XG4gIGJ0blRhc2tQZW5kaW5nTkwuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgY29uc3QgdGFza0lkID0gZS50YXJnZXQuY2xvc2VzdChcIi50YXNrLWNhcmRcIikuZGF0YXNldC50YXNrSWQ7XG4gICAgICBhdXRvU2F2ZVRhc2tTdGF0dXNDaGFuZ2VzKHRhcmdldFByb2plY3QsIHRhc2tJZCwgYnV0dG9uKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3QgYXV0b1NhdmVUYXNrVGl0bGVDaGFuZ2VzID0gZnVuY3Rpb24gKHRhcmdldFByb2plY3QsIHRhc2tJZCwgdGFza1RpdGxlKSB7XG4gIHRhcmdldFByb2plY3QudGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIGlmICh0YXNrLmlkID09PSB0YXNrSWQpIHRhc2sudGl0bGUgPSB0YXNrVGl0bGUudmFsdWU7XG4gICAgc2F2ZVRvTG9jYWxTdG9yYWdlKCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGlucHV0SGFuZGxlclRhc2tUaXRsZSA9IGZ1bmN0aW9uICh0YXJnZXRQcm9qZWN0KSB7XG4gIGNvbnN0IHRhc2tUaXRsZXNOTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaW5wdXQtdGFzay10aXRsZVwiKTtcblxuICBpZiAoIXRhc2tUaXRsZXNOTCkgcmV0dXJuO1xuXG4gIHRhc2tUaXRsZXNOTC5mb3JFYWNoKCh0aXRsZSkgPT5cbiAgICB0aXRsZS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcbiAgICAgIGNvbnN0IHRhc2tJZCA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIudGFzay1jYXJkXCIpLmRhdGFzZXQudGFza0lkO1xuICAgICAgYXV0b1NhdmVUYXNrVGl0bGVDaGFuZ2VzKHRhcmdldFByb2plY3QsIHRhc2tJZCwgdGl0bGUpO1xuICAgIH0pXG4gICk7XG59O1xuXG5jb25zdCBhdXRvU2F2ZVRhc2tEZXNjcmlwdGlvbkNoYW5nZXMgPSBmdW5jdGlvbiAoXG4gIHRhcmdldFByb2plY3QsXG4gIHRhc2tJZCxcbiAgdGFza0Rlc2NyaXB0aW9uRWxcbikge1xuICB0YXJnZXRQcm9qZWN0LnRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICBpZiAodGFzay5pZCA9PT0gdGFza0lkKSB0YXNrLmRlc2NyaXB0aW9uID0gdGFza0Rlc2NyaXB0aW9uRWwudmFsdWU7XG4gICAgc2F2ZVRvTG9jYWxTdG9yYWdlKCk7XG4gIH0pO1xufTtcblxuY29uc3QgYXV0b0FkanVzdEhlaWdodCA9IGZ1bmN0aW9uICh0YXNrRGVzY3JpcHRpb25FbCkge1xuICB0YXNrRGVzY3JpcHRpb25FbC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCAoKSA9PiB7XG4gICAgdGFza0Rlc2NyaXB0aW9uRWwuc3R5bGUuaGVpZ2h0ID0gXCJcIjtcbiAgICB0YXNrRGVzY3JpcHRpb25FbC5zdHlsZS5oZWlnaHQgPSB0YXNrRGVzY3JpcHRpb25FbC5zY3JvbGxIZWlnaHQgKyBcInB4XCI7XG4gIH0pO1xuXG4gIHRhc2tEZXNjcmlwdGlvbkVsLmZvY3VzKCk7XG4gIHRhc2tEZXNjcmlwdGlvbkVsLmJsdXIoKTtcblxuICB0YXNrRGVzY3JpcHRpb25FbC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcbiAgICB0YXNrRGVzY3JpcHRpb25FbC5zdHlsZS5oZWlnaHQgPSBcIlwiO1xuICAgIHRhc2tEZXNjcmlwdGlvbkVsLnN0eWxlLmhlaWdodCA9IHRhc2tEZXNjcmlwdGlvbkVsLnNjcm9sbEhlaWdodCArIFwicHhcIjtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgaW5wdXRIYW5kbGVyVGFza0Rlc2NyaXB0aW9uID0gZnVuY3Rpb24gKHRhcmdldFByb2plY3QpIHtcbiAgY29uc3QgdGFza0Rlc2NyaXB0aW9uc05MID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICBcIi5pbnB1dC10YXNrLWRlc2NyaXB0aW9uXCJcbiAgKTtcblxuICBpZiAoIXRhc2tEZXNjcmlwdGlvbnNOTCkgcmV0dXJuO1xuXG4gIHRhc2tEZXNjcmlwdGlvbnNOTC5mb3JFYWNoKCh0YXNrRGVzY3JpcHRpb25FbCkgPT4ge1xuICAgIGF1dG9BZGp1c3RIZWlnaHQodGFza0Rlc2NyaXB0aW9uRWwpO1xuXG4gICAgdGFza0Rlc2NyaXB0aW9uRWwuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XG4gICAgICBjb25zdCB0YXNrSWQgPSBlLnRhcmdldC5jbG9zZXN0KFwiLnRhc2stY2FyZFwiKS5kYXRhc2V0LnRhc2tJZDtcbiAgICAgIGF1dG9TYXZlVGFza0Rlc2NyaXB0aW9uQ2hhbmdlcyh0YXJnZXRQcm9qZWN0LCB0YXNrSWQsIHRhc2tEZXNjcmlwdGlvbkVsKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCBhdXRvU2F2ZVRhc2tEdWVEYXRlQ2hhbmdlcyA9IGZ1bmN0aW9uIChcbiAgdGFyZ2V0UHJvamVjdCxcbiAgdGFza0lkLFxuICB0YXNrRHVlRGF0ZVxuKSB7XG4gIHRhcmdldFByb2plY3QudGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIGlmICh0YXNrLmlkID09PSB0YXNrSWQpIHRhc2suZHVlRGF0ZSA9IHRhc2tEdWVEYXRlLnZhbHVlO1xuICAgIHNhdmVUb0xvY2FsU3RvcmFnZSgpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBpbnB1dEhhbmRsZXJUYXNrRHVlRGF0ZSA9IGZ1bmN0aW9uICh0YXJnZXRQcm9qZWN0KSB7XG4gIGNvbnN0IHRhc2tEdWVEYXRlTkwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmlucHV0LXRhc2stZHVlLWRhdGVcIik7XG5cbiAgaWYgKCF0YXNrRHVlRGF0ZU5MKSByZXR1cm47XG5cbiAgdGFza0R1ZURhdGVOTC5mb3JFYWNoKChkdWVEYXRlKSA9PlxuICAgIGR1ZURhdGUuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XG4gICAgICBjb25zdCB0YXNrSWQgPSBlLnRhcmdldC5jbG9zZXN0KFwiLnRhc2stY2FyZFwiKS5kYXRhc2V0LnRhc2tJZDtcbiAgICAgIGF1dG9TYXZlVGFza0R1ZURhdGVDaGFuZ2VzKHRhcmdldFByb2plY3QsIHRhc2tJZCwgZHVlRGF0ZSk7XG4gICAgfSlcbiAgKTtcbn07XG5cbmNvbnN0IHRvZ2dsZVRhc2tEZXRhaWxzID0gZnVuY3Rpb24gKHRhc2tDYXJkKSB7XG4gIGNvbnN0IHRhc2tEZXRhaWxzRWwgPSB0YXNrQ2FyZC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZGV0YWlsc1wiKTtcbiAgdGFza0RldGFpbHNFbC5jbGFzc0xpc3QudG9nZ2xlKFwidmlzaWJsZVwiKTtcbn07XG5cbmV4cG9ydCBjb25zdCBjbGlja0hhbmRsZXJDb21wbGV0ZWRUYXNrQ2FyZCA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgY29tcGxldGVkVGFza0NhcmROTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFzay1jYXJkXCIpO1xuICBjb21wbGV0ZWRUYXNrQ2FyZE5MLmZvckVhY2goKHRhc2tDYXJkKSA9PiB7XG4gICAgdGFza0NhcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRvZ2dsZVRhc2tEZXRhaWxzKHRhc2tDYXJkKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuIiwiaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi9pbmRleFwiO1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCB7IGRlbW9Qcm9qZWN0cyB9IGZyb20gXCIuL2RlbW9EYXRhXCI7XG5cbmV4cG9ydCBjb25zdCBzYXZlVG9Mb2NhbFN0b3JhZ2UgPSBmdW5jdGlvbiAoKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2FkRnJvbUxvY2FsU3RvcmFnZSA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3Qgc3RvcmVkUHJvamVjdHNKU09OID1cbiAgICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpIHx8IGRlbW9Qcm9qZWN0cztcblxuICBsZXQgcHJvamVjdHNXaXRoRnVuY3Rpb25zID0ge307XG4gIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHN0b3JlZFByb2plY3RzSlNPTikpIHtcbiAgICBwcm9qZWN0c1dpdGhGdW5jdGlvbnNba2V5XSA9IG5ldyBQcm9qZWN0KFxuICAgICAgdmFsdWUuaWQsXG4gICAgICB2YWx1ZS50aXRsZSxcbiAgICAgIHZhbHVlLnRhc2tzXG4gICAgKTtcbiAgfVxuICByZXR1cm4gcHJvamVjdHNXaXRoRnVuY3Rpb25zO1xufTtcbiIsImV4cG9ydCBsZXQgZGVtb1Byb2plY3RzID0ge1xuICBQMTY5NjgxMDUyNzYwMToge1xuICAgIGlkOiBcIlAxNjk2ODEwNTI3NjAxXCIsXG4gICAgdGl0bGU6IFwiSG9tZVwiLFxuICAgIHRhc2tzOiBbXG4gICAgICB7XG4gICAgICAgIGlkOiBcIlQxNjk2ODEwNTI3NjAxYVwiLFxuICAgICAgICBzdGF0dXM6IFwiY29tcGxldGVkXCIsXG4gICAgICAgIHRhc2tJZDogMTIzLFxuICAgICAgICB0aXRsZTogXCJ3YXNoIGNhclwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJ2YWN1dW0gaW50ZXJpb3IsIHdhc2ggZXh0ZXJpb3JcIixcbiAgICAgICAgZHVlRGF0ZTogXCIyMDIzLTA5LTI5XCIsXG4gICAgICAgIHByaW9yaXR5OiBcImxvd1wiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IFwiVDE2OTY4MTA1Mjc2MDFiXCIsXG4gICAgICAgIHN0YXR1czogXCJwZW5kaW5nXCIsXG4gICAgICAgIHRhc2tJZDogNDU2LFxuICAgICAgICB0aXRsZTogXCJwbGF5IHZpZGVvIGdhbWVzXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlplbGRhXCIsXG4gICAgICAgIGR1ZURhdGU6IFwiMjAyMy0xMC0wNVwiLFxuICAgICAgICBwcmlvcml0eTogXCJoaWdoXCIsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIFAxNjk2ODEwNTI3NjAyOiB7XG4gICAgaWQ6IFwiUDE2OTY4MTA1Mjc2MDJcIixcbiAgICB0aXRsZTogXCJTdHVkeVwiLFxuICAgIHRhc2tzOiBbXG4gICAgICB7XG4gICAgICAgIGlkOiBcIlQxNjk2ODEwNTI3NjAyYVwiLFxuICAgICAgICBzdGF0dXM6IFwiY29tcGxldGVkXCIsXG4gICAgICAgIHRhc2tJZDogMjM0LFxuICAgICAgICB0aXRsZTogXCJyZWFkIGFydGljbGUgb24gT09QXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgIFwiaHR0cHM6Ly93d3cuZWR1Y2F0aXZlLmlvL2Jsb2cvb2JqZWN0LW9yaWVudGVkLXByb2dyYW1taW5nXCIsXG4gICAgICAgIGR1ZURhdGU6IFwiMjAyMy0wOS0yOFwiLFxuICAgICAgICBwcmlvcml0eTogXCJoaWdoXCIsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIFAxNjk2ODEwNTI3NjAzOiB7XG4gICAgaWQ6IFwiUDE2OTY4MTA1Mjc2MDNcIixcbiAgICB0aXRsZTogXCJXb3JrXCIsXG4gICAgdGFza3M6IFtdLFxuICB9LFxufTtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvRWxlY3Ryb2xpemUtUmVndWxhci53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9mb250cy9RdWlja3NhbmQtTWVkaXVtLndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL1F1aWNrc2FuZC1Cb2xkLndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkVsZWN0cm9saXplXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJRdWlja3NhbmRcIjtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSkgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG46cm9vdC5kZWZhdWx0LXRoZW1lIHtcbiAgLS1tYWluLWNvbG9yOiBibGFjaztcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICAtLWJhY2tncm91bmQtY29sb3ItdHdvOiBsYXZlbmRlcmJsdXNoO1xuICAtLWFjY2VudC1jb2xvcjogc2FsbW9uO1xuICAtLWFjY2VudC1jb2xvci10d286IHdoaXRlO1xuICAtLWFjY2VudC1jb2xvci10aHJlZTogbGlnaHRwaW5rO1xuICAtLWFjdGl2ZS1jb2xvcjogdG9tYXRvO1xuICAtLWFjdGl2ZS1jb2xvci10d286IHdoaXRlO1xuICAtLWluYWN0aXZlLWNvbG9yOiBzaWx2ZXI7XG4gIC0tZGVmYXVsdC10aGlja25lc3M6IDJweDtcbn1cblxuaHRtbCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbiosXG4qOmJlZm9yZSxcbio6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBpbmhlcml0O1xuICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXG59XG5cbi5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICBtYXJnaW46IDBweDtcbn1cblxuYm9keSB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG4gIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luOiAwcHg7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG5oZWFkZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDE7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3ItdHdvKTtcbiAgYm9yZGVyLWJvdHRvbTogdmFyKC0tZGVmYXVsdC10aGlja25lc3MpIHNvbGlkIHZhcigtLWFjY2VudC1jb2xvci10d28pO1xufVxuXG4uaGVhZGVyLXRvcC1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbmgxIHtcbiAgZm9udC1mYW1pbHk6IFwiRWxlY3Ryb2xpemVcIjtcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuXG5idXR0b246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbm5hdi50b3AtbmF2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbn1cblxubmF2LnRvcC1uYXYgYnV0dG9uIHtcbiAgd2lkdGg6IDYwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3ItdHdvKTtcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFjY2VudC1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiBtZWRpdW07XG4gIHBhZGRpbmc6IDdweCA4cHggNXB4O1xufVxuXG5uYXYudG9wLW5hdiBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yLXR3byk7XG59XG5cbm5hdi5icmVhZGNydW1iLW5hdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICBwYWRkaW5nOiA1cHggMTBweCAwcHg7XG4gIG1hcmdpbjogMHB4IDBweCAxMHB4O1xufVxuXG5zcGFuIHtcbiAgcGFkZGluZzogMHB4IDEwcHggMHB4O1xufVxuXG5zcGFuLmFsbC1wcm9qZWN0cyB7XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLXR3byk7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xuICBsZXR0ZXItc3BhY2luZzogMC4yM3B4O1xuICBwYWRkaW5nOiAzcHggNnB4IDNweDtcbn1cblxuc3Bhbi5jdXJyZW50LXByb2plY3Qge1xuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIHBhZGRpbmc6IDNweCA2cHggM3B4O1xufVxuXG5idXR0b24uYnRuLXZpZXctYWxsLXByb2plY3RzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yLXR3byk7XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3ItdHdvKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LWZhbWlseTogXCJRdWlja3NhbmRcIjtcbiAgZm9udC1zaXplOiBtZWRpdW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG4gIHBhZGRpbmc6IDNweCA2cHggM3B4O1xufVxuXG5idXR0b24uYnRuLXZpZXctYWxsLXByb2plY3RzOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLWFjdGl2ZS1jb2xvcik7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWFjdGl2ZS1jb2xvcik7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XG59XG5cbmJ1dHRvbi5idG4tdmlldy1hbGwtcHJvamVjdHM6OmFmdGVyIHtcbiAgaGVpZ2h0OiAwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbm1haW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDA7XG5cbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICBwYWRkaW5nOiAxNXB4O1xuICBwYWRkaW5nLXRvcDogMTEwcHg7XG59XG5cbi5pdGVtLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWJvdHRvbTogODBweDtcbn1cblxuLnByb2plY3QtY2FyZCxcbi50YXNrLWNhcmQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZsZXg6IDE7XG4gIGJvcmRlcjogdmFyKC0tZGVmYXVsdC10aGlja25lc3MpIHNvbGlkIHZhcigtLWFjY2VudC1jb2xvci10aHJlZSk7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIG1hcmdpbjogMHB4IDBweCAyMHB4O1xufVxuXG4ucHJvamVjdC1oZWFkZXIsXG4udGFzay1oZWFkZXIge1xuICBoZWlnaHQ6IDQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yLXRocmVlKTtcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvci10d28pO1xuICBmb250LWZhbWlseTogXCJRdWlja3NhbmRcIjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgcGFkZGluZzogNXB4IDVweCA2cHggNXB4O1xufVxuXG4ucHJvamVjdC1oZWFkZXI6aG92ZXIgLmlucHV0LXByb2plY3QtdGl0bGUsXG4udGFzay1oZWFkZXI6aG92ZXIgLmlucHV0LXRhc2stdGl0bGUge1xuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG59XG5cbi50YXNrLWhlYWRlci5jb21wbGV0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbmFjdGl2ZS1jb2xvcik7XG59XG5cbi50YXNrLWRldGFpbHMuY29tcGxldGVkIHtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxLjVzIGVhc2U7XG4gIG9wYWNpdHk6IDA7XG4gIGhlaWdodDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnRhc2stZGV0YWlscy5wZW5kaW5nLFxuLnRhc2stZGV0YWlscy5jb21wbGV0ZWQudmlzaWJsZSB7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMS41cyBlYXNlO1xuICBvcGFjaXR5OiAxO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi8qIFRoaXMgcnVsZSBpcyByZXF1aXJlZCBmb3IgY2xpY2sgZXZlbnRzIG9uIGRpc2FibGVkIGlucHV0IGVsZW1lbnRzIHRvIHByb3BhZ2F0ZSB1cHdhcmRzIG9uIHNvbWUgYnJvd3NlcnMgKi9cbmlucHV0W2Rpc2FibGVkXSB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG5pbnB1dC5pbnB1dC10YXNrLXRpdGxlLmNvbXBsZXRlZCB7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xufVxuXG4udGFzay1jYXJkLmNvbXBsZXRlZCB7XG4gIGJvcmRlcjogdmFyKC0tZGVmYXVsdC10aGlja25lc3MpIHNvbGlkIHZhcigtLWluYWN0aXZlLWNvbG9yKTtcbn1cblxuYnV0dG9uLmJ0bi1zYXZlLXByb2plY3QsXG5idXR0b24uYnRuLXNhdmUtdGFzayB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvci10d28pO1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1tYWluLWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiA1cHggOHB4IDVweDtcbn1cblxuaW5wdXQuaW5wdXQtcHJvamVjdC10aXRsZSxcbmlucHV0LmlucHV0LXRhc2stdGl0bGUge1xuICBmbGV4OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yLXR3byk7XG4gIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiO1xuICBmb250LXNpemU6IG1lZGl1bTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuaW5wdXQuaW5wdXQtcHJvamVjdC10aXRsZTpmb2N1cyxcbmlucHV0LmlucHV0LXRhc2stdGl0bGU6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xufVxuXG4ucHJvamVjdC1oZWFkZXItbGVmdCxcbi50YXNrLWhlYWRlci1sZWZ0IHtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuYnV0dG9uLmJ0bi10YXNrLXN0YXR1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItdHdvKTtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IGxhcmdlO1xuICBwYWRkaW5nOiAwcHggNnB4IDBweDtcbn1cblxuYnV0dG9uLmJ0bi10YXNrLXN0YXR1cy5wZW5kaW5nOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwi44CHXCI7XG59XG5cbmJ1dHRvbi5idG4tdGFzay1zdGF0dXMuY29tcGxldGVkOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwi4peJXCI7XG59XG5cbi5wcm9qZWN0LWhlYWRlcjpmb2N1cy13aXRoaW4sXG4udGFzay1oZWFkZXI6Zm9jdXMtd2l0aGluIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbn1cblxuLnRhc2stdGl0bGUuY29tcGxldGVkIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yLXR3byk7XG4gIHRleHQtZGVjb3JhdGlvbi10aGlja25lc3M6IDJweDtcbn1cblxuLnRhc2staGVhZGVyLXJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA2cHg7XG59XG5cbmJ1dHRvbi5idG4tcHJvamVjdC1tb3ZlLWRvd24sXG5idXR0b24uYnRuLXByb2plY3QtbW92ZS11cCxcbmJ1dHRvbi5idG4tdGFzay1tb3ZlLWRvd24sXG5idXR0b24uYnRuLXRhc2stbW92ZS11cCxcbmJ1dHRvbi5idG4tcHJvamVjdC1kZWxldGUsXG5idXR0b24uYnRuLXRhc2stZGVsZXRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LXRocmVlKTtcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvci10d28pO1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHBhZGRpbmc6IDBweCAxMHB4O1xufVxuXG5idXR0b24uYnRuLXByb2plY3QtbW92ZS1kb3duOmhvdmVyLFxuYnV0dG9uLmJ0bi1wcm9qZWN0LW1vdmUtdXA6aG92ZXIsXG5idXR0b24uYnRuLXRhc2stbW92ZS1kb3duOmhvdmVyLFxuYnV0dG9uLmJ0bi10YXNrLW1vdmUtdXA6aG92ZXIsXG5idXR0b24uYnRuLXByb2plY3QtZGVsZXRlOmhvdmVyLFxuYnV0dG9uLmJ0bi10YXNrLWRlbGV0ZTpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcbn1cblxuLnByb2plY3QtZGV0YWlscyA+IGRpdixcbi50YXNrLWRldGFpbHMgPiBkaXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItdHdvKTtcbiAgZm9udC1zaXplOiBtZWRpdW07XG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggOXB4IDlweDtcbiAgcGFkZGluZzogMTBweCAxNXB4IDEwcHg7XG59XG5cbi50YXNrLWRldGFpbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbnRleHRhcmVhLmlucHV0LXRhc2stZGVzY3JpcHRpb24ge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yLXR3byk7XG4gIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiBtZWRpdW07XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgcmVzaXplOiBub25lO1xuICBwYWRkaW5nOiAxMHB4IDE1cHggMTBweDtcbn1cblxudGV4dGFyZWEuaW5wdXQtdGFzay1kZXNjcmlwdGlvbi5jb21wbGV0ZWQge1xuICBjb2xvcjogZ3JheTtcbn1cblxuLnByb2plY3QtZGV0YWlscyA+IC50YXNrLWJvdHRvbS1yb3csXG4udGFzay1kZXRhaWxzID4gLnRhc2stYm90dG9tLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogNDBweDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLXR3byk7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggOXB4IDlweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuaW5wdXQuaW5wdXQtdGFzay1kdWUtZGF0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3ItdHdvKTtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYWNjZW50LWNvbG9yLXRocmVlKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiAycHg7XG59XG5cbmlucHV0W2Rpc2FibGVkXS5pbnB1dC10YXNrLWR1ZS1kYXRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWluYWN0aXZlLWNvbG9yKTtcbn1cblxuYnV0dG9uLmJ0bi10YXNrLW9wdGlvbnMge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC10aHJlZSk7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG5idXR0b24uYnRuLW5ldy1pdGVtIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDUwcHg7XG4gIHJpZ2h0OiAyMHB4O1xuICBmb250LXNpemU6IHh4LWxhcmdlO1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3ItdHdvKTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvci10d28pO1xuICBwYWRkaW5nOiAwcHggMTBweCAwcHg7XG59XG5cbmZvb3RlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbmZvb3RlciBhIHtcbiAgZm9udC1mYW1pbHk6IFwiRWxlY3Ryb2xpemVcIjtcbiAgY29sb3I6IGdyYXk7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSwwQkFBMEI7RUFDMUIsMkRBQTJEO0VBQzNELGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsMkRBQXdEO0VBQ3hELGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsMkRBQXNEO0VBQ3RELGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLHFDQUFxQztFQUNyQyxzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLCtCQUErQjtFQUMvQixzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLHdCQUF3QjtFQUN4Qix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTs7O0VBR0UsbUJBQW1CO0VBQ25CLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTs7Ozs7O0VBTUUsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHlDQUF5QztFQUN6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RUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIseUNBQXlDO0VBQ3pDLG1CQUFtQjtFQUNuQixxQ0FBcUM7RUFDckMsOEJBQThCO0VBQzlCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsV0FBVztFQUNYLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsMkJBQTJCO0VBQzNCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixXQUFXO0FBQ2JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkVsZWN0cm9saXplXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuL2ZvbnRzL0VsZWN0cm9saXplLVJlZ3VsYXIud29mZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlF1aWNrc2FuZFxcXCI7XFxuICBzcmM6IHVybChcXFwiLi9mb250cy9RdWlja3NhbmQtTWVkaXVtLndvZmZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJRdWlja3NhbmRcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4vZm9udHMvUXVpY2tzYW5kLUJvbGQud29mZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuOnJvb3QuZGVmYXVsdC10aGVtZSB7XFxuICAtLW1haW4tY29sb3I6IGJsYWNrO1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yLXR3bzogbGF2ZW5kZXJibHVzaDtcXG4gIC0tYWNjZW50LWNvbG9yOiBzYWxtb247XFxuICAtLWFjY2VudC1jb2xvci10d286IHdoaXRlO1xcbiAgLS1hY2NlbnQtY29sb3ItdGhyZWU6IGxpZ2h0cGluaztcXG4gIC0tYWN0aXZlLWNvbG9yOiB0b21hdG87XFxuICAtLWFjdGl2ZS1jb2xvci10d286IHdoaXRlO1xcbiAgLS1pbmFjdGl2ZS1jb2xvcjogc2lsdmVyO1xcbiAgLS1kZWZhdWx0LXRoaWNrbmVzczogMnB4O1xcbn1cXG5cXG5odG1sIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDBweDtcXG4gIHBhZGRpbmc6IDBweDtcXG59XFxuXFxuKixcXG4qOmJlZm9yZSxcXG4qOmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxuICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYge1xcbiAgbWFyZ2luOiAwcHg7XFxufVxcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJRdWlja3NhbmRcXFwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG4gIG1hcmdpbjogMHB4O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbmhlYWRlciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IDE7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3ItdHdvKTtcXG4gIGJvcmRlci1ib3R0b206IHZhcigtLWRlZmF1bHQtdGhpY2tuZXNzKSBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3ItdHdvKTtcXG59XFxuXFxuLmhlYWRlci10b3Atcm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG5oMSB7XFxuICBmb250LWZhbWlseTogXFxcIkVsZWN0cm9saXplXFxcIjtcXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZy10b3A6IDVweDtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxubmF2LnRvcC1uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxubmF2LnRvcC1uYXYgYnV0dG9uIHtcXG4gIHdpZHRoOiA2MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci10d28pO1xcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZm9udC1zaXplOiBtZWRpdW07XFxuICBwYWRkaW5nOiA3cHggOHB4IDVweDtcXG59XFxuXFxubmF2LnRvcC1uYXYgYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yLXR3byk7XFxufVxcblxcbm5hdi5icmVhZGNydW1iLW5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbiAgcGFkZGluZzogNXB4IDEwcHggMHB4O1xcbiAgbWFyZ2luOiAwcHggMHB4IDEwcHg7XFxufVxcblxcbnNwYW4ge1xcbiAgcGFkZGluZzogMHB4IDEwcHggMHB4O1xcbn1cXG5cXG5zcGFuLmFsbC1wcm9qZWN0cyB7XFxuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJhY2tncm91bmQtY29sb3ItdHdvKTtcXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMjNweDtcXG4gIHBhZGRpbmc6IDNweCA2cHggM3B4O1xcbn1cXG5cXG5zcGFuLmN1cnJlbnQtcHJvamVjdCB7XFxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxuICBmb250LXNpemU6IGxhcmdlO1xcbiAgcGFkZGluZzogM3B4IDZweCAzcHg7XFxufVxcblxcbmJ1dHRvbi5idG4tdmlldy1hbGwtcHJvamVjdHMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yLXR3byk7XFxuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWFjY2VudC1jb2xvci10d28pO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJRdWlja3NhbmRcXFwiO1xcbiAgZm9udC1zaXplOiBtZWRpdW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxuICBwYWRkaW5nOiAzcHggNnB4IDNweDtcXG59XFxuXFxuYnV0dG9uLmJ0bi12aWV3LWFsbC1wcm9qZWN0czpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tYWN0aXZlLWNvbG9yKTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWFjdGl2ZS1jb2xvcik7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcXG59XFxuXFxuYnV0dG9uLmJ0bi12aWV3LWFsbC1wcm9qZWN0czo6YWZ0ZXIge1xcbiAgaGVpZ2h0OiAwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxubWFpbiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAwO1xcblxcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBwYWRkaW5nLXRvcDogMTEwcHg7XFxufVxcblxcbi5pdGVtLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmctYm90dG9tOiA4MHB4O1xcbn1cXG5cXG4ucHJvamVjdC1jYXJkLFxcbi50YXNrLWNhcmQge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZmxleDogMTtcXG4gIGJvcmRlcjogdmFyKC0tZGVmYXVsdC10aGlja25lc3MpIHNvbGlkIHZhcigtLWFjY2VudC1jb2xvci10aHJlZSk7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgbWFyZ2luOiAwcHggMHB4IDIwcHg7XFxufVxcblxcbi5wcm9qZWN0LWhlYWRlcixcXG4udGFzay1oZWFkZXIge1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItdGhyZWUpO1xcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvci10d28pO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJRdWlja3NhbmRcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBib3JkZXItcmFkaXVzOiA5cHg7XFxuICBwYWRkaW5nOiA1cHggNXB4IDZweCA1cHg7XFxufVxcblxcbi5wcm9qZWN0LWhlYWRlcjpob3ZlciAuaW5wdXQtcHJvamVjdC10aXRsZSxcXG4udGFzay1oZWFkZXI6aG92ZXIgLmlucHV0LXRhc2stdGl0bGUge1xcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbn1cXG5cXG4udGFzay1oZWFkZXIuY29tcGxldGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWluYWN0aXZlLWNvbG9yKTtcXG59XFxuXFxuLnRhc2stZGV0YWlscy5jb21wbGV0ZWQge1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxLjVzIGVhc2U7XFxuICBvcGFjaXR5OiAwO1xcbiAgaGVpZ2h0OiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLnRhc2stZGV0YWlscy5wZW5kaW5nLFxcbi50YXNrLWRldGFpbHMuY29tcGxldGVkLnZpc2libGUge1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxLjVzIGVhc2U7XFxuICBvcGFjaXR5OiAxO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKiBUaGlzIHJ1bGUgaXMgcmVxdWlyZWQgZm9yIGNsaWNrIGV2ZW50cyBvbiBkaXNhYmxlZCBpbnB1dCBlbGVtZW50cyB0byBwcm9wYWdhdGUgdXB3YXJkcyBvbiBzb21lIGJyb3dzZXJzICovXFxuaW5wdXRbZGlzYWJsZWRdIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG5pbnB1dC5pbnB1dC10YXNrLXRpdGxlLmNvbXBsZXRlZCB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLnRhc2stY2FyZC5jb21wbGV0ZWQge1xcbiAgYm9yZGVyOiB2YXIoLS1kZWZhdWx0LXRoaWNrbmVzcykgc29saWQgdmFyKC0taW5hY3RpdmUtY29sb3IpO1xcbn1cXG5cXG5idXR0b24uYnRuLXNhdmUtcHJvamVjdCxcXG5idXR0b24uYnRuLXNhdmUtdGFzayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItdHdvKTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLW1haW4tY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogNXB4IDhweCA1cHg7XFxufVxcblxcbmlucHV0LmlucHV0LXByb2plY3QtdGl0bGUsXFxuaW5wdXQuaW5wdXQtdGFzay10aXRsZSB7XFxuICBmbGV4OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItdHdvKTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUXVpY2tzYW5kXFxcIjtcXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXG59XFxuXFxuaW5wdXQuaW5wdXQtcHJvamVjdC10aXRsZTpmb2N1cyxcXG5pbnB1dC5pbnB1dC10YXNrLXRpdGxlOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbi5wcm9qZWN0LWhlYWRlci1sZWZ0LFxcbi50YXNrLWhlYWRlci1sZWZ0IHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuYnV0dG9uLmJ0bi10YXNrLXN0YXR1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvci10d28pO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1zaXplOiBsYXJnZTtcXG4gIHBhZGRpbmc6IDBweCA2cHggMHB4O1xcbn1cXG5cXG5idXR0b24uYnRuLXRhc2stc3RhdHVzLnBlbmRpbmc6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCLjgIdcXFwiO1xcbn1cXG5cXG5idXR0b24uYnRuLXRhc2stc3RhdHVzLmNvbXBsZXRlZDo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIuKXiVxcXCI7XFxufVxcblxcbi5wcm9qZWN0LWhlYWRlcjpmb2N1cy13aXRoaW4sXFxuLnRhc2staGVhZGVyOmZvY3VzLXdpdGhpbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbn1cXG5cXG4udGFzay10aXRsZS5jb21wbGV0ZWQge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICB0ZXh0LWRlY29yYXRpb24tY29sb3I6IHZhcigtLWFjY2VudC1jb2xvci10d28pO1xcbiAgdGV4dC1kZWNvcmF0aW9uLXRoaWNrbmVzczogMnB4O1xcbn1cXG5cXG4udGFzay1oZWFkZXItcmlnaHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNnB4O1xcbn1cXG5cXG5idXR0b24uYnRuLXByb2plY3QtbW92ZS1kb3duLFxcbmJ1dHRvbi5idG4tcHJvamVjdC1tb3ZlLXVwLFxcbmJ1dHRvbi5idG4tdGFzay1tb3ZlLWRvd24sXFxuYnV0dG9uLmJ0bi10YXNrLW1vdmUtdXAsXFxuYnV0dG9uLmJ0bi1wcm9qZWN0LWRlbGV0ZSxcXG5idXR0b24uYnRuLXRhc2stZGVsZXRlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC10aHJlZSk7XFxuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yLXR3byk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgcGFkZGluZzogMHB4IDEwcHg7XFxufVxcblxcbmJ1dHRvbi5idG4tcHJvamVjdC1tb3ZlLWRvd246aG92ZXIsXFxuYnV0dG9uLmJ0bi1wcm9qZWN0LW1vdmUtdXA6aG92ZXIsXFxuYnV0dG9uLmJ0bi10YXNrLW1vdmUtZG93bjpob3ZlcixcXG5idXR0b24uYnRuLXRhc2stbW92ZS11cDpob3ZlcixcXG5idXR0b24uYnRuLXByb2plY3QtZGVsZXRlOmhvdmVyLFxcbmJ1dHRvbi5idG4tdGFzay1kZWxldGU6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbn1cXG5cXG4ucHJvamVjdC1kZXRhaWxzID4gZGl2LFxcbi50YXNrLWRldGFpbHMgPiBkaXYge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yLXR3byk7XFxuICBmb250LXNpemU6IG1lZGl1bTtcXG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggOXB4IDlweDtcXG4gIHBhZGRpbmc6IDEwcHggMTVweCAxMHB4O1xcbn1cXG5cXG4udGFzay1kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG50ZXh0YXJlYS5pbnB1dC10YXNrLWRlc2NyaXB0aW9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yLXR3byk7XFxuICBmb250LWZhbWlseTogXFxcIlF1aWNrc2FuZFxcXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiBtZWRpdW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgcmVzaXplOiBub25lO1xcbiAgcGFkZGluZzogMTBweCAxNXB4IDEwcHg7XFxufVxcblxcbnRleHRhcmVhLmlucHV0LXRhc2stZGVzY3JpcHRpb24uY29tcGxldGVkIHtcXG4gIGNvbG9yOiBncmF5O1xcbn1cXG5cXG4ucHJvamVjdC1kZXRhaWxzID4gLnRhc2stYm90dG9tLXJvdyxcXG4udGFzay1kZXRhaWxzID4gLnRhc2stYm90dG9tLXJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3ItdHdvKTtcXG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggOXB4IDlweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbmlucHV0LmlucHV0LXRhc2stZHVlLWRhdGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci10d28pO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYWNjZW50LWNvbG9yLXRocmVlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBwYWRkaW5nOiAycHg7XFxufVxcblxcbmlucHV0W2Rpc2FibGVkXS5pbnB1dC10YXNrLWR1ZS1kYXRlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0taW5hY3RpdmUtY29sb3IpO1xcbn1cXG5cXG5idXR0b24uYnRuLXRhc2stb3B0aW9ucyB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IGxhcmdlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LXRocmVlKTtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbmJ1dHRvbi5idG4tbmV3LWl0ZW0ge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiA1MHB4O1xcbiAgcmlnaHQ6IDIwcHg7XFxuICBmb250LXNpemU6IHh4LWxhcmdlO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYWNjZW50LWNvbG9yLXR3byk7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItdHdvKTtcXG4gIHBhZGRpbmc6IDBweCAxMHB4IDBweDtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbmZvb3RlciBhIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRWxlY3Ryb2xpemVcXFwiO1xcbiAgY29sb3I6IGdyYXk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHQwOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=