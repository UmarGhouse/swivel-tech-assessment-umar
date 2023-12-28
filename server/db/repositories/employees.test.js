import t from 'tap';
import employeesRepository from "./employees.js";
import mongodb from '../../db/connect.js';
import { wipeMongo } from '../../test/utils.js';

// Mock data
const employees = [{
  "first_name": "Test",
  "last_name": "Test",
  "email": "test@gmail.com",
  "number": "+94111111111",
  "gender": "M",
  "photo": "https://randomuser.me/api/portraits/men/92.jpg"
},
{
  "first_name": "Tester",
  "last_name": "Tester",
  "email": "tester@gmail.com",
  "number": "+94222222222",
  "gender": "F",
  "photo": "https://randomuser.me/api/portraits/men/30.jpg"
}];

t.test('employeesRepository', async (t) => {
  const db = await mongodb();

  t.beforeEach(async () => wipeMongo(db));

  await t.test('findAll with no data', async (t) => {
    const allEmployees = await employeesRepository.findAll();
  
    t.equal(allEmployees.length, 0, "Should not be any employees.")
  });

  await t.test('create', async (t) => {
    await employeesRepository.create(employees[0]);
  
    const allEmployees = await employeesRepository.findAll();
  
    t.equal(allEmployees.length, 1, "Should only be 1 employee.")
  });

  await t.test('updateOne', async (t) => {
    // Create item
    const employee = await employeesRepository.create(employees[0]);
  
    const updatedEmployee = await employeesRepository.updateOne(employee._id, {
      first_name: 'Test edited'
    });
  
    t.equal(updatedEmployee.first_name, "Test edited", "Should update first name.")
  });

  await t.test('deleteOne', async (t) => {
    // Create items
    const employee = await employeesRepository.create(employees[0]);
    await employeesRepository.create(employees[1]);
  
    await employeesRepository.deleteOne(employee._id);

    const allEmployees = await employeesRepository.findAll();
  
    t.equal(allEmployees.length, 1, "Should only be 1 employee.");
    t.equal(allEmployees[0].email, "tester@gmail.com", "Should only be 1 employee.");
  });
})
