import fastify from 'fastify';
import {initializeApp} from 'firebase/app'
import { firebaseConfig } from './infra/database/firebase/config/firebase.config';


export async function app(logger:boolean){
    const server = fastify({logger:logger});
    const firebaseApp = initializeApp(firebaseConfig);
    return await server
}