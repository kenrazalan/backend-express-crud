import { dbConfig } from "../config/dbConfig";
import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  // @ts-ignore
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db: any = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.todo = require("./todo.model.js")(sequelize, DataTypes);

export default db;
