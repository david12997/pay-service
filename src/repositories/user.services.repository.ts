import mysql2 from 'mysql2/promise';
import { userService } from 'types/user.service';

export class UserServiceRepository {
        
    private connection: mysql2.Connection;

    constructor(connection: mysql2.Connection) {
        this.connection = connection;
    }

    async create(userService:userService): Promise<void> {
   
        await this.connection.execute(
            'INSERT INTO user_service (status,owner,name,price,iva,recollector,media,services_user,views,finished_pays) VALUES (?,?,?,?,?,?,?,?,?,?)',
            [
                userService.status, 
                userService.owner,
                userService.name,
                userService.price,
                userService.iva,
                userService.recollector,
                userService.media,
                userService.services_user,
                userService.views,
                userService.finished_pays
            
            ]
        );
    }

    async update(userService:userService): Promise<void> {
        await this.connection.execute(
            'UPDATE services SET status = ?, owner = ?, name = ?, price = ?, iva = ?, recollector = ?, media = ?, services_user = ?, views = ?, finished_pays = ? WHERE id = ?',
            [
                userService.status, 
                userService.owner,
                userService.name,
                userService.price,
                userService.iva,
                userService.recollector,
                userService.media,
                userService.services_user,
                userService.views,
                userService.finished_pays
            ]
        );
    }

    async delete(id: number): Promise<void> {
        await this.connection.execute(
            'DELETE FROM services WHERE id = ?',
            [id]
        );
    }

    async getServices(): Promise<any> {
        const [rows] = await this.connection.execute('SELECT * FROM services');
        return rows;
    }

    async findUserServiceByName(name: string): Promise<any> {
        const [rows]:any = await this.connection.execute(
            'SELECT * FROM services WHERE name = ?',
            [name]
        );
        return rows;
    }

    async findUserServiceById(id: number): Promise<any> {
        const [rows]:any = await this.connection.execute(
            'SELECT * FROM services WHERE id = ?',
            [id]
        );
        return rows;
    }

    async findUserServiceByOwner(owner: number): Promise<any> {
        const [rows]:any = await this.connection.execute(
            'SELECT * FROM services WHERE owner = ?',
            [owner]
        );
        return rows;
    }

    async findUserServiceByStatus(status: string): Promise<any> {
        const [rows]:any = await this.connection.execute(
            'SELECT * FROM services WHERE status = ?',
            [status]
        );
        return rows;
    }

    async findUserServiceByServiceUser(services_user: number): Promise<any> {
        const [rows]:any = await this.connection.execute(
            'SELECT * FROM services WHERE services_user = ?',
            [services_user]
        );
        return rows;
    }

    async findUserServiceByRecollector(recollector: string): Promise<any> {
        const [rows]:any = await this.connection.execute(
            'SELECT * FROM services WHERE recollector = ?',
            [recollector]
        );
        return rows;
    }
}