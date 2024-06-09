import { UserUseCase } from "../../domain/useCase/userUseCase";
import { DatabaseService } from "../../infra/database/service";

export class UserRepository implements UserUseCase{
    getUserByEmail(email: string): Promise<any> {
        throw new Error("Method not implemented.");
    }

    createUser(name: string, email: string): Promise<any> {
        try{
            const databaseService = new DatabaseService();
            const user = databaseService.createUser(name,email);
            return user;
        }catch(err){
            throw err;
        }
    }
    getUser(id: number): Promise<any> {
        throw new Error("Method not implemented.");
    }
    deleteUser(id: number): Promise<any> {
        throw new Error("Method not implemented.");
    }
    updateUser(id: number): Promise<any> {
        throw new Error("Method not implemented.");
    }

}