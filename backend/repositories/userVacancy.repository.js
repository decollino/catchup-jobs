import User from '../models/user.model.js';
import UserVacancy from '../models/userVacancy.model.js';
import Vacancy from '../models/vacancy.model.js';

async function createUserVacancy(userVacancy) {
  try {
    return await UserVacancy.create(userVacancy);
  } catch (err) {
    throw err;
  }
}

async function updateUserVacancy(userVacancy) {
  try {
    await UserVacancy.update(
      {
        userVacancyName: userVacancy.userVacancyName,
        companyName: userVacancy.companyName,
        companyImage: userVacancy.companyImage,
        userVacancyDescription: userVacancy.userVacancyDescription,
      },
      {
        where: {
          id: userVacancy.id,
        },
      }
    );
    return await getJob(userVacancy.id);
  } catch (err) {
    throw err;
  }
}

async function deleteUserVacancy(id) {
  try {
    return await UserVacancy.destroy({
      where: { id: id },
    });
  } catch (err) {
    throw err;
  }
}

async function getUserVacancy(id) {
  try {
    return await UserVacancy.findByPk(id);
  } catch (err) {
    throw err;
  }
}

async function getUserVacancies() {
  try {
    return UserVacancy.findAll();
  } catch (err) {
    throw err;
  }
}

async function getUserVacanciesByUserId(id) {
  try {
    return await UserVacancy.findAll({
      where: {
        userId: id,
      },
      include: [
        {
          model: Vacancy,
        },
      ],
    });
  } catch (err) {
    throw err;
  }
}

export default {
  createUserVacancy,
  updateUserVacancy,
  getUserVacancy,
  deleteUserVacancy,
  getUserVacancies,
  getUserVacanciesByUserId,
};
