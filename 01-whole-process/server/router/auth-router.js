const express = require("express");
const router = express.Router();
const authcontroller = require('../controllers/auth-controller')
//import validater part
const schema = require('../validator/auth-validator')
const validate = require('../middleware/validate-middleware')

router.route("/register").post(authcontroller.register);
router.route("/login").post(authcontroller.login)

module.exports = router
