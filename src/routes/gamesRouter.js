import { Router } from 'express';
import gamesController from '../controller/gamesController.js';

const gamesRouter = Router();

gamesRouter.get('/', gamesController.gamesGet);
gamesRouter.post('/add', gamesController.gamesPost);

export default gamesRouter;
