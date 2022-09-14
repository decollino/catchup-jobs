import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import { isAuth } from '../utils.js';
import userLanguageController from '../controllers/userLanguage.controller.js';

const userLanguageRouter = express.Router();

userLanguageRouter.post(
  '/',
  isAuth,
  expressAsyncHandler(userLanguageController.createUserLanguage)
);
userLanguageRouter.put(
  '/',
  isAuth,
  expressAsyncHandler(userLanguageController.updateUserLanguage)
);
userLanguageRouter.delete(
  '/:id',
  isAuth,
  expressAsyncHandler(userLanguageController.deleteUserLanguage)
);
userLanguageRouter.get(
  '/',
  isAuth,
  expressAsyncHandler(userLanguageController.getUserLanguages)
);
userLanguageRouter.get(
  '/:id',
  isAuth,
  expressAsyncHandler(userLanguageController.getUserLanguage)
);

export default userLanguageRouter;
