// library
import express from 'express';
import bodyParser from 'body-parser';
import db from './db';

// api
import user from './routes/users'

// express setup
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// express routers
app.use('/login', user);

module.exports = {
  path: '/api',
  handler: app
};