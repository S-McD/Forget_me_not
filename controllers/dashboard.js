const Event = require("../models/events");
const Request= require("../models/requests");

const DashboardController = {

Index: async (req, res) => {
    const user = req.session.user;
    const userEvents = await Event.find({ creator: req.session.user._id }).sort({date: 1});
    const userRequests = await Request.find({ recipient: user._id }).where({ status: 'pending'});
    res.render("userdashboard", { user: user, events: userEvents, requests: userRequests });
  },
};

module.exports = DashboardController;
