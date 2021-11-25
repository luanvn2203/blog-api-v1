import { USER_TRANS_ERROR, USER_TRANS_SUCCESS } from '../../lang/vi'
import { CLIENT_ERROR_STATUS, SERVER_ERROR_STATUS } from '../configs/httpStatusCode'
import db from '../models/index'
import { Op } from 'sequelize'
const PostModel = db.posts

/**
 * create new post
 * @param {post object} post 
 * @returns promise
 */
async function createNewPost(post) {
    return new Promise((resolve, reject) => {

        PostModel.findOrCreate({
            where: {
                [Op.and]: [
                    { authorId: post.authorId },
                    { title: post.title }
                ]
            },
            defaults: post
        })
            .then(result => {
                if (!result) {
                    return reject(USER_TRANS_ERROR.CREATE_NEW_POST_FAILED)
                }
                if (!result[1]) {
                    return reject(USER_TRANS_ERROR.CREATE_NEW_POST_FAILED_WITH_DUPLICATE_TITLE_AND_CREATOR)
                }
                return resolve(USER_TRANS_SUCCESS.CREATE_NEW_POST_SUCCESS)
            })
            .catch(err => {
                return reject(USER_TRANS_ERROR.INTERNAL_SERVER_ERROR)
            })
    })
}

/**
 * Update post
 * @param {object} post 
 * @returns promise
 */
async function updatePost(post, id, authorId) {
    return new Promise((resolve, reject) => {
        PostModel.update(post, {
            where: {
                [Op.and]: [
                    { id: id },
                    { authorId: authorId }
                ]
            }, validate: true
        })
            .then(result => {
                if (result[0] === 0) {
                    return reject(USER_TRANS_ERROR.UPDATE_POST_FAILED)
                }
                return resolve(USER_TRANS_SUCCESS.UPDATE_POST_SUCCESS)
            })
            .catch(err => {
                return reject(USER_TRANS_ERROR.INTERNAL_SERVER_ERROR)
            })

    })
}
export default {
    createNewPost,
    updatePost
}