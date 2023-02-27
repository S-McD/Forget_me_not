var express = require('express');
var router = express.Router();

const UserController = require("../controllers/user");

router.post("/userdashboard", UserController.Find);
router.post("/", UserController.Create);
router.get("/logout", UserController.Destroy);

module.exports = router;
