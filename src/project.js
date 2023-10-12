export let projects = {
  project1: {
    id: "P1696810527601",
    title: "Home",
    tasks: [
      {
        id: "T1696810527601",
        status: "completed",
        taskId: 123,
        title: "wash car",
        description: "vacuum interior, wash exterior",
        dueDate: "2023-09-29",
        priority: "low",
      },
      {
        id: "T1696810527601",
        status: "pending",
        taskId: 456,
        title: "play video games",
        description: "Zelda",
        dueDate: "2023-10-05",
        priority: "high",
      },
    ],
  },
  project2: {
    id: "P1696810527601",
    title: "Study",
    tasks: [
      {
        id: "T1696810527601",
        status: "completed",
        taskId: 234,
        title: "read article on OOP",
        description:
          "https://www.educative.io/blog/object-oriented-programming",
        dueDate: "2023-09-28",
        priority: "high",
      },
    ],
  },
  project3: {
    id: "P1696810527601",
    title: "Work",
    tasks: [],
  },
};

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
  const renderProjectDetails = function (project) {
    let taskCount = 0;
    project.tasks.forEach((task) => {
      if (task.status === "pending") taskCount += 1;
    });
    return `${taskCount} pending tasks`;
  };

  const projectCard = document.createElement("div");
  projectCard.className = "project-card";
  projectCard.setAttribute("id", `${project.id}${project.title}`);
  projectCard.innerHTML = `
  <div class="project-header">
    <div class="project-header-left">
      <div class="project-title">${project.title}</div>
    </div>
    <div class="project-header-right">
      <button class="btn-project-move-down">ᐯ</button>
      <button class="btn-project-move-up">ᐱ</button>
      <button class="btn-project-delete">X</button>
    </div>
  </div>
  <div class="project-details">
    <ul>
      ${renderProjectDetails(project)}
    </ul>
  </div>
  `;

  return projectCard;
};
