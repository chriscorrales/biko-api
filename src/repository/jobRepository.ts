import { getRepository } from 'typeorm';
import { Job } from '../entity/Job';

const jobRepository = getRepository(Job);

const findJobById = async (id: number) => await jobRepository.findOne(id);

export { findJobById };
