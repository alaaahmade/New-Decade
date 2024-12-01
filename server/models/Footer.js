import mongoose from 'mongoose';
// import { db } from '../database/index.js';

const footer = new mongoose.Schema(
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

export const Footer = mongoose.model('Footer', footer);
export const createDefaultFooter = async () => {
  const defaults = await Footer.findOne({});
  if (!defaults) {
    const defaultFooter = new Footer({
      id: 0,
      lang: {
        ar: {
          subscribeTitle: 'Subscribe to our newsletter',
          subscribeButton: 'Subscribe',
          platForm: [
            { title: 'Platform Overview', path: 'paths.about', id: 0 },
            {
              title: 'FulFillment Automation',
              path: 'paths.contact',
              id: 1,
            },
            { title: 'Dispatch Planning', path: 'paths.faqs', id: 2 },
            { title: 'Delivery Orchestration', path: 'paths.faqs', id: 3 },
            { title: 'Track and Trace', path: 'paths.faqs', id: 3 },
            { title: 'Analytics and Insight', path: 'paths.faqs', id: 4 },
          ],
          industries: [
            { title: 'Retail', path: '#' },
            { title: '3PL & CEP', path: '#' },
            { title: 'E-commerce', path: '#' },
            { title: 'E-grocery', path: '#' },
            { title: 'Industrial Services', path: '#' },
            { title: 'Manufacturing', path: '#' },
            { title: 'Home Services', path: '#' },
          ],
          resources: [
            { title: 'Whitepapers', path: 'mailto: info@mersal.be' },
            { title: 'Case Studies', path: 'tel: +32489570091' },
            { title: 'Infographics', path: 'tel: +970599949472' },
            { title: 'E-books', path: 'tel: +970567949472' },
            { title: 'Blogs', path: 'tel: +970567949472' },
            { title: 'Events & webinars', path: 'tel: +970567949472' },
            { title: 'Videos', path: 'tel: +970567949472' },
            { title: 'Glossary', path: 'tel: +970567949472' },
          ],
          company: [
            { title: 'About Us', path: 'mailto: info@mersal.be' },
            { title: 'Customers', path: 'tel: +32489570091' },
            { title: 'Careers', path: 'tel: +970599949472' },
            { title: 'Partners', path: 'tel: +970567949472' },
            { title: 'News & Press', path: 'tel: +970567949472' },
            { title: 'Trust & security', path: 'tel: +970567949472' },
            { title: 'Contact Us', path: 'tel: +970567949472' },
          ],
        },
        en: {
          subscribeTitle: 'Subscribe to our newsletter',
          subscribeButton: 'Subscribe',
          platForm: [
            { title: 'Platform Overview', path: 'paths.about', id: 0 },
            {
              title: 'FulFillment Automation',
              path: 'paths.contact',
              id: 1,
            },
            { title: 'Dispatch Planning', path: 'paths.faqs', id: 2 },
            { title: 'Delivery Orchestration', path: 'paths.faqs', id: 3 },
            { title: 'Track and Trace', path: 'paths.faqs', id: 3 },
            { title: 'Analytics and Insight', path: 'paths.faqs', id: 4 },
          ],
          industries: [
            { title: 'Retail', path: '#' },
            { title: '3PL & CEP', path: '#' },
            { title: 'E-commerce', path: '#' },
            { title: 'E-grocery', path: '#' },
            { title: 'Industrial Services', path: '#' },
            { title: 'Manufacturing', path: '#' },
            { title: 'Home Services', path: '#' },
          ],
          resources: [
            { title: 'Whitepapers', path: 'mailto: info@mersal.be' },
            { title: 'Case Studies', path: 'tel: +32489570091' },
            { title: 'Infographics', path: 'tel: +970599949472' },
            { title: 'E-books', path: 'tel: +970567949472' },
            { title: 'Blogs', path: 'tel: +970567949472' },
            { title: 'Events & webinars', path: 'tel: +970567949472' },
            { title: 'Videos', path: 'tel: +970567949472' },
            { title: 'Glossary', path: 'tel: +970567949472' },
          ],
          company: [
            { title: 'About Us', path: 'mailto: info@mersal.be' },
            { title: 'Customers', path: 'tel: +32489570091' },
            { title: 'Careers', path: 'tel: +970599949472' },
            { title: 'Partners', path: 'tel: +970567949472' },
            { title: 'News & Press', path: 'tel: +970567949472' },
            { title: 'Trust & security', path: 'tel: +970567949472' },
            { title: 'Contact Us', path: 'tel: +970567949472' },
          ],
        },
        cr: {
          subscribeTitle: 'Subscribe to our newsletter',
          subscribeButton: 'Subscribe',
          platForm: [
            { title: 'Platform Overview', path: 'paths.about', id: 0 },
            {
              title: 'FulFillment Automation',
              path: 'paths.contact',
              id: 1,
            },
            { title: 'Dispatch Planning', path: 'paths.faqs', id: 2 },
            { title: 'Delivery Orchestration', path: 'paths.faqs', id: 3 },
            { title: 'Track and Trace', path: 'paths.faqs', id: 3 },
            { title: 'Analytics and Insight', path: 'paths.faqs', id: 4 },
          ],
          industries: [
            { title: 'Retail', path: '#' },
            { title: '3PL & CEP', path: '#' },
            { title: 'E-commerce', path: '#' },
            { title: 'E-grocery', path: '#' },
            { title: 'Industrial Services', path: '#' },
            { title: 'Manufacturing', path: '#' },
            { title: 'Home Services', path: '#' },
          ],
          resources: [
            { title: 'Whitepapers', path: 'mailto: info@mersal.be' },
            { title: 'Case Studies', path: 'tel: +32489570091' },
            { title: 'Infographics', path: 'tel: +970599949472' },
            { title: 'E-books', path: 'tel: +970567949472' },
            { title: 'Blogs', path: 'tel: +970567949472' },
            { title: 'Events & webinars', path: 'tel: +970567949472' },
            { title: 'Videos', path: 'tel: +970567949472' },
            { title: 'Glossary', path: 'tel: +970567949472' },
          ],
          company: [
            { title: 'About Us', path: 'mailto: info@mersal.be' },
            { title: 'Customers', path: 'tel: +32489570091' },
            { title: 'Careers', path: 'tel: +970599949472' },
            { title: 'Partners', path: 'tel: +970567949472' },
            { title: 'News & Press', path: 'tel: +970567949472' },
            { title: 'Trust & security', path: 'tel: +970567949472' },
            { title: 'Contact Us', path: 'tel: +970567949472' },
          ],
        },
      },
    });
    defaultFooter.save();
    console.log('\x1b[33m$$-\x1b[0m', `Footer is created successfully.`);
  } else {
    console.log('\x1b[33m$$-\x1b[0m', `Footer is exist.`);
  }
};
