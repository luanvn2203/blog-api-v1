'use strict'
import { Model } from 'sequelize'


module.exports = (sequelize, DataTypes) => {
    class PostTag extends Model {
        static associate(models) {

        }
    }

    PostTag.init({
        postId: {
            type:DataTypes.INTEGER,
            allowNull: false
        },
        tagId: {
            type:DataTypes.INTEGER,
            allowNull: false
        }
    },{
        sequelize,
        tableName:'post_tags'
    })
    return PostTag
}