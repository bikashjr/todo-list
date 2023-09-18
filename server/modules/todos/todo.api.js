const router = require("express").Router();
const todoController = require("./todo.controller");

// list all
router.get("/", async (req, res, next) => {
  try {
    const result = await todoController.list();
    res.json({ data: result, msg: "success" });
  } catch (error) {
    next(error);
  }
});

// get by id
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await todoController.getById(id);
    res.json({ data: result, msg: "success" });
  } catch (error) {
    next(error);
  }
});

// create
router.post("/", async (req, res, next) => {
  try {
    const result = await todoController.create(req.body);
    res.json({ data: result, msg: "success" });
  } catch (error) {
    next(error);
  }
});

router.patch("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    if (!status) throw new Error("Status is required");
    const result = await todoController.updatebyId(id, req.body);
    res.json({ data: result, msg: "success" });
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await todoController.remove(id);
    res.json({ data: result, msg: "success" });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
