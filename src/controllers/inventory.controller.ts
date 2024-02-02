import { userProducts } from "./../types/user.products";
import { UserProductsService } from "./../services/userProducts.services";

export class inventoryController{

    
    //POST /api/v1/inventory/product/
    async createProduct(req: any, res: any) {
        try{
            
            
            const productServices = new UserProductsService();
            const pathImgProduct = req.file.path;
            const fileName = req.file.filename;

            const product:userProducts = {
                status: 'published',
                owner: 0,
                created_on: null,
                name: req.body.name,
                price: req.body.price,
                iva: req.body.iva,
                description: req.body.description,
                media: JSON.stringify({img_product:`uploads/${fileName}`}),
                delivery: req.body.delivery,
                price_delivery: req.body.delivery === 'No' ? null : req.body.price_delivery,
                product_user: 0,
                stock: req.body.stock,
                views: 0,
                finished_pays: 0
            }

            

            if(typeof pathImgProduct !== 'string'){
                return res.status(400).json({
                    message: 'inventory.controller invalid data type',
                    error: 'Invalid data type for product file path',
                   
                });
            }

            const createProduct = await productServices.create(product,req.body.email_user);

            return res.status(200).json({
                message: 'inventory.controller product created',
                createProduct,
                img_product:`uploads/${fileName}`
            });


        }catch(error){
            return res.status(500).json({
                message: 'inventory.controlller internal server error while creating product',
                error
            });
        }
    }
}