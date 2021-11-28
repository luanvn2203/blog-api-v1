import db from '../models/index'
const UserModel = db.users
const Op = db.Sequelize.Op
import bcrypt from 'bcrypt'
import { USER_TRANS_ERROR, USER_TRANS_SUCCESS } from '../../lang/vi'
import sequelize from 'sequelize'

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
        const userRole = 1
        const user = {
            email: email,
            hashedPassword: encryptPassword,
            username: email.split("@")[0],
            roleId: userRole
        }
        UserModel.create(user)
            .then(data => {
                return resolve(true)
            })
            .catch(err => {
                if (err.parent.message.includes("Duplicate entry")){
                return reject(USER_TRANS_ERROR.EMAIL_HAS_BEEN_USE)
                }
                return reject(err.message)
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
        UserModel.findByPk(email,
            {
                include: [{
                    model: db.roles,
                    attributes: ['roleName', 'description']
                }],
                attributes: ['email', 'roleId', 'username', 'intro', 'profile', 'mobile'],
            })
            .then(user => {
                if (!user) {
                    return reject(USER_TRANS_ERROR.NOT_FOUND_USER_WITH_THIS_EMAIL)
                }
                // delete user.dataValues.hashedPassword
                // delete user.dataValues.lastLogin
                // delete user.dataValues.createdAt
                // delete user.dataValues.updatedAt

                return resolve(user)
            })
            .catch(err => {
                return reject(USER_TRANS_ERROR.INTERNAL_SERVER_ERROR)
            })
    })
}

/**
 * 
 * @param {object} user 
 * @param {PK} email 
 * @returns 
 */
async function updateUser(user, email) {
    return new Promise((resolve, reject) => {
        UserModel.update(user, { where: { email: email } })
            .then(result => {
                if (result[0] === 0) {
                    return reject(USER_TRANS_ERROR.UPDATE_USER_ERROR)
                }
                return resolve(USER_TRANS_SUCCESS.UPDATE_USER_SUCCESS)
            })
            .catch(err => {
                return reject(USER_TRANS_ERROR.INTERNAL_SERVER_ERROR)
            })
    })
}

async function updateLastLogin(email) {
    return new Promise((resolve, reject) => {
        UserModel.update({ lastLogin: sequelize.literal('CURRENT_TIMESTAMP') }, { where: { email: email } })
            .then(result => {
                resolve(true)
            })
            .catch(err => {
                resolve(err)
            })
    })
}

async function changeUserPassword(originalPassword, newPassword, email) {
    return new Promise(async (resolve, reject) => {
        const userInfo = await UserModel.findByPk(email)
        const isValidPassword = await comparePassword(originalPassword, userInfo.hashedPassword)
        console.log(isValidPassword)
        if (!isValidPassword) {
            return reject(USER_TRANS_ERROR.OLD_PASSWORD_INCORRECT)
        }
        const saltRounds = 7;
        const salt = bcrypt.genSaltSync(saltRounds);  // encrypt password
        const encryptPassword = bcrypt.hashSync(newPassword, salt);
        const result = UserModel.update({ hashedPassword: encryptPassword }, { where: { email: email } })
        if (!result[0] === 0) {
            return reject(USER_TRANS_ERROR.CHANGE_PASSWORD_FAILED)
        }
        //ok
        return resolve(USER_TRANS_SUCCESS.CHANGE_PASSWORD_SUCCESS)
    })
}

module.exports = {
    createNewUserAccount: createNewUserAccount,
    checkLogin: checkLogin,
    updateLastLogin: updateLastLogin,
    getUserInformationByPK: getUserInformationByPK,
    updateUser: updateUser,
    changeUserPassword: changeUserPassword
}