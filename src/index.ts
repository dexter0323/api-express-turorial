import * as dotenv from "dotenv"
import express from "express"
import Mongo from "./db/mongo.js"
import SequelizeManager from "./db/sequelize.js"
import { routes } from "./routes/index.js"

export async function init() {
  if (process.env.VERBOSE === "true") console.info("Starting API...")
  dotenv.config()
  const app: any = express()

  await SequelizeManager.connect(<string>process.env.PG_URI)

  for (const dbName of (<string>process.env.MONGODB_DEFAULT).split(",")) {
    await Mongo.connect(<string>process.env.MONGODB_URI, dbName)
  }

  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))

  app.use("/api", routes)
  app.listen(
    <any>process.env.PORT || 3000,
    <string>process.env.HOST || "localhost",
    () =>
      console.info(`API is running on ${process.env.HOST}:${process.env.PORT}!`)
  )
}
