import DomainError from '../error/domainError';
import { Freelancer } from '../entity/Freelancer';
import { listJobsByCategory } from '../repository/vacancyRepository';
import { Vacancy } from '../entity/Vacancy';

export const listVacanciesByFreelancer = async (freelancer: Freelancer): Promise<Vacancy[]> => {
  if (!freelancer) {
    throw new DomainError(400, 'Freelancer is null', {}, 'FLC_A');
  }

  const categories = freelancer.categorys.map((category) => category.id);

  const data = await listJobsByCategory(categories);

  const listVacancy = data.map((vacancy) => {
    const hasCandidate = !!vacancy.freelancers.find((freelancerLoop) => freelancerLoop.id === freelancer.id);
    const wasSelected = !!vacancy.selecteds.find((freelancerLoop) => freelancerLoop.id === freelancer.id);

    delete vacancy.freelancers;
    delete vacancy.selecteds;

    return { ...vacancy, hasCandidate, wasSelected };
  });

  return listVacancy;
};
