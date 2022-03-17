import { Router } from 'express';
import { HomeController } from '../controllers/HomeController';

const routes = Router();

routes.get('/', new HomeController().index);

export { routes };

