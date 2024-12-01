import Router from 'express';
import { getLayoutData } from '../controllers/index.js';
import { authRouter } from './auth.js';
import { editRouter } from './editRouter.js';
import { multerRouter } from '../services/uploads.js';
import { errorWrapper } from '../helpers/errorWrapper.js';
import { userRouter } from './userRouter.js';
import { dataRouter } from './dataRouter.js';

export const router = Router();
router.use(multerRouter);
router.use('/auth', authRouter);
router.use('/edit', editRouter);
router.use('/user', userRouter);
router.use('/data', dataRouter);
router.get('/layout', errorWrapper(getLayoutData));
