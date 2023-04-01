const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  position: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  isComplete: {
    type: Boolean,
    required: true,
  },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
