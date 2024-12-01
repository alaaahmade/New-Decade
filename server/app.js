import express from 'express';
import path from 'path';
import cors from 'cors';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import { pathToFileURL } from 'url';
import { PORT } from './config/index.js';
import { router } from './routes/router.js';
import { serverError } from './middlewares/index.js';

export const app = express();
const dirname = pathToFileURL('').pathname;

app.set('port', PORT || 8080);

app.use([
  express.json(),
  express.urlencoded({ extended: true }),
  compression(),
  cors(),
  cookieParser(),
  morgan('dev'),
  bodyParser.json(),
]);
app.use('/uploads', express.static(path.join(dirname, 'uploads')));
app.use('/api/v1', router);

app.use(serverError);
