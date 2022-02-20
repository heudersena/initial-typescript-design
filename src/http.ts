import http from 'http';
import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { Server } from 'socket.io';
import { routes } from './routes';

dotenv.config();
const app = express();
const serverHttp = http.createServer(app);
const io = new Server(serverHttp, { cors: { origin: '*' } });
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(routes);

export { serverHttp, io };
