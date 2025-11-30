import { Router, Response, Request } from "express";
import { CreatedUserDto } from "../dtos/user/createdUser.dto";
import { UpdatedUserDto } from "../dtos/user/updatedUser.dto";
import { validate } from "../middlewares/validate.middleware";
import { UserController } from "../controllers/userController";
import { IdParamDto } from "../dtos/common/params.dto";
import { validateMerge } from "../middlewares/validate.merge.dto";
import { SearchUsersDto } from "../dtos/user/search-users.dto";

const router = Router();

router.get('/', validateMerge(SearchUsersDto), UserController.getUsersPaginated );
router.get('/:id', validate(IdParamDto, "params"),  UserController.getUserById );
router.post('/', validate(CreatedUserDto, "body"), UserController.createdUser );
router.put('/:id', validate(IdParamDto, "params"), validate(UpdatedUserDto), UserController.updateUser );
router.delete('/:id', validate(IdParamDto, "params"),  UserController.deleteUser );

export default router;