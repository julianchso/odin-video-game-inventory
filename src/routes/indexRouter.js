import { Router } from 'express';
import indexController from '../controller/indexController';

const indexRouter = Router();

// Home
indexRouter.get('/', indexController.indexGet);
