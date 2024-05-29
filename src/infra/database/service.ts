import { DatabaseUseCase } from "../../domain/useCase/databaseUseCase";
import { DatabaseError } from "../../utils/error/error";
import { mongoConnect } from "./mongodb/dto/mongoDbDto";

class service implements DatabaseUseCase{
    async connect(): Promise<boolean | DatabaseError> {
        try {
            const client = await mongoConnect();
            
            if(client.connection.readyState === 0){
                throw new DatabaseError('Erro to connect database, because disconnected', 5000, "DATABASE_ERROR");
            }
            if(client.connection.readyState === 2){
                throw new DatabaseError('Await database connection', 5002, "DATABASE_ERROR");
            }
            if(client.connection.readyState === 3){
                throw new DatabaseError('Database are disconnecting', 5003, "DATABASE_ERROR");
            }
            return true;
        } catch (error) {
            return new DatabaseError('Erro to connect database', 50099, "DATABASE_ERROR");
        }
    }
    disconnect(): Promise<boolean | DatabaseError> {
        throw new Error("Method not implemented.");
    }

}