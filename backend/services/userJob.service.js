import userJobRepository from '../repositories/userJob.repository.js';

async function createUserJob(userJobList) {
  if (userJobList.length === 1) {
    const userJob = userJobList[0];
    return await userJobRepository.createUserJob(userJob);
  } else {
    return await userJobRepository.createUserJobs(userJobList);
  }
}

async function updateUserJob(userJob, loggedUser) {
  if (loggedUser.type === 'admin') {
    return await userJobRepository.updateUserJob(userJob);
  } else {
    throw new Error(`User does not have the privilege to perform this action!`);
  }
}

async function deleteUserJob(id, loggedUser) {
  if (loggedUser.type === 'admin') {
    return await userJobRepository.deleteUserJob(id);
  } else {
    throw new Error(`User does not have the privilege to perform this action!`);
  }
}

async function getUserJobs(userId) {
  if (userId) {
    return await userJobRepository.getUserJobByUserId(userId);
  }
  return await userJobRepository.getUserJobs();
}

async function getUserJob(id) {
  return await userJobRepository.getUserJob(id);
}

export default {
  createUserJob,
  updateUserJob,
  deleteUserJob,
  getUserJobs,
  getUserJob,
};
