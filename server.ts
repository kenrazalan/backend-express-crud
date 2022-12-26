import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
// import cors from "cors";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

// const corsOptions = {
//   origin: "http://localhost:3030",
// };

app.get("/", (req: Request, res: Response) => {
  res.send("sasdsad");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
