import db from '../models/index'
import userService from '../services/user.service'
import DBHelper from '../utils/DBHelper'

const UserModel = db.users
const Op = db.Sequelize.Op

async function postRegister(req, res) {
    if (!req.body.email) {
        res.status(400).send({
            message: "Register content can not be empty!"
        });
        return;
    }
   

}

async function postLogin(req, res) {

}


module.exports = {
    postRegister: postRegister,
    postLogin: postLogin
}