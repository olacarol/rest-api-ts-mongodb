
import * as express from 'express';
import { Db } from 'mongodb';

declare global {
  namespace Express {
    interface Application {
      db?: Db;
    }
  }
}
