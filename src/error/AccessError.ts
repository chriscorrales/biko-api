import DomainError from './domainError';

export default class AccessError extends DomainError {
  constructor(message: string, code = 403) {
    super(code, message);
  }
}
