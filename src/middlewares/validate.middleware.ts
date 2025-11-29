import { NextFunction, Request, Response } from "express";
import { ZodTypeAny  } from "zod";
import { ErrorFactory } from "../utils/error/ErrorFactory";

export const validate = (schema: ZodTypeAny ) => 
    (req: Request, res: Response, next: NextFunction) => {
        console.log(req.body);
        const result = schema.safeParse(req.body);
        console.log(result)
        if(!result.success) {
            const message = result.error.issues[0].message;
            throw ErrorFactory.create("BAD_REQUEST", message);
        }

        req.body = result.data;
        next();

}