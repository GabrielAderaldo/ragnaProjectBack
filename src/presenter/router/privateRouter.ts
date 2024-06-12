import express from 'express';
import { authenticateToken } from '../../middleware/authenticate';
export const publicRouter = express.Router();

publicRouter.get('/privada', authenticateToken, (req,res)=>{
    res.send('Funcionou!');
})



