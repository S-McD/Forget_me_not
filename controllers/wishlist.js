const Wishlist = require("../models/wishlists");

const WishlistController = {
    All: (req, res) => {
    res.render("wishlists");
    },

    New: (req, res) => {
    res.render("new_wishlist");
    },

    Create: (req, res) => {
        console.log("I'm creating a wishlist")
        const wishlist = new Wishlist(req.body);
        wishlist.creator = req.session.user._id;
   
        wishlist.save((err) => {
            if (err) {
              throw err;
            } else {
              res.redirect("/wishlist")
            }
        });
        },
};

module.exports = WishlistController;