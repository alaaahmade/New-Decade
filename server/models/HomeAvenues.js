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
        ar: {
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
        cr: {
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
      },
    });
    defaultHomeAvenues.save();
    console.log('\x1b[33m$$-\x1b[0m', `Avenues is created successfully.`);
  } else {
    console.log('\x1b[33m$$-\x1b[0m', `Avenues is exist.`);
  }
};
