
export interface PaymentAdapterInterface {

    getDataProvider(provider:string,apiKey:any[]): Promise<any>;
    createTransaction(data:any[]): Promise<any>;
    confirmPayment(paymentId: string): Promise<any>;
    
}