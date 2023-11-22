import { Request, Response } from 'express';
import { PaymentProviderFactory } from './../factories/payments.factory';
import { PaymentAdapterInterface } from './../interfaces/payment.adapter.interface';
import { MercadoPagoMethodsAvailable } from './../types/mp.payment.methods';

export class PaymentsController {
    provaider: string;
    private providers:string[]

    constructor(provaider:string, private paymentFactory:PaymentProviderFactory) {
        
        this.provaider = provaider;
        this.providers = ['mercadopago','paypal','payU'] //provider accpeted
    }

    // GET /api/v1/payments/:provaider
    async getProvider(req: Request, res: Response) {

        try{

            if(!this.providers.includes(this.provaider)){
                return res.status(404).json({
                    message: 'provider not found'
                });
            }    

            const providerPayment:PaymentAdapterInterface = this.paymentFactory.getProvider(this.provaider);
            const data = await providerPayment.getDataProvider(this.provaider, [req.body]);
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


    // POST /api/v1/payments/:provaider/transaction/:idtransaction

    async createTransaction(req: Request, res: Response) {

        try{

            if(!this.providers.includes(this.provaider)){
                return res.status(404).json({
                    message: 'provider not found'
                });
            }    

            

            const providerPayment:PaymentAdapterInterface = this.paymentFactory.getProvider(this.provaider);
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
