import { Router } from 'express';
import authMiddleware from './app/middleware/auth';
import SessionController from './app/controllers/SessionController';
import StudentController from './app/controllers/StudentController';

const routes = new Router();

routes.get('/', (req, res) => res.json({ message: 'Bem vindo ao Gympoint!' }));
routes.post('/session', SessionController.store);
routes.use(authMiddleware);
routes.post('/students', StudentController.store);

export default routes;
