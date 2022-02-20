import { Request, Response } from 'express';
class HomeController {
  index(request: Request, response: Response) {
    response.json({ message: 'Home' });
  }
}

export { HomeController };
