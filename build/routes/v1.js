import { Router } from "express";
import Task from "../database/controllers/task.js";
export const v1 = Router()
    .get("/tasks", (req, res, next) => {
    Task.getAll()
        .then((t) => res.json(t))
        .catch(next);
})
    .get("/task/:id", (req, res, next) => {
    const { id } = req.params;
    Task.getById(id)
        .then((t) => res.json(t))
        .catch(next);
})
    .post("/task", async (req, res, next) => {
    const { name, createdBy } = req.body;
    Task.create({ name, createdBy })
        .then((t) => res.json(t))
        .catch(next);
})
    .put("/task", (req, res, next) => {
    const { id, name, createdBy } = req.body;
    Task.update({ id, name, createdBy })
        .then((t) => res.json(t))
        .catch(next);
});
//# sourceMappingURL=v1.js.map