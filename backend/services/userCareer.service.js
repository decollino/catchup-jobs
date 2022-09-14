import userCareerRepository from '../repositories/userCareer.repository.js';

async function createUserCareer(userCareerList, loggedUser) {
  if (loggedUser.type !== 'admin') {
    userCareerList.map((userCareer) => {
      if (userCareer.userId !== loggedUser.id) {
        throw new Error(
          `User does not have the privilege to perform this action!`
        );
      }
    });
  }

  // const userCareerByUserId = await userCareerRepository.getUserCareerByUserId(
  //   userCareerList[0].userId
  // );
  // const userCareerId = userCareerByUserId.map((userCareer) => {
  //   return userCareer.dataValues.careerId;
  // });
  // console.log('userCareerId: ', userCareerId);

  if (userCareerList.length === 1) {
    const userCareer = userCareerList[0];
    await userCareerRepository.createUserCareer(userCareer);
  } else {
    await userCareerRepository.createUserCareers(userCareerList);
  }
}

async function updateUserCareer(userCareer, loggedUser) {
  if (userCareer.id === loggedUser.id || loggedUser.type === 'admin') {
    return await userCareerRepository.updateUserCareer(userCareer);
  } else {
    throw new Error(`User does not have the privilege to perform this action!`);
  }
}

async function deleteUserCareer(id, loggedUser) {
  if (id === loggedUser.id || loggedUser.type === 'admin') {
    return await userCareerRepository.deleteUserCareer(id);
  } else {
    throw new Error(`User does not have the privilege to perform this action!`);
  }
}

async function getUserCareers(userId, careerId, loggedUser) {
  if (userId) {
    if (userId === loggedUser.id || loggedUser.type === 'admin') {
      return await userCareerRepository.getUserCareerByUserId(userId);
    } else {
      throw new Error(
        `User does not have the privilege to perform this action!`
      );
    }
  }

  if (careerId) {
    if (loggedUser.type === 'admin') {
      return await userCareerRepository.getUserCareerByCareerId(careerId);
    } else {
      throw new Error(
        `User does not have the privilege to perform this action!`
      );
    }
  }

  if (loggedUser.type === 'admin') {
    return await userCareerRepository.getUserCareers();
  } else {
    throw new Error(`User does not have the privilege to perform this action!`);
  }
}

async function getUserCareer(id, loggedUser) {
  const userCareer = await userCareerRepository.getUserCareer(id);
  if (userCareer.userId === loggedUser.id || loggedUser.type === 'admin') {
    return userCareer;
  } else {
    throw new Error(`User does not have the privilege to perform this action!`);
  }
}

export default {
  createUserCareer,
  updateUserCareer,
  deleteUserCareer,
  getUserCareers,
  getUserCareer,
};
