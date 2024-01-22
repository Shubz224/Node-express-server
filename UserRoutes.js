const express =require("express");

const  registeruser  = require("./UserController");

const router = express.Router();

router.route("/register").post(registeruser);

module.exports = router ;