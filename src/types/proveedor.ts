export type proveedor ={
    id?: number; 
    status: 'draft' | string; 
    owner: 1 | number; 
    created_on?: Date | null; 
    name: string;
    solutions?: string | null; 
    data_provaider?: string | null; 
    media?: string | null; 
    response?: string | null; 
}