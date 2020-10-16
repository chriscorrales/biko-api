import Joi from '@hapi/joi';
import { Router } from 'express';
import { passwordValidator } from '../helpers/passwordValidations';
import {
  createUser,
  findUserByEmail,
  saveUser,
} from '../repository/userRepository';
import { error } from 'winston';

const router = Router();

router.options('/create');
router.post('/create', async (req, res, next) => {
  try {
    const schema = Joi.object().keys({
      terms: Joi.boolean().optional(),
      email: Joi.string().lowercase().trim().email().required(),
      password: Joi.string().custom(passwordValidator).required(),
      password2: Joi.string()
        .valid(Joi.ref('password'))
        .custom(passwordValidator)
        .required()
        .strict(),
    });

    const data = await schema.validateAsync(req.body);

    const userExist = await findUserByEmail(data.email);

    if (userExist) {
      error('Usuário já existe');
      throw new Error('Usuário já existe');
    }

    const userEntity = createUser(data);

    const user = await saveUser(userEntity);

    res.status(200).json(user);
  } catch (err) {
    next(err);
    res.status(409);
  }
});

export default router;
