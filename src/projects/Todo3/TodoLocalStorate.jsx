const todoKey = "reactTodo"

export const getLocalStorageTodoData = () => {
    const rawTodos = localStorage.getItem(todoKey);
    if (!rawTodos) return [];    
    return JSON.parse(rawTodos);
};

export const setLocalStorageTodoData = (task) => {
    // alert(JSON.stringify(task));
    return localStorage.setItem(todoKey, JSON.stringify(task));
};