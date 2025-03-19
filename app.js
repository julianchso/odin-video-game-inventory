import express, { urlencoded } from 'express';
import gamesRouter from './src/routes/gamesRouter.js';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/src/view'));
app.use(urlencoded({ extended: true }));
app.use('/', gamesRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`express app listening on port ${PORT}`);
});
