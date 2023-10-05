import { projects } from "./project.js";

export class Task {
  constructor(status, projectId, title, description, dueDate, priority) {
    this.id = `T${new Date().getTime()}`;
    this.status = status;
    this.projectId = projectId;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

export const renderTaskCard = function (task) {
  const taskCard = document.createElement("div");
  taskCard.className = "task-card";
  taskCard.innerHTML = `
    <div class="task-header">
      <div class="task-header-left">
        <button class="complete-task">〇</button>
        <div class="task-title">${task.title}</div>
      </div>
      <div class="task-header-right">
        <button class="task-move-down">ᐯ</button>
        <button class="task-move-up">ᐱ</button>
      </div>
    </div>
    <div class="task-details">
      <div class="task-description">${task.description}</div>
      <div class="task-bottom-row">
        <button class="task-due-date">${task.dueDate}</button>
        <button class="task-options">...</button>
      </div>
    </div>
  `;

  return taskCard;
};
