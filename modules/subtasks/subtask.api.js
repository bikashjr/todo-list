const router = require("express").Router();
const SubtaskController = require("./subtask.controller");

router.post("/", async (req, res, next) => {
  try {
    const { todo, title } = req.body;
    if (!title || !todo) throw new Error("Title or Todo is missing");
    const result = await SubtaskController.create(req.body);
    res.json({ data: result, msg: "successs" });
  } catch (e) {
    next(e);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const result = await SubtaskController.list();
    res.json({ data: result, msg: "success" });
  } catch (e) {
    next(e);
  }
});
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await SubtaskController.getById(id);
    res.json({ data: result, msg: "success" });
  } catch (e) {
    next(e);
  }
});
router.patch("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    if (!status) throw new Error("Status is required");
    const result = await SubtaskController.updatebyId(id, req.body);
    res.json({ data: result, msg: "success" });
  } catch (e) {
    next(e);
  }
});
router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await SubtaskController.remove(id);
    res.json({ data: result, msg: "success" });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
