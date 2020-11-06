import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import 'express-async-errors';
import { logger } from './shared/logger';
import router from './routes';
import { allowCors } from './middlewares/allowCors';

export const app = express();

app.disable('etag');

app.options('*', cors());
app.use(allowCors);

app.use(express.json());

app.use(router);

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  logger.error('error', {
    error,
    url: req.url,
  });

  if (error.toJSON) {
    return res.status(error.statusCode || 500).json(error.toJSON());
  }

  return res.status(error.statusCode || 500).json(error);
});

app.listen(3000, () => {
  logger.info(`app started on port ${4000} 🚀`);
});
