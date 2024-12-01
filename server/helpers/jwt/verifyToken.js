import jwt from 'jsonwebtoken';
import { SECRET_KEY } from '../../config/index.js';

export const verifyToken = token =>
  new Promise((resolve, reject) => {
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
      if (err) reject(err);
      resolve(decoded);
    });
  });
