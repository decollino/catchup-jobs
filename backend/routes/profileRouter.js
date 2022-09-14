import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import { isAuth } from '../utils.js';
import profileController from '../controllers/profile.controller.js';

const profileRouter = express.Router();

profileRouter.post(
  '/',
  isAuth,
  expressAsyncHandler(profileController.registerProfile)
);

export default profileRouter;
