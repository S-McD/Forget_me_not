const WishlistController = {
    All: (req, res) => {
    res.render("wishlists");
    },

    New: (req, res) => {
    res.render("new_wishlist");
    },
};

module.exports = WishlistController;