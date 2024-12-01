import mongoose from 'mongoose';
// import { db } from '../database/index.js';

const platformHero = new mongoose.Schema(
  {
    id: {
      type: Number,
    },
    lang: {
      type: Object,
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

export const PlatformHero = mongoose.model('PlatformHero', platformHero);
export const createDefaultPlatformHero = async () => {
  const defaults = await PlatformHero.findOne({ id: 0 });
  if (!defaults) {
    const defaultHero = new PlatformHero({
      id: 0,
      lang: {
        ar: {
          title: 'One Unified Platform for All-mile Logistics Excellence',

          description: `Enhance logistics efficiency acorss firtst, mid, and last mile deliveries 
          with our order-to-deliviry Dispatch Management Platform. Ensure optimal fleet
           and dispatch management , improve resource utilization, and delight
            customers with predictable, convenient, and flexble fulfillment by leveraging 
            automation.`,

          buttonOne: {
            text: 'Watch Demos',
            link: 'www.google.com',
          },
          buttonTow: {
            text: "lit's Talk",
            link: 'www.google.com',
          },
        },
        en: {
          title: 'One Unified Platform for All-mile Logistics Excellence',

          description: `Enhance logistics efficiency acorss firtst, mid, and last mile deliveries with our order-to-deliviry Dispatch Management Platform. Ensure optimal fleet  and dispatch management , improve resource utilization, and delight customers with predictable, convenient, and flexble fulfillment by leveraging automation.  `,

          buttonOne: {
            text: 'Watch Demos',
            link: 'www.google.com',
          },
          buttonTow: {
            text: "lit's Talk",
            link: 'www.google.com',
          },
        },
        cr: {
          title: 'One Unified Platform for All-mile Logistics Excellence',

          description: `Enhance logistics efficiency acorss firtst, mid, and last mile deliveries with our order-to-deliviry Dispatch Management Platform. Ensure optimal fleet  and dispatch management , improve resource utilization, and delight customers with predictable, convenient, and flexble fulfillment by leveraging automation.  `,

          buttonOne: {
            text: 'Watch Demos',
            link: 'www.google.com',
          },
          buttonTow: {
            text: "lit's Talk",
            link: 'www.google.com',
          },
        },
      },
      image: 'http://localhost:8080/uploads/platformHero/hero.svg',
    });
    defaultHero.save();
    console.log('\x1b[33m$$-\x1b[0m', `Platform Hero is created successfully.`);
  } else {
    console.log('\x1b[33m$$-\x1b[0m', `Platform Hero is exist.`);
  }
};
