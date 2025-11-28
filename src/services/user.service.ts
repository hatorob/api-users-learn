import { User, UserModel } from "../models/user.model";


export class UserService {

    static getUsers(): User[] {
        return UserModel.findAll();
    }

    static getUserById(id:number): User {
        const user = UserModel.findById(id);
        if(!user) throw new Error("User not found");
        return user;
    }

    static createUser(data: User): User {
        if (!data.name) throw new Error("Name is required");
        if (!data.email) throw new Error("Email is required");
    
        return UserModel.create(data);
    }

  static updateUser(id: number, data: Partial<User>): User {
        const updated = UserModel.update(id, data);
        if (!updated) throw new Error("User not found");
        return updated;
  }

    static deleteUser(id: number): void {
        const deleted = UserModel.delete(id);
        if (!deleted) throw new Error("User not found");
    }

}