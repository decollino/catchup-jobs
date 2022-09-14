import UserCode from '../models/userCode.model.js';

async function registerUserCode(userId, code, codeToken) {
  try {
    const newUserCode = {
      userId: userId,
      code: code,
      codeToken: codeToken,
    };
    return await UserCode.create(newUserCode);
  } catch (err) {
    throw err;
  }
}

async function getUserCodeById(userId) {
  try {
    let userCode = await UserCode.findOne({
      where: {
        userId: userId,
      },
      raw: true,
    });
    return userCode;
  } catch (err) {
    throw err;
  }
}

async function deleteUserCode(id) {
  try {
    return await UserCode.destroy({
      where: { id: id },
    });
  } catch (err) {
    throw err;
  }
}

export default {
  registerUserCode,
  getUserCodeById,
  deleteUserCode,
};
