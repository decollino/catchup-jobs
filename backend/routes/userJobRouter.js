import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import { isAuth } from '../utils.js';
import userJobController from '../controllers/userJob.controller.js';

const userJobRouter = express.Router();

userJobRouter.post(
  '/',
  isAuth,
  expressAsyncHandler(userJobController.createUserJob)
);
userJobRouter.put(
  '/',
  isAuth,
  expressAsyncHandler(userJobController.updateUserJob)
);
userJobRouter.delete(
  '/:id',
  isAuth,
  expressAsyncHandler(userJobController.deleteUserJob)
);
userJobRouter.get(
  '/',
  isAuth,
  expressAsyncHandler(userJobController.getUserJobs)
);
userJobRouter.get(
  '/:id',
  isAuth,
  expressAsyncHandler(userJobController.getUserJob)
);

export default userJobRouter;
