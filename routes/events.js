var express = require('express');
var router = express.Router();

const EventController = require("../controllers/events");

router.get("/", EventController.Index);
router.get("/new_events", EventController.New);


module.exports = router;
