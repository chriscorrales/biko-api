import * as express from 'express';
import jobRouter from './job';
import { Router } from 'express';

const router = Router();

router.use(express.json());

router.use('/job', jobRouter);

export default router;
