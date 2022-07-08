import express, { Express, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/products-route";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

// To recognize the incoming Request Object as a JSON Object
app.use(express.json());

// CORS Headers => Required for cross-origin/ cross-server communication
app.use(cors());
app.use(router);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
