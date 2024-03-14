export type servicios ={
    id?: number;
    status: 'draft' | string;
    owner: number | null;
    created_on: Date | null;
    nombre: string | null;
    servicios_proveedor: number | null;
    data_servicio: string | null;
    body_request: string | null;
}