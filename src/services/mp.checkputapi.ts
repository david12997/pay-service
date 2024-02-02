import { MercadoPagoConfig, Payment, Preference } from 'mercadopago'
import { MercadoPagoServiceInterface } from "./../interfaces/mp.services.interface";
import { GetData } from './get.data';

import { MercadoPagoMethodsAvailable } from "types/mp.payment.methods";
import { CheckoutAPIRequest } from 'types/request.mp.checkoutapi';
import { TransactionServices } from './transaction.services';
import { MercadoPagoCreditCardPayment } from 'types/mp.creditcard.pay';
import { UserService } from './user.services';



export class CheckoutAPIMercadoPago implements MercadoPagoServiceInterface{


    async getDataProvaider(provider: string, body:[MercadoPagoMethodsAvailable]): Promise<any> {
        try{
            // Lógica para obtener los datosde checkout api de MercadoPago
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

    async createTransaction(params:{provaider:string,idtransaction:string},body:CheckoutAPIRequest): Promise<any> {

        // Lógica para crar una preferencia de pago usando checkout pro de MercadoPago
        try{
           
            const client = new MercadoPagoConfig({ accessToken: body.seller.access_token, options:{integratorId:"dev_24c65fb163bf11ea96500242ac130004"}});
            const preferencia = new Preference(client);
            
            const createPayment = await preferencia.create({
            body:{
                items:body.items,
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
                },
                statement_descriptor:body.transaction.statement_descriptor,
                
            }
            })

            const dataTransaction ={
                provider:params.provaider,
                idtransaction:params.idtransaction,
                solution:body.adapter_type,
                status:body.status,
                owner:body.owner,
                transaction:createPayment
            }
            
            const myTransactionService = new TransactionServices();
            const newTransaccion = await myTransactionService.create({
                status:'draft',
                owner:body.owner.id,
                id_provider:1,
                transaccion_usuario:body.owner.id,
                data_remitente:JSON.stringify({payer:'checkout api',state:'draft',message:'without payer data'}),
                data_destinatario:JSON.stringify(body.seller),
                data_transaccion:JSON.stringify(dataTransaction),
                mp_preference_id:createPayment.id as string
            
            })
     
            
            return{
                provaider: body.payment_adapter,
                solution: body.adapter_type,
                new_payment: {
                    newTransaccion,
                    dataTransaction,
                    id:params.idtransaction,

                },
                executed:"service/mp.checoutpro.ts",
            
            }
        }
        
        catch(error: any){
            return{
                executed:"service/mp.checoutpro.ts",
                error
            }
        }

    }
    async createPaymentCreditCard(props:{data_payment:MercadoPagoCreditCardPayment,seller_email:string}): Promise<any> {
        try{

            const user = new UserService();
            const user_data = await user.findUserByEmail(props.seller_email);
            const mp_access_token = await user.decodeMPAccessToken(user_data.mp_access_token);
           console.log(props.data_payment);

            const client = new MercadoPagoConfig({
                accessToken: mp_access_token,
                options:{integratorId:"dev_24c65fb163bf11ea96500242ac130004"}
            })

            const payment = new Payment(client);
            const createPayment = await payment.create({
                body:{
                    
                    transaction_amount:props.data_payment.transaction_amount,
                    token:props.data_payment.token,
                    installments:props.data_payment.installments,
                    payment_method_id:props.data_payment.payment_method_id,
                    issuer_id:parseInt(props.data_payment.issuer_id),
                    description:'prueba description',
                    payer:{
                        email:props.data_payment.payer.email,
                        identification:{
                            type:props.data_payment.payer.identification.type,
                            number:props.data_payment.payer.identification.number
                        }
                    }
                }
            })

            

            
            return{
                executed:"service/mp.checoutpro.ts",
               createPayment,
               mp_access_token
            }

        }catch(error){
            return{
                executed:"service/mp.checoutpro.ts",
                error
            }
       }

    }



}