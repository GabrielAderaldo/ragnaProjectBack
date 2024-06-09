import {initializeApp} from 'firebase/app'
import { firebaseConfig } from './infra/database/firebase/config/firebase.config';
import { configDotenv } from 'dotenv';
import expres from 'express';
configDotenv();

export async function app(logger:boolean){
    const app = expres();
    const firebaseApp = initializeApp(firebaseConfig);
    app.get('/PING',(req,res)=>{
        res.send('PONG');
    })
    return app;
}