import { NextFunction, Request, Response } from "express";

import {RequestValidationError} from '../errors/request-validation-error'
import {DatabaseConnectionError} from '../errors/database-connection-error'



export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof RequestValidationError) {
    const formattedErrors = err.errors.map(error => {
      return {message: error.msg, field: error.param}
    })
    return res.status(400).send({
      errors: formattedErrors
    })
  }

  if (err instanceof DatabaseConnectionError) {
    res.status(503).send({
      errors: [
        {
          message: err.reason
        }
      ]
    })
  }

  res.status(400).send({
    errors: [{
      message: err.message || "Something went wrong"
    }]
  })


}