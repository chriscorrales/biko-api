import { getRepository } from 'typeorm';
import { Category } from '../entity/Category';

const categoryRepository = getRepository(Category);

const listJobs = async (id: string) =>
  await categoryRepository.find({
    where: { id },
    relations: ['jobs', 'jobs.requestor', 'jobs.address'],
  });

export { listJobs };
