import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { BIKO_SECRET } from '../settings';

interface TokenPaylod {
  id: string;
  iat: number;
  exp: number;
}

export default function authentication(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.sendStatus(401);
    }

    const token = authorization.replace('Bearer', '').trim();

    const data = jwt.verify(token, BIKO_SECRET);

    const { id } = data as TokenPaylod;

    req.userId = id;

    next();
  } catch {
    return res.sendStatus(401).json('Login Required');
  }
}
