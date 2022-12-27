import dotenv from "dotenv";
dotenv.config();

import { keys } from "../keys";

export const dbConfig = {
  HOST: keys.HOST,
  USER: "admin",
  PASSWORD: keys.PASSWORD,
  DB: "project-crud",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
