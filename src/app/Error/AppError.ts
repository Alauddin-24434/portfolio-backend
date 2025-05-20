export class AppError extends Error {
  statusCode: number;
  errorSources?: { field: string; message: string }[];

  constructor(
    message: string,
    statusCode :number,
    errorSources?: { field: string; message: string }[]
  ) {
    super(message);
    this.statusCode = statusCode;
    this.errorSources = errorSources;
    Error.captureStackTrace(this, this.constructor);
  }
}
