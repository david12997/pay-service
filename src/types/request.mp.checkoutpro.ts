export interface CheckoutProRequest {
    payment_adapter: string;
    adapter_type:    string;
    buyer:           Buyer;
    seller:          Seller;
    transaction:     Transaction;
    delivery:        Delivery;
    items:           Item[];
    status:          Status;
    owner:           Owner;
}

export interface Buyer {
    name:          string;
    surname:       string;
    email:         string;
    area_code:     number;
    phone_number:  number;
    zip_code:      string;
    street_name:   string;
    street_number: number;
}

export interface Delivery {
    cost: number;
}

export interface Item {
    id:          string;
    title:       string;
    description: string;
    picture_url: string;
    quantity:    number;
    unit_price:  number;
}

export interface Owner {
    id:  number;
    nit: number;
}

export interface Seller {
    access_token:    string;
    payment_methods: PaymentMethods;
    id_seller:       string;
    id_store:        string;
    marketplace:     boolean;
}

export interface PaymentMethods {
    excluded_payment_methods: ExcludedPayment[];
    excluded_payment_types:   ExcludedPayment[];
}

export interface ExcludedPayment {
}

export interface Status {
    message: string;
    code:    number;
    created: string;
    updated: string;
}

export interface Transaction {
    id:                   string;
    external_reference:   boolean;
    notification_url:     string;
    statement_descriptor: string;
    auto_return:          string;
    back_urls:            BackUrls;
}

export interface BackUrls {
    success: string;
    failure: string;
    pending: string;
}