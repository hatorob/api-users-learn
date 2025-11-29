import { z } from "zod";

export const CreatedUserDto = z.object({
    name: z.preprocess(
        (value) => value ?? "",
        z.string()
            .min(1, "Name is required")
            .min(3, "Name must have at least 3 characters")
    ),

    email: z.preprocess(
        (value) => value ?? "",
        z.string()
            .min(1, "Email is required")
            .email("Invalid email format")
    ),

    age: z.number().optional(),
})

export type CreateUserInput = z.infer<typeof CreatedUserDto>;