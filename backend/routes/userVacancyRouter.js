import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import { isAuth } from '../utils.js';
import userVacancyController from '../controllers/userVacancy.controller.js';

const userVacancyRouter = express.Router();

userVacancyRouter.post(
  '/',
  isAuth,
  expressAsyncHandler(userVacancyController.createUserVacancy)
);
userVacancyRouter.put(
  '/',
  isAuth,
  expressAsyncHandler(userVacancyController.updateUserVacancy)
);
userVacancyRouter.delete(
  '/:id',
  isAuth,
  expressAsyncHandler(userVacancyController.deleteUserVacancy)
);
userVacancyRouter.get(
  '/',
  isAuth,
  expressAsyncHandler(userVacancyController.getUserVacancies)
);
userVacancyRouter.get(
  '/:id',
  isAuth,
  expressAsyncHandler(userVacancyController.getUserVacancy)
);

export default userVacancyRouter;
