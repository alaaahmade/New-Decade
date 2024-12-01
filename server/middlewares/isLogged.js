import { CustomError, verifyToken } from '../helpers/index.js';

export const isLogged = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (token) {
      await verifyToken(token);
      throw new CustomError('Already logged In', 401);
    } else {
      next();
    }
  } catch (err) {
    if (err.message === 'Already logged In') {
      next(err);
    } else {
      res.clearCookie('token');
      next();
    }
  }
};
