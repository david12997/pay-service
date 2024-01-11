import { PaymentProviderFactory } from "./../factories/payments.factory";
import { PaymentsController } from "./../controllers/payments.controller";
import { NextFunction, Request, Response, Router } from "express";
import { body, validationResult } from 'express-validator';

const PaymentRouter = Router();

/**
 * @route POST /api/v1/payments/:provider
 * @desc obtiene un proveedor de pago.
 * @access Publico
 */


PaymentRouter.post("/:provider",     

    body('payment_adapter').exists().withMessage('payment_adapter is required'),
    body('adapter_type').exists().withMessage('adapter_type is required'),
    body('access_token').exists().withMessage('access_token is required'),
    body('payment_adapter').isString().withMessage('payment_adapter must be a string'),
    body('adapter_type').isString().withMessage('adapter_type must be a string'),
    body('access_token').isString().withMessage('access_token must be a string'),

    (req: Request, res: Response, next:NextFunction) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ 
                message: 'error validation',
                errors: errors.array() 
            });
        }
        next();

    },(req: Request, res: Response) => {

    try{
        const factoryPayment = new PaymentProviderFactory();
        const paymentController = new PaymentsController(req.params.provider,factoryPayment);
        return paymentController.getProvider(req, res);
    }        
    catch(error){
        return res.status(500).json({ 
            executed: 'routes/payments.ts',
            message: 'error server while getting provider',
            errors: error
        });
    }
        
    }
);




/**
 * @route POST /api/v1/payments/:provider/transaction/:idtransaction
 * @desc crea una transacción de pago.
 * @access Publico
 */

PaymentRouter.post("/:provider/transaction/:idtransaction", 

    body('payment_adapter').exists().withMessage('payment_adapter is required'),
    body('adapter_type').exists().withMessage('adapter_type is required'),
    body('seller').exists().withMessage('seller is required'),
    body('transaction').exists().withMessage('transaction is required'),
    body('delivery').exists().withMessage('delivery is required'),
    body('items').exists().withMessage('items is required'),
    body('status').exists().withMessage('status is required'),
    body('owner').exists().withMessage('owner is required'),
    body('buyer').exists().withMessage('buyer is required'),
    body('payment_adapter').isString().withMessage('payment_adapter must be a string')
    .isLength({ min: 3 })
    .withMessage('payment_adapter must be at least 3 chars long'),
    body('adapter_type').isString().withMessage('adapter_type must be a string')
    .isLength({ min: 3 })
    .withMessage('adapter_type must be at least 3 chars long'),

    (req: Request, res: Response, next:NextFunction) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ 
                message: 'error validation',
                errors: errors.array() 
            });
        }
        next();

    },(req: Request, res: Response) => {

        try{
           
            const factoryPayment = new PaymentProviderFactory();
            const paymentController = new PaymentsController(req.params.provider,factoryPayment);
            return paymentController.createTransaction(req, res);
        }
        catch(error){
            return res.status(500).json({ 
                executed: 'routes/payments.ts',
                message: 'error server while creating transaction',
                errors: error
            });
        }
        
    }
);


module.exports = PaymentRouter;