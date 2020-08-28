import { Router } from 'express';

import PasswordController from '../controllers/PasswordController';

const passwordRouter = Router();
const passwordController = new PasswordController();

passwordRouter.post('/', passwordController.create);
passwordRouter.post('/reset', passwordController.update);

export default passwordRouter;
