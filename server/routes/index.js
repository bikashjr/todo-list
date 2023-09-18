const router = require("express").Router();

const routesApi = require("./routes.api");
router.get("/", (req, res) => {
  res.send("App is running");
});

router.use("/api/v1", routesApi);

module.exports = router;
