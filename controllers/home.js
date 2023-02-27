const HomeController = {

    Index: (req, res) => {
    res.render("home", { title: 'Forget Me Not'});
    },

    New: (req, res) => {
    res.render("signup");
    },
        
    Login: (req, res) => {
    res.render("login");
    },
  };
  
  module.exports = HomeController;
  