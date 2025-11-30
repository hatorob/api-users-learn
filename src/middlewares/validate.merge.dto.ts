import { ZodTypeAny } from "zod";
import { NextFunction, Request, Response } from "express";
import { ErrorFactory } from "../utils/error/ErrorFactory";

export const validateMerge = (schema: ZodTypeAny) =>
    (req: Request, res: Response, next: NextFunction) => {
    
        const merged = {
            ...req.params,
            ...req.query,
            ...req.body
        }

        const result = schema.safeParse(merged);

        if(!result.success) {
            const issue = result.error.issues[0];
            throw ErrorFactory.create("BAR_REQUEST", issue.message);
        }

        req.merged = result.data;
        next();

}