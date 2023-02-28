var express = require('express');
var router = express.Router();

const DashboardController = require("../controllers/dashboard");

router.get("/userdashboard", DashboardController.Index);

module.exports = router;
