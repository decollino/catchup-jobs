import jobXpRepository from '../repositories/jobXp.repository.js';

async function createJobXp(jobXpList) {
  if (jobXpList.length === 1) {
    const jobXp = jobXpList[0];
    await jobXpRepository.createJobXp(jobXp);
  } else {
    await jobXpRepository.createJobsXps(jobXpList);
  }
}

async function updateJobXp(jobXp) {
  return await jobXpRepository.updateJobXp(jobXp);
}

async function deleteJobXp(id) {
  return await jobXpRepository.deleteJobXp(id);
}

async function getJobXps(userId) {
  if (userId) {
    return await jobXpRepository.getJobXpByUserId(userId);
  }
  return await jobXpRepository.getJobXps();
}

async function getJobXp(id) {
  return await jobXpRepository.getJobXp(id);
}

export default {
  createJobXp,
  updateJobXp,
  deleteJobXp,
  getJobXps,
  getJobXp,
};
