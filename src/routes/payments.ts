import { PaymentProviderFactory } from "./../factories/payments.factory";
import { PaymentsController } from "./../controllers/payments.controller";
import { Request, Response, Router } from "express";

const PaymentRouter = Router();

/**
 * @route GET /api/v1/payments/:provaider
 * @desc obtiene inforrmación de los  proveedores de pagos disponibles.
 * @access Publico
 */

PaymentRouter.get("/:provaider", (req: Request, res: Response) => {

    const factoryPayment = new PaymentProviderFactory();
    const paymentController = new PaymentsController(req.params.provaider,factoryPayment);

    return paymentController.getProvider(req, res);
    
});




/**
 * @route POST /api/v1/payments/:provaider/transaction/:idtransaction
 * @desc crea una transacción de pago.
 * @access Publico
 */

PaymentRouter.post("/:provaider/transaction/:idtransaction", (req: Request, res: Response) => {

    const factoryPayment = new PaymentProviderFactory();
    const paymentController = new PaymentsController(req.params.provaider,factoryPayment);

    return paymentController.createTransaction(req, res);

});


module.exports = PaymentRouter;