import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import { isAuth } from '../utils.js';
import titleController from '../controllers/title.controller.js';

const titleRouter = express.Router();

titleRouter.post('/', isAuth, expressAsyncHandler(titleController.createTitle));
titleRouter.put('/', isAuth, expressAsyncHandler(titleController.updateTitle));
titleRouter.delete(
  '/:id',
  isAuth,
  expressAsyncHandler(titleController.deleteTitle)
);
titleRouter.get('/', isAuth, expressAsyncHandler(titleController.getTitles));
titleRouter.get('/:id', isAuth, expressAsyncHandler(titleController.getTitle));

export default titleRouter;
