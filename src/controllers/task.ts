import { TaskModel } from "../models/task.js"
export default class Task {
  public static async create(data: any): Promise<any> {
    return TaskModel.getInstance().create(data)
  }
  public static async update(data: any): Promise<any> {
    return TaskModel.getInstance().update(data)
  }
  public static async getById(id: string): Promise<any> {
    return TaskModel.getInstance().getById(id)
  }
  public static async getAll(): Promise<[]> {
    return TaskModel.getInstance().getAll()
  }
  public static async delete(id: string): Promise<void> {
    return TaskModel.getInstance().delete(id)
  }
}
