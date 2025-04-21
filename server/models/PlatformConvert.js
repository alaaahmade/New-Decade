import mongoose from 'mongoose';
// import { db } from '../database/index.js';

const platformConvert = new mongoose.Schema(
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

export const PlatformConvert = mongoose.model(
  'PlatformConvert',
  platformConvert,
);

export const createDefaultPlatformConvert = async () => {
  const defaults = await PlatformConvert.findOne({});
  if (!defaults) {
    const defaultPlatformConvert = new PlatformConvert({
      id: 0,
      lang: {
        ar: {
          title: 'حوّل عملياتك اللوجستية إلى مُولّد للإيرادات',
          button: {
            text: 'جدولة عرض توضيحي',
            link: 'www.google.com',
          },
        },
        en: {
          title: 'Convert Your Logistics Operations to a Revenue Generator',
          button: {
            text: 'Schedule a Demo',
            link: 'www.google.com',
          },
        },
        cr: {
          title: 'گۆڕینی فەرمی فەرمی تایبەتمەندەکان بۆ فەرمی دراوە',
          button: {
            text: 'کۆنترۆڵی پێشکەش بکە',
            link: 'www.google.com',
          },
        },
      },
    });
    defaultPlatformConvert.save();
    console.log(
      '\x1b[33m$$-\x1b[0m',
      `PlatformConvert is created successfully.`,
    );
  } else {
    console.log('\x1b[33m$$-\x1b[0m', `PlatformConvert is exist.`);
  }
};
