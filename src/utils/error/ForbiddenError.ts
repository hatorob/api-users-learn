import { HttpError } from "./HttpError";

/**
 * Esta autenticado, pero no tienes permiso
 */
export class ForbiddenError extends HttpError {
    constructor(message = "Forbidden Error") {
        super(message, 403);
    }
}