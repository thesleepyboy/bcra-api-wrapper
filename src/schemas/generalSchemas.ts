export interface ErrorResponse {
    status: number;
    errorMessages: string[] | null;
}

export interface Header {
    'Accept-Encoding'?: 'gzip' | 'br';
    'Accept-Language'?: 'es-AR' | 'en-US';
}