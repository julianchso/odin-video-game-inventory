import { Router } from 'express';
import gamesController from '../controller/gamesController.js';

const gamesRouter = Router();

// Home
gamesRouter.get('/', gamesController.homepageGet);

// Items
gamesRouter.get('/addItem', gamesController.addItemGet);
gamesRouter.post('/addItem', gamesController.addItemPost);

// Genre
gamesRouter.get('/genre', gamesController.addGenreGet);
gamesRouter.get('/genre', gamesController.addGenrePost);

export default gamesRouter;
