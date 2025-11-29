import { HttpError } from "./HttpError";

/**
 * El recurso que pediste no existe
 * no existe el usuario
 * no se encontró algo
 */
export class NotFoundError extends HttpError {
  constructor(message = "Not Error") {
    super(message, 404);
  }
}