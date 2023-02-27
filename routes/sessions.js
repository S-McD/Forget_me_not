const express = require("express");
const router = express.Router();

const SessionsController = require("../controllers/sessions");

router.delete("/", SessionsController.Destroy);

module.exports = router;
