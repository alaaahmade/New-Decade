import Router from 'express';
import { errorWrapper } from '../helpers/index.js';
import {
  getHomeDataController,
  getPlatformDataController,
  getRateListController,
} from '../controllers/index.js';

export const dataRouter = Router();
dataRouter.get('/home', errorWrapper(getHomeDataController));
dataRouter.get('/rateList', errorWrapper(getRateListController));
dataRouter.get('/platform', errorWrapper(getPlatformDataController));
