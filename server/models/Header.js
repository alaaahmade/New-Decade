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
      logo: 'http://localhost:8080/uploads/header/1745235773978-532815789.png',
      smallLogo: 'http://localhost:8080/uploads/header/smallLogo.png',
      whatsNumber: '9724149120',
      lang: {
        ar: {
          list: [
            {
              title: 'المنصة',
              subheader: 'المنصة',
              path: '/platform',
            },
            {
              title: 'القطاعات',
              path: '/industries',
              children: [
                {
                  items: [
                    {
                      title: 'أتمتة التنفيذ',
                      path: '/industries/Fulfillment',
                      children: [
                        {
                          items: [
                            { title: 'أتمتة التنفيذ 2', path: '#' },
                            { title: 'تخطيط الإرسال 2', path: '#' },
                            { title: 'تنسيق التوصيل 2', path: '#' },
                            { title: 'التتبع والتعقب 2', path: '#' },
                            { title: 'التحليلات والرؤى 2', path: '#' },
                          ],
                        },
                      ],
                    },
                    { title: 'تخطيط الإرسال', path: '#' },
                    { title: 'تنسيق التوصيل', path: '#' },
                    { title: 'التتبع والتعقب', path: '#' },
                    { title: 'التحليلات والرؤى', path: '#' },
                  ],
                },
              ],
            },
            { title: 'الموارد', path: '/Resources' },
            { title: 'الشركة', path: '/Company' },
            { title: 'العملاء', path: '/Customers' },
            { title: 'الأدلة', path: '/Guides' },
          ],
          headLine: {
            text: 'حوّل الميل الأخير لديك من خلال رؤى مخصصة وقابلة للتنفيذ في سبع دقائق فقط!',
            link: {
              text: 'ابدأ التقييم الآن',
              link: 'https://www.google.com', // أصلح الرابط هنا لأنه كان ناقص بروتوكول http/https
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
              title: 'پلاتفۆرم',
              subheader: 'پلاتفۆرم',
              path: '/platform',
            },
            {
              title: 'پیشەکان',
              path: '/industries',
              children: [
                {
                  items: [
                    {
                      title: 'خۆکاریکردنی پەیڕەوکردن',
                      path: '/industries/Fulfillment',
                      children: [
                        {
                          items: [
                            { title: 'خۆکاریکردنی پەیڕەوکردن 2', path: '#' },
                            { title: 'پلاندانانی نێردن 2', path: '#' },
                            { title: 'ڕێکخستنی گەیاندن 2', path: '#' },
                            { title: 'شانە و گەڕان 2', path: '#' },
                            { title: 'آنالیز و بینه‌ڕەوانییەکان 2', path: '#' },
                          ],
                        },
                      ],
                    },
                    { title: 'پلاندانانی نێردن', path: '#' },
                    { title: 'ڕێکخستنی گەیاندن', path: '#' },
                    { title: 'شانە و گەڕان', path: '#' },
                    { title: 'آنالیز و بینه‌ڕەوانییەکان', path: '#' },
                  ],
                },
              ],
            },
            { title: 'سەرچاوەکان', path: '/Resources' },
            { title: 'کۆمپانیا', path: '/Company' },
            { title: 'کڕیارەکان', path: '/Customers' },
            { title: 'ڕێنماییەکان', path: '/Guides' },
          ],
          headLine: {
            text: 'دوایین بەشەکەت گۆڕە بە ئاگادارییەکی کەسی و کاریگەری تەنها لە ٧ خولەکدا!',
            link: {
              text: 'تاقیکردنەوەکەمان بکە',
              link: 'https://www.google.com',
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
