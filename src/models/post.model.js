module.exports = (sequelize, Sequelize) => {
    const Post = sequelize.define("posts", {
        authorId: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        title: {
            type: Sequelize.STRING(100)
        },
        avatar: {
            type: Sequelize.STRING(300)
        },
        metaTitle: {
            type: Sequelize.STRING(100),
        },
        slug: Sequelize.STRING(100),
        summary: Sequelize.TEXT('tiny'),
        isPublished: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
        content: Sequelize.TEXT,
        status: {
            type: Sequelize.BOOLEAN,
            defaultValue: true
        }
    });
    return Post;
};