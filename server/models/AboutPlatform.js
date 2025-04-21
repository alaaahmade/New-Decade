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
          titleOne: 'مصمم للمؤسسات',
          desc: `منصة إدارة التوصيل Locus هي نظام بيئي متكامل من الوحدات المترابطة لإدارة الطلبات،
          وشركات النقل، والعقود، والتوصيل، والسائقين. كبرنامج شامل لإدارة اللوجستيات مدفوع بالذكاء الاصطناعي،
          يعمل على تبسيط العمليات المعقدة في سلسلة التوريد مع مئات القيود مثل قيود الطرق،
          وساعات العمل، والتكلفة، والاختيار وتوفر شركات النقل، وغيرها. المنصة بديهية للغاية
          وتلبي الاحتياجات الرئيسية للمؤسسات من حيث التوسع، والأمان، والامتثال.`,
          rateList: [
            {
              id: 0,
              stars: 'http://localhost:8080/uploads/aboutPlatform/stars.png',
              title: 'Locus منصة قوية جداً وسهلة الاستخدام وبديهية',
            },
            {
              id: 1,
              stars: 'http://localhost:8080/uploads/aboutPlatform/stars.png',
              title: 'تعاون Locus مع تطبيق توصيل الطعام الشهير - قصة نجاح!',
            },
            {
              id: 2,
              stars: 'http://localhost:8080/uploads/aboutPlatform/stars.png',
              title: 'منتج ممتاز لإدارة وتتبع المركبات',
            },
            {
              id: 3,
              stars: 'http://localhost:8080/uploads/aboutPlatform/stars.png',
              title: 'منتج قوي وفريق تنفيذ ذكي',
            },
          ],
          titleTow: 'منصة إدارة التوصيل Locus مصممة للمؤسسات',
          propList: [
            {
              id: 0,
              title: 'أتمتة التنفيذ',
              list: [
                {
                  id: 0,
                  img: 'http://localhost:8080/uploads/avenues/icon-last-mile-excellence.svg',
                  name: 'إدارة الطلبات',
                },
                {
                  id: 1,
                  img: 'http://localhost:8080/uploads/avenues/icon-last-mile-excellence.svg',
                  name: 'الدفع المرتبط بالتوصيل',
                },
              ],
            },
            {
              id: 1,
              title: 'تخطيط التوصيل',
              list: [
                {
                  id: 0,
                  img: 'http://localhost:8080/uploads/avenues/icon-last-mile-excellence.svg',
                  name: 'عمليات المحور',
                },
                {
                  id: 1,
                  img: 'http://localhost:8080/uploads/avenues/icon-last-mile-excellence.svg',
                  name: 'إدارة السعة',
                },
                {
                  id: 2,
                  img: 'http://localhost:8080/uploads/avenues/icon-last-mile-excellence.svg',
                  name: 'تخطيط المسارات',
                },
              ],
            },
            {
              id: 2,
              title: 'تنظيم التوصيل',
              list: [
                {
                  id: 0,
                  img: 'http://localhost:8080/uploads/avenues/icon-last-mile-excellence.svg',
                  name: 'إدارة الناقلين',
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
              title: 'التتبع والمراقبة',
              list: [
                {
                  id: 0,
                  img: 'http://localhost:8080/uploads/avenues/icon-last-mile-excellence.svg',
                  name: 'تطبيق السائق',
                },
                {
                  id: 1,
                  img: 'http://localhost:8080/uploads/avenues/icon-last-mile-excellence.svg',
                  name: 'برج التحكم',
                },
                {
                  id: 2,
                  img: 'http://localhost:8080/uploads/avenues/icon-last-mile-excellence.svg',
                  name: 'صفحة التتبع',
                },
              ],
            },
            {
              id: 4,
              title: 'التحليلات والرؤى',
              list: [
                {
                  id: 0,
                  img: 'http://localhost:8080/uploads/avenues/icon-last-mile-excellence.svg',
                  name: 'رؤى الأعمال',
                },
                {
                  id: 1,
                  img: 'http://localhost:8080/uploads/avenues/icon-last-mile-excellence.svg',
                  name: 'تحليلات المواقع',
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
          titleOne: 'دیزاین کراوە بۆ دامەزراوە گەورەکان',
          desc: `سەرچاوەی بەڕێوەبردنی گەیاندن Locus سیستەمێکی تەواوە بۆ بەڕێوەبردنی داواکاریەکان،
          کۆمپانیای گەیاندن، پەیوەندیدانی مەعاهەدانەکان، گەیاندن و شۆفێرەکان. 
          وەک ڕازیکاریەکی تەواوی بەڕێوەبردنی لۆجیستیکی بە هێزێکی زانست و زیرەکییەوە، 
          کارەکانی بە سەختی زنجیرەی پەخشی بە ئاسانترین شێوە ئەنجام دەدات بە صدها مەرجی جۆراوجۆر 
          وەک ڕێگای گەیاندن، کاتەکار، نرخی گەیاندن، هەلبژاردن و بەردەستبوونی گەیاندەرەکان، و هتد.
          ئەم سەرچاوەیە زۆر بەکارهێنەرپەسەندە و پێویستی دامەزراوە گەورەکان پێدادات بۆ ڕەزامەندی لە 
          گەورەبوون، پاراستن، و پابەندبوون.`,
          rateList: [
            {
              id: 0,
              stars: 'http://localhost:8080/uploads/aboutPlatform/stars.png',
              title: 'Locus سەرچاوەیەکی زۆر بەهێز و بەکارهێنانی ئاسانە',
            },
            {
              id: 1,
              stars: 'http://localhost:8080/uploads/aboutPlatform/stars.png',
              title:
                'هاوبەشکاری Locus لەگەڵ بەرنامەی گەیاندنی خواردن - چیرۆکی سەرکەوتن!',
            },
            {
              id: 2,
              stars: 'http://localhost:8080/uploads/aboutPlatform/stars.png',
              title: 'بەرنامەیەکی باش بۆ بەڕێوەبردن و چاودێری ئۆتۆمبێلەکان',
            },
            {
              id: 3,
              stars: 'http://localhost:8080/uploads/aboutPlatform/stars.png',
              title: 'بەرنامەیەکی بەهێز و تیمی جێبەجێکردنی زیرەک',
            },
          ],
          titleTow:
            'سەرچاوەی بەڕێوەبردنی گەیاندن Locus دیزاین کراوە بۆ دامەزراوە گەورەکان',
          propList: [
            {
              id: 0,
              title: 'خۆکارکردنی جێبەجێکردن',
              list: [
                {
                  id: 0,
                  img: 'http://localhost:8080/uploads/avenues/icon-last-mile-excellence.svg',
                  name: 'بەڕێوەبردنی داواکاریەکان',
                },
                {
                  id: 1,
                  img: 'http://localhost:8080/uploads/avenues/icon-last-mile-excellence.svg',
                  name: 'پارەدان پەیوەندیدار بە گەیاندن',
                },
              ],
            },
            {
              id: 1,
              title: 'پلانی گەیاندن',
              list: [
                {
                  id: 0,
                  img: 'http://localhost:8080/uploads/avenues/icon-last-mile-excellence.svg',
                  name: 'کارکردنی سەنتەرەکان',
                },
                {
                  id: 1,
                  img: 'http://localhost:8080/uploads/avenues/icon-last-mile-excellence.svg',
                  name: 'بەڕێوەبردنی گنجایش',
                },
                {
                  id: 2,
                  img: 'http://localhost:8080/uploads/avenues/icon-last-mile-excellence.svg',
                  name: 'پلانی ڕێگاکان',
                },
              ],
            },
            {
              id: 2,
              title: 'ڕێکخستنی گەیاندن',
              list: [
                {
                  id: 0,
                  img: 'http://localhost:8080/uploads/avenues/icon-last-mile-excellence.svg',
                  name: 'بەڕێوەبردنی گەیاندەرەکان',
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
              title: 'چاودێری و پشکنین',
              list: [
                {
                  id: 0,
                  img: 'http://localhost:8080/uploads/avenues/icon-last-mile-excellence.svg',
                  name: 'بەرنامەی شۆفێر',
                },
                {
                  id: 1,
                  img: 'http://localhost:8080/uploads/avenues/icon-last-mile-excellence.svg',
                  name: 'بەرزی کۆنترۆڵ',
                },
                {
                  id: 2,
                  img: 'http://localhost:8080/uploads/avenues/icon-last-mile-excellence.svg',
                  name: 'پەڕەی چاودێری',
                },
              ],
            },
            {
              id: 4,
              title: 'زانست و ئاماژەکان',
              list: [
                {
                  id: 0,
                  img: 'http://localhost:8080/uploads/avenues/icon-last-mile-excellence.svg',
                  name: 'ئاماژەکانی کاروبار',
                },
                {
                  id: 1,
                  img: 'http://localhost:8080/uploads/avenues/icon-last-mile-excellence.svg',
                  name: 'زانستی شوێنەکان',
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
