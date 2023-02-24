var express = require('express');
var router = express.Router();

const WishlistController = require("../controllers/wishlist");

router.get("/", WishlistController.All);
router.get("/new_wishlist", WishlistController.New);
router.post("/new_wishlist", WishlistController.Create);

module.exports = router;