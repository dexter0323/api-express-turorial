import Mongo from "../database/mongo.js";
export class TaskModel {
    static model;
    constructor() {
        if (!TaskModel.model) {
            TaskModel.model = Mongo.db.TASK_MANAGER.model("task", new Mongo.db.TASK_MANAGER.Schema({
                name: { type: String, required: true },
                status: { type: String, required: true, default: "pending" },
                createdBy: { type: String, required: true },
                date: { type: Date, default: Date.now },
            }));
        }
    }
    async create(data) {
        try {
            const task = new TaskModel.model(data);
            const result = await task.save();
            return Promise.resolve({
                id: result.id,
                name: result.name,
                createdBy: result.createdBy,
            });
        }
        catch (error) {
            if (process.env.VERBOSE === "true")
                console.error(error);
            return Promise.reject(error);
        }
    }
    async update(data) {
        try {
            const result = await TaskModel.model.findByIdAndUpdate(data.id, data, {
                new: true,
            });
            return Promise.resolve({
                id: result.id,
                name: result.name,
                createdBy: result.createdBy,
            });
        }
        catch (error) {
            if (process.env.VERBOSE === "true")
                console.error(error);
            return Promise.reject(error);
        }
    }
    async getById(id) {
        try {
            const result = await TaskModel.model.findById(id);
            return Promise.resolve({
                id: result.id,
                name: result.name,
                createdBy: result.createdBy,
            });
        }
        catch (error) {
            if (process.env.VERBOSE === "true")
                console.error(error);
            return Promise.reject(error);
        }
    }
    async getAll() {
        try {
            const result = await TaskModel.model.find();
            return Promise.resolve(result.map((t) => {
                return { id: t.id, name: t.name, createdBy: t.createdBy };
            }));
        }
        catch (error) {
            if (process.env.VERBOSE === "true")
                console.error(error);
            return Promise.reject(error);
        }
    }
    async delete(id) {
        try {
            const result = await TaskModel.model.findByIdAndDelete(id);
            return Promise.resolve();
        }
        catch (error) {
            if (process.env.VERBOSE === "true")
                console.error(error);
            return Promise.reject(error);
        }
    }
}
//# sourceMappingURL=task.js.map