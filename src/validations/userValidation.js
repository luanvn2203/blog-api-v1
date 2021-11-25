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

export default {
    update
}