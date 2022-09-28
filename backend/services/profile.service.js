import userRepository from '../repositories/user.repository.js';
import userEducationRepository from '../repositories/userEducation.repository.js';
import userJobRepository from '../repositories/userJob.repository.js';
import userLanguageRepository from '../repositories/userLanguage.repository.js';
import userSkillRepository from '../repositories/userSkill.repository.js';

async function registerProfile(profile) {
  // User
  const userPersonalInfo = {
    id: profile.aboutYouPi.id,
    nickname: profile.aboutYouPi.nickname,
    pronouns: profile.aboutYouPi.pronouns,
    city: profile.aboutYouPi.city,
    ddi: profile.aboutYouPi.ddi,
    phone: profile.aboutYouPi.phone,
    profileUrl: profile.profileUrl,
    jobTitle: profile.aboutYouCareer.jobTitle,
    yearsOfXp: profile.aboutYouCareer.yearsOfExperience,
  };
  const newUserPersonalInfo = await userRepository.updateUser(userPersonalInfo);

  // User Language
  let newUserLanguage = '';
  if (profile.aboutYouLanguage.length === 1) {
    const userLanguage = profile.aboutYouLanguage[0];
    newUserLanguage = await userLanguageRepository.createUserLanguage(
      userLanguage
    );
  } else {
    newUserLanguage = await userLanguageRepository.createUsersLanguages(
      profile.aboutYouLanguage
    );
  }

  // User Skill
  let newUserSkill = '';
  if (profile.skills.length === 1) {
    const userSkill = profile.skills[0];
    newUserSkill = await userSkillRepository.createUserSkill(userSkill);
  } else {
    newUserSkill = await userSkillRepository.createUserSkills(profile.skills);
  }

  // User Educations
  let newUserEducation = '';
  if (profile.education.length === 1) {
    const userEducation = profile.education[0];
    newUserEducation = await userEducationRepository.createUserEducation(
      userEducation
    );
  } else {
    newUserEducation = await userEducationRepository.createUserEducations(
      profile.education
    );
  }

  // User Jobs
  let newUserJob = '';
  if (profile.jobExperience.length === 1) {
    const userJob = profile.jobExperience[0];
    newUserJob = await userJobRepository.createUserJob(userJob);
  } else {
    newUserJob = await userJobRepository.createUserJobs(profile.jobExperience);
  }

  return {
    newUserPersonalInfo,
    newUserLanguage,
    newUserSkill,
    newUserEducation,
    newUserJob,
  };
}

export default {
  registerProfile,
};
