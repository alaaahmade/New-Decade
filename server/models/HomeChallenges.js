import mongoose from 'mongoose';
// import { db } from '../database/index.js';

const homeChallenges = new mongoose.Schema(
  {
    id: {
      type: Number,
    },
    lang: {
      type: Object,
    },
    img: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

export const HomeChallenges = mongoose.model('HomeChallenges', homeChallenges);
export const createDefaultChallenges = async () => {
  const defaults = await HomeChallenges.findOne({});
  if (!defaults) {
    const defaultChallenges = new HomeChallenges({
      id: 0,
      img: 'http://localhost:8080/uploads/challenges/assessment-image.webp',
      lang: {
        en: {
          titleOne: 'Last-mile Logistics Challenges holding back Your',
          span: 'Growth',
          titleTow: '?',
          descOne: `Our unique Last-Mile Maturity Assessment will lead the way! In just seven minutes, you'll get.`,
          descTow: `This complimentary, assessment is your gateway to enhancing last mile logistics, scaling effectively, improving customer retention, and turning exceptional fulfillment into a competitive edge.`,
          buttonOne: {
            text: 'Take The Assessment',
            link: 'www.google.com',
          },
          buttonTow: {
            text: 'Download Report',
            link: 'www.google.com',
          },
          list: [
            {
              id: 0,
              text: 'A detailed analysis of your last mile capabilities',
            },
            {
              id: 1,
              text: 'Thorough benchmarking against industry standers',
            },
            {
              id: 2,
              text: 'A customized report full of actionable recommendations',
            },
          ],
        },
        ar: {
          titleOne: 'تحديات الخدمات اللوجستية في الميل الأخير تعيق',
          span: 'نموك',
          titleTow: '؟',
          descOne: `تقييم النضج الفريد للميل الأخير سيوجهك! في سبع دقائق فقط، ستحصل على التالي.`,
          descTow: `هذا التقييم المجاني هو بوابتك لتعزيز الخدمات اللوجستية في الميل الأخير، التوسع بكفاءة، تحسين الاحتفاظ بالعملاء، وتحويل الإنجاز الاستثنائي إلى ميزة تنافسية.`,
          buttonOne: {
            text: 'ابدأ التقييم الآن',
            link: 'www.google.com',
          },
          buttonTow: {
            text: 'تحميل التقرير',
            link: 'www.google.com',
          },
          list: [
            {
              id: 0,
              text: 'تحليل مفصل لقدراتك في الميل الأخير',
            },
            {
              id: 1,
              text: 'مقارنة شاملة مع المعايير الصناعية',
            },
            {
              id: 2,
              text: 'تقرير مخصص مليء بتوصيات قابلة للتنفيذ',
            },
          ],
        },
        cr: {
          titleOne:
            'هەڵە و چالاکیەکانی لۆجیستیکی مەترسییەکانی دوایین کە دەگرنەوە',
          span: 'گەشەکە',
          titleTow: '؟',
          descOne: `هەڵسەنگاندنی تایبەتی پەڕەسەنی کۆتایی ڕێگەیەکت دەدات! تەنها لە حەوت خولەکدا، ئەم زانیارییانە دەگریت.`,
          descTow: `ئەم هەڵسەنگاندنە بە خۆڕاییە و دەبێتە دەرگایەکت بۆ باشترکردنی خزمەتگوزارییەکانی کۆتایی ڕێ، بە بەرزبوونەوەی چارەسەر، پاراستنی گەورەی موشتەری، و گۆڕینی تەواوکردنی تایبەت بۆ بەشێکی پێشکەوتوو.`,
          buttonOne: {
            text: 'دەستپێبکە بە هەڵسەنگاندن',
            link: 'www.google.com',
          },
          buttonTow: {
            text: 'داگرتنی راپۆرت',
            link: 'www.google.com',
          },
          list: [
            {
              id: 0,
              text: 'توێژینەوەی ورد بۆ توانایەکانی کۆتایی ڕێیەکت',
            },
            {
              id: 1,
              text: 'پێوانەکردن بە وردییەوە لەگەڵ ستانداردی پەیوەندیدار',
            },
            {
              id: 2,
              text: 'راپۆرتێکی تایبەتی پڕ لە پێشنیارە کارییەکان',
            },
          ],
        },
      },
    });

    defaultChallenges.save();
    console.log('\x1b[33m$$-\x1b[0m', `Challenges is created successfully.`);
  } else {
    console.log('\x1b[33m$$-\x1b[0m', `Challenges is exist.`);
  }
};
