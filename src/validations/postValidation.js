import { check } from 'express-validator/check'
import { POST_VALIDATION_ERRORS } from '../../lang/vi'

let validPost = [
    check('params.title', POST_VALIDATION_ERRORS.TITLE_ERROR)
        .isLength({ min: 3, max: 100 })
        .trim(),
    check('params.metaTitle', POST_VALIDATION_ERRORS.META_TITLE_ERROR)
        .isLength({ min: 3, max: 100 })
        .trim(),
    check('params.isPublished', POST_VALIDATION_ERRORS.IS_PUBLISHED_ERROR)
        .isIn([true, false]),
    check('params.summary', POST_VALIDATION_ERRORS.SUMMARY)
        .isLength({ min: 3 }),
    check('params.content', POST_VALIDATION_ERRORS.CONTENT_ERROR)
        .isLength({ min: 20 })
]

export default {
    validPost
}