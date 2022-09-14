import userLanguageRepository from '../repositories/userLanguage.repository.js';

async function createUserLanguage(userLanguageList) {
  if (userLanguageList.length === 1) {
    const userLanguage = userLanguageList[0];
    await userLanguageRepository.createUserLanguage(userLanguage);
  } else {
    await userLanguageRepository.createUsersLanguages(userLanguageList);
  }
}

async function updateUserLanguage(userLanguage) {
  return await userLanguageRepository.updateUserLanguage(userLanguage);
}

async function deleteUserLanguage(id) {
  return await userLanguageRepository.deleteUserLanguage(id);
}

async function getUserLanguages(userId, languageId) {
  // https://tonnie-api.herokuapp.com/api/userLanguages?userId=1
  if (userId) {
    return await userLanguageRepository.getUserLanguageByUserId(userId);
  }

  // https://tonnie-api.herokuapp.com/api/userLanguages?languageId=1
  if (languageId) {
    return await userLanguageRepository.getUserLanguageByLanguageId(languageId);
  }

  // https://tonnie-api.herokuapp.com/api/userLanguages
  return await userLanguageRepository.getUserLanguages();
}

// https://tonnie-api.herokuapp.com/api/userLanguages/1
async function getUserLanguage(id) {
  return await userLanguageRepository.getUserLanguage(id);
}

export default {
  createUserLanguage,
  updateUserLanguage,
  deleteUserLanguage,
  getUserLanguages,
  getUserLanguage,
};
