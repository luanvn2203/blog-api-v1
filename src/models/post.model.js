module.exports = (sequelize, Sequelize) => {
    const Post = sequelize.define("post", {
        authorId: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        title: {
            type: Sequelize.STRING(100)
        },
        metaTitle:{
            type: Sequelize.STRING(100),
        },
        slug: Sequelize.STRING(100),
        summary: Sequelize.TEXT('tiny'),
        isPublished: {
            type:Sequelize.BOOLEAN,
            defaultValue: false
        },
        content: Sequelize.TEXT,
    });
    return Post;
};