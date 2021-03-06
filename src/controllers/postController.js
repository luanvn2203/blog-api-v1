import { USER_TRANS_ERROR } from "../../lang/vi"
import { CLIENT_ERROR_STATUS, SUCCESSFUL_STATUS } from "../configs/httpStatusCode"
import postService from '../services/post.service'
import { handleError2 } from '../utils/Helper'

/**
 * create new post
 * @param {*} req 
 * @param {*} res 
 * @returns response
 */
async function createNewPost(req, res) {
    if (!req.body.params.title ||
        !req.body.params.content) {
        return res.status(SUCCESSFUL_STATUS.ACCEPTED).json({
            error: USER_TRANS_ERROR.PARAMS_INVALID
        })
    }

    try {
        handleError2(req, res)
        const post = {
            authorId: req.signInUser.email,
            title: req.body.params.title,
            metaTitle: req.body.params.metaTitle || null,
            avatar: req.body.params.avatar || 'https://saigongiftbox.com/wp-content/uploads/2021/03/11-20-780x470.jpg',
            slug: req.body.params.slug || null,
            summary: req.body.params.summary || null,
            isPublished: req.body.params.isPublished,
            content: req.body.params.content,
        }
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

/**
 * update existed post
 * @param {*} req 
 * @param {*} res 
 * @returns response
 */
async function updatePost(req, res) {

    try {
        handleError2(req, res)

        const post = {
            title: req.body.params.title,
            metaTitle: req.body.params.metaTitle,
            avatar: req.body.params.avatar,
            slug: req.body.params.slug,
            summary: req.body.params.summary,
            isPublished: req.body.params.isPublished,
            content: req.body.params.content,
        }
        const result = await postService.updatePost(post, req.body.params.id, req.signInUser.email)
        return res.status(SUCCESSFUL_STATUS.OK).json({
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