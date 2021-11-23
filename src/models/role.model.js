module.exports = (sequelize, Sequelize) => {
    const Role = sequelize.define('role', {
        roleName: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        description: {
            type: Sequelize.STRING(100),
        }
    })
    return Role
}