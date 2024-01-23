import { user } from "./../types/user";
import { UserRepository } from "./../repositories/users.repository";
import { DatabaseAdapter } from "./../infrastructure/databases/mysql2.adapter";
import bycript from "bcrypt";
import jwt from "jsonwebtoken";


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
                message:"user.service.ts error in class user"
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
                message:"user.service.ts error in class user"
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
                message:"user.service.ts error in class user"
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
                message:"user.service.ts error in class user"
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
                message:"user.service.ts error in class user"
            });
        }
    }

    //generateToken
    async generateToken(user:user): Promise<string> {
        try{

            const accessToken = jwt.sign({ user: user.name }, process.env.ACCESS_TOKEN_SECRET!);
            return Promise.resolve(accessToken);
            
        }catch(error){
            return Promise.reject({
                error,
                code:500,
                message:"user.service.ts error in class user"
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
                message:"user.service.ts error in class user"
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
                message:"user.service.ts error in class user"
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
                message:"user.service.ts error in class user"
            });
        }
    }

}