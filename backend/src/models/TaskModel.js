const mongoose = require("mongoose");
const { Schema } = mongoose;

const TaskSchema = new Schema(
    {
        description: {
            type: String,
            required: true,
        },
        state: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;
