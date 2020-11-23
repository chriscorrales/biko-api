import { NextFunction, Request, Response } from 'express';
import AccessError from '../error/AccessError';

export function authRequired(): any {
  return (req: Request, res: Response, next: NextFunction): any => {
    if (req.method === 'OPTIONS') {
      return next();
    }

    if (!req.user) {
      throw new AccessError('Login Required', 401);
    }

    next();
  };
}
