import { Router } from 'express';
import { getJobsByRequestor } from './getJobsByRequestor';

const router = Router();

router.get('/:id', getJobsByRequestor);

export default router;
