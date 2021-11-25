import express from 'express'
import postController from '../controllers/postController'
import {  isUser} from '../middlewares/auth'
import postValidation from '../validations/postValidation'

const router = express.Router()

router.post('/create', isUser, postValidation.validPost, postController.createNewPost)
router.post('/update', isUser, postValidation.validPost, postController.updatePost)


module.exports = router