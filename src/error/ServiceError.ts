import DomainError from './domainError';

export default class ServiceError extends DomainError {
  constructor(save: string, data: any = {}, code = 400) {
    super(code, save, data);
  }
}
