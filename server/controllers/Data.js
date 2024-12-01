import { PlatformConvert } from '../models/PlatformConvert.js';
import { PlatformEdge } from '../models/PlatformEdge.js';
import { PlatformTransform } from '../models/PlatformTransform.js';
import { Trusted } from '../models/Trusted.js';
import {
  AboutView,
  HomeAdvantage,
  HomeAvenues,
  HomeModular,
  HomeHero,
  CustomerWords,
  HomeLogisticsSolution,
  HomeLatestInsights,
  HomeChallenges,
  Header,
  Footer,
  PlatformHero,
  AboutPlatform,
  PlatformForAll,
} from '../models/index.js';

const getHomeDataController = async (req, res) => {
  const hero = await HomeHero.findOne({ id: 0 });
  const about = await AboutView.findOne({ id: 0 });
  const trusted = await Trusted.findOne({ id: 0 });
  const avenues = await HomeAvenues.findOne({ id: 0 });
  const modular = await HomeModular.findOne({ id: 0 });
  const advantage = await HomeAdvantage.findOne({ id: 0 });
  const customerWords = await CustomerWords.findOne({ id: 0 });
  const logisticsSolution = await HomeLogisticsSolution.findOne({ id: 0 });
  const latestInsights = await HomeLatestInsights.findOne({ id: 0 });
  const challenges = await HomeChallenges.findOne({ id: 0 });
  const data = {
    error: 'no',
    hero,
    trusted,
    about,
    avenues,
    modular,
    advantage,
    customerWords,
    logisticsSolution,
    latestInsights,
    challenges,
  };
  res.status(200).json(data);
};

const getPlatformDataController = async (req, res) => {
  const hero = await PlatformHero.findOne({ id: 0 });
  const about = await AboutPlatform.findOne({ id: 0 });
  const edge = await PlatformEdge.findOne({ id: 0 });
  const forAll = await PlatformForAll.findOne({ id: 0 });
  const convert = await PlatformConvert.findOne({ id: 0 });
  const transform = await PlatformTransform.findOne({ id: 0 });
  const data = {
    error: 'no',
    hero,
    edge,
    about,
    forAll,
    transform,
    convert,
  };
  res.status(200).json(data);
};

const getLayoutData = async (req, res) => {
  const header = await Header.findOne({ id: 0 });
  const footer = await Footer.findOne({ id: 0 });
  const data = {
    error: 'no',
    header,
    footer,
  };
  res.status(200).json(data);
};

const getRateListController = async (req, res) => {
  const customerWords = await CustomerWords.findOne({ id: 0 });
  if (!customerWords.rateOne && !customerWords.rateOne) {
    res.status(200).json({
      error: 'no',
      data: [],
    });
    return;
  }
  const { rateOne, rateTow } = customerWords;
  res.status(200).json({
    error: 'no',
    data: [
      {
        id: 0,
        img: rateOne,
      },
      {
        id: 1,
        img: rateTow,
      },
    ],
  });
};

export {
  getHomeDataController,
  getLayoutData,
  getPlatformDataController,
  getRateListController,
};
