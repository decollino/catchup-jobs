import userVacancyService from '../services/userVacancy.service.js';

async function createUserVacancy(req, res, next) {
  try {
    let userVacancy = req.body;
    const loggedUser = req.user;
    if (!userVacancy.userId || !userVacancy.vacancyId) {
      throw new Error('The user id and vacancy id are mandatory!');
    }
    if (typeof userVacancy.status === 'undefined') {
      userVacancy.status = 'Applied';
    }
    res.send(
      await userVacancyService.createUserVacancy(userVacancy, loggedUser)
    );
    logger.info(`POST /createUserVacancy - ${JSON.stringify(userVacancy)}`);
  } catch (err) {
    next(err);
  }
}

async function updateUserVacancy(req, res, next) {
  try {
    let userVacancy = req.body;
    const loggedUser = req.user;
    if (
      !userVacancy.id ||
      !userVacancy.userId ||
      !userVacancy.vacancyId ||
      !userVacancy.status
    ) {
      throw new Error(
        'The userVacancy id, user id and vacancy id and status are mandatory!'
      );
    }
    userVacancy = await userVacancyService.updateUserVacancy(
      userVacancy,
      loggedUser
    );
    res.send(userVacancy);
    logger.info(`PUT /updateUserVacancy - ${JSON.stringify(userVacancy)}`);
  } catch (err) {
    next(err);
  }
}

async function deleteUserVacancy(req, res, next) {
  try {
    const loggedUser = req.user;
    await userVacancyService.deleteUserVacancy(
      parseInt(req.params.id),
      loggedUser
    );
    res.end();
    logger.info(`DELETE /userVacancy - ${JSON.stringify()}`);
  } catch (err) {
    next(err);
  }
}

async function getUserVacancies(req, res, next) {
  try {
    const loggedUser = req.user;
    res.send(
      await userVacancyService.getUserVacancies(loggedUser, req.query.userId)
    );
    logger.info(`GET /userVacancy `);
  } catch (err) {
    next(err);
  }
}

async function getUserVacancy(req, res, next) {
  try {
    const loggedUser = req.user;
    res.send(
      await userVacancyService.getUserVacancy(
        parseInt(req.params.id),
        loggedUser
      )
    );
    logger.info(`GET /vacancies `);
  } catch (err) {
    next(err);
  }
}

export default {
  createUserVacancy,
  updateUserVacancy,
  deleteUserVacancy,
  getUserVacancies,
  getUserVacancy,
};
