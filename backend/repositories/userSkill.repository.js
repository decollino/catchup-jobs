import Skill from '../models/skill.model.js';
import User from '../models/user.model.js';
import UserSkill from '../models/userSkill.model.js';

async function createUserSkill(userSkill) {
  try {
    return await UserSkill.create(userSkill);
  } catch (err) {
    throw err;
  }
}

async function createUserSkills(userSkillList) {
  try {
    return await UserSkill.bulkCreate(userSkillList);
  } catch (err) {
    throw err;
  }
}

async function updateUserSkill(userSkill) {
  try {
    await UserSkill.update(userSkill, {
      where: {
        id: userSkill.id,
      },
    });
    return await getUserSkill(userSkill.id);
  } catch (err) {
    throw err;
  }
}

async function deleteUserSkill(id) {
  try {
    return await UserSkill.destroy({
      where: { id: id },
    });
  } catch (err) {
    throw err;
  }
}

async function getUserSkills() {
  try {
    let userSkills = await UserSkill.findAll();
    return userSkills;
  } catch (err) {
    throw err;
  }
}

async function getUserSkill(id) {
  try {
    let userSkill = await UserSkill.findByPk(id);
    return userSkill;
  } catch (err) {
    throw err;
  }
}

async function getUserSkillByUserId(id) {
  try {
    return await UserSkill.findAll({
      where: {
        userId: id,
      },
      include: [
        {
          model: User,
        },
      ],
    });
  } catch (err) {
    throw err;
  }
}

async function getUserSkillBySkillId(id) {
  try {
    return await UserSkill.findAll({
      where: {
        skillId: id,
      },
      include: [
        {
          model: Skill,
        },
      ],
    });
  } catch (err) {
    throw err;
  }
}

export default {
  createUserSkill,
  createUserSkills,
  getUserSkill,
  getUserSkills,
  updateUserSkill,
  deleteUserSkill,
  getUserSkillByUserId,
  getUserSkillBySkillId,
};
