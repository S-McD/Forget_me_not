var express = require('express');
var router = express.Router();

const WishlistController = require("../controllers/wishlist");

router.get("/", WishlistController.All);
router.get("/new_wishlist", WishlistController.New);
router.get("/wishlist_invite/:wishlistID", WishlistController.Wishlist);
router.post("/new_wishlist", WishlistController.Create);
router.get("/wishlist_invite/:wishlistID", WishlistController.Invite);
router.post("/wishlist_invite/:wishlistID/accept", WishlistController.Accept);
router.post("/wishlist_invite/:wishlistID/decline", WishlistController.Decline);


module.exports = router;