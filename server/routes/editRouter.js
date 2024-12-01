import { Router } from 'express';
import { errorWrapper } from '../helpers/index.js';
import {
  editAboutController,
  editAdvantageController,
  editAvenuesController,
  editChallengesController,
  editFooterController,
  editHeaderController,
  editHeroController,
  editInsightsController,
  editModularController,
  editPlatformAboutController,
  editPlatformHeroController,
  editSolutionsController,
  editTrustedController,
  editWordsController,
} from '../controllers/index.js';

export const editRouter = Router();

// home

editRouter.put('/header', errorWrapper(editHeaderController));
editRouter.put('/hero', errorWrapper(editHeroController));
editRouter.put('/about', errorWrapper(editAboutController));
editRouter.put('/avenues', errorWrapper(editAvenuesController));
editRouter.put('/modular', errorWrapper(editModularController));
editRouter.put('/advantage', errorWrapper(editAdvantageController));
editRouter.put('/words', errorWrapper(editWordsController));
editRouter.put('/solutions', errorWrapper(editSolutionsController));
editRouter.put('/insights', errorWrapper(editInsightsController));
editRouter.put('/challenges', errorWrapper(editChallengesController));
editRouter.put('/footer', errorWrapper(editFooterController));
editRouter.put('/trusteds', errorWrapper(editTrustedController));

// platform

editRouter.put('/platform/hero', errorWrapper(editPlatformHeroController));
editRouter.put('/platform/about', errorWrapper(editPlatformAboutController));
