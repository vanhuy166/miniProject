var input = document.querySelector('input');
var button = document.querySelector('button');
var form = document.querySelector('form');
var todosList = document.querySelector('.todos');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let val = input.value.trim();
    if (val) {
        addTodoElement({ text: val, status: ' ' });
        saveTodoList();
    }
    input.value = "";
});

function addTodoElement(todo) {
    var li = document.createElement('li');

    li.innerHTML = `
            <span>${todo.text}</span>
            <i class="fas fa-trash"></i>
        `;
    li.setAttribute('class', todo.status);

    li.addEventListener('click', function(e) {
        e.preventDefault();
        this.classList.toggle('completed');
        saveTodoList();
    });

    var btnDelete = li.querySelector('i');

    btnDelete.addEventListener('click', function(e) {
        this.parentElement.remove();
        saveTodoList();
    });
    todosList.appendChild(li);
}


function saveTodoList() {
    let todoList = document.querySelectorAll('li')
    let todoArray = [];
    todoList.forEach(function(item) {
        let text = item.querySelector('span').innerHTML;
        let status = item.getAttribute('class');
        todoArray.push({ text, status });
    });

    localStorage.setItem('todoList', JSON.stringify(todoArray));
}

function init() {
    let data = JSON.parse(localStorage.getItem('todoList'));
    data.forEach(function(item) {
        addTodoElement(item);
    });
}

init();