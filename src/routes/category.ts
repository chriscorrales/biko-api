import { Router } from 'express';
import { NextFunction, Request, Response } from 'express';
import { listCategorys } from '../repository/categoryRepository';

const router = Router();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await listCategorys();

    res.status(200).json(data);
  } catch (err) {
    next(err);
    res.status(500);
  }
});

export default router;
