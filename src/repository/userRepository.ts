import { getRepository } from 'typeorm';
import { User } from '../entity/User';

const userRepository = getRepository(User);

const findUserByEmail = async (email: number) =>
  await userRepository.findOne({ where: { email }, relations: ['people', 'people.freelancer', 'people.freelancer.categorys', 'people.requestor'] });

const createUser = (user: User) => userRepository.create(user);

const saveUser = async (user: User) => await userRepository.save(user);

export { findUserByEmail, createUser, saveUser };
