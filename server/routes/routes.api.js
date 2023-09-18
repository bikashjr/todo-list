const router = require("express").Router();

const todoRouter = require("../modules/todos/todo.routes.api");
const subtaskRouter = require("../modules/subtasks/subtask.routes.api");

router.use("/todos", todoRouter);
router.use("/subtasks", subtaskRouter);

module.exports = router;
