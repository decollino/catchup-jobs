import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import { isAuth } from '../utils.js';
import userController from '../controllers/user.controller.js';

const userRouter = express.Router();

userRouter.post('/signin', expressAsyncHandler(userController.signinUser));
userRouter.post('/register', expressAsyncHandler(userController.registerUser));
userRouter.post('/oauth', expressAsyncHandler(userController.oauthUser));
userRouter.post(
  '/sendResetPasswordCode',
  expressAsyncHandler(userController.sendResetPasswordCodeUser)
);
userRouter.post(
  '/validateResetCode',
  expressAsyncHandler(userController.validateResetCodeUser)
);
userRouter.put('/', isAuth, expressAsyncHandler(userController.updateUser));
userRouter.put(
  '/change-password',
  isAuth,
  expressAsyncHandler(userController.changePasswordUser)
);
userRouter.delete(
  '/:id',
  isAuth,
  expressAsyncHandler(userController.deleteUser)
);
userRouter.get('/', isAuth, expressAsyncHandler(userController.getUsers));
userRouter.get('/:id', isAuth, expressAsyncHandler(userController.getUser));

export default userRouter;
