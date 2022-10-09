import { TaskModel } from "../models/task.js";
export default class Task {
    static async create(data) {
        return new TaskModel().create(data);
    }
    static async update(data) {
        return new TaskModel().update(data);
    }
}
//# sourceMappingURL=task.js.map