var express = require('express');
var router = express.Router();

const UserController = require("../controllers/user");

router.get("/signup", UserController.New);
router.get("/login", UserController.Login);
router.get("/userdashboard", UserController.Index);

module.exports = router;
