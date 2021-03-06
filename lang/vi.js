//response message
export const USER_TRANS_SUCCESS = {
    REGISTER_SUCCESS: 'Đăng ký tài khoản thành công',

    CREATE_CATEGORIES_SUCCESS: 'Tạo thể loại bài viết thành công',
    CREATE_TAGS_SUCCESS: 'Tạo mới thẻ bài viết thành công',
    CREATE_NEW_POST_SUCCESS: 'Tạo bài viết thành công',

    UPDATE_POST_SUCCESS: 'Cập nhật bài viết thành công',
    UPDATE_USER_SUCCESS:'Cập nhật thông tin cá nhân thành công',
    CHANGE_PASSWORD_SUCCESS: 'Đổi mật khẩu thành công'

}

export const USER_TRANS_ERROR = {
    INTERNAL_SERVER_ERROR: 'Có lỗi từ phía server',
    JWT_INVALID: 'Mã không hợp lệ',
    EMAIL_HAS_BEEN_USE: 'Email đã được sử dụng',
    INVALID_USER_OR_EMAIL: 'Email hoặc mật khẩu không đúng',
    NOT_FOUND_USER_WITH_THIS_EMAIL: 'Không tin thấy thông tin người dùng',
    PARAMS_INVALID: 'Yêu cầu không đầy đủ',
    OLD_PASSWORD_INCORRECT: 'Mật khẩu cũ không hợp lệ',
    NOT_FOUND_USER: 'Không tìm thấy người dùng',
    CREATE_CATEGORIES_FAILED: 'Tạo thể loại bài viết không thành công',
    CREATE_TAGS_FAILED: 'Tạo mới thẻ bài viết không thành công',
    CREATE_NEW_POST_FAILED: 'Tạo bài viết không thành công',
    CREATE_NEW_POST_FAILED_WITH_DUPLICATE_TITLE_AND_CREATOR: 'Tên bài viết đã tồn tại trong thư viện của bạn, vui lòng chọn tên khác',

    UPDATE_POST_FAILED: 'Cập nhật bài viết thất bại',
    UPDATE_USER_ERROR: 'Cập nhật thông tin bản thân thất bại',
    CHANGE_PASSWORD_FAILED: 'Đổi mật khẩu không thành công'
}



//validation message
export const AUTH_VALIDATIONS_ERROR = {
    EMAIL_INCORRECT: 'Email không hợp lệ',
    PASSWORD_INCORRECT: 'Mật khẩu bao gồm chữ hoa, chữ thường, số, ký tự đặc biệt và lớn hơn 8 ký tự',
    CONFIRM_PASSWORD_NOT_MATCHES: 'Nhập lại mật khẩu không đúng',
    USERNAME_INCORRECT: 'Tên người dùng không đúng, bao gồm chữ, số và không có ký tự đặc biệt, tối đa 32 ký tự',
    INTRO_INCORRECT:'Phần giới thiệu bản thân ít nhất 8 ký tự',
    PROFILE_INCORRECT: 'Phần hồ sơ cá nhân ít nhất 8 ký tự',
    PHONE_INCORRECT:'Số điện thoại không đúng'
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