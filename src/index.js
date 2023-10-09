import { renderBreadcrumbNav } from "./nav";
import { projects, Project, renderProjectCard } from "./project";
import { renderTaskCard } from "./task";
import "./style.css";

let view = "projects";
const itemContainer = document.querySelector(".item-container");
const formContainer = document.querySelector(".form-container");
const inputProjectTitle = document.querySelector("#project-title");
const btnNewProject = document.querySelector(".btn-new-project");

const clearItemContainer = function () {
  itemContainer.innerHTML = "";
};

const loadProjectsView = function () {
  view = "projects";
  renderBreadcrumbNav("projectsView");
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
      if (value.id + `${value.title}` === clickedProjectId) {
        projectCard.addEventListener("click", () => loadTasksView(value));
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
  formContainer.classList.remove("hidden");
  inputProjectTitle.focus();
  const btnSaveProject = document.querySelector(".btn-save-project");
  btnSaveProject.addEventListener("click", saveProject);
};

const saveProject = function () {
  let projectId = new Date().getTime();
  projects[projectId] = new Project(inputProjectTitle.value);
  inputProjectTitle.value = "";
  formContainer.classList.add("hidden");
  console.log(projects);
  console.log(projects[projectId]);
  clearItemContainer();
  loadProjectsView();
};

btnNewProject.addEventListener("click", () => {
  if (view === "projects") loadProjectForm();
  // if (view === "tasks") loadTaskForm();
});
