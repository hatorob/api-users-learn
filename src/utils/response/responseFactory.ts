import { Response } from "express";

export class ResponseApi {

    /**
     * Operación exitosa
     * Se usa cuando se lista algo, obtener un detalle
     * getAll() or getById(id)
     */
    static ok(res: Response, data: any, message = "Success" ) {
        return res.status(200).json({
            succes: true,
            message,
            data
        })
    }

    /**
     * Se crea un recurso
     * crear usuario, pedido, etc.
     */
    
    static created(res: Response, data: any, message = "Created" ) {
        return res.status(201).json({
            succes: true,
            message,
            data
        })
    }
    
    static noContent(res: Response ) {
        return res.status(204).send("Not content")
    }

}