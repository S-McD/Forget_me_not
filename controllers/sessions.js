const User = require("../models/users");

const SessionsController = {

  Create: (req, res) => {
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
    res.redirect("home/");
  },
};






module.exports = SessionsController;
