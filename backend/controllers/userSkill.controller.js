import userSkillService from '../services/userSkill.service.js';

async function createUserSkill(req, res, next) {
  try {
    let userSkills = req.body;
    userSkills.map((userSkill) => {
      if (!userSkill.userId || !userSkill.skillId || !userSkill.yearsOfXp) {
        throw new Error(
          'The user id, skill id and years of experience are requerired!'
        );
      }
    });
    await userSkillService.createUserSkill(userSkills);
    res.end();
    logger.info(`POST /userSkill/info - ${JSON.stringify(userSkills)}`);
  } catch (err) {
    next(err);
  }
}

async function updateUserSkill(req, res, next) {
  try {
    let userSkill = req.body;
    if (
      !userSkill.id ||
      !userSkill.userId ||
      !userSkill.skillId ||
      !userSkill.yearsOfXp
    ) {
      throw new Error(
        'The user skill id, the user id, the skill id and years of experience are requerired!'
      );
    }
    userSkill = await userSkillService.updateUserSkill(userSkill);
    res.send(userSkill);
    logger.info(`PUT /userSkill - ${JSON.stringify(userSkill)}`);
  } catch (err) {
    next(err);
  }
}

async function deleteUserSkill(req, res, next) {
  try {
    await userSkillService.deleteUserSkill(req.params.id);
    res.end();
    logger.info(`DELETE /userSkill - ${JSON.stringify()}`);
  } catch (err) {
    next(err);
  }
}

async function getUserSkills(req, res, next) {
  try {
    res.send(
      await userSkillService.getUserSkills(
        req.query.userId,
        req.query.skillId,
        req.query.yearsOfXp
      )
    );
    logger.info(`GET /userSkill `);
  } catch (err) {
    next(err);
  }
}

async function getUserSkill(req, res, next) {
  try {
    res.send(await userSkillService.getUserSkill(req.params.id));
    logger.info(`GET /userSkills `);
  } catch (err) {
    next(err);
  }
}

export default {
  createUserSkill,
  updateUserSkill,
  deleteUserSkill,
  getUserSkills,
  getUserSkill,
};
