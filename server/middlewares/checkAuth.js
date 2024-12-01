import { CustomError, verifyToken } from '../helpers/index.js';

export const checkAuth = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    throw new CustomError(400, 'Unauthorized');
  }
  try {
    const decoded = await verifyToken(token);
    req.user = decoded;

    next();
  } catch (error) {
    res.clearCookie('token');
    next(error);
  }
};
