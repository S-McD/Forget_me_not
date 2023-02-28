const User = require("../models/users");

const UserController = {

      // creates new user in db, creates a new session and routes the new user to the user dashboard
      Create: (req, res) => {
      const email = req.body.email;
      const password = req.body.password
      var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
      User.findOne({ email: email }).then((user) => {
      console.log(req.body.password.length)
        if (user) {
          res.render("signup", {layout: "signup", error: "Email already in use"})
        } else if (req.body.password.length < 8) {
            res.render("signup", {layout: "signup", error: "Password must contain atleast 8 characters"})
            console.log("Password Issue")
        } else if (!regularExpression.test(password)) {
          res.render("signup", {layout: "signup", error: "Password must contain atleast one number and special character"})
          console.log("Password Regex Issue")
        } else if (req.body.password == req.body.confirm_password) {
        const user = new User(req.body); 
        user.save((err) => {
          if (err) {
            throw err;
          }
          // create new session here 
          req.session.user = user;
          console.log(user);
          res.status(201).redirect("/dashboard/userdashboard");
        });
      } else {
        res.redirect("signup");
      }
      })},

      // Finds a user and logs them in
      Find: (req, res) => {
        console.log("trying to log in");
        const email = req.body.email;
        const password = req.body.password
        User.findOne({ email: email }).then((user) => {
          if (!user) {
            res.render("login", {error: "incorrect email"});
            console.log("ERROR")
          } else if (user.password != password) {
            res.render("login", {error: "incorrect password"});
            console.log("ERROR 2")
          } else {
            req.session.user = user;
            console.log(user);
            console.log("logged in");
            res.status(201).redirect("/dashboard/userdashboard");
          }
        });
      },

      // Logs the user out
      Destroy: (req, res) => {
        if (req.session.user && req.cookies.user_sid) {
          res.clearCookie("user_sid");
          res.session.destroy();
        }
        console.log("logged out")
        res.redirect("/");
      },
  };
  
module.exports = UserController;  