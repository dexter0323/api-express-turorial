import * as dotenv from "dotenv"

dotenv.config()

import express from "express"
const app = express()

import * as v1 from "./src/routes/v1"

app.use("api/v1", <any>v1)

app.listen(<any>process.env.PORT, <string>process.env.HOST, () =>
  console.info(`API is running on ${process.env.HOST}:${process.env.PORT}!`)
)
