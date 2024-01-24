import mysql from 'mysql2/promise';
import { payment } from './../types/payment';

export class PaymentRepository {
    
    private connection: mysql.Connection;

    constructor(connection: mysql.Connection) {
        this.connection = connection;
    }

    async create(payment:payment): Promise<any> {

        try{
            await this.connection.execute(
                'INSERT INTO payment (status,owner,data_paiment,provider,user_provider_id,payment_id) VALUES (?,?,?,?,?,?)',
                [
                    payment.status, 
                    payment.owner,
                    payment.data_paiment,
                    payment.provider,
                    payment.user_provider_id,
                    payment.payment_id
                
                ]
            );

        }catch(error){
            return Promise.reject({
                error:error,
                code:500,
                operation:"payment.repository create"
            });
        }
        
    }

    async update(payment:payment): Promise<any> {

        try{

            await this.connection.execute(
                'UPDATE payment SET status = ? data_paiment = ? provider = ? user_provider_id = ? payment_id = ? owner WHERE id = ?',
                [
                    payment.status, 
                    payment.data_paiment, 
                    payment.provider,
                    payment.user_provider_id,
                    payment.payment_id,
                    payment.id
                ]
            );

        }catch(error){
            return Promise.reject({
                error:error,
                code:500,
                operation:"payment.repository update"
            });
        }
        
    }

    async findById(id:number): Promise<any> {
            
            try{
                const [rows] = await this.connection.execute(
                    'SELECT * FROM payment WHERE id = ?',
                    [id]
                );
    
                return Promise.resolve(rows);
            }catch(error){
                return Promise.reject({
                    error:error,
                    code:500,
                    operation:"payment.repository findById"
                });
            }
            
        }

    async delete(id:number): Promise<any> {
        await this.connection.execute(
            'DELETE FROM payment WHERE id = ?',
            [id]
        );
    }

    async findPaymentByIdUser(id_user: number): Promise<any> {
        const [rows]:any = await this.connection.execute(
            'SELECT * FROM payment WHERE id_user = ?',
            [id_user]
        );
        return rows ;
    }

    async findPaymentByIdProvider(id_provider: number): Promise<any> {
        const [rows]:any = await this.connection.execute(
            'SELECT * FROM payment WHERE id_provider = ?',
            [id_provider]
        );
        return rows ;
    }



    async findPaymentByPaymentId(payment_id: number): Promise<any> {
        const [rows]:any = await this.connection.execute(
            'SELECT * FROM payment WHERE payment_id = ?',
            [payment_id]
        );
        return rows ;
    }
    

}

