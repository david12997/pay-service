import { Router } from "express";

const ApiV1 = Router();

/**
 * @routes  /api/v1/payments/*
 * @desc agrupa todas las rutas relacionadas con pagos, pasarelas,  proveedores y transacciones.
 */
ApiV1.use('/payments/', require('./payments'));


module.exports = ApiV1;