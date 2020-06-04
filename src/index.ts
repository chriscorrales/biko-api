import { getConnection } from './db';

(async () => {
  try {
    await getConnection();
  } catch (err) {
    console.log(err);
  }
  await import('./app');
})();
