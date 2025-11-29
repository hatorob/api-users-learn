# 📘 Backend Clean Architecture – Manejo de Errores, Respuestas y Buenas Prácticas

## 1. Arquitectura aplicada: Clean Code + Design Patterns
En este bloque del proyecto implementamos:
- Clases de error personalizadas  
- Middleware global de errores  
- ErrorFactory (Factory Method)  
- ResponseFactory  
- Uso correcto de códigos HTTP  
- Controladores limpios  
- Principios de arquitectura limpia  

## 2. Códigos HTTP más importantes
- **200 OK** → solicitud exitosa  
- **201 Created** → recurso creado  
- **400 Bad Request** → datos incorrectos enviados por el cliente  
- **401 Unauthorized** → usuario no autenticado  
- **403 Forbidden** → autenticado, pero sin permisos  
- **404 Not Found** → recurso no existe  
- **500 Internal Server Error** → error inesperado  

## 3. Manejo Global de Errores (Middleware)
Un middleware global captura todas las excepciones y:
- asegura respuestas consistentes  
- evita usar try/catch en controladores  
- mapea errores de Prisma (P2025, P2002)  
- permite usar clases de error personalizadas  

## 4. ErrorFactory (Factory Method Pattern)
Centraliza la creación de errores:
```ts
ErrorFactory.create("NOT_FOUND", "User not found");
```
Ventajas:
- no repetir `new ErrorClass()`  
- agregar nuevos errores sin tocar controladores  
- arquitectura escalable  
- controla status codes desde un solo lugar  

## 5. ResponseFactory
Estandariza respuestas:
```ts
ResponseFactory.ok(res, data);
ResponseFactory.created(res, data);
```
Beneficios:
- controladores limpios  
- formato uniforme  
- un solo punto de mantenimiento  

## 6. Controladores limpios
Sin try/catch repetitivos:
```ts
if (!user) throw ErrorFactory.create("NOT_FOUND");
return ResponseFactory.ok(res, user);
```

## 7. Principios aplicados
- DRY → no repetir código  
- SRP → cada módulo con una sola responsabilidad  
- Clean Architecture → capas separadas  
- Factory Method → creación estandarizada de objetos  

## 8. Resultado para tu crecimiento como dev
Ahora tu API:
- es más mantenible  
- escala mejor  
- es 100% profesional  
- usa patrones reales  
- responde correctamente a errores  
- tiene controladores limpios y claros  

