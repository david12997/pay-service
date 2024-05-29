import mysql from 'mysql2/promise';
import { user } from './../types/user';



export class UserRepository {

    private connection: mysql.Connection;

    constructor(connection: mysql.Connection) {
        this.connection = connection;
    }

    async create(user:user): Promise<void> {
        console.log(user.phone);
        await this.connection.execute(
            'INSERT INTO usuario (status,owner,name,email,phone,password,nit) VALUES (?,?,?,?,?,?,?)',
            [
                user.status, 
                user.owner,
                user.name,
                user.email,
                user.phone,
                user.password,
                user.nit
               
            ]
        );
    }


    async update(user:user): Promise<void> {
        await this.connection.execute(
            'UPDATE usuario SET status = ?, owner = ?, name = ?, email = ?, phone = ?, password = ?, nit = ? WHERE id = ?',
            [
                user.status, 
                user.owner,
                user.name,
                user.email,
                user.phone,
                user.password,
                user.nit,
               
            ]
        );
    }

    async delete(id: number): Promise<void> {
        await this.connection.execute(
            'DELETE FROM usuario WHERE id = ?',
            [id]
        );
    }

    async findUserByEmail(email: string): Promise<any> {

        const [rows]:any = await this.connection.execute(
            'SELECT * FROM usuario WHERE email = ?',
            [email]
        );
        return rows ;
    }

    async findUserById(id: number): Promise<any> {
        const [rows]:any = await this.connection.execute(
            'SELECT * FROM usuario WHERE id = ?',
            [id]
        );

        return rows ;
    }

    async findUserByNit(nit: string): Promise<any> {
        const [rows]:any = await this.connection.execute(
            'SELECT * FROM usuario WHERE nit = ?',
            [nit]
        );

        return rows ;
    }

    async findUserByPhone(phone: string): Promise<any> {
        const [rows]:any = await this.connection.execute(
            'SELECT * FROM usuario WHERE phone = ?',
            [phone]
        );

        return rows ;
    }

    async findUserByOwner(owner: string): Promise<any> {
        const [rows]:any = await this.connection.execute(
            'SELECT * FROM usuario WHERE owner = ?',
            [owner]
        );

        return rows ;
    }

    async setUserAccessToken(email:string,token:string): Promise<void> {

        await this.connection.execute(
            'UPDATE usuario SET mp_access_token = ? WHERE email = ?',
            [
                token,
                email
            ]
        );
    }



   

}