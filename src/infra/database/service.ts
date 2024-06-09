import { databaseUseCase } from "../../domain/useCase/databaseUseCase";
import { Build, User } from "./postgress/modelsDto";
import { createUser } from "./postgress/postgressDto";

export class DatabaseService implements databaseUseCase{

    listAllBuildsForOneServer(): Promise<Build[]> {
        throw new Error("Method not implemented.");
    }
    async createUser(name:string,email:string): Promise<User> {
        try{
            const user = await createUser(name,email);
            return user;
        }catch(err){
            throw err;
        }
    }
    deleteUser(): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    updateUser(): Promise<User> {
        throw new Error("Method not implemented.");
    }
    createBuild(): Promise<Build> {
        throw new Error("Method not implemented.");
    }
    deleteBuild(): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    updateBuild(): Promise<Build> {
        throw new Error("Method not implemented.");
    }

}