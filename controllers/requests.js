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

    New: async (req, res) => {
        const user = req.session.user;
        console.log(user)
        const userEvents = await Event.find({ invites: req.session.user._id }).sort({date: 1});
        console.log(userEvents)
        const userRequests = await Request.find({ recipient: user._id });
        res.render("requests", { events: userEvents });
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
            { $push: { invites: user._id } },
            function (error, success) {
              if (error) {
                  console.log(error);
              } else {
                  console.log(success);
              }
          });
    
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

    Reply: (req, res) => {
      console.log(req.body)
      if (req.body.response == "accept") {
      Request.findOneAndUpdate({ recipent: req.session.user._id }, 
        { status: "accepted" },
        function (error, success) {
          if (error) {
              console.log(error);
          } else {
              console.log(success);
          }
        });
      } else if (req.body.response == "rejected") {
        Request.findOneAndUpdate({ recipent: req.session.user._id }, 
          { status: "rejected" }
        )
        }
        else console.log("try again")
  },
} 
  module.exports = RequestsController;