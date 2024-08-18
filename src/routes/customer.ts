// src/routes/customer.ts
import { Router } from 'express';
import { createCustomerController } from '../controllers/createCustomerController';
import { Db } from 'mongodb';

const router = Router();

export default function (db: Db) {
  router.post('/', (req, res) => createCustomerController(req, res, db));
  // Adicione outros métodos e rotas aqui

  return router;
}

