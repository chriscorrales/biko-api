import IUserToken from './interfaces/user';

declare global {
  namespace Express {
    export interface Request {
      user?: IUserToken;
    }
  }
}
