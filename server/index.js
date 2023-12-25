import express from 'express';
import cors from "cors";
import { closeConnection } from "./db/connect.js";
import repo from './db/repositories/employees.js';

const app = express();

app.use(cors());

app.get('/api/v1/users', (req, res) =>{
      try {
        const users = [
          { id: 1, name: "John Doe" },
          { id: 2, name: "Jane Doe" },
        ]; 

        return res.status(200).json({ users });
      } catch (error) {
        throw error;
      }

})

app.listen(3001, () => console.log('App listening on port 3001!'));

process.on('SIGTERM', () => {
  debug('SIGTERM signal received: closing HTTP server')

  debug('Closing mongodb connection')
  closeConnection();

  server.close(() => {
    debug('HTTP server closed')
  })
})
