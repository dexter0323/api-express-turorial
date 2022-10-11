import { TaskModel } from "../models/task.js"
export default class Task {
  public static async create(data: any): Promise<any> {
    return new TaskModel().create(data)
  }
  public static async update(data: any): Promise<any> {
    return new TaskModel().update(data)
  }
  public static async getById(id: string): Promise<any> {
    return new TaskModel().getById(id)
  }
  public static async getAll(): Promise<[]> {
    return new TaskModel().getAll()
  }
  public static async delete(id: string): Promise<void> {
    return new TaskModel().delete(id)
  }
}
