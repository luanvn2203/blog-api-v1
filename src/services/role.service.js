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
                return true
            })
            .catch(err => {
                return false
            })
    })
}

module.exports = {
    addSampleRole:addSampleRole
}