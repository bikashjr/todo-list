const router = require("express").Router();
const todoRouter = require("../modules/todos/todo.api");
const subtaskRouter = require("../modules/subtasks/subtask.api");

router.use("/todos", todoRouter);
router.use("/subtasks", subtaskRouter);

module.exports = router;
