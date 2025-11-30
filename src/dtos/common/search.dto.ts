import { z } from "zod";

export const SearchDto = z.object({
  search: z.string().optional(),

  field: z.string().optional(), // campo para buscar

  orderBy: z.string().optional(),

  from: z.preprocess(
    (v) => (v ? new Date(String(v)) : undefined),
    z.date().optional()
  ),

  to: z.preprocess(
    (v) => (v ? new Date(String(v)) : undefined),
    z.date().optional()
  ),
});

export type SearchInput = z.infer<typeof SearchDto>;