import { USER_TRANS_ERROR, USER_TRANS_SUCCESS } from '../../lang/vi'
import db from '../models/index'

const CategoryModel = db.categories

/**
 * Create multiple category
 * @param {array of category object} categoryList 
 * @returns promise
 */
async function createNewCategories(categoryList) {
    return new Promise((resolve, reject) => {
        CategoryModel.bulkCreate(categoryList)
            .then(result => {
                if (!result) {
                    return reject(USER_TRANS_ERROR.CREATE_CATEGORIES_FAILED)
                }
                return resolve(USER_TRANS_SUCCESS.CREATE_CATEGORIES_SUCCESS)
            })
            .catch(err => {
                return reject(USER_TRANS_ERROR.INTERNAL_SERVER_ERROR)
            })
    })
}

module.exports = {
    createNewCategories: createNewCategories
}