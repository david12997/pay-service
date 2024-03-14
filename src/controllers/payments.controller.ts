import { Request, Response } from 'express';
import { PaymentProviderFactory } from './../factories/payments.factory';
import { PaymentAdapterInterface } from './../interfaces/payment.adapter.interface';
import { TransactionServices } from './../services/transaction.services';
import { MercadoPagoFactory } from './../factories/mercadopago.factory';


export class PaymentsController {
    provider: string;
    private providers:string[]
    private paymentFactory:PaymentProviderFactory

    constructor(provider:string) {
        
        this.provider = provider;
        this.providers = ['mercadopago','paypal','payu'] //provider accpeted
        this.paymentFactory = new PaymentProviderFactory();
    }

    // GET /api/v1/payments/:provider
    async getProvider(req: Request, res: Response) {

        try{

            if(!this.providers.includes(this.provider)){
                return res.status(404).json({
                    message: 'provider not found'
                });
            }    

            const providerPayment:PaymentAdapterInterface = this.paymentFactory.getProvider(this.provider);
            const data = await providerPayment.getDataProvider(this.provider, [req.body]);
            return res.status(200).json({
                data
            });
            
    
        }catch(error){

            return res.status(500).json({
                message: 'internal server error',
                error
            });
        }


    
    }


    // POST /api/v1/payments/:provider/transaction/:idtransaction

    async createTransaction(req: Request, res: Response) {

        try{

            if(!this.providers.includes(this.provider)){
                return res.status(404).json({
                    message: 'provider not found'
                });
            }    
            
            const providerPayment:PaymentAdapterInterface = this.paymentFactory.getProvider(this.provider);
            const data = await providerPayment.createTransaction([req.params,req.body]);
            return res.status(200).json({
                data
            });
            
    
        }catch(error){

            return res.status(500).json({
                message: 'internal server error',
                error
            });
        }
    }


    // POST /api/v1/payments/transaction/:provider/id_transaction

    async UpdateProviderIdPayment(req: Request, res: Response) {

        try{
            if(!this.providers.includes(this.provider)){
                return res.status(404).json({
                    message: 'provider not found'
                });
            }
    
            if(!req.params.provider){
                return res.status(404).json({
                    message: 'provider not found'
                });
            }
    
            if(this.provider === 'mercadopago'){
                
                const addIdProvider = new TransactionServices();
                const transaction = await addIdProvider.findTransactionByPreferenceId(req.body.preference_id);
               
                if(transaction.transaction.length <= 0){
                    return res.status(404).json({
                        message: 'transaction not found -> preference id invalid'
                    });
                }
    
                if(transaction.transaction[0].mercadopago_id !== null || transaction.transaction[0].merchant_order_id !== null){
                    return res.status(404).json({
                        message: 'mercadopago_id already exists'
                    });
                }
    
                const data = await addIdProvider.addMercadopagoId(transaction.transaction[0].id,req.body.mercadopago_id,req.body.merchant_order_id);
                return res.status(200).json({
                   data
                    
                });
            }
        }catch(error){

            return res.status(500).json({
                message: 'internal server error',
                error,
                executed:"controller/payments.controller.ts method UpdateProviderIdPayment"
            });
        }
        
    }

    // POST /api/v1/payments/:provider/create
    async CreatePayment(req: Request, res: Response): Promise<any> {

        try{
            if(!this.providers.includes(this.provider)){
                return res.status(404).json({
                    message: 'provider not found'
                });
            } 
    
            if(this.provider === 'mercadopago'){
                
                

                const mpFactory = new MercadoPagoFactory();
                const checkoutAPI = mpFactory.createCreditCardPay();
                const cardsSupported = ['visa','amex','master','dinner','codensa'];

                if(cardsSupported.includes(req.body.formData.payment_method_id)){
        
                    const createPayment = await checkoutAPI.createPaymentCreditCard({
                        data_payment:{
                            token:req.body.formData.token,
                            installments:req.body.formData.installments,
                            transaction_amount:req.body.formData.transaction_amount,
                            payment_method_id:req.body.formData.payment_method_id,
                            issuer_id:req.body.formData.issuer_id,
                            payer:{
                                email:req.body.formData.payer.email,
                                identification:{
                                    type:req.body.formData.payer.identification.type,
                                    number:req.body.formData.payer.identification.number
                                }
                            }
                        },
                        seller_email:req.body.seller_email
                    });

                    return res.status(200).json({
                        data:createPayment
                    });
        
                }
               
            }
    
           
        }catch(error){
            return res.status(500).json({
                message: 'internal server error',
                error,
                executed:"controller/payments.controller.ts method CreatePayment"
            });
        }

       
    }
}
