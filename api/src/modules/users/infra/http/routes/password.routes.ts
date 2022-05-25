import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';

import PasswordController from '../controllers/PasswordController';

const passwordRouter = Router();
const passwordController = new PasswordController();

passwordRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
    },
  }),
  passwordController.create,
);
passwordRouter.post(
  '/reset',
  celebrate({
    [Segments.BODY]: {
      token: Joi.string().uuid().required(),
      password: Joi.string().required(),
      password_confirmation: Joi.string().required().valid(Joi.ref('password')),
    },
  }),
  passwordController.update,
);

export default passwordRouter;
