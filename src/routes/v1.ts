import { Router, Request, Response, NextFunction } from "express"
import Task from "../controllers/task.js"

export const v1 = Router()
  .get("/tasks", (req: Request, res: Response, next: NextFunction) => {
    Task.getAll()
      .then((t) => res.json(t))
      .catch(next)
  })
  .get("/task/:id", (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    Task.getById(id)
      .then((t) => res.json(t))
      .catch(next)
  })
  .post("/task", async (req: Request, res: Response, next: NextFunction) => {
    const { name, createdBy } = req.body
    Task.create({ name, createdBy })
      .then((t) => res.json(t))
      .catch(next)
  })
  .put("/task", (req: Request, res: Response, next: NextFunction) => {
    const { id, name, createdBy } = req.body
    Task.update({ id, name, createdBy })
      .then((t) => res.json(t))
      .catch(next)
  })
  .delete("/task/:id", (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    Task.delete(id)
      .then(() => res.json())
      .catch(next)
  })
