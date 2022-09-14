import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import { isAuth } from '../utils.js';
import companyController from '../controllers/company.controller.js';

const companyRouter = express.Router();

companyRouter.post(
  '/',
  isAuth,
  expressAsyncHandler(companyController.createCompany)
);
companyRouter.put(
  '/',
  isAuth,
  expressAsyncHandler(companyController.updateCompany)
);
companyRouter.delete(
  '/:id',
  isAuth,
  expressAsyncHandler(companyController.deleteCompany)
);
companyRouter.get(
  '/',
  isAuth,
  expressAsyncHandler(companyController.getCompanys)
);
companyRouter.get(
  '/:id',
  isAuth,
  expressAsyncHandler(companyController.getCompany)
);

export default companyRouter;
