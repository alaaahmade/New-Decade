import mongoose from 'mongoose';
// import { db } from '../database/index.js';

const trusted = new mongoose.Schema(
  {
    id: {
      type: Number,
    },
    lang: {
      type: Object,
    },
    listOne: {
      type: Array,
    },
    listTow: {
      type: Array,
    },
    listThree: {
      type: Array,
    },
    listFour: {
      type: Array,
    },
  },
  {
    timestamps: true,
  },
);

export const Trusted = mongoose.model('Trusted', trusted);
export const createDefaultTrusted = async () => {
  const defaults = await Trusted.findOne({ id: 0 });
  if (!defaults) {
    const defaultTrusted = new Trusted({
      id: 0,
      lang: {
        ar: {
          titleOne: 'Trusted By Leading',
          span: 'Brands',
          titleTow: 'Globally',
          listOne: {
            id: 0,
            name: 'Retail',
          },
          listTow: {
            id: 1,
            name: 'FMCG/CPG',
          },
          listThree: {
            id: 2,
            name: '3PL/CEP',
          },
          listFour: {
            id: 3,
            name: 'Ecommerce',
          },
        },
        en: {
          titleOne: 'Trusted By Leading',
          span: 'Brands',
          titleTow: 'Globally',
          listOne: {
            id: 0,
            name: 'Retail',
          },
          listTow: {
            id: 1,
            name: 'FMCG/CPG',
          },
          listThree: {
            id: 2,
            name: '3PL/CEP',
          },
          listFour: {
            id: 3,
            name: 'Ecommerce',
          },
        },
        cr: {
          titleOne: 'Trusted By Leading',
          span: 'Brands',
          titleTow: 'Globally',
          listOne: {
            id: 0,
            name: 'Retail',
          },
          listTow: {
            id: 1,
            name: 'FMCG/CPG',
          },
          listThree: {
            id: 2,
            name: '3PL/CEP',
          },
          listFour: {
            id: 3,
            name: 'Ecommerce',
          },
        },
      },
      listOne: [
        {
          id: 0,
          img: 'http://localhost:8080/uploads/trusteds/logo-unilever.webp',
        },
        {
          id: 1,
          img: 'http://localhost:8080/uploads/trusteds/logo-zeiss.webp',
        },
        {
          id: 2,
          img: 'http://localhost:8080/uploads/trusteds/logo-nestle.webp',
        },
        {
          id: 3,
          img: 'http://localhost:8080/uploads/trusteds/logo-nestle-waters.webp',
        },
        {
          id: 4,
          img: 'http://localhost:8080/uploads/trusteds/logo-croma.webp',
        },
        {
          id: 5,
          img: 'http://localhost:8080/uploads/trusteds/logo-cargills.webp',
        },
        {
          id: 6,
          img: 'http://localhost:8080/uploads/trusteds/logo-capitol-ligting.webp',
        },
        {
          id: 7,
          img: 'http://localhost:8080/uploads/trusteds/logo-mammoth.webp',
        },
        {
          id: 8,
          img: 'http://localhost:8080/uploads/trusteds/logo-lulu.webp',
        },
        {
          id: 9,
          img: 'http://localhost:8080/uploads/trusteds/logo-2xl-furniture.webp',
        },
      ],
      listTow: [
        {
          id: 0,
          img: 'http://localhost:8080/uploads/trusteds/logo-unilever.webp',
        },
        {
          id: 1,
          img: 'http://localhost:8080/uploads/trusteds/logo-zeiss.webp',
        },
        {
          id: 2,
          img: 'http://localhost:8080/uploads/trusteds/logo-nestle.webp',
        },
        {
          id: 3,
          img: 'http://localhost:8080/uploads/trusteds/logo-nestle-waters.webp',
        },
        {
          id: 4,
          img: 'http://localhost:8080/uploads/trusteds/logo-croma.webp',
        },
        {
          id: 5,
          img: 'http://localhost:8080/uploads/trusteds/logo-cargills.webp',
        },
        {
          id: 6,
          img: 'http://localhost:8080/uploads/trusteds/logo-capitol-ligting.webp',
        },
        {
          id: 7,
          img: 'http://localhost:8080/uploads/trusteds/logo-mammoth.webp',
        },
        {
          id: 8,
          img: 'http://localhost:8080/uploads/trusteds/logo-lulu.webp',
        },
        {
          id: 9,
          img: 'http://localhost:8080/uploads/trusteds/logo-2xl-furniture.webp',
        },
      ],
      listThree: [
        {
          id: 0,
          img: 'http://localhost:8080/uploads/trusteds/logo-unilever.webp',
        },
        {
          id: 1,
          img: 'http://localhost:8080/uploads/trusteds/logo-zeiss.webp',
        },
        {
          id: 2,
          img: 'http://localhost:8080/uploads/trusteds/logo-nestle.webp',
        },
        {
          id: 3,
          img: 'http://localhost:8080/uploads/trusteds/logo-nestle-waters.webp',
        },
        {
          id: 4,
          img: 'http://localhost:8080/uploads/trusteds/logo-croma.webp',
        },
        {
          id: 5,
          img: 'http://localhost:8080/uploads/trusteds/logo-cargills.webp',
        },
        {
          id: 6,
          img: 'http://localhost:8080/uploads/trusteds/logo-capitol-ligting.webp',
        },
        {
          id: 7,
          img: 'http://localhost:8080/uploads/trusteds/logo-mammoth.webp',
        },
        {
          id: 8,
          img: 'http://localhost:8080/uploads/trusteds/logo-lulu.webp',
        },
        {
          id: 9,
          img: 'http://localhost:8080/uploads/trusteds/logo-2xl-furniture.webp',
        },
      ],
      listFour: [
        {
          id: 0,
          img: 'http://localhost:8080/uploads/trusteds/logo-unilever.webp',
        },
        {
          id: 1,
          img: 'http://localhost:8080/uploads/trusteds/logo-zeiss.webp',
        },
        {
          id: 2,
          img: 'http://localhost:8080/uploads/trusteds/logo-nestle.webp',
        },
        {
          id: 3,
          img: 'http://localhost:8080/uploads/trusteds/logo-nestle-waters.webp',
        },
        {
          id: 4,
          img: 'http://localhost:8080/uploads/trusteds/logo-croma.webp',
        },
        {
          id: 5,
          img: 'http://localhost:8080/uploads/trusteds/logo-cargills.webp',
        },
        {
          id: 6,
          img: 'http://localhost:8080/uploads/trusteds/logo-capitol-ligting.webp',
        },
        {
          id: 7,
          img: 'http://localhost:8080/uploads/trusteds/logo-mammoth.webp',
        },
        {
          id: 8,
          img: 'http://localhost:8080/uploads/trusteds/logo-lulu.webp',
        },
        {
          id: 9,
          img: 'http://localhost:8080/uploads/trusteds/logo-2xl-furniture.webp',
        },
      ],
    });
    defaultTrusted.save();
    console.log('\x1b[33m$$-\x1b[0m', `Trusted is created successfully.`);
  } else {
    console.log('\x1b[33m$$-\x1b[0m', `Trusted is exist.`);
  }
};
