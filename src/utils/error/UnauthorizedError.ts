import { HttpError } from "./HttpError";

/**
 * Usuario no autenticado
 */
export class UnauthorizedError extends HttpError {
  constructor(message = "Unauthorized Error") {
    super(message, 401);
  }
}