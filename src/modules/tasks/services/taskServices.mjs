let tasks = [];
let currentId = 1;

export function addTask(description) {
    const task = { id: currentId++, description };
    tasks.push(task);
    return task;
}

export function listTasks() {
    return tasks;
}

export function removeTask(id) {
    const index = tasks.findIndex(task => task.id === parseInt(id));
    if (index !== -1) {
        tasks.splice(index, 1);
        return true;
    }
    return false;
}