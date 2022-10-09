import { Router, Request, Response, NextFunction } from "express"
import Task from "../database/controllers/task.js"

export const v1 = Router()
  .get("/task", (req: Request, res: Response) => {
    res.json({ hello: "world" })
  })
  .get("/task/:id", (req: Request, res: Response) => {
    res.json({ hello: "world" })
  })
  .post("/task", async (req: Request, res: Response, next: NextFunction) => {
    const { name, createdBy } = req.body
    Task.create({ name, createdBy })
      .then((task) => res.json(task))
      .catch((err) => next(err))
  })
  .put("/task", (req: Request, res: Response, next: NextFunction) => {
    const { id, name, createdBy } = req.body
    Task.update({ id, name, createdBy })
      .then((task) => res.json(task))
      .catch((err) => next(err))
  })
