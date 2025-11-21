export interface DatosMonetariasParameters {
    idVariable: number;
    desde: string;
    hasta: string;
    offset?: number;
    limit?: number; 
}

export interface MetodologiaParameters {
    idVariable: number;
    offset?: number;
    limit?: number;
}

export interface MonetariasParameters {
    idVariable?: number;
    categoria: string;
    tipoSerie: string;
    periodicidad: string;
    unidadExpresion: string;
    offset?: number;
    limit?: number;
}

export interface DatosMonetaria {
    idVariable: number;
    detalle: DetalleMonetaria[] | null;
}

export interface DatosMonetariaResponse {
    status: number;
    metadata: Metadata;
    results: DatosMonetaria[] | null;
}

export interface DetalleMonetaria {
    fecha: string;
    valor: number;
}

export interface Metadata {
    resultset: Resultset;
}

export interface Metadato {
    id: number;
    detalle: string | null;
}

export interface MetadatoListResponse {
    status: number;
    metadata: Metadata;
    results: Metadato[][] | null;
}

export interface MetadatoResponse {
    status: number;
    results: Metadato[] | null;
}

export interface Monetarias {
    idVariable: number;
    descripcion: string | null;
    categoria: string | null;
    tipoSerie: string | null;
    periodicidad: string | null;
    unidadExpresion: string | null;
    moneda: string | null;
    primerFechaInformada: string | null;
    ultFechaInformada: string | null;
    ultValorInformado: number | null;
}

export interface MonetariasResponse {
    status: number;
    metadata: Metadata;
    results: Monetarias[] | null;
}

export interface Resultset {
    count: number;
    offset: number;
    limit: number;
}