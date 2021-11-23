
import user from '../controllers/user.controller'
import verifyToken from '../middlewares/auth'
var router = require("express").Router();

router.post("/register", user.postRegister);
router.post("/login", user.postLogin)
router.get('/me', verifyToken, user.getUserInfor)
module.exports = router