import { renderBreadcrumbNav } from "./nav";
import { projects, Project, renderProjectCard } from "./project";
import { Task, renderTaskCard } from "./task";
import "./style.css";

let view = "projects";
let currentProject;
const itemContainer = document.querySelector(".item-container");
const projectFormContainer = document.querySelector(".project-form-container");
const taskFormContainer = document.querySelector(".task-form-container");
const inputProjectTitle = document.querySelector("#input-project-title");
const inputTaskTitle = document.querySelector("#input-task-title");
const inputTaskDescription = document.querySelector("#input-task-description");
const inputTaskDueDate = document.querySelector("#input-task-due-date");
const btnNewProject = document.querySelector(".btn-new-project");

const unloadProjectForm = function () {
  projectFormContainer.classList.add("hidden");
};

const unloadTaskForm = function () {
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
  enableTasksViewFromProjectCards();
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
  enableViewAllProjectsBtn();
};

const renderTasks = function (currentProjectTasks) {
  for (let [key, value] of Object.entries(currentProjectTasks)) {
    itemContainer.prepend(renderTaskCard(value));
  }
};

const enableTasksViewFromProjectCards = function () {
  const projectCardsNL = document.querySelectorAll(".project-card");
  projectCardsNL.forEach((projectCard) => {
    const clickedProjectId = projectCard.children[0].getAttribute("id");
    for (let [key, value] of Object.entries(projects)) {
      if (value.id + value.title === clickedProjectId) {
        projectCard.addEventListener("click", () => {
          loadTasksView(value);
          currentProject = value;
        });
        break;
      }
    }
  });
};

const enableViewAllProjectsBtn = function () {
  const btnViewAllProjects = document.querySelector(".view-all-projects");
  btnViewAllProjects.addEventListener("click", () => {
    loadProjectsView();
  });
};

loadProjectsView();

const loadProjectForm = function () {
  projectFormContainer.classList.remove("hidden");
  inputProjectTitle.focus();
  const btnSaveProject = document.querySelector(".btn-save-project");
  btnSaveProject.addEventListener("click", saveProject);
};

const saveProject = function () {
  let projectId = `P${new Date().getTime()}`;
  projects[projectId] = new Project(inputProjectTitle.value || "New Project");
  inputProjectTitle.value = "";
  projectFormContainer.classList.add("hidden");
  console.log(projects);
  console.log(projects[projectId]);
  clearItemContainer();
  loadProjectsView();
};

const loadTaskForm = function () {
  taskFormContainer.classList.remove("hidden");
  inputTaskTitle.focus();
  const btnSaveTask = document.querySelector(".btn-save-task");
  btnSaveTask.addEventListener("click", saveTask);
};

const saveTask = function () {
  console.log(currentProject);
  console.log(projects[currentProject]);
  currentProject.tasks.push(
    new Task(
      inputTaskTitle.value || "New Task",
      inputTaskDescription.value || ". . .",
      inputTaskDueDate.value || "( no due date )",
      "pending",
      "medium"
    )
  );
  inputTaskTitle.value = "";
  inputTaskDescription.value = "";
  taskFormContainer.classList.add("hidden");
  console.log(projects);
  console.log(currentProject.tasks);
  clearItemContainer();
  loadTasksView(currentProject);
};

btnNewProject.addEventListener("click", () => {
  if (view === "projects") loadProjectForm();
  if (view === "tasks") loadTaskForm();
});
