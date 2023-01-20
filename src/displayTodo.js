import getFromLocalSTorage from './myLocalStorage.js';

const displayTodo = () => {
  let todos = getFromLocalSTorage();
  const todoList = document.querySelector('#todo-list');

  todoList.innerHTML = '';

  todos.forEach((todo) => {
    const todoItem = document.createElement('div');
    todoItem.classList.add('check-content');

    const label = document.createElement('label');
    const input = document.createElement('input');
    const checkAndContent = document.createElement('div');
    const content = document.createElement('div');
    const actions = document.createElement('div');
    const edit = document.createElement('button');
    const deleteButton = document.createElement('button');

    input.type = 'checkbox';
    input.checked = todo.done;
    actions.classList.add('actions');
    edit.classList.add('edit');
    deleteButton.classList.add('delete');
    checkAndContent.classList.add('check-and-content');

    content.innerHTML = `<input type="todo-content" value="${todo.content}" readonly>`;
    edit.innerHTML = '<i class="fa-solid fa-ellipsis-vertical"></i>';
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';

    label.appendChild(input);
    checkAndContent.appendChild(label);
    checkAndContent.appendChild(content);
    actions.appendChild(edit);
    actions.appendChild(deleteButton);
    todoItem.appendChild(label);
    todoItem.appendChild(checkAndContent);
    todoItem.appendChild(actions);

    todoList.appendChild(todoItem);

    if (todo.done) {
      todoItem.classList.add('done');
      deleteButton.style.display = 'block';
    }

    input.addEventListener('click', (e) => {
      todo.done = e.target.checked;
      localStorage.setItem('todos', JSON.stringify(todos));

      if (todo.done) {
        todoItem.classList.add('done');
      } else {
        todoItem.classList.remove('done');
      }

      displayTodo();
    });

    deleteButton.addEventListener('click', () => {
      todos = todos.filter((t) => t !== todo);
      localStorage.setItem('todos', JSON.stringify(todos));
      displayTodo();
    });

    edit.addEventListener('click', () => {
      const input = content.querySelector('input');
      input.removeAttribute('readonly');
      input.focus();
      input.addEventListener('blur', (e) => {
        input.setAttribute('readonly', true);
        todo.content = e.target.value;
        localStorage.setItem('todos', JSON.stringify(todos));
        displayTodo();
      });
    });
  });
};

export default displayTodo;
