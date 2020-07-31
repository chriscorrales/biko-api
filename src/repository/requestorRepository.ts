import { getRepository } from 'typeorm';
import { Requestor } from '../entity/Requestor';

const requestorRepository = getRepository(Requestor);

const findRequestorById = async (id: string) =>
  await requestorRepository.findOne(id);

export { findRequestorById };
