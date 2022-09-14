import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import { isAuth } from '../utils.js';
import jobXpController from '../controllers/jobXp.controller.js';

const jobXpRouter = express.Router();

jobXpRouter.post('/', isAuth, expressAsyncHandler(jobXpController.createJobXp));
jobXpRouter.put('/', isAuth, expressAsyncHandler(jobXpController.updateJobXp));
jobXpRouter.delete(
  '/:id',
  isAuth,
  expressAsyncHandler(jobXpController.deleteJobXp)
);
jobXpRouter.get('/', isAuth, expressAsyncHandler(jobXpController.getJobXps));
jobXpRouter.get('/:id', isAuth, expressAsyncHandler(jobXpController.getJobXp));

export default jobXpRouter;
