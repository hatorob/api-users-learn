import { Request, Response } from "express";
import { UserService } from "../services/user.service";


export class UserController {

    static getUsers = (req: Request, res: Response ) => {
        try {
            const users = UserService.getUsers();
            res.status(200).json({
                response: true,
                data: users
            })
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
            const user = UserService.getUserById(Number(id));
            res.status(200).json({
                response: true,
                data: user
            })
        } catch (error: any) {
            res.status(400).json({
                error: error.message
            })
        }
    }

    static createdUser = (req: Request, res: Response ) => {
        try {
            const userCreated = UserService.createUser(req.body);
            res.status(200).json({
                response: true,
                data: userCreated
            })
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
            const userUpdated = UserService.updateUser(Number(id),req.body);
            res.status(200).json({
                response: true,
                data: userUpdated
            })
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