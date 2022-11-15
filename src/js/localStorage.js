function localTodo(container) {
    let todo;
    todo = container.innerHTML;
    localStorage.setItem('todos', todo)
}

export default localTodo;