import { PaymentAdapterInterface } from "../interfaces/payment.adapter.interface";

export class PaymentPaypalAdapter implements PaymentAdapterInterface {
    // Implementa los métodos específicos de PayPal aquí
    getDataProvider(provider: string, apiKey: any[]): Promise<any> {
       return Promise.resolve({
              provaider: provider,
              message: 'data provaider paypal services and solutions',
              executed:"service/payment.paypal.ts"
         });
    }
    createTransaction(data: any[]): Promise<any> {
       
        return Promise.resolve({
            provaider: data[0],
            message: 'create transaction paypal services and solutions',
            executed:"service/payment.paypal.ts"
       });
    }
    confirmPayment(paymentId: string): Promise<any> {
        return Promise.resolve({
            provaider: paymentId,
            message: 'confirm payment paypal services and solutions',
            executed:"service/payment.paypal.ts"
       });
    }
  }