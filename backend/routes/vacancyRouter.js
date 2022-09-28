import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import { isAuth } from '../utils.js';
import vacancyController from '../controllers/vacancy.controller.js';

const vacancyRouter = express.Router();

vacancyRouter.post(
  '/',
  isAuth,
  expressAsyncHandler(vacancyController.createVacancy)
);
vacancyRouter.put(
  '/',
  isAuth,
  expressAsyncHandler(vacancyController.updateVacancy)
);
vacancyRouter.delete(
  '/:id',
  isAuth,
  expressAsyncHandler(vacancyController.deleteVacancy)
);
vacancyRouter.get(
  '/',
  isAuth,
  expressAsyncHandler(vacancyController.getVacancies)
);
vacancyRouter.get(
  '/:id',
  isAuth,
  expressAsyncHandler(vacancyController.getVacancy)
);

export default vacancyRouter;
