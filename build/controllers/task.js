import { TaskModel } from "../models/task.js";
export default class Task {
    static async create(data) {
        return new TaskModel().create(data);
    }
    static async update(data) {
        return new TaskModel().update(data);
    }
    static async getById(id) {
        return new TaskModel().getById(id);
    }
    static async getAll() {
        return new TaskModel().getAll();
    }
}
//# sourceMappingURL=task.js.map