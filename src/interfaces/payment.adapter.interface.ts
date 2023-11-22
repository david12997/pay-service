
export interface PaymentAdapterInterface {

    getDataProvider(provider:string): Promise<any>;
    createTransaction(data:any[]): Promise<any>;
    confirmPayment(paymentId: string): Promise<any>;
}