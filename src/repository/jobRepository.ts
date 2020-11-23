import { getRepository } from 'typeorm';
import { Job } from '../entity/Job';
import { AddressJob } from '../entity/AddressJob';

const jobRepository = getRepository(Job);
const addressJobRepository = getRepository(AddressJob);

const findJobById = async (id: number) => await jobRepository.findOne(id);

const listJobsByRequestor = async (id: string) =>
  await jobRepository.find({
    where: { requestor: id },
    relations: ['address', 'vacancies', 'vacancies.category', 'vacancies.freelancers', 'vacancies.freelancers.people'],
  });

const saveJobByRequestor = async (data: Job) => {
  data.status = 0;
  return await jobRepository.save(data);
};

const saveAddressJob = async (addressJob: AddressJob) => {
  return await addressJobRepository.save(addressJob);
};

export { findJobById, listJobsByRequestor, saveJobByRequestor, saveAddressJob };
