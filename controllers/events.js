const Event = require("../models/events");
const User = require("../models/users");
const Wishlist = require("../models/wishlists");
const Gift = require("../models/gifts");

const EventsController = {
  Index: async (req, res) => {
    const userEvents = await Event.find({ creator: req.session.user._id });
    res.render("events", { events: userEvents });
  },
 
  Find: async (req, res) => {
    const userEvents = await Event.find({ creator: req.session.user._id });
    const currentEvent = await Event.find({ _id: req.params.eventID });
    const wishlistID = currentEvent[0].wishlist;
    const eventWishlist = await Wishlist.find({ _id: wishlistID});
    const giftIDs = eventWishlist[0].gifts;
    const giftArray = [];
    for (let i = 0; i < giftIDs.length; i++) {
      let singleGift = await Gift.find({_id: giftIDs[i]})
      giftArray.push(singleGift[0]);
    };
   
    const data = {event: currentEvent[0], wishlist: eventWishlist[0], gifts: giftArray};
    console.log(data.gifts)
    
    res.render('event_template', {data: data});
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
  