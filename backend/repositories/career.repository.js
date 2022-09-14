import Career from '../models/career.model.js';

async function createCareer(career) {
  try {
    return await Career.create(career);
  } catch (err) {
    throw err;
  }
}

async function updateCareer(career) {
  try {
    await Career.update(career, {
      where: {
        id: career.id,
      },
    });
    return await getCareer(career.id);
  } catch (err) {
    throw err;
  }
}

async function deleteCareer(id) {
  try {
    return await Career.destroy({
      where: { id: id },
    });
  } catch (err) {
    throw err;
  }
}

async function getCareers() {
  try {
    let careers = await Career.findAll();
    return careers;
  } catch (err) {
    throw err;
  }
}

async function getCareer(id) {
  try {
    let career = await Career.findByPk(id);
    return career;
  } catch (err) {
    throw err;
  }
}

export default {
  createCareer,
  updateCareer,
  deleteCareer,
  getCareers,
  getCareer,
};
