import { NextFunction, Request, Response } from "express";
import { UserService } from "../services/user.service";
import { ErrorFactory } from "../utils/error/ErrorFactory";
import { ResponseApi } from "../utils/response/responseFactory";


export class UserController {

    static getUsers = async (req: Request, res: Response, next: NextFunction ) => {
        const users = await UserService.getUsers();
        if(!users) throw ErrorFactory.create("NOT_FOUND","Not found the users");
        return ResponseApi.ok(res,users,"Success find users");
    }

    static getUserById = async (req: Request, res: Response, next: NextFunction ) => {
        const { id } = req.params;
        const user = await UserService.getUserById(Number(id));
        if(!user) throw ErrorFactory.create("NOT_FOUND", "User not found");
        return ResponseApi.ok(res,user,"Succes find user");
    }

    static createdUser = async (req: Request, res: Response, next: NextFunction ) => {
        const userCreated = await UserService.createUser(req.body);
        return ResponseApi.created(res,userCreated,"User created");
    }

    static updateUser = async (req: Request, res: Response, next: NextFunction ) => {
        const { id } = req.params;
        const userUpdated = await UserService.updateUser(Number(id),req.body);
        return ResponseApi.ok(res,userUpdated,"User updated");
    }

    static deleteUser = async (req: Request, res: Response, next: NextFunction ) => {
        const { id } = req.params;
        const userDeleted = await UserService.deleteUser(Number(id));
        return ResponseApi.created(res, userDeleted, "Succes Deleted User");
    }

}