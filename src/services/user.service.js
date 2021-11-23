import db from '../models/index'
const UserModel = db.users
const Op = db.Sequelize.Op
import bcrypt from 'bcrypt'
import { USER_TRANS_ERROR } from '../../lang/vi'

/**
 * 
 * @param {String} enteredPassword  password from request
 * @param {String} originalPassword password from DB
 * return TRUE OR FALSE
 */
let comparePassword = (enteredPassword, originalPassword) => {
    return bcrypt.compare(enteredPassword, originalPassword)
}

let createNewUserAccount = (email, password) => {
    return new Promise((resolve, reject) => {
        const saltRounds = 7;
        const salt = bcrypt.genSaltSync(saltRounds);  // encrypt password
        const encryptPassword = bcrypt.hashSync(password, salt);

        let user = {
            email: email,
            hashedPassword: encryptPassword,
            username: email.split("@")[0]
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

async function checkLogin(email, password) {
    return new Promise((resolve, reject) => {
        UserModel.findByPk(email)
            .then(async user => {
                if (user) {
                    const isValidPassword = await comparePassword(password, user.hashedPassword)
                    if (!isValidPassword) {
                        return reject(USER_TRANS_ERROR.INVALID_USER_OR_EMAIL)
                    }
                    delete user.hashedPassword
                    return resolve(user)
                } else {
                    return reject(USER_TRANS_ERROR.INVALID_USER_OR_EMAIL)
                }
            })
            .catch(err => {
                return reject(USER_TRANS_ERROR.INTERNAL_SERVER_ERROR)
            });
    })
}


async function getUserInformationByPK(email) {
    return new Promise((resolve, reject) => {
        UserModel.findByPk(email)
            .then(user => {
                if (!user) {
                    return reject(USER_TRANS_ERROR.NOT_FOUND_USER_WITH_THIS_EMAIL)
                }
                delete user.dataValues.hashedPassword
                delete user.dataValues.lastLogin
                delete user.dataValues.createdAt
                delete user.dataValues.updatedAt
                
                return resolve(user)
            })
            .catch(err => {
                return reject(USER_TRANS_ERROR.INTERNAL_SERVER_ERROR)
            })
    })
}

module.exports = {
    createNewUserAccount: createNewUserAccount,
    checkLogin: checkLogin,
    getUserInformationByPK: getUserInformationByPK
}