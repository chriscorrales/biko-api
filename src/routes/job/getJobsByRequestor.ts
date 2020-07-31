import { NextFunction, Request, Response } from 'express';
import { jobsByRequestor } from '../../repository/jobRepository';

export async function getJobsByRequestor(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const data = await jobsByRequestor('8921896a-0436-4de0-bbf9-75ace1b2476b');
    console.log(data);
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
}
