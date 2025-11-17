export interface CotizacionesDetalle {
    codigoMoneda: string | null;
    descripcion: string | null;
    tipoPase: number;
    tipoCotizacion: number;
}

export interface CotizacionesFecha {
    fecha: string | null;
    detalle: CotizacionesDetalle[] | null;
}

export interface CotizacionesResponse {
    status: number;
    metadata: Metadata;
    results: CotizacionesFecha[] | null;
}

export interface CotizacionResponse {
    status: number;
    results: CotizacionesFecha;
}

export interface Divisa {
    codigo: string | null;
    denominacion: string | null;
}

export interface DivisaResponse {
    status: number;
    results: Divisa[] | null;
}

export interface ErrorResponse {
    status: number;
    errorMessages: string[] | null;
}

export interface Metadata {
    resultset: Resultset;
}

export interface Resultset {
    count: number;
    offset: number;
    limit: number;
}