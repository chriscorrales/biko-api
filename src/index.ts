import { getConnection } from './db';

(async () => {
  await getConnection();
  await import('./app');
})();
