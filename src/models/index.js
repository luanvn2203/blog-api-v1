import dbConfig from "../configs/dbConfig";
import Sequelize from 'sequelize'
import { configRelationShip } from "./modelRelationship";

//config sequelize
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
})

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

//import model
db.categories = require("./category.model")(sequelize, Sequelize);
db.users = require('./user.model')(sequelize, Sequelize);
db.posts = require('./post.model')(sequelize, Sequelize)
db.tags = require('./tag.model')(sequelize, Sequelize)
db.postCategories = require('./postCategory.model')(sequelize, Sequelize)
db.postTags = require('./postTag.model')(sequelize, Sequelize)
db.postComments = require('./postComment.model')(sequelize, Sequelize)

//Table relation ship
configRelationShip(db)


module.exports = db;