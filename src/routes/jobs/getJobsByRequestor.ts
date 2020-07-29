import { NextFunction, Request, Response } from 'express';
import { jobsByRequestor } from '../../repository/requestorRepository';

export async function getJobsByRequestor(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const data = await jobsByRequestor(1);
    console.log(data);
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
}
