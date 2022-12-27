import express, { Express } from "express";
import dotenv from "dotenv";
import router from "./routes/todo.routes";
const cors = require("cors");

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// db.sequelize
//   .sync({ force: true })
//   .then(() => {
//     console.log("Synced db.");
//   })
//   .catch((err: any) => {
//     console.log("Failed to sync db: " + err.message);
//   });

app.use("/api/todos", router);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
