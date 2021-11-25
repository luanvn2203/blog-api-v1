module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true
    },
    roleId:{
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    username: Sequelize.STRING,
    hashedPassword: Sequelize.STRING,
    intro: Sequelize.TEXT('tiny'),
    profile: Sequelize.TEXT,
    mobile: Sequelize.STRING(11),
    isActived: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    lastLogin: {
      type: Sequelize.DATE,
      allowNull: true
    }
  });

  return User;
};