export interface Cheque {
    numeroCheque: number;
    denunciado: boolean;
    fechaProcesamiento: string;
    denominacionEntidad: string;
    detalles: ChequeDetalle[] | null
}

export interface ChequeDetalle {
    sucursal: number;
    numeroCuenta: number;
    causal: string | null;
}

export interface ChequeResponse {
    status: number;
    results: Cheque
}

export interface Entidad {
    codigoEntidad: number;
    denominacion: string | null;
}

export interface EntidadResponse {
    status: number;
    results: Entidad[] | null;
}