import Vacancy from '../models/vacancy.model.js';

async function createVacancy(vacancy) {
  try {
    return await Vacancy.create(vacancy);
  } catch (err) {
    throw err;
  }
}

async function updateVacancy(vacancy) {
  try {
    await Vacancy.update(
      {
        vacancyName: vacancy.vacancyName,
        companyName: vacancy.companyName,
        companyImage: vacancy.companyImage,
        vacancyDescription: vacancy.vacancyDescription,
      },
      {
        where: {
          id: vacancy.id,
        },
      }
    );
    return await getJob(vacancy.id);
  } catch (err) {
    throw err;
  }
}

async function deleteVacancy(id) {
  try {
    return await Vacancy.destroy({
      where: { id: id },
    });
  } catch (err) {
    throw err;
  }
}

async function getVacancy(id) {
  try {
    return await Vacancy.findByPk(id);
  } catch (err) {
    throw err;
  }
}

async function getVacancies() {
  try {
    return Vacancy.findAll();
  } catch (err) {
    throw err;
  }
}

export default {
  createVacancy,
  updateVacancy,
  getVacancy,
  deleteVacancy,
  getVacancies,
};
