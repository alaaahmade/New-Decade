import mongoose from 'mongoose';
// import { db } from '../database/index.js';

const aboutView = new mongoose.Schema(
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

export const AboutView = mongoose.model('AboutView', aboutView);
export const createDefaultAbout = async () => {
  const defaults = await AboutView.findOne({});
  if (!defaults) {
    const defaultAbout = new AboutView({
      id: 0,
      lang: {
        ar: {
          title: ' in All-mile Logistics Management SoftWare',
          span: 'Leader ',
          descOne: `Locus is an order-to-delivery dispatch management software that handles the complexity of first mile,
          mid mile, and all-mile Logistics with AI-Powered, data-driven
          decision-making. we are the first choice for all your logistics and fulfillment needs,
          including fleet management , order management, dispatch planning, routing, and
          analytics for insight, and more `,
          descTow: `Locus empowers captive, contracted, outsourced and hybrid fleets to deliver mor
          while running lean. All while exceeding customer expectations for convenient, flexible,
          and predictable fulfillment. Our API-first approach also makes us the best copilot to
          your existing TMS, OMS, WMS or ERP with seamless integrations.`,
          buttonOne: {
            text: 'Learn more',
            link: 'www.google.com',
          },
          buttonTow: {
            text: 'Get a Demo',
            link: 'www.google.com',
          },
        },
        en: {
          title: ' in All-mile Logistics Management SoftWare',
          span: 'Leader ',
          descOne: `Locus is an order-to-delivery dispatch management software that handles the complexity of first mile,
          mid mile, and all-mile Logistics with AI-Powered, data-driven
          decision-making. we are the first choice for all your logistics and fulfillment needs,
          including fleet management , order management, dispatch planning, routing, and
          analytics for insight, and more `,
          descTow: `Locus empowers captive, contracted, outsourced and hybrid fleets to deliver mor
          while running lean. All while exceeding customer expectations for convenient, flexible,
          and predictable fulfillment. Our API-first approach also makes us the best copilot to
          your existing TMS, OMS, WMS or ERP with seamless integrations.`,
          buttonOne: {
            text: 'Learn more',
            link: 'www.google.com',
          },
          buttonTow: {
            text: 'Get a Demo',
            link: 'www.google.com',
          },
        },
        cr: {
          title: ' in All-mile Logistics Management SoftWare',
          span: 'Leader ',
          descOne: `Locus is an order-to-delivery dispatch management software that handles the complexity of first mile,
          mid mile, and all-mile Logistics with AI-Powered, data-driven
          decision-making. we are the first choice for all your logistics and fulfillment needs,
          including fleet management , order management, dispatch planning, routing, and
          analytics for insight, and more `,
          descTow: `Locus empowers captive, contracted, outsourced and hybrid fleets to deliver mor
          while running lean. All while exceeding customer expectations for convenient, flexible,
          and predictable fulfillment. Our API-first approach also makes us the best copilot to
          your existing TMS, OMS, WMS or ERP with seamless integrations.`,
          buttonOne: {
            text: 'Learn more',
            link: 'www.google.com',
          },
          buttonTow: {
            text: 'Get a Demo',
            link: 'www.google.com',
          },
        },
      },
      image: 'http://localhost:8080/uploads/about/defualt/video-thumbnail.webp',
    });
    defaultAbout.save();
    console.log('\x1b[33m$$-\x1b[0m', `About is created successfully.`);
  } else {
    console.log('\x1b[33m$$-\x1b[0m', `About is exist.`);
  }
};
