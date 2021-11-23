require('dotenv').config()
import { USER_TRANS_ERROR, USER_TRANS_SUCCESS } from '../../lang/vi';
import { CLIENT_ERROR_STATUS, SERVER_ERROR_STATUS, SUCCESSFUL_STATUS } from '../configs/httpStatusCode';
import userService from '../services/user.service'
// import DBHelper from '../utils/DBHelper'
const jwt = require("jsonwebtoken");
/**
 * Generate new access token, refresh to when login or get new token to keep login
 * @param {Object} payload 
 * @returns access token & refresh token
 */
const generateToken = (payload) => {
    //jwt
    const accessToken = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "24h",
    });
    const refreshToken = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "24h",
    });
    return { accessToken, refreshToken };
};

/**
 * Register new account
 * @param {request} req 
 * @param {response} res 
 * @returns register status
 */
async function postRegister(req, res) {
    console.log(req.body)
    if (!req.body.params.email) {
        res.status(CLIENT_ERROR_STATUS.BAD_REQUEST).send({
            message: "Register content can not be empty!"
        });
        return;
    }

    try {
        await userService.createNewUserAccount(req.body.params.email, req.body.params.password)
        return res.status(SUCCESSFUL_STATUS.CREATED).json({
            message: USER_TRANS_SUCCESS.REGISTER_SUCCESS
        })
    } catch (error) {
        if (error.parent.message.includes("Duplicate entry")) {
            return res.status(SUCCESSFUL_STATUS.ACCEPTED).json(USER_TRANS_ERROR.EMAIL_HAS_BEEN_USE)
        }
        return res.status(SERVER_ERROR_STATUS.INTERNAL_SERVER_ERROR).json({
            message: USER_TRANS_ERROR.INTERNAL_SERVER_ERROR,
            error: error.errors[0].message
        })
    }

}

/**
 * Login function
 * @param {request} req 
 * @param {response} res 
 * @returns tokens
 */
async function postLogin(req, res) {
    try {
        const result = await userService.checkLogin(req.body.params.email, req.body.params.password)
        const userInforToGenerateToken = {
            email: result.email,
            username: result.username,
            roleId: result.roleId
            /**
             * other attributes
             * roleId : result.roleId
             */
        }
        const tokens = generateToken(userInforToGenerateToken)
        const decoded = jwt.verify(
            tokens.accessToken,
            process.env.JWT_SECRET
        );
        return res.status(SUCCESSFUL_STATUS.OK).json({
            accessToken: tokens.accessToken,
            expiredTime: decoded.exp,
            regreshToken: tokens.refreshToken,
        })
    } catch (error) {
        console.log(error)
        return res.status(SUCCESSFUL_STATUS.ACCEPTED).json(error)
    }
}

/**
 * get user information base on access token
 */
async function getUserInfor(req, res) {
    try {
        if (!req.email) {
            res.status(CLIENT_ERROR_STATUS.FORBIDDEN).json(USER_TRANS_ERROR.JWT_INVALID)
        }
        const userInformation = await userService.getUserInformationByPK(req.email)
        res.status(SUCCESSFUL_STATUS.OK).json(userInformation)
    } catch (error) {
        return res.status(SUCCESSFUL_STATUS.ACCEPTED).json({
            message: USER_TRANS_ERROR.NOT_FOUND_USER_WITH_THIS_EMAIL
        })
    }
}

export default {
    postRegister,
    postLogin,
    getUserInfor
}