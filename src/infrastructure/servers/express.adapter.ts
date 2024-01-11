// ExpressServer.ts
import express, {  RequestHandler, Express } from 'express';
import { ServerInterface } from './../../interfaces/server.interface';
import path from 'path';

export class ExpressServer implements ServerInterface {
    private app: Express;

    constructor() {
        this.app = express();
        this.app.set('view engine', 'ejs');
        this.app.set('views', './src/views');
        this.app.use(express.static(path.join(__dirname, '../../../frontend/dist')));
    }

    listen(port: number | string): void {

        this.app.listen(port, () => {
            console.log(`Express server listening on port ${port}`);
        });
    }

    useRoute(route: string, router: RequestHandler): void {
        this.app.use(route, router);
    }

    useMiddleware(middleware: RequestHandler): void {
        this.app.use(middleware);
    }

    useCors(cors: RequestHandler): void {
        this.app.use(cors);
    }

    server(): Express {

        return this.app;
    }

    //useRoute swagger
    useRouteSwagger(route: string, swaggerServe:any, swaggerSetup:any): void {
        this.app.use(route, swaggerServe, swaggerSetup);
    }


    // Puedes agregar más métodos según sea necesario
}