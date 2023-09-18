const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  title: { type: String, required: true },
  status: { type: String, enums: ["pending", "complete"], default: "pending" },
});

module.exports = mongoose.model("Todo", todoSchema);
