const UserController = {
    New: (req, res) => {
      res.render("signup");
    },

    Login: (req, res) => {
      res.render("login");
    },

    Index: (req, res) => {
      res.render("userdashboard");
    },
  };
  
module.exports = UserController;  