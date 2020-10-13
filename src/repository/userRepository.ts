import { getRepository } from 'typeorm';
import { User } from '../entity/User';

const userRepository = getRepository(User);

const findUserByEmail = async (email: number) =>
  await userRepository.findOne({ where: { email } });

const createUser = async (user: User) => await userRepository.save(user);

export { findUserByEmail, createUser };
