import {initializeApp} from 'firebase/app'
import { firebaseConfig } from './infra/database/firebase/config/firebase.config';
import { configDotenv } from 'dotenv';
import expres from 'express';
import { UserController } from './implementation/controllers/userController';
configDotenv();

export async function app(logger:boolean){
    const app = expres();
    const firebaseApp = initializeApp(firebaseConfig);
    app.use(expres.json());
    app.get('/PING',(req,res)=>{
        res.send('PONG');
    })

    app.post('/USER/CREATE',async (req:expres.Request,res:expres.Response)=>{
        try{
            const {name,email} = req.body;
            const userController = new UserController();
            const user = await userController.createUser(name,email);
            res.status(201).json(user);
        }catch(err){
            if(err.statusCode){
                res.status(err.statusCode).json(err);
            }else{
                res.status(500).json(err);
            }
        }
    })

    return app;
}