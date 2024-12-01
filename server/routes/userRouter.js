import Router from 'express';
import { errorWrapper } from '../helpers/index.js';
import {
  clientsController,
  deleteClientController,
  subscribeController,
} from '../controllers/index.js';
import { isAuth } from '../middlewares/IsAuth.js';

export const userRouter = Router();

userRouter.post('/subscribe', errorWrapper(subscribeController));
userRouter.get(
  '/clients',
  errorWrapper(isAuth),
  errorWrapper(clientsController),
);
userRouter.get('/delete-client/:id', errorWrapper(deleteClientController));
