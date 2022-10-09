import Mongo from "../mongo.js"
import { Model } from "mongoose"

interface ITask {
  name: string
  status: string
  createdBy: string
  date: Date
}

export class TaskModel {
  private schema = new Mongo.db.TASK_MANAGER.Schema({
    name: { type: String, required: true },
    status: { type: String, required: true, default: "pending" },
    createdBy: { type: String, required: true },
    date: { type: Date, default: Date.now },
  })
  private model = Mongo.db.TASK_MANAGER.model("task", this.schema)
  public async create(data: any): Promise<any> {
    try {
      const task = new this.model(data)
      const result = await task.save()
      return Promise.resolve({
        id: result.id,
        name: result.name,
        createdBy: result.createdBy,
      })
    } catch (error) {
      if (process.env.VERBOSE === "true") console.error(error)
      return Promise.reject(error)
    }
  }
  public async update(data: any): Promise<any> {
    try {
      const result: any = await this.model.findByIdAndUpdate(data.id, data, {
        new: true,
      })
      return Promise.resolve({
        id: result.id,
        name: result.name,
        createdBy: result.createdBy,
      })
    } catch (error) {
      if (process.env.VERBOSE === "true") console.error(error)
      return Promise.reject(error)
    }
  }
}
