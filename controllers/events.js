const Event = require("../models/events");


const EventsController = {
    Index: async (req, res) => {
      const userEvents = await Event.find({ creator: req.session.user._id });
      res.render("events", { events: userEvents });
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
            res.redirect("/dashboard/userdashboard")
          }
      });
      },
    };
  
  
  module.exports = EventsController;
  