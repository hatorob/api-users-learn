import { Router, Response, Request } from "express";
import { UserController } from "../controllers/userController";

const router = Router();

router.get('/',  UserController.getUsers );
router.get('/:id',  UserController.getUserById );
router.post('/',  UserController.createdUser );
router.put('/:id',  UserController.updateUser );
router.delete('/:id',  UserController.deleteUser );

export default router;