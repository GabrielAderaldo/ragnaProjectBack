export interface DatabaseUseCase {
    connect(): Promise<void>;
    disconnect(): Promise<void>;
}