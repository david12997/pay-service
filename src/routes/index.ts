import { Router } from "express";

const ApiV1 = Router();
const Templates = Router();
const ReactApp = Router();


/**
 * @routes  /api/v1/payments/*
 * @desc gather all routes related to payments.
 */
ApiV1.use('/payments/', require('./payments'));


/**
 * @routes  /api/v1/notifications/*
 * @desc gather all routes related to notifications.
 */
ApiV1.use('/notifications/', require('./notifications'));


/**
 * @routes  /api/v1/user/*
 * @desc gather all routes related to the user.
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
 * @desc gather all routes related to paylinks
 */

Templates.use('/paylinks/', require('./templates'));


/**
 * @routes  /*
 * @desc gather all routes related to frontned.
 */
ReactApp.use('/', require('./app'));



export{
    ApiV1,
    Templates,
    ReactApp
}