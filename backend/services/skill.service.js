import skillRepository from '../repositories/skill.repository.js';

async function createSkill(skill) {
  await skillRepository.createSkill(skill);
}

async function updateSkill(skill) {
  return await skillRepository.updateSkill(skill);
}

async function deleteSkill(id) {
  return await skillRepository.deleteSkill(id);
  // const books = await bookRepository.getBookBySkillId(id);
  // if (books.length !== 0) {
  //   throw new Error(
  //     'Forbidden deletion! There are books registered for this skill!'
  //   );
  // } else {
  //   return await skillRepository.deleteSkill(id);
  // }
}

async function getSkills() {
  return await skillRepository.getSkills();
}

async function getSkill(id) {
  return await skillRepository.getSkill(id);
}

export default {
  createSkill,
  updateSkill,
  deleteSkill,
  getSkills,
  getSkill,
};
