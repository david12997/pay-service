import { transaccion } from "./../types/transaccion";
import { TransactionRepository } from "./../repositories/transaction.repository";
import { DatabaseAdapter } from "./../infrastructure/databases/mysql2.adapter";

export class TransactionServices{

    transaccion:transaccion;
    private database: DatabaseAdapter;

    constructor() {
        this.database = new DatabaseAdapter();
 
        this.transaccion = {
            owner:1,
            status:'draft',
            id_provider:0,
            transaccion_usuario:0,
            data_remitente:"",
            data_destinatario:"",
            data_transaccion:"",
            mp_preference_id:""
        }
    }

    get getTransaccion():transaccion{
        return this.transaccion
    }

    set setTransaccion(transaccion:transaccion){
        this.transaccion=transaccion
    }

    async create(transaccion:transaccion): Promise<any> {
            
            try{
                
                this.setTransaccion=transaccion;
                await this.database.connect();
                const transactionRepository = new TransactionRepository(this.database.getConnection());
            
                const newTransaction = await transactionRepository.create(this.getTransaccion);
                return Promise.resolve({
                    transaction:newTransaction,
                    status:"success create transaction",
                    operation:"transaction.service create"
                });
                
            }catch(error:any){
                return Promise.reject({
                    error:error,
                    code:500,
                    operation:"transaction.service create"
                });
            }
    }

    async update(transaccion:transaccion): Promise<any> {
            
            try{
                
                this.setTransaccion=transaccion;
                await this.database.connect();
                const transactionRepository = new TransactionRepository(this.database.getConnection());
            
                const newTransaction = await transactionRepository.update(this.getTransaccion);
                return Promise.resolve({
                    transaction:newTransaction,
                    status:"success update transaction",
                    operation:"transaction.service update"
                });
                
            }catch(error:any){
                return Promise.reject({
                    error:error,
                    code:500,
                    operation:"transaction.service update"
                });
            }
    }

    async delete(id:number): Promise<any> {
            
            try{
                
                await this.database.connect();
                const transactionRepository = new TransactionRepository(this.database.getConnection());
            
                const newTransaction = await transactionRepository.delete(id);
                return Promise.resolve({
                    transaction:newTransaction,
                    status:"success delete transaction",
                    operation:"transaction.service delete"
                });
                
            }catch(error:any){
                return Promise.reject({
                    error:error,
                    code:500,
                    operation:"transaction.service delete"
                });
            }
    }

    async findTransactionById(id:number): Promise<any> {
            
            try{
                
                await this.database.connect();
                const transactionRepository = new TransactionRepository(this.database.getConnection());
            
                const newTransaction = await transactionRepository.findTransactionById(id);
                return Promise.resolve({
                    transaction:newTransaction,
                    status:"success find transaction",
                    operation:"transaction.service find"
                });
                
            }catch(error:any){
                return Promise.reject({
                    error:error,
                    code:500,
                    operation:"transaction.service find"
                });
            }
    }

    async findTransactionByIdProvider(id_provider:number): Promise<any> {
            
            try{
                
                await this.database.connect();
                const transactionRepository = new TransactionRepository(this.database.getConnection());
            
                const newTransaction = await transactionRepository.findTransactionByIdProvider(id_provider);
                return Promise.resolve({
                    transaction:newTransaction,
                    status:"success find transaction",
                    operation:"transaction.service find"
                });
                
            }catch(error:any){
                return Promise.reject({
                    error:error,
                    code:500,
                    operation:"transaction.service find"
                });
            }
    }

    async findTransactionByIdUser(id_user:number): Promise<any> {
            
            try{
                
                await this.database.connect();
                const transactionRepository = new TransactionRepository(this.database.getConnection());
            
                const newTransaction = await transactionRepository.findTransactionByIdUser(id_user);
                return Promise.resolve({
                    transaction:newTransaction,
                    status:"success find transaction",
                    operation:"transaction.service find"
                });
                
            }catch(error:any){
                return Promise.reject({
                    error:error,
                    code:500,
                    operation:"transaction.service find"
                });
            }
    }

    async addMercadopagoId(id_transaction:number,mercadopago_id:string,merchant_id:number): Promise<any> {
            
            try{
                
                await this.database.connect();
                const transactionRepository = new TransactionRepository(this.database.getConnection());
                const newTransaction = await transactionRepository.addMercadopagoId(id_transaction,mercadopago_id)
                const newTransaction2 = await transactionRepository.addMerchantOrderId(id_transaction,merchant_id)
                return Promise.resolve({
                    transaction:[newTransaction,newTransaction2],
                    status:"success add mercadopago_id",
                    operation:"transaction.service add"
                });
                
            }catch(error:any){
                return Promise.reject({
                    error:error,
                    code:500,
                    operation:"transaction.service add"
                });
            }
    }

    async findTransactionByPreferenceId(preference_id:string): Promise<any> {
                
                try{
                    
                    await this.database.connect();
                    const transactionRepository = new TransactionRepository(this.database.getConnection());
                
                    const newTransaction = await transactionRepository.findTransactionByPreferenceId(preference_id);
                    return Promise.resolve({
                        transaction:newTransaction,
                        status:"success find transaction",
                        operation:"transaction.service find"
                    });
                    
                }catch(error:any){
                    return Promise.reject({
                        error:error,
                        code:500,
                        operation:"transaction.service find"
                    });
                }
    }

}