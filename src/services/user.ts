import { User } from '../entity/User';
import IUserToken from '../interfaces/user';

class UserService {
  public userToLogin(user: User): IUserToken {
    const { fullName, personType, image, phone, requestor, freelancer } = user.people;
    const { email, id } = user;

    return { id, email, fullName, personType, image, phone, requestor, freelancer };
  }
}

export const userService = new UserService();
