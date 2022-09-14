import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import { isAuth } from '../utils.js';
import careerController from '../controllers/career.controller.js';

const careerRouter = express.Router();

careerRouter.post(
  '/',
  isAuth,
  expressAsyncHandler(careerController.createCareer)
);
careerRouter.put(
  '/',
  isAuth,
  expressAsyncHandler(careerController.updateCareer)
);
careerRouter.delete(
  '/:id',
  isAuth,
  expressAsyncHandler(careerController.deleteCareer)
);
careerRouter.get('/', isAuth, expressAsyncHandler(careerController.getCareers));
careerRouter.get(
  '/:id',
  isAuth,
  expressAsyncHandler(careerController.getCareer)
);

export default careerRouter;
