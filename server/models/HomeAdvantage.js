import mongoose from 'mongoose';

const homeAdvantage = new mongoose.Schema(
  {
    id: {
      type: Number,
    },
    lang: {
      type: Object,
    },
    buttonOneI: {
      type: String,
    },
    buttonTowI: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

export const HomeAdvantage = mongoose.model('HomeAdvantage', homeAdvantage);
export const createDefaultAdvantage = async () => {
  const defaults = await HomeAdvantage.findOne({});
  if (!defaults) {
    const defaultAdvantage = new HomeAdvantage({
      id: 0,
      lang: {
        ar: {
          titleOne: 'The',
          span: 'Locus',
          titleTow: 'Advantage',
          buttonOne: 'With Locus',
          buttonTow: 'Without Locus',
        },
        en: {
          titleOne: 'The',
          span: 'Locus',
          titleTow: 'Advantage',
          buttonOne: 'With Locus',
          buttonTow: 'Without Locus',
        },
        cr: {
          titleOne: 'The',
          span: 'Locus',
          titleTow: 'Advantage',
          buttonOne: 'With Locus',
          buttonTow: 'Without Locus',
        },
      },
      buttonTowI:
        'http://localhost:8080/uploads/advantage/without-advantage.svg',
      buttonOneI: 'http://localhost:8080/uploads/advantage/with-advantage.svg',
    });
    defaultAdvantage.save();
    console.log('\x1b[33m$$-\x1b[0m', `Advantage is created successfully.`);
  } else {
    console.log('\x1b[33m$$-\x1b[0m', `Advantage is exist.`);
  }
};
