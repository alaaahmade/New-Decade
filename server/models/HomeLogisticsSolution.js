import mongoose from 'mongoose';
// import { db } from '../database/index.js';

const homeLogisticsSolution = new mongoose.Schema(
  {
    id: {
      type: Number,
    },
    lang: {
      type: Object,
    },
  },
  {
    timestamps: true,
  },
);

export const HomeLogisticsSolution = mongoose.model(
  'HomeAdvertisement',
  homeLogisticsSolution,
);

export const createDefaultHomeLogisticsSolution = async () => {
  const defaults = await HomeLogisticsSolution.findOne({});
  if (!defaults) {
    const defaultHomeLogisticsSolution = new HomeLogisticsSolution({
      id: 0,
      lang: {
        ar: {
          titleOne: 'Our Logistics Solution Is Trusted by over 300+ Leading',
          span: 'Brands',
          titleTow: 'across 30+ Countries',
          solutions: [
            {
              id: 0,
              num: '1.02B',
              title: 'Total deliveries optimized',
              color: '#8d06c4',
            },
            {
              id: 1,
              num: '$288m+',
              title: 'Savings in logistics costs',
              color: '#55b2f7',
            },
            {
              id: 2,
              num: '360',
              title: 'Clients served',
              color: '#ff5400',
            },
            {
              id: 3,
              num: '12m+kgs',
              title: 'Reduction in GHG emissions',
              color: '#46f77e',
            },
          ],
        },
        en: {
          titleOne: 'Our Logistics Solution Is Trusted by over 300+ Leading',
          span: 'Brands ',
          titleTow: 'across 30+ Countries',
          solutions: [
            {
              id: 0,
              num: '1.02B',
              title: 'Total deliveries optimized',
              color: '#8d06c4',
            },
            {
              id: 1,
              num: '$288m+',
              title: 'Savings in logistics costs',
              color: '#55b2f7',
            },
            {
              id: 2,
              num: '360',
              title: 'Clients served',
              color: '#ff5400',
            },
            {
              id: 3,
              num: '12m+kgs',
              title: 'Reduction in GHG emissions',
              color: '#46f77e',
            },
          ],
        },
        cr: {
          titleOne: 'Our Logistics Solution Is Trusted by over 300+ Leading',
          span: 'Brands ',
          titleTow: 'across 30+ Countries',
          solutions: [
            {
              id: 0,
              num: '1.02B',
              title: 'Total deliveries optimized',
              color: '#8d06c4',
            },
            {
              id: 1,
              num: '$288m+',
              title: 'Savings in logistics costs',
              color: '#55b2f7',
            },
            {
              id: 2,
              num: '360',
              title: 'Clients served',
              color: '#ff5400',
            },
            {
              id: 3,
              num: '12m+kgs',
              title: 'Reduction in GHG emissions',
              color: '#46f77e',
            },
          ],
        },
      },
    });
    defaultHomeLogisticsSolution.save();
    console.log(
      '\x1b[33m$$-\x1b[0m',
      `HomeLogisticsSolution is created successfully.`,
    );
  } else {
    console.log('\x1b[33m$$-\x1b[0m', `HomeLogisticsSolution is exist.`);
  }
};
