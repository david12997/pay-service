import "dotenv/config";
import cors from "cors";
import express from "express";
import swaggerUi from 'swagger-ui-express';
import specs from './api.docs.json';
import { ExpressServer } from "./infrastructure/servers/express.adapter";
import { ApiV1, Templates, ReactApp } from "./routes/index";

const server = new ExpressServer();
const PORT = process.env.PORT || 3002;


server.useCors(cors({
    origin: "*"
}));


// middlewares
server.useMiddleware(express.json());

//api routes
server.useRoute('/api/v1', ApiV1);

//templates routes
server.useRoute('/', Templates);

// react app routes
server.useRoute('/', ReactApp);

server.listen(PORT);

//swagger
server.useRouteSwagger('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));


