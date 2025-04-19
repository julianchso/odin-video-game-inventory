import { Router } from 'express';
import gamesController from '../controller/gamesController.js';

const gamesRouter = Router();

gamesRouter.get('/', gamesController.gamesGet);
gamesRouter.get('/add', gamesController.gamesAddGet);
gamesRouter.post('/add', gamesController.gamesAddPost);

export default gamesRouter;
