# 🔍 Arquitectura Profesional de Búsqueda, Paginación y Validación con Zod + Express + Prisma

Este documento resume *toda* la arquitectura necesaria para implementar un sistema de:

- ✔ Búsqueda avanzada  
- ✔ Paginación profesional  
- ✔ Ordenamiento  
- ✔ Filtros por fechas  
- ✔ Validación y transformación con Zod  
- ✔ Uso de validateMerge  
- ✔ Integración con Prisma  

Nivel empresarial, igual que Shopify, Stripe, MercadoLibre o cualquier API moderna.

---

## 📌 1. Objetivo del Endpoint

Crear un endpoint:

```
GET /users/search?search=andres&page=1&limit=20&order=desc&from=2024-01-01&to=2024-02-01
```

Que soporte búsqueda avanzada, paginación, ordenamiento, filtros por fechas y validaciones completas usando Zod y Express.

---

## 📘 2. DTOs de Paginación y Búsqueda

### PaginationDto

```ts
import { z } from "zod";

export const PaginationDto = z.object({
  page: z
    .preprocess((v) => Number(v ?? 1), z.number().int().min(1).default(1))
    .optional(),

  limit: z
    .preprocess((v) => Number(v ?? 10), z.number().int().min(1).max(100).default(10))
    .optional(),

  order: z
    .string()
    .toLowerCase()
    .refine((v) => ["asc", "desc"].includes(v), {
      message: "Order must be 'asc' or 'desc'",
    })
    .default("asc")
    .optional(),
});
```

### SearchDto

```ts
import { z } from "zod";

export const SearchDto = z.object({
  search: z.string().optional(),

  field: z.string().optional(),

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
```

---

## 🚀 3. DTO final combinando búsqueda + paginación

```ts
import { z } from "zod";
import { PaginationDto } from "../common/pagination.dto";
import { SearchDto } from "../common/search.dto";

export const SearchUsersDto = PaginationDto.merge(SearchDto);
export type SearchUsersInput = z.infer<typeof SearchUsersDto>;
```

Esta combinación genera un “Query Object” profesional.

---

## 📌 4. Middleware validateMerge

```ts
import { ZodTypeAny } from "zod";
import { NextFunction, Request, Response } from "express";
import { ErrorFactory } from "../utils/error/ErrorFactory";

export const validateMerge = (schema: ZodTypeAny) =>
  (req: Request, res: Response, next: NextFunction) => {

    const merged = {
      ...req.params,
      ...req.query,
      ...req.body
    };

    const result = schema.safeParse(merged);

    if (!result.success) {
      const issue = result.error.issues[0];
      throw ErrorFactory.create("BAD_REQUEST", issue.message);
    }

    req.merged = result.data;
    next();
  };
```

---

## 📘 5. Extender Express para permitir req.merged

Archivo: `src/types/express.d.ts`

```ts
declare global {
  namespace Express {
    interface Request {
      merged?: any;
    }
  }
}
```

Y en tsconfig:

```json
"typeRoots": ["./src/types", "./node_modules/@types"]
```

---

## 📌 6. Ruta usando validateMerge

```ts
router.get(
  "/search",
  validateMerge(SearchUsersDto),
  UserController.searchUsers
);
```

---

## 📌 7. Controlador limpio

```ts
static searchUsers = async (req, res) => {
  const filters = req.merged;

  const result = await UserService.searchUsers(filters);

  return res.status(200).json({
    success: true,
    data: result,
  });
};
```

---

## 📌 8. Servicio Prisma con filtros avanzados

```ts
static async searchUsers(filters: SearchUsersInput) {
  const { search, field, orderBy, from, to, page, limit, order } = filters;

  return prisma.user.findMany({
    where: {
      AND: [
        search
          ? {
              OR: [
                { name: { contains: search, mode: "insensitive" } },
                { email: { contains: search, mode: "insensitive" } }
              ]
            }
          : {},

        from ? { createdAt: { gte: from } } : {},
        to ? { createdAt: { lte: to } } : {},
      ]
    },

    orderBy: orderBy ? { [orderBy]: order } : undefined,
    skip: (page - 1) * limit,
    take: limit,
  });
}
```

---

## 🏆 Conclusión

Con este módulo tienes:

- Un sistema completo de búsqueda avanzada  
- Paginación real  
- Filtros por fechas  
- Validación robusta  
- Transformación automática de tipos  
- Integración limpia con Prisma  
- Controladores extremadamente limpios  

Tu backend está ya a nivel profesional 🚀
