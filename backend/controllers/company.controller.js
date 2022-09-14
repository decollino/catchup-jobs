import companyService from '../services/company.service.js';

async function createCompany(req, res, next) {
  try {
    let company = req.body;
    const loggedUser = req.user;
    if (!company.name) {
      throw new Error('The company is requerired!');
    }

    await companyService.createCompany(company, loggedUser);
    res.end();
    logger.info(`POST /company/info - ${JSON.stringify(company)}`);
  } catch (err) {
    next(err);
  }
}

async function updateCompany(req, res, next) {
  try {
    let company = req.body;
    const loggedUser = req.user;
    if (!company.id || !company.name) {
      throw new Error('The id and name are requerired!');
    }
    company = await companyService.updateCompany(company, loggedUser);
    res.send(company);
    logger.info(`PUT /company - ${JSON.stringify(company)}`);
  } catch (err) {
    next(err);
  }
}

async function deleteCompany(req, res, next) {
  try {
    const loggedUser = req.user;
    await companyService.deleteCompany(req.params.id, loggedUser);
    res.end();
    logger.info(`DELETE /company - ${JSON.stringify()}`);
  } catch (err) {
    next(err);
  }
}

async function getCompanys(req, res, next) {
  try {
    res.send(await companyService.getCompanys());
    logger.info(`GET /company `);
  } catch (err) {
    next(err);
  }
}

async function getCompany(req, res, next) {
  try {
    res.send(await companyService.getCompany(req.params.id));
    logger.info(`GET /companys `);
  } catch (err) {
    next(err);
  }
}

export default {
  createCompany,
  updateCompany,
  deleteCompany,
  getCompanys,
  getCompany,
};
