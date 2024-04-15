import * as express from 'express';
import { getAllUsers, registerUser, loginUsers, deleteUsers, updateUsers } from '../controllers/UsersController';
import { rolAuthenticated } from '../middleware/rolesMiddleware';
const userRouter = express.Router();

userRouter.get('/users',rolAuthenticated(["admin"]), getAllUsers);
userRouter.post('/users/register', registerUser);
userRouter.post('/users/login',rolAuthenticated(["admin", "user"]), loginUsers);
userRouter.delete('/users/:id',rolAuthenticated(["admin"]), deleteUsers);
userRouter.put('/users/:id',rolAuthenticated(["admin"]), updateUsers);



export default userRouter;