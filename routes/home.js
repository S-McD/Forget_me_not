var express = require('express');
var router = express.Router();

const HomeController = require("../controllers/home");

router.get("/", HomeController.Index);
router.get("/signup", HomeController.New);
router.get("/login", HomeController.Login);

module.exports = router;
