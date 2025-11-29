import { NextFunction, Request, Response } from "express";
import { ZodTypeAny  } from "zod";
import { ErrorFactory } from "../utils/error/ErrorFactory";

export const validate = (schema: ZodTypeAny, type: "body" | "params" | "query" = "body" ) => 
    (req: Request, res: Response, next: NextFunction) => {

        const data = req[type];
        const result = schema.safeParse(data);

        if(!result.success) {
            const issue = result.error.issues[0];
            throw ErrorFactory.create("BAD_REQUEST", issue.message);
        }

        req[type] = result.data;

        next();

}