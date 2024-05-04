import { PaymentAdapterInterface } from "../interfaces/payment.adapter.interface";
import { PaymentMercadoPagoAdapter } from "../adapters/payment.mercadopago";
import { PaymentPaypalAdapter } from "../adapters/payment.paypal";
import { PaymentPayUAdapter } from "../adapters/payment.payu";


export abstract class PaymentFactory{
    abstract getProvider(provider:string):PaymentAdapterInterface;
}

export class PaymentProviderFactory extends PaymentFactory {
    getProvider(provider: string): PaymentAdapterInterface {
      switch (provider) {
        case 'mercadopago':
          return new PaymentMercadoPagoAdapter();
        case 'paypal':
          return new PaymentPaypalAdapter();
        case 'payu':
          return new PaymentPayUAdapter();
        default:
          throw new Error(`Unsupported payment provider: ${provider}`);
      }
    }
  }