import './style.css';
import getFromLocalSTorage from './myLocalStorage.js';
import displayTodo from './displayTodo.js';

let todos;
window.addEventListener('load', () => {
  todos = getFromLocalSTorage();
  const newTodoForm = document.querySelector('#new-todo-form');

  newTodoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const todo = {
      content: e.target.elements.content.value,
      done: false,
    };

    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
    e.target.reset();

    displayTodo();
  });
  displayTodo();
});
