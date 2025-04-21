import mongoose from 'mongoose';
// import { db } from '../database/index.js';

const homeAvenues = new mongoose.Schema(
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

export const HomeAvenues = mongoose.model('HomeAvenues', homeAvenues);

export const createDefaultAvenues = async () => {
  const defaults = await HomeAvenues.findOne({ id: 0 });
  if (!defaults) {
    const defaultHomeAvenues = new HomeAvenues({
      id: 0,
      lang: {
        en: {
          titleOne: 'Unlock',
          titleTow: 'in 5 New Avenues',
          span: 'Growth',
          desc: 'Enable excellence at every mile with our intelligent and integrated logistics management platform.',
          Avenues: [
            {
              id: 0,
              name: 'All Mile Excellence',
              img: 'http://localhost:8080/uploads/avenues/icon-last-mile-excellence.svg',
              title: 'Scale All-Mile Growth With one',
              desc: `Macke each delivery better than the last with advanced 
              algorithms that improwve with each delivery. Vastly increase the volum and efficiency bu outomating kye functions such as 
              order capture, allocation, sorting, and returns and failed deliveries.`,
              descImg:
                'http://localhost:8080/uploads/avenues/image-last-mile-excellence.webp',
              color: '#000',
            },
            {
              id: 1,
              name: 'Customer Experiance',
              img: 'http://localhost:8080/uploads/avenues/icon-customer-experience.svg',
              title: 'Scale All-Mile Growth With Tow',
              desc: `Macke each delivery better than the last with advanced 
              algorithms that improwve with each delivery. Vastly increase the volum and efficiency bu outomating kye functions such as 
              order capture, allocation, sorting, and returns and failed deliveries.`,
              descImg:
                'http://localhost:8080/uploads/avenues/image-last-mile-excellence.webp',
              color: '#0098ff',
            },
            {
              id: 2,
              name: 'Workforce Empowerment',
              img: 'http://localhost:8080/uploads/avenues/icon-workforce-empowerment.svg',
              title: 'Scale All-Mile Growth With Three',
              desc: `Macke each delivery better than the last with advanced 
              algorithms that improwve with each delivery. Vastly increase the volum and efficiency bu outomating kye functions such as 
              order capture, allocation, sorting, and returns and failed deliveries.`,
              descImg:
                'http://localhost:8080/uploads/avenues/image-last-mile-excellence.webp',
              color: '#e35e5e',
            },
            {
              id: 3,
              name: 'Advanced Analytics',
              img: 'http://localhost:8080/uploads/avenues/icon-advanced-analytics.svg',
              title: 'Scale All-Mile Growth With four',
              desc: `Macke each delivery better than the last with advanced 
              algorithms that improwve with each delivery. Vastly increase the volum and efficiency bu outomating kye functions such as 
              order capture, allocation, sorting, and returns and failed deliveries.`,
              descImg:
                'http://localhost:8080/uploads/avenues/image-last-mile-excellence.webp',
              color: '#915ee3',
            },
            {
              id: 4,
              name: 'Sustainability',
              img: 'http://localhost:8080/uploads/avenues/icon-sustainability.svg',
              title: 'Scale All-Mile Growth With five',
              desc: `Macke each delivery better than the last with advanced 
              algorithms that improwve with each delivery. Vastly increase the volum and efficiency bu outomating kye functions such as 
              order capture, allocation, sorting, and returns and failed deliveries.`,
              descImg:
                'http://localhost:8080/uploads/avenues/image-last-mile-excellence.webp',
              color: '#37c430',
            },
          ],
        },
        ar: {
          titleOne: 'افتح',
          titleTow: 'في 5 مسارات جديدة',
          span: 'النمو',
          desc: 'حقق التميز في كل مرحلة مع منصتنا الذكية والمتكاملة لإدارة الخدمات اللوجستية.',
          Avenues: [
            {
              id: 0,
              name: 'التميز في جميع المراحل',
              img: 'http://localhost:8080/uploads/avenues/icon-last-mile-excellence.svg',
              title: 'نمو شامل في جميع المراحل',
              desc: `اجعل كل عملية تسليم أفضل من السابقة من خلال خوارزميات متقدمة تتحسن مع كل تسليم. زد بشكل كبير من الحجم والكفاءة عن طريق أتمتة الوظائف الرئيسية مثل التقاط الطلبات، التخصيص، الفرز، والمرتجعات والتسليمات الفاشلة.`,
              descImg:
                'http://localhost:8080/uploads/avenues/image-last-mile-excellence.webp',
              color: '#000',
            },
            {
              id: 1,
              name: 'تجربة العملاء',
              img: 'http://localhost:8080/uploads/avenues/icon-customer-experience.svg',
              title: 'نمو شامل في جميع المراحل - اثنان',
              desc: `اجعل كل عملية تسليم أفضل من السابقة من خلال خوارزميات متقدمة تتحسن مع كل تسليم. زد بشكل كبير من الحجم والكفاءة عن طريق أتمتة الوظائف الرئيسية مثل التقاط الطلبات، التخصيص، الفرز، والمرتجعات والتسليمات الفاشلة.`,
              descImg:
                'http://localhost:8080/uploads/avenues/image-last-mile-excellence.webp',
              color: '#0098ff',
            },
            {
              id: 2,
              name: 'تمكين القوى العاملة',
              img: 'http://localhost:8080/uploads/avenues/icon-workforce-empowerment.svg',
              title: 'نمو شامل في جميع المراحل - ثلاثة',
              desc: `اجعل كل عملية تسليم أفضل من السابقة من خلال خوارزميات متقدمة تتحسن مع كل تسليم. زد بشكل كبير من الحجم والكفاءة عن طريق أتمتة الوظائف الرئيسية مثل التقاط الطلبات، التخصيص، الفرز، والمرتجعات والتسليمات الفاشلة.`,
              descImg:
                'http://localhost:8080/uploads/avenues/image-last-mile-excellence.webp',
              color: '#e35e5e',
            },
            {
              id: 3,
              name: 'التحليلات المتقدمة',
              img: 'http://localhost:8080/uploads/avenues/icon-advanced-analytics.svg',
              title: 'نمو شامل في جميع المراحل - أربعة',
              desc: `اجعل كل عملية تسليم أفضل من السابقة من خلال خوارزميات متقدمة تتحسن مع كل تسليم. زد بشكل كبير من الحجم والكفاءة عن طريق أتمتة الوظائف الرئيسية مثل التقاط الطلبات، التخصيص، الفرز، والمرتجعات والتسليمات الفاشلة.`,
              descImg:
                'http://localhost:8080/uploads/avenues/image-last-mile-excellence.webp',
              color: '#915ee3',
            },
            {
              id: 4,
              name: 'الاستدامة',
              img: 'http://localhost:8080/uploads/avenues/icon-sustainability.svg',
              title: 'نمو شامل في جميع المراحل - خمسة',
              desc: `اجعل كل عملية تسليم أفضل من السابقة من خلال خوارزميات متقدمة تتحسن مع كل تسليم. زد بشكل كبير من الحجم والكفاءة عن طريق أتمتة الوظائف الرئيسية مثل التقاط الطلبات، التخصيص، الفرز، والمرتجعات والتسليمات الفاشلة.`,
              descImg:
                'http://localhost:8080/uploads/avenues/image-last-mile-excellence.webp',
              color: '#37c430',
            },
          ],
        },
        cr: {
          titleOne: 'کراکردنەوە',
          titleTow: 'لە ٥ ڕێڕەوی نوێدا',
          span: 'گەشە',
          desc: 'باشترین کاریگەری لە هەموو قۆناغێکدا بە پلاتفۆڕمی زانستی و هاوپەیوەندیی بەڕێوەبردنی لۆجیستیکی.',
          Avenues: [
            {
              id: 0,
              name: 'باشترین کارکرد لە هەموو مەترسییەکان',
              img: 'http://localhost:8080/uploads/avenues/icon-last-mile-excellence.svg',
              title: 'گەشەکردن لە هەموو قۆناغەکان - یەکەم',
              desc: `هەر داواکردنێک باشتر بکە لە پێشووە بە بەکارهێنانی ئەلگۆریتمە پێشکەوتووەکان کە هەر کاتێک باشتر دەبن. گەشەی بەرز بکە بە کارا بوون بە گەورەیی و چالاکی لە ڕێگەی ئۆتۆماتیکی کردنی فۆنکسیۆنە سەرەکییەکان وەک داواکاری، پێدانی، پەرتکرنەوە، و گەڕانەوەی فەرمانە نەسەرکەوتووەکان.`,
              descImg:
                'http://localhost:8080/uploads/avenues/image-last-mile-excellence.webp',
              color: '#000',
            },
            {
              id: 1,
              name: 'تەجرەبەی موشتەری',
              img: 'http://localhost:8080/uploads/avenues/icon-customer-experience.svg',
              title: 'گەشەکردن لە هەموو قۆناغەکان - دووەم',
              desc: `هەر داواکردنێک باشتر بکە لە پێشووە بە بەکارهێنانی ئەلگۆریتمە پێشکەوتووەکان کە هەر کاتێک باشتر دەبن. گەشەی بەرز بکە بە کارا بوون بە گەورەیی و چالاکی لە ڕێگەی ئۆتۆماتیکی کردنی فۆنکسیۆنە سەرەکییەکان وەک داواکاری، پێدانی، پەرتکرنەوە، و گەڕانەوەی فەرمانە نەسەرکەوتووەکان.`,
              descImg:
                'http://localhost:8080/uploads/avenues/image-last-mile-excellence.webp',
              color: '#0098ff',
            },
            {
              id: 2,
              name: 'بەهێزکردنی کادری کار',
              img: 'http://localhost:8080/uploads/avenues/icon-workforce-empowerment.svg',
              title: 'گەشەکردن لە هەموو قۆناغەکان - سێیەم',
              desc: `هەر داواکردنێک باشتر بکە لە پێشووە بە بەکارهێنانی ئەلگۆریتمە پێشکەوتووەکان کە هەر کاتێک باشتر دەبن. گەشەی بەرز بکە بە کارا بوون بە گەورەیی و چالاکی لە ڕێگەی ئۆتۆماتیکی کردنی فۆنکسیۆنە سەرەکییەکان وەک داواکاری، پێدانی، پەرتکرنەوە، و گەڕانەوەی فەرمانە نەسەرکەوتووەکان.`,
              descImg:
                'http://localhost:8080/uploads/avenues/image-last-mile-excellence.webp',
              color: '#e35e5e',
            },
            {
              id: 3,
              name: 'ئانالیزە پێشکەوتووەکان',
              img: 'http://localhost:8080/uploads/avenues/icon-advanced-analytics.svg',
              title: 'گەشەکردن لە هەموو قۆناغەکان - چوارەم',
              desc: `هەر داواکردنێک باشتر بکە لە پێشووە بە بەکارهێنانی ئەلگۆریتمە پێشکەوتووەکان کە هەر کاتێک باشتر دەبن. گەشەی بەرز بکە بە کارا بوون بە گەورەیی و چالاکی لە ڕێگەی ئۆتۆماتیکی کردنی فۆنکسیۆنە سەرەکییەکان وەک داواکاری، پێدانی، پەرتکرنەوە، و گەڕانەوەی فەرمانە نەسەرکەوتووەکان.`,
              descImg:
                'http://localhost:8080/uploads/avenues/image-last-mile-excellence.webp',
              color: '#915ee3',
            },
            {
              id: 4,
              name: 'سەربەخۆیی و خاوەنکاری',
              img: 'http://localhost:8080/uploads/avenues/icon-sustainability.svg',
              title: 'گەشەکردن لە هەموو قۆناغەکان - پێنجەم',
              desc: `هەر داواکردنێک باشتر بکە لە پێشووە بە بەکارهێنانی ئەلگۆریتمە پێشکەوتووەکان کە هەر کاتێک باشتر دەبن. گەشەی بەرز بکە بە کارا بوون بە گەورەیی و چالاکی لە ڕێگەی ئۆتۆماتیکی کردنی فۆنکسیۆنە سەرەکییەکان وەک داواکاری، پێدانی، پەرتکرنەوە، و گەڕانەوەی فەرمانە نەسەرکەوتووەکان.`,
              descImg:
                'http://localhost:8080/uploads/avenues/image-last-mile-excellence.webp',
              color: '#37c430',
            },
          ],
        },
      },
    });
    defaultHomeAvenues.save();
    console.log('\x1b[33m$$-\x1b[0m', `Avenues is created successfully.`);
  } else {
    console.log('\x1b[33m$$-\x1b[0m', `Avenues is exist.`);
  }
};
