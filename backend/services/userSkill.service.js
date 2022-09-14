import userSkillRepository from '../repositories/userSkill.repository.js';

async function createUserSkill(userSkillList) {
  if (userSkillList.length === 1) {
    const userSkill = userSkillList[0];
    await userSkillRepository.createUserSkill(userSkill);
  } else {
    await userSkillRepository.createUserSkills(userSkillList);
  }
}

async function updateUserSkill(userSkill) {
  return await userSkillRepository.updateUserSkill(userSkill);
}

async function deleteUserSkill(id) {
  return await userSkillRepository.deleteUserSkill(id);
}

async function getUserSkills(userId, skillId) {
  if (userId) {
    return await userSkillRepository.getUserSkillByUserId(userId);
  }
  if (skillId) {
    return await userSkillRepository.getUserSkillByCareerId(skillId);
  }
  return await userSkillRepository.getUserSkills();
}

async function getUserSkill(id) {
  return await userSkillRepository.getUserSkill(id);
}

export default {
  createUserSkill,
  updateUserSkill,
  deleteUserSkill,
  getUserSkills,
  getUserSkill,
};
