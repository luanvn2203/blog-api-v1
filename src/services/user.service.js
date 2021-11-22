import bcrypt from 'bcrypt'
import db from '../models/index'
const UserModel = db.users
const Op = db.Sequelize.Op
let createNewUserAccount = (email, password) => {
    return new Promise((resolve, reject) => {
        const saltRounds = 7;
        const salt = bcrypt.genSaltSync(saltRounds);  // encrypt password
        const encryptPassword = bcrypt.hashSync(password, salt);

        let user = {
            email: email,
            hashedPassword: encryptPassword
        }
        UserModel.create(user)
            .then(data => {
                return resolve(true)
            })
            .catch(err => {
                return reject(err)
            });
    })
}

module.exports = {
    createNewUserAccount: createNewUserAccount,
}