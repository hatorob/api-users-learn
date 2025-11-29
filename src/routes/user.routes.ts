import { Router, Response, Request } from "express";
import { CreatedUserDto } from "../dtos/user/createdUser.dto";
import { UpdatedUserDto } from "../dtos/user/updatedUser.dto";
import { validate } from "../middlewares/validate.middleware";
import { UserController } from "../controllers/userController";

const router = Router();

router.get('/',  UserController.getUsers );
router.get('/:id',  UserController.getUserById );
router.post('/', validate(CreatedUserDto), UserController.createdUser );
router.put('/:id', validate(UpdatedUserDto), UserController.updateUser );
router.delete('/:id',  UserController.deleteUser );

export default router;