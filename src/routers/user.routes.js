
import User from '../controllers/user.controller'

module.exports = app => {
    const tutorials = require("../controllers/tutorial.controller.js");
    var router = require("express").Router();
    
    // Create a new Tutorial
    router.get("/register", User.postRegister);

    app.use('/user', router);
  };