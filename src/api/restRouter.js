import express from 'express';
// routers
import { restaurantRouter } from './resources/restaurant';
export const restRouter = express.Router();
restRouter.use('/restaurant', restaurantRouter);
