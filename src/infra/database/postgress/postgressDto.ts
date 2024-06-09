import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


export const getUserByEmail = async (email:string) => {
    try{
        const user = await prisma.user.findUnique({where:{email}})
        return user;
    }catch(err){
        throw err;
    }
}

export const createUser = async (name:string,email:string) => {
    try{
        const user = await prisma.user.create({data:{name,email}})
        return user;
    }catch(err){
        throw err;
    }
};