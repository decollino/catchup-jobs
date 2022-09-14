import skillService from '../services/skill.service.js';

async function createSkill(req, res, next) {
  try {
    let skill = req.body;
    if (!skill.name || !skill.category) {
      throw new Error('The skill name and category are requerired!');
    }

    await skillService.createSkill(skill);
    res.end();
    logger.info(`POST /skill/info - ${JSON.stringify(skill)}`);
  } catch (err) {
    next(err);
  }
}

async function updateSkill(req, res, next) {
  try {
    let skill = req.body;
    if (!skill.id || !skill.name || !skill.category) {
      throw new Error('The id, name and category are requerired!');
    }
    skill = await skillService.updateSkill(skill);
    res.send(skill);
    logger.info(`PUT /skill - ${JSON.stringify(skill)}`);
  } catch (err) {
    next(err);
  }
}

async function deleteSkill(req, res, next) {
  try {
    await skillService.deleteSkill(req.params.id);
    res.end();
    logger.info(`DELETE /skill - ${JSON.stringify()}`);
  } catch (err) {
    next(err);
  }
}

async function getSkills(req, res, next) {
  try {
    res.send(await skillService.getSkills());
    logger.info(`GET /skill `);
  } catch (err) {
    next(err);
  }
}

async function getSkill(req, res, next) {
  try {
    res.send(await skillService.getSkill(req.params.id));
    logger.info(`GET /skills `);
  } catch (err) {
    next(err);
  }
}

export default {
  createSkill,
  updateSkill,
  deleteSkill,
  getSkills,
  getSkill,
};
