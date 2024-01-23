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
                    'INSERT INTO payment (status,owner,data_paiment,provider,user_provider_id) VALUES (?,?,?,?,?)',
                    [
                        payment.status, 
                        payment.owner,
                        payment.data_paiment,
                        payment.provider,
                        payment.user_provider_id
                    
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

        async update(payment:payment): Promise<void> {
            await this.connection.execute(
                'UPDATE pago SET status = ?, owner = ?, data_paiment = ?, provider = ?, user_provider_id = ? WHERE id = ?',
                [
                    payment.status, 
                    payment.owner,
                    payment.data_paiment,
                    payment.provider,
                    payment.user_provider_id,
                    payment.id
                ]
            );
        }

        async delete(id: number): Promise<void> {
            await this.connection.execute(
                'DELETE FROM pago WHERE id = ?',
                [id]
            );
        }

        async findPaymentById(id: number): Promise<any> {
            const [rows]:any = await this.connection.execute(
                'SELECT * FROM pago WHERE id = ?',
                [id]
            );
            return rows ;
        }

        async findPaymentByOwner(owner: number): Promise<any> {
            const [rows]:any = await this.connection.execute(
                'SELECT * FROM pago WHERE owner = ?',
                [owner]
            );
            return rows ;
        }

        async findPaymentByProvider(provider: string): Promise<any> {
            const [rows]:any = await this.connection.execute(
                'SELECT * FROM pago WHERE provider = ?',
                [provider]
            );
            return rows ;
        }
}

