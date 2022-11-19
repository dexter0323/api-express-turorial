import { Router, Request, Response, NextFunction } from 'express'
import TaskController from '../controllers/task.js'

export const v1 = Router()
  .get('/tasks', (req: Request, res: Response, next: NextFunction) => {
    TaskController.getAll()
      .then((t) => res.json(t))
      .catch(next)
  })
  .get('/task/:id', (req: Request, res: Response, next: NextFunction) => {
    TaskController.getById(req.params.id)
      .then((t) => res.json(t))
      .catch(next)
  })
  .post('/task', async (req: Request, res: Response, next: NextFunction) => {
    const { name, createdBy } = req.body
    TaskController.create({ name, createdBy })
      .then((t) => res.json(t))
      .catch(next)
  })
  .put('/task', (req: Request, res: Response, next: NextFunction) => {
    const { id, name, createdBy } = req.body
    TaskController.update({ id, name, createdBy })
      .then((t) => res.json(t))
      .catch(next)
  })
  .delete('/task/:id', (req: Request, res: Response, next: NextFunction) => {
    TaskController.delete(req.params.id)
      .then(() => res.json())
      .catch(next)
  })
