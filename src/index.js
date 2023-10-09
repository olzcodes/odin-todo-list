import { renderBreadcrumbNav } from "./nav";
import { projects, Project, renderProjectCard } from "./project";
import { renderTaskCard } from "./task";
import "./style.css";

const itemContainer = document.querySelector(".item-container");
const formContainer = document.querySelector(".form-container");
const inputProjectTitle = document.querySelector("#project-title");
const btnNewProject = document.querySelector(".btn-new-project");

const clearItemContainer = function () {
  itemContainer.innerHTML = "";
};

const displayAllProjects = function () {
  renderBreadcrumbNav("projectsView");
  clearItemContainer();
  renderAllProjects(projects);
  enableTasksViewFromProjectCards();
};

const renderAllProjects = function (projects) {
  for (let [key, value] of Object.entries(projects)) {
    itemContainer.append(renderProjectCard(value));
  }
};

const displayProjectTasks = function (currentProject) {
  renderBreadcrumbNav("tasksView", currentProject);
  clearItemContainer();
  renderTasks(currentProject.tasks);
  enableViewAllProjectsBtn();
};

const renderTasks = function (currentProjectTasks) {
  for (let [key, value] of Object.entries(currentProjectTasks)) {
    itemContainer.append(renderTaskCard(value));
  }
};

const enableTasksViewFromProjectCards = function () {
  const projectCardsNL = document.querySelectorAll(".project-card");
  projectCardsNL.forEach((projectCard) => {
    const clickedProjectId = projectCard.children[0].getAttribute("id");
    for (let [key, value] of Object.entries(projects)) {
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
  projects[projectId] = new Project(inputProjectTitle.value);
  formContainer.classList.add("hidden");
  console.log(projects);
  console.log(projects[projectId]);
  clearItemContainer();
  displayAllProjects();
};

btnNewProject.addEventListener("click", loadProjectForm);
