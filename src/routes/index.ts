import * as express from 'express';
import jobRouter from './job';
import userRouter from './user';
import authRouter from './auth';
import { Router } from 'express';
import authentication from '../middlewares/authentication';

const router = Router();

router.use(express.json());

router.use('/job', authentication, jobRouter);

router.use('/user', userRouter);

router.use('/auth', authRouter);

export default router;
