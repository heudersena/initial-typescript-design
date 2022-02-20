import express from 'express';
import { HomeController } from 'src/controllers/HomeController';

const homeRouter = express.Router();
homeRouter.get('/', new HomeController().index);
export { homeRouter };
