export type userService = {
    id?: number;
    status: 'draft' | string;
    owner: number | null;
    created_on: Date | null;
    name: string | null;
    price: string | null;
    iva: string | null;
    recollector: string | null;
    media: string | null;
    services_user: number | null;
    views: number | null;
    finished_pays: number | null;
    
  };