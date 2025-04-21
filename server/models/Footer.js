import mongoose from 'mongoose';
// import { db } from '../database/index.js';

const footer = new mongoose.Schema(
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

export const Footer = mongoose.model('Footer', footer);
export const createDefaultFooter = async () => {
  const defaults = await Footer.findOne({});
  if (!defaults) {
    const defaultFooter = new Footer({
      id: 0,
      lang: {
        ar: {
          subscribeTitle: 'اشترك في نشرتنا الإخبارية',
          subscribeButton: 'اشترك',
          platForm: [
            { title: 'نظرة عامة على المنصة', path: 'paths.about', id: 0 },
            { title: 'أتمتة التنفيذ', path: 'paths.contact', id: 1 },
            { title: 'تخطيط الإرسال', path: 'paths.faqs', id: 2 },
            { title: 'تنسيق عمليات التوصيل', path: 'paths.faqs', id: 3 },
            { title: 'التتبع والتعقب', path: 'paths.faqs', id: 3 },
            { title: 'التحليلات والرؤى', path: 'paths.faqs', id: 4 },
          ],
          industries: [
            { title: 'التجزئة', path: '#' },
            { title: 'الخدمات اللوجستية والطرف الثالث', path: '#' },
            { title: 'التجارة الإلكترونية', path: '#' },
            { title: 'البقالة الإلكترونية', path: '#' },
            { title: 'الخدمات الصناعية', path: '#' },
            { title: 'التصنيع', path: '#' },
            { title: 'الخدمات المنزلية', path: '#' },
          ],
          resources: [
            { title: 'الأوراق البيضاء', path: 'mailto: info@mersal.be' },
            { title: 'دراسات الحالة', path: 'tel: +32489570091' },
            { title: 'الرسوم البيانية', path: 'tel: +970599949472' },
            { title: 'الكتب الإلكترونية', path: 'tel: +970567949472' },
            { title: 'المدونات', path: 'tel: +970567949472' },
            {
              title: 'الفعاليات والندوات الإلكترونية',
              path: 'tel: +970567949472',
            },
            { title: 'الفيديوهات', path: 'tel: +970567949472' },
            { title: 'المصطلحات', path: 'tel: +970567949472' },
          ],
          company: [
            { title: 'من نحن', path: 'mailto: info@mersal.be' },
            { title: 'عملاؤنا', path: 'tel: +32489570091' },
            { title: 'الوظائف', path: 'tel: +970599949472' },
            { title: 'الشركاء', path: 'tel: +970567949472' },
            { title: 'الأخبار والبيانات الصحفية', path: 'tel: +970567949472' },
            { title: 'الثقة والأمان', path: 'tel: +970567949472' },
            { title: 'اتصل بنا', path: 'tel: +970567949472' },
          ],
        },
        en: {
          subscribeTitle: 'Subscribe to our newsletter',
          subscribeButton: 'Subscribe',
          platForm: [
            { title: 'Platform Overview', path: 'paths.about', id: 0 },
            {
              title: 'FulFillment Automation',
              path: 'paths.contact',
              id: 1,
            },
            { title: 'Dispatch Planning', path: 'paths.faqs', id: 2 },
            { title: 'Delivery Orchestration', path: 'paths.faqs', id: 3 },
            { title: 'Track and Trace', path: 'paths.faqs', id: 3 },
            { title: 'Analytics and Insight', path: 'paths.faqs', id: 4 },
          ],
          industries: [
            { title: 'Retail', path: '#' },
            { title: '3PL & CEP', path: '#' },
            { title: 'E-commerce', path: '#' },
            { title: 'E-grocery', path: '#' },
            { title: 'Industrial Services', path: '#' },
            { title: 'Manufacturing', path: '#' },
            { title: 'Home Services', path: '#' },
          ],
          resources: [
            { title: 'Whitepapers', path: 'mailto: info@mersal.be' },
            { title: 'Case Studies', path: 'tel: +32489570091' },
            { title: 'Infographics', path: 'tel: +970599949472' },
            { title: 'E-books', path: 'tel: +970567949472' },
            { title: 'Blogs', path: 'tel: +970567949472' },
            { title: 'Events & webinars', path: 'tel: +970567949472' },
            { title: 'Videos', path: 'tel: +970567949472' },
            { title: 'Glossary', path: 'tel: +970567949472' },
          ],
          company: [
            { title: 'About Us', path: 'mailto: info@mersal.be' },
            { title: 'Customers', path: 'tel: +32489570091' },
            { title: 'Careers', path: 'tel: +970599949472' },
            { title: 'Partners', path: 'tel: +970567949472' },
            { title: 'News & Press', path: 'tel: +970567949472' },
            { title: 'Trust & security', path: 'tel: +970567949472' },
            { title: 'Contact Us', path: 'tel: +970567949472' },
          ],
        },
        cr: {
          subscribeTitle: 'نوێژەنامەمان بەشداربە',
          subscribeButton: 'بەشداربوون',
          platForm: [
            { title: 'پیشاندانی پلاتفۆرم', path: 'paths.about', id: 0 },
            { title: 'خۆکارکردنی پڕکەوتن', path: 'paths.contact', id: 1 },
            { title: 'پلاندانکردنی گەیاندن', path: 'paths.faqs', id: 2 },
            { title: 'ڕێکخستنی گەیاندن', path: 'paths.faqs', id: 3 },
            { title: 'بەدواداچوون و گەڕان', path: 'paths.faqs', id: 3 },
            { title: 'آنالیز و ئاشکراکردن', path: 'paths.faqs', id: 4 },
          ],
          industries: [
            { title: 'فرۆشتن', path: '#' },
            { title: '3PL & CEP', path: '#' },
            { title: 'بازاڕی ئەلیکترۆنی', path: '#' },
            { title: 'ئەلیکترۆنی خواردنەوە', path: '#' },
            { title: 'خزمەتگوزاری ناوەندی', path: '#' },
            { title: 'پڕۆسەسازی', path: '#' },
            { title: 'خزمەتگوزاری ماڵەوە', path: '#' },
          ],
          resources: [
            { title: 'ڕاپۆرتە سپییەکان', path: 'mailto: info@mersal.be' },
            { title: 'وێنەی فێرکاری', path: 'tel: +32489570091' },
            { title: 'زانیاریەکانی وێنه‌', path: 'tel: +970599949472' },
            { title: 'کتێبە ئەلیکترۆنییەکان', path: 'tel: +970567949472' },
            { title: 'بلۆگەکان', path: 'tel: +970567949472' },
            { title: 'رووداو و وێببینار', path: 'tel: +970567949472' },
            { title: 'ڤیدیۆ', path: 'tel: +970567949472' },
            { title: 'فرەنووس', path: 'tel: +970567949472' },
          ],
          company: [
            { title: 'دەربارەی ئێمە', path: 'mailto: info@mersal.be' },
            { title: 'کڕیارەکان', path: 'tel: +32489570091' },
            { title: 'کار', path: 'tel: +970599949472' },
            { title: 'هاوبەشەکان', path: 'tel: +970567949472' },
            { title: 'هەواڵ و راگەیاندن', path: 'tel: +970567949472' },
            { title: 'باوەڕپێدان و سەلامەتی', path: 'tel: +970567949472' },
            { title: 'پەیوەندیمان پێوە بکە', path: 'tel: +970567949472' },
          ],
        },
      },
    });
    defaultFooter.save();
    console.log('\x1b[33m$$-\x1b[0m', `Footer is created successfully.`);
  } else {
    console.log('\x1b[33m$$-\x1b[0m', `Footer is exist.`);
  }
};
