interface Payer {
    email: string;
    identification: Identification;
}

interface Identification {
    type: string;
    number: string;
}

export interface MercadoPagoCreditCardPayment {
    token: string;
    issuer_id: string;
    payment_method_id: string;
    transaction_amount: number;
    installments: number;
    payer: Payer;
}


