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
          title: 'ميزة لوكاس',
          list: [
            {
              id: 0,
              name: 'وحدات',
              desc: 'تتكون منصتنا من وحدات مصممة بعناية تحقق التميز في عمليات الخدمات اللوجستية الشاملة. كما يتيح التطوير المعياري الابتكار المستمر والتحسينات الخوارزمية ليكون العملاء على أهبة الاستعداد لمواجهة الحقائق الجديدة في السوق.',
              img: 'http://localhost:8080/uploads/platformEdge/image-leverage-targeted-insights.webp',
            },
            {
              id: 1,
              name: 'متكامل',
              desc: 'تتكون منصتنا من وحدات مصممة بعناية تحقق التميز في عمليات الخدمات اللوجستية الشاملة. كما يتيح التطوير المعياري الابتكار المستمر والتحسينات الخوارزمية ليكون العملاء على أهبة الاستعداد لمواجهة الحقائق الجديدة في السوق.',
              img: 'http://localhost:8080/uploads/platformEdge/image-leverage-targeted-insights.webp',
            },
            {
              id: 2,
              name: 'مُمكّن بواسطة واجهة برمجة التطبيقات',
              desc: 'تتكون منصتنا من وحدات مصممة بعناية تحقق التميز في عمليات الخدمات اللوجستية الشاملة. كما يتيح التطوير المعياري الابتكار المستمر والتحسينات الخوارزمية ليكون العملاء على أهبة الاستعداد لمواجهة الحقائق الجديدة في السوق.',
              img: 'http://localhost:8080/uploads/platformEdge/image-leverage-targeted-insights.webp',
            },
            {
              id: 3,
              name: 'آمن',
              desc: 'تتكون منصتنا من وحدات مصممة بعناية تحقق التميز في عمليات الخدمات اللوجستية الشاملة. كما يتيح التطوير المعياري الابتكار المستمر والتحسينات الخوارزمية ليكون العملاء على أهبة الاستعداد لمواجهة الحقائق الجديدة في السوق.',
              img: 'http://localhost:8080/uploads/platformEdge/image-leverage-targeted-insights.webp',
            },
            {
              id: 4,
              name: 'الدعم',
              desc: 'تتكون منصتنا من وحدات مصممة بعناية تحقق التميز في عمليات الخدمات اللوجستية الشاملة. كما يتيح التطوير المعياري الابتكار المستمر والتحسينات الخوارزمية ليكون العملاء على أهبة الاستعداد لمواجهة الحقائق الجديدة في السوق.',
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
          title: 'پەیوەندیدانی لوکۆس',
          list: [
            {
              id: 0,
              name: 'مەودولە',
              desc: `پلاتفۆرمەکانەمان پەیوەندیدانی بە شێوەیەکی هەستیاری دروست کراوە 
              کە فەرمی تایبەتمەندەکان فەرمی ئەوڵەتی دروست دەکاتەوە. فەرمی تایبەتمەندەکان فەرمی کاریگەری لە شێوەی پەیوەندیدانی بەرزەکانەمان وە تایبەتمەندی ڕوونی تایبەتی بەرزەکانەمانە.`,
              img: 'http://localhost:8080/uploads/platformEdge/image-leverage-targeted-insights.webp',
            },
            {
              id: 1,
              name: 'هەریمەند',
              desc: `پلاتفۆرمەکانەمان پەیوەندیدانی بە شێوەیەکی هەستیاری دروست کراوە 
              کە فەرمی تایبەتمەندەکان فەرمی ئەوڵەتی دروست دەکاتەوە. فەرمی تایبەتمەندەکان فەرمی کاریگەری لە شێوەی پەیوەندیدانی بەرزەکانەمان وە تایبەتمەندی ڕوونی تایبەتی بەرزەکانەمانە.`,
              img: 'http://localhost:8080/uploads/platformEdge/image-leverage-targeted-insights.webp',
            },
            {
              id: 2,
              name: 'API-کەری کارگێڕی',
              desc: `پلاتفۆرمەکانەمان پەیوەندیدانی بە شێوەیەکی هەستیاری دروست کراوە 
              کە فەرمی تایبەتمەندەکان فەرمی ئەوڵەتی دروست دەکاتەوە. فەرمی تایبەتمەندەکان فەرمی کاریگەری لە شێوەی پەیوەندیدانی بەرزەکانەمان وە تایبەتمەندی ڕوونی تایبەتی بەرزەکانەمانە.`,
              img: 'http://localhost:8080/uploads/platformEdge/image-leverage-targeted-insights.webp',
            },
            {
              id: 3,
              name: 'پەیوەندیدانی پەیوەندیدانە',
              desc: `پلاتفۆرمەکانەمان پەیوەندیدانی بە شێوەیەکی هەستیاری دروست کراوە 
              کە فەرمی تایبەتمەندەکان فەرمی ئەوڵەتی دروست دەکاتەوە. فەرمی تایبەتمەندەکان فەرمی کاریگەری لە شێوەی پەیوەندیدانی بەرزەکانەمان وە تایبەتمەندی ڕوونی تایبەتی بەرزەکانەمانە.`,
              img: 'http://localhost:8080/uploads/platformEdge/image-leverage-targeted-insights.webp',
            },
            {
              id: 4,
              name: 'پەیوەندیدانی یارمەتیدانی',
              desc: `پلاتفۆرمەکانەمان پەیوەندیدانی بە شێوەیەکی هەستیاری دروست کراوە 
              کە فەرمی تایبەتمەندەکان فەرمی ئەوڵەتی دروست دەکاتەوە. فەرمی تایبەتمەندەکان فەرمی کاریگەری لە شێوەی پەیوەندیدانی بەرزەکانەمان وە تایبەتمەندی ڕوونی تایبەتی بەرزەکانەمانە.`,
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
