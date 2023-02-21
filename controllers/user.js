const UserController = {
    New: (req, res) => {
    res.render("signup");
    },

    Create: (req, res) = {
      // creates new user in db
      // creates new session 
      // routes new user to user dashboard 
    },

    Login: (req, res) => {
      res.render("login");
    },

    Index: (req, res) => {
    res.render("userdashboard");
    },
  };
  
module.exports = UserController;  