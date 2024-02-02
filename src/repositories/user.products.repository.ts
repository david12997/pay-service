import mysql2 from 'mysql2/promise';
import { userProducts } from './../types/user.products';

export class UserProductsRepository {
    
    private connection: mysql2.Connection;

    constructor(connection: mysql2.Connection) {
        this.connection = connection;
    }

    async create(userProducts:userProducts): Promise<void> {
        console.log(userProducts.name);
        await this.connection.execute(
            'INSERT INTO user_products (status,owner,name,price,iva,description,media,delivery,price_delivery,product_user,stock,views,finished_pays) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)',
            [
                userProducts.status, 
                userProducts.owner,
                userProducts.name,
                userProducts.price,
                userProducts.iva,
                userProducts.description,
                userProducts.media,
                userProducts.delivery,
                userProducts.price_delivery,
                userProducts.product_user,
                userProducts.stock,
                userProducts.views,
                userProducts.finished_pays
              
            
            ]
        );
    }

    async update(userProducts:userProducts): Promise<void> {
        await this.connection.execute(
            'UPDATE products SET status = ?, owner = ?, name = ?, price = ?, iva = ?, description = ?, media = ?, delivery = ?, price_delivery = ?, product_user = ?, stock = ?, views = ?, finished_pays = ? WHERE id = ?',
            [
                userProducts.status, 
                userProducts.owner,
                userProducts.name,
                userProducts.price,
                userProducts.iva,
                userProducts.description,
                userProducts.media,
                userProducts.delivery,
                userProducts.price_delivery,
                userProducts.product_user,
                userProducts.stock,
                userProducts.views,
                userProducts.finished_pays
            ]
        );
    }

    async delete(id: number): Promise<void> {
        await this.connection.execute(
            'DELETE FROM products WHERE id = ?',
            [id]
        );
    }

    async findUserProductsByName(name: string): Promise<any> {
        const [rows]:any = await this.connection.execute(
            'SELECT * FROM products WHERE name = ?',
            [name]
        );
        return rows ;
    }

    async findUserProductsById(id: number): Promise<any> {
        const [rows]:any = await this.connection.execute(
            'SELECT * FROM products WHERE id = ?',
            [id]
        );

        return rows ;
    }

    async findUserProductsByOwner(owner: number): Promise<any> {
        const [rows]:any = await this.connection.execute(
            'SELECT * FROM products WHERE owner = ?',
            [owner]
        );

        return rows ;
    }

    async findUserProductsByProductUser(product_user: number): Promise<any> {
        const [rows]:any = await this.connection.execute(
            'SELECT * FROM products WHERE product_user = ?',
            [product_user]
        );

        return rows ;
    }

    async findUserProductsByStatus(status: string): Promise<any> {
        const [rows]:any = await this.connection.execute(
            'SELECT * FROM products WHERE status = ?',
            [status]
        );

        return rows ;
    }


}