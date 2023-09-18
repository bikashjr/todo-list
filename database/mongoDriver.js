require("dotenv").config();

const { MongoClient } = require("mongodb");

const ObjectId = require("mongodb").ObjectId;
// Connection URL
const url = process.env.DB_URL || "mongodb://localhost:27017/to_do_app";
const client = new MongoClient(url);

// Database Name
const dbName = "to_do_app";

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  await db.dropDatabase();
  console.log("DB successfully dropped...");
  const todos = db.collection("todos");
  const id1 = new ObjectId();
  const id2 = new ObjectId();
  await todos.insertMany([
    {
      _id: id1,
      title: "Buy Clothes",
      status: "pending",
      created_at: new Date(),
    },
    {
      _id: id2,
      title: "Do Homework",
      status: "pending",
      created_at: new Date(),
    },
  ]);
  console.log("TODOS COMPLETED");
  const subtasks = db.collection("subtasks");
  await subtasks.insertMany([
    {
      todo: id1,
      title: "Go to Supermarket",
      status: "pending",
      created_at: new Date(),
    },
    {
      _id: id2,
      title: "Open notebook",
      status: "pending",
      created_at: new Date(),
    },
  ]);
  console.log("SUBTASKS COMPLETED");
  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
