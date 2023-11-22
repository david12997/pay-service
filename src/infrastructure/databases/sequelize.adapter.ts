
import { Sequelize } from 'sequelize';

export class DatabaseAdapter {
    private sequelize: Sequelize;

    constructor() {
        this.sequelize = new Sequelize(process.env.DATABASE_NAME as string, process.env.DATABASE_USER as string, process.env.DATABASE_PASSWORD as string, {
            host: process.env.DATABASE_HOST,
            dialect: 'mysql',
            logging: false,
            port: Number(process.env.DATABASE_PORT)
        });
    }

    public getSequelize(): Sequelize {
        return this.sequelize;
    }

    public async connect(): Promise<void> {
        try {
            await this.sequelize.authenticate();
            console.log('Connection to MySQL has been established successfully.');

        } catch (error) {
            console.error('Unable to connect to the MySQL database:', error);
        }
    }
}
