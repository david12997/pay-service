import { userController } from "./../controllers/user.controller";
import { NextFunction, Request, Response, Router } from "express";
import { body, validationResult } from 'express-validator';

const UserRoutes = Router();

/**
 * @route POST api/v1/user/sign-up/
 * @desc crea un usuario.
 * @access Publico
 */

UserRoutes.post("/sign-up/", (req: Request, res: Response) => {

    try{
        const controllerUser = new userController(req.body);
        return controllerUser.createUser(req.body, res);
        

    }catch(error){

        return res.status(500).json({
            message: 'user.routes internal server error while creating user',
            error
        });
    }

});

/**
 * @route POST api/v1/user/sign-in/
 * @desc loguea un usuario.
 * @access Publico
 */

UserRoutes.post("/sign-in/", (req: Request, res: Response) => {
    
        try{
            const controllerUser = new userController(req.body);
            return controllerUser.signIn(req.body, res);
            
    
        }catch(error){
    
            return res.status(500).json({
                message: 'user.routes internal server error while creating user',
                error
            });
        }
});

module.exports = UserRoutes;