import User from '../models/user.model.js';
import UserEducation from '../models/userEducation.model.js';

async function createUserEducation(userEducation) {
  try {
    return await UserEducation.create(userEducation);
  } catch (err) {
    throw err;
  }
}

async function createUserEducations(userEducationList) {
  try {
    return await UserEducation.bulkCreate(userEducationList);
  } catch (err) {
    throw err;
  }
}

async function updateUserEducation(userEducation) {
  try {
    await UserEducation.update(userEducation, {
      where: {
        id: userEducation.id,
      },
    });
    return await getUserEducation(userEducation.id);
  } catch (err) {
    throw err;
  }
}

async function deleteUserEducation(id) {
  try {
    return await UserEducation.destroy({
      where: { id: id },
    });
  } catch (err) {
    throw err;
  }
}

async function getUserEducations() {
  try {
    let userEducations = await UserEducation.findAll();
    return userEducations;
  } catch (err) {
    throw err;
  }
}

async function getUserEducation(id) {
  try {
    let userEducation = await UserEducation.findByPk(id);
    return userEducation;
  } catch (err) {
    throw err;
  }
}

async function getUserEducationByUserId(id) {
  try {
    return await UserEducation.findAll({
      where: {
        userId: id,
      },
      include: [
        {
          model: User,
        },
      ],
    });
  } catch (err) {
    throw err;
  }
}

async function getUserEducationByEducationId(id) {
  try {
    return await UserEducation.findAll({
      where: {
        educationId: id,
      },
      include: [
        {
          model: Education,
        },
      ],
    });
  } catch (err) {
    throw err;
  }
}

export default {
  createUserEducation,
  createUserEducations,
  getUserEducation,
  getUserEducations,
  updateUserEducation,
  deleteUserEducation,
  getUserEducationByUserId,
  getUserEducationByEducationId,
};
