import { USER_TRANS_ERROR, USER_TRANS_SUCCESS } from '../../lang/vi';
import userService from '../services/user.service'
import DBHelper from '../utils/DBHelper'


async function postRegister(req, res) {
    if (!req.body.email) {
        res.status(400).send({
            message: "Register content can not be empty!"
        });
        return;
    }

    const email = req.body.email
    const password = req.body.password
    try {
        await userService.createNewUserAccount(email, password)
        return res.status(201).json({
            message: USER_TRANS_SUCCESS.REGISTER_SUCCESS
        })
    } catch (error) {
        if (error.parent.message.includes("Duplicate entry")) {
            return res.status(500).json(USER_TRANS_ERROR.EMAIL_HAS_BEEN_USE)
        }
        return res.status(500).json({
            message: USER_TRANS_ERROR.INTERNAL_SERVER_ERROR,
            error: error.errors[0].message
        })
    }

}

async function postLogin(req, res) {

}

export default {
    postRegister,
    postLogin
}