import mysql from 'mysql2/promise';
import { transaccion } from './../types/transaccion';



export class TransactionRepository {

    private connection: mysql.Connection;

    constructor(connection: mysql.Connection) {
        this.connection = connection;
    }

    async create(transaccion:transaccion): Promise<void> {
        await this.connection.execute(
            'INSERT INTO transaccion (status,owner,id_provaider,transaccion_usuario,data_remitente,data_destinatario,data_transaccion) VALUES (?, ?,?,?,?,?,?)',
            [
                transaccion.status, 
                transaccion.owner,
                transaccion.id_provider,
                transaccion.transaccion_usuario,
                transaccion.data_remitente,
                transaccion.data_destinatario,
                transaccion.data_transaccion
            ]
        );
    }

    /*
    async findById(id: number): Promise<any> {
        const [rows]:any = await this.connection.execute(
            'SELECT * FROM transaccion WHERE id = ?',
            [id]
        );

        return rows[0] ;
    }

    async update(id: number, transaccion: { name: string, email: string }): Promise<void> {
        await this.connection.execute(
            'UPDATE transaccion SET name = ?, email = ? WHERE id = ?',
            [transaccion.name, transaccion.email, id]
        );
    }

    async delete(id: number): Promise<void> {
        await this.connection.execute(
            'DELETE FROM transaccion WHERE id = ?',
            [id]
        );
    }
    */

}