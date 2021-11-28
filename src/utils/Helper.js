import { validationResult } from 'express-validator/check'
import { CLIENT_ERROR_STATUS } from '../configs/httpStatusCode'

/**
 * This function use to handle result after validate the incoming request
 */
export const handleError = (req, res) => {
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
    return 
}


export const handleError2 = (req, res) => {
    return new Promise((resolve, reject) => {
        const errorArr = []
        const validationError = validationResult(req)
        if (!validationError.isEmpty()) {
            let errors = Object.values(validationError.mapped())
            errors.forEach(item => {
                errorArr.push(item.msg)
            })
            reject(errorArr)
        }
        resolve(true)
    })
}
