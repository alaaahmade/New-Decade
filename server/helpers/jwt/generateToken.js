import jwt from 'jsonwebtoken';
import { SECRET_KEY } from '../../config/index.js';

export const generateToken = payload => {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, SECRET_KEY, (err, token) => {
      if (err) {
        reject(err);
      } else {
        resolve(token);
      }
    });
  });
};
