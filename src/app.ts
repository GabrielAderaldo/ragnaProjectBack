import {initializeApp} from 'firebase/app'
import { firebaseConfig } from './infra/database/firebase/config/firebase.config';
import { configDotenv } from 'dotenv';
import { publicRouter } from '../src/presenter/router/publicRouter';
import expres from 'express';
configDotenv();

export async function app(logger:boolean){
    const app = expres();
    const firebaseApp = initializeApp(firebaseConfig);
    app.use(expres.json());
    app.use('/public',publicRouter);
    
    return app;
}