import { Router } from "express";
import Task from "../database/controllers/task.js";
export const v1 = Router()
    .get("/task", (req, res) => {
    res.json({ hello: "world" });
})
    .get("/task/:id", (req, res) => {
    res.json({ hello: "world" });
})
    .post("/task", async (req, res, next) => {
    const { name, createdBy } = req.body;
    Task.create({ name, createdBy })
        .then((task) => res.json(task))
        .catch((err) => next(err));
})
    .put("/task", (req, res, next) => {
    const { id, name, createdBy } = req.body;
    Task.update({ id, name, createdBy })
        .then((task) => res.json(task))
        .catch((err) => next(err));
});
//# sourceMappingURL=v1.js.map