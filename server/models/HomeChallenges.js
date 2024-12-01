import mongoose from 'mongoose';
// import { db } from '../database/index.js';

const homeChallenges = new mongoose.Schema(
  {
    id: {
      type: Number,
    },
    lang: {
      type: Object,
    },
    img: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

export const HomeChallenges = mongoose.model('HomeChallenges', homeChallenges);
export const createDefaultChallenges = async () => {
  const defaults = await HomeChallenges.findOne({});
  if (!defaults) {
    const defaultChallenges = new HomeChallenges({
      id: 0,
      img: 'http://localhost:8080/uploads/challenges/assessment-image.webp',
      lang: {
        ar: {
          titleOne: 'Last-mile Logistics Challenges holding back Your',
          span: 'Growth',
          titleTow: '?',
          descOne: `Our unique Last-Mile Maturity Assessment will lead the way! In just seven minutes, you'll get.`,
          descTow: `This complimentary, assessment is your gateway to enhancing last mile logistics, scaling effectively, improving customer retention, and turning exceptional fulfillment into a competitive edge.`,
          buttonOne: {
            text: 'Take The Assessment',
            link: 'www.google.com',
          },
          buttonTow: {
            text: 'Download Report',
            link: 'www.google.com',
          },
          list: [
            {
              id: 0,
              text: 'A detailed analysis of your last mile capabilities',
            },
            {
              id: 1,
              text: 'Thorough benchmarking against industry standers',
            },
            {
              id: 2,
              text: 'A customized report full of actionable recommendations',
            },
          ],
        },
        en: {
          titleOne: 'Last-mile Logistics Challenges holding back Your',
          span: 'Growth',
          titleTow: '?',
          descOne: `Our unique Last-Mile Maturity Assessment will lead the way! In just seven minutes, you'll get.`,
          descTow: `This complimentary, assessment is your gateway to enhancing last mile logistics, scaling effectively, improving customer retention, and turning exceptional fulfillment into a competitive edge.`,
          buttonOne: {
            text: 'Take The Assessment',
            link: 'www.google.com',
          },
          buttonTow: {
            text: 'Download Report',
            link: 'www.google.com',
          },
          list: [
            {
              id: 0,
              text: 'A detailed analysis of your last mile capabilities',
            },
            {
              id: 1,
              text: 'Thorough benchmarking against industry standers',
            },
            {
              id: 2,
              text: 'A customized report full of actionable recommendations',
            },
          ],
        },
        cr: {
          titleOne: 'Last-mile Logistics Challenges holding back Your',
          span: 'Growth',
          titleTow: '?',
          descOne: `Our unique Last-Mile Maturity Assessment will lead the way! In just seven minutes, you'll get.`,
          descTow: `This complimentary, assessment is your gateway to enhancing last mile logistics, scaling effectively, improving customer retention, and turning exceptional fulfillment into a competitive edge.`,
          buttonOne: {
            text: 'Take The Assessment',
            link: 'www.google.com',
          },
          buttonTow: {
            text: 'Download Report',
            link: 'www.google.com',
          },
          list: [
            {
              id: 0,
              text: 'A detailed analysis of your last mile capabilities',
            },
            {
              id: 1,
              text: 'Thorough benchmarking against industry standers',
            },
            {
              id: 2,
              text: 'A customized report full of actionable recommendations',
            },
          ],
        },
      },
    });
    defaultChallenges.save();
    console.log('\x1b[33m$$-\x1b[0m', `Challenges is created successfully.`);
  } else {
    console.log('\x1b[33m$$-\x1b[0m', `Challenges is exist.`);
  }
};
