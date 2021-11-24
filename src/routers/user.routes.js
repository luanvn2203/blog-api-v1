
import user from '../controllers/user.controller'
import verifyToken from '../middlewares/auth'
import {authValid} from '../validations/index'

var router = require("express").Router();

router.post("/register",authValid.register, user.postRegister);
router.post("/login",authValid.login, user.postLogin)
router.get('/me', verifyToken, user.getUserInfor)
module.exports = router