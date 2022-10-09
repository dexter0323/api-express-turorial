import * as dotenv from "dotenv";
import express from "express";
import Mongo from "./database/mongo.js";
import { routes } from "./routes/index.js";
export async function init() {
    if (process.env.VERBOSE === "true")
        console.info("Starting API...");
    dotenv.config();
    const app = express();
    for (const dbName of process.env.MONGODB_DEFAULT.split(",")) {
        await Mongo.connect(process.env.MONGODB_URI, dbName);
    }
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use("/api", routes);
    app.listen(process.env.PORT || 3000, process.env.HOST || "localhost", () => console.info(`API is running on ${process.env.HOST}:${process.env.PORT}!`));
}
//# sourceMappingURL=index.js.map