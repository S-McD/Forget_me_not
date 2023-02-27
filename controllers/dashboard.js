const Event = require("../models/events");

const DashboardController = {

Index: async (req, res) => {
    const userEvents = await Event.find({ creator: req.session.user._id }).sort({date: 1});
    res.render("userdashboard", { events: userEvents });
  },
};

module.exports = DashboardController;  