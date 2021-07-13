const express = require("express");
const router = express.Router();

// Access Routes
router.use("/", require("./landing"));
// TODO: Add more routes!

module.exports = router;