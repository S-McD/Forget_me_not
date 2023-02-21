const EventsController = {
    Index: (req, res) => {
    res.render("events");
    },

    New: (req, res) => {
      res.render("new_events");
      },
  };
  
  module.exports = EventsController;
  