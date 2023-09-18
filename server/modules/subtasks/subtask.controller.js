const TodoModel = require("../todos/todo.model");
const Model = require("./subtask.model");

const create = async (payload) => {
  return await Model.create(payload);
};

const list = async () => {
  return await Model.find();
};

const getById = async (id) => {
  return await Model.findOne({ _id: id });
};

const updatebyId = async (id, payload) => {
  const { status } = payload;
  if (status === "pending") {
    const subtask = await Model.findOne({ _id: id });
    await TodoModel.findOneAndUpdate(
      { _id: subtask?.todo },
      { status: "pending" },
      { new: true }
    );
  }
  return await Model.findOneAndUpdate({ _id: id }, payload, { new: true });
};

const remove = async (id) => {
  return await Model.deleteOne({ _id: id });
};

module.exports = { create, list, getById, updatebyId, remove };
