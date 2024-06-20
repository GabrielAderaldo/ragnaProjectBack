import express from 'express';
import { authenticateToken } from '../../middleware/authenticate';
export const privateRouter = express.Router();

privateRouter.get('/privada', authenticateToken, (req,res)=>{
    res.send('Funcionou!');
})



