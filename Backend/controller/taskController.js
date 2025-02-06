const { where } = require("sequelize");
const Task = require("../models/task");

// Endpoints for get all the tasks.
exports.getTasks = async (req, res) => {
  const tasks = await Task.findAll();
  res.json(tasks);
};

// Endpoints for saving task.
exports.createTask = async (req, res) => {
  const newTask = await Task.create(req.body);
  res.json(newTask);
};

// Endpoints for updating task.
exports.updateTask = async (req, res) => {
  await Task.update(req.body, { where: { id: req.params.id } });
  const updatedTask = await Task.findByPk(req.params.id); // fetch id first then update.
  res.json(updatedTask);
};

// Endpoints for deleting tasks.
exports.deleteTask = async (req, res) => {
  try {
    const deletedRows = await Task.destroy({ where: { id: req.params.id } });

    if (deletedRows === 0) {
      return res.status(404).json({ message: "Task not found!!!" });
    }

    res.json({ message: "Task Deleted Successfully...." });
  } catch (error) {
    res.status(500).json({ message: "Internal Server error.." });
  }
};
