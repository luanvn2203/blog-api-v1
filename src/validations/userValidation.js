import { check } from 'express-validator/check'
import { AUTH_VALIDATIONS_ERROR } from '../../lang/vi'

let update = [
    check("params.username", AUTH_VALIDATIONS_ERROR.USERNAME_INCORRECT)
        .optional()
        .isLength({ min: 3, max: 32 })
        .matches(/^[\s0-9a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ ]+$/)
        .trim(),
    check("params.intro", AUTH_VALIDATIONS_ERROR.INTRO_INCORRECT)
        .optional()
        .isLength({ min: 8 }),
    check("params.profile", AUTH_VALIDATIONS_ERROR.PROFILE_INCORRECT)
        .optional()
        .isLength({ min: 8 }),
    check("params.mobile", AUTH_VALIDATIONS_ERROR.PHONE_INCORRECT)
        .optional()
        .matches(/^(0)[0-9]{9,10}$/)
]
let validatePassword = [
    check("params.originalPassword", AUTH_VALIDATIONS_ERROR.PASSWORD_INCORRECT)
        .isLength({ min: 8 })
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/),
    check("params.newPassword", AUTH_VALIDATIONS_ERROR.PASSWORD_INCORRECT)
        .isLength({ min: 8 })
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/),
    check("params.confirmNewPassword", AUTH_VALIDATIONS_ERROR.CONFIRM_PASSWORD_NOT_MATCHES)
        .custom((value, { req }) => {
            return value === req.body.params.newPassword
        })
]
export default {
    update,
    validatePassword
}