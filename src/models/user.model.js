module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true
    },
    username: Sequelize.STRING,
    hashedPassword: Sequelize.STRING,
    intro: Sequelize.TEXT('tiny'),
    profile: Sequelize.TEXT,
    mobile: Sequelize.STRING(10),
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