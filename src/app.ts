import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { logger } from './shared/logger';
import router from './routes';

export const app = express();

app.disable('etag');

app.use(
  cors({
    origin: true,
    credentials: true,
    methods: 'GET,POST,PUT,DELETE',
    optionsSuccessStatus: 200,
    allowedHeaders: ['Content-Type'],
  })
);

app.options('*', cors());

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
  logger.info('app started');
});
