import { z } from "zod";

export const UpdatedUserDto = z.object({
    name: z
    .string()
    .min(3, "Name must have at least 3 character").optional(),

    email: z
    .string()
    .email("Invalid email format").optional(),

    age: z
    .number().optional()
})