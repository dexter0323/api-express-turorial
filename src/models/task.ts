import { Model } from "mongoose"
import Mongo from "../database/mongo.js"

export class TaskModel {
  static model: Model<any>
  constructor() {
    if (!TaskModel.model) {
      TaskModel.model = Mongo.db.TASK_MANAGER.model(
        "task",
        new Mongo.db.TASK_MANAGER.Schema({
          name: { type: String, required: true },
          status: { type: String, required: true, default: "pending" },
          createdBy: { type: String, required: true },
          date: { type: Date, default: Date.now },
        })
      )
    }
  }
  public async create(data: any): Promise<any> {
    try {
      const task = new TaskModel.model(data)
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
      const result: any = await TaskModel.model.findByIdAndUpdate(
        data.id,
        data,
        {
          new: true,
        }
      )
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
  public async getById(id: string): Promise<any> {
    try {
      const result: any = await TaskModel.model.findById(id)
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
  public async getAll(): Promise<[]> {
    try {
      const result: any = await TaskModel.model.find()
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
      const result: any = await TaskModel.model.findByIdAndDelete(id)
      return Promise.resolve()
    } catch (error) {
      if (process.env.VERBOSE === "true") console.error(error)
      return Promise.reject(error)
    }
  }
}
