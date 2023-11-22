import { PaymentAdapterInterface } from "./../interfaces/payment.adapter.interface";
import { PaymentMercadoPagoAdapter } from "./../services/payment.mercadopago";

export abstract class PaymentFactory{
    abstract getProvider(provaider:string):PaymentAdapterInterface;
}

export class PaymentProviderFactory extends PaymentFactory{
    
    getProvider(provaider:string):PaymentAdapterInterface{

        switch(provaider){
            case 'mercadopago':
                return new PaymentMercadoPagoAdapter();
            default:
                return new PaymentMercadoPagoAdapter();
        }
    }
}