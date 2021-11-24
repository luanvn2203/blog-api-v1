export const USER_TRANS_SUCCESS = {
    REGISTER_SUCCESS: 'Đăng ký tài khoản thành công'
}

export const USER_TRANS_ERROR = {
    INTERNAL_SERVER_ERROR: 'Có lỗi từ phía server',
    JWT_INVALID: 'Mã không hợp lệ',
    EMAIL_HAS_BEEN_USE: 'Email đã được sử dụng',
    INVALID_USER_OR_EMAIL: 'Email hoặc mật khẩu không đúng',
    NOT_FOUND_USER_WITH_THIS_EMAIL: 'Không tin thấy thông tin người dùng'
}

export const AUTH_VALIDATIONS_ERROR = {
    EMAIL_INCORRECT: 'Email không hợp lệ',
    PASSWORD_INCORRECT: 'Mật khẩu bao gồm chữ hoa, chữ thường, số, ký tự đặc biệt và lớn hơn 8 ký tự',
    CONFIRM_PASSWORD_NOT_MATCHES: 'Nhập lại mật khẩu không đúng'
}