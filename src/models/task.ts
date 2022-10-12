import { Model } from "mongoose"
import Mongo from "../database/mongo.js"

export class TaskModel {
  private static instance: TaskModel
  private model: Model<any>

  public static getInstance(): TaskModel {
    if (!TaskModel.instance) TaskModel.instance = new TaskModel()
    return TaskModel.instance
  }

  constructor() {
    this.model = Mongo.db.TASK_MANAGER.model(
      "task",
      new Mongo.db.TASK_MANAGER.Schema({
        name: { type: String, required: true },
        status: { type: String, required: true, default: "pending" },
        createdBy: { type: String, required: true },
        date: { type: Date, default: Date.now },
      })
    )
  }

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
      return result
        ? Promise.resolve({
            id: result.id,
            name: result.name,
            createdBy: result.createdBy,
          })
        : Promise.resolve({ message: "Record not exists." })
    } catch (error) {
      if (process.env.VERBOSE === "true") console.error(error)
      return Promise.reject(error)
    }
  }

  public async getById(id: string): Promise<any> {
    try {
      const result: any = await this.model.findById(id)
      return result
        ? Promise.resolve({
            id: result.id,
            name: result.name,
            createdBy: result.createdBy,
          })
        : Promise.resolve({ message: "Record not found" })
    } catch (error) {
      if (process.env.VERBOSE === "true") console.error(error)
      return Promise.reject(error)
    }
  }

  public async getAll(): Promise<[]> {
    try {
      const result: any = await this.model.find()
      return Promise.resolve(
        result.map((t: any) => {
          return { id: t.id, name: t.name, createdBy: t.createdBy }
        })
      )
    } catch (error) {
      if (process.env.VERBOSE === "true") console.error(error)
      return Promise.reject(error)
    }
  }

  public async delete(id: string): Promise<void> {
    try {
      const result: any = await this.model.findByIdAndDelete(id)
      return Promise.resolve()
    } catch (error) {
      if (process.env.VERBOSE === "true") console.error(error)
      return Promise.reject(error)
    }
  }
}
