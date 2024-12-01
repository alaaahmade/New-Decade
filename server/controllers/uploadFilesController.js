import {
  deleteFileService,
  uploadFileService,
} from '../services/uploadFiles.js';

export const uploadFileController = async (req, res) => {
  const response = await uploadFileService(req);
  res.status(response.status).json(response);
};

export const deleteFileController = async (req, res) => {
  const response = await deleteFileService(req);
  res.status(response.status).json(response);
};
