import mongoose from 'mongoose';
// import { db } from '../database/index.js';

const aboutView = new mongoose.Schema(
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

export const AboutView = mongoose.model('AboutView', aboutView);
export const createDefaultAbout = async () => {
  const defaults = await AboutView.findOne({});
  if (!defaults) {
    const defaultAbout = new AboutView({
      id: 0,
      lang: {
        ar: {
          title: 'في برنامج إدارة الخدمات اللوجستية لجميع المراحل',
          span: 'الرائد',
          descOne: `Locus هو برنامج لإدارة عمليات التوصيل من الطلب حتى التسليم يتعامل مع تعقيد المرحلة الأولى،
          والمرحلة الوسطى، وجميع مراحل الخدمات اللوجستية، مدعومًا بالذكاء الاصطناعي واتخاذ القرار المبني على البيانات.
          نحن الخيار الأول لجميع احتياجاتك اللوجستية والتنفيذية،
          بما في ذلك إدارة الأسطول، إدارة الطلبات، تخطيط التوصيل، تحديد المسارات،
          والتحليلات للحصول على رؤى، والمزيد.`,
          descTow: `Locus يمكّن الأساطيل المملوكة، المتعاقدة، الخارجية، والمختلطة من التوصيل بشكل أكثر كفاءة
          مع الحفاظ على الحد الأدنى من الموارد. كل ذلك مع تجاوز توقعات العملاء من حيث الراحة، المرونة،
          والتنفيذ الموثوق. نهجنا المبني على الـ API يجعلنا أفضل مساعد تكميلي
          لنظام TMS، OMS، WMS، أو ERP الحالي لديك من خلال تكامل سلس.`,
          buttonOne: {
            text: 'اعرف المزيد',
            link: 'www.google.com',
          },
          buttonTow: {
            text: 'احصل على تجربة',
            link: 'www.google.com',
          },
        },
        en: {
          title: ' in All-mile Logistics Management SoftWare',
          span: 'Leader ',
          descOne: `Locus is an order-to-delivery dispatch management software that handles the complexity of first mile,
          mid mile, and all-mile Logistics with AI-Powered, data-driven
          decision-making. we are the first choice for all your logistics and fulfillment needs,
          including fleet management , order management, dispatch planning, routing, and
          analytics for insight, and more `,
          descTow: `Locus empowers captive, contracted, outsourced and hybrid fleets to deliver mor
          while running lean. All while exceeding customer expectations for convenient, flexible,
          and predictable fulfillment. Our API-first approach also makes us the best copilot to
          your existing TMS, OMS, WMS or ERP with seamless integrations.`,
          buttonOne: {
            text: 'Learn more',
            link: 'www.google.com',
          },
          buttonTow: {
            text: 'Get a Demo',
            link: 'www.google.com',
          },
        },
        cr: {
          title: 'لە ناو ئەپڵیکەیشنی بەڕێوەبردنی لۆجیستیك بۆ هەموو قۆناغەکان',
          span: 'پێشوەڕەو',
          descOne: `Locus ئەپڵیکەیشنی بەڕێوەبردنی داواکاری بۆ گەیاندنە کە کێشەکانی قۆناغی یەکەم،
          ناوەڕاست، و هەموو قۆناغەکانی لۆجیستیک بە زیرەکیی ئیشکراوە و بریتی لە 
          بەرگریکردن بەسەر داتا و بڕیارگرتنی زانستی چارەسەر دەکات. 
          ئەمە یەکەم هەڵبژاردنە بۆ هەموو پێویستی گەیاندن و پڕکردنەوەکانت، 
          وەک بەڕێوەبردنی فلیت، بەڕێوەبردنی داواکاریەکان، پلانی جێبەجێکردن، ڕێگەپێدان، 
          و ڕاپۆرت بۆ تێگەیشتن، و زیاتر.`,
          descTow: `Locus هەڵسوکەوتی فلیتەکانی خاوەن، پەیوەندیدار، دراوە و تێکەڵکراو 
          دەبێتە ڕێگەیەکی بەرچاو بۆ جێبەجێکردنی زۆر بە چاکی 
          و بە تەنیشتی کەم. هەروەها، ئەوە لە چاوەڕوانیەکانی کڕیارەکان 
          بەرزتر دەبێت بۆ گەیاندنێکی ئاسان، گوڕاو، و پێشبینی‌پێکراو. 
          نزیکبوونی‌مان بە API وەک هاوبەشی باشترینە بۆ 
          TMS، OMS، WMS یان ERP کە پێشترت هەیە بە تەگەیشتنێکی سەرهێڵ.`,
          buttonOne: {
            text: 'زیاتر بزانە',
            link: 'www.google.com',
          },
          buttonTow: {
            text: 'وەرگرتنی نمونە',
            link: 'www.google.com',
          },
        },
      },
      image: 'http://localhost:8080/uploads/about/defualt/video-thumbnail.webp',
    });

    defaultAbout.save();
    console.log('\x1b[33m$$-\x1b[0m', `About is created successfully.`);
  } else {
    console.log('\x1b[33m$$-\x1b[0m', `About is exist.`);
  }
};
