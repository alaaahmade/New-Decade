import mongoose from 'mongoose';
// import { db } from '../database/index.js';

const platformEdge = new mongoose.Schema(
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

export const PlatformEdge = mongoose.model('PlatformEdge', platformEdge);

export const createDefaultPlatformEdge = async () => {
  const defaults = await PlatformEdge.findOne({ id: 0 });
  if (!defaults) {
    const defaultPlatformEdge = new PlatformEdge({
      id: 0,
      lang: {
        ar: {
          title: 'The Locus Edge',
          list: [
            {
              id: 0,
              name: 'Modular',
              desc: `Our platform consists of carefully designed modules 
              that delivery excellence across all-mile logistics
               operations. Modular development also allows for constant innovation and algorithmic improvements so
                that customers are ever-ready to meet new market
                 realities.`,
              img: 'http://localhost:8080/uploads/platformEdge/image-leverage-targeted-insights.webp',
            },
            {
              id: 1,
              name: 'Integrated',
              desc: `Our platform consists of carefully designed modules 
              that delivery excellence across all-mile logistics
               operations. Modular development also allows for constant innovation and algorithmic improvements so
                that customers are ever-ready to meet new market
                 realities.`,
              img: 'http://localhost:8080/uploads/platformEdge/image-leverage-targeted-insights.webp',
            },
            {
              id: 2,
              name: 'API-enabled',
              desc: `Our platform consists of carefully designed modules 
              that delivery excellence across all-mile logistics
               operations. Modular development also allows for constant innovation and algorithmic improvements so
                that customers are ever-ready to meet new market
                 realities.`,
              img: 'http://localhost:8080/uploads/platformEdge/image-leverage-targeted-insights.webp',
            },
            {
              id: 3,
              name: 'Secure',
              desc: `Our platform consists of carefully designed modules 
              that delivery excellence across all-mile logistics
               operations. Modular development also allows for constant innovation and algorithmic improvements so
                that customers are ever-ready to meet new market
                 realities.`,
              img: 'http://localhost:8080/uploads/platformEdge/image-leverage-targeted-insights.webp',
            },
            {
              id: 4,
              name: 'Support',
              desc: `Our platform consists of carefully designed modules 
              that delivery excellence across all-mile logistics
               operations. Modular development also allows for constant innovation and algorithmic improvements so
                that customers are ever-ready to meet new market
                 realities.`,
              img: 'http://localhost:8080/uploads/platformEdge/image-leverage-targeted-insights.webp',
            },
          ],
        },
        en: {
          title: 'The Locus Edge',
          list: [
            {
              id: 0,
              name: 'Modular',
              desc: `Our platform consists of carefully designed modules 
              that delivery excellence across all-mile logistics
               operations. Modular development also allows for constant innovation and algorithmic improvements so
                that customers are ever-ready to meet new market
                 realities.`,
              img: 'http://localhost:8080/uploads/platformEdge/image-leverage-targeted-insights.webp',
            },
            {
              id: 1,
              name: 'Integrated',
              desc: `Our platform consists of carefully designed modules 
              that delivery excellence across all-mile logistics
               operations. Modular development also allows for constant innovation and algorithmic improvements so
                that customers are ever-ready to meet new market
                 realities.`,
              img: 'http://localhost:8080/uploads/platformEdge/image-leverage-targeted-insights.webp',
            },
            {
              id: 2,
              name: 'API-enabled',
              desc: `Our platform consists of carefully designed modules 
              that delivery excellence across all-mile logistics
               operations. Modular development also allows for constant innovation and algorithmic improvements so
                that customers are ever-ready to meet new market
                 realities.`,
              img: 'http://localhost:8080/uploads/platformEdge/image-leverage-targeted-insights.webp',
            },
            {
              id: 3,
              name: 'Secure',
              desc: `Our platform consists of carefully designed modules 
              that delivery excellence across all-mile logistics
               operations. Modular development also allows for constant innovation and algorithmic improvements so
                that customers are ever-ready to meet new market
                 realities.`,
              img: 'http://localhost:8080/uploads/platformEdge/image-leverage-targeted-insights.webp',
            },
            {
              id: 4,
              name: 'Support',
              desc: `Our platform consists of carefully designed modules 
              that delivery excellence across all-mile logistics
               operations. Modular development also allows for constant innovation and algorithmic improvements so
                that customers are ever-ready to meet new market
                 realities.`,
              img: 'http://localhost:8080/uploads/platformEdge/image-leverage-targeted-insights.webp',
            },
          ],
        },
        cr: {
          title: 'The Locus Edge',
          list: [
            {
              id: 0,
              name: 'Modular',
              desc: `Our platform consists of carefully designed modules 
              that delivery excellence across all-mile logistics
               operations. Modular development also allows for constant innovation and algorithmic improvements so
                that customers are ever-ready to meet new market
                 realities.`,
              img: 'http://localhost:8080/uploads/platformEdge/image-leverage-targeted-insights.webp',
            },
            {
              id: 1,
              name: 'Integrated',
              desc: `Our platform consists of carefully designed modules 
              that delivery excellence across all-mile logistics
               operations. Modular development also allows for constant innovation and algorithmic improvements so
                that customers are ever-ready to meet new market
                 realities.`,
              img: 'http://localhost:8080/uploads/platformEdge/image-leverage-targeted-insights.webp',
            },
            {
              id: 2,
              name: 'API-enabled',
              desc: `Our platform consists of carefully designed modules 
              that delivery excellence across all-mile logistics
               operations. Modular development also allows for constant innovation and algorithmic improvements so
                that customers are ever-ready to meet new market
                 realities.`,
              img: 'http://localhost:8080/uploads/platformEdge/image-leverage-targeted-insights.webp',
            },
            {
              id: 3,
              name: 'Secure',
              desc: `Our platform consists of carefully designed modules 
              that delivery excellence across all-mile logistics
               operations. Modular development also allows for constant innovation and algorithmic improvements so
                that customers are ever-ready to meet new market
                 realities.`,
              img: 'http://localhost:8080/uploads/platformEdge/image-leverage-targeted-insights.webp',
            },
            {
              id: 4,
              name: 'Support',
              desc: `Our platform consists of carefully designed modules 
              that delivery excellence across all-mile logistics
               operations. Modular development also allows for constant innovation and algorithmic improvements so
                that customers are ever-ready to meet new market
                 realities.`,
              img: 'http://localhost:8080/uploads/platformEdge/image-leverage-targeted-insights.webp',
            },
          ],
        },
      },
    });
    defaultPlatformEdge.save();
    console.log('\x1b[33m$$-\x1b[0m', `Platform Edge is created successfully.`);
  } else {
    console.log('\x1b[33m$$-\x1b[0m', `Platform Edge is exist.`);
  }
};
