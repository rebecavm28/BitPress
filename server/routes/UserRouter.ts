import * as express from 'express';
import { getAllUsers, registerUser, loginUser } from '../controllers/UsersController';

const userRouter = express.Router();

userRouter.get('/users', getAllUsers);
userRouter.post('/users/register', registerUser);
userRouter.post('/users/login', loginUser);

export default userRouter;