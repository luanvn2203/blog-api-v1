
import user from '../controllers/user.controller'

var router = require("express").Router();
// Create a new Tutorial
router.post("/register", user.postRegister);

module.exports = router