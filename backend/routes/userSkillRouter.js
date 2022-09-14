import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import { isAuth } from '../utils.js';
import userSkillController from '../controllers/userSkill.controller.js';

const userSkillRouter = express.Router();

userSkillRouter.post(
  '/',
  isAuth,
  expressAsyncHandler(userSkillController.createUserSkill)
);
userSkillRouter.put(
  '/',
  isAuth,
  expressAsyncHandler(userSkillController.updateUserSkill)
);
userSkillRouter.delete(
  '/:id',
  isAuth,
  expressAsyncHandler(userSkillController.deleteUserSkill)
);
userSkillRouter.get(
  '/',
  isAuth,
  expressAsyncHandler(userSkillController.getUserSkills)
);
userSkillRouter.get(
  '/:id',
  isAuth,
  expressAsyncHandler(userSkillController.getUserSkill)
);

export default userSkillRouter;
