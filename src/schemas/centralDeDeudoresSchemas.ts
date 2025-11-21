export interface ChequeCausal {
    causal: string | null;
    entidades: ChequeEntidad[] | null;
}

export interface ChequeDetalle {
    nroCheque: number;
    fechaRechazo: string;
    monto: number;
    fechaPago: string | null;
    fechaPagoMulta: string | null;
    estadoMulta: string | null;
    ctaPersonal: boolean;
    denomJuridica: string | null;
    enRevision: boolean;
    procesoJud: boolean;
}

export interface ChequeEntidad {
    entidad: number | null;
    detalle: ChequeDetalle[] | null;
}

export interface ChequeRechazado {
    identificacion: number;
    denominacion: string | null;
    causales: ChequeCausal[] | null;
}

export interface ChequeResponse {
    status: number;
    results: ChequeRechazado;
}

export interface Deuda {
    identificacion: number;
    denominacion: string | null;
    periodos: DeudaPeriodo[] | null;
}

export interface DeudaEntidad {
    entidad: string | null;
    situacion: number | null;
    fechaSit1: string | null;
    monto: number | null;
    diasAtrasoPago: number | null;
    refinanciaciones: boolean;
    recategorizacionOblig: boolean;
    situacionJuridica: boolean;
    irrecDisposicionTecnica: boolean;
    enRevision: boolean;
    procesoJud: boolean;
}

export interface DeudaPeriodo {
    periodo: string | null;
    entidades: DeudaEntidad[] | null;
}

export interface DeudaResponse {
    status: number;
    results: Deuda;
}

export interface HistorialDeuda {
    identificacion: number;
    denominacion: string | null;
    periodos: HistorialPeriodo[] | null;
}

export interface HistorialEntidad {
    entidad: string | null;
    situacion: number | null;
    monto: number | null;
    enRevision: boolean;
    procesoJud: boolean;
}

export interface HistorialPeriodo {
    periodo: string | null;
    entidades: HistorialEntidad[] | null;
}

export interface HistorialResponse {
    status: number;
    results: HistorialDeuda;
}