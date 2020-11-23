import { NextFunction, Request, Response } from 'express';
import { createJobByRequestor, listJobsWithFreelancers } from '../services/job';

import { Router } from 'express';

const router = Router();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await listJobsWithFreelancers(req.user.requestor);
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    await createJobByRequestor(req.body, req.user.requestor);
    res.status(200);
  } catch (err) {
    next(err);
  }
});

export default router;
