import mongoose from 'mongoose';

const platformTransform = new mongoose.Schema(
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

export const PlatformTransform = mongoose.model(
  'PlatformTransform',
  platformTransform,
);
export const createDefaultPlatformTransform = async () => {
  const defaults = await PlatformTransform.findOne({});
  if (!defaults) {
    const defaultPlatformTransform = new PlatformTransform({
      id: 0,
      img: 'http://localhost:8080/uploads/platformTransforms/Transform.png',
      lang: {
        ar: {
          title: 'حوّل الميل الأخير لديك في 7 دقائق فقط!',
          desc: 'أنت على بعد 7 دقائق قصيرة من الارتقاء بمستوى الميل الأخير لديك. تم تصميم هذا التقييم لمساعدتك في تحديد نقاط القوة الحالية لمؤسستك والكشف عن فرص تطوير جديدة في الميل الأخير.',
          button: {
            text: 'ابدأ التقييم',
            link: 'www.google.com',
          },
        },
        en: {
          title: 'Transform Your Last Mile in Just 7 Minutes!',
          desc: `You're 7 short minutes away from leveling-up your last mile.
          this assessment is designed to help you identify your
           enterprise' current strengths and uncover new development
            opportunities in the last mile.`,
          button: {
            text: 'Take the Assessment',
            link: 'www.google.com',
          },
        },
        cr: {
          title: 'گۆڕینی کۆتای پەیەندەکانت تەنها لە ٧ خولەکە!',
          desc: `تۆ تەنها ٧ خولەکە بەردەستە بۆ پەرەسەندانی کۆتای پەیەندەکانت.
          ئەم تاقیگەیە دروست کراوە بۆ یارمەتیدانی تۆ بۆ دیاری کردنی 
          هەرمەکانت بە شێوەیەکی نوێ و دۆزینەوەی پەیوەندیدانی نوێ بەرەوە بە کۆتای پەیەندەکان.`,
          button: {
            text: 'تاقیکردنەوەی تاقیگەرەکان',
            link: 'www.google.com',
          },
        },
      },
    });
    defaultPlatformTransform.save();
    console.log(
      '\x1b[33m$$-\x1b[0m',
      `Platform Transform is created successfully.`,
    );
  } else {
    console.log('\x1b[33m$$-\x1b[0m', `Platform Transform is exist.`);
  }
};
