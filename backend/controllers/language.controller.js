import languageService from '../services/language.service.js';

async function createLanguage(req, res, next) {
  try {
    let language = req.body;
    const loggedUser = req.user;
    if (!language.name) {
      throw new Error('The language is requerired!');
    }

    await languageService.createLanguage(language, loggedUser);
    res.end();
    logger.info(`POST /language/info - ${JSON.stringify(language)}`);
  } catch (err) {
    next(err);
  }
}

async function updateLanguage(req, res, next) {
  try {
    let language = req.body;
    const loggedUser = req.user;
    if (!language.id || !language.name) {
      throw new Error('The id and name are requerired!');
    }
    language = await languageService.updateLanguage(language, loggedUser);
    res.send(language);
    logger.info(`PUT /language - ${JSON.stringify(language)}`);
  } catch (err) {
    next(err);
  }
}

async function deleteLanguage(req, res, next) {
  try {
    const loggedUser = req.user;
    await languageService.deleteLanguage(req.params.id, loggedUser);
    res.end();
    logger.info(`DELETE /language - ${JSON.stringify()}`);
  } catch (err) {
    next(err);
  }
}

async function getLanguages(req, res, next) {
  try {
    res.send(await languageService.getLanguages());
    logger.info(`GET /language `);
  } catch (err) {
    next(err);
  }
}

async function getLanguage(req, res, next) {
  try {
    res.send(await languageService.getLanguage(req.params.id));
    logger.info(`GET /languages `);
  } catch (err) {
    next(err);
  }
}

export default {
  createLanguage,
  updateLanguage,
  deleteLanguage,
  getLanguages,
  getLanguage,
};
