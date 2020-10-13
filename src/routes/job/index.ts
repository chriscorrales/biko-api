import { Router } from 'express';
import { postJobByRequestor } from './postJobByRequestor';
import { getJobsByRequestor } from './getJobsByRequestor';

const router = Router();

router.get('/:id', getJobsByRequestor);

router.post('/', postJobByRequestor);

export default router;
