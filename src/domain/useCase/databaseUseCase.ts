import { Build, User } from "../../infra/database/postgress/modelsDto";

export interface databaseUseCase{
    listAllBuildsForOneServer(): Promise<Build[]>;
    createUser(name:string,email:string): Promise<User>;
    deleteUser(): Promise<Boolean>;
    updateUser(): Promise<User>;
    createBuild(): Promise<Build>;
    deleteBuild(): Promise<Boolean>;
    updateBuild(): Promise<Build>;
}