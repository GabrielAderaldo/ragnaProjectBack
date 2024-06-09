export interface UserUseCase {
    createUser(name:string,email:string):Promise<any>;
    getUser(id:number):Promise<any>;
    getUserByEmail(email:string):Promise<any>;
    deleteUser(id:number):Promise<any>;
    updateUser(id:number):Promise<any>;
}