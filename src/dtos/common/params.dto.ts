import { z } from "zod";

export const IdParamDto = z.object({
    id: z.preprocess(
        (val) => Number(val),
        z.number().positive("Id must be a positive number")
    )
})

export type IdParamInput = z.infer<typeof IdParamDto>;