import { USER_TRANS_ERROR } from "../../lang/vi"
import { CLIENT_ERROR_STATUS, SUCCESSFUL_STATUS } from "../configs/httpStatusCode"
import postService from '../services/post.service'
import { validationResult } from 'express-validator/check'


let handleError = (req, res) => {
    const errorArr = []
    const validationError = validationResult(req)
    if (!validationError.isEmpty()) {
        let errors = Object.values(validationError.mapped())
        errors.forEach(item => {
            errorArr.push(item.msg)
        })
        return res.status(CLIENT_ERROR_STATUS.BAD_REQUEST).send({
            errors: errorArr
        });
    }
    return true
}

async function createNewPost(req, res) {
    if (!req.body.params.title ||
        !req.body.params.content) {
        return res.status(CLIENT_ERROR_STATUS.BAD_REQUEST).json({
            error: USER_TRANS_ERROR.PARAMS_INVALID
        })
    }
    handleError(req, res)
    const post = {
        authorId: req.signInUser.email,
        title: req.body.params.title,
        metaTitle: req.body.params.metaTitle || null,
        slug: req.body.params.slug || null,
        summary: req.body.params.summary || null,
        isPublished: req.body.params.isPublished,
        content: req.body.params.content,
    }
    try {
        const result = await postService.createNewPost(post)
        return res.status(SUCCESSFUL_STATUS.CREATED).json({
            message: result
        })
    } catch (error) {
        return res.status(SUCCESSFUL_STATUS.ACCEPTED).json({
            error: error
        })
    }
}

async function updatePost(req, res) {
    if (!req.body.params.title ||
        !req.body.params.content) {
        return res.status(CLIENT_ERROR_STATUS.BAD_REQUEST).json({
            error: USER_TRANS_ERROR.PARAMS_INVALID
        })
    }
    handleError(req, res)

    const post = {
        id: req.body.params.id,
        title: req.body.params.title,
        metaTitle: req.body.params.metaTitle || null,
        slug: req.body.params.slug || null,
        summary: req.body.params.summary || null,
        isPublished: req.body.params.isPublished,
        content: req.body.params.content,
    }
    try {
        const result = await postService.updatePost(post)
        return res.status(SUCCESSFUL_STATUS.CREATED).json({
            message: result
        }) 
    } catch (error) {
        return res.status(SUCCESSFUL_STATUS.ACCEPTED).json({
            error: error
        })
    }

}

export default {
    createNewPost,
    updatePost
}