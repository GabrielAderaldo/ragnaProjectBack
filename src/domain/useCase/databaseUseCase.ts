import { DatabaseError } from "../../utils/error/error";
import { buildModel } from "../entity/buildModel";
import { serverModel } from "../entity/serverModel";

export interface DatabaseUseCase {
    connect(): Promise<boolean | DatabaseError>;
    disconnect(): Promise<boolean | DatabaseError>;   
}