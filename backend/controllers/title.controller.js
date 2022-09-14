import titleService from '../services/title.service.js';

async function createTitle(req, res, next) {
  try {
    let title = req.body;
    const loggedUser = req.user;
    if (!title.name) {
      throw new Error('The title is requerired!');
    }

    await titleService.createTitle(title, loggedUser);
    res.end();
    logger.info(`POST /title/info - ${JSON.stringify(title)}`);
  } catch (err) {
    next(err);
  }
}

async function updateTitle(req, res, next) {
  try {
    let title = req.body;
    const loggedUser = req.user;
    if (!title.id || !title.name) {
      throw new Error('The id and name are requerired!');
    }
    title = await titleService.updateTitle(title, loggedUser);
    res.send(title);
    logger.info(`PUT /title - ${JSON.stringify(title)}`);
  } catch (err) {
    next(err);
  }
}

async function deleteTitle(req, res, next) {
  try {
    const loggedUser = req.user;
    await titleService.deleteTitle(req.params.id, loggedUser);
    res.end();
    logger.info(`DELETE /title - ${JSON.stringify()}`);
  } catch (err) {
    next(err);
  }
}

async function getTitles(req, res, next) {
  try {
    res.send(await titleService.getTitles());
    logger.info(`GET /title `);
  } catch (err) {
    next(err);
  }
}

async function getTitle(req, res, next) {
  try {
    res.send(await titleService.getTitle(req.params.id));
    logger.info(`GET /titles `);
  } catch (err) {
    next(err);
  }
}

export default {
  createTitle,
  updateTitle,
  deleteTitle,
  getTitles,
  getTitle,
};
