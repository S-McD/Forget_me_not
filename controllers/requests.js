const User = require("../models/users");
const Event = require("../models/events");
const Request = require("../models/requests");

const RequestsController = {
    Event: (req, res) => {

      console.log(req.params.eventID);
    res.render("party_invite", { eventID: req.params.eventID});
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

    Invite: (req, res) => {
      console.log("finding user");
      console.log(req.body)
      const first_name = req.body.first_name;
      const last_name = req.body.last_name
      User.findOne ({ first_name: first_name }).then((user) => {
        if (!user) {
          res.render("invite", {error: "user doesn't exist"});
          console.log("ERROR")
        } else {
          Event.findOneAndUpdate({ _id: req.params.eventID }, 
            { $push: { invites: user._id } }
        );
          const request = new Request(
             );
          request.creator = req.session.user;
          request.recipient = user._id;
          request.event = req.params.eventID; 
          request.save((err) => {
          if (err) {
            throw err;
          }
          console.log(request)
          console.log(user);
          console.log("got em");
          res.status(201).redirect("/dashboard/userdashboard");
        })
      }});
    },
  };
  
  module.exports = RequestsController;