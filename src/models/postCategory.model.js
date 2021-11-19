'use strict'
import { Model } from 'sequelize'


module.exports = (sequelize, DataTypes) => {
    class PostCategory extends Model {
        static associate(models) {

        }
    }

    PostCategory.init({
        postId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        categoryId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        sequelize,
        tableName: 'post_categories'
    })
    return PostCategory
}