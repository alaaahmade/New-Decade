import path from 'path';
import fs from 'fs';
import { pathToFileURL } from 'url';
import { HOST_NAME } from '../config/index.js';

const dirname = pathToFileURL('').pathname;

export const uploadFileService = req => {
  const { files } = req;
  const { file } = files;
  const { fileFolder } = req.params;
  const fileUrl = `${HOST_NAME}/uploads/${fileFolder}/${file[0].filename}`;
  return {
    status: 200,
    data: {
      fileUrl,
      message: 'File Have Been Uploaded Successfully!',
    },
  };
};

export const deleteFileService = req => {
  const { fileUrl } = req.body;
  console.log(fileUrl, 455555);
  const names = fileUrl.split('/') || [];

  const fileFolder = names[4];
  const filename = names[5];

  if (!fileFolder || !filename) {
    return {
      status: 201,
      msg: 'file not found',
    };
  }

  const imagePath = path.join(dirname, 'uploads', fileFolder, filename);
  try {
    fs.unlinkSync(imagePath);
  } catch (error) {
    console.log(error);
  }

  return {
    status: 200,
    message: 'File Have Been Deleted Successfully!',
  };
};
