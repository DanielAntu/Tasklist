const Task = require("../models/TaskModel");

const createTask = async (req, res) => {
    const { description } = req.body;

    const task = new Task({
        description,
        state: "Em andamento",
    });

    try {
        await task.save();

        res.status(200).json({ message: "Tarefa salva com sucesso!" });
    } catch (error) {
        console.log("erro: " + error);
    }
};

const getTasks = async (_req, res) => {
    try {
        const tasks = await Task.find();

        res.status(200).json(tasks);
    } catch (error) {
        console.log("erro: ", error);
    }
};

const deleteTask = async (req, res) => {};

module.exports = {
    createTask,
    getTasks,
    deleteTask,
};
