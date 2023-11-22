import { MercadoPagoConfig, Preference } from 'MercadoPago';
import { transaccion } from './../models/transaccion';
import { TransaccionRespository } from './../repositories/transaction.repository';
import { CheckoutProRequest } from './../types/request.mp.checkoutpro';

export class CheckoutProMercadoPago{

    private transactionRepository: TransaccionRespository

    // Constructor con configuraciones específicas de MercadoPago
    constructor() {

        this.transactionRepository = new TransaccionRespository()
     }
    
    async createPreference(params:{provider:string,idtransaction:string},body:CheckoutProRequest): Promise<any> {

        // Lógica para crar una preferencia de pago usando checkout pro de MercadoPago
        try{
           
            const client = new MercadoPagoConfig({ accessToken: body.seller.access_token });
            const preferencia = new Preference(client);

            const createPayment = await preferencia.create({
            body:{
                items:body.items,
            }
            })


            /*const transactionData: transaccion = new transaccion();
            transactionData.status = 'draft';
            transactionData.owner = body.owner.id;
            transactionData.id_provaider = 1;
            transactionData.transaccion_usuario = 1;
            transactionData.data_remitente = JSON.stringify(body.buyer);
            transactionData.data_destinatario = 'data_destinatario';
            transactionData.data_transaccion = 'data_transaccion';
    
            this.transactionRepository.create(transactionData);*/

            return{
                provaider: 'mercadopago',
                new_payment: createPayment
            
            }
        }
        catch(error){

            return{
                provaider: 'mercadopago',
                error
            }
        }

    }


}