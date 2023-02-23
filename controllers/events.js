const EventsController = {
    Index: (req, res) => {
    res.render("events");
    },

    New: (req, res) => {
      res.render("new_event");
      },

    Create: (req, res) => {
      console.log(req.body)
      console.log("I'm creating an event")
    },
  };
  
  module.exports = EventsController;
  