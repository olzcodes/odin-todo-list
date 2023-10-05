import { projects, Project, renderProjectCard } from "./project";
import { tasks, Task, renderTaskCard } from "./task";
import "./style.css";

const breadcrumbNav = document.querySelector(".breadcrumb-nav");
const mainContainer = document.querySelector(".main-container");

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

const clearMainContainer = function () {
  mainContainer.innerHTML = "";
};

const displayAllProjects = function () {
  renderBreadcrumbNav("projectsView");
  clearMainContainer();
  renderAllProjects(projects);
  enableTasksViewFromProjectCards();
};

const renderAllProjects = function (projects) {
  for (let [key, value] of Object.entries(projects)) {
    mainContainer.append(renderProjectCard(value));
  }
};

const displayProjectTasks = function (currentProject) {
  renderBreadcrumbNav("tasksView", currentProject);
  clearMainContainer();
  renderTasks(currentProject.tasks);
  enableViewAllProjectsBtn();
};

const renderTasks = function (currentProjectTasks) {
  for (let [key, value] of Object.entries(currentProjectTasks)) {
    mainContainer.append(renderTaskCard(value));
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

// Mock projects and tasks ////////////////////////////////
projects["project1"] = new Project("Home");
projects["project2"] = new Project("Study");
projects["project3"] = new Project("Work");

const task1 = new Task(
  123,
  "pending",
  "wash car",
  "vacuum interior, wash exterior",
  "2023-09-29",
  "low"
);

const task2 = new Task(
  234,
  "completed",
  "read article on OOP",
  "https://www.educative.io/blog/object-oriented-programming",
  "2023-09-28",
  "high"
);

const task3 = new Task(
  456,
  "pending",
  "play video games",
  "Zelda",
  "2023-10-05",
  "high"
);

projects["project1"].addTask(task1);
projects["project2"].addTask(task2);
projects["project1"].addTask(task3);
///////////////////////////////////////////////////////////

displayAllProjects();
