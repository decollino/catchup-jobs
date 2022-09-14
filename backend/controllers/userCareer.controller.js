import userCareerService from '../services/userCareer.service.js';

async function createUserCareer(req, res, next) {
  try {
    let userCareers = req.body;
    const loggedUser = req.user;
    userCareers.map((userCareer) => {
      if (!userCareer.userId || !userCareer.careerId || !userCareer.yearsOfXp) {
        throw new Error(
          'The user id, career id and years of experience are requerired!'
        );
      }
    });
    await userCareerService.createUserCareer(userCareers, loggedUser);
    res.end();
    logger.info(`POST /userCareer/info - ${JSON.stringify(userCareers)}`);
  } catch (err) {
    next(err);
  }
}

async function updateUserCareer(req, res, next) {
  try {
    let userCareer = req.body;
    const loggedUser = req.user;
    if (
      !userCareer.id ||
      !userCareer.userId ||
      !userCareer.careerId ||
      !userCareer.yearsOfXp
    ) {
      throw new Error(
        'The user career id, the user id, the career id and years of experience are requerired!'
      );
    }
    userCareer = await userCareerService.updateUserCareer(
      userCareer,
      loggedUser
    );
    res.send(userCareer);
    logger.info(`PUT /userCareer - ${JSON.stringify(userCareer)}`);
  } catch (err) {
    next(err);
  }
}

async function deleteUserCareer(req, res, next) {
  try {
    const loggedUser = req.user;
    await userCareerService.deleteUserCareer(
      parseInt(req.params.id),
      loggedUser
    );
    res.end();
    logger.info(`DELETE /userCareer - ${JSON.stringify()}`);
  } catch (err) {
    next(err);
  }
}

async function getUserCareers(req, res, next) {
  try {
    const loggedUser = req.user;
    res.send(
      await userCareerService.getUserCareers(
        req.query.userId,
        req.query.careerId,
        loggedUser
      )
    );
    logger.info(`GET /userCareer `);
  } catch (err) {
    next(err);
  }
}

async function getUserCareer(req, res, next) {
  try {
    const loggedUser = req.user;
    res.send(
      await userCareerService.getUserCareer(parseInt(req.params.id), loggedUser)
    );
    logger.info(`GET /userCareers `);
  } catch (err) {
    next(err);
  }
}

export default {
  createUserCareer,
  updateUserCareer,
  deleteUserCareer,
  getUserCareers,
  getUserCareer,
};
