import express from 'express'
import postController from '../controllers/postController'
import { isUser } from '../middlewares/auth'
import { postValid } from '../validations/index'
const router = express.Router()

router.post('/create', isUser, postValid.validPost, postController.createNewPost)
router.put('/update', isUser, postValid.validPost, postController.updatePost)


module.exports = router