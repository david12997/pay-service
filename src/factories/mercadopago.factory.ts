import { CheckoutProMercadoPago } from "./../services/mp.ckeckoutpro";


export abstract class ServiceMercadoPagoFactory{
    abstract getService(provaider:string,service:string):any;
}

export class MercadoPagoFactory extends ServiceMercadoPagoFactory{
    
    getService(provaider:string):any{

        switch(provaider){
            case 'checkout pro':
                return new CheckoutProMercadoPago();
            default:
                return new CheckoutProMercadoPago();
        }
    }
}