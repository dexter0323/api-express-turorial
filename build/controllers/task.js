import SequelizeManager from "../db/sequelize.js";
import { TaskMongoModel } from "../models/task.mongoose.js";
export default class TaskController {
    static async create(data) {
        if (process.env.CURRENT_DB === "MONGO")
            return TaskMongoModel.getInstance().create(data);
    }
    static async update(data) {
        return TaskMongoModel.getInstance().update(data);
    }
    static async getById(id) {
        return TaskMongoModel.getInstance().getById(id);
    }
    static async getAll() {
        if (process.env.CURRENT_DB === "MONGO")
            return TaskMongoModel.getInstance().getAll();
        if (process.env.CURRENT_DB === "PG" || process.env.CURRENT_DB === "MYSQL")
            return SequelizeManager.sequalize.models.tasks.findAll();
    }
    static async delete(id) {
        return TaskMongoModel.getInstance().delete(id);
    }
}
//# sourceMappingURL=task.js.map