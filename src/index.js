import './style.css';

const taskContent = document.querySelector('.todo-header');

const tasks = [
  {
    description: 'Read JavaScript',
    completed: true,
    index: 1,
  },
  {
    description: 'Read CSS',
    completed: false,
    index: 2,
  },
  {
    description: 'Work on HTML',
    completed: false,
    index: 3,
  },
];

const displayTask = (tasks) => {
  tasks.forEach((task) => {
    const html = `
    <div class="header">
    <div class="check-content">
      <input type="checkbox" class="checkbox" />
      <div class="task"><p>${task.description}</p></div>
    </div>
    <i class="fa-solid fa-ellipsis-vertical"></i>
  </div>`;
    taskContent.insertAdjacentHTML('beforeend', html);
  });
};

displayTask(tasks);
