const mongoose = require("mongoose");
const commonSchema = require("../../utils/commonSchema");

const toDoSchema = mongoose.Schema({
  title: { type: String, required: true },
  status: { type: String, enums: ["pending", "complete"], default: "pending" },
  ...commonSchema,
});

module.exports = mongoose.model("Todo", toDoSchema);
