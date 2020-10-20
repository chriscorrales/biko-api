import jobRouter from './job';
import userRouter from './user';
import authRouter from './auth';
import { Router } from 'express';

const router = Router();

router.use('/auth', authRouter);

router.use('/user', userRouter);

router.use('/job', jobRouter);

export default router;
