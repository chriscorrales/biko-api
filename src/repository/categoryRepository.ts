import { getRepository } from 'typeorm';
import { Category } from '../entity/Category';

const categoryRepository = getRepository(Category);

const listJobs = async (id: string) =>
  await categoryRepository.findOne({
    where: { id },
    relations: ['vacancies', 'vacancies.job', 'vacancies.selecteds', 'vacancies.freelancers'],
  });

const listCategorys = async () => await categoryRepository.find();

export { listJobs, listCategorys };
