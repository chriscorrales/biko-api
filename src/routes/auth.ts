import { Router, Request, Response, NextFunction } from 'express';
import { findUserByEmail } from '../repository/userRepository';
import argon2 from 'argon2';
import jwt from 'jsonwebtoken';
import { BIKO_SECRET } from '../settings';
import { userService } from '../services/user';
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

    const user = userService.userToLogin(userExist);
    delete userExist.password;
    const token = jwt.sign(user, BIKO_SECRET, {
      expiresIn: '4d',
    });

    return res.json(token).status(200);
  } catch (err) {
    console.error(err);
  }
});

export default router;
