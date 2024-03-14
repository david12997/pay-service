import { Router } from "express";

const ApiV1 = Router();
const Templates = Router();
const ReactApp = Router();


/**
 * @routes  /api/v1/payments/*
 * @desc agrupa todas las rutas relacionadas con pagos, pasarelas,  proveedores y transacciones.
 */
ApiV1.use('/payments/', require('./payments'));


/**
 * @routes  /api/v1/notifications/*
 * @desc agrupa todas las rutas relacionadas con notificaciones.
 */
ApiV1.use('/notifications/', require('./notifications'));


/**
 * @routes  /api/v1/user/*
 * @desc agrupa todas las rutas relacionadas con usuarios.
 */
ApiV1.use('/user/', require('./user'));


/**
 * @routes  /*
 * @desc gather all routes related to the inventory.
 * 
 */
ApiV1.use('/inventory/', require('./inventory'));



/**
 * @routes  /paylinks/*
 * @desc agrupa todas las rutas relacionadas con templates.
 */

Templates.use('/paylinks/', require('./templates'));


/**
 * @routes  /*
 * @desc agrupa todas las rutas relacionadas con el frontend.
 */
ReactApp.use('/', require('./app'));



export{
    ApiV1,
    Templates,
    ReactApp
}