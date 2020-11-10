import {CustomError} from './custom-error'

export class DatabaseConnectionError extends CustomError {
  reason = 'Error connecting to database'
  statusCode = 500

  constructor() {
    super('DB connection failed')
    //This is necessary because it's a built in class
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype)
  }

  serializeErrors() {
    return [
      {
        message: this.reason
      }
    ]
  }

}