# blog-api-v1
src/config/dbConfig.js

module.exports = {
    HOST: "localhost",
    USER: "****",
    PASSWORD: "******",
    DB: "for-fun-blog",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
