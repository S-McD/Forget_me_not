var express = require('express');
var router = express.Router();

const RequestsController = require("../controllers/requests");
const WishlistController = require("../controllers/wishlist");

router.get("/party_invite/:eventID", RequestsController.Event);
router.get("/gift_ideas", RequestsController.Wishlist);
router.get("/present_invite", RequestsController.Gift);
router.get("/", RequestsController.New);
router.post("/party_invite/:eventID", RequestsController.Invite);
router.post("/party_invite/:eventID/accept", RequestsController.Accept);
router.post("/party_invite/:eventID/decline", RequestsController.Decline);
router.post("/wishlist_invite/:wishlistID", WishlistController.Invite);
router.post("/wishlist_invite/:wishlistID/accept", WishlistController.Accept);
// router.post("/wishlist_invite/:eventID/decline", WishlistController.Decline);



module.exports = router;