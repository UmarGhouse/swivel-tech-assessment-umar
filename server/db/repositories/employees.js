import mongodb from '../connect.js';

export const findAll = async () => {
  const db = await mongodb();

  return db.collection('employees')
    .find()
    .toArray();
};

export default {
  findAll,
};
