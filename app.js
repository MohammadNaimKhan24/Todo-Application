// SELECT DOM ELEMENT
const form = document.getElementById('form');
const input = document.getElementById('input');
const todosUL = document.getElementById('todos');


// ADD EVENT LISTENER
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // CALLING A FUNCTION
    addTodo();
})


// FUNCTION TODO
function addTodo(todo) {
    let todoText = input.value;
    
    if (todoText) {
        const todoEl = document.createElement('li');

        if (todo && todo.completed) {
            todoEl.classList.add('completed');
        }

        todoEl.innerText = todoText;

        todoEl.addEventListener('click', () => todoEl.classList.toggle('completed'));

        todoEl.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            todoEl.remove();
        }
        )

        todosUL.appendChild(todoEl);

        input.value = ' ';

    }
}
