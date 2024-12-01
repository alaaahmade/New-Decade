import { Router } from 'express';
import { errorWrapper } from '../helpers/errorWrapper.js';
import {
  isAuthenticatedController,
  signInController,
} from '../controllers/index.js';
import { isAuth } from '../middlewares/IsAuth.js';
import {
  EditSecurityController,
  LogOutController,
  confirmController,
} from '../controllers/auth.js';

export const authRouter = Router();

authRouter.post('/sign-in', errorWrapper(signInController));
authRouter.get(
  '/user/me',
  errorWrapper(isAuth),
  errorWrapper(isAuthenticatedController),
);

authRouter.get(
  '/log-out',
  errorWrapper(isAuth),
  errorWrapper(LogOutController),
);

authRouter.post(
  '/confirm',
  errorWrapper(isAuth),
  errorWrapper(confirmController),
);
// router.get('/security', errorWrapper(isAuth), errorWrapper(securityController));
authRouter.put(
  '/security',
  errorWrapper(isAuth),
  errorWrapper(EditSecurityController),
);
