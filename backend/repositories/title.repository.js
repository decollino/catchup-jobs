import Title from '../models/title.model.js';

async function createTitle(title) {
  try {
    return await Title.create(title);
  } catch (err) {
    throw err;
  }
}

async function updateTitle(title) {
  try {
    await Title.update(title, {
      where: {
        id: title.id,
      },
    });
    return await getTitle(title.id);
  } catch (err) {
    throw err;
  }
}

async function deleteTitle(id) {
  try {
    return await Title.destroy({
      where: { id: id },
    });
  } catch (err) {
    throw err;
  }
}

async function getTitles() {
  try {
    let titles = await Title.findAll();
    return titles;
  } catch (err) {
    throw err;
  }
}

async function getTitle(id) {
  try {
    let title = await Title.findByPk(id);
    return title;
  } catch (err) {
    throw err;
  }
}

export default {
  createTitle,
  updateTitle,
  deleteTitle,
  getTitles,
  getTitle,
};
