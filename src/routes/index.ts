import jobRouter from './job';
import userRouter from './user';
import authRouter from './auth';
import { Router } from 'express';
import authRequired from '../middlewares/authentication';
const router = Router();

router.use('/auth', authRouter);

router.use('/user', userRouter);

router.use(authRequired());

router.use('/job', jobRouter);

export default router;
