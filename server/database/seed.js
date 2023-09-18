require("dotenv").config();
const mongoose = require("mongoose");
const todoController = require("../modules/todos/todo.controller");
const subtaskController = require("../modules/subtasks/subtask.controller");

mongoose.connect(process.env.DB_URL);

const setup = {
  initialize: async () => {
    await mongoose.connection.dropDatabase();
    console.log("DB reset");
    const todo1 = await todoController.create({ title: "Buy Clothes" });
    const todo2 = await todoController.create({ title: "Buy Shoes" });
    console.log("-----TODOS Setup Completed-----");

    const sub1 = await subtaskController.create({
      title: "Goto Supermarket",
      todo: todo1._id,
    });
    const sub2 = await subtaskController.create({
      title: "Check your shoe size",
      todo: todo2._id,
    });
    console.log("---------DONE----------");
  },
};
setup.initialize();
