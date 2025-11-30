import { prisma } from "../config/prisma";
import { returnedPaginated } from "../utils/paginated";

interface Filters {
  search: string | undefined,
  field: string | undefined,
  orderBy: string | undefined,
  from: Date | undefined,
  to: Date | undefined,
  page: number,
  limit: number,
  order: "asc" | "desc"
}

export class UserService {

    static async getUsersPaginated(filters: Filters) {

        const {
            search,
            field,
            orderBy,
            order = "asc",
            from,
            to,
            page = 1,
            limit = 10,
        } = filters;

        const where: any = { AND: [] };

        if (search) {
            if (field) {
                where.AND.push({
                    [field]: { contains: search, mode: "insensitive" },
                });
            } else {
                where.AND.push({
                    OR: [
                    { name: { contains: search, mode: "insensitive" } },
                    { email: { contains: search, mode: "insensitive" } },
                    ],
                });
            }
        }

        if (from) {
            where.AND.push({
                createdAt: { gte: from },
            });
        }
        
        if (to) {
            where.AND.push({
                createdAt: { lte: to },
            });
        }

        if (where.AND.length === 0) {
            delete where.AND;
        }

        const items = await prisma.user.findMany({
            where,
            orderBy: orderBy ? { [orderBy]: order } : undefined,
            skip: (page - 1) * limit,
            take: limit
        });

        const total = await prisma.user.count({ where });

        return {
            ...returnedPaginated({
                page, 
                limit, 
                total,
                items
            })
        }
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