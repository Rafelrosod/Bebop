import { addTask, removeTask } from '../services/taskServices.mjs';

export function createTask(req, res) {
    const { description } = req.body;
    const task = addTask(description);
    res.status(201).json({ message: 'Tarefa criada com sucesso', task });
}
export const getTask = (req, res) => {
    const tasks = [
        { id: 1, title: "Tarefa 1", completed: false },
        { id: 2, title: "Tarefa 2", completed: true },
    ];
    res.json(tasks);
};

export function deleteTask(req, res) {
    const { id } = req.params;
    const success = removeTask(id);
    if (success) {
        res.status(200).json({ message: 'Tarefa deletada com sucesso' });
    } else {
        res.status(404).json({ message: 'Tarefa não encontrada' });
    }
}