export type userProducts = {
    id?: number; 
    status: 'draft' | string; 
    owner: number | null; 
    created_on: Date | null; 
    name: string | null; 
    price: string | null;
    iva: string | null; 
    description: string | null; 
    media: string | null; 
    delivery: string | null; 
    price_delivery: string | null; 
    product_user: number | null; 
    stock: number | null; 
    views: number | null;
    finished_pays: number | null;
  };