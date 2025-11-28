import { Request, Response } from "express";
import { UserService } from "../services/user.service";


export class UserController {

    static getUsers = async (req: Request, res: Response ) => {
        try {
            const users = await UserService.getUsers();
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

    static getUserById = async (req: Request, res: Response ) => {
        try {
            const { id } = req.params;
            if(!id) throw new Error(`user id is required`);
            const user = await UserService.getUserById(Number(id));
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

    static createdUser = async (req: Request, res: Response ) => {
        try {
            const userCreated = await UserService.createUser(req.body);
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

    static updateUser = async (req: Request, res: Response ) => {
        try {
            const { id } = req.params;
            if(!id) throw new Error(`user id is required`);
            const userUpdated = await UserService.updateUser(Number(id),req.body);
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

    static deleteUser = async (req: Request, res: Response ) => {
        try {
            const { id } = req.params;
            if(!id) throw new Error(`user id is required`);
            const userDeleted = await UserService.deleteUser(Number(id));
            res.status(200).json({
                response: true,
                data: userDeleted
            })
        } catch (error: any) {
            res.status(400).json({
                error: error.message
            })
        }
    }

}