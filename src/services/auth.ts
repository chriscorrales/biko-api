import { BIKO_SECRET } from '../settings';
import jwt from 'jsonwebtoken';

class AuthService {
  public validateToken(token: string) {
    const valid: any = jwt.verify(token, BIKO_SECRET);

    return {
      id: valid.id,
    };
  }
}

export const authService = new AuthService();
