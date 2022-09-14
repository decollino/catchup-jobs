import userJobService from '../services/userJob.service.js';

async function createUserJob(req, res, next) {
  try {
    let userJobs = req.body;
    const loggedUser = req.user;
    userJobs.map((userJob) => {
      if (
        !userJob.userId ||
        !userJob.titleName ||
        !userJob.companyName ||
        !userJob.startPeriod ||
        !userJob.endPeriod ||
        !userJob.description
      ) {
        throw new Error(
          'The user id, title, company, start/end period and description are requerired!'
        );
      }
      if (userJob.userId === loggedUser.id || loggedUser.type === 'admin') {
        next;
      } else {
        throw new Error(
          `User does not have the privilege to perform this action!`
        );
      }
    });
    await userJobService.createUserJob(userJobs);
    res.end();
    logger.info(`POST /userJob/info - ${JSON.stringify(userJobs)}`);
  } catch (err) {
    next(err);
  }
}

async function updateUserJob(req, res, next) {
  try {
    let userJob = req.body;
    const loggedUser = req.user;
    if (
      !userJob.id ||
      !userJob.userId ||
      !userJob.titleName ||
      !userJob.companyName ||
      !userJob.startPeriod ||
      !userJob.endPeriod ||
      !userJob.description
    ) {
      throw new Error(
        'The id, user id, title, company, start/end period and description are requerired!'
      );
    }
    userJob = await userJobService.updateUserJob(userJob, loggedUser);
    res.send(userJob);
    logger.info(`PUT /userJob - ${JSON.stringify(userJob)}`);
  } catch (err) {
    next(err);
  }
}

async function deleteUserJob(req, res, next) {
  try {
    const loggedUser = req.user;
    await userJobService.deleteUserJob(req.params.id, loggedUser);
    res.end();
    logger.info(`DELETE /userJob - ${JSON.stringify()}`);
  } catch (err) {
    next(err);
  }
}

async function getUserJobs(req, res, next) {
  try {
    res.send(await userJobService.getUserJobs(req.query.userId));
    logger.info(`GET /userJob `);
  } catch (err) {
    next(err);
  }
}

async function getUserJob(req, res, next) {
  try {
    res.send(await userJobService.getUserJob(req.params.id));
    logger.info(`GET /userJobs `);
  } catch (err) {
    next(err);
  }
}

export default {
  createUserJob,
  updateUserJob,
  deleteUserJob,
  getUserJobs,
  getUserJob,
};
