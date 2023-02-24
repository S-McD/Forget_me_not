const User = require("../models/users");

const UserController = {
    New: (req, res) => {
      res.render("signup");
    },

    Create: (req, res) => {
      console.log(req.body)
      const email = req.body.email;
      User.findOne({ email: email }).then((user) => {
        if (user) {
          res.render("signup", {layout: "signup", error: "Email already in use"})
        }
        console.log("im a ghost")
      });
  
      if (req.body.password == req.body.confirm_password) {
        const user = new User(req.body); 
        user.save((err) => {
          if (err) {
            throw err;
          }
          // create new session here 
          req.session.user = user
          res.status(201).redirect("user/userdashboard");
        });
      } else {
        res.redirect("signup");
      }
    },
      // creates new user in db
      // creates new session 
      // routes new user to user dashboard 
    

    Login: (req, res) => {
      res.render("login");
    },

    Index: (req, res) => {
      res.render("userdashboard");
    },
  };
  
module.exports = UserController;  