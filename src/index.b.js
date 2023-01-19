import './style.css';

const taskContent = document.querySelector('.todo-header');

const tasks = [];

const displayTask = (task) => {
  tasks.push(task);

  const html = `
    <div class="header">
    <div class="check-content">
      <input type="checkbox" class="checkbox" />
      <div class="task"><p>${task}</p></div>
    </div>
    <i class="fa-solid fa-ellipsis-vertical"></i>
  </div>`;
  taskContent.insertAdjacentHTML('beforeend', html);
};

const inputText = document.querySelector('.input-text');
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  // tasks.push(inputText.value);
  console.log(tasks);
  displayTask(inputText.value);
  console.log(tasks);
  // e.target.reset();
});

// displayTask(tasks);
