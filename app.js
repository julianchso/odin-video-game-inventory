import express, { urlencoded } from 'express';
import indexRouter from './src/routes/indexRouter.js';
import gamesRouter from './src/routes/gamesRouter.js';
import genreRouter from './src/routes/genreRouter.js';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/src/views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/games', gamesRouter);
app.use('/genre', genreRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`express app listening on port ${PORT}`);
});
