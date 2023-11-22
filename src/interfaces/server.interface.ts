
export interface ServerInterface {

    listen(port: number | string): void;
    useRoute(route: string, router: any): void;
    useMiddleware(middleware: any): void;
    useCors(cors: any): void;

}