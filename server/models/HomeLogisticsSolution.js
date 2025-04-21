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
        ar: {
          titleOne: 'حلولنا اللوجستية موثوقة من أكثر من 300 علامة تجارية رائدة',
          span: 'عالمية',
          titleTow: 'في أكثر من 30 دولة',
          solutions: [
            {
              id: 0,
              num: '1.02B',
              title: 'إجمالي عمليات التسليم المُحسّنة',
              color: '#8d06c4',
            },
            {
              id: 1,
              num: '$288m+',
              title: 'توفير في تكاليف الخدمات اللوجستية',
              color: '#55b2f7',
            },
            {
              id: 2,
              num: '360',
              title: 'عدد العملاء المخدومين',
              color: '#ff5400',
            },
            {
              id: 3,
              num: '12m+kgs',
              title: 'تقليل انبعاثات الغازات الدفيئة',
              color: '#46f77e',
            },
          ],
        },
        cr: {
          titleOne: 'چاکسازییەکانی ئێمە بەڕێزترین براندەکان باوەڕیان پێیە',
          span: 'لەجیهاندا',
          titleTow: 'لە 30+ وڵاتدا',
          solutions: [
            {
              id: 0,
              num: '1.02B',
              title: 'کۆی گەیاندنەکان بە باشی چاکساز کراوە',
              color: '#8d06c4',
            },
            {
              id: 1,
              num: '$288m+',
              title: 'هەرزەکردنەوە لە خەرجیەکانی لۆجیستیک',
              color: '#55b2f7',
            },
            {
              id: 2,
              num: '360',
              title: 'موشتەری خزمەت‌کراو',
              color: '#ff5400',
            },
            {
              id: 3,
              num: '12m+kgs',
              title: 'کەمکردنەوەی دەرچووی گازی تەندروستی گەرمکردنەوەیی',
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
