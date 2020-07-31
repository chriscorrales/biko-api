import { Router } from 'express';
import { getJobsByRequestor } from './getJobsByRequestor';

const router = Router();

router.get('/', getJobsByRequestor);

export default router;
