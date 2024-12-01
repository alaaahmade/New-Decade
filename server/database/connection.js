/* eslint-disable no-console */
import mongoose from 'mongoose';
import { MONGO_URI } from '../config/index.js';
import { createDefaultAvenues } from '../models/HomeAvenues.js';
import { createDefaultAbout } from '../models/AboutView.js';
import { createDefaultHero } from '../models/HomeHero.js';
import { createDefaultHomeModular } from '../models/HomeModular.js';
import { createDefaultAdvantage } from '../models/HomeAdvantage.js';
import { createDefaultCustomerWords } from '../models/CustomerWords.js';
import { createDefaultHomeLogisticsSolution } from '../models/HomeLogisticsSolution.js';
import { createDefaultLatestInsights } from '../models/HomeLatestInsights.js';
import { createDefaultChallenges } from '../models/HomeChallenges.js';
import { createDefaultHeader } from '../models/Header.js';
import { createDefaultFooter } from '../models/Footer.js';
import { createAdmin } from '../models/User.js';
import { createDefaultTrusted } from '../models/Trusted.js';
import { mokClients } from '../models/Client.js';
import { createDefaultPlatformHero } from '../models/PlatformHero.js';
import { createDefaultAboutPlatform } from '../models/AboutPlatform.js';
import { createDefaultPlatformForAll } from '../models/PlatformForAll.js';
import { createDefaultPlatformEdge } from '../models/PlatformEdge.js';
import { createDefaultPlatformTransform } from '../models/PlatformTransform.js';
import { createDefaultPlatformConvert } from '../models/PlatformConvert.js';

// export const db = async () => mongoose.connect(MONGO_URI);

export const initDataBase = async () => {
  mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', async () => {
    await createDefaultHeader();
    await createDefaultHero();
    await mokClients();
    await createDefaultTrusted();
    await createDefaultAbout();
    await createDefaultAvenues();
    await createDefaultHomeModular();
    await createDefaultAdvantage();
    await createDefaultCustomerWords();
    await createDefaultHomeLogisticsSolution();
    await createDefaultLatestInsights();
    await createDefaultChallenges();
    await createDefaultPlatformHero();
    await createDefaultAboutPlatform();
    await createDefaultFooter();
    await createDefaultPlatformForAll();
    await createDefaultPlatformEdge();
    await createDefaultPlatformTransform();
    await createDefaultPlatformConvert();
    await createAdmin();
    console.log(
      '\x1b[33m%s\x1b[0m',
      `server connected to database successfully`,
    );
  });
};
