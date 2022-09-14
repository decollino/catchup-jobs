import careerService from '../services/career.service.js';

async function createCareer(req, res, next) {
  try {
    let career = req.body;
    if (!career.jobTitle) {
      throw new Error('The career job title is requerired!');
    }

    await careerService.createCareer(career);
    res.end();
    logger.info(`POST /career/info - ${JSON.stringify(career)}`);
  } catch (err) {
    next(err);
  }
}

async function updateCareer(req, res, next) {
  try {
    let career = req.body;
    if (!career.id || !career.jobTitle) {
      throw new Error('The job title is requerired!');
    }
    career = await careerService.updateCareer(career);
    res.send(career);
    logger.info(`PUT /career - ${JSON.stringify(career)}`);
  } catch (err) {
    next(err);
  }
}

async function deleteCareer(req, res, next) {
  try {
    await careerService.deleteCareer(req.params.id);
    res.end();
    logger.info(`DELETE /career - ${JSON.stringify()}`);
  } catch (err) {
    next(err);
  }
}

async function getCareers(req, res, next) {
  try {
    res.send(await careerService.getCareers());
    logger.info(`GET /career `);
  } catch (err) {
    next(err);
  }
}

async function getCareer(req, res, next) {
  try {
    res.send(await careerService.getCareer(req.params.id));
    logger.info(`GET /careers `);
  } catch (err) {
    next(err);
  }
}

export default {
  createCareer,
  updateCareer,
  deleteCareer,
  getCareers,
  getCareer,
};
