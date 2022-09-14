import userRepository from '../repositories/user.repository.js';
import userCareerRepository from '../repositories/userCareer.repository.js';
import userJobRepository from '../repositories/userJob.repository.js';
import userLanguageRepository from '../repositories/userLanguage.repository.js';
import userSkillRepository from '../repositories/userSkill.repository.js';

async function registerProfile(profile) {
  // User
  const userPersonalInfo = { ...profile.aboutYouPi, ...profile.jobExperience };
  const newUserPersonalInfo = await userRepository.updateUser(userPersonalInfo);

  // Career
  const userId = profile.aboutYouPi.id;
  // const careerId = profile.aboutYouCareer.jobTitle;
  const jobTitle = profile.aboutYouCareer.jobTitle;
  const yearsOfXpCareer = profile.aboutYouCareer.yearsOfExperience;
  const userJob = {
    userId,
    jobTitle,
    yearsOfXpCareer,
  };
  const newUserJob = await userJobRepository.registerUserJob(userJob);
  // const newUserCareer = await userCareerRepository.registerUserCareer(userJob);

  // Language
  const languageId = profile.aboutYouLanguage.language;
  const level = profile.aboutYouLanguage.level;
  const userLanguage = {
    userId,
    languageId,
    level,
  };
  const newUserLanguage = await userLanguageRepository.createUserLanguage(
    userLanguage
  );

  // skill
  const skillId = profile.skills.popularSkill;
  const yearsOfXpSkill = profile.skills.yearsOfXp;
  const userSkill = {
    userId,
    skillId,
    yearsOfXpSkill,
  };
  const newUserSkill = await userSkillRepository.createUserSkill(userSkill);

  return { newUserPersonalInfo, newUserJob, newUserLanguage, newUserSkill };
}

export default {
  registerProfile,
};
