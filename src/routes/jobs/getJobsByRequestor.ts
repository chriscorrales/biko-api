import { NextFunction, Request, Response } from 'express';

export async function getJobsByRequestor(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const products = await
            res.status(200).json(data);
    } catch (err) {
        next(err);
    }
}
