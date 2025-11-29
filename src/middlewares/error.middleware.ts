import { Request, Response, NextFunction } from "express";
import { HttpError } from "../utils/error/HttpError";
import { ErrorFactory } from "../utils/error/ErrorFactory";

export const errorMiddleare = (
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
)=> {

     // Prisma record not found
    if (err.code === "P2025") {
        err = ErrorFactory.create("NOT_FOUND", "Record not found");
    }
    
    // Prisma constraint (ej: email duplicado)
    if (err.code === "P2002") {
        err = ErrorFactory.create("BAD_REQUEST", "Duplicate field");
    }
    
    // Si es un error custom
    if (err instanceof HttpError) {
        return res.status(err.statusCode).json({
            success: false,
            error: err.message
        });
    }

    // Cualquier otro error inesperado
    console.error("UNEXPECTED ERROR:", err);

    const internalError = ErrorFactory.create("INTERNAL");
        return res.status(internalError.statusCode).json({
        success: false,
        error: internalError.message
    });

}