import { renderBreadcrumbNav } from "./nav";
import { projects, Project, renderProjectCard } from "./project";
import { Task, renderTaskCard } from "./task";
import "./style.css";

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
  renderBreadcrumbNav("projectsView");
  unloadTaskForm();
  clearItemContainer();
  renderAllProjects(projects);
  clickHandlerDivProjectDetails();
  clickHandlerBtnProjectDelete();
};

const renderAllProjects = function (projects) {
  for (let [key, value] of Object.entries(projects)) {
    itemContainer.prepend(renderProjectCard(value));
  }
};

const loadTasksView = function (currentProject) {
  view = "tasks";
  renderBreadcrumbNav("tasksView", currentProject);
  unloadProjectForm();
  clearItemContainer();
  renderTasks(currentProject.tasks);
  clickHandlerBtnViewAllProjects();
};

const renderTasks = function (currentProjectTasks) {
  for (let [key, value] of Object.entries(currentProjectTasks)) {
    itemContainer.prepend(renderTaskCard(value));
  }
};

const loadProjectForm = function () {
  projectFormContainer.classList.remove("hidden");
  inputProjectTitle.focus();
};

const saveProject = function () {
  let projectId = `P${new Date().getTime()}`;
  projects[projectId] = new Project(inputProjectTitle.value || "New Project");
  unloadProjectForm();
  clearItemContainer();
  loadProjectsView();
};

const deleteProject = function (e) {
  const confirmDelete = confirm(`Delete this project?`);
  if (!confirmDelete) return;
  const projectId = e.target.closest(".project-card").id;
  delete projects[projectId];
  loadProjectsView();
};

const loadTaskForm = function () {
  taskFormContainer.classList.remove("hidden");
  inputTaskTitle.focus();
};

const saveTask = function () {
  targetProject.tasks.push(
    new Task(
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

const clickHandlerDivProjectDetails = function () {
  const projectDetailsNL = document.querySelectorAll(".project-details");
  projectDetailsNL.forEach((projectDetail) => {
    const projectCardId = projectDetail.parentElement.getAttribute("id");
    for (let [key, value] of Object.entries(projects)) {
      if (value.id === projectCardId) {
        projectDetail.addEventListener("click", () => {
          loadTasksView(value);
          targetProject = value;
        });
        break;
      }
    }
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

const clickHandlerBtnProjectDelete = function () {
  const deleteButtonsNL = document.querySelectorAll(".btn-project-delete");
  deleteButtonsNL.forEach((button) =>
    button.addEventListener("click", deleteProject.bind(this))
  );
};

(function () {
  loadProjectsView();
  clickHandlerBtnNewItem();
  clickHandlerBtnSaveProject();
  clickHandlerBtnSaveTask();
})();
