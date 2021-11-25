import { USER_TRANS_ERROR, USER_TRANS_SUCCESS } from '../../lang/vi'
import db from '../models/index'

const TagModel = db.tags

/**
 * Create multiple tag
 * @param {array of category object} tagList 
 * @returns promise
 */
async function createNewTags(tagList) {
    return new Promise((resolve, reject) => {
        TagModel.bulkCreate(tagList)
            .then(result => {
                if (!result) {
                    return reject(USER_TRANS_ERROR.CREATE_TAGS_FAILED)
                }
                return resolve(USER_TRANS_SUCCESS.CREATE_TAGS_SUCCESS)
            })
            .catch(err => {
                return reject(USER_TRANS_ERROR.INTERNAL_SERVER_ERROR)
            })
    })
}

module.exports = {
    createNewTags: createNewTags
}