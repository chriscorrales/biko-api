import { Job } from '../entity/Job';
import { listJobsByRequestor } from '../repository/jobRepository';

export const listJobsWithFreelancers = async (idRequestor: string): Promise<Job[]> => {
  const list = await listJobsByRequestor(idRequestor);
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
