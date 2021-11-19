'use strict'
import { Model } from 'sequelize'


module.exports = (sequelize, DataTypes) => {
    class Post extends Model {

        static associate(models) {

        }
    }

    Post.init({
        authorId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING(100)
        },
        metaTitle:{
            type: DataTypes.STRING(100),
        },
        slug: DataTypes.STRING(100),
        summary: DataTypes.TEXT('tiny'),
        isPublished: {
            type:DataTypes.BOOLEAN,
            defaultValue: false
        },
        content: DataTypes.TEXT,
    },{
        sequelize,
        modelName: 'post'
    })
    return Post
}
