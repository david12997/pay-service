import { NextFunction, Request, Response, Router } from "express";
import { authenticateToken } from "./../middlewares/auth.middleware";
import MulterAdapter from "./../infrastructure/upload/multer.adapter";
import multer from 'multer';
import { inventoryController } from "./../controllers/inventory.controller";


const multerAdapter = new MulterAdapter();
const InventoryRoutes = Router();

/**
 * @route POST api/v1/inventory/product/
 * @desc create a product.
 * @access Private
 * 
 */

InventoryRoutes.post("/product/",authenticateToken,multerAdapter.single('file'), (req: Request, res: Response) => {

    console.log(req.file, 'file');
    console.log(req.body, 'body');

    try{
       
        const controllerInventory = new inventoryController();
        return controllerInventory.createProduct(req, res);

    }catch(error){

        return res.status(500).json({
            message: 'inventory.routes internal server error while creating product',
            error
        });
    }
    }, (error: any, req: Request, res: Response, next: NextFunction) => {

        // Handle Multer errors here
        if (error instanceof multer.MulterError) {
            // Handle specific Multer errors (e.g., file size limit)
            if (error.code === 'LIMIT_FILE_SIZE') {
                return res.status(400).json({ message: 'File size limit exceeded.' });
            }
            // Handle other Multer errors
            return res.status(400).json({ message: `Multer error: ${error.message}` });
        
        } else {

            next(error); // Forward other types of errors

        }

    }
);


/**
 * @route POST api/v1/inventory/services/
 * @desc create a service.
 * @access Private
 * 
 */

InventoryRoutes.post("/service/", authenticateToken,multerAdapter.single('file'),  (req: Request, res: Response) => {
    
    try{
       
        const controllerInventory = new inventoryController();
        return controllerInventory.createService(req, res);

    }catch(error){

        return res.status(500).json({
            message: 'inventory.routes internal server error while creating service',
            error
        });
    }
    }, (error: any, req: Request, res: Response, next: NextFunction) => {

        // Handle Multer errors here
        if (error instanceof multer.MulterError) {
            // Handle specific Multer errors (e.g., file size limit)
            if (error.code === 'LIMIT_FILE_SIZE') {
                return res.status(400).json({ message: 'File size limit exceeded.' });
            }
            // Handle other Multer errors
            return res.status(400).json({ message: `Multer error: ${error.message}` });
        
        } else {

            next(error); // Forward other types of errors

        }

    }
);



module.exports = InventoryRoutes;