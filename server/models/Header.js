import mongoose from 'mongoose';
// import { db } from '../database/index.js';

const header = new mongoose.Schema(
  {
    id: {
      type: Number,
    },
    logo: {
      type: String,
    },
    smallLogo: {
      type: String,
    },
    lang: {
      type: Object,
    },
    whatsNumber: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

export const Header = mongoose.model('Header', header);

export const createDefaultHeader = async () => {
  const defaults = await Header.findOne({ id: 0 });
  if (!defaults) {
    const defaultHeader = new Header({
      id: 0,
      logo: 'http://localhost:8080/uploads/header/logo.png',
      smallLogo: 'http://localhost:8080/uploads/header/smallLogo.png',
      whatsNumber: '9724149120',
      lang: {
        ar: {
          list: [
            {
              title: 'Platform',
              subheader: 'Platform',
              path: '/platform',
            },

            {
              title: 'Industries',
              path: '/industries',
              children: [
                {
                  items: [
                    {
                      title: 'Fulfillment Automation',
                      path: '/industries/Fulfillment',
                      children: [
                        {
                          items: [
                            { title: 'Fulfillment 33Automation2', path: '#' },
                            { title: 'Dispatch 33Planning2', path: '#' },
                            { title: 'Delivery 33Orchestration2', path: '#' },
                            { title: 'Track and 33Trace2', path: '#' },
                            { title: 'Analytics 33and Insights2', path: '#' },
                          ],
                        },
                      ],
                    },
                    { title: 'Dispatch Planning', path: '#' },
                    { title: 'Delivery Orchestration', path: '#' },
                    { title: 'Track and Trace', path: '#' },
                    { title: 'Analytics and Insights', path: '#' },
                  ],
                },
              ],
            },
            { title: 'Resources', path: '/Resources' },
            { title: 'Company', path: '/Company' },
            { title: 'Customers', path: '/Customers' },
            { title: 'Guides', path: '/Guides' },
          ],
          headLine: {
            text: 'Transform yor last mile with personalized, actionable insights in just seven minutes!',
            link: {
              text: 'Take our Assessment',
              link: 'https//www.google.com',
            },
          },
        },
        en: {
          list: [
            {
              title: 'Platform',
              subheader: 'Platform',
              path: '/platform',
            },

            {
              title: 'Industries',
              path: '/industries',
              children: [
                {
                  items: [
                    {
                      title: 'Fulfillment Automation',
                      path: '/industries/Fulfillment',
                      children: [
                        {
                          items: [
                            { title: 'Fulfillment 33Automation2', path: '#' },
                            { title: 'Dispatch 33Planning2', path: '#' },
                            { title: 'Delivery 33Orchestration2', path: '#' },
                            { title: 'Track and 33Trace2', path: '#' },
                            { title: 'Analytics 33and Insights2', path: '#' },
                          ],
                        },
                      ],
                    },
                    { title: 'Dispatch Planning', path: '#' },
                    { title: 'Delivery Orchestration', path: '#' },
                    { title: 'Track and Trace', path: '#' },
                    { title: 'Analytics and Insights', path: '#' },
                  ],
                },
              ],
            },
            { title: 'Resources', path: '/Resources' },
            { title: 'Company', path: '/Company' },
            { title: 'Customers', path: '/Customers' },
            { title: 'Guides', path: '/Guides' },
          ],
          headLine: {
            text: 'Transform yor last mile with personalized, actionable insights in just seven minutes!',
            link: {
              text: 'Take our Assessment',
              link: 'https//www.google.com',
            },
          },
        },
        cr: {
          list: [
            {
              title: 'Platform',
              subheader: 'Platform',
              path: '/platform',
            },

            {
              title: 'Industries',
              path: '/industries',
              children: [
                {
                  items: [
                    {
                      title: 'Fulfillment Automation',
                      path: '/industries/Fulfillment',
                      children: [
                        {
                          items: [
                            { title: 'Fulfillment 33Automation2', path: '#' },
                            { title: 'Dispatch 33Planning2', path: '#' },
                            { title: 'Delivery 33Orchestration2', path: '#' },
                            { title: 'Track and 33Trace2', path: '#' },
                            { title: 'Analytics 33and Insights2', path: '#' },
                          ],
                        },
                      ],
                    },
                    { title: 'Dispatch Planning', path: '#' },
                    { title: 'Delivery Orchestration', path: '#' },
                    { title: 'Track and Trace', path: '#' },
                    { title: 'Analytics and Insights', path: '#' },
                  ],
                },
              ],
            },
            { title: 'Resources', path: '/Resources' },
            { title: 'Company', path: '/Company' },
            { title: 'Customers', path: '/Customers' },
            { title: 'Guides', path: '/Guides' },
          ],
          headLine: {
            text: 'Transform yor last mile with personalized, actionable insights in just seven minutes!',
            link: {
              text: 'Take our Assessment',
              link: 'https//www.google.com',
            },
          },
        },
      },
    });
    defaultHeader.save();
    console.log('\x1b[33m$$-\x1b[0m', `Header is created successfully.`);
  } else {
    console.log('\x1b[33m$$-\x1b[0m', `Header is exist.`);
  }
};
