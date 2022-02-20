import express from 'express';
import { HomeController } from '../controllers/HomeController';

const homeRouter = express.Router();
homeRouter.get('/', new HomeController().index);
export { homeRouter };
