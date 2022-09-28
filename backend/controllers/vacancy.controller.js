import vacancyService from '../services/vacancy.service.js';

async function createVacancy(req, res, next) {
  try {
    let vacancy = req.body;
    const loggedUser = req.user;
    if (
      !vacancy.vacancyName ||
      !vacancy.companyName ||
      !vacancy.companyImage ||
      !vacancy.vacancyDescription
    ) {
      throw new Error(
        'The vacancy name, company name, company image and vacancy description!'
      );
    }
    res.send(await vacancyService.createVacancy(vacancy, loggedUser));
    logger.info(`POST /createVacancy - ${JSON.stringify(vacancy)}`);
  } catch (err) {
    next(err);
  }
}

async function updateVacancy(req, res, next) {
  try {
    let vacancy = req.body;
    const loggedUser = req.user;
    if (
      !vacancy.id ||
      !vacancy.vacancyName ||
      !vacancy.companyName ||
      !vacancy.companyImage ||
      !vacancy.vacancyDescription
    ) {
      throw new Error(
        'The vacancy id, vacancy name, company name, company image and vacancy description!'
      );
    }
    vacancy = await vacancyService.updateVacancy(vacancy, loggedUser);
    res.send(vacancy);
    logger.info(`PUT /updateVacancy - ${JSON.stringify(vacancy)}`);
  } catch (err) {
    next(err);
  }
}

async function deleteVacancy(req, res, next) {
  try {
    const loggedUser = req.user;
    await vacancyService.deleteVacancy(parseInt(req.params.id), loggedUser);
    res.end();
    logger.info(`DELETE /vacancy - ${JSON.stringify()}`);
  } catch (err) {
    next(err);
  }
}

async function getVacancies(req, res, next) {
  try {
    const loggedUser = req.user;
    res.send(await vacancyService.getVacancies(loggedUser));
    logger.info(`GET /vacancy `);
  } catch (err) {
    next(err);
  }
}

async function getVacancy(req, res, next) {
  try {
    const loggedUser = req.user;
    res.send(
      await vacancyService.getVacancy(parseInt(req.params.id), loggedUser)
    );
    logger.info(`GET /vacancies `);
  } catch (err) {
    next(err);
  }
}

export default {
  createVacancy,
  updateVacancy,
  deleteVacancy,
  getVacancies,
  getVacancy,
};
