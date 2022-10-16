import { TaskModel } from "../models/task.mongoose.js";
export default class Task {
    static async create(data) {
        return TaskModel.getInstance().create(data);
    }
    static async update(data) {
        return TaskModel.getInstance().update(data);
    }
    static async getById(id) {
        return TaskModel.getInstance().getById(id);
    }
    static async getAll() {
        return TaskModel.getInstance().getAll();
    }
    static async delete(id) {
        return TaskModel.getInstance().delete(id);
    }
}
//# sourceMappingURL=task.mongoose.js.map