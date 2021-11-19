'use strict'
import { Model } from 'sequelize'


module.exports = (sequelize, DataTypes) =>{
    class PostComment extends Model {
        static associate(models){

        }
    }

    PostComment.init({
        postId:DataTypes.INTEGER
    },{
        sequelize,
        tableName:'post_comments'
    })
}