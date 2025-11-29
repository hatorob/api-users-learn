import { BadRequestError } from "./BadRequestError";
import { NotFoundError } from "./NotFoundError";
import { InternalError } from "./InternalError";
import { ForbiddenError } from "./ForbiddenError";
import { UnauthorizedError } from "./UnauthorizedError";


export class ErrorFactory {

    static create(type: string, message?: string) {

        switch(type.toUpperCase()) {

            case "BAD_REQUEST":
                return new BadRequestError(message);
            case "NOT_FOUND":
                return new NotFoundError(message);
            case "INTERNAL":
            case "SERVER_ERROR":
                return new InternalError(message);
            case "FORBIDDEN":
                return new ForbiddenError(message);
            case "UNAUTHORIZED":
                return new UnauthorizedError(message);

            default:
                return new InternalError(message);
        }
    }

}