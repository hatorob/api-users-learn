import { HttpError } from "./HttpError";
/**
 * El cliente envió algo mal
 * ejemplo, no envió el id
 * el json es invalido
 * falta campos requeridos
 * datos con formato incorrecto
 */
export class BadRequestError extends HttpError {
  constructor(message = "Bad Request") {
    super(message, 400);
  }
}