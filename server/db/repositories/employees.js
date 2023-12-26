import { ObjectId } from 'mongodb'
import mongodb from '../connect.js';

export const findAll = async () => {
  const db = await mongodb();

  return db.collection('employees')
    .find()
    .toArray();
};

export const findOne = async (query) => {
  const db = await mongodb();

  return db.collection('employees')
    .findOne(query);
};

export const create = async (employee) => {
  const db = await mongodb();

  const { insertedId } = await db.collection('employees')
    .insertOne(employee);
  
  return db.collection('employees')
    .findOne({ _id: insertedId })
};

export const updateOne = async (employeeId, update) => {
  const db = await mongodb();

  return db.collection('employees')
    .findOneAndUpdate(
      { _id: new ObjectId(employeeId) },
      { $set: update },
      {
        returnDocument: 'after',
        upsert: true
      }
    )
};

export const deleteOne = async (employeeId) => {
  const db = await mongodb();

  const employee = await findOne({ _id: new ObjectId(employeeId) });

  await db.collection('employees').deleteOne({ _id: new ObjectId(employeeId) });

  return employee;
};

export default {
  findAll,
  findOne,
  create,
  updateOne,
  deleteOne,
};
