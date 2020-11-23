import { BIKO_SECRET } from '../settings';
import * as jwt from 'jsonwebtoken';
import ServiceError from '../error/ServiceError';

export async function verify<T>(token: string): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    jwt.verify(token, BIKO_SECRET, (err: any, decoded: any) => {
      if (err || !decoded) {
        return reject(resolveVerifyError(err));
      }

      resolve(decoded);
    });
  });
}

function resolveVerifyError(err: Error): Error {
  if (!err) {
    return new ServiceError('token-type-not-match');
  }

  if (err.name === 'TokenExpiredError') {
    return new ServiceError('token-expired');
  }

  return new ServiceError('token-invalid');
}
