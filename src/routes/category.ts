import { Router } from 'express';
import { listCategorys, listJobs } from '../repository/categoryRepository';

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

router.get('/', async (req, res, next) => {
  try {
    const data = await listCategorys();

    res.status(200).json(data);
  } catch (err) {
    next(err);
    res.status(500);
  }
});

export default router;
