import { AuthUseCase } from "../../domain/useCase/authUseCase";

class AuthController implements AuthUseCase {
    login(): Promise<boolean | Error> {
        throw new Error("Method not implemented.");
    }
    logout(): Promise<boolean | Error> {
        throw new Error("Method not implemented.");
    }

}