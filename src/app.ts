import fastify from 'fastify';
import {initializeApp} from 'firebase/app'
import { firebaseConfig } from './infra/database/firebase/config/firebase.config';
import { configDotenv } from 'dotenv';
import { mongoConnect } from './infra/database/mongodb/dto/mongoDbDto';
import { mongoClient } from './infra/database/mongodb/config/mongoose.config';
configDotenv();

export async function app(logger:boolean){
    const server = fastify({logger:logger});
    const firebaseApp = initializeApp(firebaseConfig);
    const mongoClientInstance = await mongoConnect();
    const mongo = mongoClient(mongoClientInstance);
    console.log(mongo.connection.readyState === 1 ? 'MongoDB connected' : 'MongoDB not connected');
    return await server
}