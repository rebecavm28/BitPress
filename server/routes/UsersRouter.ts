import * as express from 'express';
import { getAllUsers, registerUser,login } from '../controllers/UsersController';



const userRouter = express.Router();


userRouter.get('/users', getAllUsers);
userRouter.post('/users/register',registerUser);
userRouter.post('/login',login)


export default userRouter