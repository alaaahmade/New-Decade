import { Router } from 'express';

import storageUpload from '../middlewares/uploadFile.js';
import { isAuth } from '../middlewares/IsAuth.js';
import {
  deleteFileController,
  uploadFileController,
} from '../controllers/uploadFilesController.js';
import { errorWrapper } from '../helpers/index.js';

export const multerRouter = Router();

const fields = [
  { name: 'file', maxCount: 1 },
  { name: 'fileFolder', maxCount: 1 },
];

multerRouter.post(
  '/uploadFile/:fileFolder',
  errorWrapper(isAuth),
  storageUpload.fields(fields),
  errorWrapper(uploadFileController),
);

multerRouter.post(
  '/deleteFile',
  errorWrapper(isAuth),
  // storageUpload.fields(fields),
  errorWrapper(deleteFileController),
);
