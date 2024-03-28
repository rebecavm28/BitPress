import * as express from 'express';
import { getAllUsers, registerUser, loginUser } from '../controllers/UsersController';

const userRouter = express.Router();

userRouter.get('/users', getAllUsers);

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);

export default userRouter;