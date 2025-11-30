import { z } from "zod";

export const PaginationDto = z.object({
    page: z
    .preprocess(
        (v) => Number( v ?? 1),
        z.number().int().min(1).default(1)
    )
    .optional(),

    limit: z
    .preprocess(
        (v) => Number(v ?? 10),
        z.number().int().min(1).max(100).default(10)
    )
    .optional(),

    order: z
    .string()
    .toLowerCase()
    .refine((v) => ["asc", "desc"].includes(v), {
      message: "Order must be 'asc' or 'desc'",
    })
    .default("asc")
    .optional(),
    
})

export type PaginationInput = z.infer<typeof PaginationDto>;