import tap from 'tap';
import { closeConnection } from '../db/connect.js';

tap.teardown(async () => {
  await Promise.all([
    closeConnection(),
  ]);
});

const MONGO_COLLECTIONS = [
  'employees',
];

export const wipeMongo = async (db) => {
  await Promise.all(MONGO_COLLECTIONS.map((c) => db.collection(c).deleteMany({ })));
};
