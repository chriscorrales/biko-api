import { NextFunction, Request, Response } from 'express';
import { listJobsWithFreelancers } from '../../services/job';

export async function getJobsByRequestor(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const data = await listJobsWithFreelancers(req.params.id);
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
}
