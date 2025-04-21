import mongoose from 'mongoose';

const customerWords = new mongoose.Schema(
  {
    id: {
      type: Number,
    },
    lang: {
      type: Object,
    },
    rateOne: {
      type: String,
    },
    rateTow: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

export const CustomerWords = mongoose.model('customerWords', customerWords);
export const createDefaultCustomerWords = async () => {
  const defaults = await CustomerWords.findOne({});
  if (!defaults) {
    const defaultCustomerWords = new CustomerWords({
      id: 0,
      rateOne: 'http://localhost:8080/uploads/words/logo-gartner-peer.svg',
      rateTow: 'http://localhost:8080/uploads/words/logo-capterra-G2.svg',
      lang: {
        ar: {
          title: 'كلمة من',
          span: 'عملائنا',
          disc: 'شركات رائدة في أكثر من 30 دولة تمكّن النمو في العالم الحقيقي',
          buttonOne: {
            text: 'قصص العملاء',
            link: 'www.google.com',
          },
          buttonTow: {
            text: 'شاهد الفيديو',
            link: 'www.google.com',
          },
          words: [
            {
              id: 0,
              image: 'http://localhost:8080/uploads/words/logo-bluedart.png',
              paragraph: `تحقيق التميز في الخدمات اللوجستية في جميع المراحل باستخدام منصتنا
              لإدارة تجربة العملاء والتوصيل الجاهزة للعالم الحقيقي. نمِّ عملية التنفيذ لديك
              وقم بأتمتة العمليات الأساسية لتحقيق كفاءة لا مثيل لها، وخفض التكاليف، وتعزيز ولاء العملاء
              باستخدام حل إدارة التوصيل القابل للتطوير والتخصيص.`,
              name: 'Juster Correia',
              nickname: 'المدير العام - العمليات',
            },
            {
              id: 1,
              image: 'http://localhost:8080/uploads/words/logo-nestle.webp',
              paragraph: `تحقيق التميز في الخدمات اللوجستية في جميع المراحل باستخدام منصتنا
              لإدارة تجربة العملاء والتوصيل الجاهزة للعالم الحقيقي. نمِّ عملية التنفيذ لديك
              وقم بأتمتة العمليات الأساسية لتحقيق كفاءة لا مثيل لها، وخفض التكاليف، وتعزيز ولاء العملاء
              باستخدام حل إدارة التوصيل القابل للتطوير والتخصيص.`,
              name: 'Thitiphun Chress',
              nickname: 'محلل بيانات',
            },
            {
              id: 2,
              image: 'http://localhost:8080/uploads/words/logo-bluedart.png',
              paragraph: `تحقيق التميز في الخدمات اللوجستية في جميع المراحل باستخدام منصتنا
              لإدارة تجربة العملاء والتوصيل الجاهزة للعالم الحقيقي. نمِّ عملية التنفيذ لديك
              وقم بأتمتة العمليات الأساسية لتحقيق كفاءة لا مثيل لها، وخفض التكاليف، وتعزيز ولاء العملاء
              باستخدام حل إدارة التوصيل القابل للتطوير والتخصيص.`,
              name: 'Juster Correia',
              nickname: 'المدير العام - العمليات',
            },
            {
              id: 3,
              image: 'http://localhost:8080/uploads/words/logo-nestle.webp',
              paragraph: `تحقيق التميز في الخدمات اللوجستية في جميع المراحل باستخدام منصتنا
              لإدارة تجربة العملاء والتوصيل الجاهزة للعالم الحقيقي. نمِّ عملية التنفيذ لديك
              وقم بأتمتة العمليات الأساسية لتحقيق كفاءة لا مثيل لها، وخفض التكاليف، وتعزيز ولاء العملاء
              باستخدام حل إدارة التوصيل القابل للتطوير والتخصيص.`,
              name: 'Thitiphun Chress',
              nickname: 'محلل بيانات',
            },
          ],
        },
        en: {
          title: 'A word From Our',
          span: 'Customer',
          disc: 'Leading enterprises across 30+ countries on enabling real-world growth',
          buttonOne: {
            text: 'Customer Stories',
            link: 'www.google.com',
          },
          buttonTow: {
            text: 'See Video',
            link: 'www.google.com',
          },
          words: [
            {
              id: 0,
              image: 'http://localhost:8080/uploads/words/logo-bluedart.png',
              paragraph: `Enable excellence in all-mile logistics with our real-world-ready
              customer experience and dispatch management platform. Grow your fulfillment and automate key
              processes for unmatched efficiency, reduce costs, and foster customer loyalty with our 
              modular and scalable Delivery Management Solution.`,
              name: 'Juster Correia',
              nickname: 'General Manager-Operations',
            },
            {
              id: 1,
              image: 'http://localhost:8080/uploads/words/logo-nestle.webp',
              paragraph: `Enable excellence in all-mile logistics with our real-world-ready
              customer experience and dispatch management platform. Grow your fulfillment and automate key
              processes for unmatched efficiency, reduce costs, and foster customer loyalty with our 
              modular and scalable Delivery Management Solution.`,
              name: 'Thitiphun Chress',
              nickname: 'Data Analyses',
            },
            {
              id: 2,
              image: 'http://localhost:8080/uploads/words/logo-bluedart.png',
              paragraph: `Enable excellence in all-mile logistics with our real-world-ready
              customer experience and dispatch management platform. Grow your fulfillment and automate key
              processes for unmatched efficiency, reduce costs, and foster customer loyalty with our 
              modular and scalable Delivery Management Solution.`,
              name: 'Juster Correia',
              nickname: 'General Manager-Operations',
            },
            {
              id: 3,
              image: 'http://localhost:8080/uploads/words/logo-nestle.webp',
              paragraph: `Enable excellence in all-mile logistics with our real-world-ready
              customer experience and dispatch management platform. Grow your fulfillment and automate key
              processes for unmatched efficiency, reduce costs, and foster customer loyalty with our 
              modular and scalable Delivery Management Solution.`,
              name: 'Thitiphun Chress',
              nickname: 'Data Analyses',
            },
          ],
        },
        cr: {
          title: 'وشەیەک لە',
          span: 'کڕیارەکانمان',
          disc: 'کۆمپانیای سەرکەوتوو لەسەر 30+ وڵاتدا بۆ گەشەپێدانی ڕاستەقینە',
          buttonOne: {
            text: 'چیرۆکەکانی کڕیار',
            link: 'www.google.com',
          },
          buttonTow: {
            text: 'بینینی ڤیدیۆ',
            link: 'www.google.com',
          },
          words: [
            {
              id: 0,
              image: 'http://localhost:8080/uploads/words/logo-bluedart.png',
              paragraph: `سەرکەوتن لە لۆجیستیکی هەموو قۆناغەکان بە بەکارهێنانی پلاتفۆڕمی
              بەڕێوەبردنی گەیاندن و ئەزموونی کڕیار بە ئامادەیی بۆ جیهانی ڕاستەقینە.
              پڕکردنەوەی داواکاریەکان بەرز بکە، پرۆسە گرنگەکان بەشێوەی ئۆتۆماتیکی بەرەوپێبە،
              خەرجیەکان کەمبکە، و بەرگری بە کڕیارەکان بکە بە چارەسەری بەهێز و ڕێکخراو بۆ گەیاندن.`,
              name: 'Juster Correia',
              nickname: 'بەرێوەبەرێ گشتی - کارەکان',
            },
            {
              id: 1,
              image: 'http://localhost:8080/uploads/words/logo-nestle.webp',
              paragraph: `سەرکەوتن لە لۆجیستیکی هەموو قۆناغەکان بە بەکارهێنانی پلاتفۆڕمی
              بەڕێوەبردنی گەیاندن و ئەزموونی کڕیار بە ئامادەیی بۆ جیهانی ڕاستەقینە.
              پڕکردنەوەی داواکاریەکان بەرز بکە، پرۆسە گرنگەکان بەشێوەی ئۆتۆماتیکی بەرەوپێبە،
              خەرجیەکان کەمبکە، و بەرگری بە کڕیارەکان بکە بە چارەسەری بەهێز و ڕێکخراو بۆ گەیاندن.`,
              name: 'Thitiphun Chress',
              nickname: 'توێژەرەی داتا',
            },
            {
              id: 2,
              image: 'http://localhost:8080/uploads/words/logo-bluedart.png',
              paragraph: `سەرکەوتن لە لۆجیستیکی هەموو قۆناغەکان بە بەکارهێنانی پلاتفۆڕمی
              بەڕێوەبردنی گەیاندن و ئەزموونی کڕیار بە ئامادەیی بۆ جیهانی ڕاستەقینە.
              پڕکردنەوەی داواکاریەکان بەرز بکە، پرۆسە گرنگەکان بەشێوەی ئۆتۆماتیکی بەرەوپێبە،
              خەرجیەکان کەمبکە، و بەرگری بە کڕیارەکان بکە بە چارەسەری بەهێز و ڕێکخراو بۆ گەیاندن.`,
              name: 'Juster Correia',
              nickname: 'بەرێوەبەرێ گشتی - کارەکان',
            },
            {
              id: 3,
              image: 'http://localhost:8080/uploads/words/logo-nestle.webp',
              paragraph: `سەرکەوتن لە لۆجیستیکی هەموو قۆناغەکان بە بەکارهێنانی پلاتفۆڕمی
              بەڕێوەبردنی گەیاندن و ئەزموونی کڕیار بە ئامادەیی بۆ جیهانی ڕاستەقینە.
              پڕکردنەوەی داواکاریەکان بەرز بکە، پرۆسە گرنگەکان بەشێوەی ئۆتۆماتیکی بەرەوپێبە،
              خەرجیەکان کەمبکە، و بەرگری بە کڕیارەکان بکە بە چارەسەری بەهێز و ڕێکخراو بۆ گەیاندن.`,
              name: 'Thitiphun Chress',
              nickname: 'توێژەرەی داتا',
            },
          ],
        },
      },
    });

    defaultCustomerWords.save();
    console.log(
      '\x1b[33m$$-\x1b[0m',
      `Customer Words is created successfully.`,
    );
  } else {
    console.log('\x1b[33m$$-\x1b[0m', `Customer Words is exist.`);
  }
};
