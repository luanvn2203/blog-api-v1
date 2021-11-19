'use strict';

import { Model } from 'sequelize'

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    fullName: DataTypes.STRING,
    hashedPassword: DataTypes.STRING(32),
    intro: DataTypes.TEXT('tiny'),
    profile: DataTypes.TEXT,
    mobile: DataTypes.STRING(10),
    isActived: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    lastLogin: {
      type: DataTypes.DATE,
      allowNull: true
    }
  },

    {
      sequelize,
      modelName: 'user',
    });
  return User;
};