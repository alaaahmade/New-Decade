import path from 'path';
import multer from 'multer';
import { pathToFileURL } from 'url';

const dirname = pathToFileURL('').pathname;
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const { fileFolder } = req.params;
    const uploadPath = path.join(dirname, 'uploads', fileFolder);
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

export default upload;
