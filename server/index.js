require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3005;

mongoose.connect(process.env.DB).then(() => {
  console.log("Connected to MongoDB");
});

const indexRouter = require("./routes");
app.use(cors());
app.use(express.json());

app.use("/", indexRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
