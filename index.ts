import { config } from "dotenv";
import { startApp } from "./src/app";
import { connectToDatabase } from "./src/middlewares/connect.database";

config();
connectToDatabase();
startApp();