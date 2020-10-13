import Joi from '@hapi/joi';
import { NextFunction, Request, Response } from 'express';
import { Router } from 'express';
import * as jwt from 'jsonwebtoken';
import { VerifyErrors } from 'jsonwebtoken';
import { passwordValidator } from '../helpers/passwordValidations';
import { createUser, findUserByEmail } from '../repository/userRepository';
import { BIKO_RENEW, BIKO_SECRET } from '../settings';

const router = Router();

let refreshTokens: any = [];

router.post(
  '/token',
  async (req: Request, res: Response, next: NextFunction) => {
    const refreshToken = req.body.token;

    if (refreshToken == null) return res.sendStatus(401);

    if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403);
    jwt.verify(
      refreshToken,
      BIKO_RENEW,
      (err: VerifyErrors | null, user: any) => {
        if (err) return res.sendStatus(403);
        const accessToken = generateAccessToken({ name: user.name });
        res.json({ accessToken: accessToken });
      }
    );
  }
);

router.options('/create');
router.post('/create', async (req, res, next) => {
  try {
    const schema = Joi.object().keys({
      terms: Joi.boolean().optional(),
      email: Joi.string().lowercase().trim().email().required(),
      name: Joi.string().required(),
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
      res.status(409);
    }
    await createUser(data);

    res.status(200);
  } catch (err) {
    next(err);
  }
});

router.options('/authenticate');
router.post(
  '/authenticate',
  async (req: Request, res: Response, next: NextFunction) => {}
);

router.options('/logout');
router.get(
  '/logout',
  async (req: Request, res: Response, next: NextFunction) => {}
);

function generateAccessToken(user) {
  return jwt.sign(user, BIKO_SECRET, { expiresIn: '15s' });
}
