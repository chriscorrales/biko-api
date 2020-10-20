import { Request, Response, NextFunction } from 'express';
import { authService } from '../services/auth';

export default function authRequired() {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const { authorization } = req.headers;

      if (!authorization) {
        return res.sendStatus(401);
      }

      const token = authorization.replace('Bearer', '').trim();

      const { id } = authService.validateToken(token);

      req.userId = id;

      next();
    } catch {
      return res.sendStatus(401).json('Login Required');
    }
  };
}
