import {
  editPlatformAboutServices,
  editPlatformHeroServices,
} from '../services/editWebSite.js';
import {
  editAboutServices,
  editAdvantageServices,
  editAvenuesServices,
  editChallengesServices,
  editFooterServices,
  editHeaderServices,
  editHeroServices,
  editInsightsServices,
  editModularServices,
  editSolutionsServices,
  editTrustedServices,
  editWordsServices,
} from '../services/index.js';

export const editHeaderController = async (req, res) => {
  const response = await editHeaderServices(req);
  res.status(response.status).json(response);
};

export const editHeroController = async (req, res) => {
  const response = await editHeroServices(req);
  res.status(response.status).json(response);
};

export const editAboutController = async (req, res) => {
  const response = await editAboutServices(req);
  res.status(response.status).json(response);
};

export const editAvenuesController = async (req, res) => {
  const response = await editAvenuesServices(req);
  res.status(response.status).json(response);
};

export const editModularController = async (req, res) => {
  const response = await editModularServices(req);
  res.status(response.status).json(response);
};

export const editAdvantageController = async (req, res) => {
  const response = await editAdvantageServices(req);
  res.status(response.status).json(response);
};

export const editWordsController = async (req, res) => {
  const response = await editWordsServices(req);
  res.status(response.status).json(response);
};

export const editSolutionsController = async (req, res) => {
  const response = await editSolutionsServices(req);
  res.status(response.status).json(response);
};

export const editInsightsController = async (req, res) => {
  const response = await editInsightsServices(req);
  res.status(response.status).json(response);
};

export const editChallengesController = async (req, res) => {
  const response = await editChallengesServices(req);
  res.status(response.status).json(response);
};

export const editFooterController = async (req, res) => {
  const response = await editFooterServices(req);
  res.status(response.status).json(response);
};

export const editTrustedController = async (req, res) => {
  const response = await editTrustedServices(req);
  res.status(response.status).json(response);
};

// platform service

export const editPlatformHeroController = async (req, res) => {
  const response = await editPlatformHeroServices(req);
  res.status(response.status).json(response);
};

export const editPlatformAboutController = async (req, res) => {
  const response = await editPlatformAboutServices(req);
  res.status(response.status).json(response);
};
