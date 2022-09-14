import Language from '../models/language.model.js';

async function createLanguage(language) {
  try {
    return await Language.create(language);
  } catch (err) {
    throw err;
  }
}

async function updateLanguage(language) {
  try {
    await Language.update(language, {
      where: {
        id: language.id,
      },
    });
    return await getLanguage(language.id);
  } catch (err) {
    throw err;
  }
}

async function deleteLanguage(id) {
  try {
    return await Language.destroy({
      where: { id: id },
    });
  } catch (err) {
    throw err;
  }
}

async function getLanguages() {
  try {
    let languages = await Language.findAll();
    return languages;
  } catch (err) {
    throw err;
  }
}

async function getLanguage(id) {
  try {
    let language = await Language.findByPk(id);
    return language;
  } catch (err) {
    throw err;
  }
}

export default {
  createLanguage,
  updateLanguage,
  deleteLanguage,
  getLanguages,
  getLanguage,
};
