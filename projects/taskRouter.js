const express = require("express");
const tasks = require("./taskModel");

const router = express.Router();

router.get("/:id/tasks", (req, res) => {
  tasks
    .getTasks(req.params.id)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: "Error retrieving tasks: " + error.message });
    })
  });

  router.post("/:id/tasks", (req, res) => {
    const task = {
      ...req.body,
      project_id: req.params.id
    };
    tasks
      .addTask(task)
      .then(data => {
        res.status(201).json(data);
      })
      .catch(error => {
        res
          .status(500)
          .json({ message: "Error creating task: " + error.message });
      })
    });

    module.exports = router;