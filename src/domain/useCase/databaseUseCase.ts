import { DatabaseError } from "../../utils/error/error";
import { buildModel } from "../entity/buildModel";
import { serverModel } from "../entity/serverModel";

export interface DatabaseUseCase {
    connect(): Promise<boolean | DatabaseError>;
    disconnect(): Promise<boolean | DatabaseError>;
    createServer(serverInformation:serverModel): Promise<boolean | DatabaseError>;
    deleteServer(id:string): Promise<boolean | DatabaseError>;
    listAllServers(): Promise<boolean | DatabaseError>;
    getServer(id:string): Promise<boolean | DatabaseError>;
    updateServer(id:string): Promise<boolean | DatabaseError>;
    createBuild(buildModel:buildModel): Promise<boolean | DatabaseError>;
    deleteBuild(id:string): Promise<boolean | DatabaseError>;
    listBuilds(): Promise<boolean | DatabaseError>;
    getBuild(id:string): Promise<boolean | DatabaseError>;   
}