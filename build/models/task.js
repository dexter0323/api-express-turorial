import Mongo from "../database/mongo.js";
export class TaskModel {
    static instance;
    model;
    static getInstance() {
        if (!TaskModel.instance)
            TaskModel.instance = new TaskModel();
        return TaskModel.instance;
    }
    constructor() {
        this.model = Mongo.db.TASK_MANAGER.model("task", new Mongo.db.TASK_MANAGER.Schema({
            name: { type: String, required: true },
            status: { type: String, required: true, default: "pending" },
            createdBy: { type: String, required: true },
            date: { type: Date, default: Date.now },
        }));
    }
    async create(data) {
        try {
            const task = new this.model(data);
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
            const result = await this.model.findByIdAndUpdate(data.id, data, {
                new: true,
            });
            return result
                ? Promise.resolve({
                    id: result.id,
                    name: result.name,
                    createdBy: result.createdBy,
                })
                : Promise.resolve({ message: "Record not exists." });
        }
        catch (error) {
            if (process.env.VERBOSE === "true")
                console.error(error);
            return Promise.reject(error);
        }
    }
    async getById(id) {
        try {
            const result = await this.model.findById(id);
            return result
                ? Promise.resolve({
                    id: result.id,
                    name: result.name,
                    createdBy: result.createdBy,
                })
                : Promise.resolve({ message: "Record not found" });
        }
        catch (error) {
            if (process.env.VERBOSE === "true")
                console.error(error);
            return Promise.reject(error);
        }
    }
    async getAll() {
        try {
            const result = await this.model.find();
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
            const result = await this.model.findByIdAndDelete(id);
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