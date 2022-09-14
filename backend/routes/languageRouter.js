import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import { isAuth } from '../utils.js';
import languageController from '../controllers/language.controller.js';

const languageRouter = express.Router();

languageRouter.post(
  '/',
  isAuth,
  expressAsyncHandler(languageController.createLanguage)
);
languageRouter.put(
  '/',
  isAuth,
  expressAsyncHandler(languageController.updateLanguage)
);
languageRouter.delete(
  '/:id',
  isAuth,
  expressAsyncHandler(languageController.deleteLanguage)
);
languageRouter.get(
  '/',
  isAuth,
  expressAsyncHandler(languageController.getLanguages)
);
languageRouter.get(
  '/:id',
  isAuth,
  expressAsyncHandler(languageController.getLanguage)
);

export default languageRouter;
