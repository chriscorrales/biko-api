import { NextFunction, Request, Response } from 'express';
import { createJobByRequestor } from '../../repository/jobRepository';

export async function postJobByRequestor(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const data = await createJobByRequestor(req.body);
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
}
