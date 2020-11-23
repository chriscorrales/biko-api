import { Router } from 'express';
import { NextFunction, Request, Response } from 'express';
import { listVacanciesByFreelancer } from '../services/vacancy';

const router = Router();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await listVacanciesByFreelancer(req.user.freelancer);
    res.status(200).json(data);
  } catch (err) {
    next(err);
    res.status(409);
  }
});

export default router;
