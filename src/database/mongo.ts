import { connect, Collection } from "mongoose"
export default class Mongo {
  public static db: any = []
  public static async connect(mongoUri: string, dbName: string) {
    try {
      if (Mongo.db[dbName]) Promise.resolve(Mongo.db[dbName])
      Mongo.db[dbName] = await connect(mongoUri + dbName)
      if (process.env.VERBOSE === "true")
        console.info(`Connected to mongo db ${dbName}`)
      Promise.resolve(Mongo.db[dbName])
    } catch (error) {
      if (process.env.VERBOSE === "true") console.error(error)
      Promise.reject(error)
    }
  }
}
