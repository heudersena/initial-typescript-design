import 'express-async-errors';
import http from 'http';
import express, { Request, Response, NextFunction } from 'express';
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

app.get('*', (request: Request, response: Response, next: NextFunction) => {
  throw new Error('NotFound');
});
// throw new Error('O usuário não tem essa permissão de acesso.'); - COMO USAR ESSE ERROR NO PROJETO
app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
      return response.status(400).json({
        error: err.message,
      });
    }

    return response.status(500).json({
      status: 'Error',
      message: 'Internal Server Error',
    });
    next();
  },
);

export { serverHttp, io };
