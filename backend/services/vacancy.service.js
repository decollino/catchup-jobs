import vacancyRepository from '../repositories/vacancy.repository.js';

async function createVacancy(vacancy, loggedUser) {
  if (loggedUser.type === 'partner' || loggedUser.type === 'admin') {
    return await vacancyRepository.createVacancy(vacancy);
  } else {
    throw new Error(`User does not have the privilege to perform this action!`);
  }
}

async function updateVacancy(vacancy, loggedUser) {
  if (loggedUser.type === 'partner' || loggedUser.type === 'admin') {
    return await vacancyRepository.updateVacancy(vacancy);
  } else {
    throw new Error(`User does not have the privilege to perform this action!`);
  }
}

async function deleteVacancy(id, loggedUser) {
  if (loggedUser.type === 'partner' || loggedUser.type === 'admin') {
    return await vacancyRepository.deleteVacancy(id);
  } else {
    throw new Error(`User does not have the privilege to perform this action!`);
  }
}

async function getVacancies(loggedUser) {
  return await vacancyRepository.getVacancies();
}

async function getVacancy(id, loggedUser) {
  return await vacancyRepository.getVacancy(id);
}

export default {
  createVacancy,
  updateVacancy,
  deleteVacancy,
  getVacancies,
  getVacancy,
};
