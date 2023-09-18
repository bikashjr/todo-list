const router = require("express").Router();
const subtaskController = require("./subtask.controller");

// Read
router.get("/", async (req, res) => {
  const results = await subtaskController.list();
  res.json({ data: results });
});

// Create
router.post("/", async (req, res) => {
  const todoResult = await subtaskController.create(req.body);
  res.json({ data: todoResult });
});

// read by id
router.get("/:id", async (req, res) => {
  const results = await subtaskController.getById(req.params.id);
  res.json({ data: results });
});

// update by id
router.put("/:id", async (req, res) => {
  const results = await subtaskController.updateById(req.params.id, req.body);
  res.json({ data: results });
});

// delete by id
router.delete("/:id", async (req, res) => {
  const results = await subtaskController.remove(req.params.id);
  res.json({ data: results });
});

module.exports = router;
