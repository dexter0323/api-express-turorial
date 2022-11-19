import { connect } from 'mongoose'
export default class Mongo {
  public static db: any = []
  public static async connect(mongoUri: string, dbName: string): Promise<any> {
    try {
      if (!Mongo.db[dbName]) {
        Mongo.db[dbName] = await connect(mongoUri + dbName)
        if (process.env.VERBOSE === 'true')
          console.info(`Connected to mongodb ${dbName}`)
      }
      return Promise.resolve(Mongo.db[dbName])
    } catch (error) {
      if (process.env.VERBOSE === 'true') console.error(error)
      return Promise.reject(error)
    }
  }
}
