import { PaymentAdapterInterface } from "../interfaces/payment.adapter.interface";

export class PaymentPayUAdapter implements PaymentAdapterInterface {
  // Implementa los métodos específicos de PayU aquí
    getDataProvider(provider: string, apiKey: any[]): Promise<any> {
         return Promise.resolve({
                provaider: provider,
                message: 'data provaider payu services and solutions',
                executed:"service/payment.payu.ts"
         });
    }

    createTransaction(data: any[]): Promise<any> {
       
        return Promise.resolve({
            provaider: data[0],
            message: 'create transaction payu services and solutions',
            executed:"service/payment.payu.ts"
       });
    }

    confirmPayment(paymentId: string): Promise<any> {
        return Promise.resolve({
            provaider: paymentId,
            message: 'confirm payment payu services and solutions',
            executed:"service/payment.payu.ts"
       });
    }
    
}