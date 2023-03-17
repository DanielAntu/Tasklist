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

const getTaskById = async (req, res) => {
    const { id } = req.params;
    try {
        const task = await Task.findById({ _id: id });
        res.status(200).json(task);
    } catch (error) {
        console.log(error);
    }
};

const deleteTask = async (req, res) => {
    const { id } = req.params;

    try {
        await Task.findByIdAndDelete({ _id: id });
        res.status(200).json({ message: "Tarefa deletada com sucesso!" });
    } catch (error) {
        console.log(error);
    }
};

const updateTask = async (req, res) => {
    const { id } = req.params;
    const { description, state } = req.body;

    const task = {
        description,
        state,
    };

    try {
        await Task.findByIdAndUpdate({ _id: id }, task);
        res.status(200).json({ message: "Atualizaçaõ realizada com sucesso!" });
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    createTask,
    getTasks,
    getTaskById,
    deleteTask,
    updateTask,
};
