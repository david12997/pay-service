
export interface MercadoPagoServiceInterface {

    getDataProvaider(provider:string,body:[any]): Promise<any>;
    createTransaction(params:any,body:any): Promise<any>;
    createPaymentCreditCard(data:any): Promise<any>;

}