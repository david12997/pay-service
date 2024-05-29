import { user } from "./../types/user";
import { UserRepository } from "./../repositories/users.repository";
import { DatabaseAdapter } from "./../infrastructure/databases/mysql2.adapter";
import bycript from "bcrypt";
import jwt from "jsonwebtoken";
import CryptoJS from "crypto-js";


export class UserService{

    user:user;
    private database: DatabaseAdapter;


    constructor() {
        this.database = new DatabaseAdapter();
 
        this.user = {
            owner:1,
            status:'draft',
            name:"",
            email:"",
            password:"",
            nit:0,
            phone:0
            
        }
    }

    get getUser():user{
        return this.user
    
    }

    set setUser(user:user){
        this.user=user
    }

    async create(user:user): Promise<any> {

        try{
            
            this.setUser=user;
            console.log(this.database.getConnection());
            await this.database.connect();
            const userRepository = new UserRepository(this.database.getConnection());
           
            const [rows]:any = await userRepository.findUserByEmail(this.getUser.email);
            if(rows !== undefined){
                throw new Error("El usuario ya existe")
            }
            
            const newUser = await userRepository.create(this.getUser);
            return Promise.resolve({
                user:newUser,
                status:"success create user",
                operation:"user.service create"
            });
            
        }catch(error:any){
            return Promise.reject({
                error:error.message,
                code:500,
                message:"user.service.ts error in class user create"
            });
        }
        
    }

    async createWithGoogle(user:user): Promise<any> {
            
        try{
            
            this.setUser=user;
        
            await this.database.connect();
            const userRepository = new UserRepository(this.database.getConnection());

            const [rows]:any = await userRepository.findUserByEmail(this.getUser.email);
            if(rows !== undefined){

                const pass = await this.validatePassword(this.getUser.password, rows.password);

                if(pass){
                    const token = await this.generateToken(rows);
                    return Promise.resolve({
                        user:rows,
                        token,
                        status:"success validate user",
                        operation:"user.service createWithGoogle"
                    });
                }else {
                    throw new Error("invalid password")
                }

            }else{
                const hashedPassword = await this.hashPassword(this.getUser.password);
                this.getUser.password = hashedPassword;
                
                await userRepository.create(this.getUser);
                const token = await this.generateToken(user);
                return Promise.resolve({
                    token,
                    status:"success create user",
                    operation:"user.service createWithGoogle"
                });
            }
            
            
        }catch(error:any){
            return Promise.reject({
                error:error.message,
                code:500,
                message:"user.service.ts error in class user createWithGoogle"
            });
        }
    }

    async update(): Promise<any> {
        try{
            
            await this.database.connect();
            const userRepository = new UserRepository(this.database.getConnection());

            const [rows]:any = await userRepository.findUserById(this.getUser.id as number);
            if(rows.length==0){
                throw new Error("El usuario no existe")
            }

            await userRepository.update(this.getUser);
            return Promise.resolve({
                status:"success update user",
                operation:"user.service update"
            });
            
        }catch(error){
            return Promise.reject({
                error,
                code:500,
                message:"user.service.ts error in class user update"
            });
        }
    }

    async delete(): Promise<void> {
        try{
           
            await this.database.connect();
            const userRepository = new UserRepository(this.database.getConnection());

            const [rows]:any = await userRepository.findUserById(this.getUser.id as number);
            if(rows.length==0){
                throw new Error("El usuario no existe")
            }

            await userRepository.delete(this.getUser.id as number);
            return Promise.resolve();
            
        }catch(error){
            return Promise.reject({
                error,
                code:500,
                message:"user.service.ts error in class user delete"
            });
        }
    }

    //hashPassword
    async hashPassword(password:string): Promise<string> {
        try{

            const hashedPassword = await bycript.hash(password, 10);
            return Promise.resolve(hashedPassword);
            
        }catch(error){
            return Promise.reject({
                error,
                code:500,
                message:"user.service.ts error in class user hashPassword"
            });
        }
    }

    //validatePassword
    async validatePassword(password:string, hashedPassword:string): Promise<boolean> {
        try{

            if(hashedPassword.startsWith("$2y$")){
                hashedPassword = hashedPassword.replace("$2y$", "$2b$");
            }
            const validPassword = await bycript.compare(password, hashedPassword);
            return Promise.resolve(validPassword);
            
        }catch(error){
            return Promise.reject({
                error,
                code:500,
                message:"user.service.ts error in class user validatePassword"
            });
        }
    }

    //generateToken
    async generateToken(user:user): Promise<string> {
        try{

            const accessToken = jwt.sign({ user: user.name }, process.env.ACCESS_TOKEN_SECRET!);
            console.log(accessToken);
            return Promise.resolve(accessToken);
            
        }catch(error){
            return Promise.reject({
                error,
                code:500,
                message:"user.service.ts error in class user generateToken"
            });
        }
    }

    //findUserByEmail
    async findUserByEmail(email:string): Promise<any> {


        try{
           
            await this.database.connect();
            const userRepository = new UserRepository(this.database.getConnection());
          
            const [rows]:any = await userRepository.findUserByEmail(email);
            return Promise.resolve(rows);
            
        }catch(error){
            return Promise.reject({
                error,
                code:500,
                message:"user.service.ts error in class user findUserByEmail"
            });
        }
    }

    //findUserById
    async findUserById(id:number): Promise<any> {
        try{
           
            await this.database.connect();
            const userRepository = new UserRepository(this.database.getConnection());

            const [rows]:any = await userRepository.findUserById(id);
            return Promise.resolve(rows);
            
        }catch(error){
            return Promise.reject({
                error,
                code:500,
                message:"user.service.ts error in class user findUserById"
            });
        }
    }

    //findUserByNit
    async findUserByNit(nit:string): Promise<any> {
        try{
           
            await this.database.connect();
            const userRepository = new UserRepository(this.database.getConnection());

            const [rows]:any = await userRepository.findUserByNit(nit);
            return Promise.resolve(rows);
            
        }catch(error){
            return Promise.reject({
                error,
                code:500,
                message:"user.service.ts error in class user findUserByNit"
            });
        }
    }

    // encodeMPAccessToken 
    async encodeMPAccessToken(mp_access_token:string): Promise<string> {
        try{

            const encodeToken = CryptoJS.AES.encrypt(mp_access_token, process.env.ACCESS_TOKEN_SECRET!).toString();
            return Promise.resolve(encodeToken);
            
        }catch(error){
            return Promise.reject({
                error,
                code:500,
                message:"user.service.ts error in class user encodeMPAccessToken"
            });
        }
    }

    // decodeMPAccessToken
    async decodeMPAccessToken(mp_access_token:string): Promise<string> {
        try{

            const decodeToken = CryptoJS.AES.decrypt(mp_access_token, process.env.ACCESS_TOKEN_SECRET!).toString(CryptoJS.enc.Utf8);
            return Promise.resolve(decodeToken);
            
        }catch(error){
            return Promise.reject({
                error,
                code:500,
                message:"user.service.ts error in class user decodeMPAccessToken"
            });
        }
    }

    //setMPAccessToken
    async setMPAccessToken(email:string,mp_access_token:string): Promise<any> {
        try{

            await this.database.connect();
            const userRepository = new UserRepository(this.database.getConnection());
           // console.log(email);
            //console.log(mp_access_token);
            const [rows]:any = await userRepository.findUserByEmail(email);
            if(rows.length==0){
                throw new Error("El usuario no existe")
            }

            const updateToken = await userRepository.setUserAccessToken(email,mp_access_token);

            return Promise.resolve({
                updateToken,
                status:"success update user",
                operation:"user.service setMPAccessToken"
            
            });

            
        }catch(error){
            return Promise.reject({
                error,
                code:500,
                message:"user.service.ts error in class user setMPAccessToken"
            });
        }
    }


}