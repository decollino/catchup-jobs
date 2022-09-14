import languageRepository from '../repositories/language.repository.js';

async function createLanguage(language, loggedUser) {
  if (loggedUser.type === 'admin') {
    return await languageRepository.createLanguage(language);
  } else {
    throw new Error(`User does not have the privilege to perform this action!`);
  }
}

async function updateLanguage(language, loggedUser) {
  if (loggedUser.type === 'admin') {
    return await languageRepository.updateLanguage(language);
  } else {
    throw new Error(`User does not have the privilege to perform this action!`);
  }
}

async function deleteLanguage(id, loggedUser) {
  if (loggedUser.type === 'admin') {
    return await languageRepository.deleteLanguage(id);
  } else {
    throw new Error(`User does not have the privilege to perform this action!`);
  }
}

async function getLanguages() {
  return await languageRepository.getLanguages();
}

async function getLanguage(id) {
  return await languageRepository.getLanguage(id);
}

export default {
  createLanguage,
  updateLanguage,
  deleteLanguage,
  getLanguages,
  getLanguage,
};
