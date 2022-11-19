import { Router } from 'express'
import { v1 } from './v1.js'
import { errorHandler } from './errorHandler.js'

export const routes = Router()

routes.use('/v1', <any>v1)
routes.use(errorHandler)
