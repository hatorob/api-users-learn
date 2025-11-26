import { Request, Response } from "express";


export class UserController {

    static getUsers = (req: Request, res: Response ) => {
        try {
            res.json({ message: "getUsers" });
        } catch (error: any) {
            res.status(400).json({
                error: error.message
            })
        }
    }

    static getUserById =(req: Request, res: Response ) => {
        try {
            const { id } = req.params;
            if(!id) throw new Error(`user id is required`);
            res.json({ message: "getUserById" });
        } catch (error: any) {
            res.status(400).json({
                error: error.message
            })
        }
    }

    static createdUser = (req: Request, res: Response ) => {
        try {
            res.json({ message: "createdUser yeah" });
        } catch (error: any) {
            res.status(400).json({
                error: error.message
            })
        }
    }

    static updateUser = (req: Request, res: Response ) => {
        try {
            const { id } = req.params;
            if(!id) throw new Error(`user id is required`);
            res.json({ message: "updateUser" });
        } catch (error: any) {
            res.status(400).json({
                error: error.message
            })
        }
    }

    static deleteUser = (req: Request, res: Response ) => {
        try {
            const { id } = req.params;
            if(!id) throw new Error(`user id is required`);
            res.json({ message: "deleteUser" });
        } catch (error: any) {
            res.status(400).json({
                error: error.message
            })
        }
    }

}