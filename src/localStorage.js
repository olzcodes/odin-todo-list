import { projects } from "./index";
import { Project } from "./project";
import { demoProjects } from "./demoData";

export const saveToLocalStorage = function () {
  localStorage.setItem("projects", JSON.stringify(projects));
};

export const loadFromLocalStorage = function () {
  const storedProjectsJSON =
    JSON.parse(localStorage.getItem("projects")) || demoProjects;

  let projectObjects = {};
  for (const [key, value] of Object.entries(storedProjectsJSON)) {
    projectObjects[key] = new Project(value.id, value.title, value.tasks);
  }
  return projectObjects;
};