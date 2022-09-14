import Language from '../models/language.model.js';
import User from '../models/user.model.js';
import UserLanguage from '../models/userLanguage.model.js';

async function createUserLanguage(userLanguage) {
  try {
    return await UserLanguage.create(userLanguage);
  } catch (err) {
    throw err;
  }
}

async function createUsersLanguages(userLanguageList) {
  try {
    return await UserLanguage.bulkCreate(userLanguageList);
  } catch (err) {
    throw err;
  }
}

async function updateUserLanguage(userLanguage) {
  try {
    await UserLanguage.update(userLanguage, {
      where: {
        id: userLanguage.id,
      },
    });
    return await getUserLanguage(userLanguage.id);
  } catch (err) {
    throw err;
  }
}

async function deleteUserLanguage(id) {
  try {
    return await UserLanguage.destroy({
      where: { id: id },
    });
  } catch (err) {
    throw err;
  }
}

async function getUserLanguages() {
  console.log('getUserLanguages ');
  try {
    let userLanguages = await UserLanguage.findAll();
    return userLanguages;
  } catch (err) {
    throw err;
  }
}

async function getUserLanguage(id) {
  try {
    let userLanguage = await UserLanguage.findByPk(id);
    return userLanguage;
  } catch (err) {
    throw err;
  }
}

async function getUserLanguageByUserId(id) {
  console.log('getUserLanguageByUserId ');
  try {
    return await UserLanguage.findAll({
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

async function getUserLanguageByLanguageId(id) {
  console.log('getUserLanguageByLanguageId ');
  try {
    return await UserLanguage.findAll({
      where: {
        languageId: id,
      },
      include: [
        {
          model: Language,
        },
      ],
    });
  } catch (err) {
    throw err;
  }
}

export default {
  createUserLanguage,
  createUsersLanguages,
  getUserLanguage,
  getUserLanguages,
  updateUserLanguage,
  deleteUserLanguage,
  getUserLanguageByUserId,
  getUserLanguageByLanguageId,
};
