import express from "express";
import { connection } from "./database/config/config";
import { router } from "./routes";

const app = express();

app.use(express.json());

app.use(router);

app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    res.status(500).json({ message: err.message });
  }
);

connection.sync().then(() => {
  console.log("Database connected");
}).catch((err) => {
  console.log('Database error', err);
})

app.listen(3333, () => {
  console.log("Server is running on port 3333");
})