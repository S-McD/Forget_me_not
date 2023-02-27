const User = require("../models/users");

const SessionsController = {
  New: (req, res) => {
    res.render("/login");
  },

  Create: (req, res) => {
    console.log("trying to log in");
    const email = req.body.email;
    const password = req.body.password
    console.log(req.body.email)
    console.log(req.body.password)
    User.findOne({ email: email }).then((user) => {
      if (!user) {
        res.render("login", {error: "incorrect email"});
        console.log("ERROR")
      } else if (user.password != password) {
        res.render("login", {error: "incorrect password"});
        console.log("ERROR 2")
      } else {
        req.session.user = user;
        console.log("logged in");
        res.redirect("user/userdashboard");
      }
    });
  },

  Destroy: (req, res) => {
    console.log("logging out");
    if (req.session.user && req.cookies.user_sid) {
      res.clearCookie("user_sid");
    }
    console.log("logged out")
    res.redirect("/");
  },
};






module.exports = SessionsController;
