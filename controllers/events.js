const Event = require("../models/events")

const EventsController = {
    Index: (req, res) => {
    res.render("events");
    },

    New: (req, res) => {
      res.render("new_event");
      },

    Create: (req, res) => {
      console.log("I'm creating an event")
      const event = new Event(req.body);
 
      event.save((err) => {
          if (err) {
            throw err;
          } else {
            res.redirect("/user/userdashboard")
          }
      });
      },
    };
  
  
  module.exports = EventsController;
  