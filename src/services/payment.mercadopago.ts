import { MercadoPagoFactory } from "./../factories/mercadopago.factory";
import { PaymentAdapterInterface } from "./../interfaces/payment.adapter.interface";
import { CheckoutProRequest } from "./../types/request.mp.checkoutpro";


export class PaymentMercadoPagoAdapter implements PaymentAdapterInterface {

    private mpFactory: MercadoPagoFactory;

    constructor() {
            
        this.mpFactory = new MercadoPagoFactory();
    }


    async getDataProvider(provider: string): Promise<any> {
  

        return {
            provaider: provider,
            message: 'data provaider mercado pago service'
        };
    }

    async createTransaction(data: any[]): Promise<any> {


        try{
            const [params,body] = data as [{provider:string,idtransaction:string},CheckoutProRequest];

            const mpService = this.mpFactory.getService(params.provider);
            const createPayment = await mpService.createPreference(params.provider,body);
    
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


