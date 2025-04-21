import mongoose from 'mongoose';
// import { db } from '../database/index.js';

const homeLatestInsights = new mongoose.Schema(
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

export const HomeLatestInsights = mongoose.model(
  'HomeLatestInsights',
  homeLatestInsights,
);

export const createDefaultLatestInsights = async () => {
  const defaults = await HomeLatestInsights.findOne({});
  if (!defaults) {
    const defaultLatestInsights = new HomeLatestInsights({
      id: 0,
      lang: {
        en: {
          title: 'Latest Locus',
          span: 'Insights ',
          insights: [
            {
              id: 0,
              title: 'wightpaper',
              description:
                'A Comprehensive Guide to Effective Returns Management',
              link: 'www.google.come',
              img: 'http://localhost:8080/uploads/insights/resource-image-01.webp',
            },
            {
              id: 1,
              title: 'wightpaper',
              description:
                'Buying vs. Building Logistics Software: How to Choose?',
              link: 'www.google.come',
              img: 'http://localhost:8080/uploads/insights/resource-image-02.webp',
            },
            {
              id: 2,
              title: 'e-book',
              description: "America's Omnichannel Retail Landscape",
              link: 'www.google.come',
              img: 'http://localhost:8080/uploads/insights/resource-image-03.webp',
            },
            {
              id: 3,
              title: 'e-book',
              description:
                'Establish Your Right To Win: The Definitive CEP Playbook',
              link: 'www.google.come',
              img: 'http://localhost:8080/uploads/insights/resource-image-04.webp',
            },
          ],
        },
        ar: {
          title: 'أحدث رؤى',
          span: 'Locus',
          insights: [
            {
              id: 0,
              title: 'ورقة بيضاء',
              description: 'دليل شامل لإدارة فعالة للمرتجعات',
              link: 'www.google.come',
              img: 'http://localhost:8080/uploads/insights/resource-image-01.webp',
            },
            {
              id: 1,
              title: 'ورقة بيضاء',
              description: 'الشراء مقابل بناء برمجيات لوجستية: كيف تختار؟',
              link: 'www.google.come',
              img: 'http://localhost:8080/uploads/insights/resource-image-02.webp',
            },
            {
              id: 2,
              title: 'كتاب إلكتروني',
              description: 'مشهد التجزئة متعدد القنوات في أمريكا',
              link: 'www.google.come',
              img: 'http://localhost:8080/uploads/insights/resource-image-03.webp',
            },
            {
              id: 3,
              title: 'كتاب إلكتروني',
              description: 'ثبت حقك في الفوز: دليل CEP الشامل',
              link: 'www.google.come',
              img: 'http://localhost:8080/uploads/insights/resource-image-04.webp',
            },
          ],
        },
        cr: {
          title: 'دواین بینینیەکان',
          span: 'Locus',
          insights: [
            {
              id: 0,
              title: 'ڕاپۆرتی سپی',
              description: 'ڕێنمایەکی گشتی بۆ بەڕێوەبردنی گەڕاندنەوەی کارا',
              link: 'www.google.come',
              img: 'http://localhost:8080/uploads/insights/resource-image-01.webp',
            },
            {
              id: 1,
              title: 'ڕاپۆرتی سپی',
              description:
                'کڕین یان دروستکردنی نەرم‌افزاری لۆجیستیکی: چۆن دیاریکردن؟',
              link: 'www.google.come',
              img: 'http://localhost:8080/uploads/insights/resource-image-02.webp',
            },
            {
              id: 2,
              title: 'کتێبی ئەلیکترۆنی',
              description: 'دیمەنی کڕینەوەی زنجیرەیەکانی بازاڕی ئەمەریکا',
              link: 'www.google.come',
              img: 'http://localhost:8080/uploads/insights/resource-image-03.webp',
            },
            {
              id: 3,
              title: 'کتێبی ئەلیکترۆنی',
              description: 'متمانەی خۆت ڕەسەن بکە: ڕێنمای CEP یەکی تەواو',
              link: 'www.google.come',
              img: 'http://localhost:8080/uploads/insights/resource-image-04.webp',
            },
          ],
        },
      },
    });

    defaultLatestInsights.save();
    console.log(
      '\x1b[33m$$-\x1b[0m',
      `Latest Insights is created successfully.`,
    );
  } else {
    console.log('\x1b[33m$$-\x1b[0m', `Latest Insights is exist.`);
  }
};
