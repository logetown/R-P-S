const todo_list2 = [];

function renderTodoList() {
    let todolist = '';    
    for (let i = 0; i < todo_list2.length; i++) {
        let html = `<p>
            ${todo_list2[i]}
            <button onclick="deleteTodo(${i})">delete</button>
        </p>`;
        todolist += html;
    }
    document.querySelector('.js-output').innerHTML = todolist;
}

function addTodo2() {
    const inputElement = document.querySelector('.js-input2');
    const name = inputElement.value;

    if (name === '') return; // avoid empty todos

    todo_list2.push(name);

    renderTodoList();  // ✅ correct

    inputElement.value = '';
}

function deleteTodo(index) {
    todo_list2.splice(index, 1);
    renderTodoList();  // ✅ correct
}

function key2(event) {
    if (event.key === 'Enter') {
        addTodo2();
    }
}