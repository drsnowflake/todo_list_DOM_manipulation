document.addEventListener('DOMContentLoaded', init);

function init() {
	const todoList = document.querySelector('#todo-list');
	const form = document.querySelector('#todo-form');
	const clearButton = document.querySelector('#clear-list');

	clearButton.addEventListener('click', () => clearList());

	form.addEventListener('submit', function(e) {
		e.preventDefault();

		const todoItem = `${this.todo_text.value}`;
		addToList(todoItem, todoList);
		e.target.reset();
	});
}

function addToList(item, list) {
	const newItem = document.createElement('li');
	newItem.textContent = item;
	list.appendChild(newItem);
}

function clearList() {
	const todoList = document.querySelector('ul');
	todoList.innerHTML = '';
}
