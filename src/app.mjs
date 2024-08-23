// app.mjs é focado em configurar o aplicativo Express e suas rotas

import express from "express";
import taskRoutes from "../src/modules/tasks/routes/taskRoutes.mjs";
// import authMiddleware from "./middlewares/authMiddleware.mjs";

const app = express();

app.use(express.static('public'));
app.use(express.json());

// app.use(authMiddleware);

// Rotas
app.use("/modules/tasks", taskRoutes);

export default app;
