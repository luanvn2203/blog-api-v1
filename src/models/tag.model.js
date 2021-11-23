module.exports = (sequelize, Sequelize) => {
    const Tag = sequelize.define("tag", {
        title: Sequelize.STRING(100),
        metaTitle: Sequelize.STRING(100),
        slug: Sequelize.STRING(100),
        content: Sequelize.STRING(200)
    });
    return Tag;
  };