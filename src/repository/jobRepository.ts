import { getRepository } from 'typeorm';
import { Job } from '../entity/Job';

const jobRepository = getRepository(Job);

const findJobById = async (id: number) => await jobRepository.findOne(id);

const jobsByRequestor = async (id: string) =>
  await jobRepository.findOne({
    where: { requestor: id },
    relations: ['freelancers', 'freelancers.people'],
  });

export { findJobById, jobsByRequestor };
