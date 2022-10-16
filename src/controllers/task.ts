import SequelizeManager from "../db/sequelize.js"
import { TaskMongoModel } from "../models/task.mongoose.js"

export default class TaskController {
  public static async create(data: any): Promise<any> {
    if (process.env.CURRENT_DB === "MONGO")
      return TaskMongoModel.getInstance().create(data)
    // if (process.env.CURRENT_DB === "PG" || process.env.CURRENT_DB === "MYSQL")
    //   return TaskModel.getInstance().create(data)
  }
  public static async update(data: any): Promise<any> {
    return TaskMongoModel.getInstance().update(data)
  }
  public static async getById(id: string): Promise<any> {
    return TaskMongoModel.getInstance().getById(id)
  }
  public static async getAll(): Promise<any> {
    if (process.env.CURRENT_DB === "MONGO")
      return TaskMongoModel.getInstance().getAll()
    if (process.env.CURRENT_DB === "PG" || process.env.CURRENT_DB === "MYSQL")
      return SequelizeManager.sequalize.models.tasks.findAll()
  }
  public static async delete(id: string): Promise<void> {
    return TaskMongoModel.getInstance().delete(id)
  }
}
