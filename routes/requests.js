var express = require('express');
var router = express.Router();

const RequestsController = require("../controllers/requests");

router.get("/party_invite/:eventID", RequestsController.Event);
router.get("/gift_ideas", RequestsController.Wishlist);
router.get("/present_invite", RequestsController.Gift);
router.get("/", RequestsController.New);
router.post("/party_invite/:eventID", RequestsController.Invite);


module.exports = router;