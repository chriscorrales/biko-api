import { getRepository } from 'typeorm';
import { Category } from '../entity/Category';

const categoryRepository = getRepository(Category);

const findCategory = async (id: string) => await categoryRepository.findOne({ where: { id } });

const listCategorys = async () => await categoryRepository.find();

export { listCategorys, findCategory };
