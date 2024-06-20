import express from 'express';
import { UserController } from '../../implementation/controllers/userController';
export const publicRouter = express.Router();
const userController = new UserController();

publicRouter.get('/PING',(req,res)=>{
    res.send('PONG');
})


publicRouter.post('/createUser',async (req,res)=>{
    const {email} = req.body;
    const createUser = await userController.createUser(email,email);
    res.json(createUser);
})


