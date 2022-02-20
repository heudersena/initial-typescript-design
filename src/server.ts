import 'dotenv/config';
import express, { Request, Response } from 'express';
const app = express();

app.get('/', (request: Request, response: Response) => {
  response.json({});
});

app.listen(process.env.PORT, () => {
  console.log(`server on port 3000`);
});
