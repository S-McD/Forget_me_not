const Wishlist = require("../models/wishlists");
const User = require("../models/users");

const Event = require("../models/events");
const Request = require("../models/requests");



const WishlistController = {
    All: async (req, res) => {
        const userWishlists = await Wishlist.find({creator: req.session.user._id});
    res.render("wishlists", {wishlists: userWishlists});
    },

    New: (req, res) => {
    res.render("new_wishlist");
    },

    Wishlist: (req, res) => {

      console.log(req.params.wishlistID);
      res.render("wishlist_invite", { wishlistID: req.params.wishlistID});
    },

    Create: (req, res) => {
        console.log("I'm creating a wishlist")
        console.log(req.body);
        const wishlist = new Wishlist(req.body);
        wishlist.creator = req.session.user._id;
   
        wishlist.save((err) => {
            if (err) {
              throw err;
            } else {
              res.redirect("/wishlist")
            }
        });
        },


        Invite: (req, res) => {
          console.log("finding user");
          const first_name = req.body.first_name;
          // const last_name = req.body.last_name
          User.findOne ({ first_name: first_name }).then((user) => {
            if (!user) {
              res.render("invite", {error: "user doesn't exist"});
              console.log("ERROR");
            } else {
    
              Wishlist.findOneAndUpdate({ _id: req.params.wishlistID }, 
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
              request.event = req.params.wishlistID; 
              request.save((err) => {
              if (err) {
                throw err;
              }
              console.log(request)
    
              // update event invitees
              // create new request object and save it 
              // redirect 
    
              console.log(user);
              console.log(req.params.wishlistID)
              console.log("got em");
              res.status(201).redirect("/wishlist");
            })
          }});
        },

        Accept: (req, res) => {
          var success = Object.assign({},req.body)
          console.log(success)
          console.log(req.body)
          if (success.response == "accept") {
            console.log(req.session.user._id)
          Request.findOneAndUpdate({ recipient: req.session.user._id }, 
            { status: "accepted" },
            function (error, success) {
              if (error) {
                  console.log(error);
              } else {
                  console.log(success);
              }
            });
            Wishlist.findOneAndUpdate({ _id: req.params.eventID }, 
              { $push: { members: req.session.user._id } },
              function (error, success) {
                if (error) {
                    console.log(error);
                } else {
                    console.log(success);
                }
            })
            res.redirect("/requests")
        }
      },

        // Invite: (req, res) => {
        //   console.log("finding user");
        //   const first_name = req.body.first_name;
        //   // const last_name = req.body.last_name
        //   User.findOne ({ first_name: first_name }).then((user) => {
        //     if (!user) {
        //       res.render("invite", {error: "user doesn't exist"});
        //       console.log("ERROR");
        //     } else {
    
        //       Wishlist.findOneAndUpdate({ _id: req.params.wishlistID }, 
        //         { $push: { members: user._id } },
        //         function (error, success) {
        //           if (error) {
        //               console.log(error);
        //           } else {
        //               console.log(success);
        //           }
        //       });
        
        //       const wishlist = new Wishlist(
        //          );
        //       wishlist.creator = req.session.user;
        //       wishlist.members = user._id;
        //       // wishlist.event = req.params.eventID; 
        //       wishlist.save((err) => {
        //       if (err) {
        //         throw err;
        //       }
        //       console.log(wishlist)
    
        //       // update event invitees
        //       // create new request object and save it 
        //       // redirect 
    
        //       console.log(user);
        //       console.log("got em");
        //       res.status(201).redirect("/wishlist");
        //     })
        //   }});
        // },
};

module.exports = WishlistController;