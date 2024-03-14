import { userService } from "./../types/user.service";
import { UserServiceRepository } from "./../repositories/user.services.repository";
import { DatabaseAdapter } from "./../infrastructure/databases/mysql2.adapter";
import { UserRepository } from "./../repositories/users.repository";

export class UserServices{

    userService: userService;
    private database: DatabaseAdapter

    constructor(){
        this.database = new DatabaseAdapter();
        this.userService = {
            id: 0,
            status: 'draft',
            owner: 0,
            created_on: null,
            name: '',
            price: '',
            iva: '',
            recollector: '',
            media: '',
            services_user: 0,
            views: 0,
            finished_pays: 0
        }
    }

    get  getUserService(): userService{
        return this.userService;
    }

    set setUserService(userService: userService){
        this.userService = userService;
    }

    async create(service:userService,emailUser:string ): Promise<any>{
       
        try{
            await this.database.connect();
            const userServiceRepository = new UserServiceRepository(this.database.getConnection());
            const user = new UserRepository(this.database.getConnection());

            const userId = await user.findUserByEmail(emailUser);

            if(userId.length === 0 || userId === undefined || userId === null){
                return Promise.reject({
                    status: 400,
                    message: 'User not found',
                    executed: 'userServiceService.create()'
                });
            }
            
            service.services_user = userId[0].id;
            const createNewService = await userServiceRepository.create(service);


            return Promise.resolve({
                status: 200,
                message: 'User service created',
                service: createNewService
            });

        }catch(error){

            return Promise.reject({
                status: 500,
                message: 'Internal server error',
                error,
                executed: 'userService.create()'
            });
        }
    }
}