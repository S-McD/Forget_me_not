var express = require('express');
var router = express.Router();

const RequestsController = require("../controllers/requests");

router.get("/party_invite", RequestsController.Event);
router.get("/gift_ideas", RequestsController.Wishlist);
router.get("/present_invite", RequestsController.Gift);
router.get("/work", RequestsController.New);


module.exports = router;