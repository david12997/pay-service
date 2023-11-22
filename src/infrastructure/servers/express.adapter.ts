// ExpressServer.ts
import express, {  RequestHandler, Express } from 'express';
import { ServerInterface } from './../../interfaces/server.interface';

export class ExpressServer implements ServerInterface {
    private app: Express;

    constructor() {
        this.app = express();
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

    // Puedes agregar más métodos según sea necesario
}