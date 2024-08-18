// src/index.ts
import express from 'express';
import { Db } from 'mongodb';

// Teste para garantir que a propriedade `db` está disponível
const app: express.Application = express();
app.db = undefined; // Não deve dar erro se o tipo estiver correto