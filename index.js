import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
app.use("api/v1", require("./src/routes/v1"));
app.listen(process.env.PORT, process.env.HOST, () => console.info(`API is running on ${process.env.HOST}:${process.env.PORT}!`));
//# sourceMappingURL=index.js.map