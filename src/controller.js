import { Project } from "./project";
import { Task } from "./task";
import { getTheme, toggleTheme, renderProjectViewButtons, renderTaskViewButtons, clearProjectViewButtons, clearTaskViewButtons, renderBreadcrumbNav, clearItemContainer, renderAllProjects, renderTasks, showTaskViewButtons, showSortingMode, showTopOfPage, autoAdjustHeight,toggleTaskElements, clickHandlerCompletedTaskCard, getSortingMode, setSortingMode } from "./view"; // prettier-ignore
import { saveToLocalStorage, loadFromLocalStorage } from "./localStorage";
import { demoProjects } from "./demoData";

let projects = loadFromLocalStorage() || demoProjects;
let targetProject;
let view;

const loadProjectsView = function () {
  view = "projects";
  clearTaskViewButtons();
  renderProjectViewButtons();
  clickHandlerBtnNewItem();
  renderBreadcrumbNav(view);
  clearItemContainer();
  renderAllProjects(projects);
  inputHandlerProjectTitle();
  clickHandlerDivProjectDetails();
  clickHandlerBtnDeleteProject();
};

const loadTasksView = function (targetProject, sortCriteria) {
  view = "tasks";
  clearProjectViewButtons();
  renderTaskViewButtons();
  clickHandlerBtnNewItem();
  renderBreadcrumbNav(view, targetProject);
  clearItemContainer();
  renderTasks(targetProject.tasks, sortCriteria);
  showTaskViewButtons(targetProject);
  showSortingMode(sortCriteria);
  clickHandlerBtnSortByDueDate(targetProject);
  clickHandlerBtnSortByPriority(targetProject);
  clickHandlerBtnViewAllProjects();
  clickHandlerBtnBackToAllProjects();
  clickHandlerCompletedTaskCard();
  clickHandlerBtnTaskStatus(targetProject);
  inputHandlerTaskTitle(targetProject);
  clickHandlerBtnDeleteTask();
  inputHandlerTaskDescription(targetProject);
  inputHandlerTaskDueDate(targetProject);
  clickHandlerBtnTaskPriority(targetProject);
  showTopOfPage();
};

const createNewProject = function () {
  const project = new Project("", "", []);
  project.id = `P${new Date().getTime()}`;
  projects[project.id] = project;
  saveToLocalStorage();
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
  saveToLocalStorage();
  loadProjectsView();
};

const createNewTask = function () {
  const id = `T${new Date().getTime()}`;
  targetProject.addTask(
    new Task(id, "", "", "", "pending", "medium", "enabled")
  );
  saveToLocalStorage();
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
  saveToLocalStorage();
  loadTasksView(targetProject);
};

// Save functions triggered by inputs/edits

const autoSaveProjectTitleChanges = function (projectId, title) {
  projects[projectId].title = title.value;
  saveToLocalStorage();
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
    saveToLocalStorage();
  });
};

// prettier-ignore
const autoSaveTaskDescriptionChanges = function (targetProject, taskId, taskDescriptionEl) {
  targetProject.tasks.forEach((task) => {
    if (task.id === taskId) task.description = taskDescriptionEl.value;
    saveToLocalStorage();
  });
};

// prettier-ignore
const autoSaveTaskDueDateChanges = function (targetProject, taskId, taskDueDateEl) {
  targetProject.tasks.forEach((task) => {
    if (task.id === taskId) task.dueDate = taskDueDateEl.value;
    saveToLocalStorage();
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
    saveToLocalStorage()
    }
  });
};

const sortByDueDate = function (targetProject) {
  loadTasksView(targetProject, "dueDate");
  setSortingMode("dueDate");
};

const sortByPriority = function (targetProject) {
  loadTasksView(targetProject, "priority");
  setSortingMode("priority");
};

// Event handlers - Navigation

const clickHandlerDivProjectDetails = function () {
  const projectDetailsNL = document.querySelectorAll(".project-details");
  projectDetailsNL.forEach((projectDetail) => {
    projectDetail.addEventListener("click", () => {
      const projectCardId = projectDetail.parentElement.dataset.projectId;
      targetProject = projects[projectCardId];
      loadTasksView(targetProject, getSortingMode());
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
      toggleTaskElements(button);
      autoAdjustHeight(taskDescriptionEl);
      saveToLocalStorage();
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
    autoAdjustHeight(taskDescriptionEl);

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
  renderProjectViewButtons();
  clickHandlerBtnNewItem();
  getTheme();
  toggleTheme();
};

export { projects, initApp };
