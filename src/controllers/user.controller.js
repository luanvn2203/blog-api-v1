import db from '../models/index'
import userService from '../services/user.service'
import DBHelper from '../utils/DBHelper'

const UserModel = db.users
const Op = db.Sequelize.Op

async function postRegister(req, res) {
    // if (!req.body.email) {
    //     res.status(400).send({
    //         message: "Register content can not be empty!"
    //     });
    //     return;
    // }
    console.log('ahii')
    console.log('ahii')
    console.log('ahii')
    console.log('ahii')
    console.log('ahii')
    const user = {
        email: "luanvn@gmail.com",
        hashedPassword: "123123123a",
        fullName: "Vo Nhut Luan"
    }

    try {
        UserModel.create(user)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while creating the Tutorial."
                });
            });
    } catch (error) {
        res.status(500).json("error")
    }

}

async function postLogin(req, res) {

}

export default {
    postRegister,
    postLogin
}