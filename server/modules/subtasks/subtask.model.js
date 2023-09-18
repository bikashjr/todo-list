const { Schema, model } = require("mongoose");
const commonSchema = require("../../utils/commonSchema");

const { ObjectId } = Schema.Types;

const subTaskSchema = new Schema({
  title: { type: String, required: true },
  status: { type: String, enum: ["pending", "complete"], default: "pending" },
  todo: { type: ObjectId, ref: "Todo" }, // Reference to Todo model
  ...commonSchema,
});

module.exports = model("Subtask", subTaskSchema);
