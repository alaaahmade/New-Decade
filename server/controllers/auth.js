import { EditSecurity, confirmPassword, isAuthenticated, signIn } from '../services/users.js';

export const signInController = async (req, res) => {
  const response = await signIn(req);
  res.cookie('token', response.token).status(response.status).json(response);
};

export const isAuthenticatedController = async (req, res) => {
  const response = await isAuthenticated(req);
  res.status(response.status).json(response);
};

export const LogOutController = (req, res) => {
  res.clearCookie('token').status(200).json({
    error: 'no',
    msg: 'logged out successfully',
  });
};
export const confirmController = async (req, res) => {
  const response = await confirmPassword(req);
  res.status(response.status).json(response);
};

export const EditSecurityController = async (req, res) => {
  const response = await EditSecurity(req);
  res.status(response.status).json(response);
};