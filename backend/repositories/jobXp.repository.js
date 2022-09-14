import User from '../models/user.model.js';
import JobXp from '../models/jobXp.model.js';

async function createJobXp(jobXp) {
  try {
    return await JobXp.create(jobXp);
  } catch (err) {
    throw err;
  }
}

async function createJobsXps(jobXpList) {
  try {
    return await JobXp.bulkCreate(jobXpList);
  } catch (err) {
    throw err;
  }
}

async function updateJobXp(jobXp) {
  try {
    await JobXp.update(jobXp, {
      where: {
        id: jobXp.id,
      },
    });
    return await getJobXp(jobXp.id);
  } catch (err) {
    throw err;
  }
}

async function deleteJobXp(id) {
  try {
    return await JobXp.destroy({
      where: { id: id },
    });
  } catch (err) {
    throw err;
  }
}

async function getJobXps() {
  try {
    let jobXps = await JobXp.findAll();
    return jobXps;
  } catch (err) {
    throw err;
  }
}

async function getJobXp(id) {
  try {
    let jobXp = await JobXp.findByPk(id);
    return jobXp;
  } catch (err) {
    throw err;
  }
}

async function getJobXpByUserId(id) {
  try {
    return await JobXp.findAll({
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
  createJobXp,
  createJobsXps,
  getJobXp,
  getJobXps,
  updateJobXp,
  deleteJobXp,
  getJobXpByUserId,
};
