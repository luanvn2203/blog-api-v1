'use strict'
import { Model } from 'sequelize'

module.exports = (sequelize, DataTypes) => {
    class Tag extends Model {
        static associate(models) {

        }
    }

    Tag.init({
        title: DataTypes.STRING(100),
        metaTitle: DataTypes.STRING(100),
        slug: DataTypes.STRING(100),
        content: DataTypes.STRING(200)
    }, {
        sequelize,
        modelName: "tag"
    })
    return Tag
}