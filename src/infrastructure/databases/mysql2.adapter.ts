import mysql from 'mysql2/promise';

export class DatabaseAdapter {
    private connection: mysql.Connection | null = null;

    constructor() {
        
        this.connect();
    }

    private async connect(): Promise<void> {
        this.connection = await mysql.createConnection({
            host: process.env.DATABASE_HOST,
            user: process.env.DATABASE_USER,
            password: process.env.DATABASE_PASSWORD,
            database: process.env.DATABASE_NAME,
            port: Number(process.env.DATABASE_PORT)
        });
    }

    public getConnection(): mysql.Connection {
        if (!this.connection) {
            console.log('Database connection has not been established');
            process.exit(1);
        }
        return this.connection;
    }
}