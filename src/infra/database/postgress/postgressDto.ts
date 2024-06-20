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

export const createUser = async (name:string,email:string,id:string) => {
    try{
        const user = await prisma.user.create({data:{name,email,id:id,builds:}})
        return user;
    }catch(err){
        throw err;
    }
};