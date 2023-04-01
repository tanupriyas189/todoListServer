const Task = require("../models/Task");

exports.readAll = async (req, res, next) => {
  try {
    const tasks = await Task.find();

    res.status(200).json({
      status: "success",
      data: tasks,
    });
  } catch (err) {
    next(err);
  }
};

exports.readOne = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id);
    console.log("task: ", task);
    res.status(200).json({
      status: "success",
      data: task,
    });
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const task = await Task.create({
      position: req.body.position,
      description: req.body.description,
      isComplete: req.body.isComplete,
    });

    res.status(201).json({
      status: "success",
      data: task,
    });
  } catch (err) {
    next(err);
  }
};

exports.updateById = async (req, res, next) => {
  try {
    console.log(req.body);
    const task = await Task.findByIdAndUpdate(req.params.id, req.body);

    res.status(200).json({
      status: "success",
      data: task,
    });
  } catch (err) {
    next(err);
  }
};
exports.toggleComplete = async (req, res, next) => {
  try {
    console.log(req.params.id);
    const task = await Task.findById(req.params.id);
    console.log(task);
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, {
      isComplete: !task.isComplete,
    });

    res.status(200).json({
      status: "success",
      data: updatedTask,
    });
  } catch (err) {
    next(err);
  }
};

exports.deleteById = async (req, res, next) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: "success",
      data: task,
    });
  } catch (err) {
    next(err);
  }
};
