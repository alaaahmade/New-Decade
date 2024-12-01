/* eslint-disable no-console */
import { app } from './app.js';
import { PORT } from './config/index.js';
import { initDataBase } from './database/connection.js';

try {
  app.listen(PORT || 8080, async () => {
    await initDataBase();
    console.log(
      `server is running on`,
      `\x1b[33mhttp://localhost:${PORT || 8080}\x1b[0m`,
    );
  });
} catch (err) {
  console.log('\x1b[31m$$\x1b[0m', 'cannot connect to database');
}
