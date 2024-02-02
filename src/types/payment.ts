export type payment = {

    id?: number;
    status: 'draft' | string;
    owner?: number | null;
    created_on?: Date | null;
    data_paiment: string;
    provider: string;
    user_provider_id: string | number;
    payment_id?: string | null;

}