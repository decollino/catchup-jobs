import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import { isAuth } from '../utils.js';
import skillController from '../controllers/skill.controller.js';

const skillRouter = express.Router();

skillRouter.post('/', isAuth, expressAsyncHandler(skillController.createSkill));
skillRouter.put('/', isAuth, expressAsyncHandler(skillController.updateSkill));
skillRouter.delete(
  '/:id',
  isAuth,
  expressAsyncHandler(skillController.deleteSkill)
);
skillRouter.get('/', isAuth, expressAsyncHandler(skillController.getSkills));
skillRouter.get('/:id', isAuth, expressAsyncHandler(skillController.getSkill));

export default skillRouter;
