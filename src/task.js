export class Task {
  constructor(title, description, dueDate, status, priority) {
    this.id = `T${new Date().getTime()}`;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.status = status;
    this.priority = priority;
  }
}

export const renderTaskCard = function (task) {
  const taskCard = document.createElement("div");
  taskCard.className = "task-card";
  taskCard.dataset.taskId = task.id;
  taskCard.innerHTML = `
    <div class="task-header">
      <div class="task-header-left">
        <button class="btn-complete-task">〇</button>
        <input class="input-task-title" value="${task.title}" />
      </div>
      <div class="task-header-right">
        <button class="btn-task-move-down">ᐯ</button>
        <button class="btn-task-move-up">ᐱ</button>
        <button class="btn-task-delete">X</button>
      </div>
    </div>
    <div class="task-details">
      <textarea class="input-task-description" name="task-description">${task.description}</textarea>
      <div class="task-bottom-row">
        <input type="date" class="input-task-due-date" value=${task.dueDate} />
        <button class="btn-task-options">...</button>
      </div>
    </div>
  `;

  return taskCard;
};
