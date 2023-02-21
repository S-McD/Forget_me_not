var express = require('express');
var router = express.Router();

const WishlistController = require("../controllers/wishlist");

router.get("/wishlists", WishlistController.All);
router.get("/new_wishlist", WishlistController.New);

module.exports = router;