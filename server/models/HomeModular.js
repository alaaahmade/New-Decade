import mongoose from 'mongoose';
// import { db } from '../database/index.js';

const homeModular = new mongoose.Schema(
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

export const HomeModular = mongoose.model('HomeModular', homeModular);

export const createDefaultHomeModular = async () => {
  const defaults = await HomeModular.findOne({ id: 0 });
  if (!defaults) {
    const defaultHomeModular = new HomeModular({
      id: 0,
      lang: {
        ar: {
          titleOne: 'One',
          span: 'Modular',
          titleTow: 'Platform for All-miles',
          descOne:
            "Locus's Dispatch Management Platform diverse modular leverage powerful algorithms to make each delivery better than the last.",
          descTow: `Right from planning to execution, the platform acts as a single source of truth. Its modules constantly communicate with <br/> 
          each for seamless decision-making, better resource utilization, and sustainable growth. Enterprises, whether they are retail 
          brands, 3PLs, or e-commerce companies, can scale with new functionalities in no time across multiple fulfillment channels 
          and models.`,
          apps: [
            {
              id: 0,
              name: 'Fulfillment',
              title:
                'Secure customer loyalty with unparalleled fulfillment experience1',
              descOne: `Our Fulfillment Automation solutions enhance customer buying 
              experiences by offering flexible control over the timing, location and 
              specifics of order deliveries, which scaling for optimized order fulfillment.`,
              descTow: `They leverage advanced algorithms for efficient resource utilization and 
              better delivery SLAs by optimizing daily scheduling for pickups, 
              deliveries, cancellation, and returns. `,
              buttonOne: {
                text: 'Know More',
                link: 'www.google.com',
              },
              buttonTow: {
                text: 'Get a Demo',
                link: 'www.google.com',
              },
              img: 'http://localhost:8080/uploads/modular/image-secure-customer-loyalty.webp',
            },
            {
              id: 1,
              name: 'Delivery',
              title:
                'Secure customer loyalty with unparalleled fulfillment experiences2',
              descOne: `Our Fulfillment Automation solutions enhance customer buying 
              experiences by offering flexible control over the timing, location and 
              specifics of order deliveries, which scaling for optimized order fulfillment.`,
              descTow: `They leverage advanced algorithms for efficient resource utilization and 
              better delivery SLAs by optimizing daily scheduling for pickups, 
              deliveries, cancellation, and returns. `,
              buttonOne: {
                text: 'Know More',
                link: 'www.google.com',
              },
              buttonTow: {
                text: 'Get a Demo',
                link: 'www.google.com',
              },
              img: 'http://localhost:8080/uploads/modular/image-secure-customer-loyalty.webp',
            },
            {
              id: 2,
              name: 'Capacity',
              title:
                'Secure customer loyalty with unparalleled fulfillment experiences3',
              descOne: `Our Fulfillment Automation solutions enhance customer buying 
              experiences by offering flexible control over the timing, location and 
              specifics of order deliveries, which scaling for optimized order fulfillment.`,
              descTow: `They leverage advanced algorithms for efficient resource utilization and 
              better delivery SLAs by optimizing daily scheduling for pickups, 
              deliveries, cancellation, and returns. `,
              buttonOne: {
                text: 'Know More',
                link: 'www.google.com',
              },
              buttonTow: {
                text: 'Get a Demo',
                link: 'www.google.com',
              },
              img: 'http://localhost:8080/uploads/modular/image-secure-customer-loyalty.webp',
            },
            {
              id: 3,
              name: 'Track',
              title:
                'Secure customer loyalty with unparalleled fulfillment experiences4',
              descOne: `Our Fulfillment Automation solutions enhance customer buying 
              experiences by offering flexible control over the timing, location and 
              specifics of order deliveries, which scaling for optimized order fulfillment.`,
              descTow: `They leverage advanced algorithms for efficient resource utilization and 
              better delivery SLAs by optimizing daily scheduling for pickups, 
              deliveries, cancellation, and returns. `,
              buttonOne: {
                text: 'Know More',
                link: 'www.google.com',
              },
              buttonTow: {
                text: 'Get a Demo',
                link: 'www.google.com',
              },
              img: 'http://localhost:8080/uploads/modular/image-secure-customer-loyalty.webp',
            },
            {
              id: 4,
              name: 'Analytics',
              title:
                'Secure customer loyalty with unparalleled fulfillment experiences5',
              descOne: `Our Fulfillment Automation solutions enhance customer buying 
              experiences by offering flexible control over the timing, location and 
              specifics of order deliveries, which scaling for optimized order fulfillment.`,
              descTow: `They leverage advanced algorithms for efficient resource utilization and 
              better delivery SLAs by optimizing daily scheduling for pickups, 
              deliveries, cancellation, and returns. `,
              buttonOne: {
                text: 'Know More',
                link: 'www.google.com',
              },
              buttonTow: {
                text: 'Get a Demo',
                link: 'www.google.com',
              },
              img: 'http://localhost:8080/uploads/modular/image-secure-customer-loyalty.webp',
            },
          ],
        },
        en: {
          titleOne: 'One',
          span: 'Modular',
          titleTow: 'Platform for All-miles',
          descOne:
            "Locus's Dispatch Management Platform diverse modular leverage powerful algorithms to make each delivery better than the last.",
          descTow: `Right from planning to execution, the platform acts as a single source of truth. Its modules constantly communicate with <br/> 
          each for seamless decision-making, better resource utilization, and sustainable growth. Enterprises, whether they are retail 
          brands, 3PLs, or e-commerce companies, can scale with new functionalities in no time across multiple fulfillment channels 
          and models.`,
          apps: [
            {
              id: 0,
              name: 'Fulfillment',
              title:
                'Secure customer loyalty with unparalleled fulfillment experience1',
              descOne: `Our Fulfillment Automation solutions enhance customer buying 
              experiences by offering flexible control over the timing, location and 
              specifics of order deliveries, which scaling for optimized order fulfillment.`,
              descTow: `They leverage advanced algorithms for efficient resource utilization and 
              better delivery SLAs by optimizing daily scheduling for pickups, 
              deliveries, cancellation, and returns. `,
              buttonOne: {
                text: 'Know More',
                link: 'www.google.com',
              },
              buttonTow: {
                text: 'Get a Demo',
                link: 'www.google.com',
              },
              img: 'http://localhost:8080/uploads/modular/image-secure-customer-loyalty.webp',
            },
            {
              id: 1,
              name: 'Delivery',
              title:
                'Secure customer loyalty with unparalleled fulfillment experiences2',
              descOne: `Our Fulfillment Automation solutions enhance customer buying 
              experiences by offering flexible control over the timing, location and 
              specifics of order deliveries, which scaling for optimized order fulfillment.`,
              descTow: `They leverage advanced algorithms for efficient resource utilization and 
              better delivery SLAs by optimizing daily scheduling for pickups, 
              deliveries, cancellation, and returns. `,
              buttonOne: {
                text: 'Know More',
                link: 'www.google.com',
              },
              buttonTow: {
                text: 'Get a Demo',
                link: 'www.google.com',
              },
              img: 'http://localhost:8080/uploads/modular/image-secure-customer-loyalty.webp',
            },
            {
              id: 2,
              name: 'Capacity',
              title:
                'Secure customer loyalty with unparalleled fulfillment experiences3',
              descOne: `Our Fulfillment Automation solutions enhance customer buying 
              experiences by offering flexible control over the timing, location and 
              specifics of order deliveries, which scaling for optimized order fulfillment.`,
              descTow: `They leverage advanced algorithms for efficient resource utilization and 
              better delivery SLAs by optimizing daily scheduling for pickups, 
              deliveries, cancellation, and returns. `,
              buttonOne: {
                text: 'Know More',
                link: 'www.google.com',
              },
              buttonTow: {
                text: 'Get a Demo',
                link: 'www.google.com',
              },
              img: 'http://localhost:8080/uploads/modular/image-secure-customer-loyalty.webp',
            },
            {
              id: 3,
              name: 'Track',
              title:
                'Secure customer loyalty with unparalleled fulfillment experiences4',
              descOne: `Our Fulfillment Automation solutions enhance customer buying 
              experiences by offering flexible control over the timing, location and 
              specifics of order deliveries, which scaling for optimized order fulfillment.`,
              descTow: `They leverage advanced algorithms for efficient resource utilization and 
              better delivery SLAs by optimizing daily scheduling for pickups, 
              deliveries, cancellation, and returns. `,
              buttonOne: {
                text: 'Know More',
                link: 'www.google.com',
              },
              buttonTow: {
                text: 'Get a Demo',
                link: 'www.google.com',
              },
              img: 'http://localhost:8080/uploads/modular/image-secure-customer-loyalty.webp',
            },
            {
              id: 4,
              name: 'Analytics',
              title:
                'Secure customer loyalty with unparalleled fulfillment experiences5',
              descOne: `Our Fulfillment Automation solutions enhance customer buying 
              experiences by offering flexible control over the timing, location and 
              specifics of order deliveries, which scaling for optimized order fulfillment.`,
              descTow: `They leverage advanced algorithms for efficient resource utilization and 
              better delivery SLAs by optimizing daily scheduling for pickups, 
              deliveries, cancellation, and returns. `,
              buttonOne: {
                text: 'Know More',
                link: 'www.google.com',
              },
              buttonTow: {
                text: 'Get a Demo',
                link: 'www.google.com',
              },
              img: 'http://localhost:8080/uploads/modular/image-secure-customer-loyalty.webp',
            },
          ],
        },
        cr: {
          titleOne: 'One',
          span: 'Modular',
          titleTow: 'Platform for All-miles',
          descOne:
            "Locus's Dispatch Management Platform diverse modular leverage powerful algorithms to make each delivery better than the last.",
          descTow: `Right from planning to execution, the platform acts as a single source of truth. Its modules constantly communicate with <br/> 
          each for seamless decision-making, better resource utilization, and sustainable growth. Enterprises, whether they are retail 
          brands, 3PLs, or e-commerce companies, can scale with new functionalities in no time across multiple fulfillment channels 
          and models.`,
          apps: [
            {
              id: 0,
              name: 'Fulfillment',
              title:
                'Secure customer loyalty with unparalleled fulfillment experience1',
              descOne: `Our Fulfillment Automation solutions enhance customer buying 
              experiences by offering flexible control over the timing, location and 
              specifics of order deliveries, which scaling for optimized order fulfillment.`,
              descTow: `They leverage advanced algorithms for efficient resource utilization and 
              better delivery SLAs by optimizing daily scheduling for pickups, 
              deliveries, cancellation, and returns. `,
              buttonOne: {
                text: 'Know More',
                link: 'www.google.com',
              },
              buttonTow: {
                text: 'Get a Demo',
                link: 'www.google.com',
              },
              img: 'http://localhost:8080/uploads/modular/image-secure-customer-loyalty.webp',
            },
            {
              id: 1,
              name: 'Delivery',
              title:
                'Secure customer loyalty with unparalleled fulfillment experiences2',
              descOne: `Our Fulfillment Automation solutions enhance customer buying 
              experiences by offering flexible control over the timing, location and 
              specifics of order deliveries, which scaling for optimized order fulfillment.`,
              descTow: `They leverage advanced algorithms for efficient resource utilization and 
              better delivery SLAs by optimizing daily scheduling for pickups, 
              deliveries, cancellation, and returns. `,
              buttonOne: {
                text: 'Know More',
                link: 'www.google.com',
              },
              buttonTow: {
                text: 'Get a Demo',
                link: 'www.google.com',
              },
              img: 'http://localhost:8080/uploads/modular/image-secure-customer-loyalty.webp',
            },
            {
              id: 2,
              name: 'Capacity',
              title:
                'Secure customer loyalty with unparalleled fulfillment experiences3',
              descOne: `Our Fulfillment Automation solutions enhance customer buying 
              experiences by offering flexible control over the timing, location and 
              specifics of order deliveries, which scaling for optimized order fulfillment.`,
              descTow: `They leverage advanced algorithms for efficient resource utilization and 
              better delivery SLAs by optimizing daily scheduling for pickups, 
              deliveries, cancellation, and returns. `,
              buttonOne: {
                text: 'Know More',
                link: 'www.google.com',
              },
              buttonTow: {
                text: 'Get a Demo',
                link: 'www.google.com',
              },
              img: 'http://localhost:8080/uploads/modular/image-secure-customer-loyalty.webp',
            },
            {
              id: 3,
              name: 'Track',
              title:
                'Secure customer loyalty with unparalleled fulfillment experiences4',
              descOne: `Our Fulfillment Automation solutions enhance customer buying 
              experiences by offering flexible control over the timing, location and 
              specifics of order deliveries, which scaling for optimized order fulfillment.`,
              descTow: `They leverage advanced algorithms for efficient resource utilization and 
              better delivery SLAs by optimizing daily scheduling for pickups, 
              deliveries, cancellation, and returns. `,
              buttonOne: {
                text: 'Know More',
                link: 'www.google.com',
              },
              buttonTow: {
                text: 'Get a Demo',
                link: 'www.google.com',
              },
              img: 'http://localhost:8080/uploads/modular/image-secure-customer-loyalty.webp',
            },
            {
              id: 4,
              name: 'Analytics',
              title:
                'Secure customer loyalty with unparalleled fulfillment experiences5',
              descOne: `Our Fulfillment Automation solutions enhance customer buying 
              experiences by offering flexible control over the timing, location and 
              specifics of order deliveries, which scaling for optimized order fulfillment.`,
              descTow: `They leverage advanced algorithms for efficient resource utilization and 
              better delivery SLAs by optimizing daily scheduling for pickups, 
              deliveries, cancellation, and returns. `,
              buttonOne: {
                text: 'Know More',
                link: 'www.google.com',
              },
              buttonTow: {
                text: 'Get a Demo',
                link: 'www.google.com',
              },
              img: 'http://localhost:8080/uploads/modular/image-secure-customer-loyalty.webp',
            },
          ],
        },
      },
    });
    defaultHomeModular.save();
    console.log('\x1b[33m$$-\x1b[0m', `Home Modular is created successfully.`);
  } else {
    console.log('\x1b[33m$$-\x1b[0m', `Home Modular is exist.`);
  }
};
