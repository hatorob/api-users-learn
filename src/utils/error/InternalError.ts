import { HttpError } from "./HttpError";

export class InternalError extends HttpError {
  constructor(message = "Internal Server Error") {
    super(message, 500);
  }
}