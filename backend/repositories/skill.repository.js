import Skill from '../models/skill.model.js';

async function createSkill(skill) {
  try {
    return await Skill.create(skill);
  } catch (err) {
    throw err;
  }
}

async function updateSkill(skill) {
  try {
    await Skill.update(skill, {
      where: {
        id: skill.id,
      },
    });
    return await getSkill(skill.id);
  } catch (err) {
    throw err;
  }
}

async function deleteSkill(id) {
  try {
    return await Skill.destroy({
      where: { id: id },
    });
  } catch (err) {
    throw err;
  }
}

async function getSkills() {
  try {
    let skills = await Skill.findAll();
    return skills;
  } catch (err) {
    throw err;
  }
}

async function getSkill(id) {
  try {
    let skill = await Skill.findByPk(id);
    return skill;
  } catch (err) {
    throw err;
  }
}

export default {
  createSkill,
  updateSkill,
  deleteSkill,
  getSkills,
  getSkill,
};
