import { userProducts } from "../types/user.products";
import { UserProductsRepository } from "../repositories/user.products.repository";
import { DatabaseAdapter } from "./../infrastructure/databases/mysql2.adapter";
import { UserRepository } from "./../repositories/users.repository";

export class UserProductsService{

    userProducts: userProducts;
    private database: DatabaseAdapter

    constructor(){
        this.database = new DatabaseAdapter();
        this.userProducts = {
            id: 0,
            status: 'draft',
            owner: 0,
            created_on: null,
            name: '',
            price: '',
            iva: '',
            description: '',
            media: '',
            delivery: '',
            price_delivery: '',
            product_user: 0,
            stock: 0,
            views: 0,
            finished_pays: 0
        }
    }

    get  getUserProducts(): userProducts{
        return this.userProducts;
    }

    set setUserProducts(userProducts: userProducts){
        this.userProducts = userProducts;
    }

    async create(product:userProducts,emailUser:string): Promise<any>{
       
        try{
            await this.database.connect();
            const userProductsRepository = new UserProductsRepository(this.database.getConnection());
            const user = new UserRepository(this.database.getConnection());

            const userId = await user.findUserByEmail(emailUser);

            if(userId.length === 0 || userId === undefined || userId === null){
                return Promise.reject({
                    status: 400,
                    message: 'User not found',
                    executed: 'userProductsService.create()'
                });
            }
            
            product.product_user = userId[0].id;
            const createNewProduct = await userProductsRepository.create(product);
            

            return Promise.resolve({
                status: 200,
                message: 'User product created',
                new_prouct: createNewProduct
            });

        }catch(error){

            return Promise.reject({
                status: 500,
                message: 'Internal server error',
                error,
                executed: 'userProductsService.create()'
            });
        }
    }

}