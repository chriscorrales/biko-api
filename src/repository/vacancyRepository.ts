import { getRepository } from 'typeorm';
import { In } from 'typeorm';

import { Vacancy } from '../entity/Vacancy';

const vacancyRepository = getRepository(Vacancy);

const listJobsByCategory = async (categories: string[]) => {
  return await vacancyRepository.find({
    relations: ['job', 'job.address', 'category', 'job.requestor', 'job.requestor.people', 'freelancers', 'selecteds'],
    where: [{ category: { id: In(categories) } }],
  });
};

const saveVacancy = async (vacancy: Partial<Vacancy>) => await vacancyRepository.save(vacancy);

export { listJobsByCategory, saveVacancy };
