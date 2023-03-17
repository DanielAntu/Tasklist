const express = require("express");
const router = express.Router();

// controllers
const TaskController = require("../controllers/TaskController");

// middlewares
const validateCreateTask = require("../middlewares/ValidateCreateTask");
const validateEditTask = require("../middlewares/validateEditTask");

router.post("/create", validateCreateTask, TaskController.createTask);
router.get("/getall", TaskController.getTasks);
router.get("/get/:id", TaskController.getTaskById);
router.delete("/delete/:id", TaskController.deleteTask);
router.put("/edit/:id", validateEditTask, TaskController.updateTask);

module.exports = router;
