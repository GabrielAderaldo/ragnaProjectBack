interface AuthUseCase {
    login(): Promise<boolean | Error>;
    logout(): Promise<boolean | Error>;
}