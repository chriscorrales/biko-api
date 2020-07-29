import { getRepository } from 'typeorm';
import { Requestor } from '../entity/Requestor';

const requestorRepository = getRepository(Requestor);

const findRequestorById = async (id: number) =>
  await requestorRepository.findOne(id);

const jobsByRequestor = async (id: number) =>
  await requestorRepository.findOne({ where: { id }, relations: ['job'] });

export { findRequestorById, jobsByRequestor };
