import db from '../models/index'
const RoleModel = db.roles
const Op = db.Sequelize.Op
import bcrypt from 'bcrypt'
import { USER_TRANS_ERROR } from '../../lang/vi'

const roleList = [
    {
        roleName: "User",
    },
    {
        roleName: "Administrator",
    },
    {
        roleName: "Moderator"
    }
]

async function addSampleRole() {
    return new Promise((resolve, reject) => {
        RoleModel.bulkCreate(roleList)
            .then(result => {
                return resolve(true)
            })
            .catch(err => {
                return reject(err)
            })
    })
}

module.exports = {
    addSampleRole:addSampleRole
}