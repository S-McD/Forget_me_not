var express = require('express');
var router = express.Router();

const EventController = require("../controllers/events");

router.get("/", EventController.Index);


module.exports = router;
