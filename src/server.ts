import "dotenv/config";
import cors from "cors";
import express from "express";
import { ExpressServer } from "./infrastructure/servers/express.adapter";


const server = new ExpressServer();
const PORT = process.env.PORT || 3002;


server.useCors(cors({
    origin: "*"
}));

server.useMiddleware(express.json());
server.useRoute('/api/v1', require('./routes/index'));

server.listen(PORT);



