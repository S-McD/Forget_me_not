const RequestsController = {
    Event: (req, res) => {
    res.render("party_invite");
    },

    Wishlist: (req, res) => {
      res.render("gift_ideas");
      },

    Gift: (req, res) => {
      res.render("present_invite");
      },

      New: (req, res) => {
        res.render("work");
        },
  };
  
  module.exports = RequestsController;