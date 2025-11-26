import { Router } from "express";
import userRoutes from "./user.routes";

const router = Router();

console.log("entro a index.ts de routes")
router.use('/users', userRoutes );


export default router;