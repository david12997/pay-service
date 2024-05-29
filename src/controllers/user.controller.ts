import { Request, Response } from 'express';
import { user } from 'types/user';
import { UserService } from './../services/user.services';

export class userController {
    
    user:user

    constructor(user:user) {
        
        this.user = user;
        
    }

    // POST /api/v1/user/sign-up
    async createUser(req: user, res: Response) {

        try{
            const userServices = new UserService();
            const hashPassword = await userServices.hashPassword(this.user.password);
            this.user.password=hashPassword;
            this.user.phone=Number(this.user.phone);
            userServices.setUser=this.user;
            const createUser = await userServices.create(userServices.getUser)

            return res.status(200).json({
                message: 'user created user.controller',
                createUser

                
            });
            
    
        }catch(error){

            return res.status(500).json({
                message: 'user.controller internal server error while creating user',
                error
            });
        }
    
    }

    // POST /api/v1/user/google/sign-up/:key
    async createUserWithGoogle(req: user, res: Response) {

        console.log(req)

        try{

            const userServices = new UserService();
            const createWithGoogle = await userServices.createWithGoogle(req)

            return res.status(200).json({
                data:createWithGoogle,
                message: 'user created user.controller',
                
            });
            
    
        }catch(error){

            return res.status(500).json({
                message: 'user.controller internal server error while creating user',
                error
            });
        }
    
    }

    // POST /api/v1/user/sign-in
    async signIn(req: {email:string,password:string}, res: Response) {

        try{
            this.user.email=req.email;
            this.user.password=req.password;
            const userService = new UserService();
            userService.setUser=this.user;
           
            const user = await userService.findUserByEmail(req.email);
            if(!user){
                return res.status(404).json({
                    message: 'user not found'
                });
            }
            

            const validPassword = await userService.validatePassword(req.password, user.password);
            if(!validPassword){
                return res.status(401).json({
                    message: 'invalid password'
                });
            }

            const token = await userService.generateToken(user);
            return res.status(200).json({
                token,
                user: {
                    id: user.id,
                    username: user.name,
                    email: user.email,
                    status: user.status,
                    phone: user.phone,
                    nit: user.nit,

                }
                
            });
    
        }catch(error){

            return res.status(500).json({
                message: 'internal server error',
                error
            });
        }
    
    }

    // POST /api/v1/user/mercadopago/set-token
    async setToken(req: {token:string,email:string}, res: Response) {

        try{
            const userService = new UserService();
            const mp_token = await userService.encodeMPAccessToken(req.token);
            const user = await userService.setMPAccessToken(req.email, mp_token);
    
            return res.status(200).json({
                mp_token,
                user
            });
    
        }catch(error){

            return res.status(500).json({
                message: 'internal server error',
                error
            });
        }
    
    }

    
}
