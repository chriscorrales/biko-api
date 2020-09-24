import { NextFunction, Request, Response } from 'express';
import { jobsByRequestor } from '../../repository/jobRepository';

export async function getJobsByRequestor(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const data = await jobsByRequestor(req.params.id);
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
}
