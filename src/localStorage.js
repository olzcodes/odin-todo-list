import { projects } from "./controller";
import { Project } from "./project";
import { Task } from "./task";
import { demoProjects } from "./demoData";

export const saveToLocalStorage = function () {
  localStorage.setItem("projects", JSON.stringify(projects));
};

export const loadFromLocalStorage = function () {
  const storedProjectsJSON =
    JSON.parse(localStorage.getItem("projects")) || demoProjects;

  const projectsWithFunctions = {};

  for (const [key, value] of Object.entries(storedProjectsJSON)) {
    let tasksWithFunctions = [];
    value.tasks.forEach((task) => {
      const taskWithFunctions = new Task(
        task.id,
        task.title,
        task.description,
        task.dueDate,
        task.status,
        task.priority,
        task.inputStatus
      );
      tasksWithFunctions.push(taskWithFunctions);
    });

    projectsWithFunctions[key] = new Project(
      value.id,
      value.title,
      tasksWithFunctions,
      value.index
    );
  }

  return projectsWithFunctions;
};
