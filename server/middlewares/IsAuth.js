import { CustomError } from '../helpers/index.js';
import { verifyToken } from '../helpers/jwt/verifyToken.js';

export const isAuth = async (req, res, next) => {
  // try {

  const headerToken = req.cookies.token;
  if (!headerToken) {
    res.clearCookie('token');
    throw new CustomError(401, 'Unauthorized');
  }
  const user = await verifyToken(headerToken);
  req.user = user;
  next();
};
