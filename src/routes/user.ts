import { userController } from "./../controllers/user.controller";
import { NextFunction, Request, Response, Router } from "express";
import { body, validationResult } from 'express-validator';
import { authenticateToken } from "./../middlewares/auth.middleware";

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
 * @route POST api/v1/goolge/sign-up/:key
 * @desc create/authenticate google user.
 * @access Publico
 */

UserRoutes.post("/google/sign-up/:key/", (req: Request, res: Response) => {

    try{
        if(req.params.key === process.env.GOOGLE_XCODE) {
            const controllerUser = new userController(req.body);
            return controllerUser.createUserWithGoogle(req.body, res);
        }
        
        return res.status(401).json({
            message: 'user.routes unauthorized',
        });

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

/**
 * @route POST api/v1/user/mercadopago/set-token/
 * @desc actualizar mercadopago access token.
 * @access privado
 */ 
UserRoutes.post("/mercadopago/set-token/",authenticateToken,

    body('token').exists().withMessage('token is required'),
    body('token').isString().withMessage('token must be a string'),
    body('email').exists().withMessage('email is required'),
    body('email').isString().withMessage('email must be a string'),

    (req: Request, res: Response, next:NextFunction) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ 
                message: 'error validation',
                errors: errors.array() 
            });
        }
        next();

    }, (req: Request, res: Response) => {
            
        try{

            
            const controllerUser = new userController(req.body);
            return controllerUser.setToken({token:req.body.token,email:req.body.email}, res);
            

        }catch(error){

            return res.status(500).json({
                message: 'user.routes internal server error while creating user',
                error
            });
        }
    }
);


module.exports = UserRoutes;