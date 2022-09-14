import Company from '../models/company.model.js';

async function createCompany(company) {
  try {
    return await Company.create(company);
  } catch (err) {
    throw err;
  }
}

async function updateCompany(company) {
  try {
    await Company.update(company, {
      where: {
        id: company.id,
      },
    });
    return await getCompany(company.id);
  } catch (err) {
    throw err;
  }
}

async function deleteCompany(id) {
  try {
    return await Company.destroy({
      where: { id: id },
    });
  } catch (err) {
    throw err;
  }
}

async function getCompanys() {
  try {
    let companys = await Company.findAll();
    return companys;
  } catch (err) {
    throw err;
  }
}

async function getCompany(id) {
  try {
    let company = await Company.findByPk(id);
    return company;
  } catch (err) {
    throw err;
  }
}

export default {
  createCompany,
  updateCompany,
  deleteCompany,
  getCompanys,
  getCompany,
};
