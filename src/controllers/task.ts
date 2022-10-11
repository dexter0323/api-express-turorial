import { TaskModel } from "../models/task.js"
export default class Task {
  public static async create(data: any): Promise<any> {
    return new TaskModel().create(data)
  }
  public static async update(data: any): Promise<any> {
    return new TaskModel().update(data)
  }
  public static async getById(id: any): Promise<any> {
    return new TaskModel().getById(id)
  }
  public static async getAll(): Promise<any> {
    return new TaskModel().getAll()
  }
}
