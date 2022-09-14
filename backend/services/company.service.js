import companyRepository from '../repositories/company.repository.js';

async function createCompany(company, loggedUser) {
  if (loggedUser.type === 'admin') {
    return await companyRepository.createCompany(company);
  } else {
    throw new Error(`User does not have the privilege to perform this action!`);
  }
}

async function updateCompany(company, loggedUser) {
  if (loggedUser.type === 'admin') {
    return await companyRepository.updateCompany(company);
  } else {
    throw new Error(`User does not have the privilege to perform this action!`);
  }
}

async function deleteCompany(id, loggedUser) {
  if (loggedUser.type === 'admin') {
    return await companyRepository.deleteCompany(id);
  } else {
    throw new Error(`User does not have the privilege to perform this action!`);
  }
}

async function getCompanys() {
  return await companyRepository.getCompanys();
}

async function getCompany(id) {
  return await companyRepository.getCompany(id);
}

export default {
  createCompany,
  updateCompany,
  deleteCompany,
  getCompanys,
  getCompany,
};
