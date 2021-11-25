
import user from '../controllers/user.controller'
import { isUser } from '../middlewares/auth'
import { authValid, userValid } from '../validations/index'
var router = require("express").Router();

router.post("/register", authValid.register, user.postRegister);
router.post("/login", authValid.login, user.postLogin)
router.get('/me', isUser, user.getUserInfor)
router.put('/update', isUser, userValid.update, user.updateProfile)

module.exports = router