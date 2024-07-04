const express = require("express")
const router = express.Router()
const loginController = require("../controller/login-controller")

router.route("/login").post(loginController)

module.exports = router;