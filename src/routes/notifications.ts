import { NextFunction, Request, Response, Router } from "express";
import { body, validationResult } from 'express-validator';

const Notifications = Router();

/**
 * @route POST api/v1/notifications/:provider/
 * @desc html template for pay.
 * @access Publico
 */

Notifications.post("/:provider/", (req: Request, res: Response) => {

    console.log(req.body);

    res.status(200).json({
        executed: 'routes/notifications.ts',
        message: 'success',
        data: 'Notifications'
    });
});

module.exports = Notifications;