module.exports = (sequelize, Sequelize) => {
    const PostComment = sequelize.define("post_comments", {
        postId:Sequelize.INTEGER
    });
    return PostComment;
};