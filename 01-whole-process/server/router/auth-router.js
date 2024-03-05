const express = require("express");
const router = express.Router();
const authcontroller = require('../controllers/auth-controller')

router.route("/register").get(authcontroller.register);
router.route("/login").get(authcontroller.login)

module.exports = router
