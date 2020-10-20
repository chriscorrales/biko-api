import { User } from '../entity/User';

class UserService {
  public userToLogin(user: User) {
    const { fullName, personType, image, phone, requestor, freelancer } = user.people;
    const { email } = user;

    return { email, fullName, personType, image, phone, requestorId: requestor?.id, freelancerId: freelancer?.id };
  }
}

export const userService = new UserService();
