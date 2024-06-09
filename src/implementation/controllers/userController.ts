import { createCustomError, customErrorToJSON } from "../../utils/ERROR/customError";
import { UserRepository } from "../repository/userRepository";

export class UserController {
    async createUser(name: string, email: string): Promise<any> {
        try {
            const databaseService = new UserRepository();
            if(name == null || name == undefined || name == ""){
                const error = createCustomError("Error", "Validation", "Bad Request", 400, "Name is required");
                throw customErrorToJSON(error)
            }

            if(email == null || email == undefined || email == ""){
                const error = createCustomError("Error", "Validation", "Bad Request", 400, "Email is required");
                throw customErrorToJSON(error)
            }
            
            const resultUser = await databaseService.createUser(name, email);
            return resultUser;
        } catch (err) {
            throw err;
        }
    }
}