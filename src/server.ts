import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import * as dotenv from "dotenv";
import express from "express";
import connectDB from "./config/db";

dotenv.config({ path: "./src/config/config.env" });

connectDB();

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());

const PORT = process.env.PORT;

const server = app.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`);
});

process.on("unhandledRejection", (err: any, promise) => {
  console.log(`Error: ${err.message}`);
  server.close(() => process.exit(1));
});
