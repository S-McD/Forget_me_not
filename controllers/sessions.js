const SessionsController = {
  New: (req, res) => {
    res.render("login");
  },

  Create: (req, res) => {
    console.log("trying to log in");
    // find user in db and if pass && email match render userdashboard
    // User.findOne({ email: email }).then((user) => {
    //   if (!user) {
    //     res.render("sessions/new", { layout: "sessions/new", error: "incorrect email"});
    //   } else if (user.password != password) {
    //     res.render("sessions/new", {layout: "sessions/new", error: "incorrect password"});
    //   } else {
    //     req.session.user = user;
    //     res.redirect("/posts");
    //     console.log(user);
    //   }
    // });
  },

  Destroy: (req, res) => {
    console.log("logging out");
    if (req.session.user && req.cookies.user_sid) {
      res.clearCookie("user_sid");
    }
    res.redirect("/sessions/new");
  },

};






module.exports = SessionsController;
