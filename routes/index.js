const express = require("express");

const router = express.Router();
router.use("/task", require("./taskRoutes"));

module.exports = router;
