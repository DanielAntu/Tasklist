const express = require("express");
const router = express.Router();

router.use("/task", require("./TaskRouter"));

module.exports = router;
