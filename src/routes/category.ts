import { Router } from 'express';
import { listJobs } from '../repository/categoryRepository';

const router = Router();

router.get('/jobs', async (req, res, next) => {
  try {
    const data = await listJobs(req.body.id);

    res.status(200).json(data);
  } catch (err) {
    next(err);
    res.status(409);
  }
});

router.post('/');

export default router;
