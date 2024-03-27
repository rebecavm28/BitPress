import * as express from 'express';
import { getAllUsers } from '../controllers/UsersController';

const userRouter = express.Router();

userRouter.get('/users', getAllUsers);

export default userRouter;