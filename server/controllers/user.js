import {
  clientsService,
  deleteClientsService,
  subscribeService,
} from '../services/index.js';

export const subscribeController = async (req, res) => {
  const response = await subscribeService(req);
  res.status(response.status).json(response);
};

export const clientsController = async (req, res) => {
  const response = await clientsService();
  res.status(response.status).json(response);
};

export const deleteClientController = async (req, res) => {
  const response = await deleteClientsService(req);
  res.status(response.status).json(response);
};
