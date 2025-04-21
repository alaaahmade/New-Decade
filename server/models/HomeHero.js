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
        ar: {
          titleOne: 'النمو،',
          titleTow: 'مُحقق.',
          description: `حقق التميز في جميع مراحل الخدمات اللوجستية من خلال منصتنا الجاهزة للاستخدام الواقعي
          التي تقدم تجربة عميل مميزة وإدارة فعالة للتوصيل. قم بتنمية عمليات التنفيذ لديك وأتمتة المهام الأساسية
          لتحقيق كفاءة لا مثيل لها، خفض التكاليف، وتعزيز ولاء العملاء من خلال حل إدارة التوصيل القابل للتوسعة والوحدات.`,
          featured: 'غارتنر',
          buttonOne: {
            text: 'استكشف المنصة',
            link: 'www.google.com',
          },
          buttonTow: {
            text: 'شاهد العروض التوضيحية',
            link: 'www.google.com',
          },
        },
        cr: {
          titleOne: 'گەشە،',
          titleTow: 'گەیەندرا.',
          description: `بەکاربهێنانی پەیامێکی ڕاستەقینە بۆ خزمەتگوزارییەکانی لۆجیستیکی هەموو دووروبەر، 
          ئاستی پێشکەوتن زیاد بکە لە ڕێگەی پلاتفۆڕمی بەکارهێنانی موشتەری و بەڕێوەبردنی گواستنەوە. 
          پڕکردنەوەکانی خۆت بەرز بکە، پرۆسە گرنگەکان خۆکاریکردنەوە بکە بۆ کاریگەرایەتییەکی نایاب، 
          خەرجییەکان کەم بکە و بە هاوپێچی موشتەرییەوە بەستەر دروست بکە بە پەیجەکەی بەشداربوو و گەشەپێدەر.`,
          featured: 'Gartner',
          buttonOne: {
            text: 'گەڕانەوەی پلاتفۆڕم',
            link: 'www.google.com',
          },
          buttonTow: {
            text: 'بینینی دەیمۆکان',
            link: 'www.google.com',
          },
        },
      },
      image: 'http://localhost:8080/uploads/hero/1745239489795-596588674.webp',
    });

    defaultHero.save();
    console.log('\x1b[33m$$-\x1b[0m', `Hero is created successfully.`);
  } else {
    console.log('\x1b[33m$$-\x1b[0m', `Hero is exist.`);
  }
};
