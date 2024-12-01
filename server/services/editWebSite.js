import { Trusted } from '../models/Trusted.js';
import {
  AboutPlatform,
  AboutView,
  CustomerWords,
  Footer,
  Header,
  HomeAdvantage,
  HomeAvenues,
  HomeChallenges,
  HomeHero,
  HomeLatestInsights,
  HomeLogisticsSolution,
  HomeModular,
  PlatformHero,
} from '../models/index.js';

export const editHeaderServices = async req => {
  const { logo, lang, smallLogo, whatsNumber } = req.body;
  const header = await Header.findOne({ id: 0 });
  header.logo = logo;
  header.lang = lang;
  header.smallLogo = smallLogo;
  header.whatsNumber = whatsNumber;
  header.save();
  return {
    status: 200,
    data: 'success',
  };
};

export const editHeroServices = async req => {
  const { image, lang } = req.body;
  const hero = await HomeHero.findOne({ id: 0 });
  hero.image = image;
  hero.lang = lang;
  hero.save();

  return {
    status: 200,
    data: 'success',
  };
};

export const editAboutServices = async req => {
  const { image, lang } = req.body;
  const about = await AboutView.findOne({ id: 0 });
  about.image = image;
  about.lang = lang;
  about.save();

  return {
    status: 200,
    data: 'success',
  };
};

export const editAvenuesServices = async req => {
  const { lang } = req.body;
  const avenues = await HomeAvenues.findOne({ id: 0 });
  avenues.lang = lang;
  avenues.save();

  return {
    status: 200,
    data: 'success',
  };
};

export const editModularServices = async req => {
  const { lang } = req.body;
  const Modular = await HomeModular.findOne({ id: 0 });
  Modular.lang = lang;
  Modular.save();

  return {
    status: 200,
    data: 'success',
  };
};

export const editAdvantageServices = async req => {
  const { lang, image, buttonOneI, buttonTowI } = req.body;
  const advantage = await HomeAdvantage.findOne({ id: 0 });
  advantage.lang = lang;
  advantage.image = image;
  advantage.buttonOneI = buttonOneI;
  advantage.buttonTowI = buttonTowI;
  advantage.save();
  return {
    status: 200,
    data: 'success',
  };
};

export const editWordsServices = async req => {
  const { lang, rateOne, rateTow } = req.body;
  const words = await CustomerWords.findOne({ id: 0 });
  words.lang = lang;
  words.rateOne = rateOne;
  words.rateTow = rateTow;
  words.save();
  return {
    status: 200,
    data: 'success',
  };
};

export const editSolutionsServices = async req => {
  const { lang } = req.body;
  const words = await HomeLogisticsSolution.findOne({ id: 0 });
  words.lang = lang;
  words.save();
  return {
    status: 200,
    data: 'success',
  };
};

export const editInsightsServices = async req => {
  const { lang } = req.body;
  const insights = await HomeLatestInsights.findOne({ id: 0 });
  insights.lang = lang;
  insights.save();
  return {
    status: 200,
    data: 'success',
  };
};

export const editChallengesServices = async req => {
  const { lang, img } = req.body;
  const challenges = await HomeChallenges.findOne({ id: 0 });
  challenges.lang = lang;
  challenges.img = img;
  challenges.save();
  return {
    status: 200,
    data: 'success',
  };
};

export const editFooterServices = async req => {
  const { lang } = req.body;
  const footer = await Footer.findOne({ id: 0 });
  footer.lang = lang;
  footer.save();
  return {
    status: 200,
    data: 'success',
  };
};

export const editTrustedServices = async req => {
  const { lang, listOne, listTow, listThree, listFour } = req.body;
  const trusted = await Trusted.findOne({ id: 0 });
  trusted.lang = lang;
  trusted.listOne = listOne;
  trusted.listTow = listTow;
  trusted.listThree = listThree;
  trusted.listFour = listFour;
  trusted.save();
  return {
    status: 200,
    data: 'success',
  };
};

export const editPlatformHeroServices = async req => {
  const { image, lang } = req.body;
  const hero = await PlatformHero.findOne({ id: 0 });
  hero.image = image;
  hero.lang = lang;
  hero.save();

  return {
    status: 200,
    data: 'success',
  };
};

export const editPlatformAboutServices = async req => {
  const { lang, certificatesLine } = req.body;
  const about = await AboutPlatform.findOne({ id: 0 });
  about.lang = lang;
  about.certificatesLine = certificatesLine;
  about.save();

  return {
    status: 200,
    data: 'success',
  };
};
