import careerRepository from '../repositories/career.repository.js';

async function createCareer(career) {
  await careerRepository.createCareer(career);
}

async function updateCareer(career) {
  return await careerRepository.updateCareer(career);
}

async function deleteCareer(id) {
  return await careerRepository.deleteCareer(id);
  // const books = await bookRepository.getBookByCareerId(id);
  // if (books.length !== 0) {
  //   throw new Error(
  //     'Forbidden deletion! There are books registered for this career!'
  //   );
  // } else {
  //   return await careerRepository.deleteCareer(id);
  // }
}

async function getCareers() {
  return await careerRepository.getCareers();
}

async function getCareer(id) {
  return await careerRepository.getCareer(id);
}

export default {
  createCareer,
  updateCareer,
  deleteCareer,
  getCareers,
  getCareer,
};
