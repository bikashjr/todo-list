const TodoModel = require("./todo.model");

// CRUD

const create = (payload) => {
  return TodoModel.create(payload);
};

const list = () => {
  // Complex aggregation
  // return TodoModel.find();
  return TodoModel.aggregate([
    {
      $lookup: {
        from: "subtasks",
        localField: "_id",
        foreignField: "todo",
        as: "subtasks",
      },
    },
  ]);
};

const getById = (id) => {
  return TodoModel.findOne({ _id: id });
};

const updateById = (id, payload) => {
  return TodoModel.updateOne({ _id: id }, payload);
};

const remove = (id) => {
  return TodoModel.deleteOne({ _id: id });
};

module.exports = { create, list, getById, updateById, remove };
