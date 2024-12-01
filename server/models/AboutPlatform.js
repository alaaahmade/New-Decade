import mongoose from 'mongoose';
// import { db } from '../database/index.js';

const aboutPlatformView = new mongoose.Schema(
  {
    id: {
      type: Number,
    },
    lang: {
      type: Object,
    },
    certificatesLine: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

export const AboutPlatform = mongoose.model('AboutPlatform', aboutPlatformView);
export const createDefaultAboutPlatform = async () => {
  const defaults = await AboutPlatform.findOne({});
  if (!defaults) {
    const defaultAboutPlatform = new AboutPlatform({
      id: 0,
      lang: {
        ar: {
          titleOne: 'Built For Enterprise',
          desc: `Locus Dispatch Management Platform is an integrated ecosystem of interconnected modules for order, 
          carrier, contract, dispatch, and driver management. As a comprehensive, Al-driven logistics management 
          software, it streamlines complex supply chain operations across hundreds of constraints like route 
          restrictions, hours of service, cost, choice and availability of carriers, and more. The platform is highly intuitive 
          and meets key enterprise-level needs for scale, security, and compliance.`,
          rateList: [
            {
              id: 0,
              stars: 'http://localhost:8080/uploads/aboutPlatform/stars.png',
              title:
                'Locus is a very powerful yet simple and intuitive platform',
            },
            {
              id: 1,
              stars: 'http://localhost:8080/uploads/aboutPlatform/stars.png',
              title:
                'Locus association with Popular Food delivery app - A success story!',
            },
            {
              id: 2,
              stars: 'http://localhost:8080/uploads/aboutPlatform/stars.png',
              title: 'Excellent Product for Vehicle Management and Tracking',
            },
            {
              id: 3,
              stars: 'http://localhost:8080/uploads/aboutPlatform/stars.png',
              title: 'Robust Product and Smart Implementation team',
            },
          ],
          titleTow: 'Locus Dispatch Management Platform Built for EnterPrise',
          propList: [
            {
              id: 0,
              title: 'Fulfillment Automation',
              list: [
                {
                  id: 0,
                  img: 'http://localhost:8080/uploads/avenues/icon-last-mile-excellence.svg',
                  name: 'Order Management',
                },
                {
                  id: 1,
                  img: 'http://localhost:8080/uploads/avenues/icon-last-mile-excellence.svg',
                  name: 'Delivery Linked Checkout',
                },
              ],
            },
            {
              id: 1,
              title: 'Dispatch Planning',
              list: [
                {
                  id: 0,
                  img: 'http://localhost:8080/uploads/avenues/icon-last-mile-excellence.svg',
                  name: 'Hub Operations',
                },
                {
                  id: 1,
                  img: 'http://localhost:8080/uploads/avenues/icon-last-mile-excellence.svg',
                  name: 'Capacity Management ',
                },
                {
                  id: 2,
                  img: 'http://localhost:8080/uploads/avenues/icon-last-mile-excellence.svg',
                  name: 'Route Planning',
                },
              ],
            },
            {
              id: 2,
              title: 'Delivery Orchestration',
              list: [
                {
                  id: 0,
                  img: 'http://localhost:8080/uploads/avenues/icon-last-mile-excellence.svg',
                  name: 'Transporter Management',
                },
                {
                  id: 1,
                  img: 'http://localhost:8080/uploads/avenues/icon-last-mile-excellence.svg',
                  name: 'ShipFlex',
                },
              ],
            },
            {
              id: 3,
              title: 'Track & Trace',
              list: [
                {
                  id: 0,
                  img: 'http://localhost:8080/uploads/avenues/icon-last-mile-excellence.svg',
                  name: 'Driver Companion App',
                },
                {
                  id: 1,
                  img: 'http://localhost:8080/uploads/avenues/icon-last-mile-excellence.svg',
                  name: 'Control Tower ',
                },
                {
                  id: 2,
                  img: 'http://localhost:8080/uploads/avenues/icon-last-mile-excellence.svg',
                  name: 'Tracking Page',
                },
              ],
            },
            {
              id: 4,
              title: 'Analytics & Insights',
              list: [
                {
                  id: 0,
                  img: 'http://localhost:8080/uploads/avenues/icon-last-mile-excellence.svg',
                  name: 'Business Insights',
                },
                {
                  id: 1,
                  img: 'http://localhost:8080/uploads/avenues/icon-last-mile-excellence.svg',
                  name: 'Location Analytics',
                },
              ],
            },
          ],
        },
        en: {
          titleOne: 'Built For Enterprise',
          desc: `Locus Dispatch Management Platform is an integrated ecosystem of interconnected modules for order, 
          carrier, contract, dispatch, and driver management. As a comprehensive, Al-driven logistics management 
          software, it streamlines complex supply chain operations across hundreds of constraints like route 
          restrictions, hours of service, cost, choice and availability of carriers, and more. The platform is highly intuitive 
          and meets key enterprise-level needs for scale, security, and compliance.`,
          rateList: [
            {
              id: 0,
              stars: 'http://localhost:8080/uploads/aboutPlatform/stars.png',
              title:
                'Locus is a very powerful yet simple and intuitive platform',
            },
            {
              id: 1,
              stars: 'http://localhost:8080/uploads/aboutPlatform/stars.png',
              title:
                'Locus association with Popular Food delivery app - A success story!',
            },
            {
              id: 2,
              stars: 'http://localhost:8080/uploads/aboutPlatform/stars.png',
              title: 'Excellent Product for Vehicle Management and Tracking',
            },
            {
              id: 3,
              stars: 'http://localhost:8080/uploads/aboutPlatform/stars.png',
              title: 'Robust Product and Smart Implementation team',
            },
          ],
          titleTow: 'Locus Dispatch Management Platform Built for EnterPrise',
          propList: [
            {
              id: 0,
              title: 'Fulfillment Automation',
              list: [
                {
                  id: 0,
                  img: 'http://localhost:8080/uploads/avenues/icon-last-mile-excellence.svg',
                  name: 'Order Management',
                },
                {
                  id: 1,
                  img: 'http://localhost:8080/uploads/avenues/icon-last-mile-excellence.svg',
                  name: 'Delivery Linked Checkout',
                },
              ],
            },
            {
              id: 1,
              title: 'Dispatch Planning',
              list: [
                {
                  id: 0,
                  img: 'http://localhost:8080/uploads/avenues/icon-last-mile-excellence.svg',
                  name: 'Hub Operations',
                },
                {
                  id: 1,
                  img: 'http://localhost:8080/uploads/avenues/icon-last-mile-excellence.svg',
                  name: 'Capacity Management ',
                },
                {
                  id: 2,
                  img: 'http://localhost:8080/uploads/avenues/icon-last-mile-excellence.svg',
                  name: 'Route Planning',
                },
              ],
            },
            {
              id: 2,
              title: 'Delivery Orchestration',
              list: [
                {
                  id: 0,
                  img: 'http://localhost:8080/uploads/avenues/icon-last-mile-excellence.svg',
                  name: 'Transporter Management',
                },
                {
                  id: 1,
                  img: 'http://localhost:8080/uploads/avenues/icon-last-mile-excellence.svg',
                  name: 'ShipFlex',
                },
              ],
            },
            {
              id: 3,
              title: 'Track & Trace',
              list: [
                {
                  id: 0,
                  img: 'http://localhost:8080/uploads/avenues/icon-last-mile-excellence.svg',
                  name: 'Driver Companion App',
                },
                {
                  id: 1,
                  img: 'http://localhost:8080/uploads/avenues/icon-last-mile-excellence.svg',
                  name: 'Control Tower ',
                },
                {
                  id: 2,
                  img: 'http://localhost:8080/uploads/avenues/icon-last-mile-excellence.svg',
                  name: 'Tracking Page',
                },
              ],
            },
            {
              id: 4,
              title: 'Analytics & Insights',
              list: [
                {
                  id: 0,
                  img: 'http://localhost:8080/uploads/avenues/icon-last-mile-excellence.svg',
                  name: 'Business Insights',
                },
                {
                  id: 1,
                  img: 'http://localhost:8080/uploads/avenues/icon-last-mile-excellence.svg',
                  name: 'Location Analytics',
                },
              ],
            },
          ],
        },
        cr: {
          titleOne: 'Built For Enterprise',
          desc: `Locus Dispatch Management Platform is an integrated ecosystem of interconnected modules for order, 
          carrier, contract, dispatch, and driver management. As a comprehensive, Al-driven logistics management 
          software, it streamlines complex supply chain operations across hundreds of constraints like route 
          restrictions, hours of service, cost, choice and availability of carriers, and more. The platform is highly intuitive 
          and meets key enterprise-level needs for scale, security, and compliance.`,
          rateList: [
            {
              id: 0,
              stars: 'http://localhost:8080/uploads/aboutPlatform/stars.png',
              title:
                'Locus is a very powerful yet simple and intuitive platform',
            },
            {
              id: 1,
              stars: 'http://localhost:8080/uploads/aboutPlatform/stars.png',
              title:
                'Locus association with Popular Food delivery app - A success story!',
            },
            {
              id: 2,
              stars: 'http://localhost:8080/uploads/aboutPlatform/stars.png',
              title: 'Excellent Product for Vehicle Management and Tracking',
            },
            {
              id: 3,
              stars: 'http://localhost:8080/uploads/aboutPlatform/stars.png',
              title: 'Robust Product and Smart Implementation team',
            },
          ],
          titleTow: 'Locus Dispatch Management Platform Built for EnterPrise',
          propList: [
            {
              id: 0,
              title: 'Fulfillment Automation',
              list: [
                {
                  id: 0,
                  img: 'http://localhost:8080/uploads/avenues/icon-last-mile-excellence.svg',
                  name: 'Order Management',
                },
                {
                  id: 1,
                  img: 'http://localhost:8080/uploads/avenues/icon-last-mile-excellence.svg',
                  name: 'Delivery Linked Checkout',
                },
              ],
            },
            {
              id: 1,
              title: 'Dispatch Planning',
              list: [
                {
                  id: 0,
                  img: 'http://localhost:8080/uploads/avenues/icon-last-mile-excellence.svg',
                  name: 'Hub Operations',
                },
                {
                  id: 1,
                  img: 'http://localhost:8080/uploads/avenues/icon-last-mile-excellence.svg',
                  name: 'Capacity Management ',
                },
                {
                  id: 2,
                  img: 'http://localhost:8080/uploads/avenues/icon-last-mile-excellence.svg',
                  name: 'Route Planning',
                },
              ],
            },
            {
              id: 2,
              title: 'Delivery Orchestration',
              list: [
                {
                  id: 0,
                  img: 'http://localhost:8080/uploads/avenues/icon-last-mile-excellence.svg',
                  name: 'Transporter Management',
                },
                {
                  id: 1,
                  img: 'http://localhost:8080/uploads/avenues/icon-last-mile-excellence.svg',
                  name: 'ShipFlex',
                },
              ],
            },
            {
              id: 3,
              title: 'Track & Trace',
              list: [
                {
                  id: 0,
                  img: 'http://localhost:8080/uploads/avenues/icon-last-mile-excellence.svg',
                  name: 'Driver Companion App',
                },
                {
                  id: 1,
                  img: 'http://localhost:8080/uploads/avenues/icon-last-mile-excellence.svg',
                  name: 'Control Tower ',
                },
                {
                  id: 2,
                  img: 'http://localhost:8080/uploads/avenues/icon-last-mile-excellence.svg',
                  name: 'Tracking Page',
                },
              ],
            },
            {
              id: 4,
              title: 'Analytics & Insights',
              list: [
                {
                  id: 0,
                  img: 'http://localhost:8080/uploads/avenues/icon-last-mile-excellence.svg',
                  name: 'Business Insights',
                },
                {
                  id: 1,
                  img: 'http://localhost:8080/uploads/avenues/icon-last-mile-excellence.svg',
                  name: 'Location Analytics',
                },
              ],
            },
          ],
        },
      },
      certificatesLine:
        'http://localhost:8080/uploads/aboutPlatform/bottom-line.png',
    });
    defaultAboutPlatform.save();
    console.log(
      '\x1b[33m$$-\x1b[0m',
      `About Platform is created successfully.`,
    );
  } else {
    console.log('\x1b[33m$$-\x1b[0m', `About Platform is exist.`);
  }
};
