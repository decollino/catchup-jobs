import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import { isAuth } from '../utils.js';
import userCareerController from '../controllers/userCareer.controller.js';

const userCareerRouter = express.Router();

userCareerRouter.post(
  '/',
  isAuth,
  expressAsyncHandler(userCareerController.createUserCareer)
);
userCareerRouter.put(
  '/',
  isAuth,
  expressAsyncHandler(userCareerController.updateUserCareer)
);
userCareerRouter.delete(
  '/:id',
  isAuth,
  expressAsyncHandler(userCareerController.deleteUserCareer)
);
userCareerRouter.get(
  '/',
  isAuth,
  expressAsyncHandler(userCareerController.getUserCareers)
);
userCareerRouter.get(
  '/:id',
  isAuth,
  expressAsyncHandler(userCareerController.getUserCareer)
);

export default userCareerRouter;
