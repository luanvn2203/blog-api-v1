module.exports = (sequelize, Sequelize) => {
    const Category = sequelize.define("category", {
      title: {
        type: Sequelize.STRING(100)
      },
      metaTitle: {
        type: Sequelize.STRING(100)
      },
      slug: {
        type: Sequelize.STRING(100)
      },
      content: {
        type: Sequelize.STRING(200)
      },
    });
    return Category;
  };