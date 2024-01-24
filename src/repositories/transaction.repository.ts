import mysql from 'mysql2/promise';
import { transaccion } from './../types/transaccion';



export class TransactionRepository {

    private connection: mysql.Connection;

    constructor(connection: mysql.Connection) {
        this.connection = connection;
    }

    async create(transaccion:transaccion): Promise<any> {

        try{
            await this.connection.execute(
                'INSERT INTO transaccion (status,owner,id_provaider,transaccion_usuario,data_remitente,data_destinatario,data_transaccion,mp_preference_id) VALUES (?, ?,?,?,?,?,?,?)',
                [
                    transaccion.status, 
                    transaccion.owner,
                    transaccion.id_provider,
                    transaccion.transaccion_usuario,
                    transaccion.data_remitente,
                    transaccion.data_destinatario,
                    transaccion.data_transaccion,
                    transaccion.mp_preference_id
                ]
            );


        }catch(error){
            return Promise.reject({
                error:error,
                code:500,
                operation:"transaction.repository create"
            });
        }
        
    }

    async update(transaccion:transaccion): Promise<any> {

        try{

            await this.connection.execute(
                'UPDATE transaccion SET status = ? data_remitente = ? data_destinatario = ? data_transaccion= = ? owner WHERE id = ?',
                [
                    transaccion.status, 
                    transaccion.data_remitente, 
                    transaccion.data_destinatario,
                    transaccion.data_transaccion ,
                    transaccion.id
                ]
            );

        }catch(error){
            return Promise.reject({
                error:error,
                code:500,
                operation:"transaction.repository update"
            });
        }

    }

    async delete(id: number): Promise<any> {
        await this.connection.execute(
            'DELETE FROM transaccion WHERE id = ?',
            [id]
        );
    }

    async findTransactionById(id: number): Promise<any> {
        const [rows]:any = await this.connection.execute(
            'SELECT * FROM transaccion WHERE id = ?',
            [id]
        );
        return rows ;
    }

    async findTransactionByIdProvider(id_provider: number): Promise<any> {
        const [rows]:any = await this.connection.execute(
            'SELECT * FROM transaccion WHERE id_provider = ?',
            [id_provider]
        );
        return rows ;
    }

    async findTransactionByIdUser(id_user: number): Promise<any> {

        try{
            const [rows]:any = await this.connection.execute(
                'SELECT * FROM transaccion WHERE transaccion_usuario = ?',
                [id_user]
            );

            return rows ;

        }catch(error){
            return Promise.reject({
                error:error,
                code:500,
                operation:"transaction.repository findTransactionByIdUser"
            });
        }
    }

    async addMercadopagoId(id:number,mercadopago_id:string): Promise<any> {

        try{
            await this.connection.execute(
                'UPDATE transaccion SET mercadopago_id = ? WHERE id = ? ',
                [
                    mercadopago_id,
                    id
                ]
            );

            return Promise.resolve({
                status:"success add mercadopago_id",
                operation:"transaction.repository addMercadopagoId"
            });


        }catch(error){
            return Promise.reject({
                error:error,
                code:500,
                operation:"transaction.repository addMercadopagoId"
            });
        }

        
        
    }

    async addMerchantOrderId(id:number,merchant_order_id:number): Promise<any> {
            
        try{
            await this.connection.execute(
                'UPDATE transaccion SET merchant_order_id = ? WHERE id = ? ',
                [
                    merchant_order_id,
                    id
                ]
            );

            return Promise.resolve({
                status:"success add merchant_order_id",
                operation:"transaction.repository addMerchantOrderId"
            });

        }catch(error){
            return Promise.reject({
                error:error,
                code:500,
                operation:"transaction.repository addMerchantOrderId"
            });
        }
    }

    async findByMercadopagoId(mercadopago_id:string): Promise<any> {

        try{
            const [rows]:any = await this.connection.execute(
                'SELECT * FROM transaccion WHERE mercadopago_id = ?',
                [mercadopago_id]
            );
    
            return rows ;

        }catch(error){
            return Promise.reject({
                error:error,
                code:500,
                operation:"transaction.repository update"
            });
        }
       
        
    }

    async findTransactionByPreferenceId(preference_id:string): Promise<any> {

        try{
            const [rows]:any = await this.connection.execute(
                'SELECT * FROM transaccion WHERE mp_preference_id = ?',
                [preference_id]
            );
    
            return rows ;

        }catch(error){
            return Promise.reject({
                error:error,
                code:500,
                operation:"transaction.repository update"
            });
        }
      
        
    }

    

 

}