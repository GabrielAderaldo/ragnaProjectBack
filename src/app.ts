import {initializeApp} from 'firebase/app'
import { firebaseConfig } from './infra/database/firebase/config/firebase.config';
import { configDotenv } from 'dotenv';
import { publicRouter } from '../src/presenter/router/publicRouter';
import express from 'express';
configDotenv();

export async function app(logger:boolean){
    const app = express();
    const firebaseApp = initializeApp(firebaseConfig);
    app.use(express.json());
    app.use('/public',publicRouter);
    
    return app;
}