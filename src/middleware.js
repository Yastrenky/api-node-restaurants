import bodyParser from 'body-parser';
import express from 'express'
const setGlobalMiddleware = app => {
  app.use(express.static('static'));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
};

export default setGlobalMiddleware;
