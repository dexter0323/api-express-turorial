import { Router } from "express";
import Task from "../controllers/task.js";
export const v1 = Router()
    .get("/tasks", (req, res, next) => {
    Task.getAll()
        .then((t) => res.json(t))
        .catch(next);
})
    .get("/task/:id", (req, res, next) => {
    Task.getById(req.params.id)
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
})
    .delete("/task/:id", (req, res, next) => {
    Task.delete(req.params.id)
        .then(() => res.json())
        .catch(next);
});
//# sourceMappingURL=v1.js.map