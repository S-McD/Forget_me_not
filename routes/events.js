var express = require('express');
var router = express.Router();

const EventController = require("../controllers/events");

router.get("/", EventController.Index);
router.get("/new_event", EventController.New);
router.post("/new_event", EventController.Create);
router.get("/:eventID", EventController.Find);

module.exports = router;
