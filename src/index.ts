// src/index.ts
import express from 'express';
import bodyParser from 'body-parser';
import { MongoClient, Db } from 'mongodb';
import customerRoutes from './routes/customer';

async function start() {
  try {
    const app = express();
    const port = 3000;

    // Conectar ao MongoDB
    const mongoClient = await MongoClient.connect('mongodb://localhost:27017/crm_api');
    const DB: Db = mongoClient.db(); // instancia dados

    app.use(bodyParser.json({ limit: '5mb' }));

    app.use('/customers', customerRoutes(DB));

    // init  server
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Error starting the server:', error);
  }
}

start();
