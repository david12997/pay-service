import multer, { StorageEngine } from 'multer';
import { RequestHandler } from 'express';
import path from 'path';
import fs from 'fs';

class MulterAdapter {
    private uploader: multer.Multer;

    constructor() {
        // Set up storage
        const storage = multer.diskStorage({
            destination: (req, file, cb) => {
                const dest = path.resolve(__dirname, '../../../frontend/dist/uploads/');
                fs.mkdirSync(dest, { recursive: true }); // Ensure the directory exists
                cb(null, dest);
            },
            filename: (req, file, cb) => {
                cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
            }
        });

        const fileFilter = (req: Express.Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
            // Implement any file type filters here if required
            console.log(file);
            cb(null, true);
        };

        this.uploader = multer({ 
            storage: storage,
            limits: { fileSize: 2 * 1024 * 1024 }, // 2 Megabytes
            fileFilter: fileFilter
        });
    }

    single(fieldName: string): RequestHandler {
        return this.uploader.single(fieldName);
    }

    array(fieldName: string, maxCount: number): RequestHandler {
        return this.uploader.array(fieldName, maxCount);
    }

    // Additional methods for other Multer functionalities can be added here
}

export default MulterAdapter;