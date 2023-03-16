const express = require("express");
const router = express.Router();

// controllers
const TaskController = require("../controllers/TaskController");

// middlewares
const validateCreateTask = require("../middlewares/ValidateCreateTask");

router.post("/create", validateCreateTask, TaskController.createTask);
router.get("/getall", TaskController.getTasks);
router.delete("/delete/:id", TaskController.deleteTask);

module.exports = router;
