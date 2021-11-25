//response message
export const USER_TRANS_SUCCESS = {
    REGISTER_SUCCESS: 'Đăng ký tài khoản thành công',

    CREATE_CATEGORIES_SUCCESS: 'Tạo thể loại bài viết thành công',
    CREATE_TAGS_SUCCESS: 'Tạo mới thẻ bài viết thành công',
    CREATE_NEW_POST_SUCCESS: 'Tạo bài viết thành công',

    UPDATE_POST_SUCCESS: 'Cập nhật bài viết thành công'

}

export const USER_TRANS_ERROR = {
    INTERNAL_SERVER_ERROR: 'Có lỗi từ phía server',
    JWT_INVALID: 'Mã không hợp lệ',
    EMAIL_HAS_BEEN_USE: 'Email đã được sử dụng',
    INVALID_USER_OR_EMAIL: 'Email hoặc mật khẩu không đúng',
    NOT_FOUND_USER_WITH_THIS_EMAIL: 'Không tin thấy thông tin người dùng',
    PARAMS_INVALID: 'Yêu cầu không đầy đủ',

    CREATE_CATEGORIES_FAILED: 'Tạo thể loại bài viết không thành công',
    CREATE_TAGS_FAILED: 'Tạo mới thẻ bài viết không thành công',
    CREATE_NEW_POST_FAILED: 'Tạo bài viết không thành công',
    CREATE_NEW_POST_FAILED_WITH_DUPLICATE_TITLE_AND_CREATOR: 'Tên bài viết đã tồn tại trong thư viện của bạn, vui lòng chọn tên khác',

    UPDATE_POST_FAILED: 'Cập nhật bài viết thất bại',
}



//validation message
export const AUTH_VALIDATIONS_ERROR = {
    EMAIL_INCORRECT: 'Email không hợp lệ',
    PASSWORD_INCORRECT: 'Mật khẩu bao gồm chữ hoa, chữ thường, số, ký tự đặc biệt và lớn hơn 8 ký tự',
    CONFIRM_PASSWORD_NOT_MATCHES: 'Nhập lại mật khẩu không đúng'
}
export const POST_VALIDATION_ERRORS = {
    TITLE_ERROR: "Tên bài viết quá dài, tối đa 100 ký tự",
    META_TITLE_ERROR: "Tên thẻ tiêu đề quá dài, tối đa 100 ký tự",
    SLUG_ERROR: "Slug quá dài, tối đa 100 ký tự",
    IS_PUBLISHED_ERROR: "Lựa chọn công khai không hợp lệ",
    AVATAR_ERROR: 'Độ dài đường dẫn quá dài',
    SUMMARY: 'Tóm tắt ít nhất 3 ký tự',
    CONTENT_ERROR: 'Nội dung ít nhất 20 ký tự'
}