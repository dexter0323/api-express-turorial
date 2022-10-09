import { Request, Response, NextFunction } from "express"

export function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (process.env.VERBOSE === "true") console.error(err)
  res.status(res.statusCode || 500).send({
    error:
      process.env.DEVELOPMENT === "true" ? err.message : "Something failed!",
  })
  next()
}
