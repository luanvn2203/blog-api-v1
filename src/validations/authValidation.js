import { check } from 'express-validator/check'
import { AUTH_VALIDATIONS_ERROR } from '../../lang/vi'

let register = [
    check("params.email", AUTH_VALIDATIONS_ERROR.EMAIL_INCORRECT)
        .isEmail()
        .trim(),
    check("params.password", AUTH_VALIDATIONS_ERROR.PASSWORD_INCORRECT)
        .isLength({ min: 8 })
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/),
    check("params.confirmPassword", AUTH_VALIDATIONS_ERROR.CONFIRM_PASSWORD_NOT_MATCHES)
        .custom((value, { req }) => {
            return value === req.body.params.password
        })
]

let login = [
    check("params.email", AUTH_VALIDATIONS_ERROR.EMAIL_INCORRECT)
        .isEmail()
        .trim()
]

export default {
    register,
    login
}