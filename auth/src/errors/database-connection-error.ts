export class DatabaseConnectionError extends Error {
  reason = 'Error connecting to database'

  constructor() {
    super()

    //This is necessary because it's a built in class
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype)

  }

}