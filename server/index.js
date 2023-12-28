import express from 'express';
import cors from "cors";
import { closeConnection } from "./db/connect.js";
import employeesRepository from './db/repositories/employees.js';

const app = express();

app.use(cors());
app.use(express.json());

app.listen(3001, () => console.log('App listening on port 3001!'));

process.on('SIGTERM', () => {
  debug('SIGTERM signal received: closing HTTP server')

  debug('Closing mongodb connection')
  closeConnection();

  server.close(() => {
    debug('HTTP server closed')
  })
});

app.get('/employees', async (req, res) => {
  try {
    const employees = await employeesRepository.findAll();

    return res.status(200).json({ employees });
  } catch (error) {
    return res.status(500).json({ message: "Server Error: ", error });
  }
});

app.post('/employee', async (req, res) => {
  try {
    const createdEmployee = await employeesRepository.create(req.body);

    return res.status(200).json(createdEmployee)
  } catch (error) {
    return res.status(500).json({ message: "Server Error: ", error });
  }
});

app.put('/employee/:empId', async (req, res) => {
  try {
    const updatedEmployee = await employeesRepository.updateOne(req.params.empId, req.body)

    return res.status(200).json(updatedEmployee)
  } catch (error) {
    return res.status(500).json({ message: "Server Error: ", error });
  }
});

app.delete('/employee/:empId', async (req, res) => {
  try {
    const deletedEmployee = await employeesRepository.deleteOne(req.params.empId)

    return res.status(200).json(deletedEmployee)
  } catch (error) {
    return res.status(500).json({ message: "Server Error: ", error });
  }
});
