import { prisma } from "../config/prisma";

export class UserService {

    static async getUsers() {
        return await prisma.user.findMany();
    }

    static async getUserById(id:number) {
        return await prisma.user.findUnique({ where: { id } });
    }

    static async createUser(data: any) {
        return await prisma.user.create({ data });
    }
    
    static async updateUser(id: number, data: any) {
        return await prisma.user.update({
            where: { id },
            data,
        });
    }
    
    static async deleteUser(id: number) {
        return await prisma.user.delete({ where: { id } });
    }
    
}