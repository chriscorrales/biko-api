import { NextFunction, Request, Response } from 'express';
import { listJobsByRequestor } from '../../repository/jobRepository';

export async function getJobsByRequestor(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const data = await listJobsByRequestor(req.params.id);
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
}
