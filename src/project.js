export const projects = {};

export class Project {
  constructor(title) {
    this.id = `P${new Date().getTime()}`;
    this.title = title;
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
    console.log(`NEW TASK ADDED - ${this.title} -> ${task.title}`);
  }
}

export const renderProjectCard = function (project) {
  let taskList = ``;

  const renderTaskList = function (project) {
    if (project.tasks.length === 0) {
      taskList += `( No pending tasks )`;
    }
    project.tasks.forEach((task) => {
      taskList += `<li class="task-list-item">${task.title}</li>`;
    });
    return taskList;
  };

  const projectCard = document.createElement("div");
  projectCard.className = "project-card";
  projectCard.innerHTML = `
  <div class="task-header" id="${project.id}${project.title}">
    <div class="task-header-left">
      <button class="complete-task">〇</button>
      <div class="task-title">${project.title}</div>
    </div>
    <div class="task-header-right">
      <button class="task-move-down">ᐯ</button>
      <button class="task-move-up">ᐱ</button>
    </div>
  </div>
  <div class="project-details">
    <ul>
      ${renderTaskList(project)}
    </ul>
  </div>
  `;

  return projectCard;
};
