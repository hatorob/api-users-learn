import { Router, Response, Request } from "express";

const router = Router();
console.log("entro a user.routes");
router.get('/', (req: Request, res: Response) => {
    res.send("hola");
} );


export default router;