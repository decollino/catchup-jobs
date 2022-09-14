import userLanguageService from '../services/userLanguage.service.js';

async function createUserLanguage(req, res, next) {
  try {
    let userLanguages = req.body;
    userLanguages.map((userLanguage) => {
      if (
        !userLanguage.userId ||
        !userLanguage.languageId ||
        !userLanguage.level
      ) {
        throw new Error('The user id, language id and level are requerired!');
      }
    });
    await userLanguageService.createUserLanguage(userLanguages);
    res.end();
    logger.info(`POST /userLanguage/info - ${JSON.stringify(userLanguages)}`);
  } catch (err) {
    next(err);
  }
}

async function updateUserLanguage(req, res, next) {
  try {
    let userLanguage = req.body;
    if (
      !userLanguage.id ||
      !userLanguage.userId ||
      !userLanguage.languageId ||
      !userLanguage.level
    ) {
      throw new Error(
        'The user language id, the user id, the language id and level are requerired!'
      );
    }
    userLanguage = await userLanguageService.updateUserLanguage(userLanguage);
    res.send(userLanguage);
    logger.info(`PUT /userLanguage - ${JSON.stringify(userLanguage)}`);
  } catch (err) {
    next(err);
  }
}

async function deleteUserLanguage(req, res, next) {
  try {
    await userLanguageService.deleteUserLanguage(req.params.id);
    res.end();
    logger.info(`DELETE /userLanguage - ${JSON.stringify()}`);
  } catch (err) {
    next(err);
  }
}

async function getUserLanguages(req, res, next) {
  try {
    res.send(
      await userLanguageService.getUserLanguages(
        req.query.userId,
        req.query.languageId
      )
    );
    logger.info(`GET /userLanguage `);
  } catch (err) {
    next(err);
  }
}

async function getUserLanguage(req, res, next) {
  try {
    res.send(await userLanguageService.getUserLanguage(req.params.id));
    logger.info(`GET /userLanguages `);
  } catch (err) {
    next(err);
  }
}

export default {
  createUserLanguage,
  updateUserLanguage,
  deleteUserLanguage,
  getUserLanguages,
  getUserLanguage,
};
