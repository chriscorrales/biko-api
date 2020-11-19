import { getRepository } from 'typeorm';
import { Job } from '../entity/Job';

const jobRepository = getRepository(Job);

const findJobById = async (id: number) => await jobRepository.findOne(id);

const listJobsByRequestor = async (id: string) =>
  await jobRepository.find({
    where: { requestor: id },
    relations: ['vacancies', 'vacancies.category', 'vacancies.freelancers', 'vacancies.freelancers.people'],
  });

const createJobByRequestor = async (data: Job) => {
  data.status = 0;
  await jobRepository.save(data);
};

export { findJobById, listJobsByRequestor, createJobByRequestor };
