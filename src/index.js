import './style.css';
import getFromLocalSTorage from './myLocalStorage.js';
import displayTodo from './displayTodo.js';

window.addEventListener('load', () => {
  const newTodoForm = document.querySelector('#new-todo-form');

  newTodoForm.addEventListener('submit', (e) => {
    const todos = getFromLocalSTorage();

    e.preventDefault();
    const todo = {
      content: e.target.elements.content.value,
      done: false,
      index: todos.length + 1,
    };

    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
    e.target.reset();

    displayTodo(todos);
  });
  const todos = getFromLocalSTorage();
  displayTodo(todos);
});
