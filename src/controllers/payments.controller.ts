import { Request, Response } from 'express';
import { PaymentProviderFactory } from './../factories/payments.factory';
import { PaymentAdapterInterface } from './../interfaces/payment.adapter.interface';
import { MercadoPagoMethodsAvailable } from './../types/mp.payment.methods';

export class PaymentsController {
    provider: string;
    private providers:string[]

    constructor(provider:string, private paymentFactory:PaymentProviderFactory) {
        
        this.provider = provider;
        this.providers = ['mercadopago','paypal','payu'] //provider accpeted
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
}
