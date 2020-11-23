import jobRouter from './job';
import userRouter from './user';
import authRouter from './auth';
import categoryRouter from './category';
import vacancyRouter from './vacancy';
import { Router } from 'express';
import { authRequired } from '../middlewares/authentication';
const router = Router();

router.get('/', (req, res) => {
  res.status(200).json({
    running: true,
  });
});

router.use('/auth', authRouter);

router.use('/user', userRouter);

router.use(authRequired());

router.use('/vacancy', vacancyRouter);

router.use('/job', jobRouter);

router.use('/category', categoryRouter);

export default router;
