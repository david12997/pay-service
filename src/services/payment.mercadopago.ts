import { MercadoPagoMethodsAvailable } from "types/mp.payment.methods";
import { MercadoPagoFactory } from "./../factories/mercadopago.factory";
import { PaymentAdapterInterface } from "./../interfaces/payment.adapter.interface";
import { CheckoutProRequest } from "./../types/request.mp.checkoutpro";


export class PaymentMercadoPagoAdapter implements PaymentAdapterInterface {

    private mpFactory: MercadoPagoFactory;

    constructor() {
            
        this.mpFactory = new MercadoPagoFactory();
    }


    async getDataProvider(provider: string, body:[MercadoPagoMethodsAvailable]): Promise<any> {
        
        try{
            const mpService = this.mpFactory.getService(body[0].adapter_type);

            const data = await mpService.getDataProvaider(provider,body);
    
            return {
                provaider: provider,
                message: 'data provaider mercado pago services and solutions',
                executed:"service/payment.mercadopago.ts",
                data
                
            };
        }catch(error){

            return {
                provaider: provider,
                executed:"service/payment.mercadopago.ts",
                error
            };
        }

    }

    async createTransaction(data: any[]): Promise<any> {


        try{
            const [params,body] = data as [{provaider:string,idtransaction:string},CheckoutProRequest];

            const mpService = this.mpFactory.getService(body.adapter_type);
            //console.log(params);
            const createPayment = await mpService.createTransaction(params.provaider,body);
    
            return{
                provaider: 'mercadopago',
                executed:"service/payment.mercadopago.ts",
                new_payment: createPayment
                
            }
        }catch(error){

            return{
                provaider: 'mercadopago',
                executed:"service/payment.mercadopago.ts",
                error
            }
        }




    }

    async confirmPayment(paymentId: string): Promise<any> {
        // Lógica para confirmar un pago con la API de MercadoPago
    }
}


