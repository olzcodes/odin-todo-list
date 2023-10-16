import { projects } from "./index";

export const saveToLocalStorage = function () {
  localStorage.setItem("projects", JSON.stringify(projects));
};

export const loadFromLocalStorage = function () {
  let storedProjectsJSON = JSON.parse(localStorage.getItem("projects"));
  return storedProjectsJSON;
};
