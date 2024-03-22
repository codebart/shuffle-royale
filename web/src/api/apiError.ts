export type ApiError = {
    code: string;
    message: string;
    timestamp: string;
    details?: unknown;
}