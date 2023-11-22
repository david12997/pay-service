import { MercadoPagoConfig, Preference } from 'MercadoPago';
import { TransaccionRespository } from './../repositories/transaction.repository';
import { CheckoutProRequest } from './../types/request.mp.checkoutpro';
import { transaccion } from './../models/transaccion';
import { MercadoPagoMethodsAvailable } from './../types/mp.payment.methods';
import { MercadoPagoServiceInterface } from './../interfaces/mp.services.interface';
import { GetData } from './get.data';

export class CheckoutProMercadoPago implements MercadoPagoServiceInterface{

    private transactionRepository: TransaccionRespository

    // Constructor con configuraciones específicas de MercadoPago
    constructor() {

        this.transactionRepository = new TransaccionRespository()
     }


    async getDataProvaider(provider: string, body:[MercadoPagoMethodsAvailable]): Promise<any> {

        try{
            // Lógica para obtener los datos de un proveedor de pago usando checkout pro de MercadoPago
            const dataPaymentsType = await GetData(['https://api.mercadopago.com/v1/payment_methods'],body[0].access_token);
                
            return {
                
                payments_available: dataPaymentsType[0],
                executed:"service/mp.checoutpro.ts",
            };
        }catch(error){
                
                return {
                   
                    executed:"service/mp.checoutpro.ts",
                    error
                };
            }

    }
    
    async createTransaction(params:{provider:string,idtransaction:string},body:CheckoutProRequest): Promise<any> {

        // Lógica para crar una preferencia de pago usando checkout pro de MercadoPago
        try{
           
            const client = new MercadoPagoConfig({ accessToken: body.seller.access_token, options:{integratorId:"dev_24c65fb163bf11ea96500242ac130004"}});
            const preferencia = new Preference(client);

            const createPayment = await preferencia.create({
            body:{
                items:body.items,
                payer:{
                    name:body.buyer.name,
                    surname:body.buyer.surname,
                    email:body.buyer.email,
                    phone:{
                        area_code: body.buyer.area_code.toString(),
                        number:body.buyer.phone_number.toString(),
                    },
                    address:{
                        zip_code:body.buyer.zip_code,
                        street_name:body.buyer.street_name,
                        street_number:body.buyer.street_number,
                    }
                    
                },
                payment_methods:{
                    excluded_payment_methods:body.seller.payment_methods.excluded_payment_methods,
                    excluded_payment_types:body.seller.payment_methods.excluded_payment_types
                },
                back_urls:{
                    success:body.transaction.back_urls.success,
                    pending:body.transaction.back_urls.pending,
                    failure:body.transaction.back_urls.failure
                },
                notification_url:body.transaction.notification_url,
                auto_return:body.transaction.auto_return,
                shipments:{
                    cost:body.delivery.cost
                }
                
            }
            })

            const dataTransaction ={
                provider:params.provider,
                idtransaction:params.idtransaction,
                solution:body.adapter_type,
                status:body.status,
                owner:body.owner,
                transaction:createPayment
            }

            const transactionData: transaccion = new transaccion();
            transactionData.status = 'draft';
            transactionData.owner = body.owner.id;
            transactionData.id_provaider = 1;
            transactionData.transaccion_usuario = 1;
            transactionData.data_remitente = JSON.stringify(body.buyer);
            transactionData.data_destinatario = JSON.stringify(body.seller);
            transactionData.data_transaccion = JSON.stringify(dataTransaction);
    
            this.transactionRepository.create(transactionData);

            return{
                provaider: body.payment_adapter,
                solution: body.adapter_type,
                new_payment: {
                    id:params.idtransaction,
                    transaccionId:transactionData.id,
                    payment:createPayment,

                },
                executed:"service/mp.checoutpro.ts",
            
            }
        }
        catch(error){

            return{
                executed:"service/mp.checoutpro.ts",
                error
            }
        }

    }


}