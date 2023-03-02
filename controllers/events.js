const Event = require("../models/events");
const User = require("../models/users");
const Wishlist = require("../models/wishlists");

const EventsController = {
  Index: async (req, res) => {
    const userEvents = await Event.find({ creator: req.session.user._id });
    res.render("events", { events: userEvents });
  },
 
  Find: async (req, res) => {
    const userEvents = await Event.find({ creator: req.session.user._id });
    const currentEvent = await Event.find({ _id: req.params.eventID });
    console.log(currentEvent[0].wishlist);
    const eventWishlist = await Wishlist.find({ _id: currentEvent[0].wishlist});
    const userData = {events: userEvents, wishlist: eventWishlist};
    res.send("fucking works dun't it");
    // res.render("event_template", { data: userData });
  },

  New: (req, res) => {
    res.render("new_event");
  },

  Create: (req, res) => {
    console.log("I'm creating an event")
    const event = new Event(req.body);
    event.creator = req.session.user._id;
    event.save((err) => {
      if (err) {
        throw err;
      } else {
        User.findOneAndUpdate({ _id: req.session.user._id }, { $push: { event_IDs: event._id } },
          function (error, success) {
          if (error) {
              console.log(error);
          } else {
              console.log(success);
          } }, )
      }});  
      res.redirect("/events");
  },
};
  
module.exports = EventsController;
  