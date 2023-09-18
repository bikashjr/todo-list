const Model = require("./todo.model");
const subtaskModel = require("../subtasks/subtask.model");

const create = async (payload) => {
  const { title } = payload;
  return await Model.create({ title });
};

const getById = async (id) => {
  return await Model.findOne({ _id: id });
};

const list = async () => {
  return await Model.aggregate([
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

const updatebyId = async (id, payload) => {
  const { status } = payload;
  if (status === "completed") {
    const result = await subtaskModel.find({ todo: id });
    result.map(async (subtask) => {
      await subtaskModel.findOneAndUpdate(
        { _id: subtask?._id },
        { status: "completed" },
        { new: true }
      );
    });
  }
  return await Model.findOneAndUpdate({ _id: id }, payload, { new: true });
};

const remove = async (id) => {
  return await Model.deleteOne({ _id: id });
};

module.exports = { create, getById, list, updatebyId, remove };
