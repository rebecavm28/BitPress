import * as express from 'express';
import { getAllUsers, registerUser, loginUser, deleteUser, updateUser } from '../controllers/UsersController';

const userRouter = express.Router();

userRouter.get('/users', getAllUsers);
userRouter.post('/users/register', registerUser);
userRouter.post('/users/login', loginUser);
userRouter.delete('/users/:id', deleteUser);
userRouter.put('/users/:id', updateUser);



export default userRouter;