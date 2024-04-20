import { config } from "dotenv";
import { startApp } from "./src/app";
import { connectToDatabase } from "./src/utilities/connect.database";

config();
connectToDatabase();
startApp();