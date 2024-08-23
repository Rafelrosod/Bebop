import express from 'express';
import { getTask } from '../controllers/taskController.mjs';

const router = express.Router();

//Rota para criar uma tarefa
// router.post('/tasks', createTask);

//rota para listar todas as tarefas
router.get('/tasks', getTask);

// router.delete('/tasks/:id', deleteTask);

export default router;