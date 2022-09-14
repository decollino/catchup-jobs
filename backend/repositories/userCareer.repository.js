import Career from '../models/career.model.js';
import User from '../models/user.model.js';
import UserCareer from '../models/userCareer.model.js';

async function createUserCareer(userCareer) {
  try {
    return await UserCareer.create(userCareer);
  } catch (err) {
    throw err;
  }
}

async function createUserCareers(userCareerList) {
  try {
    return await UserCareer.bulkCreate(userCareerList);
  } catch (err) {
    throw err;
  }
}

async function updateUserCareer(userCareer) {
  try {
    await UserCareer.update(userCareer, {
      where: {
        id: userCareer.id,
      },
    });
    return await getUserCareer(userCareer.id);
  } catch (err) {
    throw err;
  }
}

async function deleteUserCareer(id) {
  try {
    return await UserCareer.destroy({
      where: { id: id },
    });
  } catch (err) {
    throw err;
  }
}

async function getUserCareers() {
  try {
    let userCareers = await UserCareer.findAll();
    return userCareers;
  } catch (err) {
    throw err;
  }
}

async function getUserCareer(id) {
  try {
    let userCareer = await UserCareer.findByPk(id);
    return userCareer;
  } catch (err) {
    throw err;
  }
}

async function getUserCareerByUserId(id) {
  try {
    let userCareers = await UserCareer.findAll({
      where: {
        userId: id,
      },
      include: [
        {
          model: User,
        },
      ],
    });
    userCareers.map((uc) => {
      return delete uc.dataValues.user.dataValues.password;
    });
    return userCareers;
  } catch (err) {
    throw err;
  }
}

async function getUserCareerByCareerId(id) {
  try {
    return await UserCareer.findAll({
      where: {
        careerId: id,
      },
      include: [
        {
          model: Career,
        },
      ],
    });
  } catch (err) {
    throw err;
  }
}

export default {
  createUserCareer,
  createUserCareers,
  getUserCareer,
  getUserCareers,
  updateUserCareer,
  deleteUserCareer,
  getUserCareerByUserId,
  getUserCareerByCareerId,
};
