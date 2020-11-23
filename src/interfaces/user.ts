import { Freelancer } from '../entity/Freelancer';
import { Requestor } from '../entity/Requestor';

export default interface IUserToken {
  id: string;
  email: string;
  fullName: string;
  personType: string;
  image: string;
  phone: string;
  requestor?: Requestor;
  freelancer?: Freelancer;
}
