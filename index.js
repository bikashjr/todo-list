require("dotenv").config();
const express = require("express");
const app = express();

const indexRouter = require("./routes");
const port = process.env.PORT || 3000;
const { mongoose } = require("mongoose");

// connect db
mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("DATABASE CONNECTED"));

// enable json body
app.use(express.json());

//create routes
app.use("/", indexRouter);

app.use((err, req, res, next) => {
  err = err ? err.toString() : "Error";
  res.status(500).json({ data: "", msg: err });
});

app.listen(port, () => {
  console.log(`app running on port ${port}`);
});
