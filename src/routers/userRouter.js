import express from 'express';
import { deleteUser, getUserLogin, getUserRegister, getUsers } from '../controllers/userController.js';
import role_access from '../middlewares/role.js';
import auth from '../middlewares/auth.js';

export const userRouter = express.Router();

//getAllUser list role admin access
userRouter.get('/',auth ,role_access(["admin"]), getUsers);

//register adding user to database post req
userRouter.post('/register', getUserRegister); 

//login
userRouter.post('/login', getUserLogin);

//if logged in as admin then only give access to delete users
userRouter.delete('/:id' , deleteUser);
