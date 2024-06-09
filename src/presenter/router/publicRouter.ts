import express from 'express';
export const publicRouter = express.Router();

publicRouter.get('/PING',(req,res)=>{
    res.send('PONG');
})



