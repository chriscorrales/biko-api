import { Job } from '../entity/Job';
import { Requestor } from '../entity/Requestor';
import { listJobsByRequestor, saveAddressJob, saveJobByRequestor } from '../repository/jobRepository';
import DomainError from '../error/domainError';
import { saveVacancy } from '../repository/vacancyRepository';

export const listJobsWithFreelancers = async (requestor: Requestor): Promise<Job[]> => {
  if (!requestor) {
    throw new DomainError(400, 'Requestor is null', {}, 'REQ_A');
  }

  const list = await listJobsByRequestor(requestor.id);
  const newList = list.map((job) => {
    const freelancers = job.vacancies
      .map((vacancy) => {
        return vacancy.freelancers.map((freelancer) => ({ ...freelancer }));
      })
      .flat(2)
      .filter((freelancer, pos, self) => self.findIndex((f) => f.id === freelancer.id) === pos);

    return { ...job, freelancers };
  });

  return newList;
};

export const createJobByRequestor = async (body: Job, requestor: Requestor) => {
  let job: Job;

  if (!!body.address) {
    const address = await saveAddressJob({ ...body.address });
    job = await saveJobByRequestor({ ...body, requestor, address });
  } else {
    job = await saveJobByRequestor({ ...body, requestor });
  }

  body.vacancies.forEach(async (vacancy) => {
    await saveVacancy({ ...vacancy, job: job });
  });

  return;
};
