import titleRepository from '../repositories/title.repository.js';

async function createTitle(title, loggedUser) {
  if (loggedUser.type === 'admin') {
    return await titleRepository.createTitle(title);
  } else {
    throw new Error(`User does not have the privilege to perform this action!`);
  }
}

async function updateTitle(title, loggedUser) {
  if (loggedUser.type === 'admin') {
    return await titleRepository.updateTitle(title);
  } else {
    throw new Error(`User does not have the privilege to perform this action!`);
  }
}

async function deleteTitle(id, loggedUser) {
  if (loggedUser.type === 'admin') {
    return await titleRepository.deleteTitle(id);
  } else {
    throw new Error(`User does not have the privilege to perform this action!`);
  }
}

async function getTitles() {
  return await titleRepository.getTitles();
}

async function getTitle(id) {
  return await titleRepository.getTitle(id);
}

export default {
  createTitle,
  updateTitle,
  deleteTitle,
  getTitles,
  getTitle,
};
