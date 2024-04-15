import * as express from 'express';
import { getAllUsers, registerUser, loginUser, deleteUser, updateUser } from '../controllers/UsersController';
import { rolAuthenticated } from '../middleware/rolesMiddleware';
const userRouter = express.Router();

userRouter.get('/users',rolAuthenticated(["admin"]), getAllUsers);
userRouter.post('/users/register', registerUser);
userRouter.post('/users/login',/*rolAuthenticated(["admin", "user"]),*/ loginUser);
userRouter.delete('/users/:id',rolAuthenticated(["admin"]), deleteUser);
userRouter.put('/users/:id',rolAuthenticated(["admin"]), updateUser);



export default userRouter;