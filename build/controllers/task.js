import { TaskMongoModel } from "../models/task.mongoose.js";
import { TaskModel } from "../models/task.sequilize.js";
export default class TaskController {
    static async create(data) {
        if (process.env.CURRENT_DB === "MONGO")
            return TaskMongoModel.getInstance().create(data);
        if (process.env.CURRENT_DB === "PG" || process.env.CURRENT_DB === "MYSQL")
            return TaskModel.create(data);
    }
    static async update(data) {
        if (process.env.CURRENT_DB === "MONGO")
            return TaskMongoModel.getInstance().update(data);
        if (process.env.CURRENT_DB === "PG" || process.env.CURRENT_DB === "MYSQL")
            return TaskModel.update(data);
    }
    static async getById(id) {
        if (process.env.CURRENT_DB === "MONGO")
            return TaskMongoModel.getInstance().getById(id);
        if (process.env.CURRENT_DB === "PG" || process.env.CURRENT_DB === "MYSQL")
            return TaskModel.getById(id);
    }
    static async getAll() {
        if (process.env.CURRENT_DB === "MONGO")
            return TaskMongoModel.getInstance().getAll();
        if (process.env.CURRENT_DB === "PG" || process.env.CURRENT_DB === "MYSQL")
            return TaskModel.getAll();
    }
    static async delete(id) {
        if (process.env.CURRENT_DB === "MONGO")
            return TaskMongoModel.getInstance().delete(id);
        if (process.env.CURRENT_DB === "PG" || process.env.CURRENT_DB === "MYSQL")
            return TaskModel.delete(id);
    }
}
//# sourceMappingURL=task.js.map