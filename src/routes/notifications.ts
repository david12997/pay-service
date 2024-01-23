import {  Request, Response, Router } from "express";
import { PaymentService } from "./../services/payment.services";
import { payment } from "./../types/payment";

const Notifications = Router();

/**
 * @route POST api/v1/notifications/mercadopago/
 * @desc notificatios for payments from mercadopago.
 * @access Publico
 */

Notifications.post("/mercadopago/", async(req: Request, res: Response) => {

    try{
        if(!req.body.action || !req.body.id){
            return res.status(422).json({ 
                message: 'error validation',
                errors: 'action and type are required' 
            });
            
        }
    
        const bodyPayment:payment = {
            status: 'published',
            owner: 1,
            data_paiment: JSON.stringify(req.body),
            provider: 'mercadopago',
            user_provider_id: req.body.user_id
        }
        
        const dataNotification = new PaymentService();
        await dataNotification.create(bodyPayment);
    
       
    
        return Promise.resolve(res.status(200).json({
            executed: 'routes/notifications.ts',
            message: 'success',
            data: 'Notifications'
        }));
        
    }catch(error){
        return res.status(500).json({ 
            executed: 'routes/notifications.ts',
            message: 'error server while creating transaction',
            errors: error
        });
    }

});

module.exports = Notifications;