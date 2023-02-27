const RequestsController = {
    Event: (req, res) => {

      console.log(req.params);
    res.send("this is an invite page thing ");
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