import { Router, Request, Response, NextFunction } from 'express';
import { findUserByEmail } from '../repository/userRepository';
import argon2 from 'argon2';
import jwt from 'jsonwebtoken';
import { BIKO_SECRET } from '../settings';
const router = Router();

router.options('/');
router.post('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;
    const userExist = await findUserByEmail(email);

    if (!userExist) {
      return res.status(401);
    }

    const isValidPassword = await argon2.verify(userExist.password, password);

    if (!isValidPassword) {
      return res.status(401);
    }

    const token = jwt.sign({ id: userExist.id }, BIKO_SECRET, {
      expiresIn: '1d',
    });

    delete userExist.password;

    return res
      .json({
        userExist,
        token,
      })
      .status(200);
  } catch (err) {
    console.error(err);
  }
});

export default router;