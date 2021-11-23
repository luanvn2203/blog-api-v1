module.exports = (sequelize, Sequelize) => {
    const PostTag = sequelize.define("post_tags", {
        postId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        tagId: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    });
    return PostTag;
};