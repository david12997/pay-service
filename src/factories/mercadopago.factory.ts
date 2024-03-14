import { MercadoPagoServiceInterface } from "interfaces/mp.services.interface";
import { CheckoutProMercadoPago } from "./../services/mp.ckeckoutpro";
import { CheckoutAPIMercadoPago } from "./../services/mp.checkputapi";


export abstract class ServiceMercadoPagoFactory{
    abstract getService(service_mp:string):any;
    abstract createCreditCardPay ():any;
}

export class MercadoPagoFactory implements ServiceMercadoPagoFactory{
    
    getService(service_mp:string):MercadoPagoServiceInterface{

        switch(service_mp){
            case 'checkout pro':
                return new CheckoutProMercadoPago();

            case 'checkout api':
                return new CheckoutAPIMercadoPago();

            default:
                return new CheckoutProMercadoPago();
        }
    }

    createCreditCardPay ():CheckoutAPIMercadoPago{
        
        return new CheckoutAPIMercadoPago();
    
    }
}