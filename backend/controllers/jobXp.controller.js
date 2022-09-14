import jobXpService from '../services/jobXp.service.js';

async function createJobXp(req, res, next) {
  try {
    let jobXps = req.body;
    jobXps.map((jobXp) => {
      if (
        !jobXp.userId ||
        !jobXp.title ||
        !jobXp.company ||
        !jobXp.startPeriod ||
        !jobXp.endPeriod ||
        !jobXp.description
      ) {
        throw new Error(
          'The user id, title, company, start period, end period and description are requerired!'
        );
      }
    });
    await jobXpService.createJobXp(jobXps);
    res.end();
    logger.info(`POST /jobXp/info - ${JSON.stringify(jobXps)}`);
  } catch (err) {
    next(err);
  }
}

async function updateJobXp(req, res, next) {
  try {
    let jobXp = req.body;
    if (
      !jobXp.id ||
      !jobXp.userId ||
      !jobXp.title ||
      !jobXp.company ||
      !jobXp.startPeriod ||
      !jobXp.endPeriod ||
      !jobXp.description
    ) {
      throw new Error(
        'The job exp id, user id, title, company, start period, end period and description are requerired!'
      );
    }
    jobXp = await jobXpService.updateJobXp(jobXp);
    res.send(jobXp);
    logger.info(`PUT /jobXp - ${JSON.stringify(jobXp)}`);
  } catch (err) {
    next(err);
  }
}

async function deleteJobXp(req, res, next) {
  try {
    await jobXpService.deleteJobXp(req.params.id);
    res.end();
    logger.info(`DELETE /jobXp - ${JSON.stringify()}`);
  } catch (err) {
    next(err);
  }
}

async function getJobXps(req, res, next) {
  try {
    res.send(await jobXpService.getJobXps(req.query.userId));
    logger.info(`GET /jobXp `);
  } catch (err) {
    next(err);
  }
}

async function getJobXp(req, res, next) {
  try {
    res.send(await jobXpService.getJobXp(req.params.id));
    logger.info(`GET /jobXps `);
  } catch (err) {
    next(err);
  }
}

export default {
  createJobXp,
  updateJobXp,
  deleteJobXp,
  getJobXps,
  getJobXp,
};
