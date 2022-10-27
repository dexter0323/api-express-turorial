import { TaskMongoModel } from "../models/task.mongoose.js"
import { TaskModel } from "../models/task.sequilize.js"

export default class TaskController {
  public static async create(data: any): Promise<any> {
    if (process.env.CURRENT_DB === "MONGO")
      return TaskMongoModel.getInstance().create(data)
    if (process.env.CURRENT_DB === "PG" || process.env.CURRENT_DB === "MYSQL")
      return TaskModel.create(data)
  }
  public static async update(data: any): Promise<any> {
    if (process.env.CURRENT_DB === "MONGO")
      return TaskMongoModel.getInstance().update(data)
    if (process.env.CURRENT_DB === "PG" || process.env.CURRENT_DB === "MYSQL")
      return TaskModel.update(data)
  }
  public static async getById(id: string): Promise<any> {
    if (process.env.CURRENT_DB === "MONGO")
      return TaskMongoModel.getInstance().getById(id)
    if (process.env.CURRENT_DB === "PG" || process.env.CURRENT_DB === "MYSQL")
      return TaskModel.getById(id)
  }
  public static async getAll(): Promise<any> {
    if (process.env.CURRENT_DB === "MONGO")
      return TaskMongoModel.getInstance().getAll()
    if (process.env.CURRENT_DB === "PG" || process.env.CURRENT_DB === "MYSQL")
      return TaskModel.getAll()
  }
  public static async delete(id: string): Promise<void> {
    if (process.env.CURRENT_DB === "MONGO")
      return TaskMongoModel.getInstance().delete(id)
    if (process.env.CURRENT_DB === "PG" || process.env.CURRENT_DB === "MYSQL")
      return TaskModel.delete(id)
  }
}
