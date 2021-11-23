module.exports = (sequelize, Sequelize) => {
    const PostCategory = sequelize.define("post_categories", {
        postId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        categoryId: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    });
    return PostCategory;
};