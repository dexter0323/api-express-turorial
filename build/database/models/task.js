import Mongo from "../mongo.js";
export class TaskModel {
    schema = new Mongo.db.TASK_MANAGER.Schema({
        name: { type: String, required: true },
        status: { type: String, required: true, default: "pending" },
        createdBy: { type: String, required: true },
        date: { type: Date, default: Date.now },
    });
    model = Mongo.db.TASK_MANAGER.model("task", this.schema);
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
}
//# sourceMappingURL=task.js.map