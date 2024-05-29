import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export async function mongoConnect(){
    const client = await mongoose.connect(process.env.mongoDbUrl as string);
    return client;
}