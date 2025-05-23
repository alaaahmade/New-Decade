import mongoose from 'mongoose';
// import { db } from '../database/index.js';

const platformForAll = new mongoose.Schema(
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

export const PlatformForAll = mongoose.model('PlatformForAll', platformForAll);

export const createDefaultPlatformForAll = async () => {
  const defaults = await PlatformForAll.findOne({ id: 0 });
  if (!defaults) {
    const defaultPlatformForAll = new PlatformForAll({
      id: 0,
      lang: {
        ar: {
          title: 'منصة واحدة لعمليات التسليم',
          list: [
            {
              id: 0,
              name: 'أتمتة التنفيذ',
              descOne:
                'ارتقِ برحلة شراء العميل من خلال خيارات توصيل قابلة للتكيف وفقًا للتوقيت والموقع والتفاصيل.',
              descTow:
                'ضمان الاستخدام الفعال للموارد ومستويات الخدمة المثلى من خلال التعيين الفعال للطلبات الخاصة بعمليات الاستلام والتسليم والإلغاء والإرجاع باستخدام خوارزميات متطورة. كل ذلك عبر وحدات تنفيذ متعددة وأنواع أساطيل ووحدات أعمال.',
              imgOne:
                'http://localhost:8080/uploads/platformForAll/image-secure-customer-loyalty.webp',
              imgTow:
                'http://localhost:8080/uploads/platformForAll/image-leverage-targeted-insights.webp',
            },
            {
              id: 1,
              name: 'تخطيط الإرسال',
              descOne:
                'ارتقِ برحلة شراء العميل من خلال خيارات توصيل قابلة للتكيف وفقًا للتوقيت والموقع والتفاصيل.',
              descTow:
                'ضمان الاستخدام الفعال للموارد ومستويات الخدمة المثلى من خلال التعيين الفعال للطلبات الخاصة بعمليات الاستلام والتسليم والإلغاء والإرجاع باستخدام خوارزميات متطورة. كل ذلك عبر وحدات تنفيذ متعددة وأنواع أساطيل ووحدات أعمال.',
              imgOne:
                'http://localhost:8080/uploads/platformForAll/image-secure-customer-loyalty.webp',
              imgTow:
                'http://localhost:8080/uploads/platformForAll/image-leverage-targeted-insights.webp',
            },
            {
              id: 2,
              name: 'تنظيم التسليم',
              descOne:
                'ارتقِ برحلة شراء العميل من خلال خيارات توصيل قابلة للتكيف وفقًا للتوقيت والموقع والتفاصيل.',
              descTow:
                'ضمان الاستخدام الفعال للموارد ومستويات الخدمة المثلى من خلال التعيين الفعال للطلبات الخاصة بعمليات الاستلام والتسليم والإلغاء والإرجاع باستخدام خوارزميات متطورة. كل ذلك عبر وحدات تنفيذ متعددة وأنواع أساطيل ووحدات أعمال.',
              imgOne:
                'http://localhost:8080/uploads/platformForAll/image-secure-customer-loyalty.webp',
              imgTow:
                'http://localhost:8080/uploads/platformForAll/image-leverage-targeted-insights.webp',
            },
            {
              id: 3,
              name: 'التتبع والرصد',
              descOne:
                'ارتقِ برحلة شراء العميل من خلال خيارات توصيل قابلة للتكيف وفقًا للتوقيت والموقع والتفاصيل.',
              descTow:
                'ضمان الاستخدام الفعال للموارد ومستويات الخدمة المثلى من خلال التعيين الفعال للطلبات الخاصة بعمليات الاستلام والتسليم والإلغاء والإرجاع باستخدام خوارزميات متطورة. كل ذلك عبر وحدات تنفيذ متعددة وأنواع أساطيل ووحدات أعمال.',
              imgOne:
                'http://localhost:8080/uploads/platformForAll/image-secure-customer-loyalty.webp',
              imgTow:
                'http://localhost:8080/uploads/platformForAll/image-leverage-targeted-insights.webp',
            },
            {
              id: 4,
              name: 'تحليلات متقدمة',
              descOne:
                'ارتقِ برحلة شراء العميل من خلال خيارات توصيل قابلة للتكيف وفقًا للتوقيت والموقع والتفاصيل.',
              descTow:
                'ضمان الاستخدام الفعال للموارد ومستويات الخدمة المثلى من خلال التعيين الفعال للطلبات الخاصة بعمليات الاستلام والتسليم والإلغاء والإرجاع باستخدام خوارزميات متطورة. كل ذلك عبر وحدات تنفيذ متعددة وأنواع أساطيل ووحدات أعمال.',
              imgOne:
                'http://localhost:8080/uploads/platformForAll/image-secure-customer-loyalty.webp',
              imgTow:
                'http://localhost:8080/uploads/platformForAll/image-leverage-targeted-insights.webp',
            },
          ],
        },
        en: {
          title: 'One Platform for Deliveries',
          list: [
            {
              id: 0,
              name: 'Fulfillment Automation',
              descOne: `Elevate the customer purchase journey with adaptable options for delivery 
              according to timing, location, and details.`,
              descTow: `Ensure efficient use of resources and optimal service levels by efficiently assigning
               orders for pickups, deliveries, cancellations, and returns with sophisticated
                algorithms. All across multiple fulfillment module, fleet types, and business units.`,
              imgOne:
                'http://localhost:8080/uploads/platformForAll/image-secure-customer-loyalty.webp',
              imgTow:
                'http://localhost:8080/uploads/platformForAll/image-leverage-targeted-insights.webp',
            },
            {
              id: 1,
              name: 'Dispatch Planning',
              descOne: `Elevate the customer purchase journey with adaptable options for delivery 
              according to timing, location, and details.`,
              descTow: `Ensure efficient use of resources and optimal service levels by efficiently assigning
               orders for pickups, deliveries, cancellations, and returns with sophisticated
                algorithms. All across multiple fulfillment module, fleet types, and business units.`,
              imgOne:
                'http://localhost:8080/uploads/platformForAll/image-secure-customer-loyalty.webp',
              imgTow:
                'http://localhost:8080/uploads/platformForAll/image-leverage-targeted-insights.webp',
            },
            {
              id: 2,
              name: 'Delivery Orchestration',
              descOne: `Elevate the customer purchase journey with adaptable options for delivery 
              according to timing, location, and details.`,
              descTow: `Ensure efficient use of resources and optimal service levels by efficiently assigning
               orders for pickups, deliveries, cancellations, and returns with sophisticated
                algorithms. All across multiple fulfillment module, fleet types, and business units.`,
              imgOne:
                'http://localhost:8080/uploads/platformForAll/image-secure-customer-loyalty.webp',
              imgTow:
                'http://localhost:8080/uploads/platformForAll/image-leverage-targeted-insights.webp',
            },
            {
              id: 3,
              name: 'Track and Trace',
              descOne: `Elevate the customer purchase journey with adaptable options for delivery 
              according to timing, location, and details.`,
              descTow: `Ensure efficient use of resources and optimal service levels by efficiently assigning
               orders for pickups, deliveries, cancellations, and returns with sophisticated
                algorithms. All across multiple fulfillment module, fleet types, and business units.`,
              imgOne:
                'http://localhost:8080/uploads/platformForAll/image-secure-customer-loyalty.webp',
              imgTow:
                'http://localhost:8080/uploads/platformForAll/image-leverage-targeted-insights.webp',
            },
            {
              id: 4,
              name: 'Advanced Analytics',
              descOne: `Elevate the customer purchase journey with adaptable options for delivery 
              according to timing, location, and details.`,
              descTow: `Ensure efficient use of resources and optimal service levels by efficiently assigning
               orders for pickups, deliveries, cancellations, and returns with sophisticated
                algorithms. All across multiple fulfillment module, fleet types, and business units.`,
              imgOne:
                'http://localhost:8080/uploads/platformForAll/image-secure-customer-loyalty.webp',
              imgTow:
                'http://localhost:8080/uploads/platformForAll/image-leverage-targeted-insights.webp',
            },
          ],
        },
        cr: {
          title: 'یەک پلاتفۆرم بۆ فەرمی تایبەتمەندەکان',
          list: [
            {
              id: 0,
              name: 'خۆکارکردنی فەرمی تایبەتمەند',
              descOne: `پەیوەندیدانی گەڕاندنەوەی کڕینی کڕیار بە هەڵوەشاندنی هەڵبژاردنە تایبەتمەندەکان بەرەوە بەرەوە کە پەیوەندیدانیەکان لە کاتی، شوێن، و جزئیاتەکانە.`,
              descTow: `تایبەتمەندەکان بەرەوە بە ڕوونی تایبەتمەندی پەیوەندیدانی فەرمی بە هەڵوەشاندنی پەیوەندیدانیەکان وە بە کارگەریەکان تایبەتمەندەکان بەرزەکان بەرزەکان وە بەکارهێنانیەکان هەموو جیاوازی تایبەتمەندەکان دروست دەکەن.`,
              imgOne:
                'http://localhost:8080/uploads/platformForAll/image-secure-customer-loyalty.webp',
              imgTow:
                'http://localhost:8080/uploads/platformForAll/image-leverage-targeted-insights.webp',
            },
            {
              id: 1,
              name: 'پلانەکردنی فەرمی تایبەتمەندەکان',
              descOne: `پەیوەندیدانی گەڕاندنەوەی کڕینی کڕیار بە هەڵوەشاندنی هەڵبژاردنە تایبەتمەندەکان بەرەوە بەرەوە کە پەیوەندیدانیەکان لە کاتی، شوێن، و جزئیاتەکانە.`,
              descTow: `تایبەتمەندەکان بەرەوە بە ڕوونی تایبەتمەندی پەیوەندیدانی فەرمی بە هەڵوەشاندنی پەیوەندیدانیەکان وە بە کارگەریەکان تایبەتمەندەکان بەرزەکان بەرزەکان وە بەکارهێنانیەکان هەموو جیاوازی تایبەتمەندەکان دروست دەکەن.`,
              imgOne:
                'http://localhost:8080/uploads/platformForAll/image-secure-customer-loyalty.webp',
              imgTow:
                'http://localhost:8080/uploads/platformForAll/image-leverage-targeted-insights.webp',
            },
            {
              id: 2,
              name: 'رەوەندا فەرمی تایبەتمەندەکان',
              descOne: `پەیوەندیدانی گەڕاندنەوەی کڕینی کڕیار بە هەڵوەشاندنی هەڵبژاردنە تایبەتمەندەکان بەرەوە بەرەوە کە پەیوەندیدانیەکان لە کاتی، شوێن، و جزئیاتەکانە.`,
              descTow: `تایبەتمەندەکان بەرەوە بە ڕوونی تایبەتمەندی پەیوەندیدانی فەرمی بە هەڵوەشاندنی پەیوەندیدانیەکان وە بە کارگەریەکان تایبەتمەندەکان بەرزەکان بەرزەکان وە بەکارهێنانیەکان هەموو جیاوازی تایبەتمەندەکان دروست دەکەن.`,
              imgOne:
                'http://localhost:8080/uploads/platformForAll/image-secure-customer-loyalty.webp',
              imgTow:
                'http://localhost:8080/uploads/platformForAll/image-leverage-targeted-insights.webp',
            },
            {
              id: 3,
              name: 'تۆمارکردن و ڕەوەندنەوە',
              descOne: `پەیوەندیدانی گەڕاندنەوەی کڕینی کڕیار بە هەڵوەشاندنی هەڵبژاردنە تایبەتمەندەکان بەرەوە بەرەوە کە پەیوەندیدانیەکان لە کاتی، شوێن، و جزئیاتەکانە.`,
              descTow: `تایبەتمەندەکان بەرەوە بە ڕوونی تایبەتمەندی پەیوەندیدانی فەرمی بە هەڵوەشاندنی پەیوەندیدانیەکان وە بە کارگەریەکان تایبەتمەندەکان بەرزەکان بەرزەکان وە بەکارهێنانیەکان هەموو جیاوازی تایبەتمەندەکان دروست دەکەن.`,
              imgOne:
                'http://localhost:8080/uploads/platformForAll/image-secure-customer-loyalty.webp',
              imgTow:
                'http://localhost:8080/uploads/platformForAll/image-leverage-targeted-insights.webp',
            },
            {
              id: 4,
              name: 'فێڕەنگەی پەیوەندیدانی تایبەتمەندەکان',
              descOne: `پەیوەندیدانی گەڕاندنەوەی کڕینی کڕیار بە هەڵوەشاندنی هەڵبژاردنە تایبەتمەندەکان بەرەوە بەرەوە کە پەیوەندیدانیەکان لە کاتی، شوێن، و جزئیاتەکانە.`,
              descTow: `تایبەتمەندەکان بەرەوە بە ڕوونی تایبەتمەندی پەیوەندیدانی فەرمی بە هەڵوەشاندنی پەیوەندیدانیەکان وە بە کارگەریەکان تایبەتمەندەکان بەرزەکان بەرزەکان وە بەکارهێنانیەکان هەموو جیاوازی تایبەتمەندەکان دروست دەکەن.`,
              imgOne:
                'http://localhost:8080/uploads/platformForAll/image-secure-customer-loyalty.webp',
              imgTow:
                'http://localhost:8080/uploads/platformForAll/image-leverage-targeted-insights.webp',
            },
          ],
        },
      },
    });
    defaultPlatformForAll.save();
    console.log(
      '\x1b[33m$$-\x1b[0m',
      `Platform ForAll is created successfully.`,
    );
  } else {
    console.log('\x1b[33m$$-\x1b[0m', `Platform ForAll is exist.`);
  }
};
