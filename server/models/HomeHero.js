import mongoose from 'mongoose';
// import { db } from '../database/index.js';

const homeHero = new mongoose.Schema(
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

export const HomeHero = mongoose.model('HomeHero', homeHero);
export const createDefaultHero = async () => {
  const defaults = await HomeHero.findOne({ id: 0 });
  if (!defaults) {
    const defaultHero = new HomeHero({
      id: 0,
      lang: {
        ar: {
          titleOne: 'Growth,',
          titleTow: 'Delivered.',
          description: `Enable excellence in all-mile logistics with our real-world-ready
        customer experience and dispatch management platform. Grow your fulfillment and automate key
        processes for unmatched efficiency, reduce costs, and foster customer loyalty with our
        modular and scalable Delivery Management Solution.`,
          featured: 'Gartner',
          buttonOne: {
            text: 'Explore The platform',
            link: 'www.google.com',
          },
          buttonTow: {
            text: 'Watch Demos',
            link: 'www.google.com',
          },
        },
        en: {
          titleOne: 'Growth,',
          titleTow: 'Delivered.',
          description: `Enable excellence in all-mile logistics with our real-world-ready
        customer experience and dispatch management platform. Grow your fulfillment and automate key
        processes for unmatched efficiency, reduce costs, and foster customer loyalty with our
        modular and scalable Delivery Management Solution.`,
          featured: 'Gartner',
          buttonOne: {
            text: 'Explore The platform',
            link: 'www.google.com',
          },
          buttonTow: {
            text: 'Watch Demos',
            link: 'www.google.com',
          },
        },
        cr: {
          titleOne: 'Growth,',
          titleTow: 'Delivered.',
          description: `Enable excellence in all-mile logistics with our real-world-ready
        customer experience and dispatch management platform. Grow your fulfillment and automate key
        processes for unmatched efficiency, reduce costs, and foster customer loyalty with our
        modular and scalable Delivery Management Solution.`,
          featured: 'Gartner',
          buttonOne: {
            text: 'Explore The platform',
            link: 'www.google.com',
          },
          buttonTow: {
            text: 'Watch Demos',
            link: 'www.google.com',
          },
        },
      },
      image: 'http://localhost:8080/uploads/hero/hero.svg',
    });
    defaultHero.save();
    console.log('\x1b[33m$$-\x1b[0m', `Hero is created successfully.`);
  } else {
    console.log('\x1b[33m$$-\x1b[0m', `Hero is exist.`);
  }
};
