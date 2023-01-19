class TodoTask {
  /** @type {tasks[]} */
  #todoList;

  constructor() {
    this.#todoList = JSON.parse(localStorage.getItem('tasks')) ?? [];
    this.#todoList.forEach((e) => this.#insertTaskToDOM(e, 'beforeend'));
  }

  insert = (task) => {
    this.#todoList.unshift(task); // add new book on first index of the books array
    this.#insertTaskToDOM(task);
    this.#save();
  };

  /**
   * Save bookCollection array into localStorage
   * */
  #save = () => {
    localStorage.setItem('tasks', JSON.stringify(this.#todoList));
  };

  #insertTaskToDOM = (task, where = 'afterbegin') => {
    const taskDiv = document.createElement('div');
    taskDiv.className = 'header';

    const taskDescription = document.createElement('div');
    taskDescription.className = 'check-content';
    taskDescription.innerHTML = `${task.description}`;

    const btn = document.createElement('button');
    btn.createElement = '<i class="fa-solid fa-ellipsis-vertical"></i>';
    btn.onclick = () => this.#remove(btn);

    taskDiv.append(taskDescription, btn);

    document.getElementById('books').insertAdjacentElement(where, taskDiv);
  };

  /**
   * Remove parentNode - div.book-container from DOM and also remove from the bookCollection
   *
   * @param {Node} btn - Remove button node
   * */
  #remove = (btn) => {
    const root = btn.parentNode;
    const index = Array.from(root.parentNode.children).indexOf(root);
    root.parentNode.removeChild(root); // remove book element from #books Node

    this.#todoList.splice(index, 1); // remove book object from array
    this.#save();
  };
}

export default TodoTask;
