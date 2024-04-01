import * as express from 'express';
import { getAllUsers, registerUser, loginUser, createUser } from '../controllers/UsersController';

const userRouter = express.Router();

userRouter.get('/users', getAllUsers);
userRouter.post('/users', createUser);
userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);

export default userRouter;