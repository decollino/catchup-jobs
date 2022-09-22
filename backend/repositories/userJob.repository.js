import User from '../models/user.model.js';
import UserJob from '../models/userJob.model.js';

async function createUserJob(userJob) {
  try {
    return await UserJob.create(userJob);
  } catch (err) {
    throw err;
  }
}

async function createUserJobs(userJobList) {
  try {
    return await UserJob.bulkCreate(userJobList);
  } catch (err) {
    throw err;
  }
}

async function updateUserJob(userJob) {
  try {
    await UserJob.update(userJob, {
      where: {
        id: userJob.id,
      },
    });
    return await getUserJob(userJob.id);
  } catch (err) {
    throw err;
  }
}

async function deleteUserJob(id) {
  try {
    return await UserJob.destroy({
      where: { id: id },
    });
  } catch (err) {
    throw err;
  }
}

async function getUserJobs() {
  try {
    let userJobs = await UserJob.findAll();
    return userJobs;
  } catch (err) {
    throw err;
  }
}

async function getUserJob(id) {
  try {
    let userJob = await UserJob.findByPk(id);
    return userJob;
  } catch (err) {
    throw err;
  }
}

async function getUserJobByUserId(id) {
  try {
    return await UserJob.findAll({
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

export default {
  createUserJob,
  createUserJobs,
  getUserJob,
  getUserJobs,
  updateUserJob,
  deleteUserJob,
  getUserJobByUserId,
};
