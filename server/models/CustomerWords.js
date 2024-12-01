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
