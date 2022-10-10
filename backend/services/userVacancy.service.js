import userVacancyRepository from '../repositories/userVacancy.repository.js';

async function createUserVacancy(userVacancy, loggedUser) {
  return await userVacancyRepository.createUserVacancy(userVacancy);
}

async function updateUserVacancy(userVacancy, loggedUser) {
  return await userVacancyRepository.updateUserVacancy(userVacancy);
}

async function deleteUserVacancy(id, loggedUser) {
  return await userVacancyRepository.deleteUserVacancy(id);
}

async function getUserVacancies(loggedUser, userId) {
  if (userId) {
    return await userVacancyRepository.getUserVacanciesByUserId(userId);
  }
  return await userVacancyRepository.getUserVacancies();
}

async function getUserVacancy(id, loggedUser) {
  return await userVacancyRepository.getUserVacancy(id);
}

export default {
  createUserVacancy,
  updateUserVacancy,
  deleteUserVacancy,
  getUserVacancies,
  getUserVacancy,
};
