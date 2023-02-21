const HomeController = {
    Index: (req, res) => {
    res.render("home", { title: 'Forget Me Not'});
    },
  };
  
  module.exports = HomeController;
  